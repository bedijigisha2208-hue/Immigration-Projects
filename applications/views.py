

from email.mime import application

from django.shortcuts import render
from .serializer import ImmigrationApplicationSerializer
from .models import ImmigrationApplication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class ImmigrationApplicationView(APIView):
    def get(self, request):
        applications = ImmigationApplication.objects.filter(user=request.user)
        serializer = ImmigrationApplicationSerializer(applications, many=True)
        return Response(serializer.data)

class createImmigrationApplicationView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer  = ImmigrationApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save( user = request.user)
            return Response({
               "message": "Immigration file created successfully!",
               "data": serializer.data } , status=201)
        return Response(serializer.errors, status=400)
class updateImmigrationApplicationView(APIView):
    permission_classes = [IsAuthenticated]
    def put(self, request, pk):
        try:
            application= ImmigrationApplication.objects.get(pk=pk, user=request.user)
        except ImmigrationApplication.DoesNotExist:
            return Response({"message": "Application not found"}, status=404)  
        serializer = ImmigrationApplicationSerializer(application, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "message":"Application updated successfully!",
                "data": serializer.data
            }, status =200)
        return Response(serializer.errors, status=400)
class deleteImmigrationApplicationView(APIView):
    permission_classes = [IsAuthenticated]
    def delete(self,request,pk):
        try:
            application = ImmigrationApplication.objects.get(pk=pk, user=request.user)
        except ImmigrationApplication.DoesNotExist:
            return Response({"message": "Application not found"}, status=404)
        serializer = ImmigrationApplicationSerializer(application, data=request.data, partial=True)
        if serializer.is_valid():
            application.delete()
            return Response({
                "message" : "Application delted successfully!"}, status=200)
        return Response(serializer.errors, status=400)



# Create your views here.
