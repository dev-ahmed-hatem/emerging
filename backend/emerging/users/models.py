from django.db import models
from django.contrib import auth
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, _user_has_perm, Group, \
    Permission as CorePermission
from django.utils.translation import gettext_lazy as _


# Permissions
class Module(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Permission(models.Model):
    module = models.ForeignKey(Module, related_name="permissions", on_delete=models.CASCADE)
    action = models.CharField(max_length=50)  # e.g. "view", "create", "update", "delete"

    class Meta:
        unique_together = ("module", "action")

    def __str__(self):
        return f"{self.module.name}.{self.action}"


class UserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('Users must have username')

        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password, **extra_fields):
        user = self.create_user(username, password, **extra_fields)
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    class Role(models.TextChoices):
        manager = "مدير", _("مدير")
        moderator = "مشرف", _("مشرف")

    name = models.CharField(max_length=100, default="")
    username = models.CharField(max_length=20, unique=True, error_messages={
        "unique": _("اسم المستخدم موجود بالفعل")
    })
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.moderator)

    is_active = models.BooleanField(default=True)

    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'

    # groups and permissions
    groups = models.ManyToManyField(Group, blank=True, related_name='custom_users')
    user_permissions = models.ManyToManyField(CorePermission, blank=True, related_name='custom_user_permissions')

    # custom permissions
    permissions = models.ManyToManyField(Permission, blank=True, related_name='user_permissions')

    def has_perm(self, perm, obj=None):
        if self.is_superuser:
            return True

        if not self.is_active or self.is_anonymous:
            return False

        if obj is not None:
            return _user_has_perm(self, perm, obj)

        for backend in auth.get_backends():
            if backend.has_perm(self, perm):
                return True

        return False

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return True
