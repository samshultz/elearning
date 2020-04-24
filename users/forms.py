# users/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import Group

from allauth.account.forms import SignupForm

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'email')

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('username', 'email')


class CustomSignupForm(SignupForm):
    last_name = forms.CharField()
    first_name = forms.CharField()

    def save(self, request, *args, **kwargs):
        user = super(CustomSignupForm, self).save(request, *args, **kwargs)
        print("="*50)
        print(request.POST)
        print(request.POST.get("first_name"))
        user.last_name = request.POST.get("last_name")
        user.first_name = request.POST.get("first_name")

        usertype = request.POST.get("usertype")
        print("="*36)
        print(usertype)
        if usertype:
            group = Group.objects.get(name=usertype)
            user.groups.add(group)

        return user