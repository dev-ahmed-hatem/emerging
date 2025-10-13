import React from "react";
import { Card, Typography } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useGetApplicantsStatsQuery } from "@/admin/app/api/endpoints/applicants";
import Loading from "../Loading";
import ErrorPage from "@/admin/pages/Error";

const { Title } = Typography;

// Mock static data
const mockApplicantStats = {
  levels: [
    { name: "الأول", count: 120 },
    { name: "الثاني", count: 85 },
    { name: "الثالث", count: 60 },
    { name: "الرابع", count: 35 },
    { name: "الخامس", count: 12 },
  ],
  gender: [
    { name: "ذكور", value: 180 },
    { name: "إناث", value: 120 },
  ],
  regions: [
    { region: "منطقة الرياض", count: 120 },
    { region: "منطقة مكة المكرمة", count: 98 },
    { region: "منطقة المدينة المنورة", count: 75 },
    { region: "منطقة القصيم", count: 64 },
    { region: "المنطقة الشرقية", count: 110 },
    { region: "منطقة عسير", count: 80 },
    { region: "منطقة تبوك", count: 55 },
    { region: "منطقة حائل", count: 43 },
    { region: "منطقة الحدود الشمالية", count: 32 },
    { region: "منطقة جازان", count: 70 },
    { region: "منطقة نجران", count: 45 },
    { region: "منطقة الباحة", count: 36 },
    { region: "منطقة الجوف", count: 36 },
  ],
  entityTypes: [
    { name: "جمعيات تحفيظ القرآن الكريم بالمملكة", value: 120 },
    { name: "مدارس تحفيظ القرآن الكريم", value: 90 },
    { name: "التعليم العام (الحكومي، الأهلي، الأجنبي)", value: 50 },
  ],
};

// color palettes
const COLORS_LEVELS = [
  "#0078D4", // Blue
  "#00B6A0", // Teal
  "#F9A826", // Amber
  "#FF5A5F", // Coral Red
  "#8B5CF6", // Vibrant Violet (new)
];

const COLORS_GENDER = ["#1E88E5", "#E91E63"];
const COLORS_ENTITIES = ["#6C5CE7", "#00B894", "#0984E3", "#FAB1A0"];

// regions gradients
const gradients = [
  "from-[#0078D4] to-[#00B6A0]", // blue → teal
  "from-[#F9A826] to-[#FF5A5F]", // amber → coral
  "from-[#8B5CF6] to-[#00B6A0]", // purple → teal
  "from-[#FF5A5F] to-[#F9A826]", // coral → amber
  "from-[#00B6A0] to-[#0078D4]", // teal → blue
  "from-[#F97316] to-[#F43F5E]", // orange → pink
  "from-[#2563EB] to-[#9333EA]", // indigo → violet
  "from-[#06B6D4] to-[#3B82F6]", // cyan → blue
  "from-[#10B981] to-[#065F46]", // emerald → deep green
  "from-[#EF4444] to-[#BE123C]", // red → burgundy
  "from-[#EAB308] to-[#F97316]", // gold → orange
  "from-[#6366F1] to-[#0EA5E9]", // indigo → sky blue
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 p-2 rounded-lg shadow text-sm border border-gray-200">
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-blue-600">{`عدد المتسابقين: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ApplicantsStats: React.FC = () => {
  const { data: stats, isLoading, isError } = useGetApplicantsStatsQuery();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;
  return (
    <div className="p-4 flex flex-col gap-8">
      {/* Title */}
      <div className="text-center">
        <Title level={2} className="!text-3xl !font-bold text-gray-800">
          إحصائيات المتسابقين
        </Title>
        <p className="text-gray-500 mt-1">
          نظرة عامة على بيانات المتسابقين في النظام
        </p>
      </div>

      {/* Levels Distribution - Bar Chart */}
      <Card className="shadow-lg rounded-2xl">
        <Title level={4} className="text-center mb-4 text-gray-700">
          توزيع المتسابقين حسب المستوى
        </Title>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={stats!.levels}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" radius={[8, 8, 0, 0]} barSize={150}>
              {stats!.levels.map((_, i) => (
                <Cell key={i} fill={COLORS_LEVELS[i % COLORS_LEVELS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Gender Distribution - Pie Chart */}
      <Card className="shadow-lg rounded-2xl">
        <Title level={4} className="text-center mb-4 text-gray-700">
          التوزيع حسب الجنس
        </Title>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={stats!.gender}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {stats!.gender.map((_, i) => (
                <Cell key={i} fill={COLORS_GENDER[i % COLORS_GENDER.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Region Distribution - Horizontal Bar Chart */}
      <Card className="shadow-lg rounded-2xl border border-gray-100">
        <Title level={4} className="text-center mb-4 text-gray-700">
          توزيع المتقدمين حسب المنطقة
        </Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats!.regions.map((region, index) => (
            <div
              key={region.region}
              className={`
              relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg
              bg-gradient-to-br ${gradients[index % gradients.length]}
              text-white transition-transform transform hover:scale-[1.05] hover:shadow-2xl
              overflow-hidden group
            `}
            >
              {/* Icon */}
              <div className="mb-3 transform group-hover:-translate-y-1 transition-all duration-300">
                <EnvironmentOutlined className="text-4xl text-white" />
              </div>

              {/* Region Name */}
              <h3 className="text-lg font-semibold text-center mb-1">
                {region.region}
              </h3>

              {/* Count */}
              <p className="text-3xl font-extrabold tracking-wide">
                {region.count}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </Card>

      {/* Entity Type - Donut Chart */}
      <Card className="shadow-lg rounded-2xl">
        <Title level={4} className="text-center mb-4 text-gray-700">
          توزيع المتسابقين حسب جهة التقديم
        </Title>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={stats!.entityTypes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={4}
              label
            >
              {stats!.entityTypes.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS_ENTITIES[i % COLORS_ENTITIES.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default ApplicantsStats;
