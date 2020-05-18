from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Pet, Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'is_superuser', 'username')

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')

        user_obj = User(username=username)
        user_obj.set_password(password)
        user_obj.save()

        return user_obj


class PetSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Pet
        fields = ('id', 'breed', 'picture', 'description', 'picture_url')

    def get_picture_url(self, obj):
        return obj.picture.url.replace('pet_store_fe/', '')

class ProductSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField(read_only=True)
    category_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'animal', 'price', 'category', 'picture', 'size', 'color', 'description', 'picture_url', 'name',
                  'category_name')

    def get_picture_url(self, obj):
        return obj.picture.url.replace('pet_store_fe/', '')

    def get_category_name(self, obj):
        return obj.get_category_display()
