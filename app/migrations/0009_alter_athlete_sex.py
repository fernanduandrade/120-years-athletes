# Generated by Django 3.2.7 on 2021-09-11 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_remove_athlete_noc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='athlete',
            name='sex',
            field=models.CharField(max_length=40),
        ),
    ]