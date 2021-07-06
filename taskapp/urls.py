from django.urls import path 
from . import views 


urlpatterns = [
    path("", views.register, name="register"),
    path("welcome/", views.home, name="home"),
    path("loginform/", views.loginform, name="loginform")
]