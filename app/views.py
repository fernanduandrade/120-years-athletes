from rest_framework import viewsets
from .models import Athlete
from .serializers import AthleteSerializer

class AthleteViewSet(viewsets.ModelViewSet):
    queryset = Athlete.objects.get_queryset().order_by('Team')
    serializer_class = AthleteSerializer
    filter_fields = ('Name', 'Team')