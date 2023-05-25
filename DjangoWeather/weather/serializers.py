from rest_framework import serializers


class WeatherSerializer(serializers.Serializer):
    temp = serializers.IntegerField()
    min_temp = serializers.IntegerField()
    max_temp = serializers.IntegerField()
    feels_like = serializers.IntegerField()
    humidity = serializers.IntegerField()
