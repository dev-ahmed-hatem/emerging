// import React from 'react';
// import { Award, Globe, Building2, CalendarCheck, CheckCircle, Zap } from 'lucide-react';

// // ********************************************
// // ألوان الهوية
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
// const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة
// const TEXT_DARK = '#333333'; // لون النص الداكن للوضوح

// // ********************************************
// // بيانات المرحلة الثالثة (لم تتغير)
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
// // بيانات النقاط التوضيحية الجديدة
// // ********************************************
// const clarificationPoints = [
//     {
//         icon: Zap,
//         title: "مهام اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم بالمملكة",
//         color: PRIMARY_COLOR_DARK,
//         points: [
//             "الإعلان عن الجائزة وانطلاقها اعتباراً من تاريخ ٩/٢/١٤٤٧ هجري الموافق ٣/٨/٢٠٢٥.",
//             "مخاطبـــة الجمعيات الخيرية لتحفيظ القرآن الكريم في كل منطقة إدارية من مناطق اململكة ليقوموا بتنظيم املسابقة على مستوى املنطقة بالتنســـيق مع الجهات التعليميـــة في املناطق وفروعها في املحافظات.",
//             "تنظيـــم التصفيـــات النهائيـــة للمســـابقة عـــلى مســـتوى اململـــكة وإعلان الفائزين وتكريمهم برعاية خادم الحرمين الشريفين.",
//         ],
//     },
//     {
//         icon: Building2,
//         title: "مهام الجمعية الرئيسية في كل منطقة من المناطق الإدارية بالمملكة",
//         color: ACCENT_COLOR_GOLD,
//         points: [
//             "تكوين لجنة إشرافية على مســـتوى املنطقة وعلى مســـتوى املحافظات لتولي الإشراف على تنظيم هذه املسابقة والترتيب لها.",
//             "مخاطبـــة الجمعيـــات الخيريـــة لتحفيـــظ القـــرآن الكريـــم باملحافـــظات، وخطـــاب إدارة التعليـــم لترشـــيح الطـــلاب والطالبـــات للمشـــاركة في املسابقة.",
//             "التنســـيق بـــين الجمعيـــات الخيريـــة في املناطق واملحافظـــات من خلال أعضـــاء اللجـــان املشـــكلة لذلـــك، والتنســـيق مـــع مكاتـــب التعليم في املحافظات لترشيح الطلاب املشاركين في القرآن الكريم.",
//             "وضـــع خطـــة عامـــة لإقامـــة املســـابقة في املحافظـــات ثـــم في املنطقة، وتـــزويد الجمعيـــات الخيرية لتحفيظ القرآن الكريم بنسخة منها.",
//         ],
//     },
// ];

// // ********************************************
// // المكون الفرعي: مربع التفاصيل النهائي (من الطلب السابق)
// // ********************************************
// const FinalDetailBox = ({ detail, index }) => {
//     const IconComponent = detail.icon;
//     const delay = (index * 0.2) + 0.3; 
    
//     return (
//         <div 
//             className="w-full md:w-1/3 p-4"
//             style={{ 
//                 animation: `fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${delay}s`,
//                 opacity: 0, 
//             }}
//         >
//             <div 
//                 className="p-6 rounded-xl text-center flex flex-col items-center h-full transition-all duration-500 ease-in-out hover:shadow-2xl hover:translate-y-[-8px]"
//                 style={{
//                     backgroundColor: TEXT_LIGHT,
//                     boxShadow: `0 0 0 4px ${ACCENT_COLOR_GOLD}, 0 10px 25px -5px rgba(0, 0, 0, 0.2)`,
//                 }}
//             >
//                 <div 
//                     className="w-12 h-12 flex items-center justify-center rounded-full mb-3"
//                     style={{ 
//                         backgroundColor: ACCENT_COLOR_GOLD, 
//                         color: PRIMARY_COLOR_DARK,
//                         boxShadow: `inset 0 0 0 2px ${PRIMARY_COLOR_DARK}50`,
//                         animation: `iconPop 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards ${delay + 0.8}s`,
//                         transform: 'scale(0)',
//                     }}
//                 >
//                     <IconComponent size={24} strokeWidth={2.5} />
//                 </div>
                
//                 <h3 
//                     className="text-lg font-extrabold mb-2" 
//                     style={{ color: PRIMARY_COLOR_DARK }}
//                 >
//                     {detail.title}
//                 </h3>
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
// // المكون الفرعي الجديد: قسم النقاط التوضيحية
// // ********************************************
// const ClarificationSection = () => {
//     return (
//         <div className="container mx-auto max-w-6xl mt-20 sm:mt-28">
            
