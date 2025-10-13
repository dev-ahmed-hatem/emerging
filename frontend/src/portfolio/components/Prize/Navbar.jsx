// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// // ********************************************
// // المكونات والأيقونات (Icons & Components)
// // ********************************************

// // أيقونة المنزل (Home) للرابط الوحيد
// const HomeIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M11.47 3.98a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 5.06l-6.97 6.98a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" />
//     <path d="m12 5.06 4.72 4.72V19.5a1.5 1.5 0 0 1-1.5 1.5H12a.75.75 0 0 0 0 1.5h3.25a3 3 0 0 0 3-3V9.78l1.47-1.47a.75.75 0 0 0-1.06-1.06L15.75 9H8.25L4.78 5.53a.75.75 0 0 0-1.06 1.06l1.47 1.47V19.5a3 3 0 0 0 3 3H12a.75.75 0 0 0 0-1.5H9.75a1.5 1.5 0 0 1-1.5-1.5V9.78l4.72-4.72Z" />
//   </svg>
// );

// // ********************************************
// // المكوّن الرئيسي: Navbar
// // ********************************************

// const Navbar = () => {
//   const location = useLocation();

//   // تعريف متغيرات الألوان الجديدة (الهوية الفيروزية/الذهبية)
//   const primaryColor = "#057687"; // العنّابي الفيروزي الداكن
//   const accentColor = "#d4c291"; // الذهبي المطفأ
//   const textColor = "#292826"; // الأسود المائل للرمادي

//   // عناوين وصور وهمية للشعارين
//   const logoRightPlaceholder =
//     "/شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة.png";
//   const logoLeftPlaceholder =
//     "/شعار-جائزة-الناشئة-لحفظ-القرآن-الكريم---طولي.png";

//   // اسم الخطوط في CSS (استخدام خطوط بديلة قياسية مع الإشارة للخطوط المطلوبة)
//   const HarirFont = "Harmattan, Cairo, sans-serif"; // بديل حريــر بولــد
//   const LotusFont = "Tajawal, Noto Kufi Arabic, serif"; // بديل لوتــس بولــد

//   return (
//     <>
//       {/* ========================================
//         CSS مخصص للخطوط والألوان الجديدة (تم إزالة حركة الوميض)
//         ========================================
//       */}
//       <style>
//         {`
//           /* تعريف الخطوط والأوزان المطلوبة */
//           .font-harir-bold {
//             font-family: ${HarirFont};
//             font-weight: 800; /* محاكاة بولد حريــر */
//           }
//           .font-lotus-bold {
//             font-family: ${LotusFont};
//             font-weight: 700; /* محاكاة بولد لوتــس */
//           }
//           .font-lotus-light {
//             font-family: ${LotusFont};
//             font-weight: 300; /* محاكاة لوتــس اليت */
//           }
//           .font-montserrat-medium {
//             font-family: 'Montserrat', sans-serif;
//             font-weight: 500;
//           }
//         `}
//       </style>

//       <nav
//         // تقليل الارتفاع والظلال لتبدو أكثر بساطة
//         className="sticky top-0 z-50 transition-all duration-500 ease-out shadow-md"
//         style={{
//           backgroundColor: "white", // خلفية بيضاء نظيفة
//           borderBottom: `3px solid ${primaryColor}`, // شريط فاصل باللون الأساسي (أقل سمكًا)
//         }}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* الصف الرئيسي: الشعار (يمين) - الرابط (وسط) - الشعار (يسار) */}
//           <div
//             className="flex items-center justify-between  h-16 md:h-20"
//             dir="rtl"
//           >
//             {/* 1. الشعار الرئيسي (اليمين/RTL Start) */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   src={logoRightPlaceholder}
//                   alt="الشعار الرئيسي للمؤسسة"
//                   className="h-12 w-auto md:h-14 lg:h-16 object-contain "
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/placeholder-right.png";
//                   }}
//                 />
//               </Link>
//             </div>

