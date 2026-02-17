from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    confirm = serializers.CharField(write_only=True)
    terms = serializers.BooleanField(write_only=True)

    class Meta:
        model = User
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone_number',
            'nearest_office', 'question_regarding', 'destination_country',
            'password', 'confirm', 'terms',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm']:
            raise serializers.ValidationError({'confirm': 'Passwords do not match'})
        if not data.get('terms'):
            raise serializers.ValidationError({'terms': 'You must accept terms and conditions'})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm')
        validated_data.pop('terms')
        user = User.objects.create_user(**validated_data)
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Optional: add first name in JWT token claims (not strictly needed)
        token['first_name'] = user.first_name
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        # Add first_name to the response JSON
        data['first_name'] = self.user.first_name
        return data
