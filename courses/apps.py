from django.apps import AppConfig


class CoursesConfig(AppConfig):
    name = 'courses'
    
    def ready(self):
    			# import signal handler
    			import courses.signals