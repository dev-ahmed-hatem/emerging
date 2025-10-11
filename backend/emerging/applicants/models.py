from django.db import models
from django.core.validators import RegexValidator, EmailValidator
from django.utils.translation import gettext_lazy as _


class Applicant(models.Model):
    name = models.CharField(
        _("الاسم الكامل رباعي"),
        max_length=150,
        error_messages={"blank": _("يرجى إدخال الاسم الكامل")},
    )

    national_id = models.CharField(
        _("رقم الهوية الوطنية"),
        max_length=10,
        unique=True,
        validators=[
            RegexValidator(r"^\d{10}$", _("رقم الهوية يجب أن يتكون من 10 أرقام")),
        ],
        error_messages={
            "unique": _("رقم الهوية مسجل مسبقاً"),
            "blank": _("يرجى إدخال رقم الهوية"),
        },
    )

    grade = models.CharField(
        _("الصف الدراسي"),
        max_length=50,
        error_messages={"blank": _("يرجى إدخال الصف الدراسي")},
    )

    birthdate = models.DateField(
        _("تاريخ الميلاد"),
        error_messages={"invalid": _("تاريخ الميلاد غير صالح")},
    )

    GENDER_CHOICES = [
        ("ذكر", _("ذكر")),
        ("أنثى", _("أنثى")),
    ]
    gender = models.CharField(
        _("الجنس"),
        max_length=10,
        choices=GENDER_CHOICES,
        error_messages={"blank": _("يرجى تحديد الجنس")},
    )

    NATIONALITY_CHOICES = [
        ("سعودي", _("سعودي")),
        ("غير سعودي", _("غير سعودي")),
    ]
    nationality = models.CharField(
        _("الجنسية"),
        max_length=20,
        choices=NATIONALITY_CHOICES,
        error_messages={"blank": _("يرجى تحديد الجنسية")},
    )

    residence = models.CharField(
        _("مكان الإقامة الحالي"),
        max_length=100,
        error_messages={"blank": _("يرجى إدخال مكان الإقامة")},
    )

    region = models.CharField(
        _("المنطقة الإدارية"),
        max_length=50,
        error_messages={"blank": _("يرجى اختيار المنطقة")},
    )

    city = models.CharField(
        _("المدينة"),
        max_length=50,
        error_messages={"blank": _("يرجى اختيار المدينة")},
    )

    ENTITY_TYPE_CHOICES = [
        ("جمعيات تحفيظ القرآن الكريم بالمملكة", _("جمعيات تحفيظ القرآن الكريم بالمملكة")),
        ("مدارس تحفيظ القرآن الكريم", _("مدارس تحفيظ القرآن الكريم")),
        ("التعليم العام (الحكومي، الأهلي، الأجنبي)", _("التعليم العام (الحكومي، الأهلي، الأجنبي)")),
    ]
    entity_type = models.CharField(
        _("نوع الجهة"),
        max_length=100,
        choices=ENTITY_TYPE_CHOICES,
        error_messages={"blank": _("يرجى اختيار نوع الجهة")},
    )

    entity_name = models.CharField(
        _("اسم الجهة"),
        max_length=150,
        error_messages={"blank": _("يرجى كتابة اسم الجهة")},
    )

    phone = models.CharField(
        _("رقم الجوال"),
        error_messages={"blank": _("يرجى إدخال رقم الجوال")},
    )

    email = models.EmailField(
        _("البريد الإلكتروني"),
        blank=True,
        null=True,
        validators=[EmailValidator(message=_("البريد الإلكتروني غير صالح"))],
    )

    guardian_name = models.CharField(
        _("اسم ولي الأمر الكامل"),
        max_length=150,
        error_messages={"blank": _("يرجى إدخال اسم ولي الأمر الكامل")},
    )

    guardian_relation = models.CharField(
        _("صلة القرابة"),
        max_length=50,
        error_messages={"blank": _("يرجى تحديد صلة القرابة")},
    )

    guardian_phone = models.CharField(
        _("رقم جوال ولي الأمر"),
        error_messages={"blank": _("يرجى إدخال رقم الجوال لولي الأمر")},
    )

    notes = models.TextField(
        _("ملاحظات"),
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(_("تاريخ الإدخال"), auto_now_add=True)
    updated_at = models.DateTimeField(_("تاريخ التعديل"), auto_now=True)

    class Meta:
        verbose_name = _("متسابق")
        verbose_name_plural = _("المتسابقون")
        ordering = ["-created_at"]

    def __str__(self):
        return self.full_name
