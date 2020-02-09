from django.shortcuts import render
from django.http import HttpResponse
from .logic import return_mess
# Create your views here.

def index(request):
    message = return_mess()
    context = {"subject":message["subject"], 
            "body": message["body"]}
    return render(request, 'index.html', context=context)