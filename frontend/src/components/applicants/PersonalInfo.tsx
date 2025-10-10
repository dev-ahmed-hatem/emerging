import { Descriptions } from "antd";
import { Applicant } from "@/types/applicant";

const PersonalInfo = ({ applicant }: { applicant: Applicant }) => {
  return (
    <Descriptions bordered column={1} className="rounded-lg shadow-sm">
      <Descriptions.Item label="الاسم الكامل">
        {applicant.name}
      </Descriptions.Item>

      <Descriptions.Item label="رقم الهوية الوطنية">
        {applicant.national_id}
      </Descriptions.Item>

      <Descriptions.Item label="الصف الدراسي">
        {applicant.grade}
      </Descriptions.Item>

      <Descriptions.Item label="تاريخ الميلاد">
        {applicant.birth_date}
      </Descriptions.Item>

      <Descriptions.Item label="الجنس">{applicant.gender}</Descriptions.Item>

      <Descriptions.Item label="الجنسية">
        {applicant.nationality}
      </Descriptions.Item>

      <Descriptions.Item label="المنطقة">{applicant.region}</Descriptions.Item>

      <Descriptions.Item label="المدينة">{applicant.city}</Descriptions.Item>

      <Descriptions.Item label="مكان الإقامة الحالي">
        {applicant.residence}
      </Descriptions.Item>

      <Descriptions.Item label="رقم الجوال">
        {applicant.phone_number}
      </Descriptions.Item>

      <Descriptions.Item label="البريد الإلكتروني">
        {applicant.email}
      </Descriptions.Item>

      <Descriptions.Item label="الجهة">
        {applicant.entity_type}
      </Descriptions.Item>

      <Descriptions.Item label="اسم الجهة">
        {applicant.entity_name}
      </Descriptions.Item>

      <Descriptions.Item label="اسم ولي الأمر الكامل">
        {applicant.guardian_name}
      </Descriptions.Item>

      <Descriptions.Item label="صلة القرابة">
        {applicant.guardian_relation}
      </Descriptions.Item>

      <Descriptions.Item label="رقم جوال ولي الأمر">
        {applicant.guardian_phone}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default PersonalInfo;
