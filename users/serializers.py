from django.contrib.auth.models import Group
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group


class UserDetailSerializer(serializers.ModelSerializer):
    groups = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['groups', 'username', 'first_name', 'last_name', 'email']

    
class CustomRegisterSerializer(RegisterSerializer):
    last_name = serializers.CharField(max_length=50)
    other_names = serializers.CharField(max_length=100)
    email = serializers.EmailField(max_length=100)
    group = serializers.CharField(required=False, max_length=11)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        
        data_dict['first_name'] = self.validated_data.get('other_names', '')
        data_dict['last_name'] = self.validated_data.get('last_name', '')
        data_dict['email'] = self.validated_data.get('email', '')
        data_dict['groups'] = [self.validated_data.get('group', 'Students')]
        return data_dict

    def save(self, request):
        user = super().save(request)
        group_name = self.get_cleaned_data().get("groups")[0]
        group = Group.objects.get(name=group_name)
        user.groups.add(group)
        return user