from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import Constrol_WEB_Area_2_model
# Create your views here.
def home(request):
    return render(request, 'Constrol_Area_2.html', {'title':'Constrol WEB AREA 2'})

def On_Click(request):
    if request.method == "POST":
        id = request.POST.get("sid_Area_2")
        print("Nút bấm ở số: " + id)
        pi = Constrol_WEB_Area_2_model.objects.get(pk = id)
        if (pi.STATUS == 0):
            Mess_Show = Constrol_WEB_Area_2_model(id = pi.id, STATUS = pi.STATUS + 1)
            print('Đã bật thiết bị')
        else:
            Mess_Show = Constrol_WEB_Area_2_model(id = pi.id, STATUS = pi.STATUS)
            print('Thiết bị chưa được bật')
        Mess_Show.save()
        TEMP = Constrol_WEB_Area_2_model.objects.values()
        print(TEMP)
        data = list(TEMP)
        return JsonResponse({'status':'On__Click', 'data':data})
    else:
        return JsonResponse({'status':'err'})

def Off_Click(request):
    if request.method == "POST":
        id = request.POST.get("sid_Area_2")
        print("Vị trí: " + id)
        pi = Constrol_WEB_Area_2_model.objects.get(pk = id)
        if (pi.STATUS == 1):
            Mess_Show = Constrol_WEB_Area_2_model(id = pi.id, STATUS = pi.STATUS - 1)
            print('Đã tắt thiết bị')
        else:
            Mess_Show = Constrol_WEB_Area_2_model(id = pi.id, STATUS = pi.STATUS)
            print('Thiết bị chưa được tắt')
        Mess_Show.save()
        TEMP = Constrol_WEB_Area_2_model.objects.values()
        print(TEMP)
        data = list(TEMP)
        return JsonResponse({'status':'Off__Click', 'data':data})
    else:
        return JsonResponse({'status':'err'})

class Get_JSON(View):
    def get(self, request):
        ID_1 = Constrol_WEB_Area_2_model.objects.values().get(pk = 1)
        ID_2 = Constrol_WEB_Area_2_model.objects.values().get(pk = 2)
        ID_3 = Constrol_WEB_Area_2_model.objects.values().get(pk = 3)
        ID_4 = Constrol_WEB_Area_2_model.objects.values().get(pk = 4)
        ID_5 = Constrol_WEB_Area_2_model.objects.values().get(pk = 5)
        return JsonResponse({"ID_1":ID_1, "ID_2":ID_2, "ID_3":ID_3, "ID_4":ID_4, "ID_5":ID_5})
