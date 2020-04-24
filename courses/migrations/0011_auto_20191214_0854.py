# Generated by Django 2.2.5 on 2019-12-14 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0010_course_intro_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='file',
            field=models.FileField(blank=True, upload_to='content/videos'),
        ),
        migrations.AlterField(
            model_name='video',
            name='url',
            field=models.URLField(blank=True),
        ),
    ]
