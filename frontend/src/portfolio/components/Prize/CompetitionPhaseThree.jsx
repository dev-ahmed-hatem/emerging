// import React from 'react';
// import { Award, Globe, Building2, CalendarCheck } from 'lucide-react';

// // ********************************************
// // ألوان الهوية
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
// const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// // ********************************************
// // بيانات المرحلة الثالثة
// // ********************************************
// const phaseThreeDetails = [
//     {
//         icon: Globe,
//         title: "مستـــــــوى الإقامة",
//         content: "التصفيات الختامية على مستوى المملكة العربية السعودية.",
//     },
//     {
//         icon: CalendarCheck,
//         title: "تاريــــــــخ الإقامة",
//         content: "من ۲۰ ربيع الثاني ۱٤٤٧هـ الموافق ۱۲ أكتوبر ۲۰۲٥م.",
//     },
//     {
//         icon: Building2,
//         title: "جهة الإشراف والمتابعة",
//         content: "تحت إشراف ومتابعة رسمية مباشرة لضمان أعلى مستويات التنظيم والحيادية.",
//     },
// ];

// // ********************************************
// // المكون الفرعي: مربع التفاصيل النهائي
// // ********************************************
// const FinalDetailBox = ({ detail }) => {
//     const IconComponent = detail.icon;
    
//     return (
//         <div 
//             className="w-full md:w-1/3 p-4"
//             style={{ 
//                 animation: `zoomIn 0.8s ease-out forwards`,
//                 opacity: 0, 
//             }}
//         >
//             <div 
//                 className="p-6 rounded-xl text-center flex flex-col items-center h-full transition-shadow duration-300"
//                 style={{
//                     backgroundColor: TEXT_LIGHT,
//                     // تأثير الحدود القوية والمحفورة باستخدام Shadow مزدوج
//                     boxShadow: `0 0 0 4px ${ACCENT_COLOR_GOLD}, 0 8px 15px -3px rgba(0, 0, 0, 0.15)`,
//                 }}
//             >
//                 {/* الأيقونة المذهبة */}
//                 <div 
//                     className="w-12 h-12 flex items-center justify-center rounded-full mb-3"
//                     style={{ 
//                         backgroundColor: ACCENT_COLOR_GOLD, 
//                         color: PRIMARY_COLOR_DARK,
//                         boxShadow: `inset 0 0 0 2px ${PRIMARY_COLOR_DARK}50`,
//                     }}
//                 >
//                     <IconComponent size={24} strokeWidth={2.5} />
//                 </div>
                
//                 {/* العنوان */}
//                 <h3 
//                     className="text-lg font-extrabold mb-2" 
//                     style={{ color: PRIMARY_COLOR_DARK }}
//                 >
//                     {detail.title}
//                 </h3>
                
//                 {/* المحتوى */}
//                 <p 
//                     className="text-base text-gray-700 font-medium"
//                 >
//                     {detail.content}
//                 </p>
//             </div>
//         </div>
//     );
// };

// // ********************************************
// // المكون الرئيسي
// // ********************************************
// const CompetitionPhaseThree = () => {
//     return (
//         <section 
//             className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
//             style={{ 
//                 direction: 'rtl', 
//                 backgroundColor: BACKGROUND_LIGHT, 
//                 fontFamily: 'Inter, Tahoma, sans-serif'
//             }}
//         >
//             {/* تعريف الأنميشن */}
//             <style jsx global>{`
//                 @keyframes zoomIn {
//                     from {
//                         opacity: 0;
//                         transform: scale(0.9);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: scale(1);
//                     }
//                 }
//             `}</style>
            
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* العنوان الرئيسي للمرحلة */}
//                 <header className="text-center mb-16">
//                     <h2 
//                         className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         مراحــــــــل المسابقــــــــــــــة
//                         {/* خط ذهبي سميك تحت العنوان */}
//                         <span 
//                             className="absolute bottom-0 right-0 w-full h-1 rounded-full"
//                             style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//                         ></span>
//                     </h2>
//                     <h3 
//                         className="text-3xl sm:text-4xl font-extrabold mt-4"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         المرحلـــة الثالثة: التصفيات الختامية
//                     </h3>
//                 </header>

