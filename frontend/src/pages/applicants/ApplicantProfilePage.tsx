import { useState } from "react";
import { Card, Avatar, Tabs, Button, Switch, Progress, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { TabsProps } from "antd/lib";
import PersonalInfo from "@/components/applicants/PersonalInfo";
import ApplicantNotes from "@/components/applicants/ApplicantNotes";

const levels = [
  { name: "المستوى الأول", color: "#a5d8ff" },
  { name: "المستوى الثاني", color: "#74c0fc" },
  { name: "المستوى الثالث", color: "#4dabf7" },
  { name: "المستوى الرابع", color: "#1c7ed6" },
  { name: "المستوى الخامس", color: "#1864ab" },
];

const ApplicantProfilePage: React.FC = () => {
  // --- Static placeholder applicant data
  const applicant = {
    id: 1,
    applicant_number: "A-0231",
    name: "أحمد علي محمد القحطاني",
    national_id: "1029384756",
    grade: "الثالث المتوسط",
    birth_date: "2009-06-15",
    gender: "ذكر",
    nationality: "سعودي",
    region: "منطقة الرياض",
    city: "الرياض",
    residence: "حي النزهة - شارع الملك عبدالعزيز",
    phone_number: "0501234567",
    email: "ahmad.q@gmail.com",
    entity_type: "مدارس تحفيظ القرآن الكريم",
    entity_name: "مدرسة الإمام الشاطبي لتحفيظ القرآن الكريم",
    guardian_name: "علي محمد القحطاني",
    guardian_relation: "والد",
    guardian_phone: "0559876543",
    rank: "متسابق",
    seniority: "سنة واحدة",
    is_active: true,
    created_at: "2025-10-09",
    created_by: "المشرف العام",
  } as const;

  const [isActive, setIsActive] = useState(applicant.is_active);
  const [currentLevel, setCurrentLevel] = useState(2);

  const promote = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel((lvl) => lvl + 1);
    }
  };

  const demote = () => {
    if (currentLevel > 0) {
      setCurrentLevel((lvl) => lvl - 1);
    }
  };

  const items: TabsProps["items"] = [
    {
      label: "المعلومات الشخصية",
      key: "1",
      children: <PersonalInfo applicant={applicant} />,
    },
    {
      label: "ملاحظات",
      key: "3",
      children: <ApplicantNotes applicant={applicant} />,
    },
  ];

  return (
    <div>
      {/* Applicant Info Card */}
      <Card
        className="shadow-2xl rounded-2xl overflow-hidden border-0 
        bg-gradient-to-l from-[#007F7F] via-[#00BFA6] to-[#3bacc3]"
      >
        <div className="flex items-center justify-between flex-wrap gap-y-6 text-white">
          {/* Avatar */}
          <div className="flex items-center flex-wrap gap-4">
            <Avatar
              size={80}
              className="bg-white text-[#007F7F] font-bold border-4 border-white shadow-lg"
            >
              {applicant.applicant_number}
            </Avatar>

            <div>
              <h2 className="text-xl font-extrabold drop-shadow-sm">
                {applicant.rank} / {applicant.name}
              </h2>
              <p className="text-white/90">{applicant.seniority}</p>
            </div>
          </div>

          {/* Status (optional) */}
          {/* <div className="flex items-center gap-2">
      <Switch
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
        checkedChildren="نشط"
        unCheckedChildren="موقوف"
      />
    </div> */}
        </div>
      </Card>

      {/* Levels Section */}
      <Card
        className="mt-4 shadow-md rounded-xl border border-blue-100 bg-gradient-to-r from-[#e7f5ff] to-[#f8f9fa]"
        title={<span className="font-semibold">مستوى المتسابق الحالي</span>}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center gap-3 w-full sm:w-1/2">
            <Tag
              color={levels[currentLevel].color}
              className="px-4 py-2 text-lg font-semibold rounded-full"
            >
              {levels[currentLevel].name}
            </Tag>

            <Progress
              percent={((currentLevel + 1) / levels.length) * 100}
              strokeColor={levels[currentLevel].color}
              className="w-full"
            />

            <p className="text-sm text-gray-500">
              {currentLevel + 1} من {levels.length} مستويات
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              type="primary"
              icon={<ArrowUpOutlined />}
              onClick={promote}
              disabled={currentLevel >= levels.length - 1}
              className="bg-gradient-to-r from-blue-600 to-blue-400 border-none hover:opacity-90"
            >
              ترقية المتسابق
            </Button>
            <Button
              danger
              icon={<ArrowDownOutlined />}
              onClick={demote}
              disabled={currentLevel <= 0}
            >
              خفض المستوى
            </Button>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs
        renderTabBar={(props, DefaultTabBar) => (
          <DefaultTabBar {...props} className="md:ps-2" />
        )}
        className="mt-4"
        direction="rtl"
        items={items}
      />

      {/* Meta + Actions */}
      <div className="flex justify-between mt-2 flex-wrap gap-2">
        <div className="flex gap-1 flex-col text-sm">
          <div>
            <span className="font-medium text-gray-700">تاريخ الإضافة: </span>
            {applicant.created_at}
          </div>
          <div>
            <span className="font-medium text-gray-700">بواسطة: </span>
            {applicant.created_by}
          </div>
        </div>

        <div className="btn-wrapper flex md:justify-end mt-4 flex-wrap gap-4">
          <Button type="primary" icon={<EditOutlined />}>
            تعديل البيانات
          </Button>

          <Button danger icon={<DeleteOutlined />}>
            حذف المتسابق
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfilePage;