//             {/* عنوان السكشن الجديد */}
//             <header className="text-center mb-16">
//                 <h2 
//                     className="text-3xl sm:text-4xl font-extrabold pb-3 inline-block relative"
//                     style={{ color: PRIMARY_COLOR_DARK }}
//                 >
//                     أدوار ومسؤوليات الجهات المنظمة
//                     {/* خط ذهبي سميك */}
//                     <span 
//                         className="absolute bottom-0 right-0 w-full h-1 rounded-full"
//                         style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//                     ></span>
//                 </h2>
//             </header>

//             {/* بطاقات الأدوار التوضيحية */}
//             <div className="flex flex-wrap lg:flex-nowrap gap-8">
//                 {clarificationPoints.map((section, index) => (
//                     <div 
//                         key={index} 
//                         className="w-full lg:w-1/2 p-6 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl"
//                         style={{ 
//                             backgroundColor: TEXT_LIGHT,
//                             border: `4px solid ${section.color === PRIMARY_COLOR_DARK ? PRIMARY_COLOR_DARK : ACCENT_COLOR_GOLD}`,
//                             // إضافة الحركة بشكل متتابع لبدء هذا السكشن
//                             animation: `fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${2 + (index * 0.4)}s`,
//                             opacity: 0,
//                         }}
//                     >
//                         {/* عنوان الدور */}
//                         <div className="flex items-start mb-6 border-b pb-4" style={{ borderColor: section.color }}>
//                             <section.icon size={36} className="mt-1 flex-shrink-0" style={{ color: section.color }} />
//                             <h3 
//                                 className="text-xl sm:text-2xl font-black mr-4 leading-relaxed" 
//                                 style={{ color: TEXT_DARK }}
//                             >
//                                 {section.title}
//                             </h3>
//                         </div>

//                         {/* قائمة النقاط */}
//                         <ul className="space-y-4">
//                             {section.points.map((point, pointIndex) => (
//                                 <li 
//                                     key={pointIndex} 
//                                     className="flex items-start text-base font-medium"
//                                     style={{ color: TEXT_DARK }}
//                                 >
//                                     <CheckCircle 
//                                         size={20} 
//                                         className="mt-1 flex-shrink-0" 
//                                         style={{ color: section.color, marginLeft: '12px' }} 
//                                     />
//                                     <p className="flex-1 leading-relaxed">
//                                         {point}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>

