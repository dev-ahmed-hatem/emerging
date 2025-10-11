from django.conf import settings
from rest_framework import serializers
from .models import Applicant, Level


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'


class ApplicantReadSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True, source='created_by.name')
    created_at = serializers.SerializerMethodField(read_only=True)
    level = LevelSerializer(read_only=True)

    class Meta:
        model = Applicant
        fields = '__all__'

    def get_created_at(self, obj: Applicant):
        return obj.created_at.astimezone(settings.SAUDI_TZ).strftime('%Y-%m-%d %I:%M%p')


class ApplicantWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = '__all__'

    def create(self, validated_data):
        user = self.context['request'].user
        level = Level.objects.get(weight=1)
        validated_data['created_by'] = user
        validated_data['level'] = level
        return super().create(validated_data)
