from django.contrib import admin
from django.urls import path

from weather.views import WeatherView

urlpatterns = [
    path('week/', WeatherView.as_view(), name='weather'),

]
