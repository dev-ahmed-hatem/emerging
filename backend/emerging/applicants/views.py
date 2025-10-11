from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .serializers import ApplicantWriteSerializer, ApplicantReadSerializer, LevelSerializer
from .models import Applicant, Level
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count


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

    @action(detail=True, methods=['get'])
    def promote(self, request, pk=None):
        try:
            applicant = Applicant.objects.get(pk=pk)
        except Applicant.DoesNotExist:
            return Response({"error": "المتسابق غير موجود"}, status=status.HTTP_404_NOT_FOUND)

        # Get all levels ordered by weight
        levels = list(Level.objects.order_by("weight"))
        current_index = next((i for i, lvl in enumerate(levels) if lvl == applicant.level), None)

        # Handle edge cases
        if current_index is None:
            return Response({"error": "المستوى الحالي غير معروف"}, status=status.HTTP_400_BAD_REQUEST)
        if current_index == len(levels) - 1:
            return Response({"message": "المتسابق في أعلى مستوى بالفعل"}, status=status.HTTP_400_BAD_REQUEST)

        # Promote to the next level
        applicant.level = levels[current_index + 1]
        applicant.save()

        return Response({
            "message": f"تم ترقية المتسابق إلى {applicant.level.name}",
            "new_level": LevelSerializer(applicant.level, context={'request': request}).data
        }, status=status.HTTP_200_OK)

    @action(detail=True, methods=['get'])
    def demote(self, request, pk=None):
        try:
            applicant = Applicant.objects.get(pk=pk)
        except Applicant.DoesNotExist:
            return Response({"error": "المتسابق غير موجود"}, status=status.HTTP_404_NOT_FOUND)

        # Get all levels ordered by weight
        levels = list(Level.objects.order_by("weight"))
        current_index = next((i for i, lvl in enumerate(levels) if lvl == applicant.level), None)

        if current_index is None:
            return Response({"error": "المستوى الحالي غير معروف"}, status=status.HTTP_400_BAD_REQUEST)
        if current_index == 0:
            return Response({"message": "المتسابق في أدنى مستوى بالفعل"}, status=status.HTTP_400_BAD_REQUEST)

        # Demote to the previous level
        applicant.level = levels[current_index - 1]
        applicant.save()

        return Response({
            "message": f"تم إنزال المتسابق إلى {applicant.level.name}",
            "new_level": LevelSerializer(applicant.level, context={'request': request}).data
        }, status=status.HTTP_200_OK)


class ApplicantStatsView(APIView):
    """
    Returns statistics about applicants:
    - Levels distribution
    - Gender distribution
    - Region distribution
    - Entity type distribution
    """

    def get(self, request):
        # === Levels Stats ===
        levels_data = []
        levels = Level.objects.order_by("weight")
        for level in levels:
            count = Applicant.objects.filter(level=level).count()
            levels_data.append({
                "name": level.name,
                "count": count
            })

        # === Gender Stats ===
        gender_counts = (
            Applicant.objects.values("gender")
            .annotate(value=Count("id"))
            .order_by("gender")
        )
        # Ensure both genders appear even if zero
        gender_labels = ["ذكر", "أنثى"]
        gender_data = [
            {"name": g, "value": next((item["value"] for item in gender_counts if item["gender"] == g), 0)}
            for g in gender_labels
        ]

        # === Region Stats ===
        region_labels = [
            "منطقة الرياض",
            "منطقة مكة المكرمة",
            "منطقة المدينة المنورة",
            "منطقة القصيم",
            "المنطقة الشرقية",
            "منطقة عسير",
            "منطقة تبوك",
            "منطقة حائل",
            "منطقة الحدود الشمالية",
            "منطقة جازان",
            "منطقة نجران",
            "منطقة الباحة",
            "منطقة الجوف",
        ]

        region_counts = (
            Applicant.objects.values("region")
            .annotate(count=Count("id"))
            .order_by("region")
        )
        region_data = [
            {
                "region": r,
                "count": next((item["count"] for item in region_counts if item["region"] == r), 0)
            }
            for r in region_labels
        ]

        # === Entity Type Stats ===
        entity_labels = [
            "جمعيات تحفيظ القرآن الكريم بالمملكة",
            "مدارس تحفيظ القرآن الكريم",
            "التعليم العام (الحكومي، الأهلي، الأجنبي)",
        ]
        entity_counts = (
            Applicant.objects.values("entity_type")
            .annotate(value=Count("id"))
            .order_by("entity_type")
        )
        entity_data = [
            {
                "name": e,
                "value": next((item["value"] for item in entity_counts if item["entity_type"] == e), 0)
            }
            for e in entity_labels
        ]

        # === Combine All ===
        data = {
            "levels": levels_data,
            "gender": gender_data,
            "regions": region_data,
            "entityTypes": entity_data,
        }

        return Response(data)
