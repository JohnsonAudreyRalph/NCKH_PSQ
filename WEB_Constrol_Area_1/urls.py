from django.urls import path
from .views import *
app_name = 'AREA_1'
urlpatterns = [
    path('', home),
    path('On_Click/', On_Click),
    path('Off_Click/', Off_Click),
    path('Get_JSON/', Get_JSON.as_view())
]