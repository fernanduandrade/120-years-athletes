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

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=False, null=False)
    sex = models.CharField(max_length=20, choices=CHOICES)
    age = models.CharField(max_length=200)
    team = models.CharField(max_length=100)
    year = models.CharField(max_length=255)
    sport = models.CharField(max_length=100)
    medal = models.CharField(max_length=200, choices=MEDAL_CHOICES)
