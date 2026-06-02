from django.urls import path, include
from .views import TestCRScalculatorView
urlpatterns = [
    path('calculate/', TestCRScalculatorView.as_view()),
]