//             {/* 2. رابط العودة للصفحة الرئيسية (الوسط) - الآن أكثر بساطة وهدوءًا */}
//             <div className="flex-grow flex justify-center mx-4 sm:mx-8">
//               <Link
//                 to="/"
//                 // تصميم بسيط: خلفية ذهبية مطفأة وهادئة (تم إزالة الوميض والظلال الثقيلة)
//                 style={{
//                   backgroundColor: accentColor,
//                   color: textColor,
//                 }}
//                 className="inline-flex items-center justify-center 
//                         px-6 py-2 text-base sm:text-lg font-harir-bold rounded-lg 
//                         transition-all duration-300 transform hover:bg-[#c6b68b] active:scale-95 
//                         shadow-sm border border-transparent hover:shadow-md" // ظل خفيف ومرن
//               >
//                 <HomeIcon className="h-5 w-5 ml-2" />
//                 العودة للصفحة الرئيسية
//               </Link>
//             </div>

//             {/* 3. شعار الفرع/القسم (اليسار/RTL End) */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   src={logoLeftPlaceholder}
//                   alt="شعار الفرع"
//                   className="h-12 w-auto md:h-14 lg:h-16 object-contain "
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/placeholder-left.png";
//                   }}
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* تلميح صغير للخطوط المستخدمة */}
//         <div className="hidden">
//           <span className="font-harir-bold">حريــر بولــد</span>
//           <span className="font-lotus-bold">لوتــس بولــد</span>
//           <span className="font-lotus-light">لوتــس اليت</span>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;





///////////-------------------------------------------------------








import React, { useState } from "react";
import { Link, useLocation } from "react-router";

// ********************************************
// المكونات والأيقونات (Icons & Components)
// ********************************************

// أيقونة المنزل (Home) للرابط الوحيد
const HomeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.47 3.98a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 5.06l-6.97 6.98a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" />
    <path d="m12 5.06 4.72 4.72V19.5a1.5 1.5 0 0 1-1.5 1.5H12a.75.75 0 0 0 0 1.5h3.25a3 3 0 0 0 3-3V9.78l1.47-1.47a.75.75 0 0 0-1.06-1.06L15.75 9H8.25L4.78 5.53a.75.75 0 0 0-1.06 1.06l1.47 1.47V19.5a3 3 0 0 0 3 3H12a.75.75 0 0 0 0-1.5H9.75a1.5 1.5 0 0 1-1.5-1.5V9.78l4.72-4.72Z" />
  </svg>
);

// ********************************************
// المكوّن الرئيسي: Navbar
// ********************************************

