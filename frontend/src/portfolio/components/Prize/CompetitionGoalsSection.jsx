// import React from 'react';
// // تم حذف جميع استيرادات الأيقونات

// // ********************************************
// // البيانات
// // ********************************************

// // الألوان المستخدمة لضمان التناسق
// const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
// const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// // قائمة الأهداف بدون أيقونات
// const goals = [
//     { text: "اكتشاف وتنمية مهارات ومواهب الناشئة." },
//     { text: "إبراز املتميزين من الناشئة في حفظ القرآن وتلاوته ليكونوا قدوات." },
//     { text: "تنمية الاعتزاز بالقرآن لدى الناشئة." },
//     { text: "إتقان الحفظ والتلاوة منذ الصغر." },
//     { text: "العناية بإنشاء حلقات قرآنية مخصصة للأطفال." },
//     { text: "إعداد وتأهيل الناشئة للمنافسة واملشاركة في مسابقات القرآن الكريم." },
// ];

// // ********************************************
// // المكوّن الفرعي: GoalCard
// // ********************************************

// const GoalCard = ({ goal, index }) => {
    
//     // النمط الخاص بالإطار الأنيق لكل هدف
//     const cardStyle = {
//         border: `2px solid ${ACCENT_COLOR}`,
//         backgroundColor: '#fffbeb', // خلفية بيضاء مائلة للذهبي الفاتح
//         transition: 'all 0.3s ease-out',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
//     };

//     return (
//         <div 
//             className="flex flex-row items-stretch p-4 rounded-2xl space-x-6 space-x-reverse h-full transform hover:scale-[1.02] hover:shadow-lg"
//             style={cardStyle}
//         >
//             {/* الرقم الترتيبي (تم توسيطه رأسيًا) */}
//             <div className="flex-shrink-0 flex items-center">
//                 <div 
//                     className="w-10 h-10 flex items-center justify-center text-xl font-bold rounded-full text-white"
//                     style={{ backgroundColor: PRIMARY_COLOR, border: `2px solid ${ACCENT_COLOR}` }}
//                 >
//                     {index + 1}
//                 </div>
//             </div>

//             {/* النص */}
//             <p className="text-right text-lg font-medium flex items-center w-full" style={{ color: PRIMARY_COLOR }}>
//                 {goal.text}
//             </p>
//         </div>
//     );
// };


// // ********************************************
// // المكوّن الرئيسي: CompetitionGoalsSection
// // ********************************************

// const CompetitionGoalsSection = () => {
//     return (
//         <section 
//             className="w-full py-20 px-4 md:px-8 lg:px-16" 
//             style={{ backgroundColor: '#ffffff', direction: 'rtl' }}
//         >
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* 1. العنوان في إطار مستطيل جميل (مطابق لتصميم الأقسام السابقة) */}
//                 <h2 
//                     className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10 p-4 
//                                  shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
//                     style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10, borderBottom: `4px solid ${ACCENT_COLOR}` }}
//                 >
//                     أهداف المسابقة
//                 </h2>
                
//                 {/* 2. حاوية الأهداف - شبكة عرض مرتبة */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-6">
//                     {goals.map((goal, index) => (
//                         <GoalCard key={index} goal={goal} index={index} />
//                     ))}
//                 </div>

//             </div>
            
//             {/* زخرفة سفلية خفيفة */}
//             <div 
//                 className="w-full h-10 mt-16" 
//                 style={{ 
//                     background: `repeating-linear-gradient(45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
//                     opacity: 0.1,
//                 }}
//             ></div>
//         </section>
//     );
// };

// export default CompetitionGoalsSection;



/////////----------------------






// import React from 'react';
// // تم حذف جميع استيرادات الأيقونات

// // ********************************************
// // البيانات
// // ********************************************

// // الألوان المستخدمة لضمان التناسق
// const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
// const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// // قائمة الأهداف بدون أيقونات
// const goals = [
//     { text: "اكتشاف وتنمية مهارات ومواهب الناشئة." },
//     { text: "إبراز المتميزين من الناشئة في حفظ القرآن وتلاوته ليكونوا قدوات." },
//     { text: "تنمية الاعتزاز بالقرآن لدى الناشئة." },
//     { text: "إتقان الحفظ والتلاوة منذ الصغر." },
//     { text: "العناية بإنشاء حلقات قرآنية مخصصة للأطفال." },
//     { text: "إعداد وتأهيل الناشئة للمنافسة والمشاركة في مسابقات القرآن الكريم." },
// ];

// // ********************************************
// // المكوّن الفرعي: GoalCard
// // ********************************************

// const GoalCard = ({ goal, index }) => {
    
//     // النمط الخاص بالإطار الأنيق لكل هدف
//     const cardStyle = {
//         border: `2px solid ${ACCENT_COLOR}`,
//         backgroundColor: '#fffbeb', // خلفية بيضاء مائلة للذهبي الفاتح
//         transition: 'all 0.3s ease-out',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
//     };

//     return (
//         <div 
//             className="flex flex-row items-stretch p-6 rounded-2xl space-x-6   h-full transform hover:scale-[1.02] hover:shadow-lg"
//             style={cardStyle}
//         >
//             {/* الرقم الترتيبي (تم توسيطه رأسيًا) */}
//             <div className="flex-shrink-0 flex items-center">
//                 <div 
//                     className="w-10 h-10 flex items-center justify-center text-xl font-bold rounded-full text-white"
//                     style={{ backgroundColor: PRIMARY_COLOR, border: `2px solid ${ACCENT_COLOR}` }}
//                 >
//                     {index + 1}
//                 </div>
//             </div>

