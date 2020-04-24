from .base import *

ALLOWED_HOSTS = ['192.168.43.169', '192.168.43.168', '172.18.11.218', 'localhost', '127.0.0.1']

DEBUG = True


SECRET_KEY = env('SECRET_KEY') 
 # '%wwui6_d62q#6*beq*^bz6jj9e4(&e3^7&fkp&%a$h9!q0=x=w'

INSTALLED_APPS += [
    'sslserver',
    'django_extensions',
    'debug_toolbar'
]
INSTALLED_APPS.insert(-1, 'django_cleanup.apps.CleanupConfig')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3')
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

MIDDLEWARE = ['debug_toolbar.middleware.DebugToolbarMiddleware'] + MIDDLEWARE

INTERNAL_IPS = [
    '127.0.0.1',
    'localhost',
    '192.168.43.169'
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:8000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.43.169:3000",
    "http://192.168.43.169:8000",
]