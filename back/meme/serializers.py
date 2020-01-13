from rest_framework import serializers
from .models import Meme
from core.serializers import UserSerializer
from comment.serializers import CommentSerializer

class MemeSerializer(serializers.ModelSerializer):
  #owner = UserSerializer(read_only=True)
  class Meta:
    model = Meme
    fields = ('id', 'name', 'description',)
    #read_only_fields = ('comment_set',)
