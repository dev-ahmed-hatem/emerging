from django.db.models.signals import post_migrate
from .models import Level

levels = [
    {"name": "المستوى الأول", "weight": 1},
    {"name": "المستوى الثاني", "weight": 2},
    {"name": "المستوى الثالث", "weight": 3},
    {"name": "المستوى الرابع", "weight": 4},
    {"name": "المستوى الخامس", "weight": 5},
]


def create_levels(sender, **kwargs):
    if sender.label == "applicants":
        for level in levels:
            module_obj, _ = Level.objects.get_or_create(name=level["name"], weight=level["weight"])
        print("✅ Created levels.")


post_migrate.connect(create_levels)
