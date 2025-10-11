from rest_framework import serializers
from .models import Applicant


class ApplicantReadSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True, source='created_by.name')
    created_at = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %I:%M%p')

    class Meta:
        model = Applicant
        fields = '__all__'


class ApplicantWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = '__all__'

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['created_by'] = user
        return super().create(validated_data)
