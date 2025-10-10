import { useParams } from "react-router";
import Loading from "@/components/Loading";
import { axiosBaseQueryError } from "@/app/api/axiosBaseQuery";
import ErrorPage from "../Error";
import { usePermission } from "@/providers/PermissionProvider";
import ApplicantForm from "./ApplicantForm";

const ApplicantEdit = () => {
  const { can } = usePermission();
  if (!can("clients.edit"))
    return (
      <ErrorPage
        title="ليس لديك صلاحية للوصول إلى هذه الصفحة"
        subtitle="يرجى التواصل مع مدير النظام للحصول على الصلاحيات اللازمة."
        reload={false}
      />
    );
  const { client_id } = useParams();
  if (!client_id) return <ErrorPage />;

  // if (isFetching) return <Loading />;
  // if (isError) {
  //   const error_title =
  //     (employeeError as axiosBaseQueryError).status === 404
  //       ? "عضو غير موجود! تأكد من كود العضو المدخل."
  //       : undefined;

  //   return (
  //     <ErrorPage subtitle={error_title} reload={error_title === undefined} />
  //   );
  // }
  return <ApplicantForm/>;
};

export default ApplicantEdit;
