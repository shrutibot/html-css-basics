
from django.shortcuts import render
from rest_framework import generics
from .models import Vehicle
from .serializers import VehicleSerializer

class VehicleListCreateView(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class VehicleDetailView(generics.RetrieveUpdateAPIView):
    queryset= Vehicle.objects.all()
    serializer_class= VehicleSerializer


# Create your views here.
