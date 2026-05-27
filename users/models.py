from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    country_of_citizenship = models.CharField(max_length=100, blank=True)
    current_status = models.CharField(max_length=100, blank=True)
    immigration_goal = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
       return self.username
