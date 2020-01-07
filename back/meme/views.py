from django.shortcuts import render
from django.http import HttpResponse
from .models import Meme


def my_app(request):
  memes = Meme.objects.values()
  return render(request, 'meme/my_app.html', {'memes': memes})