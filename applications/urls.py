from django.urls import path
from .views import ImmigrationApplicationView, createImmigrationApplicationView, updateImmigrationApplicationView, deleteImmigrationApplicationView
urlpatterns = [
    path('ImmApplications/', ImmigrationApplicationView.as_view()),
    path('create/', createImmigrationApplicationView.as_view()),
    path('update/<int:pk>/', updateImmigrationApplicationView.as_view()),
    path('delete/<int:pk>/', deleteImmigrationApplicationView.as_view()),
]