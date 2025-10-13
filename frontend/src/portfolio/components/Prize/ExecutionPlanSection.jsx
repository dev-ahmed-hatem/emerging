// import React from "react";
// import { Megaphone, Award, MapPin, Users, Table } from "lucide-react";

// // ********************************************
// // ألوان الهوية
// // ********************************************
// const PRIMARY_COLOR_DARK = "#057687"; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = "#d4c291"; // الذهبي المطفأ
// const BACKGROUND_LIGHT = "#FDFDFD"; // الخلفية الفاتحة جداً
// const TEXT_LIGHT = "#FFFFFF"; // لون النص

// // ********************************************
// // بيانات مراحل التنفيذ
// // ********************************************
// const executionSteps = [
//   {
//     title: "الإعلان عن المسابقة ومواعيدها",
//     description:
//       "إطلاق الحملة الإعلامية وتحديد الجداول الزمنية الرئيسية لفتح باب التسجيل.",
//     icon: Megaphone,
//     delay: 0.1,
//   },
//   {
//     title: "تجهيز مقرات المسابقة",
//     description:
//       "تأمين وتجهيز القاعات والمرافق اللازمة لضمان بيئة تحكيم مثالية.",
//     icon: MapPin,
//     delay: 0.2,
//   },
//   {
//     title: "تشكيل لجان التحكيم",
//     description:
//       "اختيار وتدريب المحكمين المتخصصين لضمان عدالة ودقة عملية التقييم.",
//     icon: Users,
//     delay: 0.3,
//   },
//   {
//     title: "إعـــداد جداول المتسابقين",
//     description:
//       "تنظيم وتوزيع المتسابقين على أيام وفروع المسابقة بشكل منهجي ومنظم.",
//     icon: Table,
//     delay: 0.4,
//   },
//   {
//     title: "تنظيم المسابقة",
//     description: "إدارة ومتابعة سير فعاليات المسابقة اليومية بكفاءة عالية.",
//     icon: Award,
//     delay: 0.5,
//   },
// ];

// // ********************************************
// // المكون الفرعي: عنصر الخطوة (Timeline Item)
// // ********************************************
// const StepItem = ({ step, index, totalSteps }) => {
//   const IconComponent = step.icon;
//   const isLast = index === totalSteps - 1;

//   return (
//     <div
//       className="flex relative items-start mb-10"
//       style={{
//         animation: `fadeInRight 0.7s ease-out forwards ${step.delay}s`,
//         opacity: 0, // يبدأ مخفياً
//       }}
//     >
//       {/* الدائرة والأيقونة */}
//       <div className="flex flex-col items-center">
//         <div
//           className="w-12 h-12 flex items-center justify-center rounded-full z-10 shadow-lg"
//           style={{
//             backgroundColor: PRIMARY_COLOR_DARK,
//             color: TEXT_LIGHT,
//             border: `3px solid ${ACCENT_COLOR_GOLD}`,
//           }}
//         >
//           <IconComponent size={24} strokeWidth={2.5} />
//         </div>
//         {/* الخط العمودي الرابط */}
//         {!isLast && (
//           <div
//             className="w-0.5 flex-grow"
//             style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//           ></div>
//         )}
//       </div>

//       {/* محتوى الخطوة */}
//       <div className="mr-6 pr-4 pt-1 flex-1">
//         <h3
//           className="text-2xl font-extrabold mb-1"
//           style={{ color: PRIMARY_COLOR_DARK }}
//         >
//           {step.title}
//         </h3>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           {step.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// // ********************************************
// // المكون الرئيسي
// // ********************************************
// const ExecutionPlanSection = () => {
//   return (
//     <section
//       className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
//       style={{
//         direction: "rtl",
//         backgroundColor: BACKGROUND_LIGHT,
//         fontFamily: "Almarai, Tahoma, sans-serif",
//       }}
//     >
//       {/* تعريف الأنميشن */}
//       <style jsx global>{`
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>

//       <div className="container mx-auto max-w-4xl">
//         {/* العنوان الرئيسي */}
//         <header className="text-center mb-16">
//           <h2
//             className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
//             style={{ color: PRIMARY_COLOR_DARK }}
//           >
//             خطة الجائـــــــــــــــزة
//             {/* خط ذهبي سميك تحت العنوان */}
//             <span
//               className="absolute bottom-0 right-0 w-full h-1"
//               style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//             ></span>
//           </h2>
//           <h3
//             className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-700"
//             style={{ color: PRIMARY_COLOR_DARK }}
//           >
//             المرحلة الأولى: التنفيــــــــــــــــــــذ
//           </h3>
//         </header>

