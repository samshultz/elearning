from django.apps import apps
from django.db.models import Count
from django.utils.decorators import method_decorator
from django.views.decorators.clickjacking import xframe_options_exempt
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from rest_framework.mixins import UpdateModelMixin
from rest_framework import status

from rest_framework import viewsets

from rest_framework.permissions import (IsAuthenticated,
                                        DjangoModelPermissions
                                        )

from ..models import Course, Section, Category, Content

from .permissions import (IsEnrolled,
                          IsContentAuthor,
                          IsInstructor,
                          IsCourseAuthor
                          )
from .serializers import (CourseSerializer,
                          CourseWithSectionSerializer,
                          SectionSerializer,
                          ContentSerializer,
                          CategorySerializer,
                          TextSerializer,
                          ImageSerializer,
                          VideoSerializer,
                          FileSerializer,
                          CourseWithContent
                          )


class CourseListAPIView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseWithAllContent(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseWithContent

class TopCoursesListAPIView(generics.ListAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self, *args, **kwargs):
        top_courses = Course.objects.annotate(student_count=Count(
        'students')).order_by('-student_count', '-created')[:8]
        return top_courses


class InstructorCourseListAPIView(generics.ListAPIView):
    """Get all courses created by the instructor"""
    # queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated, IsInstructor]

    def get_queryset(self, *args, **kwargs):
        return self.request.user.courses_created.all()


class EnrolledCourseListAPIView(generics.ListAPIView):
    """Get all courses Enrolled by the student"""
    # queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return self.request.user.courses_enrolled_in.all()

@method_decorator(xframe_options_exempt, name="get")
class CourseDetailAPIView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseWithSectionSerializer


class CourseSectionContentAPIView(generics.ListAPIView):
    serializer_class = ContentSerializer
    # lookup_url_kwarg = "course_id"
    permission_classes = [IsAuthenticated, IsContentAuthor | IsEnrolled]

    def get_queryset(self, *args, **kwargs):
        # qs = super(CourseContentAPIView, self).get_queryset(*args, **kwargs)
        course = Course.objects.filter(id=self.kwargs["course_id"])
        qs = Section.objects.filter(
            course_id=course.first().id, id=self.kwargs["section_id"])

        if qs.exists():
            return qs.first().contents.all()


class CourseContentApiView(generics.ListAPIView):
    serializer_class = ContentSerializer
    permission_classes = [IsAuthenticated, IsContentAuthor | IsEnrolled]

    def get_queryset(self, *args, **kwargs):
        course = get_object_or_404(Course, id=self.kwargs["course_id"])
        section_ids = course.sections.values_list('id', flat=True)
        content = Content.objects.filter(section_id__in=section_ids)

        return content


class CourseSectionAPIView(generics.ListAPIView):
    serializer_class = SectionSerializer

    def get_queryset(self, *args, **kwargs):
        # qs = super(CourseContentAPIView, self).get_queryset(*args, **kwargs)
        course = Course.objects.filter(id=self.kwargs["course_id"])
        if course.exists():
            qs = Section.objects.filter(course_id=course.first().id)
            if qs.exists():
                return qs
            return qs
        return ""

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated, DjangoModelPermissions]

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user)


class CourseUpdateView(generics.UpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated, IsCourseAuthor]


class CourseDeleteView(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated, IsCourseAuthor]


class CourseSectionAPICreateView(generics.CreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = [IsAuthenticated, IsCourseAuthor, IsInstructor]

    def perform_create(self, serializer):
        course = Course.objects.filter(id=self.kwargs['pk']).first()
        serializer.save(course_id=course.id)


class CourseSectionDeleteAPIView(generics.DestroyAPIView):
    # queryset = Section.objects.all()
    serializer_class = SectionSerializer
    lookup_url_kwarg = "section_id"
    permission_classes = [IsAuthenticated, IsCourseAuthor, IsInstructor]

    def get_queryset(self, *args, **kwargs):
        course = get_object_or_404(Course, id=self.kwargs['course_id'])
        return course.sections.all()


class CourseSectionUpdateAPIView(generics.UpdateAPIView):
    # queryset = Section.objects.all()
    serializer_class = SectionSerializer
    lookup_url_kwarg = "section_id"
    permission_classes = [IsAuthenticated, IsCourseAuthor, IsInstructor]

    def get_queryset(self, *args, **kwargs):
        course = get_object_or_404(Course, id=self.kwargs['course_id'])
        return course.sections.all()


class CourseContentCreateAPIView(generics.CreateAPIView):
    # queryset = Content.objects.all()
    # serializer_class = ContentSerializer
    permission_classes = [IsAuthenticated, IsCourseAuthor, IsInstructor]

    def get_model(self, model_name):
        if model_name in ['text', 'video', 'image', 'file']:
            return apps.get_model(app_label='courses', model_name=model_name)
        return None

    def get_queryset(self, *args, **kwargs):
        return self.get_model(self.kwargs['model_name']).objects.all()

    def get_serializer_class(self):
        serializer_mapping = {'text': TextSerializer,
                              'video': VideoSerializer,
                              'image': ImageSerializer,
                              'file': FileSerializer
                              }

        return serializer_mapping.get(self.kwargs['model_name'], None)

    def perform_create(self, serializer, *args, **kwargs):
        section = Section.objects.filter(id=self.kwargs['section_id'],
                                         course_id=self.kwargs['course_id'],
                                         course__instructor=self.request.user).first()

        obj = serializer.save(owner=self.request.user)
        # new content
        Content.objects.create(section=section,
                               item=obj)


class CourseContentUpdateAPIView(generics.RetrieveUpdateAPIView):
    # queryset = Content.objects.all()
    lookup_url_kwarg = "content_id"
    lookup_field = "id"
    permission_classes = [IsAuthenticated, IsCourseAuthor, IsInstructor]

    def get_model(self, model_name):
        if model_name in ['text', 'video', 'image', 'file']:
            return apps.get_model(app_label='courses', model_name=model_name)
        return None

    def get_queryset(self, *args, **kwargs):
        content = Content.objects.filter(id=self.kwargs['content_id']).first()
        
        return self.get_model(self.kwargs['model_name']).objects.filter(id=content.object_id)

    def get_serializer_class(self):
        serializer_mapping = {'text': TextSerializer,
                              'video': VideoSerializer,
                              'image': ImageSerializer,
                              'file': FileSerializer
                              }

        return serializer_mapping.get(self.kwargs['model_name'], None)


class CourseContentDeleteAPIView(generics.DestroyAPIView):
    # queryset = Content.objects.all()
    lookup_url_kwarg = "content_id"
    serializer_class = ContentSerializer
    permission_classes = [IsAuthenticated,
                          IsContentAuthor, IsCourseAuthor, IsInstructor]

    def get_queryset(self, *args, **kwargs):
        section = get_object_or_404(
            Section, id=self.kwargs['section_id'], course_id=self.kwargs['course_id'])

        return section.contents.all()
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if not instance:
            return Response({"Not Found": "Content does not exist"}, status=status.HTTP_404_NOT_FOUND)
        self.perform_destroy(instance)
        return Response({"Deleted": f"{instance} deleted successfully"}, status=status.HTTP_200_OK)
    

