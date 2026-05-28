from rest_framework import serializers
from .models import ImmigrationApplication

class ImmigrationApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImmigrationApplication
        fields = '__all__'
        read_only_fields = ['user']