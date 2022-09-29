from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ObjectSerializer
from .models import Object

class ObjectView(viewsets.ModelViewSet):
    serializer_class = ObjectSerializer
    queryset = Object.objects.all()
