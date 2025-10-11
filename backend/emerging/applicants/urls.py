from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicantViewSet, LevelViewSet, ApplicantStatsView

router = DefaultRouter()
router.register('applicants', ApplicantViewSet, basename='applicant')
router.register('levels', LevelViewSet, basename='level')

urlpatterns = [
    path('', include(router.urls)),
    path('applicants-stats/', ApplicantStatsView.as_view(), name='applicant-stats'),
]
