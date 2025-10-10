import { Applicant } from "@/types/applicant";
import { textify } from "@/utils";
import { Card } from "antd";

const ApplicantNotes = ({ applicant }: { applicant: Applicant }) => {
  return (
    <Card title="الملاحظات" className="mb-6">
      {textify(applicant?.notes) ? (
        <p className="text-gray-700 whitespace-pre-line">{applicant.notes}</p>
      ) : (
        <p className="text-gray-400 italic">لا توجد ملاحظات</p>
      )}
    </Card>
  );
};

export default ApplicantNotes;
