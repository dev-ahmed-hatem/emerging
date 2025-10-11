from rest_framework import serializers
from .models import Applicant, Level


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'


class ApplicantReadSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True, source='created_by.name')
    created_at = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %I:%M%p')
    level = LevelSerializer(read_only=True)

    class Meta:
        model = Applicant
        fields = '__all__'


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
