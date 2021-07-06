from django.contrib import auth
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import UserModel
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login

# Create your views here.

def register(request):
    if request.is_ajax():
        name = request.POST["name"]
        email = request.POST["email"]
        password = request.POST["password"]
        phone = request.POST["phone"]
        address = request.POST["address"]
        profile = request.FILES.get('profile')
        user = User.objects.create(username=name, email=email, password = make_password(password))
        UserModel.objects.create(name=user, email=email, address=address,phone=phone, profile=profile)
        messages.success(request, "Registration Successfull!")
        return JsonResponse({"data": "success"})
    return render(request, "register.html")


@login_required
def home(request):
    try:
        context = {
            "user": UserModel.objects.get(name=request.user)
        }
    except:
        return render(request, "login.html")
       
    return render(request, "home.html", context)   

def loginform(request):
     if request.is_ajax():
        name = request.GET["name"]
        email = request.GET["email"]
        password = request.GET["password"]
        user = authenticate(username=name,email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Login Successfully!")
            return JsonResponse({"data": "true"})   
        return JsonResponse({"data": "false"})   
