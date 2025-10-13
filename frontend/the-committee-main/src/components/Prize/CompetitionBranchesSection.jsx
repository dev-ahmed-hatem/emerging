// import React from 'react';

// // ********************************************
// // البيانات والألوان
// // ********************************************

// // الألوان الأساسية
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (الخلفية)
// const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (إطارات الفروع)
// const BRANCH_TEXT_COLOR = '#292826'; // لون النص الداكن (تم استخدامه قليلاً)

// // فروع المسابقة
// const branches = [
//     { id: 1, title: "الفرع الأول", content: "حفظ القرآن الكريم كاملا مع حسن التلاوة والتجويد." },
//     { id: 2, title: "الفرع الثاني", content: "حفظ خمسة عشر جزءا مع حسن التلاوة والتجويد." },
//     { id: 3, title: "الفرع الثالث", content: "حفظ عشرة أجزاء مع حسن التلاوة والتجويد." },
//     { id: 4, title: "الفرع الرابع", content: "حفظ خمسة أجزاء مع حسن التلاوة والتجويد." },
//     { id: 5, title: "الفرع الخامس", content: "حفظ ثلاثة أجزاء مع حسن التلاوة والتجويد." },
//     { 
//         id: 6, 
//         title: "الفرع السادس", 
//         content: "قراءة جزء \"عم\" مع حسن التلاوة والتجويد (مخصص للفئة العمرية من 4-6 أعوام)." 
//     },
// ];

// // ********************************************
// // المكوّن الفرعي: BranchCard
// // ********************************************

// const BranchCard = ({ branch }) => {
//     // تصميم البطاقة لتناسب التخطيط ذو العمودين (مطابق للصورة)
    
//     // تحديد ما إذا كان الفرع في العمود الأيمن (الزوجي) أو الأيسر (الفردي) لترتيب العناصر
//     // في الصورة المرفقة، الفروع (1, 2, 3) تظهر على اليمين والفروع (4, 5, 6) تظهر على اليسار.
//     const isRightColumn = branch.id <= 3;

//     return (
//         <div 
//             className={`flex items-center gap-4 py-4 px-2 md:px-4 lg:px-6 relative group transform transition-all duration-300 ${
//                 isRightColumn ? 'flex-row-reverse text-right' : 'flex-row text-right'
//             }`}
//         >
//             {/* 1. إطار العنوان (الفرع الأول/الثاني/...) */}
//             <div 
//                 className={`flex-shrink-0 relative z-10 p-2 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.05]`}
//                 style={{ 
//                     backgroundColor: ACCENT_COLOR_LIGHT, 
//                     border: `2px solid ${ACCENT_COLOR_LIGHT}`,
//                     // استخدام لون نص مختلف لجعل العنوان داخل الإطار بارزًا
//                     color: BRANCH_TEXT_COLOR 
//                 }}
//             >
//                 <span className="font-bold text-base md:text-lg whitespace-nowrap">
//                     {branch.title}
//                 </span>
//             </div>

//             {/* 2. المحتوى (نص الحفظ) والخط الفاصل */}
//             <div className={`relative w-full ${isRightColumn ? 'pl-8' : 'pr-8'}`}>
//                 <p className="text-xl md:text-2xl font-medium mb-2 text-white">
//                     {branch.content}
//                 </p>
//                 {/* الخط الفاصل تحت النص */}
//                 <div 
//                     className="absolute h-0.5 w-full transform transition-all duration-500"
//                     style={{ 
//                         backgroundColor: ACCENT_COLOR_LIGHT, 
//                         // وضع الخط أسفل النص، وتحديد موقعه بناءً على العمود
//                         bottom: 0, 
//                         [isRightColumn ? 'left' : 'right']: 0,
//                         // جعل الخط أطول عند التحويم
//                         width: '90%', 
//                         opacity: 0.8,
//                     }}
//                 ></div>
//             </div>
//         </div>
//     );
// };

// // ********************************************
// // المكوّن الرئيسي: CompetitionBranchesSection
// // ********************************************

// const CompetitionBranchesSection = () => {
//     // نقسم الفروع إلى عمودين (3 في اليمين و 3 في اليسار)
//     const rightColumn = branches.slice(0, 3);
//     const leftColumn = branches.slice(3, 6);

//     return (
//         <section 
//             className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
//             style={{ 
//                 backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الغامقة
//                 direction: 'rtl',
//                 position: 'relative',
//             }}
//         >
//             <div className="container mx-auto max-w-7xl relative z-10">
                