//         {/* مسار التنفيذ العمودي */}
//         <div className="relative">
//           {executionSteps.map((step, index) => (
//             <StepItem
//               key={index}
//               step={step}
//               index={index}
//               totalSteps={executionSteps.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExecutionPlanSection;


//---------------------------------------


// import React from 'react';
// import { Megaphone, Award, MapPin, Users, Table } from 'lucide-react';

// // ********************************************
// // ألوان الهوية
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
// const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// // ********************************************
// // بيانات مراحل التنفيذ
// // ********************************************
// const executionSteps = [
//     {
//         title: "الإعلان عن المسابقة ومواعيدها",
//         description: "إطلاق الحملة الإعلامية وتحديد الجداول الزمنية الرئيسية لفتح باب التسجيل.",
//         icon: Megaphone,
//         delay: 0.1,
//     },
//     {
//         title: "تجهيز مقرات المسابقة",
//         description: "تأمين وتجهيز القاعات والمرافق اللازمة لضمان بيئة تحكيم مثالية.",
//         icon: MapPin,
//         delay: 0.2,
//     },
//     {
//         title: "تشكيل لجان التحكيم",
//         description: "اختيار وتدريب المحكمين المتخصصين لضمان عدالة ودقة عملية التقييم.",
//         icon: Users,
//         delay: 0.3,
//     },
//     {
//         title: "إعـــداد جداول المتسابقين",
//         description: "تنظيم وتوزيع المتسابقين على أيام وفروع المسابقة بشكل منهجي ومنظم.",
//         icon: Table,
//         delay: 0.4,
//     },
//     {
//         title: "تنظيم المسابقة",
//         description: "إدارة ومتابعة سير فعاليات المسابقة اليومية بكفاءة عالية.",
//         icon: Award,
//         delay: 0.5,
//     },
// ];

// // ********************************************
// // المكون الفرعي: بطاقة الخطوة (Grid Item)
// // ********************************************
// const StepCard = ({ step }) => {
//     const IconComponent = step.icon;
    
//     // تصميم بطاقة الخطوة
//     return (
//         <div 
//             className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
//             style={{ 
//                 backgroundColor: 'white', 
//                 border: `2px solid ${ACCENT_COLOR_GOLD}80`, // إطار ذهبي فاتح
//                 minHeight: '220px',
//                 animation: `fadeInUp 0.6s ease-out forwards ${step.delay}s`,
//                 opacity: 0, // يبدأ مخفياً
//             }}
//         >
//             {/* أيقونة الخطوة */}
//             <div 
//                 className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
//                 style={{ 
//                     backgroundColor: PRIMARY_COLOR_DARK, 
//                     boxShadow: `0 0 0 4px ${ACCENT_COLOR_GOLD}`, // شادو ذهبي قوي
//                     color: TEXT_LIGHT // الأبيض
//                 }}
//             >
//                 <IconComponent 
//                     size={32} 
//                     strokeWidth={2}
//                 />
//             </div>

//             {/* عنوان الخطوة */}
//             <h3 
//                 className="text-xl sm:text-2xl font-extrabold mb-2" 
//                 style={{ color: PRIMARY_COLOR_DARK }}
//             >
//                 {step.title}
//             </h3>
            
//             {/* وصف الخطوة */}
//             <p className="text-base text-gray-600 font-medium leading-relaxed">
//                 {step.description}
//             </p>
//         </div>
//     );
// };

// // ********************************************
// // المكون الرئيسي
// // ********************************************
// const ExecutionPlanSection = () => {
//     return (
//         <section 
//             className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
//             style={{ 
//                 direction: 'rtl', 
//                 backgroundColor: BACKGROUND_LIGHT, 
//                 fontFamily: 'Almarai, Tahoma, sans-serif'
//             }}
//         >
//             {/* تعريف الأنميشن */}
//             <style jsx global>{`
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>
            
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* العنوان الرئيسي */}
//                 <header className="text-center mb-16">
//                     <h2 
//                         className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         خطة الجائـــــــــــــــزة
//                         {/* خط ذهبي سميك تحت العنوان */}
//                         <span 
//                             className="absolute bottom-0 right-0 w-full h-1"
//                             style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//                         ></span>
//                     </h2>
//                     <h3 
//                         className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-700"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         المرحلة الأولى: التنفيــــــــــــــــــــذ
//                     </h3>
//                 </header>

