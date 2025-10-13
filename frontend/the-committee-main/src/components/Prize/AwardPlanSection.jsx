import React from "react";
import { FileText, ClipboardList, BookOpen, Settings } from "lucide-react";

// ********************************************
// ألوان الهوية (للاستخدام الهادئ على خلفية فاتحة)
// ********************************************
const PRIMARY_COLOR_DARK = "#057687"; // الفيروزي الداكن (لون أساسي للعناوين والأيقونات)
const PRIMARY_COLOR_LIGHT = "#057687"; // الفيروزي الداكن (اللون الأساسي للعناصر)
const ACCENT_COLOR_GOLD = "#d4c291"; // الذهبي المطفأ (لون التمييز)
const BACKGROUND_LIGHT = "#FDFDFD"; // الخلفية الفاتحة جداً
const TEXT_LIGHT = "#FFFFFF"; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات المراحل
// ********************************************
const stages = [
  {
    title: "اللائحة الأساسية للمسابقة",
    description:
      "وضع الإطار القانوني والتنظيمي الشامل لضمان النزاهة والشفافية.",
    icon: FileText,
    delay: 0,
  },
  {
    title: "نظام التحكيم",
    description:
      "تصميم معايير دقيقة ومحكمة لتقييم المتقدمين والمرشحين للجائزة وتحديد مستوياتهم.",
    icon: ClipboardList,
    delay: 0.1,
  },
  {
    title: "نماذج المسابقة",
    description:
      "إعداد النماذج التجريبية وتدريب اللجان لتنفيذ الجائزة بكفاءة عالية.",
    icon: BookOpen,
    delay: 0.2,
  },
  {
    title: "الخطة التشغيلية",
    description:
      "تحديد الجدول الزمني والموارد اللازمة لضمان سير كافة الفعاليات.",
    icon: Settings,
    delay: 0.3,
  },
];

// ********************************************
// المكون الفرعي: بطاقة المرحلة
// ********************************************
const StageCard = ({ stage, index }) => {
  const IconComponent = stage.icon;

  // تصميم بطاقة المرحلة
  return (
    <div
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group"
      style={{
        backgroundColor: "white",
        border: `2px solid ${PRIMARY_COLOR_LIGHT}`,
        animation: `fadeInUp 0.6s ease-out forwards ${stage.delay}s`,
        opacity: 0, // يبدأ مخفياً
        minHeight: "250px",
      }}
    >
      {/* أيقونة المرحلة */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-4 transition-all duration-500"
        style={{
          backgroundColor: PRIMARY_COLOR_LIGHT,
          boxShadow: `0 0 0 5px ${ACCENT_COLOR_GOLD}50`, // تأثير هادئ حول الدائرة
          color: TEXT_LIGHT, // الأبيض
        }}
      >
        <IconComponent
          size={32}
          strokeWidth={2}
          className="group-hover:rotate-6 transition duration-500"
        />
      </div>

      {/* عنوان المرحلة */}
      <h3
        className="text-xl sm:text-2xl font-extrabold mb-2"
        style={{ color: PRIMARY_COLOR_LIGHT }}
      >
        {stage.title}
      </h3>

      {/* وصف المرحلة */}
      <p className="text-base text-gray-600 font-medium leading-relaxed">
        {stage.description}
      </p>
    </div>
  );
};

// ********************************************
// المكون الرئيسي
// ********************************************
const AwardPlanSection = () => {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        direction: "rtl",
        backgroundColor: BACKGROUND_LIGHT,
        fontFamily: "Almarai, Tahoma, sans-serif",
      }}
    >
      {/* تعريف الأنميشن (يجب أن يكون في الملف الرئيسي لـ React) */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        {/* العنوان الرئيسي */}
        <header className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
            style={{ color: PRIMARY_COLOR_DARK }} // تم إصلاح استخدام المتغير هنا
          >
            خطة الجائـــــــــــــــزة
            {/* خط ذهبي سميك تحت العنوان */}
            <span
              className="absolute bottom-0 right-0 w-full h-1"
              style={{ backgroundColor: ACCENT_COLOR_GOLD }}
            ></span>
          </h2>
          <h3
            className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-700"
            style={{ color: PRIMARY_COLOR_LIGHT }}
          >
            المرحلة الأولى: التأسيــــــــــــــــــــس
          </h3>
        </header>

        {/* شبكة المراحل (Process Flow) */}
        <div className="relative">
          {/* خطوط الوصل المتقطعة */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-between pointer-events-none z-0 px-12">
            {stages.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="flex-1 h-0.5 relative mx-4"
                style={{ backgroundColor: ACCENT_COLOR_GOLD, opacity: 0.6 }}
              >
                <div
                  className="absolute inset-0 h-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 10px, ${ACCENT_COLOR_GOLD} 10px, ${ACCENT_COLOR_GOLD} 15px)`,
                    opacity: 0.8,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* بطاقات المراحل */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {/* يتم عكس الترتيب ليتوافق مع التخطيط العربي (من اليمين لليسار) */}
            {stages
              .slice()
              .reverse()
              .map((stage, index) => (
                <StageCard
                  key={index}
                  stage={{ ...stage, delay: stage.delay + 0.3 }}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardPlanSection;
