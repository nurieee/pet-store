from django.db import models

ANIMAL_CHOICES = (
    ('cat', 'Cat'),
    ('dog', 'Dog'),
)

CAT_CHOICES = (
    ('cl', 'Clothing'),
    ('acc', 'Accessories'),
)


class Pet(models.Model):
    breed = models.CharField(max_length=100)
    description = models.TextField()
    picture = models.ImageField(upload_to='pet_store_fe/static/images/pets/',
                                default='pet_store_fe/static/images/pets/default-pet.png')


class Product(models.Model):
    animal = models.CharField(max_length=100, choices=ANIMAL_CHOICES)
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    category = models.CharField(max_length=100, choices=CAT_CHOICES)
    picture = models.ImageField(upload_to='pet_store_fe/static/images/products/',
                                default='pet_store_fe/static/images/products/default-product.png')
    size = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    description = models.TextField()
