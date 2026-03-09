from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.text import slugify

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20)

    OFFICE_CHOICES = [
        ('kathmandu','Kathmandu'),
        ('pokhara','Pokhara'),
        ('dharan','Dharan'),
        ('butwal','Butwal'),
        ('chitwan','Chitwan'),
    ]

    QUESTION_CHOICES = [
        ('course','Course'),
        ('visa','Visa'),
        ('preparation','Language Preparation'),
        ('testvoucher','English Test Voucher'),
        ('documentation','Financial Documentation'),
        ('borderupdates','Border Updates'),
    ]

    COUNTRY_CHOICES = [
        ('australia','Australia'),
        ('uk','United Kingdom'),
        ('usa','USA'),
        ('canada','Canada'),
        ('newzealand','New Zealand'),
        ('help','Help Me Decide'),
    ]

    nearest_office = models.CharField(max_length=20, choices=OFFICE_CHOICES)
    question_regarding = models.CharField(max_length=20, choices=QUESTION_CHOICES)
    destination_country = models.CharField(max_length=20, choices=COUNTRY_CHOICES)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def save(self, *args, **kwargs):
        if not self.username:
            base_username = self.email.split("@")[0]
            username = slugify(base_username)
            counter = 1
            while CustomUser.objects.filter(username=username).exists():
                username = f"{base_username}{counter}"
                counter += 1
            self.username = username
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email