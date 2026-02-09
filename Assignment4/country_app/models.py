from django.db import models

# Create your models here.
from django.db import models

class Country(models.Model):
    name= models.CharField(max_length=100)
    photo= models.ImageField(upload_to='countries/')
    description= models.TextField()

    def __str__(self):
        return self.name