//                 <div className="flex flex-col lg:flex-row gap-10">
                    
//                     {/* 1. العنوان الجانبي الكبير (يمين الشاشة) */}
//                     <div className="w-full lg:w-1/3 lg:flex-shrink-0 flex items-start lg:justify-end">
//                         <div 
//                             className="p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl relative"
//                             style={{ 
//                                 backgroundColor: ACCENT_COLOR_LIGHT, // خلفية العنوان الفاتحة
//                                 border: `3px solid ${ACCENT_COLOR_LIGHT}`,
//                                 // شكل مائل خفيف للعنوان (نمط الصورة)
//                                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%)',
//                             }}
//                         >
//                             <h2 
//                                 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
//                                 style={{ color: PRIMARY_COLOR_DARK }}
//                             >
//                                 فروع المســــابقة
//                             </h2>
//                             <p className="text-sm md:text-base mt-2 font-medium" style={{ color: BRANCH_TEXT_COLOR }}>
//                                 6 فروع رئيسية
//                             </p>
//                         </div>
//                     </div>

//                     {/* 2. حاوية الفروع - مقسمة إلى عمودين */}
//                     <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
                        
//                         {/* العمود الأيمن (الفروع 1, 2, 3) */}
//                         <div className="flex flex-col space-y-4">
//                             {rightColumn.map((branch) => (
//                                 <BranchCard key={branch.id} branch={branch} />
//                             ))}
//                         </div>

//                         {/* العمود الأيسر (الفروع 4, 5, 6) */}
//                         <div className="flex flex-col space-y-4 pt-8 md:pt-0">
//                             {leftColumn.map((branch) => (
//                                 <BranchCard key={branch.id} branch={branch} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             </div>
            
//             {/* 3. الزخرفة السفلية المطلوبة في الصورة */}
//             <div 
//                 className="absolute bottom-0 left-0 right-0 h-16" 
//                 style={{ 
//                     backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), transparent)`,
//                 }}
//             >
//                 {/* نمط الزخرفة الهندسية (مكعبات متكررة) */}
//                 <div 
//                     className="absolute bottom-0 left-0 right-0 h-8"
//                     style={{ 
//                         background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
//                         opacity: 0.15,
//                     }}
//                 ></div>
//             </div>
//         </section>
//     );
// };

// export default CompetitionBranchesSection;





///////-----------------------------





// import React from 'react';

// // ********************************************
// // البيانات والألوان
// // ********************************************

// // الألوان الأساسية
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (الخلفية)
// const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (إطارات الفروع)
// const BRANCH_TEXT_COLOR = '#292826'; // لون النص الداكن (للنصوص داخل البطاقات الفاتحة)
// const TEXT_DARK_ON_LIGHT = '#292826'; // لون النص الداكن الأساسي
// const TEXT_LIGHT_ON_DARK = '#FFFFFF'; // لون النص الفاتح الأساسي

// // فروع المسابقة
// const branches = [
//     { id: 1, title: "الفرع الأول", content: "حفظ القرآن الكريم كاملا مع حسن التلاوة والتجويد." },
//     { id: 2, title: "الفرع الثاني", content: "حفظ خمسة عشر جزءا مع حسن التلاوة والتجويد." },
//     { id: 3, title: "الفرع الثالث", content: "حفظ عشرة أجزاء مع حسن التلاوة والتجويد." },
//     { id: 4, title: "الفرع الرابع", content: "حفظ خمسة أجزاء مع حسن التلاوة والتجويد." },
//     { id: 5, title: "الفرع الخامس", content: "حفظ ثلاثة أجزاء مع حسن التلاوة والتجويد." },
//     { 
//         id: 6, 
//         title: "الفرع السادس", 
//         content: "قراءة جزء \"عم\" مع حسن التلاوة والتجويد (مخصص للفئة العمرية من 4-6 أعوام)." 
//     },
// ];

// // ********************************************
// // المكوّن الفرعي: BranchCard - بطاقة متساوية الحجم
// // ********************************************

