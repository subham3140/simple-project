from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserModel(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=400, null=False)
    profile = models.ImageField(upload_to="profile", default="default.jpg")
    phone = models.BigIntegerField()
    address = models.TextField()

    def __str__(self):
        return self.name.username