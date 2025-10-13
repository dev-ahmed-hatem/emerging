// import React from 'react';

// // ********************************************
// // الألوان الأساسية والمساعدة (حسب طلب المستخدم)
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (للنص والعناصر القوية)
// const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (للإطارات والزخرفة)
// const TEXT_DARK_ON_LIGHT = '#292826'; // لون النص الداكن الأساسي
// const BACKGROUND_LIGHT = '#F8F8F8'; // خلفية القسم فاتحة جداً
// const ADD_COLOR_1 = '#b5baa1'; // لون إضافي (أخضر/رمادي باهت)

// // ********************************************
// // المكوّن الرئيسي: CompetitionPrizesSection
// // ********************************************

// const CompetitionPrizesSection = () => {
    
//     // قيمة الجائزة الكبرى
//     const prizeAmount = "١,٠٠٠,٠٠٠";

//     return (
//         <section 
//             className="w-full py-30 px-14 md:px-8 lg:px-16  overflow-hidden" 
//             style={{ 
//                 backgroundColor: BACKGROUND_LIGHT, // الخلفية الفاتحة
//                 direction: 'rtl',
//                 fontFamily: 'Inter, sans-serif'
//             }}
//         >
//             <div className="container mx-auto max-w-5xl relative z-10">
                
//                 {/* 1. العنوان الرئيسي المنفصل في شريط مزخرف (كما في الأهداف) */}
//                 <div className="flex justify-center mb-12 relative">
//                     <div 
//                         className="py-3 px-8 md:px-12 rounded-t-lg text-center absolute -top-12 md:-top-16 shadow-lg"
//                         style={{ 
//                             backgroundColor: PRIMARY_COLOR_DARK, // خلفية الشريط بلون الفيروزي الداكن
//                             borderBottom: `4px solid ${ACCENT_COLOR_LIGHT}`, // خط ذهبي سفلي
//                             color: 'white',
//                         }}
//                     >
//                         <h2 
//                             className="text-3xl md:text-4xl font-extrabold tracking-wider"
//                         >
//                             جوائز المســــابقة
//                         </h2>
//                     </div>
//                 </div>

//                 {/* 2. حاوية المحتوى الرئيسية - الإطار المزخرف الديني */}
//                 <div 
//                     className="p-8 pt-20 md:p-12 md:pt-24 rounded-3xl shadow-2xl relative flex flex-col items-center text-center"
//                     style={{ 
//                         backgroundColor: 'white', 
//                         border: `2px solid ${ACCENT_COLOR_LIGHT}`,
//                         // شكل الإطار المزخرف باستخدام قصاصات CSS
//                         clipPath: 'polygon(0 15%, 5% 0, 95% 0, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0 85%)',
//                         boxShadow: `0 0 30px rgba(0, 0, 0, 0.1)`,
//                     }}
//                 >
//                     {/* زخرفة الزاوية العلوية اليمنى (لإضافة الطابع) */}
//                     <div className="absolute top-0 right-0 w-16 h-16" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', backgroundColor: ACCENT_COLOR_LIGHT, opacity: 0.1 }}></div>
//                     {/* زخرفة الزاوية السفلية اليسرى */}
//                     <div className="absolute bottom-0 left-0 w-16 h-16" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', backgroundColor: PRIMARY_COLOR_DARK, opacity: 0.05 }}></div>


//                     {/* النص الأول: مجموع الجوائز */}
//                     <h3 
//                         className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed"
//                         style={{ color: TEXT_DARK_ON_LIGHT }}
//                     >
//                         مجمـــــوع الجوائز مليون ريال للفـــــــــــائزين والفــــــــــائزات
//                     </h3>
                    
