# Generated by Django 4.2.16 on 2024-12-25 00:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_product_creation_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='totalPrice',
        ),
    ]
