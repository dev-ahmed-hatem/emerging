// import React from "react";
// import { motion } from "framer-motion";

// const achievements = [
//   "البدء في إعداد قاعدة بيانات لجمعيــات تحفيـظ القرآن الكريـم بالمملكـة",
//   "تجهيز مقر مخصص للجنة وتأثيثه بالأدوات المكتبية والأجهزة الحاسوبية",
//   "إعداد وثيقة البناء المؤسسي للجنـــــة",
//   "تشكيل اللجنة التنفيذية لمتابعة مبادرات ومشاريع اللجنة التنسيقية، وقد عقدت ستة اجتماعات خلال العام الماضي",
//   "عقد اجتماع عام تعريفي باللجنة لجمعيات تحفيظ القرآن الكريم بالمملكة",
//   "تأسيس الصندوق الوقفي الاستثماري",
//   "إعداد دليل الشراكات الاستراتيجية للجنة",
//   "البدء في إعداد دراسة مسحية ميدانية لاحتياجات وتحديات جمعيات تحفيظ القرآن الكريم بالمملكة",
//   "التواصل مع بعض المؤسسات المانحة التي سترعى عمل اللجنة ومبادراتها",
//   "تدشين دراسة مستقبل تقنيات القرآن الكريم بالشراكة مع جمعية مكنون",
//   "تعيين مسؤول إداري للجنة التنسيقية لجمعيات تحفيظ القرآن في المملكة",
// ];

// const CommitteeAchievements = () => {
//   return (
//     <section className="relative bg-neutral-50 py-16 overflow-hidden">
//       {/* خلفية زخرفية ناعمة */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-light.png')] bg-cover bg-center"></div>

//       <div className="container relative z-10 text-center">
//         {/* العنوان */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl font-bold text-primary-800 mb-12 font-[var(--font-quran-primary)]"
//         >
//           منجزات اللجنة
//         </motion.h2>

//         {/* الشبكة */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {achievements.map((text, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.05,
//                 type: "spring",
//               }}
//               viewport={{ once: true }}
//               className="relative group bg-white shadow-md rounded-2xl p-6 border-t-4 border-primary-500 hover:border-secondary-500 hover:shadow-xl transition-all duration-300 text-right"
//             >
//               {/* رقم الإنجاز */}
//               <div className="absolute -top-4 left-4 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-secondary-600 transition-all">
//                 {index + 1}
//               </div>

//               {/* النص */}
//               <p className="text-neutral-700 leading-relaxed font-[var(--font-committee-primary)]">
//                 {text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommitteeAchievements;

import React from "react";

// الأيقونات المستخدمة (Checkmark, Trophy)
const CheckmarkIcon = (props) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M9 11l3 3L22 4"></path>
  </svg>
);

const TrophyIcon = (props) => (
  // <svg
  //   {...props}
  //   xmlns="http://www.w3.org/2000/svg"
  //   width="24"
  //   height="24"
  //   viewBox="0 0 24 24"
  //   fill="none"
  //   stroke="currentColor"
  //   strokeWidth="2"
  //   strokeLinecap="round"
  //   strokeLinejoin="round"
  // >
  //   <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
  //   <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
  //   <path d="M4.5 22h15"></path>
  //   <path d="M12 17V5"></path>
  //   <path d="M12 22a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z"></path>
  //   <path d="M12 17H6.5"></path>
  //   <path d="M12 17h5.5"></path>
  // </svg>

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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M9 11l3 3L22 4"></path>
  </svg>
);

