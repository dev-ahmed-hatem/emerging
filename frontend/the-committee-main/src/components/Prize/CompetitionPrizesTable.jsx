// import React from 'react';

// // ********************************************
// // الألوان الأساسية والمساعدة
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (للحدود والتمييز)
// const TEXT_DARK = '#292826'; // لون النص الداكن الأساسي
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الفاتح
// const BACKGROUND_LIGHT = '#F8F8F8'; // خلفية القسم الرئيسية
// const STRIPE_COLOR = '#F5F5F0'; // لون خفيف جداً لصف التمييز
// const PRIZE_CELL_BG = '#eef5f5'; // خلفية خفيفة للخلايا لزيادة الوضوح

// // ********************************************
// // بيانات الجدول المؤقتة (تم تقسيمها حسب الجنس كما في الصورة)
// // ********************************************
// const prizeData = [
//     { branch: "الفرع الأول", male: ["٥,٠٠٠", "٣,٠٠٠", "٢,٥٠٠", "٢,٠٠٠", "١,٥٠٠"], female: ["٥,٠٠٠", "٣,٠٠٠", "٢,٥٠٠", "٢,٠٠٠", "١,٥٠٠"] },
//     { branch: "الفرع الثاني", male: ["٤,٠٠٠", "٢,٥٠٠", "٢,٠٠٠", "١,٧٠٠", "١,٢٠٠"], female: ["٤,٠٠٠", "٢,٥٠٠", "٢,٠٠٠", "١,٧٠٠", "١,٢٠٠"] },
//     { branch: "الفرع الثالث", male: ["٣,٠٠٠", "٢,٠٠٠", "١,٨٠٠", "١,٥٠٠", "١,٠٠٠"], female: ["٣,٠٠٠", "٢,٠٠٠", "١,٨٠٠", "١,٥٠٠", "١,٠٠٠"] },
//     { branch: "الفرع الرابع", male: ["٢,٠٠٠", "١,٥٠٠", "١,٢٠٠", "١,٠٠٠", "٨٠٠"], female: ["٢,٠٠٠", "١,٥٠٠", "١,٢٠٠", "١,٠٠٠", "٨٠٠"] },
//     { branch: "الفرع الخامس", male: ["١,٥٠٠", "١,٢٠٠", "١,٠٠٠", "٨٠٠", "٧٠٠"], female: ["١,٥٠٠", "١,٢٠٠", "١,٠٠٠", "٨٠٠", "٧٠٠"] },
//     { branch: "الفرع السادس", male: ["١,٠٠٠", "٨٠٠", "٧٠٠", "٦٠٠", "٥٠٠"], female: ["١,٠٠٠", "٨٠٠", "٧٠٠", "٦٠٠", "٥٠٠"] },
// ];

// // ********************************************
// // المكون الفرعي: PrizeCell - خلية الجائزة
// // ********************************************

// const PrizeCell = ({ amount }) => {
//     return (
//         <div
//             className="flex items-center justify-center p-2 text-sm md:text-base font-semibold"
//             style={{
//                 height: '40px', // ارتفاع موحد
//                 backgroundColor: PRIZE_CELL_BG,
//                 direction: 'ltr', // لجعل الأرقام والريال في الترتيب الصحيح
//             }}
//         >
//             <span
//                 className="font-extrabold mr-2 ml-1 hidden md:inline"
//                 style={{ color: ACCENT_COLOR_LIGHT }}
//             >
//                 ريال
//             </span>
//             <span
//                 className="font-mono text-lg"
//                 style={{ color: PRIMARY_COLOR_DARK }} // اللون الرئيسي
//             >
//                 {amount}
//             </span>
//         </div>
//     );
// };

// // ********************************************
// // المكوّن الرئيسي: CompetitionPrizesTable
// // ********************************************

