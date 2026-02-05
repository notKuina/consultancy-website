from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    OFFICE_CHOICES=[
        ('kathmandu','Kathmandu'),
        ('pokhara','Pokhara'),
        ('dharan','Dharan'),
        ('butwal','Butwal'),
        ('chitwan','Chitwan'),
    ]

    QUESTION_CHOICES=[
        ('course','Course'),
        ('visa','Visa'),
        ('preparation','Language Preparation'),
        ('testvoucher','English Test Voucher'),
        ('documentation','Financial Documentation'),
        ('borderupdates','Border Updates'),
    ]

    COUNTRY_CHOICES=[
        ('australia','Australia'),
        ('uk','United Kingdom'),
        ('usa', 'USA'),
        ('canada','Canada'),
        ('newzealand', 'New Zealand'),
        ('help','Help Me Decide'),
    ]


    user=models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number=models.CharField(max_length=20)
    nearest_office=models.CharField(max_length=20,choices=OFFICE_CHOICES)
    question_regarding=models.CharField(max_length=20,choices=QUESTION_CHOICES)
    destination_country=models.CharField(max_length=20,choices=COUNTRY_CHOICES)

    def __str__(self):
        return self.user.email