// import React from 'react';
// import { Award, Film, PlayCircle } from 'lucide-react';

// // الألوان المستخدمة لضمان التناسق مع الأقسام السابقة
// const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
// const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن
// const HarirFont = "Harmattan, Cairo, sans-serif";
// const LotusFont = "Tajawal, Noto Kufi Arabic, serif";

// // بيانات الفيديوهات
// const videoData = [
//   {
//     title: "فيديو تعريفي: لمحة عن الجائزة",
//     src: "/vid1.mp4",
//     description: "شاهد هذا المقطع القصير للتعرف على أهداف ورسالة جائزتنا الناشئة ومجالات المنافسة الرئيسية."
//   },
//   {
//     title: "كلمة المدير العام",
//     src: "/vid2.mp4",
//     description: "فيديو تعريفي بالجائزة"
//   }
// ];

// // ********************************************
// // مكون مشغل الفيديو المخصص
// // ********************************************
// const CustomVideoPlayer = ({ src, title, description, index }) => (
//   <div
//     className={`bg-white rounded-xl shadow-lg p-4 transition-transform duration-300 hover:shadow-xl`}
//     dir="rtl"
//     style={{ border: `1px solid ${ACCENT_COLOR}` }}
//   >
//     {/* عنوان الفيديو */}
//     <h4
//       className="text-xl font-harir-bold text-gray-800 mb-3 flex items-center"
//       style={{ fontFamily: HarirFont }}
//     >
//       <PlayCircle className="w-5 h-5 ml-2" color={PRIMARY_COLOR} />
//       {title}
//     </h4>

//     {/* وصف الفيديو */}
//     <p
//       className="text-gray-600 text-sm mb-4"
//       style={{ fontFamily: LotusFont }}
//     >
//       {description}
//     </p>

//     {/* عنصر الفيديو */}
//     <div className="relative w-full overflow-hidden rounded-lg shadow-inner">
//       <video
//         controls
//         preload="metadata" // يسمح بتحميل البيانات الوصفية (metadata) فقط لتسريع التحميل
//         className="w-full h-auto max-h-96 object-contain rounded-lg" // object-contain لضمان ظهور الفيديو كاملاً
//         // يضمن أن يتكيف الفيديو مع حجم حاويته
//         style={{ backgroundColor: '#000' }}
//       >
//         <source src={src} type="video/mp4" />
//         {/* رسالة احتياطية في حال عدم دعم المتصفح للفيديو */}
//         <p className="text-white p-4">متصفحك لا يدعم تشغيل الفيديو. يمكنك تحميله للمشاهدة.</p>
//       </video>
//     </div>
//   </div>
// );

// // ********************************************
// // المكون الرئيسي للقسم
// // ********************************************
// const FeaturedNewsSection = () => {

//   return (
//     <section
//       className="py-12 md:py-20 bg-gray-50"
//       dir="rtl"
//       style={{ fontFamily: 'Cairo, sans-serif' }}
//     >
//       <style>
//         {`
//           .font-lotus-bold { font-family: ${LotusFont}; font-weight: 700; }
//           .font-harir-bold { font-family: ${HarirFont}; font-weight: 800; }
//         `}
//       </style>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

//         {/* البطاقة الرئيسية المميزة للإعلان */}
//         <div
//           className={`
//             bg-white p-6 md:p-10 rounded-3xl shadow-2xl
//             transition-all duration-500 border-b-8
//           `}
//           style={{ borderColor: ACCENT_COLOR }} // حدود ذهبية مطفأة
//         >
//           {/* رأس الخبر */}
//           <header className="text-center mb-8">
//             <h2
//               className="text-4xl sm:text-5xl font-harir-bold mb-3 tracking-tight text-gray-900"
//               style={{ color: PRIMARY_COLOR }}
//             >
//               <Award className="inline-block w-8 h-8 ml-3" style={{ color: PRIMARY_COLOR }} />
//               إعلان هام: إطلاق "جائزة [اسم المؤسسة] الناشئة"
//             </h2>
//             <p
//               className="text-lg text-gray-600 max-w-4xl mx-auto border-t pt-4 mt-4"
//               style={{ fontFamily: LotusFont, borderColor: ACCENT_COLOR }}
//             >
//               بفخر وإيمان عميق بدور الشباب، نعلن عن إطلاق جائزتنا الجديدة المخصصة لدعم ورعاية الإبداع والابتكار في مختلف المجالات. هذه الجائزة تمثل خطوة مهمة نحو تمكين الجيل القادم.
//             </p>
//           </header>

//           {/* ------------------------------------------ */}
//           {/* محتوى الفيديو والدليل */}
//           {/* ------------------------------------------ */}
//           <div className="grid md:grid-cols-2 gap-8 mt-10">
//             {videoData.map((video, index) => (
//               <CustomVideoPlayer
//                 key={index}
//                 src={video.src}
//                 title={video.title}
//                 description={video.description}
//                 index={index}
//               />
//             ))}
//           </div>

//           {/* دعوة للإجراء في ذيل البطاقة */}
//           <footer className="text-center mt-10 pt-6 border-t border-gray-100">
//              <p className="text-lg text-gray-700 font-lotus-bold">
//                 ندعوكم لمشاهدة الفيديوهات التفصيلية والبدء في تجهيز ملفات التقديم الخاصة بكم!
//              </p>
//           </footer>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedNewsSection;

import React from "react";
import { Award, Film, PlayCircle } from "lucide-react";

