
from django.shortcuts import render
from rest_framework import generics
from .models import Animal
from .serializers import AnimalSerializer

class AnimalListCreateView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailView(generics.RetrieveUpdateAPIView):
    queryset= Animal.objects.all()
    serializer_class= AnimalSerializer


# Create your views here.
