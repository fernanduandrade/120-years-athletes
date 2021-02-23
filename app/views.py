from rest_framework import viewsets, filters
from .models import Athlete
from .serializers import AthleteSerializer


class AthleteViewSet(viewsets.ModelViewSet):
    queryset = Athlete.objects.get_queryset().order_by('Team')
    serializer_class = AthleteSerializer
    search_fields = ['Name']
    filter_backends = (filters.SearchFilter,)