//                 {/* كتلة التتويج الكبيرة (Hero Block) */}
//                 <div 
//                     className="p-8 sm:p-12 rounded-3xl text-center mb-16 shadow-2xl relative overflow-hidden"
//                     style={{
//                         backgroundColor: PRIMARY_COLOR_DARK,
//                         color: TEXT_LIGHT,
//                         border: `4px solid ${ACCENT_COLOR_GOLD}`,
//                         animation: 'zoomIn 1s ease-out forwards',
//                         opacity: 0,
//                     }}
//                 >
//                     {/* شعار التتويج الكبير */}
//                     <Award size={64} className="mx-auto mb-4" style={{ color: ACCENT_COLOR_GOLD }} strokeWidth={2} />
                    
//                     <h4 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: ACCENT_COLOR_GOLD }}>
//                         التصفيات النهائية الكبرى
//                     </h4>
//                     <p className="text-lg sm:text-xl font-medium">
//                         هذه هي مرحلة التنافس على المراكز الأولى، حيث يتم اختيار الفائزين على مستوى المملكة.
//                     </p>
//                 </div>

//                 {/* تخطيط التفاصيل */}
//                 <div className="flex flex-wrap -mx-4 justify-center">
//                     {phaseThreeDetails.map((detail, index) => (
//                         <FinalDetailBox 
//                             key={index} 
//                             detail={detail}
//                         />
//                     ))}
//                 </div>
                
//             </div>
//         </section>
//     );
// };

// export default CompetitionPhaseThree;





////////////////////////-------------------




import React from 'react';
import { Award, Globe, Building2, CalendarCheck } from 'lucide-react';

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات المرحلة الثالثة
// ********************************************
const phaseThreeDetails = [
    {
        icon: Globe,
        title: "مستـــــــوى الإقامة",
        content: "التصفيات الختامية على مستوى المملكة العربية السعودية.",
    },
    {
        icon: CalendarCheck,
        title: "تاريــــــــخ الإقامة",
        content: "من ۲۰ ربيع الثاني ۱٤٤٧هـ الموافق ۱۲ أكتوبر ۲۰۲٥م.",
    },
    {
        icon: Building2,
        title: "جهة الإشراف والمتابعة",
        content: "تحت إشراف ومتابعة رسمية مباشرة لضمان أعلى مستويات التنظيم والحيادية.",
    },
];

// ********************************************
// المكون الفرعي: مربع التفاصيل النهائي
// ********************************************
const FinalDetailBox = ({ detail, index }) => {
    const IconComponent = detail.icon;
    // زيادة التأخير وجعله أكثر سلاسة
    const delay = (index * 0.2) + 0.3; 
    
    return (
        <div 
            className="w-full md:w-1/3 p-4"
            // استخدام fadeInUp لمدة 1.2 ثانية لتكون الحركة أكثر سلاسة
            style={{ 
                animation: `fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${delay}s`,
                opacity: 0, 
            }}
        >
            <div 
                className="p-6 rounded-xl text-center flex flex-col items-center h-full transition-all duration-500 ease-in-out hover:shadow-2xl hover:translate-y-[-8px]"
                style={{
                    backgroundColor: TEXT_LIGHT,
                    boxShadow: `0 0 0 4px ${ACCENT_COLOR_GOLD}, 0 10px 25px -5px rgba(0, 0, 0, 0.2)`,
                }}
            >
                {/* الأيقونة المذهبة مع حركة طفيفة عند الظهور */}
                <div 
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-3"
                    style={{ 
                        backgroundColor: ACCENT_COLOR_GOLD, 
                        color: PRIMARY_COLOR_DARK,
                        boxShadow: `inset 0 0 0 2px ${PRIMARY_COLOR_DARK}50`,
                        animation: `iconPop 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards ${delay + 0.8}s`,
                        transform: 'scale(0)', // يبدأ بحجم صفر
                    }}
                >
                    <IconComponent size={24} strokeWidth={2.5} />
                </div>
                
                {/* العنوان والمحتوى */}
                <h3 
                    className="text-lg font-extrabold mb-2" 
                    style={{ color: PRIMARY_COLOR_DARK }}
                >
                    {detail.title}
                </h3>
                <p 
                    className="text-base text-gray-700 font-medium"
                >
                    {detail.content}
                </p>
            </div>
        </div>
    );
};

