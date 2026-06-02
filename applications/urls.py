from django.urls import path
from .views import ListImmigrationStreamView, CreateImmigrationStreamView, ImmigrationApplicationView, ListImmigrationStreamView, RecommendedStreamsView, createImmigrationApplicationView, updateImmigrationApplicationView, deleteImmigrationApplicationView
urlpatterns = [
    path('ImmApplications/', ImmigrationApplicationView.as_view()),
    path('create/', createImmigrationApplicationView.as_view()),
    path('update/<int:pk>/', updateImmigrationApplicationView.as_view()),
    path('delete/<int:pk>/', deleteImmigrationApplicationView.as_view()),
    path('streams/', ListImmigrationStreamView.as_view()),
    path('create_stream/', CreateImmigrationStreamView.as_view()),
    path('recommended_streams/', RecommendedStreamsView.as_view()),
]