import React from "react";

// أيقونة لتمثيل الشعار أو الجمعية
const BuildingIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
    <path d="M6 15h2"></path>
    <path d="M10 15h2"></path>
    <path d="M14 15h2"></path>
    <path d="M6 11h2"></path>
    <path d="M10 11h2"></path>
    <path d="M14 11h2"></path>
    <path d="M2 7l10-5 10 5"></path>
  </svg>
);

const FoundingSocietiesSection = () => {
  // الألوان الرئيسية المستخدمة (مستخلصة من ألوان الهوية):
  // primary: #246efe (Blue - from --color-primary-500)
  // secondary: #6de7fe (Cyan - from --color-secondary-500)
  const primaryColor = "#246efe";
  const secondaryColor = "#6de7fe";
  const softNeutralBg = "#f9fafb"; // لون الخلفية الحيادي الناعم

  // خطوط عربية جميلة (بناءً على الهوية المرفقة: Cairo/Almarai)
  const fontStyles = {
    fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
  };

  // قائمة الجمعيات المؤسسة (13 جمعية - بيانات وهمية لغرض التصميم)
  const societies = [
    {
      name: "جمعية مكنون لتحفيظ القرآن",
      city: "الرياض",
      description:
        "من الجمعيات الرائدة في العاصمة وتشتهر بتبني التقنيات الحديثة.",
    },
    {
      name: "جمعية خيركم لتحفيظ القرآن",
      city: "جدة",
      description:
        "تغطي منطقة واسعة وتنفذ برامج نوعية مبتكرة على مستوى المملكة.",
    },
    {
      name: "جمعية الفرقان لتحفيظ القرآن",
      city: "مكة المكرمة",
      description: "تخدم أشرف البقاع وتسعى لتعميم حلقات التحفيظ في محيط الحرم.",
    },
    {
      name: "جمعية التبيان لتحفيظ القرآن",
      city: "المدينة المنورة",
      description:
        "تعمل على نشر كتاب الله في مدينة رسول الله صلى الله عليه وسلم.",
    },
    {
      name: "جمعية تحفيظ القرآن بالقصيم",
      city: "منطقة القصيم",
      description:
        "لها انتشار واسع في المنطقة الوسطى وبرامج مجتمعية فعالة ومستدامة.",
    },
    {
      name: "جمعية تحفيظ القرآن بالشرقية",
      city: "الدمام والخبر",
      description:
        "تشمل الدمام والخبر وتسعى للتوسع الجغرافي في كافة مدن المنطقة.",
    },
    {
      name: "جمعية آيات لتحفيظ القرآن",
      city: "عسير",
      description:
        "تخدم المنطقة الجنوبية ببرامج متخصصة ومبتكرة للرجال والنساء.",
    },
    {
      name: "جمعية تحفيظ القرآن بتبوك",
      city: "تبوك",
      description:
        "مساهمة فعالة في تنمية جيل القرآن بالمنطقة الشمالية الغربية.",
    },
    {
      name: "جمعية أهالي الخير لتحفيظ القرآن",
      city: "الجوف",
      description:
        "تركز على البرامج النوعية والاستدامة المالية لضمان استمراريتها.",
    },
    {
      name: "جمعية تحفيظ القرآن بنجران",
      city: "نجران",
      description:
        "لها دور كبير في تحفيظ الناشئة والشباب وتمكينهم من حفظ القرآن.",
    },
    {
      name: "جمعية تحفيظ القرآن بالباحة",
      city: "الباحة",
      description:
        "تعمل على تفعيل دور المرأة والأسرة في منظومة تعليم القرآن الكريم.",
    },
    {
      name: "جمعية تحفيظ القرآن بحدود الشمالية",
      city: "الحدود الشمالية",
      description: "تسعى لسد الاحتياج في المناطق الحدودية وتقديم خدمات متميزة.",
    },
    {
      name: "جمعية تحفيظ القرآن بحائل",
      city: "حائل",
      description: "تتميز ببرامجها الرقمية لخدمة مختلف الفئات والأعمار عن بعد.",
    },
  ];

  return (
    <>
      {/* ========================================
              CSS مخصص للحركات والزخرفة
              ========================================
            */}
      <style>
        {`
                  /* استيراد الخطوط مؤقتاً للتأكد من عرضها حتى يتم تطبيقها عالمياً */
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

                  /* 1. تأثير الخلفية الناعمة */
                  .section-soft-bg {
                    background-color: ${softNeutralBg};
                  }
                  
                  /* 2. تنسيق عنوان احترافي بفاصل مزدوج (تم استخدام ألوان الهوية الجديدة) */
                  .elegant-title-container {
                      position: relative;
                      padding-bottom: 2.5rem; 
                  }
                  .elegant-title-container::after {
                      content: '';
                      position: absolute;
                      bottom: 1rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 150px; 
                      height: 4px;
                      background-color: ${primaryColor}; /* الأزرق */
                      border-radius: 3px;
                  }
                  .elegant-title-container::before {
                      content: '';
                      position: absolute;
                      bottom: 0.75rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 60px; 
                      height: 4px;
                      background-color: ${secondaryColor}; /* السيان */
                      border-radius: 3px;
                  }
                  
                  /* 3. تأثير الظهور التدريجي (Fade In Up) */
                  .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) forwards;
                  }
                  
                  @keyframes fadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  
                  /* 4. إعداد تأخير الحركة لكل بطاقة */
                  ${societies
                    .map(
                      (_, index) =>
                        `.delay-${index + 1} { animation-delay: ${
                          index * 0.08 + 0.1
                        }s; }`
                    )
                    .join("\n")}
                  
                  /* 5. تصميم البطاقة (Hover Effect) */
                  .society-card {
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    border-top: 5px solid transparent; /* شريط علوي مبدئي */
                  }
                  .society-card:hover {
                    transform: translateY(-7px) scale(1.02);
                    /* ظل خفيف باللون الأساسي */
                    box-shadow: 0 18px 40px rgba(36, 110, 254, 0.2); 
                    border-top-color: ${primaryColor}; /* شريط أزرق عند التحويم */
                  }
                  /* 6. تنسيق دائرة الشعار/اللوجو */
                  .logo-placeholder-circle {
                      background-color: ${secondaryColor}; /* خلفية سيان للشعار */
                      box-shadow: 0 5px 15px rgba(109, 231, 254, 0.4);
                  }
                `}
      </style>

      {/* الحاوية الرئيسية للسكشن - خلفية ناعمة ومساحة داخلية */}
      <section
        className="section-soft-bg pt-12 pb-20 md:pt-20 md:pb-28"
        style={fontStyles}
      >
        {/* حاوية العنوان الموحد */}
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <div className="elegant-title-container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
              <span style={{ color: primaryColor }}>{societies.length}</span>{" "}
              جمعية مؤسسة
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
              قائمة بالجمعيات التي بادرت بتأسيس اللجنة التنسيقية، والمساهمة في
              تحقيق أهدافها الاستراتيجية لخدمة كتاب الله.
            </p>
          </div>
        </div>

        {/* حاوية الجمعيات - تصميم شبكي مرن (4 أعمدة على الشاشات الكبيرة) */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {societies.map((society, index) => (
              // بطاقة الجمعية مع الحركة وتأثير التحويم
              <div
                key={index}
                className={`fade-in-up delay-${
                  index + 1
                } society-card bg-white rounded-xl border border-gray-100
                                    p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full`}
              >
                {/* 1. منطقة اللوجو والرمز */}
                <div className="logo-placeholder-circle w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <BuildingIcon className="w-8 h-8 text-white" />
                </div>

                {/* 2. اسم الجمعية والمدينة */}
                <h3
                  className="text-xl font-bold mb-1 leading-snug"
                  style={{ color: primaryColor }}
                >
                  {society.name}
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">
                  {society.city}
                </p>

                {/* 3. وصف الجمعية */}
                <p className="text-gray-700 text-base leading-relaxed mt-2 flex-1">
                  {society.description}
                </p>

                {/* زر وهمي أو فاصل */}
                <a
                  href="#"
                  className="mt-4 text-sm font-bold transition duration-300"
                  style={{ color: primaryColor }}
                >
                  عرض التفاصيل &larr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundingSocietiesSection;


