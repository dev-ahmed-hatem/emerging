import { Form, Input, Select, DatePicker, Button, Row, Col, Card } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const regions = {
  "منطقة الرياض": [
    "الرياض",
    "الدرعية",
    "الخرج",
    "الدوادمي",
    "المجمعة",
    "القويعية",
    "الأفلاج",
    "وادي الدواسر",
    "الزلفي",
    "شقراء",
    "حوطة بني تميم",
    "عفيف",
  ],
  "منطقة مكة المكرمة": [
    "مكة المكرمة",
    "جدة",
    "الطائف",
    "القنفذة",
    "الليث",
    "رابغ",
    "خليص",
    "الخرمة",
    "رنية",
    "تربة",
  ],
  "منطقة المدينة المنورة": [
    "المدينة المنورة",
    "ينبع",
    "العلا",
    "المهد",
    "الحناكية",
    "بدر",
    "خيبر",
    "العيص",
  ],
  "منطقة القصيم": [
    "بريدة",
    "عنيزة",
    "الرس",
    "المذنب",
    "البكيرية",
    "البدائع",
    "الأسياح",
    "رياض الخبراء",
  ],
  "المنطقة الشرقية": [
    "الدمام",
    "الأحساء (الهفوف والمبرز)",
    "الخبر",
    "الظهران",
    "حفر الباطن",
    "القطيف",
    "الجبيل",
    "الخفجي",
  ],
  "منطقة عسير": [
    "أبها",
    "خميس مشيط",
    "بيشة",
    "النماص",
    "محايل عسير",
    "ظهران الجنوب",
    "تثليث",
    "رجال المع",
    "سراة عبيدة",
  ],
  "منطقة تبوك": ["تبوك", "الوجه", "تيماء", "ضباء", "أملج", "حقل"],
  "منطقة حائل": ["حائل", "بقعاء", "الغزالة", "الشنان", "السليمي", "الحائط"],
  "منطقة الحدود الشمالية": ["عرعر", "رفحاء", "طريف"],
  "منطقة جازان": ["جازان", "صامطة", "صبيا", "أبو عريش", "بيش", "الدرب"],
  "منطقة نجران": ["نجران", "شرورة", "حبونا", "بدر الجنوب"],
  "منطقة الباحة": ["الباحة", "بلجرشي", "المندق", "العقيق", "قلوة", "القرى"],
  "منطقة الجوف": ["سكاكا", "القريات", "دومة الجندل", "طبرجل"],
};

const entityOptions = [
  "جمعيات تحفيظ القرآن الكريم بالمملكة",
  "مدارس تحفيظ القرآن الكريم",
  "التعليم العام (الحكومي، الأهلي، الأجنبي)",
];

const ApplicantForm = () => {
  const [form] = Form.useForm();
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof regions>();
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (selectedRegion) {
      setCities(regions[selectedRegion] as string[]);
      form.setFieldsValue({ city: undefined });
    }
  }, [selectedRegion]);

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">إضافة متسابق</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        scrollToFirstError={{ behavior: "smooth", block: "center" }}
      >
        {/* ===================== البيانات الشخصية ===================== */}
        <Card title="البيانات الشخصية" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="full_name"
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
                name="birth_date"
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

        {/* =====================  الموقع ===================== */}
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

        {/* ===================== الجهة ===================== */}
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

        {/* ===================== بيانات التواصل ===================== */}
        <Card title="بيانات التواصل" className="mb-6">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="رقم الجوال"
                rules={[{ required: true, message: "يرجى إدخال رقم الجوال" }]}
              >
                <Input placeholder="05xxxxxxxx" maxLength={10} />
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

        {/* ===================== بيانات ولي الأمر ===================== */}
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
                name="relation"
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
                rules={[{ required: true, message: "يرجى إدخال رقم الجوال" }]}
              >
                <Input placeholder="05xxxxxxxx" maxLength={10} />
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
          >
            حفظ البيانات
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ApplicantForm;
