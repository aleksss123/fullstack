from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .serializers import MemeSerializer
from .models import Meme


def my_app(request):
  memes = Meme.objects.values()
  return render(request, 'meme/my_app.html', {'memes': memes})

class MemeViewSet(viewsets.ModelViewSet):
  queryset = Meme.objects.all()
  serializer_class = MemeSerializer

  def perform_create(self, serializer):
    serializer.save()

class MemeSelfViewSet(viewsets.ModelViewSet):
  queryset = Meme.objects.all()
  serializer_class = MemeSerializer

  def perform_create(self, serializer):
    serializer.save()
"""
  def get_queryset(self):
    queryset = super(MemeSelfViewSet, self).get_queryset()
    return queryset.filter(owner=self.request.user)
"""