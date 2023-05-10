from django.contrib import admin
from django.urls import path
from .views import my_api_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', my_api_view),
]