// const CompetitionPrizesTable = () => {
//     // عناوين الفائزين (الأعمدة من 2 إلى 6)
//     const winnerTitles = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس"];
//     // عناوين صفوف الجنس
//     const genderTitles = ["ذكور", "إناث"];

//     return (
//         <section
//             className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-x-auto"
//             style={{
//                 backgroundColor: BACKGROUND_LIGHT, // الخلفية الفاتحة
//                 direction: 'rtl',
//                 fontFamily: 'Inter, sans-serif'
//             }}
//         >
//             <div className="container mx-auto max-w-7xl relative z-10">

//                 {/* 1. العنوان الرئيسي */}
//                 <div className="flex justify-center mb-16 relative">
//                     <div
//                         className="py-3 px-8 md:px-12 text-center absolute -top-12 md:-top-16 shadow-lg rounded-t-lg"
//                         style={{
//                             backgroundColor: PRIMARY_COLOR_DARK,
//                             borderBottom: `4px solid ${ACCENT_COLOR_LIGHT}`,
//                             color: TEXT_LIGHT,
//                         }}
//                     >
//                         <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider">
//                             جدول الجوائز
//                         </h2>
//                     </div>
//                 </div>

//                 {/* 2. حاوية الجدول القابلة للتمرير على شاشات الموبايل */}
//                 <div
//                     className="shadow-2xl rounded-2xl overflow-hidden mt-10 w-full"
//                     style={{ border: `2px solid ${ACCENT_COLOR_LIGHT}` }}
//                 >
//                     <table className="min-w-full divide-y" style={{ borderColor: ACCENT_COLOR_LIGHT + '50' }}>

//                         {/* رأس الجدول */}
//                         <thead
//                             style={{
//                                 backgroundColor: PRIMARY_COLOR_DARK, // خلفية الرأس الداكنة
//                                 color: TEXT_LIGHT,
//                             }}
//                         >
//                             <tr>
//                                 {/* عمود "الفرع" */}
//                                 <th
//                                     scope="col"
//                                     className="px-3 py-4 text-center text-sm md:text-base font-extrabold tracking-wider uppercase border-l"
//                                     style={{
//                                         backgroundColor: ACCENT_COLOR_LIGHT, // تمييز عمود الفرع باللون الذهبي
//                                         color: PRIMARY_COLOR_DARK,
//                                         borderRight: `2px solid ${TEXT_LIGHT}`, // فاصل يميني واضح
//                                         minWidth: '140px',
//                                         width: '140px'
//                                     }}
//                                 >
//                                     الفرع
//                                 </th>
//                                 {/* عمود الجنس (ذكور/إناث) */}
//                                 <th
//                                     scope="col"
//                                     className="px-3 py-4 text-center text-sm md:text-base font-extrabold tracking-wider uppercase border-l"
//                                     style={{
//                                         backgroundColor: PRIMARY_COLOR_DARK,
//                                         color: TEXT_LIGHT,
//                                         borderLeft: `2px solid ${TEXT_LIGHT}`,
//                                         minWidth: '80px',
//                                         width: '80px'
//                                     }}
//                                 >
//                                     الجنس
//                                 </th>

//                                 {/* عناوين الفائزين (الأعمدة من 3 إلى 7) */}
//                                 {winnerTitles.map((title, index) => (
//                                     <th
//                                         key={index}
//                                         scope="col"
//                                         className="px-3 py-4 text-center text-sm md:text-base font-extrabold tracking-wider border-l"
//                                         style={{
//                                             borderLeft: `1px solid ${TEXT_LIGHT}80`, // فاصل خفيف بين الأعمدة
//                                             minWidth: '120px' // عرض مناسب للأرقام
//                                         }}
//                                     >
//                                         الفائز/ة {title}
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>