//             {/* الجملة الختامية في الأسفل */}
//             <div 
//                 className="mt-12 p-6 rounded-2xl text-center shadow-lg"
//                 style={{ 
//                     backgroundColor: PRIMARY_COLOR_DARK, 
//                     color: TEXT_LIGHT,
//                     border: `2px solid ${ACCENT_COLOR_GOLD}`,
//                     animation: `zoomIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards 3s`, // تأخير أكبر للختام
//                     opacity: 0,
//                 }}
//             >
//                 <p className="text-lg sm:text-xl font-bold">
//                     تقــــوم اللجنــــة التنســــيقية لجمعيـات تحفيـظ القـرآن الكريـم بوضـع خطـة عامـة لإقامـة املسـابقة في املحافظـات ثـم في املنطقـة وتشـمل املواعيـد ولجنـة
//                     الإشراف ولجنـة التحكيـم واللجـان العاملـة الأخـرى وتـزود الجمعيـات الخيريـة لتحفيـظ القـرآن الكريـم بنسـخة منهـا.
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
//             {/* تعريف الأنميشن - (كما في الطلب السابق) */}
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
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(40px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//                 @keyframes pulseGold {
//                     0%, 100% { transform: scaleX(1); opacity: 1; }
//                     50% { transform: scaleX(1.03); opacity: 0.8; }
//                 }
//                 @keyframes float {
//                     0% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-5px) rotate(1deg); }
//                     100% { transform: translateY(0px) rotate(0deg); }
//                 }
//                 @keyframes iconPop {
//                     0% { transform: scale(0) rotate(-180deg); opacity: 0; }
//                     80% { transform: scale(1.15) rotate(10deg); opacity: 1; }
//                     100% { transform: scale(1) rotate(0deg); opacity: 1; }
//                 }
//             `}</style>
            
//             <div className="container mx-auto max-w-6xl">
                
//                 {/* --- المرحلة الثالثة (من الطلب السابق) --- */}
//                 <header className="text-center mb-16">
//                     <h2 
//                         className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         مراحــــــــل المسابقــــــــــــــة
//                         <span 
//                             className="absolute bottom-0 right-0 w-full h-1 rounded-full"
//                             style={{ 
//                                 backgroundColor: ACCENT_COLOR_GOLD,
//                                 animation: 'pulseGold 3s infinite alternate ease-in-out',
//                             }}
//                         ></span>
//                     </h2>
//                     <h3 
//                         className="text-3xl sm:text-4xl font-extrabold mt-4"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         المرحلـــة الثالثة: التصفيات الختامية
//                     </h3>
//                 </header>

//                 <div 
//                     className="p-8 sm:p-12 rounded-3xl text-center mb-16 shadow-2xl relative overflow-hidden"
//                     style={{
//                         backgroundColor: PRIMARY_COLOR_DARK,
//                         color: TEXT_LIGHT,
//                         border: `4px solid ${ACCENT_COLOR_GOLD}`,
//                         animation: 'zoomIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.1s',
//                         opacity: 0,
//                     }}
//                 >
//                     <Award 
//                         size={64} 
//                         className="mx-auto mb-4" 
//                         style={{ 
//                             color: ACCENT_COLOR_GOLD,
//                             animation: 'float 5s ease-in-out infinite',
//                         }} 
//                         strokeWidth={2} 
//                     />
                    
//                     <h4 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: ACCENT_COLOR_GOLD }}>
//                         التصفيات النهائية الكبرى
//                     </h4>
//                     <p className="text-lg sm:text-xl font-medium">
//                         هذه هي مرحلة التنافس على المراكز الأولى، حيث يتم اختيار الفائزين على مستوى المملكة.
//                     </p>
//                 </div>

//                 <div className="flex flex-wrap -mx-4 justify-center">
//                     {phaseThreeDetails.map((detail, index) => (
//                         <FinalDetailBox 
//                             key={index} 
//                             detail={detail}
//                             index={index} 
//                         />
//                     ))}
//                 </div>
                
//                 {/* --- السكشن الجديد للنقاط التوضيحية --- */}
//                 <ClarificationSection />

//             </div>
//         </section>
//     );
// };

// export default CompetitionPhaseThree;




///////////----------------------------------------------


import React from 'react';
import { CheckCircle, Zap, Users, ShieldCheck, CornerUpLeft } from 'lucide-react';

// ********************************************
// ألوان الهوية المعتمدة
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي (يستخدم للخلفيات الفاتحة)
const TEXT_DARK = '#333333'; // لون النص الداكن للوضوح

// ********************************************
// بيانات النقاط التوضيحية الختامية
// ********************************************
const clarificationPoints = [
    {
        icon: Zap,
        title: "مهام اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم بالمملكة",
        color: PRIMARY_COLOR_DARK,
        points: [
            "الإعلان الرسمي عن الجائزة وانطلاقها اعتباراً من تاريخ ٩/٢/١٤٤٧ هجري الموافق ٣/٨/٢٠٢٥.",
            "مخاطبـــة الجمعيات الخيرية لتحفيظ القرآن الكريم في كل منطقة إدارية لتنظيم المسابقة على مستوى المنطقة بالتنسيق مع الجهات التعليمية وفروعها في المحافظات.",
            "تنظيـم التصفيـات النهائيـة للمسـابقة على مسـتوى المملكة وإعلان الفائزين وتكريمهم برعاية خادم الحرمين الشريفين.",
        ],
    },
    {
        icon: Users,
        title: "مهام الجمعية الرئيسية في كل منطقة من المناطق الإدارية",
        color: ACCENT_COLOR_GOLD,
        points: [
            "تكوين لجنة إشرافية على مسـتوى المنطقة وعلى مسـتوى المحافظات لتولي الإشراف على تنظيم هذه المسابقة والترتيب لها.",
            "مخاطبـة الجمعيـات الخيرية لتحفيظ القرآن الكريم بالمحافظات، وخطاب إدارة التعليـم لترشـيح الطـلاب والطالبـات للمشاركة في المسابقة.",
            "التنسـيق بـين الجمعيـات الخيرية في المناطق والمحافظـات من خلال أعضاء اللجان المشـكلة لذلك، والتنسـيق مع مكاتب التعليم في المحافظات لترشيح الطلاب المشاركين.",
            "وضـع خطـة عامـة لإقامة المسـابقة في المحافظـات ثم في المنطقة، وتشـمل المواعيد ولجنة الإشراف، وتـزويد الجمعيـات الخيرية لتحفيظ القرآن الكريم بنسخة منها.",
        ],
    },
];

// ********************************************
// المكون الرئيسي: سكشن النقاط التوضيحية الختامي
// ********************************************
const CompetitionFinalClarifications = () => {
    // تحديد زمن البدء للحركة السلسة
    const startDelay = 0.5;

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
                /* حركة تكبير ناعمة جداً */
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                /* حركة صعود ناعمة جداً */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                /* حركة نبض خفيف */
                @keyframes pulseGold {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(212, 194, 145, 0.4); }
                    50% { box-shadow: 0 0 0 10px rgba(212, 194, 145, 0); }
                }
            `}</style>

            <div 
                className="container mx-auto max-w-6xl p-6 sm:p-10 rounded-3xl relative overflow-hidden"
                style={{ 
                    backgroundColor: TEXT_LIGHT, 
                    border: `6px solid ${PRIMARY_COLOR_DARK}`, // إطار فيروزي سميك
                    boxShadow: '0 15px 50px -10px rgba(0, 0, 0, 0.2)',
                    animation: `zoomIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards ${startDelay}s`,
                    opacity: 0,
                }}
            >
                
                {/* عنوان السكشن الختامي */}
                <header className="text-center mb-12">
                    <h2 
                        className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        النقاط التوضيحية الختامية
                        {/* خط فاصل متحرك وأنيق */}
                        <span 
                            className="absolute bottom-0 right-1/4 w-1/2 h-1 rounded-full" 
                            style={{ 
                                backgroundColor: ACCENT_COLOR_GOLD,
                                animation: 'pulseGold 3s infinite ease-in-out',
                            }}
                        ></span>
                    </h2>
                    <h3 className="text-lg font-medium mt-4" style={{ color: TEXT_DARK }}>
                        تحديد الأدوار والمسؤوليات للجهات المنظمة للمسابقة
                    </h3>
                </header>

                {/* بطاقات الأدوار التوضيحية (تقسيم 2) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {clarificationPoints.map((section, index) => (
                        <div 
                            key={index} 
                            className="p-7 rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.01] flex flex-col h-full border-l-4"
                            style={{ 
                                backgroundColor: '#F9F9F9', // خلفية خفيفة للبطاقة
                                borderColor: section.color, // تمييز الجانب بلون الدور
                                animation: `fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${startDelay + 0.5 + (index * 0.4)}s`,
                                opacity: 0,
                            }}
                        >
                            {/* العنوان الرئيسي للدور */}
                            <div className="flex items-start mb-5 pb-3 border-b" style={{ borderColor: section.color + '50' }}>
                                <ShieldCheck size={32} className="mt-1 flex-shrink-0" style={{ color: section.color, marginLeft: '12px' }} />
                                <h3 
                                    className="text-xl sm:text-2xl font-black leading-relaxed" 
                                    style={{ color: section.color }} 
                                >
                                    {section.title}
                                </h3>
                            </div>

                            {/* قائمة النقاط */}
                            <ul className="space-y-4 flex-grow">
                                {section.points.map((point, pointIndex) => (
                                    <li 
                                        key={pointIndex} 
                                        className="flex items-start text-base font-normal transition-all duration-300 hover:mr-2"
                                        style={{ color: TEXT_DARK }}
                                    >
                                        <CornerUpLeft 
                                            size={18} 
                                            className="mt-1 flex-shrink-0 rotate-90" // رمز توضيحي للنقطة
                                            style={{ color: section.color, marginLeft: '10px' }} 
                                        />
                                        <p className="flex-1 leading-relaxed text-sm sm:text-base">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* الجملة الختامية في الأسفل */}
                <div 
                    className="mt-12 p-6 rounded-2xl text-center shadow-2xl transition-all duration-500 hover:scale-[1.005]"
                    style={{ 
                        backgroundColor: ACCENT_COLOR_GOLD, // استخدام الذهبي كخلفية
                        color: PRIMARY_COLOR_DARK, // والنص بالفيروزي الداكن
                        border: `2px solid ${PRIMARY_COLOR_DARK}`,
                        animation: `zoomIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${startDelay + 1.8}s`, 
                        opacity: 0,
                    }}
                >
                    <p className="text-md sm:text-lg font-bold">
                        تقوم اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم بوضع خطة عامة لإقامة المسابقة في المحافظات ثم في المنطقة وتشمل المواعيد ولجنة
                        الإشراف ولجنة التحكيم واللجان العاملة الأخرى وتزود الجمعيات الخيرية لتحفيظ القرآن الكريم بنسخة منها.
                    </p>
                </div>
                
            </div>
        </section>
    );
};

export default CompetitionFinalClarifications;










