import { useEffect, useState } from "react";
import { Card, Avatar, Tabs, Button, Progress, Tag, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { TabsProps } from "antd/lib";
import PersonalInfo from "@/components/applicants/PersonalInfo";
import ApplicantNotes from "@/components/applicants/ApplicantNotes";
import { useNavigate, useParams } from "react-router";
import { useNotification } from "@/providers/NotificationProvider";
import {
  useApplicantMutation,
  useGetApplicantQuery,
} from "@/app/api/endpoints/applicants";
import ErrorPage from "../Error";
import { axiosBaseQueryError } from "@/app/api/axiosBaseQuery";
import Loading from "@/components/Loading";

const levels = [
  { name: "المستوى الأول", color: "#a5d8ff" },
  { name: "المستوى الثاني", color: "#74c0fc" },
  { name: "المستوى الثالث", color: "#4dabf7" },
  { name: "المستوى الرابع", color: "#1c7ed6" },
  { name: "المستوى الخامس", color: "#1864ab" },
];

const ApplicantProfilePage: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(2);
  const navigate = useNavigate();
  const notification = useNotification();
  const { applicant_id } = useParams();

  const {
    data: applicant,
    isFetching,
    isError,
    error: applicantError,
  } = useGetApplicantQuery({ id: applicant_id as string });

  const [
    deleteApplicant,
    {
      isError: deleteIsError,
      error: deleteError,
      isLoading: deleting,
      isSuccess: deleted,
    },
  ] = useApplicantMutation();

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

  const handleDelete = () => {
    deleteApplicant({
      url: `/applicants/applicants/${applicant_id}/`,
      method: "DELETE",
      data: {},
    });
  };

  const items: TabsProps["items"] = [
    {
      label: "المعلومات الشخصية",
      key: "1",
      children: <PersonalInfo applicant={applicant!} />,
    },
    {
      label: "ملاحظات",
      key: "3",
      children: <ApplicantNotes notes={applicant?.notes} />,
    },
  ];

  useEffect(() => {
    if (deleteIsError) {
      let message = (deleteError as axiosBaseQueryError)?.data.detail ?? null;
      notification.error({
        message: message ?? "حدث خطأ أثناء حذف المتسابق ! برجاء إعادة المحاولة",
      });
    }
  }, [deleteIsError]);

  useEffect(() => {
    if (deleted) {
      notification.success({
        message: "تم حذف المتسابق بنجاح",
      });

      navigate("/applicants");
    }
  }, [deleted]);

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
              {applicant?.id}
            </Avatar>

            <div>
              <h2 className="text-xl font-extrabold drop-shadow-sm">
                {applicant?.name}
              </h2>
              <p className="text-white/90">
                {applicant?.entity_type} / {applicant?.entity_name}
              </p>
            </div>
          </div>
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
            {applicant?.created_at}
          </div>
          <div>
            <span className="font-medium text-gray-700">بواسطة: </span>
            {applicant?.created_by}
          </div>
        </div>

        <div className="btn-wrapper flex md:justify-end mt-4 flex-wrap gap-4">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              navigate(`/applicants/edit/${applicant_id}`);
            }}
          >
            تعديل البيانات
          </Button>

          <Popconfirm
            title="هل أنت متأكد من حذف هذا المتسابق؟"
            onConfirm={handleDelete}
            okText="نعم"
            cancelText="لا"
          >
            <Button
              className="enabled:bg-red-500 enabled:border-red-500 enabled:shadow-[0_2px_0_rgba(0,58,58,0.31)]
            enabled:hover:border-red-400 enabled:hover:bg-red-400 enabled:text-white"
              icon={<DeleteOutlined />}
              loading={deleting}
            >
              حذف المتسابق
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfilePage;