//             {/* النص */}
//             <p className="text-right text-lg font-medium flex items-center w-full" style={{ color: PRIMARY_COLOR }}>
//                 {goal.text}
//             </p>
//         </div>
//     );
// };


// // ********************************************
// // المكوّن الرئيسي: CompetitionGoalsSection
// // ********************************************

// const CompetitionGoalsSection = () => {
//     return (
//         <section 
//             className="w-full py-20 px-4 md:px-8 lg:px-16" 
//             style={{ backgroundColor: '#ffffff', direction: 'rtl' }}
//         >
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* 1. العنوان في إطار مستطيل جميل (مطابق لتصميم الأقسام السابقة) */}
//                 <h2 
//                     className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10 p-4 
//                                  shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
//                     style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10, borderBottom: `4px solid ${ACCENT_COLOR}` }}
//                 >
//                     أهداف المسابقة
//                 </h2>
                
//                 {/* 2. حاوية الأهداف - شبكة عرض مرتبة */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-6">
//                     {goals.map((goal, index) => (
//                         <GoalCard key={index} goal={goal} index={index} />
//                     ))}
//                 </div>

//             </div>
            
//             {/* زخرفة سفلية خفيفة */}
//             <div 
//                 className="w-full h-10 mt-16" 
//                 style={{ 
//                     background: `repeating-linear-gradient(45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
//                     opacity: 0.1,
//                 }}
//             ></div>
//         </section>
//     );
// };

// export default CompetitionGoalsSection;



///-----------------------------------------------











import React from 'react';
// تم حذف جميع استيرادات الأيقونات

// ********************************************
// البيانات
// ********************************************

// الألوان المستخدمة لضمان التناسق
const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// مسار صورة الخلفية
const BACKGROUND_IMAGE_PATH = "/خلفية-إسلامية--1.jpg";


// قائمة الأهداف بدون أيقونات
const goals = [
    { text: "اكتشاف وتنمية مهارات ومواهب الناشئة." },
    { text: "إبراز المتميزين من الناشئة في حفظ القرآن وتلاوته ليكونوا قدوات." },
    { text: "تنمية الاعتزاز بالقرآن لدى الناشئة." },
    { text: "إتقان الحفظ والتلاوة منذ الصغر." },
    { text: "العناية بإنشاء حلقات قرآنية مخصصة للأطفال." },
    { text: "إعداد وتأهيل الناشئة للمنافسة والمشاركة في مسابقات القرآن الكريم." },
];

// ********************************************
// المكوّن الفرعي: GoalCard
// ********************************************

const GoalCard = ({ goal, index }) => {
    
    // النمط الخاص بالإطار الأنيق لكل هدف
    const cardStyle = {
        border: `2px solid ${ACCENT_COLOR}`,
        backgroundColor: '#fffbeb', // خلفية بيضاء مائلة للذهبي الفاتح
        transition: 'all 0.3s ease-out',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    };

    return (
        <div 
            className="flex flex-row items-stretch p-6 rounded-2xl space-x-6 h-full transform hover:scale-[1.02] hover:shadow-lg relative z-10"
            style={cardStyle}
        >
            {/* الرقم الترتيبي (تم توسيطه رأسيًا) */}
            <div className="flex-shrink-0 flex items-center">
                <div 
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold rounded-full text-white"
                    style={{ backgroundColor: PRIMARY_COLOR, border: `2px solid ${ACCENT_COLOR}` }}
                >
                    {index + 1}
                </div>
            </div>

            {/* النص */}
            <p className="text-right text-lg font-medium flex items-center w-full" style={{ color: PRIMARY_COLOR }}>
                {goal.text}
            </p>
        </div>
    );
};


// ********************************************
// المكوّن الرئيسي: CompetitionGoalsSection
// ********************************************

const CompetitionGoalsSection = () => {
    return (
        <section 
            className="w-full py-20 px-4 md:px-8 lg:px-16 relative" 
            style={{ 
                direction: 'rtl',
                // تطبيق صورة الخلفية
                backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
                backgroundSize: 'cover', // لتغطية السكشن بالكامل
                backgroundPosition: 'center', // توسيط الصورة
                backgroundAttachment: 'fixed', // (اختياري) لجعل الصورة ثابتة أثناء التمرير
            }}
        >
            {/* طبقة تظليل خفيفة فوق الصورة لتحسين وضوح النص */}
            <div className="absolute inset-0 bg-white opacity-20 z-0"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* 1. العنوان في إطار مستطيل جميل (مطابق لتصميم الأقسام السابقة) */}
                <h2 
                    className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10 p-4 
                                 shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
                    style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10, borderBottom: `4px solid ${ACCENT_COLOR}` }}
                >
                    أهداف المسابقة
                </h2>
                
                {/* 2. حاوية الأهداف - شبكة عرض مرتبة */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-6">
                    {goals.map((goal, index) => (
                        <GoalCard key={index} goal={goal} index={index} />
                    ))}
                </div>

            </div>
            
            {/* زخرفة سفلية خفيفة */}
            <div 
                className="w-full h-10 mt-16 relative z-10" 
                style={{ 
                    background: `repeating-linear-gradient(45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
                    opacity: 0.15,
                }}
            ></div>
        </section>
    );
};

export default CompetitionGoalsSection;
