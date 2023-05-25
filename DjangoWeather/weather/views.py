import requests
from rest_framework import views
from rest_framework.response import Response

from weather.serializers import WeatherSerializer


# Create your views here.
class WeatherView(views.APIView):

    def get(self, request):
        latitude = self.request.query_params.get('lat')
        longitude = self.request.query_params.get('lon')
        exclude = 'current, minutely, hourly'
        api_key = 'c63e87eaf99359d5d164dd11e93cf935'
        api_url = 'https://api.openweathermap.org/data/3.0/onecall'
        params = {
            'lat': latitude,
            'lon': longitude,
            'exclude': exclude,
            'units': 'metric',
            'appid': api_key,
        }
        response = requests.get(api_url, params=params)
        daily_data = response.json()['daily']
        week_weather = []
        for i in range(7):
            day_weather = {
                'temp': int(daily_data[i]['temp']['day']),
                'min_temp': int(daily_data[i]['temp']['min']),
                'max_temp': int(daily_data[i]['temp']['max']),
                'feels_like': int(daily_data[i]['feels_like']['day']),
                'humidity': daily_data[i]['humidity']
            }
            week_weather.append(day_weather)
        serializer = WeatherSerializer(data=week_weather, many=True)
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors)



