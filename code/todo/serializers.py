from rest_framework import serializers # This is important
from .models import Object

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Object
        fields = ('id', 'fullName', 'address', 'phoneNumber', 'email')