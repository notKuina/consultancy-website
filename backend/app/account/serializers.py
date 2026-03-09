from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    confirm = serializers.CharField(write_only=True)
    terms = serializers.BooleanField(write_only=True)

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "nearest_office",
            "question_regarding",
            "destination_country",
            "password",
            "confirm",
            "terms"
        ]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def validate(self, data):

        if data["password"] != data["confirm"]:
            raise serializers.ValidationError(
                {"confirm": "Passwords do not match"}
            )

        if not data["terms"]:
            raise serializers.ValidationError(
                {"terms": "You must accept terms and conditions"}
            )

        return data

    def create(self, validated_data):

        validated_data.pop("confirm")
        validated_data.pop("terms")

        password = validated_data.pop("password")

        user = User(**validated_data)
        user.set_password(password)
        user.save()

        return user