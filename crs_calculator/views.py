from rest_framework.views import APIView
from rest_framework.response import Response
from .services.total_score import calculate_total_score

class TestCRScalculatorView(APIView):
    def post(self, request):
        result = calculate_total_score(request.data)
        return Response(result)
    