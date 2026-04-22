from django.db import models

# Create your models here.from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()

    def __str__(self):
        return self.name
