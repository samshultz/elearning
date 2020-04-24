from rest_framework.permissions import BasePermission
from django.contrib.auth.models import Group


class IsEnrolled(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.section.course.students.filter(id=request.user.id).exists()


class IsContentAuthor(BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):

        return obj.instructor.id == request.user.id


class IsCourseAuthor(BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):

        return obj.instructor.id == request.user.id


class IsInstructor(BasePermission):
    """Checks that the user is an instructor before he/she 
    can create courses"""

    def has_object_permission(self, request, view, obj):

        return Group.objects.filter(name="Instructors").first().user_set\
            .filter(id=request.user.id).exists()