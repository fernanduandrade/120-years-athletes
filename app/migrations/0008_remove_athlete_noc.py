# Generated by Django 3.2.7 on 2021-09-10 00:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_athlete_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='athlete',
            name='noc',
        ),
    ]
