# Generated by Django 4.2.16 on 2024-12-08 12:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_product_creation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='creation_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 12, 8, 12, 37, 32, 872099, tzinfo=datetime.timezone.utc)),
        ),
    ]
