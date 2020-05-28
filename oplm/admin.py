from django.contrib import admin
from .models import OplmCategory, Oplm, OplmMedia, OplmBlog

admin.site.register(OplmCategory)
admin.site.register(Oplm)
admin.site.register(OplmMedia)
admin.site.register(OplmBlog)
