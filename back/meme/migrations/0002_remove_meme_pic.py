# Generated by Django 3.0.2 on 2020-01-07 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meme', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meme',
            name='pic',
        ),
    ]
