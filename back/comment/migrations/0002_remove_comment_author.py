# Generated by Django 3.0.2 on 2020-01-12 23:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='author',
        ),
    ]
