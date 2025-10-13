// import React from 'react';

// // ********************************************
// // البيانات
// // ********************************************

// // الألوان المستخدمة لضمان التناسق
// const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
// const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// // مسارات اللوجوهات المحدثة (يفترض أنها متوفرة في بيئة المشروع)
// const logos = [
//     { src: "/شعار مؤسسة عبدالله الراجحي الخيرية.png", alt: "شعار مؤسسة عبدالله الراجحي الخيرية" },
//     { src: "/شعار وزارة التعليم السعودية.png", alt: "شعار وزارة التعليم السعودية" },
//     { src: "/شعار وزارة الشئون الإسلامية والدعوة والإرشاد.png", alt: "شعار وزارة الشئون الإسلامية والدعوة والإرشاد" },
//     { src: "/شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة.png", alt: "شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة" },
// ];

// // ********************************************
// // المكوّن الرئيسي: SupervisoryCommittee
// // ********************************************

// const SupervisoryCommittee = () => {

//     // النمط المعقد للإطار المنحني الذي سيحتوي اللوجوهات
//     const containerBorderStyle = {
//         border: `3px solid ${ACCENT_COLOR}`,
//         backgroundColor: '#f9f6ef', // لون خفيف جدًا للخلفية الداخلية
//         padding: '2rem',
//         // استخدام خاصية clipPath لإنشاء الشكل الجمالي المنحني
//         clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)',
//         boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
//     };

//     return (
//         <section 
//             className="w-full py-16 px-4 md:px-8 lg:px-16" 
//             style={{ backgroundColor: '#ffffff', direction: 'rtl' }}
//         >
//             <div className="container mx-auto max-w-5xl">
                
//                 {/* 1. العنوان في إطار مستطيل جميل */}
//                 <h2 
//                     className="text-center text-3xl md:text-4xl font-extrabold text-white mb-[-0.5rem] p-4 
//                                  shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
//                     style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10 }}
//                 >
//                     اللجنة الإشرافية للجائزة
//                 </h2>
                
//                 {/* 2. حاوية اللوجوهات في الإطار المنحني */}
//                 <div 
//                     className="relative pt-8 pb-10 mt-[-0.5rem] flex items-center justify-center min-h-[300px]"
//                     style={containerBorderStyle}
//                 >
//                     {/* شبكة عرض اللوجوهات - تتغير من 2 في الصف إلى 4 في الصف على الشاشات الكبيرة */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full max-w-4xl px-4">
//                         {logos.map((logo, index) => (
//                             <div 
//                                 key={index} 
//                                 className="flex items-center justify-center p-3 transition-all duration-300 transform 
//                                            hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer"
//                                 style={{ backgroundColor: '#ffffff', border: `1px solid ${ACCENT_COLOR}20` }}
//                                 title={logo.alt} // إظهار الاسم عند التحويم
//                             >
//                                 <img
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     // ضبط حجم اللوجو ليتناسب مع البطاقة مع الحفاظ على الأبعاد
//                                     className="w-full h-auto max-h-20 object-contain" 
//                                     onError={() => console.error(`Error loading logo: ${logo.src}`)}
//                                 />
//                             </div>
//                         ))}
//                     </div>
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

// export default SupervisoryCommittee;


////////----------------------------------------------









import React from 'react';

// ********************************************
// البيانات
// ********************************************

// الألوان المستخدمة لضمان التناسق
const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// المسارات
const BACKGROUND_IMAGE_PATH = "/خلفية-إسلامية--1.jpg";

// مسارات اللوجوهات المحدثة (يفترض أنها متوفرة في بيئة المشروع)
const logos = [
    { src: "/شعار مؤسسة عبدالله الراجحي الخيرية.png", alt: "شعار مؤسسة عبدالله الراجحي الخيرية" },
    { src: "/شعار وزارة التعليم السعودية.png", alt: "شعار وزارة التعليم السعودية" },
    { src: "/شعار وزارة الشئون الإسلامية والدعوة والإرشاد.png", alt: "شعار وزارة الشئون الإسلامية والدعوة والإرشاد" },
    { src: "/شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة.png", alt: "شعار اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة" },
];

// ********************************************
// المكوّن الرئيسي: SupervisoryCommittee
// ********************************************

const SupervisoryCommittee = () => {

    // النمط المعقد للإطار المنحني الذي سيحتوي اللوجوهات
    const containerBorderStyle = {
        border: `3px solid ${ACCENT_COLOR}`,
        backgroundColor: 'rgba(249, 246, 239, 0.9)', // لون خفيف جدًا للخلفية الداخلية بشفافية
        padding: '2rem',
        // استخدام خاصية clipPath لإنشاء الشكل الجمالي المنحني
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    };

    return (
        <section 
            className="w-full py-16 px-4 md:px-8 lg:px-16 relative" 
            style={{ 
                direction: 'rtl',
                // تطبيق صورة الخلفية
                backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
                backgroundSize: 'cover', // لتغطية السكشن بالكامل
                backgroundPosition: 'center', // توسيط الصورة
                backgroundAttachment: 'fixed', // (اختياري) لجعل الصورة ثابتة أثناء التمرير
            }}
        >
            {/* طبقة تظليل خفيفة فوق الصورة لتحسين وضوح النص والشعارات */}
            <div className="absolute inset-0 bg-white opacity-20 z-0"></div>
            
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* 1. العنوان في إطار مستطيل جميل */}
                <h2 
                    className="text-center text-3xl md:text-4xl font-extrabold text-white mb-[-0.5rem] p-4 
                                 shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
                    style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10 }}
                >
                    اللجنة الإشرافية للجائزة
                </h2>
                
                {/* 2. حاوية اللوجوهات في الإطار المنحني */}
                <div 
                    className="relative pt-8 pb-10 mt-[-0.5rem] flex items-center justify-center min-h-[300px]"
                    style={containerBorderStyle}
                >
                    {/* شبكة عرض اللوجوهات - تتغير من 2 في الصف إلى 4 في الصف على الشاشات الكبيرة */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full max-w-4xl px-4">
                        {logos.map((logo, index) => (
                            <div 
                                key={index} 
                                className="flex items-center justify-center p-3 transition-all duration-300 transform 
                                         hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer"
                                style={{ backgroundColor: '#ffffff', border: `1px solid ${ACCENT_COLOR}20` }}
                                title={logo.alt} // إظهار الاسم عند التحويم
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    // ضبط حجم اللوجو ليتناسب مع البطاقة مع الحفاظ على الأبعاد
                                    className="w-full h-auto max-h-20 object-contain" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x80/${ACCENT_COLOR.replace('#', '')}/ffffff?text=شعار+${index+1}`; }}
                                />
                            </div>
                        ))}
                    </div>
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

export default SupervisoryCommittee;