//                         {/* جسم الجدول */}
//                         <tbody
//                             className="divide-y"
//                             style={{
//                                 backgroundColor: 'white',
//                                 borderColor: ACCENT_COLOR_LIGHT + '50'
//                             }}
//                         >
//                             {prizeData.map((data, rowIndex) => (
//                                 <React.Fragment key={data.branch}>
//                                     {/* صف الذكور */}
//                                     <tr
//                                         style={{
//                                             backgroundColor: rowIndex % 2 === 0 ? 'white' : STRIPE_COLOR,
//                                             borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}50`
//                                         }}
//                                     >
//                                         {/* عمود الفرع - يمتد على صفين (ذكور وإناث) */}
//                                         <td
//                                             rowSpan="2"
//                                             className="px-3 text-center text-lg md:text-xl font-extrabold border-l"
//                                             style={{
//                                                 color: PRIMARY_COLOR_DARK,
//                                                 backgroundColor: ACCENT_COLOR_LIGHT + '30', // خلفية الفرع بلون ذهبي خفيف
//                                                 borderLeft: `2px solid ${ACCENT_COLOR_LIGHT}80`,
//                                                 verticalAlign: 'middle',
//                                                 height: '80px', // ارتفاع موحد للعمود المدمج
//                                             }}
//                                         >
//                                             {data.branch}
//                                         </td>

//                                         {/* عمود الجنس: ذكور */}
//                                         <td
//                                             className="px-3 text-center text-base md:text-lg font-bold border-l"
//                                             style={{
//                                                 color: PRIMARY_COLOR_DARK,
//                                                 backgroundColor: ACCENT_COLOR_LIGHT + '10',
//                                                 borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
//                                                 borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}40`, // فاصل بين الذكور والإناث
//                                                 height: '40px',
//                                             }}
//                                         >
//                                             ذكور
//                                         </td>

//                                         {/* جوائز الذكور */}
//                                         {data.male.map((amount, colIndex) => (
//                                             <td
//                                                 key={`male-${colIndex}`}
//                                                 className="p-0 border-l"
//                                                 style={{
//                                                     borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
//                                                     borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}40`,
//                                                     height: '40px',
//                                                 }}
//                                             >
//                                                 <PrizeCell amount={amount} />
//                                             </td>
//                                         ))}
//                                     </tr>

//                                     {/* صف الإناث */}
//                                     <tr
//                                         style={{
//                                             backgroundColor: rowIndex % 2 === 0 ? 'white' : STRIPE_COLOR,
//                                             borderBottom: `3px solid ${PRIMARY_COLOR_DARK}30` // فاصل سميك بين الفروع
//                                         }}
//                                     >
//                                         {/* العمود الأول فارغ بسبب الـ rowspan في الصف العلوي */}

//                                         {/* عمود الجنس: إناث */}
//                                         <td
//                                             className="px-3 text-center text-base md:text-lg font-bold border-l"
//                                             style={{
//                                                 color: TEXT_DARK,
//                                                 backgroundColor: ACCENT_COLOR_LIGHT + '05',
//                                                 borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
//                                                 height: '40px',
//                                             }}
//                                         >
//                                             إناث
//                                         </td>

//                                         {/* جوائز الإناث */}
//                                         {data.female.map((amount, colIndex) => (
//                                             <td
//                                                 key={`female-${colIndex}`}
//                                                 className="p-0 border-l"
//                                                 style={{
//                                                     borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
//                                                     height: '40px',
//                                                 }}
//                                             >
//                                                 <PrizeCell amount={amount} />
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 </React.Fragment>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompetitionPrizesTable;

/////////-----------------------------------------





import React from "react";

// ********************************************
// الألوان الأساسية والمساعدة
// ********************************************
const PRIMARY_COLOR_DARK = "#057687"; // الفيروزي الداكن
const ACCENT_COLOR_LIGHT = "#d4c291"; // الذهبي المطفأ (للحدود والتمييز)
const TEXT_DARK = "#292826"; // لون النص الداكن الأساسي
const TEXT_LIGHT = "#FFFFFF"; // لون النص الفاتح
const BACKGROUND_LIGHT = "#F8F8F8"; // خلفية القسم الرئيسية
const STRIPE_COLOR = "#F5F5F0"; // لون خفيف جداً لصف التمييز
const PRIZE_CELL_BG = "#eef5f5"; // خلفية خفيفة للخلايا لزيادة الوضوح

