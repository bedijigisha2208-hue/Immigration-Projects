

from email.mime import application

from django.shortcuts import render
from .serializer import ImmigrationApplicationSerializer, ImmigrationStreamSerializer, TimelineEventSerializer
from .models import ImmigrationApplication, ImmigrationStream, TimelineEvent
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .services.total_score import calculate_total_score


from applications import serializer

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
class CreateImmigrationStreamView(APIView):
    def post(self, request):
        serializer = ImmigrationStreamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Stream created successfully!",
                "data": serializer.data

            }, status=201)
        return Response(serializer.errors,status=400)
class ListImmigrationStreamView(APIView):
    def get(self,request):
        streams = ImmigrationStream.objects.all()
        serializer = ImmigrationStreamSerializer(streams, many=True)
        return Response(serializer.data) 
class RecommendedStreamsView(APIView):
    def post(self, request):
        crs_score = request.data.get('crs_score')
        province = request.data.get('province')
        if crs_score is None:    
            return Response({"message": "CRS score is required"}, status=400)
        streams = ImmigrationStream.objects.filter(minimum_crs__lte=crs_score)
        if province:
            streams = streams.filter(province__iexact=province)
        serializer = ImmigrationStreamSerializer(streams, many=True)
        return Response(serializer.data)
class CreateTimelineEventView(APIView):
    def post(self, request):
        serializer = TimelineEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Timeline event created successfully!",
                "data": serializer.data

            }, status=201)    
        return Response(serializer.errors, status=400)
class ListTimelineEventsView(APIView):
    def get(self, request, application_id):
        events = TimelineEvent.objects.filter(application_id=application_id).order_by('event_date')
        serializer = TimelineEventSerializer(events, many=True)
        return Response(serializer.data)
class DashboardView(APIView):
    def get(self, request, application_id):
        application = ImmigrationApplication.objects.get(id=application_id)
        timeline_events = TimelineEvent.objects.filter(application_id=application_id).order_by('event_date')
        return Response({
            "application": {
                "id": application.id
            },
            "timeline_events": TimelineEventSerializer(timeline_events, many=True).data,
        })

    



