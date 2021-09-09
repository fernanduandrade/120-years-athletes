from django.contrib import admin
from .models import Athlete
from import_export.admin import ImportExportModelAdmin

@admin.register(Athlete)
class AthleteAdmin(ImportExportModelAdmin):
    list_display = ("id","name","sex","age","team","year","sport","noc", "medal")
    exclude = ("id",)
    pass
    