// const BranchCard = ({ branch }) => {
//     return (
//         <div 
//             className="flex flex-col items-center justify-start p-6 rounded-2xl shadow-xl transition-all duration-500 ease-out h-full transform hover:scale-[1.03] hover:shadow-2xl"
//             style={{ 
//                 backgroundColor: ACCENT_COLOR_LIGHT, // الخلفية الفاتحة للبطاقة
//                 border: `4px solid ${ACCENT_COLOR_LIGHT}`,
//             }}
//         >
//             {/* عنوان الفرع */}
//             <div 
//                 className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full mb-4 shadow-lg transition-transform duration-500"
//                 style={{ 
//                     backgroundColor: PRIMARY_COLOR_DARK, // دائرة بلون الخلفية الغامقة
//                     color: ACCENT_COLOR_LIGHT, // النص بلون الإطار الفاتح
//                     border: `3px solid ${ACCENT_COLOR_LIGHT}`,
//                 }}
//             >
//                 <span className="text-2xl md:text-3xl font-extrabold">{branch.id}</span>
//             </div>

//             {/* اسم الفرع */}
//             <h3 
//                 className="text-xl md:text-2xl font-bold mb-3 text-center"
//                 style={{ color: TEXT_DARK_ON_LIGHT }}
//             >
//                 {branch.title}
//             </h3>

//             {/* خط فاصل أنيق */}
//             <div 
//                 className="w-1/3 h-1 rounded-full mb-4"
//                 style={{ backgroundColor: PRIMARY_COLOR_DARK }}
//             ></div>

//             {/* محتوى الفرع */}
//             <p 
//                 className="text-base md:text-lg font-medium text-center flex-grow"
//                 style={{ color: BRANCH_TEXT_COLOR }}
//             >
//                 {branch.content}
//             </p>
//         </div>
//     );
// };

// // ********************************************
// // المكوّن الرئيسي: CompetitionBranchesSection
// // ********************************************

// const CompetitionBranchesSection = () => {
//     return (
//         <section 
//             className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
//             style={{ 
//                 backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الغامقة
//                 direction: 'rtl',
//                 position: 'relative',
//             }}
//         >
//             <div className="container mx-auto max-w-7xl relative z-10">
                
//                 {/* 1. العنوان الرئيسي المنفصل (في الأعلى) */}
//                 <div className="flex justify-center mb-12">
//                     <div 
//                         className="p-4 md:p-6 rounded-xl shadow-2xl relative text-center"
//                         style={{ 
//                             backgroundColor: ACCENT_COLOR_LIGHT, // خلفية العنوان الفاتحة
//                             border: `3px solid ${PRIMARY_COLOR_DARK}`,
//                             // تصميم علوي مطابق لنمط العنوان
//                             clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)', 
//                         }}
//                     >
//                         <h2 
//                             className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
//                             style={{ color: PRIMARY_COLOR_DARK }}
//                         >
//                             فروع المســــابقة
//                         </h2>
//                         <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: TEXT_DARK_ON_LIGHT }}>
//                             {branches.length} فروع رئيسية لجميع الفئات
//                         </p>
//                     </div>
//                 </div>

//                 {/* 2. حاوية الفروع - توزيع متناسق باستخدام Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {branches.map((branch) => (
//                         <BranchCard key={branch.id} branch={branch} />
//                     ))}
//                 </div>

//             </div>
            
//             {/* 3. الزخرفة السفلية */}
//             <div 
//                 className="absolute bottom-0 left-0 right-0 h-16" 
//                 style={{ 
//                     backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), transparent)`,
//                 }}
//             >
//                 {/* نمط الزخرفة الهندسية (مكعبات متكررة) */}
//                 <div 
//                     className="absolute bottom-0 left-0 right-0 h-8"
//                     style={{ 
//                         background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
//                         opacity: 0.15,
//                     }}
//                 ></div>
//             </div>
//         </section>
//     );
// };

// export default CompetitionBranchesSection;



//////////////---------------------------------------






import React from 'react';

// ********************************************
// البيانات والألوان
// ********************************************

// الألوان الأساسية
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (الخلفية)
const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (إطارات الفروع)
const BRANCH_TEXT_COLOR = '#292826'; // لون النص الداكن (للنصوص داخل البطاقات الفاتحة)
const TEXT_DARK_ON_LIGHT = '#292826'; // لون النص الداكن الأساسي
const TEXT_LIGHT_ON_DARK = '#FFFFFF'; // لون النص الفاتح الأساسي

// فروع المسابقة
const branches = [
    { id: 1, title: "الفرع الأول", content: "حفظ القرآن الكريم كاملا مع حسن التلاوة والتجويد." },
    { id: 2, title: "الفرع الثاني", content: "حفظ خمسة عشر جزءا مع حسن التلاوة والتجويد." },
    { id: 3, title: "الفرع الثالث", content: "حفظ عشرة أجزاء مع حسن التلاوة والتجويد." },
    { id: 4, title: "الفرع الرابع", content: "حفظ خمسة أجزاء مع حسن التلاوة والتجويد." },
    { id: 5, title: "الفرع الخامس", content: "حفظ ثلاثة أجزاء مع حسن التلاوة والتجويد." },
    { 
        id: 6, 
        title: "الفرع السادس", 
        content: "قراءة جزء \"عم\" مع حسن التلاوة والتجويد (مخصص للفئة العمرية من 4-6 أعوام)." 
    },
];

