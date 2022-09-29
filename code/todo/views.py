from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Object

class ObjectView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Object.objects.all()