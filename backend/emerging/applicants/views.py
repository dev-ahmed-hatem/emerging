from rest_framework.viewsets import ModelViewSet
from .serializers import ApplicantWriteSerializer, ApplicantReadSerializer, LevelSerializer
from .models import Applicant, Level


class LevelViewSet(ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer
    pagination_class = None


class ApplicantViewSet(ModelViewSet):
    queryset = Applicant.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return ApplicantWriteSerializer
        return ApplicantReadSerializer

    def get_queryset(self):
        queryset = Applicant.objects.all()
        search: str = self.request.query_params.get('search', None)

        level_filters = self.request.query_params.get('level', [])
        entity_type_filters = self.request.query_params.get('entity_type', [])
        region_filters = self.request.query_params.get('region', [])

        sort_by = self.request.query_params.get('sort_by', None)
        order = self.request.query_params.get('order', None)

        if search not in (None, ""):
            queryset = queryset.filter(name__icontains=search)

        if len(level_filters) > 0:
            level_filters = level_filters.split(',')
            queryset = queryset.filter(level__weight__in=level_filters)

        if len(entity_type_filters) > 0:
            entity_type_filters = entity_type_filters.split(',')
            queryset = queryset.filter(entity_type__in=entity_type_filters)

        if len(region_filters) > 0:
            region_filters = region_filters.split(',')
            queryset = queryset.filter(region__in=region_filters)

        if sort_by is not None:
            queryset = queryset.order_by(f"{order}{sort_by}")

        return queryset