// ********************************************
// المكوّن الفرعي: BranchCard - بطاقة متساوية الحجم وبتصميم محدث
// ********************************************

const BranchCard = ({ branch }) => {
    return (
        <div 
            // التعديل: جعل الخلفية بيضاء أو بلون الخلفية الغامقة لكن بإطار ذهبي
            // استخدمنا خلفية غامقة فاتحة قليلاً عن خلفية القسم لتباين أفضل
            className="flex flex-col items-center justify-start p-8 rounded-2xl shadow-2xl transition-all duration-500 ease-out h-full transform hover:scale-[1.03] hover:shadow-2xl"
            style={{ 
                backgroundColor: PRIMARY_COLOR_DARK, // خلفية داكنة للبطاقة (أغمق قليلاً من خلفية السكشن)
                border: `4px solid ${ACCENT_COLOR_LIGHT}`, // الإطار الذهبي الفاخر
                boxShadow: `0 0 15px 5px rgba(212, 194, 145, 0.2)`, // ظل خفيف بلون ذهبي
            }}
        >
            {/* عنوان الفرع (الرقم) */}
            <div 
                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full mb-4 shadow-lg transition-transform duration-500"
                style={{ 
                    backgroundColor: ACCENT_COLOR_LIGHT, // دائرة بلون الذهبي الفاتح
                    color: PRIMARY_COLOR_DARK, // النص بلون الخلفية الغامقة
                    border: `3px solid ${TEXT_LIGHT_ON_DARK}`, // إطار أبيض نقي
                }}
            >
                <span className="text-2xl md:text-3xl font-extrabold">{branch.id}</span>
            </div>

            {/* اسم الفرع */}
            <h3 
                className="text-xl md:text-2xl font-bold mb-4 text-center"
                style={{ color: ACCENT_COLOR_LIGHT }} // لون ذهبي فاتح للعناوين
            >
                {branch.title}
            </h3>

            {/* خط فاصل أنيق */}
            <div 
                className="w-1/3 h-1 rounded-full mb-4"
                style={{ backgroundColor: ACCENT_COLOR_LIGHT }}
            ></div>

            {/* محتوى الفرع */}
            <p 
                className="text-base md:text-lg font-medium text-center flex-grow leading-relaxed"
                style={{ color: TEXT_LIGHT_ON_DARK }} // نص فاتح على خلفية داكنة
            >
                {branch.content}
            </p>
        </div>
    );
};

// ********************************************
// المكوّن الرئيسي: CompetitionBranchesSection
// ********************************************

const CompetitionBranchesSection = () => {
    return (
        <section 
            className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
            style={{ 
                backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الغامقة
                direction: 'rtl',
                position: 'relative',
            }}
        >
            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* 1. العنوان الرئيسي المنفصل (في الأعلى) - تصميم أبسط وأكثر نظافة */}
                <div className="flex justify-center mb-16">
                    <div 
                        className="p-4 md:p-6 rounded-2xl shadow-2xl relative text-center"
                        style={{ 
                            backgroundColor: ACCENT_COLOR_LIGHT, // خلفية العنوان الفاتحة
                            border: `3px solid ${PRIMARY_COLOR_DARK}`,
                            // إزالة الـ clipPath المعقدة
                        }}
                    >
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                            style={{ color: PRIMARY_COLOR_DARK }}
                        >
                            فروع المســــابقة
                        </h2>
                        <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: TEXT_DARK_ON_LIGHT }}>
                            {branches.length} فروع رئيسية لجميع الفئات
                        </p>
                    </div>
                </div>

                {/* 2. حاوية الفروع - توزيع متناسق باستخدام Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {branches.map((branch) => (
                        <BranchCard key={branch.id} branch={branch} />
                    ))}
                </div>

            </div>
            
            {/* 3. الزخرفة السفلية */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-16" 
                style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), transparent)`,
                }}
            >
                {/* نمط الزخرفة الهندسية (مكعبات متكررة) */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-8"
                    style={{ 
                        background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
                        opacity: 0.15,
                    }}
                ></div>
            </div>
        </section>
    );
};

export default CompetitionBranchesSection;
