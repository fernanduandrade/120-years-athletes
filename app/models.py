from django.db import models


class Athlete(models.Model):

    CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female')
    )

    MEDAL_CHOICES = (
        ('Bronze', 'Bronze'),
        ('Silver', 'Silver'),
        ('Gold', 'Gold')
    )

    ID = models.CharField(max_length=255, primary_key=True)
    Name = models.CharField(max_length=200, unique=True, null=False)
    Sex = models.CharField(max_length=20, choices=CHOICES)
    Age = models.CharField(max_length=200)
    Height = models.CharField(max_length=200)
    Weight = models.CharField(max_length=200)
    Team = models.CharField(max_length=100)
    NOC = models.CharField(max_length=3)
    Games = models.CharField(max_length=100)
    Year = models.CharField(max_length=255)
    Season = models.CharField(max_length=255)
    City = models.CharField(max_length=100)
    Sport = models.CharField(max_length=100)
    Event = models.CharField(max_length=100)
    Medal = models.CharField(max_length=200, choices=MEDAL_CHOICES)
