// import React from 'react';
// import { PartyPopper, Zap, BookOpenText } from 'lucide-react';

// // ********************************************
// // ألوان الهوية
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
// const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// // ********************************************
// // بيانات مراحل التكريم
// // ********************************************
// const awardingSteps = [
//     {
//         title: "تنظيم الحفل الختامي",
//         description: "الإعداد اللوجستي والبرنامجي لحفل توزيع الجوائز بحضور رسمي وإعلامي.",
//         icon: PartyPopper,
//         delay: 0.1,
//     },
//     {
//         title: "إعلان النتائج النهائية",
//         description: "الكشف عن أسماء الفائزين والمكرّمين في جميع فروع المسابقة بدقة وشفافية.",
//         icon: Zap,
//         delay: 0.2,
//     },
//     {
//         title: "إصدار التقرير الختامي",
//         description: "توثيق شامل لجميع مراحل المسابقة وإحصائيات المشاركة والتحكيم.",
//         icon: BookOpenText,
//         delay: 0.3,
//     },
// ];

// // ********************************************
// // المكون الفرعي: كتلة الميزة (Feature Block)
// // ********************************************
// const StepFeature = ({ step }) => {
//     const IconComponent = step.icon;
    
//     // تصميم كتلة الميزة (Rounded Feature Block) - مطابق للتصميم السابق
//     return (
//         <div 
//             className="flex items-start p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] h-full"
//             style={{ 
//                 backgroundColor: 'white', 
//                 border: `1px solid ${ACCENT_COLOR_GOLD}60`, // إطار ذهبي ناعم
//                 animation: `fadeInUp 0.6s ease-out forwards ${step.delay}s`,
//                 opacity: 0, // يبدأ مخفياً
//             }}
//         >
//             {/* أيقونة الخطوة في دائرة */}
//             <div 
//                 className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full ml-4"
//                 style={{ 
//                     backgroundColor: PRIMARY_COLOR_DARK, 
//                     boxShadow: `0 0 0 3px ${ACCENT_COLOR_GOLD}`, // شادو ذهبي خفيف
//                     color: TEXT_LIGHT // الأبيض
//                 }}
//             >
//                 <IconComponent 
//                     size={28} 
//                     strokeWidth={2.5}
//                 />
//             </div>

//             {/* محتوى الخطوة */}
//             <div className="flex-1 text-right">
//                 <h3 
//                     className="text-xl font-extrabold mb-1" 
//                     style={{ color: PRIMARY_COLOR_DARK }}
//                 >
//                     {step.title}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed">
//                     {step.description}
//                 </p>
//             </div>
//         </div>
//     );
// };

// // ********************************************
// // المكون الرئيسي
// // ********************************************
// const AwardingPhaseSection = () => {
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
//                         المرحلة الأخيرة: التكـــــــــــــــــريم
//                     </h3>
//                 </header>

//                 {/* شبكة الخطوات (Grid System) */}
//                 {/* 3 عناصر موزعة على عمودين، مما يجعلها تبدو متوازنة تماماً (2 في الصف الأول و 1 في الصف الثاني) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {awardingSteps.map((step, index) => (
//                         <StepFeature 
//                             key={index} 
//                             step={step}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AwardingPhaseSection;




/////////-----------------
import React from 'react';
import { PartyPopper, Zap, BookOpenText } from 'lucide-react';

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات مراحل التكريم
// ********************************************
const awardingSteps = [
    {
        title: "تنظيم الحفل الختامي",
        description: "الإعداد والبرنامجي لحفل توزيع الجوائز بحضور رسمي وإعلامي وضمان سلاسة جميع الترتيبات.",
        icon: PartyPopper,
        delay: 0.1,
        // هذا سيجعل العنصر يأخذ عرض عمودين على الشاشات الكبيرة (عرض كامل)
        spanSize: 'lg:col-span-2' 
    },
    {
        title: "إعلان النتائج النهائية",
        description: "الكشف عن أسماء الفائزين والمكرّمين في جميع فروع المسابقة بدقة وشفافية وحيادية تامة.",
        icon: Zap,
        delay: 0.2,
        spanSize: 'lg:col-span-1'
    },
    {
        title: "إصدار التقرير الختامي",
        description: "توثيق شامل لجميع مراحل المسابقة وإحصائيات المشاركة والتحكيم ورفع تقرير نهائي للمرجعية.",
        icon: BookOpenText,
        delay: 0.3,
        spanSize: 'lg:col-span-1'
    },
];

// ********************************************
// المكون الفرعي: كتلة الميزة (Feature Block)
// ********************************************
const StepFeature = ({ step }) => {
    const IconComponent = step.icon;
    
    // استخدام spanSize لتحديد عرض العنصر في الشبكة (ميزة التوزيع المحسّن)
    const gridSpanClass = step.spanSize; 
    
    return (
        <div className={gridSpanClass}>
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
        </div>
    );
};

// ********************************************
// المكون الرئيسي
// ********************************************
const AwardingPhaseSection = () => {
    return (
        <section 
            className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
            style={{ 
                direction: 'rtl', 
                backgroundColor: BACKGROUND_LIGHT, 
                fontFamily: 'Inter, Tahoma, sans-serif'
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
            
            <div className="container mx-auto max-w-7xl">
                
                {/* العنوان الرئيسي */}
                <header className="text-center mb-16">
                    <h2 
                        className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        خطة الجائـــــــــــــــزة
                        {/* خط ذهبي سميك تحت العنوان */}
                        <span 
                            className="absolute bottom-0 right-0 w-full h-1 rounded-full"
                            style={{ backgroundColor: ACCENT_COLOR_GOLD }}
                        ></span>
                    </h2>
                    <h3 
                        className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-700"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        المرحلة الأخيرة: التكـــــــــــــــــريم
                    </h3>
                </header>

                {/* شبكة الخطوات (Grid System) - تم إعدادها الآن بتوزيع 1-2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {awardingSteps.map((step, index) => (
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

export default AwardingPhaseSection;
