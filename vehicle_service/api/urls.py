from django.urls import path
from .views import components

urlpatterns = [
    path('components/', components),
]