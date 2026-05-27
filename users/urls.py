from django.urls import path
from .views import StartView, UserRegistrationView, LoginView, CurrentUserView, editUserView
urlpatterns = [
    path('start/',StartView.as_view()),
    path('register/', UserRegistrationView.as_view()),
    path('login/', LoginView.as_view()),
    path('current-user/', CurrentUserView.as_view()),
    path('edit-user/', editUserView.as_view()),

]