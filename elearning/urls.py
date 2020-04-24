
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.urls import path, re_path, include


from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from courses.views import home
from users.views import (
    instructor_signup,
    FacebookLogin,
    RegisterViewToken,
    django_rest_auth_null,
    VerifyEmailView
)


schema_view = get_schema_view(
    openapi.Info(
        title="Knowdemy API",
        default_version='v1',
        description="Knowdemy API for your projects",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="admin@site.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=False,
    # permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),
    path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')), 
    path('admin/', admin.site.urls),

    path('accounts/', include('allauth.urls')),
    path('accounts/instructors/signup',
         instructor_signup, name="instructor_signup"),

    path('course/', include('courses.urls')),

    # API entry point
    path('api/', schema_view.with_ui('redoc', cache_timeout=0)),

    # API URLs for the courses app
    path('api/courses/', include('courses.api.urls')),

    # API Authentication URLs

    path('api/auth/', include('rest_auth.urls')),
    path('api/auth/registration/',
         csrf_exempt(RegisterViewToken.as_view()), name="rest_register"),
    path('api/auth/registration/verify-email',
         csrf_exempt(VerifyEmailView.as_view()), name="rest_verify_email"),
    re_path('^api/auth/registration/account-confirm-email/(?P<key>[-:\w]+)/', csrf_exempt(
        django_rest_auth_null), name="account_confirm_email"),

    # this url is used to generate email content
    path('rest-auth/registration/account-email-verification-sent',
         django_rest_auth_null, name='account_email_verification_sent'),
    re_path('^api/auth/password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', django_rest_auth_null,
            name='password_reset_confirm'),
    path('api/auth/facebook/', FacebookLogin.as_view(), name='fb_login'),

    re_path(r'^api(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    # re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc',
                                             cache_timeout=0), name='schema-redoc'),

    path('', home, name='home')
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls)), ]
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)