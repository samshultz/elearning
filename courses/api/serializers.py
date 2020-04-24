from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
import six

from ..models import (Course,
                      Category,
                      Section,
                      Content,
                      Text,
                      Video,
                      Image,
                      File
                    )
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class CategorySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = 'name',


class NewTagListSerializerField(TagListSerializerField):
    def to_internal_value(self, value):
        if isinstance(value, six.string_types):
            value = value.split(',')

        if not isinstance(value, list):
            self.fail('not_a_list', input_type=type(value).__name__)

        for s in value:
            if not isinstance(s, six.string_types):
                self.fail('not_a_str')

            self.child.run_validation(s)
        return value


class CourseSerializer(TaggitSerializer, serializers.HyperlinkedModelSerializer):
    instructor = UserDetailsSerializer(read_only=True)
    category = CategorySerializer()
    read_only_fields = ["instructor"]
    tags = NewTagListSerializerField()

    class Meta:
        model = Course
        read_only_fields = ['pk']
        # exclude = ('slug', "students")
        fields = (
            'pk', 'instructor', 'category', 'title', 
            'overview', 'intro_video', 'difficulty_level', 
            'learning_goals', 'prerequisites', 'tags', 'price')

    def create(self, validated_data):
        category_data = validated_data.pop('category')

        category_list = list(Category.objects.values_list("name", flat=True))
        if category_data['name'] not in category_list:
            raise serializers.ValidationError(
                f"category value is invalid. Category name must one of these: {category_list}")
        else:
            category = Category.objects.get(name=category_data['name'])
            course = Course.objects.create(
                **validated_data, category_id=category.id)

        return course


class ItemRelatedField(serializers.RelatedField):
    
    def to_representation(self, value):
        return {'item': value.render(), 
                'title': value.title, 
                'model_name': value._meta.model_name
               }


class ContentSerializer(serializers.ModelSerializer):
    item = ItemRelatedField(read_only=True)

    class Meta:
        model = Content
        fields = ['order', 'section_id', 'id', 'item']


class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ('id', 'order', 'title', 'description')
        read_only_fields = ['id', 'order']


class SectionWithContent(serializers.ModelSerializer):
    content = ContentSerializer(read_only=True)
    class Meta:
        model = Section
        exclude = ['description']


class CourseWithContent(serializers.ModelSerializer):
    content  = SectionWithContent(read_only=True)
    class Meta:
        exclude = [""]


class CourseWithSectionSerializer(TaggitSerializer, serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    tags = NewTagListSerializerField()
    category = CategorySerializer()

    class Meta:
        model = Course
        read_only_fields = ['pk']
        fields = (
            'pk', 'instructor', 'category', 'title', 
            'overview', 'intro_video', 'difficulty_level', 
            'learning_goals', 'prerequisites', 'tags',
            'price', 'sections')


class TextSerializer(serializers.ModelSerializer):
    section = serializers.SerializerMethodField('get_section')
    course = serializers.SerializerMethodField('get_course')
    
    def get_section(self, text):
        content = Content.objects.filter(id=text.id).first()
        return content.section.title

    def get_course(self, text):
        content = Content.objects.filter(id=text.id).first()
        return content.section.course.title

    class Meta:
        model = Text
        exclude = ['owner', 'created', 'updated']
        read_only_fields = ['section', 'course']


class ImageSerializer(serializers.ModelSerializer):
    section = serializers.SerializerMethodField('get_section')
    course = serializers.SerializerMethodField('get_course')
    
    def get_section(self, image):
        content = Content.objects.filter(id=image.id).first()
        return content.section.title

    def get_course(self, image):
        content = Content.objects.filter(id=image.id).first()
        return content.section.course.title

    class Meta:
        model = Image
        exclude = ['owner', 'created', 'updated']
        read_only_fields = ['section', 'course']


class VideoSerializer(serializers.ModelSerializer):
    section = serializers.SerializerMethodField('get_section')
    course = serializers.SerializerMethodField('get_course')
    
    def get_section(self, video):
        content = Content.objects.filter(id=video.id).first()
        return content.section.title

    def get_course(self, video):
        content = Content.objects.filter(id=video.id).first()
        return content.section.course.title

    class Meta:
        model = Video
        exclude = ['owner', 'created', 'updated']
        read_only_fields = ['section', 'course']


class FileSerializer(serializers.ModelSerializer):
    section = serializers.SerializerMethodField('get_section')
    course = serializers.SerializerMethodField('get_course')
    
    def get_section(self, file):
        content = Content.objects.filter(id=file.id).first()
        return content.section.title

    def get_course(self, file):
        content = Content.objects.filter(id=file.id).first()
        return content.section.course.title

    class Meta:
        model = File
        exclude = ['owner', 'created', 'updated']
        read_only_fields = ['section', 'course']