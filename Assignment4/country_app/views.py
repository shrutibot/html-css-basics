from rest_framework import generics
from .models import Country
from .serializers import CountrySerializer

# List all countries or create a new country
class CountryListCreateView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

# Retrieve, update, or delete a single country
class CountryDetailView(generics.RetrieveUpdateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
