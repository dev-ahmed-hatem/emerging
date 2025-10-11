import { axiosBaseQueryError } from "@/app/api/axiosBaseQuery";
import { useApplicantMutation } from "@/app/api/endpoints/applicants";
import { useNotification } from "@/providers/NotificationProvider";
import { Applicant, regions } from "@/types/applicant";
import { handleServerErrors } from "@/utils/handleForm";
import { Form, Input, Select, DatePicker, Button, Row, Col, Card } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const { Option } = Select;

const entityOptions = [
  "جمعيات تحفيظ القرآن الكريم بالمملكة",
  "مدارس تحفيظ القرآن الكريم",
  "التعليم العام (الحكومي، الأهلي، الأجنبي)",
];

const ApplicantForm = ({
  initialValues,
  applicant_id,
}: {
  initialValues?: Applicant;
  applicant_id?: string;
}) => {
  const [form] = Form.useForm();
  const [selectedRegion, setSelectedRegion] = useState<
    keyof typeof regions | undefined
  >(initialValues?.region);
  const [cities, setCities] = useState<string[]>([]);

  const notification = useNotification();
  const navigate = useNavigate();

  const [
    addApplicant,
    { data: applicant, isSuccess, isLoading, isError, error: applicantError },
  ] = useApplicantMutation();

  const handleSubmit = (values: any) => {
    const data = {
      ...values,
      birthdate: values.birthdate.format("YYYY-MM-DD"),
    };

    addApplicant({
      data: data as Applicant,
      method: initialValues ? "PATCH" : "POST",
      url: applicant_id
        ? `/applicants/applicants/${applicant_id}/`
        : "/applicants/applicants/",
    });
  };

  useEffect(() => {
    if (selectedRegion) {
      setCities(regions[selectedRegion] as string[]);
      form.setFieldsValue({ city: initialValues?.city ?? undefined });
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (isError) {
      const error = applicantError as axiosBaseQueryError;
      if (error.status == 400) {
        handleServerErrors({
          errorData: error.data as Record<string, string[]>,
          form,
        });
      }

      notification.error({ message: "خطأ في إضافة المتسابق!" });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: `تم ${initialValues ? "تعديل بيانات" : "إضافة"} المتسابق`,
      });
      navigate(
        `/applicants/applicant-profile/${
          initialValues ? initialValues.id : applicant.id
        }`
      );
    }
  }, [isSuccess]);

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">إضافة متسابق</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        scrollToFirstError={{ behavior: "smooth", block: "center" }}
        initialValues={{
          ...initialValues,
          birthdate: dayjs(initialValues?.birthdate) ?? null,
        }}
      >
        {/* Personal Info  */}
        <Card title="البيانات الشخصية" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="name"
                label="الاسم الكامل رباعي"
                rules={[{ required: true, message: "يرجى إدخال الاسم الكامل" }]}
              >
                <Input placeholder="أدخل الاسم الكامل رباعي" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="national_id"
                label="رقم الهوية الوطنية"
                rules={[
                  { required: true, message: "يرجى إدخال رقم الهوية" },
                  {
                    pattern: /^\d{10}$/,
                    message: "الهوية يجب أن تتكون من 10 أرقام",
                  },
                ]}
              >
                <Input placeholder="أدخل رقم الهوية" maxLength={10} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="grade"
                label="الصف الدراسي"
                rules={[{ required: true, message: "يرجى إدخال الصف الدراسي" }]}
              >
                <Input placeholder="أدخل الصف الدراسي" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="birthdate"
                label="تاريخ الميلاد"
                rules={[
                  { required: true, message: "يرجى إدخال تاريخ الميلاد" },
                ]}
              >
                <DatePicker format="YYYY-MM-DD" className="w-full" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                name="gender"
                label="الجنس"
                rules={[{ required: true, message: "يرجى تحديد الجنس" }]}
              >
                <Select placeholder="اختر الجنس">
                  <Option value="ذكر">ذكر</Option>
                  <Option value="أنثى">أنثى</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={8}>
              <Form.Item
                name="nationality"
                label="الجنسية"
                rules={[{ required: true, message: "يرجى تحديد الجنسية" }]}
              >
                <Select placeholder="اختر الجنسية">
                  <Option value="سعودي">سعودي</Option>
                  <Option value="غير سعودي">غير سعودي</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={8}>
              <Form.Item
                name="residence"
                label="مكان الإقامة الحالي"
                rules={[{ required: true, message: "يرجى إدخال مكان الإقامة" }]}
              >
                <Input placeholder="أدخل مكان الإقامة" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* location */}
        <Card title="الموقع الجغرافي" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="region"
                label="المنطقة الإدارية"
                rules={[{ required: true, message: "يرجى اختيار المنطقة" }]}
              >
                <Select
                  placeholder="اختر المنطقة"
                  onChange={(value) => setSelectedRegion(value)}
                  showSearch
                >
                  {Object.keys(regions).map((region) => (
                    <Option key={region} value={region}>
                      {region}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="city"
                label="المدينة"
                rules={[{ required: true, message: "يرجى اختيار المدينة" }]}
              >
                <Select placeholder="اختر المدينة" disabled={!selectedRegion}>
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* entity */}
        <Card title="الجهة التعليمية" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="entity_type"
                label="نوع الجهة"
                rules={[{ required: true, message: "يرجى اختيار الجهة" }]}
              >
                <Select placeholder="اختر نوع الجهة">
                  {entityOptions.map((opt) => (
                    <Option key={opt} value={opt}>
                      {opt}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="entity_name"
                label="اسم الجهة"
                rules={[{ required: true, message: "يرجى كتابة اسم الجهة" }]}
              >
                <Input placeholder="أدخل اسم الجهة" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* contact */}
        <Card title="بيانات التواصل" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="رقم الجوال"
                rules={[
                  { required: true, message: "يرجى إدخال رقم الجوال" },
                  {
                    pattern: /^\d{8,15}$/,
                    message:
                      "يجب أن يحتوي رقم الجوال على أرقام فقط (من 8 إلى 15 رقمًا)",
                  },
                ]}
              >
                <Input
                  placeholder="أدخل رقم الجوال"
                  maxLength={15}
                  inputMode="numeric"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="البريد الإلكتروني"
                rules={[{ type: "email", message: "البريد غير صحيح" }]}
              >
                <Input placeholder="example@email.com" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* guardian */}
        <Card title="بيانات ولي الأمر" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="guardian_name"
                label="اسم ولي الأمر الكامل"
                rules={[{ required: true, message: "يرجى إدخال الاسم الكامل" }]}
              >
                <Input placeholder="أدخل اسم ولي الأمر" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="guardian_relation"
                label="صلة القرابة"
                rules={[{ required: true, message: "يرجى تحديد صلة القرابة" }]}
              >
                <Input placeholder="مثل: أب، أم، أخ، ..." />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="guardian_phone"
                label="رقم جوال ولي الأمر"
                rules={[
                  { required: true, message: " يرجى إدخال رقم جوال ولي الأمر" },
                  {
                    pattern: /^\d{8,15}$/,
                    message:
                      "يجب أن يحتوي رقم الجوال على أرقام فقط (من 8 إلى 15 رقمًا)",
                  },
                ]}
              >
                <Input
                  placeholder="أدخل رقم الجوال"
                  maxLength={15}
                  inputMode="numeric"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card title="بيانات التواصل" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={24}>
              <Form.Item name="notes" label="ملاحظات">
                <Input.TextArea rows={2} placeholder="أدخل ملاحظات إضافية" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="min-w-28"
            loading={isLoading}
          >
            حفظ البيانات
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ApplicantForm;
