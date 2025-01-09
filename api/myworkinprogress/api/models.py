from django.utils import timezone
from django.db import models


# pylint: disable=invalid-str-returned


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, null=False)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True, null=False)
    description = models.TextField(null=False)
    imageFile = models.CharField(max_length=100, unique=True, null=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False)
    category = models.ForeignKey(
        Category, related_name="products", on_delete=models.CASCADE, default=None
    )
    creation_date = models.DateTimeField(default=timezone.now, blank=False)

    def __str__(self):
        return self.name


class Order(models.Model):
    creation_date = models.DateTimeField(auto_now_add=True)
    orderDetail = models.JSONField(null=True)

    def __str__(self):
        return f"Commande effectuée le {self.creation_date}, prix total: {self.totalPrice} euros"
