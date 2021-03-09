from django.contrib import admin
from .models import Athlete
from import_export.admin import ImportExportModelAdmin

@admin.register(Athlete)
class AthleteAdmin(ImportExportModelAdmin):
    list_display = ("ID","Name","Sex","Age","Height","Weight","Team","NOC","Games","Year","Season","City","Sport","Event","Medal")
    exclude = ("ID",)
    pass
    