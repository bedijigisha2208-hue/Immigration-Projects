from django.urls import path
from .views import CreateTimelineEventView, DashboardView, ListImmigrationStreamView, CreateImmigrationStreamView, ImmigrationApplicationView, ListImmigrationStreamView, ListTimelineEventsView, RecommendedStreamsView, createImmigrationApplicationView, updateImmigrationApplicationView, deleteImmigrationApplicationView
urlpatterns = [
    path('ImmApplications/', ImmigrationApplicationView.as_view()),
    path('create/', createImmigrationApplicationView.as_view()),
    path('update/<int:pk>/', updateImmigrationApplicationView.as_view()),
    path('delete/<int:pk>/', deleteImmigrationApplicationView.as_view()),
    path('streams/', ListImmigrationStreamView.as_view()),
    path('create_stream/', CreateImmigrationStreamView.as_view()),
    path('recommended_streams/', RecommendedStreamsView.as_view()),
    path('timeline/<int:application_id>/', ListTimelineEventsView.as_view()),
    path('create_timeline/', CreateTimelineEventView.as_view()),
    path('dashboard/<int:application_id>/', DashboardView.as_view()),
]