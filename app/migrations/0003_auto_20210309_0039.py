# Generated by Django 3.1.7 on 2021-03-09 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20210225_1006'),
    ]

    operations = [
        migrations.AlterField(
            model_name='athlete',
            name='ID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
