from django.shortcuts import render


# Create your views here.
def index(request):
    template = 'qbotik_app/index.html'
    return render(request, template, {})


def about(request):
    template = 'qbotik_app/about.html'
    return render(request, template, {})
