from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicantViewSet, LevelViewSet

router = DefaultRouter()
router.register('applicants', ApplicantViewSet, basename='applicant')
router.register('levels', LevelViewSet, basename='level')

urlpatterns = [
    path('', include(router.urls)),
]