// ********************************************
// المكون الرئيسي
// ********************************************
const CompetitionPhaseThree = () => {
    return (
        <section 
            className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
            style={{ 
                direction: 'rtl', 
                backgroundColor: BACKGROUND_LIGHT, 
                fontFamily: 'Inter, Tahoma, sans-serif'
            }}
        >
            {/* تعريف الأنميشن - تم تحسين Easing Function والمدة */}
            <style jsx global>{`
                /* حركة تكبير ناعمة جداً */
                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                /* حركة صعود ناعمة جداً */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                /* حركة نبض أبطأ وأكثر سلاسة */
                @keyframes pulseGold {
                    0%, 100% { transform: scaleX(1); opacity: 1; }
                    50% { transform: scaleX(1.03); opacity: 0.8; }
                }
                /* حركة طفو خفيفة للأيقونة الكبيرة */
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-5px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                /* حركة انبثاق الأيقونة مع ارتداد خفيف في النهاية */
                @keyframes iconPop {
                    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
                    80% { transform: scale(1.15) rotate(10deg); opacity: 1; }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
            `}</style>
            
            <div className="container mx-auto max-w-6xl">
                
                {/* العنوان الرئيسي */}
                <header className="text-center mb-16">
                    <h2 
                        className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        مراحــــــــل المسابقــــــــــــــة
                        {/* خط ذهبي سميك مع تأثير النبض البطيء */}
                        <span 
                            className="absolute bottom-0 right-0 w-full h-1 rounded-full"
                            style={{ 
                                backgroundColor: ACCENT_COLOR_GOLD,
                                animation: 'pulseGold 3s infinite alternate ease-in-out',
                            }}
                        ></span>
                    </h2>
                    <h3 
                        className="text-3xl sm:text-4xl font-extrabold mt-4"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        المرحلـــة الثالثة: التصفيات الختامية
                    </h3>
                </header>

                {/* كتلة التتويج الكبيرة (Hero Block) مع تأثير ZoomIn لمدة أطول */}
                <div 
                    className="p-8 sm:p-12 rounded-3xl text-center mb-16 shadow-2xl relative overflow-hidden"
                    style={{
                        backgroundColor: PRIMARY_COLOR_DARK,
                        color: TEXT_LIGHT,
                        border: `4px solid ${ACCENT_COLOR_GOLD}`,
                        animation: 'zoomIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.1s',
                        opacity: 0,
                    }}
                >
                    {/* شعار التتويج الكبير مع حركة طفو دائمة خفيفة */}
                    <Award 
                        size={64} 
                        className="mx-auto mb-4" 
                        style={{ 
                            color: ACCENT_COLOR_GOLD,
                            animation: 'float 5s ease-in-out infinite',
                        }} 
                        strokeWidth={2} 
                    />
                    
                    <h4 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: ACCENT_COLOR_GOLD }}>
                        التصفيات النهائية الكبرى
                    </h4>
                    <p className="text-lg sm:text-xl font-medium">
                        هذه هي مرحلة التنافس على المراكز الأولى، حيث يتم اختيار الفائزين على مستوى المملكة.
                    </p>
                </div>

                {/* تخطيط التفاصيل مع الحركة المتتالية الناعمة */}
                <div className="flex flex-wrap -mx-4 justify-center">
                    {phaseThreeDetails.map((detail, index) => (
                        <FinalDetailBox 
                            key={index} 
                            detail={detail}
                            index={index} 
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default CompetitionPhaseThree;