// الألوان المستخدمة لضمان التناسق مع الأقسام السابقة
const ACCENT_COLOR = "#d4c291"; // الذهبي المطفأ
const PRIMARY_COLOR = "#057687"; // العنّابي الفيروزي الداكن
const HarirFont = "Harmattan, Cairo, sans-serif";
const LotusFont = "Tajawal, Noto Kufi Arabic, serif";

// بيانات الفيديوهات
const videoData = [
  {
    title: "فيديو تعريفي: لمحة عن الجائزة",
    src: "/vid1.mp4",
    description:
      "شاهد هذا المقطع  للتعرف على أهداف ورسالة جائزتنا الناشئة ومجالات المنافسة الرئيسية.",
  },
  {
    title: "كلمة المدير العام",
    src: "/vid2.mp4",
    description: " كلمة المدير العام لجمعية بشراكم  أ / عبد المجيد محمد السهو ",
  },
];

// ********************************************
// مكون مشغل الفيديو المخصص
// ********************************************
const CustomVideoPlayer = ({ src, title, description, index }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-4 transition-transform duration-300 hover:shadow-xl`}
    dir="rtl"
    style={{ border: `1px solid ${ACCENT_COLOR}` }}
  >
    {/* عنوان الفيديو */}
    <h4
      className="text-xl font-harir-bold text-gray-800 mb-3 flex items-center"
      style={{ fontFamily: HarirFont }}
    >
      <PlayCircle className="w-5 h-5 ml-2" color={PRIMARY_COLOR} />
      {title}
    </h4>

    {/* وصف الفيديو */}
    <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: LotusFont }}>
      {description}
    </p>

    {/* عنصر الفيديو */}
    <div className="relative w-full overflow-hidden rounded-lg shadow-inner">
      <video
        controls
        preload="metadata" // يسمح بتحميل البيانات الوصفية (metadata) فقط لتسريع التحميل
        className="w-full h-auto max-h-96 object-contain rounded-lg" // object-contain لضمان ظهور الفيديو كاملاً
        // يضمن أن يتكيف الفيديو مع حجم حاويته
        style={{ backgroundColor: "#000" }}
      >
        <source src={src} type="video/mp4" />
        {/* رسالة احتياطية في حال عدم دعم المتصفح للفيديو */}
        <p className="text-white p-4">
          متصفحك لا يدعم تشغيل الفيديو. يمكنك تحميله للمشاهدة.
        </p>
      </video>
    </div>
  </div>
);

// ********************************************
// المكون الرئيسي للقسم
// ********************************************
const FeaturedNewsSection = () => {
  return (
    <section
      className="py-12 md:py-20 bg-gray-50"
      dir="rtl"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <style>
        {`
          .font-lotus-bold { font-family: ${LotusFont}; font-weight: 700; }
          .font-harir-bold { font-family: ${HarirFont}; font-weight: 800; }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* البطاقة الرئيسية المميزة للإعلان */}
        <div
          className={`
            bg-white p-6 md:p-10 rounded-3xl shadow-2xl 
            transition-all duration-500 border-b-8
          `}
          style={{ borderColor: ACCENT_COLOR }} // حدود ذهبية مطفأة
        >
          {/* رأس الخبر */}
          <header className="text-center mb-8">
            <h2
              className="text-3xl sm:text-3xl font-harir-bold mb-3 tracking-tight text-gray-900"
              style={{ color: PRIMARY_COLOR }}
            >
              <Award
                className="inline-block w-8 h-8 ml-3"
                style={{ color: PRIMARY_COLOR }}
              />
              إعلان هام: إطلاق "جائزة الناشئة" لحفظ وتلاوة القرآن الكريم
            </h2>
            {/* الجملة الجديدة المحدثة */}
            <p
              className="text-lg text-gray-600 max-w-4xl mx-auto border-t pt-4 mt-4"
              style={{ fontFamily: LotusFont, borderColor: ACCENT_COLOR }}
            >
              بقلوب عامرة بالإيمان وفخر بحملة كتاب الله، نطلق "جائزة الناشئة"
              للقرآن الكريم، مسابقة وطنية صُممت خصيصًا لأبنائنا وبناتنا في مراحل
              التأسيس، إيماناً بأن النشأة على القرآن هي خير استثمار في المستقبل.
            </p>
            {/* وصف الجائزة الأصلي */}
            <p
              className="text-md text-gray-500 max-w-4xl mx-auto mt-2"
              style={{ fontFamily: LotusFont }}
            >
              جائزة الناشئة هي مسابقة قرآنية تستهدف البنين والبنات ضمن المرحلة
              الابتدائية والتمهيدية والروضة على مستوى المملكة، ويتنافس
              المتسابقون فيها في ستة فروع محددة وتقدم لهم الجوائز القيمة.
            </p>
          </header>

          {/* ------------------------------------------ */}
          {/* محتوى الفيديو والدليل */}
          {/* ------------------------------------------ */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {videoData.map((video, index) => (
              <CustomVideoPlayer
                key={index}
                src={video.src}
                title={video.title}
                description={video.description}
                index={index}
              />
            ))}
          </div>

          {/* دعوة للإجراء في ذيل البطاقة */}
          <footer className="text-center mt-10 pt-6 border-t border-gray-100">
            <p className="text-lg text-gray-700 font-lotus-bold">
              ندعوكم لمشاهدة الفيديوهات التفصيلية والبدء في تجهيز ملفات التقديم
              الخاصة بكم!
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
