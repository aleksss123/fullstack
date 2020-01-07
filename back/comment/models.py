from django.db import models
from django.contrib.auth.models import User
from meme.models import Meme

class Comment(models.Model):
  text = models.TextField()
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  meme = models.ForeignKey(Meme, on_delete=models.CASCADE)
  
  
  def __str__(self):
    return self.author.username + ' -> ' + self.meme.name + ': ' + self.text