from rest_framework import serializers
from .models import ImmigrationApplication, ImmigrationStream, TimelineEvent

class ImmigrationApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImmigrationApplication
        fields = '__all__'
        read_only_fields = ['user']
class ImmigrationStreamSerializer(serializers.ModelSerializer):
     class Meta:
         model = ImmigrationStream
         fields = '__all__'  
class TimelineEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineEvent 
        fields = '__all__'
