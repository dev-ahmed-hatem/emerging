import { useState } from "react";
import { Table, Input, Avatar, Space, Tag } from "antd";
import { SortOrder } from "antd/lib/table/interface";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router";
import { tablePaginationConfig } from "@/admin/utils/antd";
import { useGetApplicantsQuery } from "@/admin/app/api/endpoints/applicants";
import { PaginatedResponse } from "@/admin/types/paginatedResponse";
import { Applicant, entityOptions, regions } from "@/admin/types/applicant";
import ErrorPage from "../Error";
import Loading from "@/admin/components/Loading";
import { useGetLevelsQuery } from "@/admin/app/api/endpoints/levels";
import { ColumnsType } from "antd/es/table";
import { generateBluePalette, Level } from "@/admin/types/level";

type ControlsType = {
  sort_by?: string;
  order?: SortOrder;
  filters: {
    level?: string;
    entity_type?: string;
    region?: string;
  };
} | null;

const ApplicantsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [controls, setControls] = useState<ControlsType>({
    sort_by: "name",
    order: "ascend",
    filters: {},
  });

  const {
    data: levels,
    isLoading: loadingLevels,
    isError: levelsError,
  } = useGetLevelsQuery();
  const {
    data: rawApplicants,
    isLoading,
    isFetching,
    isError,
  } = useGetApplicantsQuery({
    no_pagination: false,
    search,
    page,
    page_size: pageSize,
    sort_by: controls?.sort_by,
    order: controls?.order === "descend" ? "-" : "",

    level: controls?.filters.level,
    entity_type: controls?.filters.entity_type,
    region: controls?.filters.region,
  });
  const applicants = rawApplicants as PaginatedResponse<Applicant> | undefined;

  // --- Table Columns
  const columns: ColumnsType<Applicant> = [
    {
      title: "م",
      key: "index",
      render: (_: any, __: any, index: number) => index + 1,
      width: 60,
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      sorter: true,
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
      filters: Object.keys(regions).map((region) => ({
        text: region,
        value: region,
      })),
      defaultFilteredValue: controls?.filters.region?.split(","),
    },
    {
      title: "المدينة",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "الجهة",
      dataIndex: "entity_type",
      key: "entity_type",
      ellipsis: true,
      filters: entityOptions.map((opt) => ({ text: opt, value: opt })),
      defaultFilteredValue: controls?.filters.entity_type?.split(","),
    },
    {
      title: "اسم الجهة",
      dataIndex: "entity_name",
      key: "entity_name",
      ellipsis: true,
    },
    {
      title: "المستوى الحالي",
      dataIndex: "level",
      key: "level",
      render: (level: Level) => (
        <Tag
          className="text-base font-semibold py-1 px-3"
          style={{
            backgroundColor: generateBluePalette(levels!.length)[
              level.weight - 1
            ],
          }}
        >
          {level.name}
        </Tag>
      ),
      filters: levels?.map((level) => ({
        value: level.weight,
        text: level.name,
      })),
      defaultFilteredValue: controls?.filters?.level?.split(","),
    },
  ];

  if (isLoading || loadingLevels) return <Loading />;
  if (isError || levelsError) return <ErrorPage />;
  return (
    <div className="py-6">
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
        </div>

        {/* Add Button */}
        <Link
          to="add"
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
        dataSource={applicants?.data}
        columns={columns}
        rowKey="id"
        bordered
        onRow={(record) => ({
          onClick: () => navigate(`applicant-profile/${record.id}`),
        })}
        loading={isFetching}
        pagination={tablePaginationConfig({
          total: applicants?.count,
          current: applicants?.page,
          showQuickJumper: true,
          pageSize,
          onChange(page, pageSize) {
            setPage(page);
            setPageSize(pageSize);
          },
        })}
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
