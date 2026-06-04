from django.db import models
from users.models import User

class ImmigrationApplication(models.Model):
    APPLICATION_STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected')
    ]
    APPLICATION_TYPES = [
        ('Work Visa', 'Work Visa'),
        ('Student Visa', 'Student Visa'),
        ('Permanent Residency', 'Permanent Residency'),
        ('PNP', 'Provincial Nominee Program'),
        ('Express Entry', 'Express Entry'),
        ('Asylum', 'Asylum')
     ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    application_type = models.CharField(
        max_length=50,
        choices=APPLICATION_TYPES,
        null=True,
        blank=True
    )
    status = models.CharField(
        max_length=20,
        choices=APPLICATION_STATUS_CHOICES,
    )
    country_of_origin = models.CharField(max_length=100)
    destination_country = models.CharField(max_length=100)
    submission_date = models.DateField(null=True, blank=True)
    last_updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user.username} - {self.application_type}"
class ImmigrationStream(models.Model):
    stream_name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    minimum_crs = models.IntegerField(null=True, blank=True)
    processing_time = models.CharField(max_length=100, blank=True, null=True)
    stream_type = models.CharField(max_length=100, blank=True, null=True)
    province = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return f"{self.stream_name}"
class TimelineEvent(models.Model):
    application = models.ForeignKey(ImmigrationApplication, on_delete=models.CASCADE, related_name='timeline_events')
    event_type = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    event_date = models.DateField()
    status = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return f"{self.application} - {self.event_type} on {self.event_date}" 
    class Meta:
        ordering = ['event_date']



