from django.shortcuts import render
from allauth.account.forms import SignupForm

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView, RegisterView

from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

from rest_framework.decorators import api_view, APIView
from rest_auth.registration.serializers import VerifyEmailSerializer
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_auth.registration.views import SocialLoginView, RegisterView
from rest_framework import status

from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC


class RegisterViewToken(RegisterView):
    authentication_classes = ()


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

def instructor_signup(request):
    return render(request, 'account/instructor_signup.html', {'form': SignupForm})



@api_view()
def django_rest_auth_null(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)

class VerifyEmailView(APIView):
    permission_classes = (AllowAny,)
    allowed_methods = ('POST', 'OPTIONS', 'HEAD')

    def get_serializer(self, *args, **kwargs):
        return VerifyEmailSerializer(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.kwargs['key'] = serializer.validated_data['key']
        try:
            confirmation = self.get_object()
            confirmation.confirm(self.request)
            return Response({'detail': _('Successfully confirmed email.')}, status=status.HTTP_200_OK)
        except EmailConfirmation.DoesNotExist:
            return Response({'detail': _('Error. Incorrect key.')}, status=status.HTTP_404_NOT_FOUND)

    def get_object(self, queryset=None):
        key = self.kwargs['key']
        emailconfirmation = EmailConfirmationHMAC.from_key(key)
        if not emailconfirmation:
            if queryset is None:
                queryset = self.get_queryset()
            try:
                emailconfirmation = queryset.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                raise EmailConfirmation.DoesNotExist
        return emailconfirmation

    def get_queryset(self):
        qs = EmailConfirmation.objects.all_valid()
        qs = qs.select_related("email_address__user")
        return qs
