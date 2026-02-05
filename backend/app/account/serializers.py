from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import Profile

class RegisterSerializer(serializers.Serializer):
    firstName = serializers.CharField()
    lastName=serializers.CharField()
    email=serializers.EmailField()
    number=serializers.CharField()
    nearest_office=serializers.CharField()
    question_regarding=serializers.CharField()
    destination_country=serializers.CharField()
    password=serializers.CharField(write_only=True, validators=[validate_password])
    confirm=serializers.CharField(write_only=True)
    terms=serializers.BooleanField()

    def validate(self,data):
        if data['password'] != data['confirm']:
            raise serializers.ValidationError({"Confirm": "Passwords donot match"})

        if not data['terms']:
            raise serializers.ValidationError({"terms": "You must accept terms and conditions"})
        
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({"email": "Email already registered"})

        return data

def create(self,validated_data):
    user=User.objects.create(
        email=validated_data['email'],
        first_name=validated_data['firstName'],
        last_name=validated_data['lastName'],
    )
    user.set_password(validated_data['password'])
    user.save()

    Profile.objects.create(
        user=user,
        phone_number=validated_data['number'],
        nearest_office=validated_data['nearestOffice'],
        question_regarding=validated_data['questionRegarding'],
        destination_country=validated_data['destinationCountry'],
    )

    return user