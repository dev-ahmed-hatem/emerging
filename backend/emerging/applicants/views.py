from rest_framework.viewsets import ModelViewSet
from .serializers import ApplicantWriteSerializer, ApplicantReadSerializer
from .models import Applicant


class ApplicantViewSet(ModelViewSet):
    queryset = Applicant.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return ApplicantWriteSerializer
        return ApplicantReadSerializer
