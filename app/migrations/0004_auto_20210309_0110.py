# Generated by Django 3.1.7 on 2021-03-09 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20210309_0039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='athlete',
            name='ID',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
