from django.http import JsonResponse
from .models import Component
import json

def components(request):
    if request.method == "GET":
        data = list(Component.objects.values())
        return JsonResponse(data, safe=False)

    elif request.method == "POST":
        try:
            body = json.loads(request.body)

            name = body.get("name")
            price = body.get("price")

            comp = Component.objects.create(name=name, price=price)

            return JsonResponse({"message": "Created", "id": comp.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)