from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class StartView(APIView):
    def get(self, request):
        return Response({"message": "Backend working!"})

# Create your views here.
class UserRegistrationView(APIView):
    def post(self,request):
        serializer = UserSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'User registered successfully!'
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LoginView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password =request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            token, created  = Token.objects.get_or_create(user=user)
            return Response({
                'message' : 'Login successful!',
                'token': token.key
            })    
        return Response({
            'message': "Invalid username or password"
        }, status=status.HTTP_401_UNAUTHORIZED)
class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)    
class editUserView(APIView):
    permission_classes = [IsAuthenticated]
    def put(self,request):
        user = request.user
        serializer = UserSerializer(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
