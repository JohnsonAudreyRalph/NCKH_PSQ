from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Constrol_WEB_Area_1_model
# Create your views here.
def home(request):
    return render(request, 'Constrol_Area_1.html', {'title':'Constrol WEB Area 1'})

def On_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid_Area_1')
        print('Vị trí nút bấm: ' + id)
        pi = Constrol_WEB_Area_1_model.objects.get(pk = id)
        if(pi.STATUS == 0):
            Mess_Show = Constrol_WEB_Area_1_model(id = pi.id, STATUS = pi.STATUS + 1)
            print('Đã bật')
        else:
            Mess_Show = Constrol_WEB_Area_1_model(id = pi.id, STATUS = pi.STATUS)
            print('Không đổi')
        Mess_Show.save()
        TEMP = Constrol_WEB_Area_1_model.objects.values()
        print(TEMP)
        data = list(TEMP)
        count = Constrol_WEB_Area_1_model.objects.all().count()
        return JsonResponse({'status':'On_Click', 'data':data})
    else:
        return JsonResponse({'status':'Err'})


def Off_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid_Area_1')
        print('Vị trí nút bấm: ' + id)
        pi = Constrol_WEB_Area_1_model.objects.get(pk = id)
        if(pi.STATUS == 1):
            Mess_Show = Constrol_WEB_Area_1_model(id = pi.id, STATUS = pi.STATUS - 1)
            print('Đã tắt')
        else:
            Mess_Show = Constrol_WEB_Area_1_model(id = pi.id, STATUS = pi.STATUS)
            print('Không đổi')
        Mess_Show.save()
        TEMP = Constrol_WEB_Area_1_model.objects.values()
        print(TEMP)
        data = list(TEMP)
        return JsonResponse({'status':'Off_Click', 'data':data})
    else:
        return JsonResponse({'status':'Err'})

class Get_JSON(View):
    def get(self, request):
        ID_1 = Constrol_WEB_Area_1_model.objects.values().get(pk = 1)
        ID_2 = Constrol_WEB_Area_1_model.objects.values().get(pk = 2)
        ID_3 = Constrol_WEB_Area_1_model.objects.values().get(pk = 3)
        ID_4 = Constrol_WEB_Area_1_model.objects.values().get(pk = 4)
        ID_5 = Constrol_WEB_Area_1_model.objects.values().get(pk = 5)
        ID_6 = Constrol_WEB_Area_1_model.objects.values().get(pk = 6)
        ID_7 = Constrol_WEB_Area_1_model.objects.values().get(pk = 7)
        return JsonResponse({'ID_1':ID_1, 'ID_2':ID_2, 'ID_3':ID_3, 'ID_4':ID_4, 'ID_5':ID_5, 'ID_6':ID_6, 'ID_7':ID_7})