// ********************************************
// بيانات الجدول المؤقتة (تم تقسيمها حسب الجنس)
// ********************************************
const prizeData = [
  {
    branch: "الفرع الأول",
    male: ["٥٠,٠٠٠", "٣٠,٠٠٠", "٢٥,٠٠٠", "٢٠,٠٠٠", "١٥,٠٠٠"],
    female: ["٥٠,٠٠٠", "٣٠,٠٠٠", "٢٥,٠٠٠", "٢٠,٠٠٠", "١٥,٠٠٠"],
  },
  {
    branch: "الفرع الثاني",
    male: ["٤٠,٠٠٠", "٢٥,٠٠٠", "٢٠,٠٠٠", "١٧,٠٠٠", "١٢,٠٠٠"],
    female: ["٤٠,٠٠٠", "٢٥,٠٠٠", "٢٠,٠٠٠", "١٧,٠٠٠", "١٢,٠٠٠"],
  },
  {
    branch: "الفرع الثالث",
    male: ["٣٠,٠٠٠", "٢٠,٠٠٠", "١٨,٠٠٠", "١٥,٠٠٠", "١٠,٠٠٠"],
    female: ["٣٠,٠٠٠", "٢٠,٠٠٠", "١٨,٠٠٠", "١٥,٠٠٠", "١٠,٠٠٠"],
  },
  {
    branch: "الفرع الرابع",
    male: ["٢٠,٠٠٠", "١٥,٠٠٠", "١٢,٠٠٠", "١٠,٠٠٠", "٨٠٠٠"],
    female: ["٢٠,٠٠٠", "١٥,٠٠٠", "١٢,٠٠٠", "١٠,٠٠٠", "٨٠٠٠"],
  },
  {
    branch: "الفرع الخامس",
    male: ["١٥,٠٠٠", "١٢,٠٠٠", "١٠,٠٠٠", "٨٠٠٠", "٧٠٠٠"],
    female: ["١٥,٠٠٠", "١٢,٠٠٠", "١٠,٠٠٠", "٨٠٠٠", "٧٠٠٠"],
  },
  {
    branch: "الفرع السادس",
    male: ["١٠,٠٠٠", "٨٠٠٠", "٧٠٠٠", "٦٠٠٠", "٥٠٠٠"],
    female: ["١٠,٠٠٠", "٨٠٠٠", "٧٠٠٠", "٦٠٠٠", "٥٠٠٠"],
  },
];

// ********************************************
// المكون الفرعي: PrizeCell - خلية الجائزة
// ********************************************

const PrizeCell = ({ amount }) => {
  return (
    <div
      className="flex items-center justify-center p-2 text-base font-semibold"
      style={{
        height: "40px", // ارتفاع موحد
        backgroundColor: PRIZE_CELL_BG,
        direction: "ltr", // لجعل الأرقام والريال في الترتيب الصحيح
      }}
    >
      {/* إظهار كلمة "ريال" بوضوح */}
      <span
        className="font-extrabold mr-2 ml-1 hidden sm:inline"
        style={{ color: ACCENT_COLOR_LIGHT }}
      >
        ريال
      </span>
      <span
        className="font-mono text-lg sm:text-xl font-extrabold" // زيادة حجم الخط للأرقام
        style={{ color: PRIMARY_COLOR_DARK }} // اللون الرئيسي
      >
        {amount}
      </span>
    </div>
  );
};

// ********************************************
// المكوّن الرئيسي: CompetitionPrizesTable
// ********************************************

