from django.db import models
from django.conf import settings
from django.template.loader import render_to_string
from django.utils .safestring import mark_safe
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.utils.text import slugify
from django.core.validators import FileExtensionValidator

from taggit.managers import TaggableManager

from .fields import OrderField


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = 'name',
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name


class Course(models.Model):
    BEGINNER = 'beginner'
    INTERMEDIATE = 'intermediate'
    ADVANCED = 'advanced'

    DIFFICULTY_LEVEL = (
        (BEGINNER, 'Beginner'),
        (INTERMEDIATE, 'Intermediate'),
        (ADVANCED, 'Advanced')
    )

    instructor = models.ForeignKey(settings.AUTH_USER_MODEL,
                                   related_name="courses_created",
                                   on_delete=models.CASCADE)
    # keep track of student enrolled in the course
    students = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                      related_name="courses_enrolled_in",
                                      blank=True)
    category = models.ForeignKey(Category,
                                 related_name="courses",
                                 on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=300, unique=True, blank=True)
    overview = models.TextField()
    intro_video = models.FileField(upload_to="videos/intro",
                                   blank=True,
                                   validators=[
                                       FileExtensionValidator(allowed_extensions=['mp4', 'webm'])])
    difficulty_level = models.CharField(choices=DIFFICULTY_LEVEL,
                                        default=BEGINNER, max_length=13)
    learning_goals = models.TextField(blank=True)
    prerequisites = models.TextField(blank=True)

    tags = TaggableManager()
    price = models.PositiveIntegerField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = '-created',

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Course, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Section(models.Model):
    course = models.ForeignKey(
        Course, related_name="sections", on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    order = OrderField(blank=True, for_fields=['course'])

    def __str__(self):
        return '{}. {}'.format(self.order, self.title)

    class Meta:
        ordering = ['order']


class Content(models.Model):
    section = models.ForeignKey(Section, related_name="contents",
                                on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType,
                                     on_delete=models.CASCADE,
                                     limit_choices_to={
                                         'model__in': (
                                             'text', 'video', 'image', 'file'
                                         )
                                     })
    object_id = models.PositiveIntegerField()
    item = GenericForeignKey('content_type', 'object_id')
    order = OrderField(blank=True, for_fields=['section'])

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.item.title
     
    @property   
    def instructor(self):
        return self.section.course.instructor
        
        
class ItemBase(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              related_name="%(class)s_related",
                              on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('content_detail', kwargs={'pk': self.pk, 'title': self.title, 'model_name': self._meta.model_name})

    def render(self):
        return render_to_string('courses/content/{}.html'.format(
            self._meta.model_name), {'item': self})

    def __str__(self):
        return self.title

    @property
    def instructor(self):
        return self.owner


class Text(ItemBase):
    content = models.TextField()


class File(ItemBase):
    file = models.FileField(upload_to='files')


class Image(ItemBase):
    file = models.FileField(upload_to="images")


class Video(ItemBase):
    url = models.URLField(blank=True)
    file = models.FileField(upload_to="content/videos", blank=True)