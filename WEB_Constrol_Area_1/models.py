from telnetlib import STATUS
from django.db import models

# Create your models here.
class Constrol_WEB_Area_1_model(models.Model):
    STATUS = models.IntegerField(default = 0)