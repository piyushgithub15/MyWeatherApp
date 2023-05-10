from django.http import JsonResponse
import requests
import json

def my_api_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        city = data['city']
        url = "https://open-weather13.p.rapidapi.com/city/"+city;

        headers = {
	"X-RapidAPI-Key": "294abd3163c3abc228bd29cf939c463e",
	"X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers)
        return JsonResponse(response.json())
    else:
        data = {'message': 'Hello, world!'}
        return JsonResponse(data)