//                     {/* صندوق قيمة الجائزة البارز */}
//                     <div 
//                         className="inline-block p-6 md:p-8 rounded-xl shadow-2xl transform scale-100 hover:scale-[1.03] transition-transform duration-300 mb-10"
//                         style={{ 
//                             backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الداكنة المميزة
//                             border: `5px solid ${ACCENT_COLOR_LIGHT}`, // إطار ذهبي سميك
//                         }}
//                     >
//                         <div className="flex items-center space-x-4 space-x-reverse">
                            
//                             {/* أيقونة العملة (الريال السعودي) */}
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={ACCENT_COLOR_LIGHT} className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
//                                 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v1.75c0 .324-.076.638-.22.923l-3.003 5.86c-.198.388-.13.864.16 1.154l.753.753c.29.29.766.357 1.154.16l5.86-3.003a2.646 2.646 0 0 0 .923-.22V18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75h-1.5ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" clipRule="evenodd" />
//                             </svg>
                            
//                             {/* مبلغ الجائزة */}
//                             <span 
//                                 className="text-5xl md:text-7xl font-black tracking-tighter"
//                                 style={{ color: ACCENT_COLOR_LIGHT }} // اللون الذهبي المطفأ
//                             >
//                                 {prizeAmount}
//                             </span>
//                         </div>
//                     </div>

//                     {/* النص الثالث: التوزيع */}
//                     <p 
//                         className="text-xl md:text-2xl font-semibold mt-4"
//                         style={{ color: PRIMARY_COLOR_DARK }}
//                     >
//                         مقسمة على الفــــــــــــائزين على مستوى الفـــــــــــــــــــــــــروع
//                     </p>
                    
//                 </div>
//             </div>
            
//             {/* 3. زخرفة الحدود السفلية (كما في الأقسام الأخرى) */}
//             <div className="flex justify-center mt-12">
//                 <div 
//                     className="h-6 w-full max-w-7xl"
//                     style={{ 
//                         background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
//                         opacity: 0.3,
//                     }}
//                 ></div>
//             </div>
//         </section>
//     );
// };

// export default CompetitionPrizesSection;


/////////////////------------------------------------------





import React from 'react';

// ********************************************
// الألوان الأساسية والمساعدة (حسب طلب المستخدم)
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (للنص والعناصر القوية)
const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (للإطارات والزخرفة)
const TEXT_DARK_ON_LIGHT = '#292826'; // لون النص الداكن الأساسي
const BACKGROUND_LIGHT = '#F8F8F8'; // خلفية القسم فاتحة جداً
const ADD_COLOR_1 = '#b5baa1'; // لون إضافي (أخضر/رمادي باهت)

// مسار صورة الخلفية
const BACKGROUND_IMAGE_PATH = "/خلفية-إسلامية--1.jpg";

// ********************************************
// المكوّن الرئيسي: CompetitionPrizesSection
// ********************************************

