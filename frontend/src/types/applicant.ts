export type Applicant = {
  name: string;
  national_id: string;
  grade: string;
  birth_date: string;
  gender: "ذكر" | "أنثى";
  nationality: "سعودي" | "غير سعودي";
  region: string;
  city: string;
  residence: string;
  phone_number: string;
  email: string;
  guardian_name: string;
  guardian_relation: string;
  guardian_phone: string;
  entity_type: string;
  entity_name: string;
  notes?: string;
};
