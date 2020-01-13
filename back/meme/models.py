from django.db import models
from django.contrib.auth.models import User, AnonymousUser


class Meme(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  #owner = models.ForeignKey(AnonymousUser, on_delete=models.CASCADE, default=None)

  def __str__(self):
    return self.name