const Navbar = () => {
  const location = useLocation();

  // تعريف متغيرات الألوان الجديدة (الهوية الفيروزية/الذهبية)
  const primaryColor = "#057687"; // العنّابي الفيروزي الداكن
  const accentColor = "#d4c291"; // الذهبي المطفأ
  const textColor = "#292826"; // الأسود المائل للرمادي

  // عناوين وصور وهمية للشعارين
  const logoRightPlaceholder =
    "/شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة.png";
  const logoLeftPlaceholder =
    "/شعار-جائزة-الناشئة-لحفظ-القرآن-الكريم---طولي.png";

  // اسم الخطوط في CSS (استخدام خطوط بديلة قياسية مع الإشارة للخطوط المطلوبة)
  const HarirFont = "Harmattan, Cairo, sans-serif"; // بديل حريــر بولــد
  const LotusFont = "Tajawal, Noto Kufi Arabic, serif"; // بديل لوتــس بولــد

  return (
    <>
      {/* ========================================
        CSS مخصص للخطوط والألوان الجديدة
        ========================================
      */}
      <style>
        {`
          /* تعريف الخطوط والأوزان المطلوبة */
          .font-harir-bold {
            font-family: ${HarirFont};
            font-weight: 800; /* محاكاة بولد حريــر */
          }
          .font-lotus-bold {
            font-family: ${LotusFont};
            font-weight: 700; /* محاكاة بولد لوتــس */
          }
          .font-lotus-light {
            font-family: ${LotusFont};
            font-weight: 300; /* محاكاة لوتــس اليت */
          }
          .font-montserrat-medium {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
          }
        `}
      </style>

      <nav
        className="sticky top-0 z-50 transition-all duration-500 ease-out shadow-md"
        style={{
          backgroundColor: "white", // خلفية بيضاء نظيفة
          borderBottom: `3px solid ${primaryColor}`, // شريط فاصل باللون الأساسي
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* الصف الرئيسي: Flexbox مع مسافات متباعدة ومتحكم بها
              - h-20/24: ارتفاع أكبر لاستيعاب اللوجوهات المكبرة.
              - gap-4: لضمان مسافة بين الزر واللوجوهات على جميع الشاشات.
          */}
          <div
            className="flex items-center justify-between h-20 md:h-24 gap-4 md:gap-8"
            dir="rtl"
          >
            {/* 1. الشعار الرئيسي (اليمين/RTL Start) */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logoRightPlaceholder}
                  alt="الشعار الرئيسي للمؤسسة"
                  // تم تكبير حجم الشعار بشكل متجاوب
                  className="h-14 w-auto md:h-16 lg:h-20 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-right.png";
                  }}
                />
              </Link>
            </div>

            {/* 2. رابط العودة للصفحة الرئيسية (الوسط) - تم استعادة شكله الأصلي مع جعله مرناً */}
            <div className="flex-grow flex justify-center min-w-0">
              <Link
                to="/"
                // تصميم بسيط: خلفية ذهبية مطفأة وهادئة
                style={{
                  backgroundColor: accentColor,
                  color: textColor,
                }}
                // فئات الزر الأصلي مع زيادة بسيطة في الحجم والحشو
                className="inline-flex items-center justify-center 
                        px-6 py-2 text-base sm:text-lg lg:text-xl font-harir-bold rounded-lg 
                        transition-all duration-300 transform hover:bg-[#c6b68b] active:scale-95 
                        shadow-sm border border-transparent hover:shadow-md" 
              >
                <HomeIcon className="h-5 w-5 ml-2" />
                العودة للصفحة الرئيسية
              </Link>
            </div>

            {/* 3. شعار الفرع/القسم (اليسار/RTL End) */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logoLeftPlaceholder}
                  alt="شعار الفرع"
                  // تم تكبير حجم الشعار بشكل متجاوب
                  className="h-14 w-auto md:h-16 lg:h-20 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-left.png";
                  }}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* تلميح صغير للخطوط المستخدمة */}
        <div className="hidden">
          <span className="font-harir-bold">حريــر بولــد</span>
          <span className="font-lotus-bold">لوتــس بولــد</span>
          <span className="font-lotus-light">لوتــس اليت</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;















///-----------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const SubNavbar = () => {
//   return (
//     <>
//       {/* خطوط الهوية */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap');

//           .font-cairo {
//             font-family: 'Cairo', sans-serif;
//           }

//           .fade-in {
//             animation: fadeIn 0.6s ease-in-out;
//           }

//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           .btn-hover {
//             transition: all 0.3s ease;
//           }

//           .btn-hover:hover {
//             background-color: #057687;
//             color: #fff;
//             transform: translateY(-2px);
//           }
//         `}
//       </style>

//       <nav className="bg-gradient-to-r from-[#fff9f0] via-[#ffffff] to-[#fff9f0] border-b-[3px] border-[#d4c291] shadow-sm sticky top-0 z-50 fade-in">
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           {/* شعار يمين */}
//           <div className="flex items-center space-x-2 rtl:space-x-reverse">
//             <img
//               src="/شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة.png"
//               alt="Right Logo"
//               className="h-12 md:h-14 transition-transform duration-300 hover:scale-105"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "/placeholder.png";
//               }}
//             />
//           </div>

//           {/* زر العودة */}
//           <Link
//             to="/"
//             className="font-cairo text-lg md:text-xl font-semibold border-2 border-[#057687] text-[#057687] rounded-full px-6 py-2 btn-hover shadow-sm"
//           >
//             العودة إلى الرئيسية
//           </Link>

//           {/* شعار يسار */}
//           <div className="flex items-center space-x-2 rtl:space-x-reverse">
//             <img
//               src="/شعار-جائزة-الناشئة-لحفظ-القرآن-الكريم---عرضي.png"
//               alt="Left Logo"
//               className="h-12 md:h-14 transition-transform duration-300 hover:scale-105"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "/placeholder.png";
//               }}
//             />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default SubNavbar;