const CompetitionPrizesSection = () => {
    
    // قيمة الجائزة الكبرى
    const prizeAmount = "١,٠٠٠,٠٠٠";

    return (
        <section 
            className="w-full py-30 px-14 md:px-8 lg:px-16 overflow-hidden relative" 
            style={{ 
                backgroundColor: BACKGROUND_LIGHT, // الخلفية الأساسية هي اللون الفاتح
                direction: 'rtl',
                fontFamily: 'Inter, sans-serif'
            }}
        >
            {/* طبقة الخلفية المزدوجة (صورة + لون خفيف) */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    // دمج الصورة مع اللون الفاتح الأساسي
                    opacity: 0.9, // تقليل الشفافية لجعلها خلفية خفية
                    mixBlendMode: 'multiply', // دمج الألوان ليعطي نمطاً
                }}
            ></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* 1. العنوان الرئيسي المنفصل في شريط مزخرف (كما في الأهداف) */}
                <div className="flex justify-center mb-12 relative">
                    <div 
                        className="py-3 px-8 md:px-12 rounded-t-lg text-center absolute -top-12 md:-top-16 shadow-lg"
                        style={{ 
                            backgroundColor: PRIMARY_COLOR_DARK, // خلفية الشريط بلون الفيروزي الداكن
                            borderBottom: `4px solid ${ACCENT_COLOR_LIGHT}`, // خط ذهبي سفلي
                            color: 'white',
                        }}
                    >
                        <h2 
                            className="text-3xl md:text-4xl font-extrabold tracking-wider"
                        >
                            جوائز المســــابقة
                        </h2>
                    </div>
                </div>

                {/* 2. حاوية المحتوى الرئيسية - الإطار المزخرف الديني */}
                <div 
                    className="p-8 pt-20 md:p-12 md:pt-24 rounded-3xl shadow-2xl relative flex flex-col items-center text-center"
                    style={{ 
                        backgroundColor: 'white', 
                        border: `2px solid ${ACCENT_COLOR_LIGHT}`,
                        // شكل الإطار المزخرف باستخدام قصاصات CSS
                        clipPath: 'polygon(0 15%, 5% 0, 95% 0, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0 85%)',
                        boxShadow: `0 0 30px rgba(0, 0, 0, 0.1)`,
                    }}
                >
                    {/* زخرفة الزاوية العلوية اليمنى (لإضافة الطابع) */}
                    <div className="absolute top-0 right-0 w-16 h-16" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', backgroundColor: ACCENT_COLOR_LIGHT, opacity: 0.1 }}></div>
                    {/* زخرفة الزاوية السفلية اليسرى */}
                    <div className="absolute bottom-0 left-0 w-16 h-16" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', backgroundColor: PRIMARY_COLOR_DARK, opacity: 0.05 }}></div>


                    {/* النص الأول: مجموع الجوائز */}
                    <h3 
                        className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed"
                        style={{ color: TEXT_DARK_ON_LIGHT }}
                    >
                        مجمـــــوع الجوائز مليون ريال للفـــــــــــائزين والفــــــــــائزات
                    </h3>
                    
                    {/* صندوق قيمة الجائزة البارز */}
                    <div 
                        className="inline-block p-6 md:p-8 rounded-xl shadow-2xl transform scale-100 hover:scale-[1.03] transition-transform duration-300 mb-10"
                        style={{ 
                            backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الداكنة المميزة
                            border: `5px solid ${ACCENT_COLOR_LIGHT}`, // إطار ذهبي سميك
                        }}
                    >
                        <div className="flex items-center space-x-4 space-x-reverse">
                            
                            {/* أيقونة العملة (الريال السعودي) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={ACCENT_COLOR_LIGHT} className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v1.75c0 .324-.076.638-.22.923l-3.003 5.86c-.198.388-.13.864.16 1.154l.753.753c.29.29.766.357 1.154.16l5.86-3.003a2.646 2.646 0 0 0 .923-.22V18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75h-1.5ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" clipRule="evenodd" />
                            </svg>
                            
                            {/* مبلغ الجائزة */}
                            <span 
                                className="text-5xl md:text-7xl font-black tracking-tighter"
                                style={{ color: ACCENT_COLOR_LIGHT }} // اللون الذهبي المطفأ
                            >
                                {prizeAmount}
                            </span>
                        </div>
                    </div>

                    {/* النص الثالث: التوزيع */}
                    <p 
                        className="text-xl md:text-2xl font-semibold mt-4"
                        style={{ color: PRIMARY_COLOR_DARK }}
                    >
                        مقسمة على الفــــــــــــائزين على مستوى الفـــــــــــــــــــــــــروع
                    </p>
                    
                </div>
            </div>
            
            {/* 3. زخرفة الحدود السفلية (كما في الأقسام الأخرى) */}
            <div className="flex justify-center mt-12 relative z-10">
                <div 
                    className="h-6 w-full max-w-7xl"
                    style={{ 
                        background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
                        opacity: 0.3,
                    }}
                ></div>
            </div>
        </section>
    );
};

export default CompetitionPrizesSection;