const AchievementsSection = () => {
  // الألوان الرئيسية المستخدمة (مستخلصة من ألوان الهوية الجديدة التي تم تزويدها):
  // primary: #246efe (Blue - from --color-primary-500)
  // secondary: #6de7fe (Cyan - from --color-secondary-500)
  // softGreenBg: #f9fafb (Neutral Light - from --color-neutral-50)
  const primaryColor = "#246efe";
  const secondaryColor = "#6de7fe";
  const softGreenBg = "#f9fafb";

  // خطوط عربية جميلة (بناءً على الهوية المرفقة)
  const fontStyles = {
    fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
  };

  // قائمة المنجزات الاستراتيجية الـ 11
  const achievements = [
    "البدء في إعداد قاعدة بيانـات لجمعيــات تحفيـظ القرآن الكريـم بالمملكـة",
    "تجهيز مقر مخصص للجنة وتأسيسه بالأدوات المكتبية والأجهزة الحاسوبية",
    "إعداد وثيقة البناء المؤسسي للجنـــــة",
    "تشكيل اللجنة التنفيذية لمتابعة مبادرات ومشاريع اللجنة التنسيقية، وقد عقدت ستة اجتماعات خلال العام الماضي",
    "عقد اجتماع عام تعريفي باللجنة لجمعيات تحفيظ القرآن الكريم بالمملكة",
    "تأسيس الصندوق الوقفي الاستثماري",
    "إعداد دليل الشراكات الإستراتيجية للجنة",
    "البدء في إعداد دراسة مسحية ميدانية لإحتياجات وتحديات جمعيات تحفيظ القرآن الكريم بالمملكة",
    "التواصل مع بعض المؤسسات المانحة التي سترعى عمل اللجنة ومبادرتها.",
    "تدشين دراسة مستقبل تقنيات القرآن الكريم بالشراكة مع جمعية مكنون",
    "تعيين مسؤول إداري للجنة التنسيقية لجمعيات تحفيظ القرآن في المملكة",
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
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;700&display=swap');

                  /* 1. تأثير الخلفية الناعمة */
                  .section-soft-bg {
                    background-color: ${softGreenBg};
                  }

                  /* 2. تنسيق عنوان احترافي بفاصل مزدوج أكثر حيوية */
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
                  ${achievements
                    .map(
                      (_, index) =>
                        `.delay-${index + 1} { animation-delay: ${
                          index * 0.08 + 0.1
                        }s; }`
                    )
                    .join("\n")}

                  /* 5. تصميم البطاقة المنقسمة (Hover Effect) */
                  .achievement-card-new {
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e5e7eb;
                  }
                  .achievement-card-new:hover {
                    transform: translateY(-5px);
                    /* استخدام ظل أزرق للهوية الجديدة */
                    box-shadow: 0 15px 35px rgba(36, 110, 254, 0.25);
                    border-color: ${primaryColor};
                  }
                  /* 6. تأثير الشريط الجانبي */
                  .achievement-indicator {
                      background-color: ${secondaryColor}; /* السيان */
                      transition: background-color 0.3s ease;
                  }
                  .achievement-card-new:hover .achievement-indicator {
                      background-color: ${primaryColor}; /* الأزرق */
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
              <span style={{ color: primaryColor }}>إنجازاتنا</span> المحققة
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              حصاد جهود اللجنة التنسيقية في فترة وجيزة لتمكين جمعيات تحفيظ
              القرآن الكريم.
            </p>
          </div>
        </div>

        {/* حاوية المنجزات - تصميم شبكي مرن (4 أعمدة على الشاشات الكبيرة) */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              // بطاقة المنجز بتصميم منقسم جديد
              <div
                key={index}
                className={`fade-in-up delay-${
                  index + 1
                } achievement-card-new bg-white rounded-xl overflow-hidden
                                    p-0 transition-all duration-300 cursor-pointer flex flex-col h-full`}
              >
                {/* 1. الجزء العلوي - المؤشر والرقم */}
                <div className="p-5 flex items-center border-b border-gray-100">
                  {/* شريط الإنجاز الجانبي (على اليمين) */}
                  <div className="achievement-indicator w-1.5 h-10 rounded-full ml-4"></div>

                  {/* أيقونة ورقم الإنجاز */}
                  <div className="flex-1">
                    <div className="flex items-center">
                      <TrophyIcon
                        className="w-6 h-6"
                        style={{ color: secondaryColor }}
                      />
                      <h3
                        className="text-2xl font-black mr-2 leading-none"
                        style={{ color: primaryColor }}
                      >
                        {index + 1}
                      </h3>
                      <p className="text-sm text-gray-500 font-semibold leading-none pt-1">
                        / 11
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. الجزء السفلي - وصف الإنجاز */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    {achievement}
                  </p>
                  <span
                    className="mt-4 text-xs font-semibold text-right"
                    style={{ color: secondaryColor }}
                  >
                    <CheckmarkIcon
                      className="inline w-3 h-3 ml-1"
                      strokeWidth="3"
                    />{" "}
                    تحقق بفضل الله
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;
