import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/app/redux/hooks";

const Welcome: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center px-6 py-6
      bg-gradient-to-r from-[#1e63e9] via-[#3c87f0] to-[#2bb3cb]
      rounded-2xl shadow-xl gap-6 text-white
      backdrop-blur-md hover:shadow-2xl"
    >
      {/* Logo */}
      <div className="bg-white p-2 rounded-full shadow-lg">
        <img
          src="/logo.jpeg"
          alt="Logo"
          className="size-32 object-contain rounded-full border-4 border-[#468b9b] shadow-md"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col text-center sm:text-right flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
          مرحبًا بك،
          <span className="text-yellow-300">{user?.name}</span>
          <SmileOutlined className="text-yellow-300" />
        </h1>
        <p className="text-sm sm:text-base text-[#e6f7fa] mt-2">
          سعيدون بوجودك معنا في نظام إدارة اللجنة التنسيقية لجمعيات تحفيظ القرآن
          الكريم 🌿
        </p>
      </div>
    </div>
  );
};

export default Welcome;
