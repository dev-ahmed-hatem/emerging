import { useState } from "react";
import { Table, Input, Avatar, Space, Tag, Radio } from "antd";
import { SortOrder } from "antd/lib/table/interface";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router";
import { tablePaginationConfig } from "@/utils/antd";

type ControlsType = {
  sort_by?: string;
  order?: SortOrder;
  filters: {
    rank?: string;
    name: string;
    work_entity?: string;
    seniority?: string;
  };
} | null;

const ApplicantsList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<"name" | "city" | "region">(
    "name"
  );
  const [controls, setControls] = useState<ControlsType>({
    sort_by: "membership_number",
    order: "ascend",
    filters: { name: "active" },
  });

  // --- Mock applicant data
  const applicants = [
    {
      id: 1,
      name: "أحمد محمد علي",
      region: "منطقة الرياض",
      city: "الرياض",
      organization: "جمعية تحفيظ القرآن بالرياض",
      level: "المستوى الثالث",
    },
    {
      id: 2,
      name: "سارة عبدالله القحطاني",
      region: "منطقة مكة المكرمة",
      city: "جدة",
      organization: "مدرسة التحفيظ الأولى",
      level: "المستوى الثاني",
    },
    {
      id: 3,
      name: "محمد خالد الدوسري",
      region: "منطقة الشرقية",
      city: "الدمام",
      organization: "التعليم العام",
      level: "المستوى الرابع",
    },
    {
      id: 4,
      name: "نورة فهد الشمري",
      region: "منطقة القصيم",
      city: "بريدة",
      organization: "مدرسة النور للتحفيظ",
      level: "المستوى الأول",
    },
  ];

  // --- Filter by search
  const filteredApplicants = applicants.filter((applicant) =>
    applicant[searchType].includes(search)
  );

  // --- Table Columns
  const columns = [
    {
      title: "م",
      key: "index",
      render: (_: any, __: any, index: number) => index + 1,
      width: 60,
    },
    {
      title: "الاسم الكامل",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <Space>
          <Avatar
            className="bg-gradient-to-br from-[#007F7F] to-[#00BFA6] text-white font-semibold"
            icon={<UserOutlined />}
          />
          <span className="font-medium">{text}</span>
        </Space>
      ),
    },
    {
      title: "المنطقة",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "المدينة",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "الجهة",
      dataIndex: "organization",
      key: "organization",
      ellipsis: true,
    },
    {
      title: "المستوى الحالي",
      dataIndex: "level",
      key: "level",
      render: (level: string) => (
        <Tag color="blue" className="text-base font-semibold">
          {level}
        </Tag>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl md:text-3xl font-bold text-gray-800">
        قائمة المتسابقين
      </h1>

      {/* Controls */}
      <div className="flex justify-between flex-wrap mb-4 gap-6">
        {/* Search Input */}
        <div className="flex flex-col w-full max-w-md">
          <Input.Search
            placeholder="ابحث عن متسابق..."
            onSearch={setSearch}
            className="mb-4 w-full max-w-md h-10"
            allowClear
          />

          <div className="flex flex-wrap gap-3 items-center">
            <span>بحث ب:</span>
            <Radio.Group
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="mt-1"
            >
              <Radio.Button value="name">الاسم</Radio.Button>
              <Radio.Button value="region">المنطقة</Radio.Button>
              <Radio.Button value="city">المدينة</Radio.Button>
            </Radio.Group>
          </div>
        </div>

        {/* Add Button */}
        <Link
          to="/applicants/add"
          className="h-10 px-6 flex items-center text-white gap-2 rounded-lg
            bg-gradient-to-l from-[#007F7F] to-[#00BFA6]
            hover:from-[#008E8E] hover:to-[#19CBB4]
            shadow-[0_2px_0_rgba(0,0,0,0.2)]
            transition-all duration-200"
        >
          <PlusOutlined />
          <span>إضافة متسابق</span>
        </Link>
      </div>

      {/* Table */}
      <Table
        dataSource={filteredApplicants}
        columns={columns}
        rowKey="id"
        bordered
        onRow={(record) => ({
          onClick: () => navigate(`applicant-profile/${record.id}`),
        })}
        // loading={isFetching}
        pagination={tablePaginationConfig()}
        onChange={(_, filters, sorter: any) => {
          setControls({
            ...(sorter.column?.key && { sort_by: sorter.column.key }),
            ...(sorter.order && { order: sorter.order }),
            filters: Object.fromEntries(
              Object.entries(filters).map(([filter, values]) => [
                filter,
                (values as string[])?.join(),
              ])
            ),
          });
        }}
        scroll={{ x: "max-content" }}
        className="clickable-table  minsk-header"
      />
    </div>
  );
};

export default ApplicantsList;
