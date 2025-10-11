import { useParams } from "react-router";
import Loading from "@/components/Loading";
import { axiosBaseQueryError } from "@/app/api/axiosBaseQuery";
import ErrorPage from "../Error";
import ApplicantForm from "./ApplicantForm";
import { useGetApplicantQuery } from "@/app/api/endpoints/applicants";

const ApplicantEdit = () => {
  const { applicant_id } = useParams();
  if (!applicant_id) return <ErrorPage />;

  const {
    data: applicantData,
    isFetching,
    isError,
    error: applicantError,
  } = useGetApplicantQuery({ id: applicant_id });

  if (isFetching) return <Loading />;
  if (isError) {
    const error_title =
      (applicantError as axiosBaseQueryError).status === 404
        ? "متسابق غير موجود! تأكد من كود المتسابق المدخل."
        : undefined;

    return (
      <ErrorPage subtitle={error_title} reload={error_title === undefined} />
    );
  }
  return (
    <ApplicantForm initialValues={applicantData} applicant_id={applicant_id} />
  );
};

export default ApplicantEdit;
