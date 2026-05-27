from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'country_of_citizenship',
            'current_status',
            'immigration_goal',
            'password',
            
        ]

        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self, validated_data):
            user =User.objects.create_user(
                username=validated_data['username'],
                email=validated_data['email'],
                country_of_citizenship=validated_data.get('country_of_citizenship', ''),
                current_status=validated_data.get('current_status', ''),
                immigration_goal=validated_data.get('immigration_goal', ''),
                password=validated_data['password']
            )
            return user