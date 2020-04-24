from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy

from django.forms.models import modelform_factory
from django.apps import apps
from django.db.models import Count

from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.base import TemplateResponseMixin, View
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)

from braces.views import CsrfExemptMixin, JsonRequestResponseMixin
from ckeditor.widgets import CKEditorWidget

from .models import Category, Course, Section, Content
from .forms import SectionForm, CourseForm


def home(request):
    
    top_courses = Course.objects.annotate(student_count=Count(
        'students')).order_by('-student_count', '-created')[:8]
    return render(request, "courses/index.html", 
                  {'top_courses': top_courses})


class InstructorMixin:
    def get_queryset(self):
        qs = super(InstructorMixin, self).get_queryset()
        return qs.filter(instructor=self.request.user)


class InstructorEditMixin:
    def form_valid(self, form):
        form.instance.instructor = self.request.user

        return super(InstructorEditMixin, self).form_valid(form)


class InstructorCourseMixin(InstructorMixin, LoginRequiredMixin):
    model = Course
    
    success_url = reverse_lazy('manage_course_list')


class InstructorCourseEditMixin(InstructorCourseMixin, InstructorEditMixin):
    form_class = CourseForm
    
    success_lazy = reverse_lazy('manage_course_list')
    template_name = 'courses/manage/course/form.html'

    

class ManageCourseListView(InstructorCourseMixin, ListView):
				paginate_by = 20
				template_name = 'courses/manage/course/list.html'


class CourseCreateView(PermissionRequiredMixin, InstructorCourseEditMixin, CreateView):
    permission_required = 'courses.add_course'


class CourseUpdateView(PermissionRequiredMixin, InstructorCourseEditMixin, UpdateView):
    permission_required = 'courses.change_course'
    

class CourseDeleteView(PermissionRequiredMixin, InstructorCourseMixin, DeleteView):
    template_name = 'courses/manage/course/delete.html'
    success_url = reverse_lazy('manage_course_list')
    permission_required = 'courses.delete_course'


class CourseSectionUpdateView(TemplateResponseMixin, View):
    template_name = "courses/manage/module/section.html"
    course = None

    def dispatch(self, request, pk, *args, **kwargs):
        self.course = get_object_or_404(Course, id=pk, instructor=request.user)
        return super(CourseSectionUpdateView, self).dispatch(request, pk, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        section_form = SectionForm(initial={"course": self.course})
        return self.render_to_response({'course': self.course, 'section_form': section_form})

    def post(self, request, *args, **kwargs):
        section_form = SectionForm(data=request.POST)
        if section_form.is_valid():
            section_form.save()
            return redirect('course_edit', self.course.id)
        return self.render_to_response({'course': self.course,
                                        'section_form': section_form})


class ContentCreateUpdateView(TemplateResponseMixin, View):
    section = None
    model = None
    obj = None
    template_name = 'courses/manage/content/form.html'

    def get_model(self, model_name):
        if model_name in ['text', 'video', 'image', 'file']:
            return apps.get_model(app_label='courses', model_name=model_name)
        return None

    def get_form(self, model, *args, **kwargs):
        Form = modelform_factory(model, 
        																					exclude=['owner',
                                           'order',
                                           'created',
                                           'updated'], 
                                 	widgets={'content': CKEditorWidget()})
        return Form(*args, **kwargs)

    def dispatch(self, request, section_id, model_name, id=None, *args, **kwargs):
        self.section = get_object_or_404(Section,
                                         id=section_id,
                                         course__instructor=request.user)
        self.model = self.get_model(model_name)
        if id:
            self.obj = get_object_or_404(
                self.model, id=id, owner=request.user)

        return super(ContentCreateUpdateView, self).dispatch(request,
                                                             section_id,
                                                             model_name,
                                                             id,
                                                             *args,
                                                             **kwargs)

    def get(self, request, section_id, model_name, id=None):
        form = self.get_form(self.model, instance=self.obj)
        return self.render_to_response({'form': form, 'object': self.obj})

    def post(self, request, section_id, model_name, id=None):
        form = self.get_form(self.model,
                             instance=self.obj,
                             data=request.POST,
                             files=request.FILES)
        if form.is_valid():
            obj = form.save(commit=False)
            obj.owner = request.user
            obj.save()
            if not id:
                # new content
                Content.objects.create(section=self.section,
                                       item=obj)
            return redirect('course_edit', self.section.course.id)
        return self.render_to_response({'form': form,
                                        'object': self.obj})


class ContentDeleteView(View):

    def post(self, request, id):

        content = get_object_or_404(Content,
                                    id=id,
                                    section__course__instructor=request.user)
        section = content.section
        content.item.delete()
        content.delete()
        return redirect('course_edit', section.course.id)


class SectionOrderView(CsrfExemptMixin, JsonRequestResponseMixin, View):

    def post(self, request):
        for id, order in self.request_json.items():
            Section.objects.filter(id=id,
                                   course__instructor=request.user)\
                .update(order=order)
        return self.render_json_response({'saved': 'OK'})


class ContentOrderView(CsrfExemptMixin, JsonRequestResponseMixin, View):

    def post(self, request):
        for id, order in self.request_json.items():
            Content.objects.filter(id=id,
                                   section__course__instructor=request.user)\
                .update(order=order)
        return self.render_json_response({'saved': 'OK'})


class CourseListView(ListView):
    model = Course
    template_name = 'courses/course/list.html'
    paginate_by = 20
    category = None

    def get_queryset(self, category=None, *args, **kwargs):
    

        key = {'newest': "-created", "oldest": "created", 
               "ascending": "title", "descending": "-title"}

        sort_method = self.request.GET.get("sort")

        self.categories = Category.objects.annotate(
            total_courses=Count('courses')  
        )
        self.courses = Course.objects.annotate(total_sections=Count('sections'))
							
        if sort_method:
            self.courses = self.courses.order_by(key[sort_method])


        if category:
            self.category = get_object_or_404(Category, slug=category)
            self.courses = self.courses.filter(category=self.category)
        
        return self.courses

    def get_context_data(self, **kwargs):
        context = super(CourseListView, self).get_context_data(**kwargs)
        
        context['categories'] = self.categories
        context['category'] = self.category or ''
        return context
    


class CourseDetailView(DetailView):
    model = Course
    template_name = 'courses/course/detail.html'


class ContentDetailView(TemplateResponseMixin, View):
    model = None
    template_name = 'courses/content/content_detail.html'

    def get_model(self, model_name):
        if model_name in ['text', 'video', 'image', 'file']:
            return apps.get_model(app_label='courses', model_name=model_name)
        return None
    
    # def get_queryset(self, *args, **kwargs):
    #     queryset = super(ContentDetailView, self).get_queryset(*args, **kwargs)
    #     model = self.get_model(self.kwargs['model_name'])

    #     self.queryset = get_object_or_404(model, id=self.kwargs['pk'], title=self.kwargs['title'])
    #     return self.queryset

    def dispatch(self, request, model_name, pk, title, *args, **kwargs):
        
        self.model = self.get_model(model_name)
        self.obj = get_object_or_404(self.model, id=pk, title=title)

        return super(ContentDetailView, self).dispatch(request,
                                                             model_name,
                                                             pk,
                                                             title,
                                                             *args,
                                                             **kwargs)

    def get(self, request, *args, **kwargs):
        
        return self.render_to_response({'content': self.obj})
        