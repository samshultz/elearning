from django import forms
from .models import Course, Section
from ckeditor.widgets import CKEditorWidget


class SectionForm(forms.ModelForm):

    class Meta:
        model = Section
        fields = ['title', 'description', 'course']
        widgets = {'course': forms.HiddenInput,
                   "description": CKEditorWidget()}


class CourseForm(forms.ModelForm):

    class Meta:
        model = Course
        fields = ['category', 'title',
                  'slug', 'overview', 'difficulty_level',
                  'learning_goals', 'prerequisites', 'tags', 
                  'price', 'intro_video'
                ]
        widgets = {'learning_goals': CKEditorWidget(), 'prerequisites': CKEditorWidget()}
