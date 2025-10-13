import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FaQuran } from "react-icons/fa";
import {
  useLoginMutation,
  useVerifyMutation,
} from "@/admin/app/api/endpoints/auth";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Loading from "@/admin/components/Loading";
import { storeTokens } from "@/admin/utils/storage";

const LoginPage = () => {
  const [params] = useSearchParams();

  const [
    login,
    {
      data: tokens,
      isLoading: logging,
      isSuccess: logged,
      isError: wrongCredentials,
    },
  ] = useLoginMutation();

  const [verify, { isLoading: verifying, isSuccess: verified }] =
    useVerifyMutation();

  const [message, setMessage] = useState<string | null>(null);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setMessage(null);
    login({ username: values.username, password: values.password });
  };

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access) verify({ access });
  }, []);

  useEffect(() => {
    if (wrongCredentials) {
      setMessage("بيانات الدخول غير صحيحة");
      form.resetFields();
    }
  }, [wrongCredentials]);

  useEffect(() => {
    const next = params.get("next");
    const path = next && next !== "/admin/login" ? next : "/admin";
    if (logged) storeTokens(tokens);
    if (logged || verified) window.location.href = path;
  }, [logged, verified]);

  if (verifying || logged || verified) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse relative text-white font-[Cairo]">
      {/* Right side - Form */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-[#002B5B] via-[#003B66] to-[#005B96]">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-sm sm:max-w-md border border-white/20 hover:shadow-blue-700/40 transition-all duration-300">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center rounded-full border-4 border-[#00B6A0] bg-white p-2">
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="w-28 h-28 object-contain rounded-full border-2 border-[#00B6A0]"
              />
            </div>
            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-[#00B6A0]">
              تسجيل الدخول
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              مرحبًا بكم في جائزة الناشئة لحفظ القرآن الكريم
            </p>
          </div>

          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item
              label={<span className="text-white">اسم المستخدم</span>}
              name="username"
              rules={[{ required: true, message: "يرجى إدخال اسم المستخدم" }]}
            >
              <Input
                size="large"
                placeholder="اسم المستخدم"
                prefix={<UserOutlined className="text-[#00B6A0]" />}
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">كلمة المرور</span>}
              name="password"
              rules={[{ required: true, message: "يرجى إدخال كلمة المرور" }]}
            >
              <Input.Password
                size="large"
                placeholder="كلمة المرور"
                prefix={<LockOutlined className="text-[#00B6A0]" />}
              />
            </Form.Item>

            {message && (
              <div className="text-center text-red-400 font-semibold mt-2">
                {message}
              </div>
            )}

            <Form.Item className="mt-6">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-gradient-to-r from-[#00B6A0] to-[#0078D4] hover:opacity-90 border-none font-bold"
                loading={logging}
              >
                دخول
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Left side - Welcome text (subtle tones) */}
      <div className="relative hidden md:flex w-full md:w-[55%] flex-col justify-center items-start px-8 lg:px-16 bg-gradient-to-br from-[#015C5C] via-[#00445A] to-[#0A1F33]">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/quran-bg.jpg"
            alt="Quran Background"
            className="w-full h-full object-cover opacity-20 brightness-75"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4 text-[#FFF]">
            <FaQuran size={40} className="text-teal-300 drop-shadow-lg" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              جائزة الناشئة لحفظ القرآن الكريم
            </h1>
          </div>

          <p className="text-lg opacity-90 mb-6 leading-relaxed text-white/90">
            بيئة تنافسية راقية تعزز حفظ كتاب الله الكريم في نفوس الناشئة، وتنمي
            مهارات التلاوة والتجويد منذ الصغر في أجواء يسودها الإيمان والتميز.
          </p>

          <p className="text-sm text-white/80 border-r-4 border-teal-400 pr-4 italic">
            “إن هذا القرآن يهدي للتي هي أقوم ويبشر المؤمنين الذين يعملون
            الصالحات أن لهم أجراً كبيراً.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
