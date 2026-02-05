from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from .serializers import RegisterSerializer

class RegisterView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Account created successfully"},
                status=status.HTTP_201_CREATED
            )
            return REsponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProtectedView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        return REsponse({
            "message":f"Hello {request.user.first_name},your are authenticated"
        })