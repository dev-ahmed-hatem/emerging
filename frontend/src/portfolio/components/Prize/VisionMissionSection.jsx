// import React from 'react';

// // ********************************************
// // البيانات
// // ********************************************

// const VISION_TEXT = "بيئة تنافسية للبنـــين والبنـــات لخدمة القرآن الكريم.";
// const MISSION_TEXT = "تنظيـــم مســـابقة نوعية تتســـم بالجودة واملهنيـــة، تعزز التنافس الإيجابي وتطور آليـــات املشـــاركة والتحكيـــم لتحقيـــق الانتشار وفق أفضل المعايير.";

// // الألوان المستخدمة لضمان التناسق مع الأقسام السابقة
// const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ (لحدود العناوين والخلفية الخفيفة)
// const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن (للون الخط الأساسي)

// // ********************************************
// // المكوّن الرئيسي: VisionMissionSection
// // ********************************************

// const VisionMissionSection = () => {

//     // مكوّن فرعي لإنشاء بطاقة المحتوى
//     const ContentCard = ({ title, text }) => {
        
//         // النمط المعقد للإطار المنحني (الداخلي)
//         const contentBorderStyle = {
//             border: `1px solid ${ACCENT_COLOR}`,
//             backgroundColor: '#f9f6ef', // لون خفيف جدًا للخلفية الداخلية
//             padding: '2rem',
//             // استخدام خاصية clipPath لإنشاء الشكل المعقد (شبيه بالصورة المرفقة)
//             clipPath: 'polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
//         };

//         return (
//             <div className="flex flex-col items-stretch w-full h-full p-4">
                
//                 {/* العنوان في إطار مستطيل جميل */}
//                 <h3 
//                     className="text-center text-xl md:text-2xl font-bold text-white mb-[-0.5rem] p-2 
//                                  shadow-md rounded-t-lg mx-auto w-3/4 max-w-sm"
//                     style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10 }} // استخدام اللون الأساسي للخلفية
//                 >
//                     {title}
//                 </h3>
                
//                 {/* المحتوى في إطار منحني */}
//                 <div 
//                     className="flex-grow flex items-center justify-center text-right text-lg md:text-xl leading-relaxed mt-[-0.5rem]"
//                     style={contentBorderStyle}
//                 >
//                     <p style={{ color: PRIMARY_COLOR }} className="p-4 pt-6">{text}</p>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <section 
//             className="w-full py-16 px-4 md:px-8 lg:px-16" 
//             style={{ backgroundColor: '#ffffff', direction: 'rtl' }}
//         >
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* عنوان القسم الرئيسي (اختياري) */}
//                 <h2 
//                     className="text-3xl md:text-4xl font-extrabold text-center mb-12 pb-2" 
//                     style={{ color: PRIMARY_COLOR, borderBottom: `4px solid ${ACCENT_COLOR}` }}
//                 >
//                     الرؤية والرسالة
//                 </h2>
                
//                 {/* حاوية البطاقات - نظام شبكي (Grid) لعرض مرن */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    
//                     {/* بطاقة الرؤية */}
//                     <ContentCard 
//                         title="الرؤية"
//                         text={VISION_TEXT}
//                     />

//                     {/* بطاقة الرسالة */}
//                     <ContentCard 
//                         title="الرسالة"
//                         text={MISSION_TEXT}
//                     />

//                 </div>
//             </div>
            
//             {/* زخرفة سفلية خفيفة */}
//             <div 
//                 className="w-full h-10 mt-16" 
//                 style={{ 
//                     // يمكنك استخدام صورة زخرفية خفيفة هنا أو نمط CSS
//                     background: `repeating-linear-gradient(45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
//                     opacity: 0.1,
//                 }}
//             ></div>
//         </section>
//     );
// };

// export default VisionMissionSection;



////---------------------------------------





import React from 'react';

// ********************************************
// البيانات
// ********************************************

const VISION_TEXT = "بيئة تنافسية للبنـــين والبنـــات لخدمة القرآن الكريم.";
const MISSION_TEXT = "تنظيـــم مســـابقة نوعية تتســـم بالجودة والمهنية، تعزز التنافس الإيجابي وتطور آليـــات املشـــاركة والتحكيـــم لتحقيـــق الانتشار وفق أفضل المعايير.";

// الألوان المستخدمة لضمان التناسق مع الأقسام السابقة
const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ (لحدود العناوين والخلفية الخفيفة)
const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن (للون الخط الأساسي)

// ********************************************
// المكوّن الرئيسي: VisionMissionSection
// ********************************************

const VisionMissionSection = () => {
    // المسار الجديد لصورة الخلفية
    const BACKGROUND_IMAGE_PATH = "/خلفية-إسلامية--1.jpg";

    // مكوّن فرعي لإنشاء بطاقة المحتوى
    const ContentCard = ({ title, text }) => {
        
        // النمط المعقد للإطار المنحني (الداخلي)
        const contentBorderStyle = {
            border: `1px solid ${ACCENT_COLOR}`,
            backgroundColor: 'rgba(249, 246, 239, 0.95)', // لون خفيف جدًا للخلفية الداخلية مع شفافية بسيطة لتحسين القراءة
            padding: '2rem',
            // استخدام خاصية clipPath لإنشاء الشكل المعقد (شبيه بالصورة المرفقة)
            clipPath: 'polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        };

        return (
            <div className="flex flex-col items-stretch w-full h-full p-4">
                
                {/* العنوان في إطار مستطيل جميل */}
                <h3 
                    className="text-center text-xl md:text-2xl font-bold text-white mb-[-0.5rem] p-2 
                             shadow-md rounded-t-lg mx-auto w-3/4 max-w-sm"
                    style={{ backgroundColor: PRIMARY_COLOR, zIndex: 10 }} // استخدام اللون الأساسي للخلفية
                >
                    {title}
                </h3>
                
                {/* المحتوى في إطار منحني */}
                <div 
                    className="flex-grow flex items-center justify-center text-right text-lg md:text-xl leading-relaxed mt-[-0.5rem]"
                    style={contentBorderStyle}
                >
                    <p style={{ color: PRIMARY_COLOR }} className="p-4 pt-6">{text}</p>
                </div>
            </div>
        );
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
            {/* طبقة تظليل خفيفة فوق الصورة لتحسين وضوح النص */}
            <div className="absolute inset-0 bg-white opacity-20 z-0"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* عنوان القسم الرئيسي (اختياري) */}
                <h2 
                    className="text-3xl md:text-4xl font-extrabold text-center mb-12 pb-2" 
                    style={{ color: PRIMARY_COLOR, borderBottom: `4px solid ${ACCENT_COLOR}` }}
                >
                    الرؤية والرسالة
                </h2>
                
                {/* حاوية البطاقات - نظام شبكي (Grid) لعرض مرن */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* بطاقة الرؤية */}
                    <ContentCard 
                        title="الرؤية"
                        text={VISION_TEXT}
                    />

                    {/* بطاقة الرسالة */}
                    <ContentCard 
                        title="الرسالة"
                        text={MISSION_TEXT}
                    />

                </div>
            </div>
            
            {/* زخرفة سفلية خفيفة */}
            <div 
                className="w-full h-10 mt-16 relative z-10" 
                style={{ 
                    // يمكنك استخدام صورة زخرفية خفيفة هنا أو نمط CSS
                    background: `repeating-linear-gradient(45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
                    opacity: 0.15,
                }}
            ></div>
        </section>
    );
};

export default VisionMissionSection;