//                 {/* شبكة الخطوات (Grid System) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* يتم عرض الخمس خطوات. العمود الثالث في الشاشات الكبيرة سيبقى فارغاً جزئياً، لكنه يوزع الخمسة بشكل متناسق (2+2+1) */}
//                     {executionSteps.map((step, index) => (
//                         <StepCard 
//                             key={index} 
//                             step={step}
//                         />
//                     ))}
//                 </div>

//                 {/* مساحة فارغة بسيطة لترتيب التوزيع (خاصة للخطوة الخامسة) */}
//                 <div className="hidden lg:block lg:col-span-1"></div>
//             </div>
//         </section>
//     );
// };

// export default ExecutionPlanSection;



//////--------------------------------------------------





import React from 'react';
import { Megaphone, Award, MapPin, Users, Table } from 'lucide-react';

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات مراحل التنفيذ
// ********************************************
const executionSteps = [
    {
        title: "الإعلان عن المسابقة ومواعيدها",
        description: "إطلاق الحملة الإعلامية وتحديد الجداول الزمنية الرئيسية لفتح باب التسجيل.",
        icon: Megaphone,
        delay: 0.1,
    },
    {
        title: "تجهيز مقرات المسابقة",
        description: "تأمين وتجهيز القاعات والمرافق اللازمة لضمان بيئة تحكيم مثالية.",
        icon: MapPin,
        delay: 0.2,
    },
    {
        title: "تشكيل لجان التحكيم",
        description: "اختيار وتدريب المحكمين المتخصصين لضمان عدالة ودقة عملية التقييم.",
        icon: Users,
        delay: 0.3,
    },
    {
        title: "إعـــداد جداول المتقدمين",
        description: "تنظيم وتوزيع المتقدمين والمرشحين للجائزة على أيام وفروع المسابقة بشكل منهجي ومنظم.",
        icon: Table,
        delay: 0.4,
    },
    {
        title: "تنظيم المسابقة",
        description: "إدارة ومتابعة سير فعاليات المسابقة اليومية بكفاءة عالية.",
        icon: Award,
        delay: 0.5,
    },
];

// ********************************************
// المكون الفرعي: كتلة الميزة (Feature Block)
// ********************************************
const StepFeature = ({ step }) => {
    const IconComponent = step.icon;
    
    // تصميم كتلة الميزة (Rounded Feature Block)
    return (
        <div 
            className="flex items-start p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] h-full"
            style={{ 
                backgroundColor: 'white', 
                border: `1px solid ${ACCENT_COLOR_GOLD}60`, // إطار ذهبي ناعم
                animation: `fadeInUp 0.6s ease-out forwards ${step.delay}s`,
                opacity: 0, // يبدأ مخفياً
            }}
        >
            {/* أيقونة الخطوة في دائرة */}
            <div 
                className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full ml-4"
                style={{ 
                    backgroundColor: PRIMARY_COLOR_DARK, 
                    boxShadow: `0 0 0 3px ${ACCENT_COLOR_GOLD}`, // شادو ذهبي خفيف
                    color: TEXT_LIGHT // الأبيض
                }}
            >
                <IconComponent 
                    size={28} 
                    strokeWidth={2.5}
                />
            </div>

            {/* محتوى الخطوة */}
            <div className="flex-1 text-right">
                <h3 
                    className="text-xl font-extrabold mb-1" 
                    style={{ color: PRIMARY_COLOR_DARK }}
                >
                    {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    );
};

// ********************************************
// المكون الرئيسي
// ********************************************
const ExecutionPlanSection = () => {
    return (
        <section 
            className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
            style={{ 
                direction: 'rtl', 
                backgroundColor: BACKGROUND_LIGHT, 
                fontFamily: 'Almarai, Tahoma, sans-serif'
            }}
        >
            {/* تعريف الأنميشن */}
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
                        style={{ color: PRIMARY_COLOR_DARK }}
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
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        المرحلة الأولى: التنفيــــــــــــــــــــذ
                    </h3>
                </header>

                {/* شبكة الخطوات (Grid System) */}
                {/* 5 عناصر موزعة على عمودين، مما يترك مكاناً فارغاً في الصف الأخير لتوزيع بصري جيد */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {executionSteps.map((step, index) => (
                        <StepFeature 
                            key={index} 
                            step={step}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionPlanSection;
