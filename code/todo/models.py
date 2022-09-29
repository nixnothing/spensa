from django.db import models

class Object(models.Model):
    fullName = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    phoneNumber = models.CharField(max_length=100)
    email = models.EmailField()