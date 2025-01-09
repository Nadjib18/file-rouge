from rest_framework import viewsets
from .models import Product, Category, Order
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    OrderSerializer,
)

# pylint: disable=no-member


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("-creation_date")
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