const CompetitionPrizesTable = () => {
  // عناوين الفائزين (الأعمدة من 2 إلى 6)
  const winnerTitles = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس"];

  // ********************************************
  // كود CSS مخصص لشريط التمرير (Scrollbar)
  // ********************************************

  const ScrollbarStyle = () => (
    <style>
      {`
                /* تحديد الألوان والمظهر لشريط التمرير الأفقي تحديداً */
                .custom-scrollbar::-webkit-scrollbar:horizontal {
                    height: 12px; 
                }

                /* تنسيق المسار (الخلفية) */
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: ${
                      ACCENT_COLOR_LIGHT + "60"
                    }; /* ذهبي مطفأ خفيف */
                    border-radius: 6px;
                }

                /* تنسيق المقبض (الزر المتحرك) */
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: ${PRIMARY_COLOR_DARK}; /* الفيروزي الداكن */
                    border-radius: 6px; /* زوايا مستديرة */
                    border: 3px solid ${BACKGROUND_LIGHT}; /* إطار فاتح لإبراز المقبض */
                }

                /* تأثير عند مرور الماوس على المقبض */
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #045F6D; /* فيروزي أغمق قليلاً */
                }

                /* إخفاء السهمين (Arrows) للمظهر النظيف */
                .custom-scrollbar::-webkit-scrollbar-button {
                    display: none;
                }
            `}
    </style>
  );

  return (
    <section
      className="w-full py-20 px-4 md:px-8 lg:px-16"
      style={{
        backgroundColor: BACKGROUND_LIGHT, // الخلفية الفاتحة
        direction: "rtl",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* إدراج الستايلات المخصصة لشريط التمرير */}
      <ScrollbarStyle />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* 1. العنوان الرئيسي */}
        <div className="flex justify-center mb-16 relative">
          <div
            className="py-3 px-8 md:px-12 text-center absolute -top-12 md:-top-16 shadow-lg rounded-t-lg"
            style={{
              backgroundColor: PRIMARY_COLOR_DARK,
              borderBottom: `4px solid ${ACCENT_COLOR_LIGHT}`,
              color: TEXT_LIGHT,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider">
              جدول الجوائز
            </h2>
          </div>
        </div>

        {/* 2. حاوية الجدول مع تمكين التمرير الأفقي وتطبيق الكلاس المخصص */}
        <div
          className="shadow-2xl rounded-2xl overflow-x-auto overflow-hidden mt-10 w-full custom-scrollbar"
          style={{ border: `2px solid ${ACCENT_COLOR_LIGHT}` }}
        >
          {/* إزالة minWidth من الجدول، والسماح له بأخذ العرض الكامل للحاوية */}
          <table
            className="w-full divide-y"
            style={{
              borderColor: ACCENT_COLOR_LIGHT + "50",
              // ********* التعديل هنا: إزالة minWidth *********
            }}
          >
            {/* رأس الجدول */}
            <thead
              style={{
                backgroundColor: PRIMARY_COLOR_DARK, // خلفية الرأس الداكنة
                color: TEXT_LIGHT,
              }}
            >
              <tr>
                {/* عمود "الفرع": تحديد نسبة من العرض الإجمالي (مثلاً 15%) */}
                <th
                  scope="col"
                  className="p-3 text-center text-base font-extrabold tracking-wider uppercase border-l w-[15%]"
                  style={{
                    backgroundColor: ACCENT_COLOR_LIGHT, // تمييز عمود الفرع
                    color: PRIMARY_COLOR_DARK,
                    borderRight: `2px solid ${TEXT_LIGHT}`,
                  }}
                >
                  الفرع
                </th>
                {/* عمود الجنس (ذكور/إناث): تحديد نسبة من العرض الإجمالي (مثلاً 10%) */}
                <th
                  scope="col"
                  className="p-3 text-center text-base font-extrabold tracking-wider uppercase border-l w-[10%]"
                  style={{
                    backgroundColor: PRIMARY_COLOR_DARK,
                    color: TEXT_LIGHT,
                    borderLeft: `2px solid ${TEXT_LIGHT}`,
                  }}
                >
                  الجنس
                </th>

                {/* عناوين الفائزين (الأعمدة من 3 إلى 7): كل عمود يأخذ جزءاً متساوياً من الباقي (75% مقسومة على 5 = 15%) */}
                {winnerTitles.map((title, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="p-3 text-center text-base font-extrabold tracking-wider border-l w-[15%]"
                    style={{
                      borderLeft: `1px solid ${TEXT_LIGHT}80`, // فاصل خفيف بين الأعمدة
                    }}
                  >
                    الفائز/ة {title}
                  </th>
                ))}
              </tr>
            </thead>

            {/* جسم الجدول */}
            <tbody
              className="divide-y"
              style={{
                backgroundColor: "white",
                borderColor: ACCENT_COLOR_LIGHT + "50",
              }}
            >
              {prizeData.map((data, rowIndex) => (
                <React.Fragment key={data.branch}>
                  {/* صف الذكور */}
                  <tr
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0 ? "white" : STRIPE_COLOR,
                      borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}50`,
                    }}
                  >
                    {/* عمود الفرع - يمتد على صفين (ذكور وإناث) */}
                    <td
                      rowSpan="2"
                      className="px-4 text-center text-lg md:text-xl font-extrabold border-l w-[15%]" // تطبيق w-[15%]
                      style={{
                        color: PRIMARY_COLOR_DARK,
                        backgroundColor: ACCENT_COLOR_LIGHT + "30", // خلفية الفرع بلون ذهبي خفيف
                        borderLeft: `2px solid ${ACCENT_COLOR_LIGHT}80`,
                        verticalAlign: "middle",
                        height: "80px", // ارتفاع موحد للعمود المدمج
                      }}
                    >
                      {data.branch}
                    </td>

                    {/* عمود الجنس: ذكور */}
                    <td
                      className="px-3 text-center text-base md:text-lg font-bold border-l w-[10%]" // تطبيق w-[10%]
                      style={{
                        color: PRIMARY_COLOR_DARK,
                        backgroundColor: ACCENT_COLOR_LIGHT + "10",
                        borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
                        borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}40`, // فاصل بين الذكور والإناث
                        height: "40px",
                      }}
                    >
                      ذكور
                    </td>

                    {/* جوائز الذكور */}
                    {data.male.map((amount, colIndex) => (
                      <td
                        key={`male-${colIndex}`}
                        className="p-0 border-l w-[15%]" // تطبيق w-[15%]
                        style={{
                          borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
                          borderBottom: `1px solid ${ACCENT_COLOR_LIGHT}40`,
                          height: "40px",
                        }}
                      >
                        <PrizeCell amount={amount} />
                      </td>
                    ))}
                  </tr>

                  {/* صف الإناث */}
                  <tr
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0 ? "white" : STRIPE_COLOR,
                      borderBottom: `3px solid ${PRIMARY_COLOR_DARK}30`, // فاصل سميك بين الفروع
                    }}
                  >
                    {/* العمود الأول فارغ بسبب الـ rowspan في الصف العلوي */}

                    {/* عمود الجنس: إناث */}
                    <td
                      className="px-3 text-center text-base md:text-lg font-bold border-l w-[10%]" // تطبيق w-[10%]
                      style={{
                        color: TEXT_DARK,
                        backgroundColor: ACCENT_COLOR_LIGHT + "05",
                        borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
                        height: "40px",
                      }}
                    >
                      إناث
                    </td>

                    {/* جوائز الإناث */}
                    {data.female.map((amount, colIndex) => (
                      <td
                        key={`female-${colIndex}`}
                        className="p-0 border-l w-[15%]" // تطبيق w-[15%]
                        style={{
                          borderLeft: `1px solid ${ACCENT_COLOR_LIGHT}40`,
                          height: "40px",
                        }}
                      >
                        <PrizeCell amount={amount} />
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitionPrizesTable;
