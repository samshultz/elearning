from django import template
from django.contrib.humanize.templatetags.humanize import intcomma

from ..models import Course

register = template.Library()

@register.filter
def model_name(obj):
    try:
        return obj._meta.model_name
    except AttributeError:
        return None


@register.simple_tag
def course_count():
    course_count = Course.objects.count()
    return intcomma(course_count)