from django.urls import path

from rest_framework import routers

from .views import AthleteViewSet


router = routers.DefaultRouter()
router.register('athletes', AthleteViewSet)

urlpatterns = router.urls



