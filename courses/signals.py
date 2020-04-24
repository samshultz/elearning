import os
from django.conf import settings
from django.db.models.signals import post_save
from django.utils.text import slugify
from django.dispatch import receiver
from .models import File, Image, Video

@receiver(post_save, sender=Image)
def rename_image(sender, instance, created, *args, **kwargs):
			if created:
						initial_path = instance.file.path
						_, ext = os.path.splitext(instance.file.path)
						new_name = os.path.join("images", "{}{}".format(slugify(instance.title), ext))
						instance.file.name = new_name
						new_path = settings.MEDIA_ROOT + instance.file.name
						os.rename(initial_path, new_path)
						instance.save()

@receiver(post_save, sender=File)
def rename_file(sender, instance, created, *args, **kwargs):
			if created:
						initial_path = instance.file.path
						_, ext = os.path.splitext(instance.file.path)
						new_name = os.path.join("images", "{}{}".format(slugify(instance.title), ext))
						instance.file.name = new_name
						new_path = settings.MEDIA_ROOT + instance.file.name
						os.rename(initial_path, new_path)
						instance.save()
			