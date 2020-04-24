from django.contrib import admin
from .models import Category, Course, Section, Content

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = 'name', 'slug'
    prepopulated_fields = {'slug': ('name',)}


class SectionInline(admin.StackedInline):
    model = Section


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = 'title', 'category', 'created'
    list_filter = 'created', 'category'
    search_fields = 'title', 'overview'
    prepopulated_fields = {'slug': ('title',)}

    inlines = [SectionInline]
