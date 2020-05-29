from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator
import os, uuid

def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join(instance.mediatype, filename)

class OplmCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, related_name='category', on_delete=models.PROTECT)

    class Meta(object):
        verbose_name = 'OPLM Category'
        verbose_name_plural = 'OPLM Categories'
        ordering = ('name',)

    def __str__(self):
        return self.name

class Oplm(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    status = models.BooleanField(default=False)
    category = models.ForeignKey(OplmCategory, related_name='oplm_category', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, related_name='oplm', on_delete=models.PROTECT)

    class Meta(object):
        verbose_name = 'OPLM'
        verbose_name_plural = 'OPLMs'
        ordering = ('name', )

    def __str__(self):
        return self.name


class OplmMedia(models.Model):
    media_types = (
        ('IMAGE', 'Image'),
        ('AUDIO', 'Audio'),
        ('VIDEO', 'Video'),
    )
    allowed_extensions = ['mp4', 'mp3',  'jpeg', 'jpg']
    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    mediatype = models.CharField(choices=media_types, max_length=10, default='VIDEO')	
    mediafile = models.FileField(null=True,upload_to=get_file_path, validators=[FileExtensionValidator(allowed_extensions)])
    remotelink = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, related_name='media', on_delete=models.PROTECT)
    published_on = models.DateTimeField(null=True)
    status = models.BooleanField(default=False)
    views = models.PositiveIntegerField(default=0)
    order = models.PositiveIntegerField(null=True)
    oplm = models.ForeignKey(Oplm, related_name='oplm_media', on_delete=models.PROTECT)


    class Meta(object):
        verbose_name = 'OPLM Media'
        verbose_name_plural = 'OPLM Medias'
        ordering = ('mediatype', )

    def __str__(self):
        return self.name

    def get_filename_extension(self):
        name, extension = os.path.splitext(self.mediafile.name)
        extension = extension.split('.')[-1]
        return (name, extension)

class OplmBlog(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_on = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User, related_name='blog', on_delete=models.PROTECT)
    views = models.PositiveIntegerField(default=0)
    oplm = models.ForeignKey(Oplm, related_name='oplm_blog', on_delete=models.PROTECT)


    def __str__(self):
        return self.name
    
    class Meta(object):
        verbose_name = 'OPLM Blog'
        verbose_name_plural = 'OPLM Blogs'
        ordering = ('name', )