


// import React from 'react';

// // مجموعة أيقونات SVG بسيطة ومختلفة لتمثيل الجمعيات
// const Icons = {
//     Book: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>),
//     Lightbulb: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-2 1.5-2.7.5-.5 1-1.1 1.4-1.7-.2-.5-.5-1-.9-1.3-.8-.7-1.7-1.1-2.8-1.4V4"></path><path d="M9 14c-.2-1-.7-2-1.5-2.7-.5-.5-1-1.1-1.4-1.7.2-.5.5-1 .9-1.3.8-.7 1.7-1.1 2.8-1.4V4"></path><path d="M12 22c3.3 0 6-2.7 6-6H6c0 3.3 2.7 6 6 6z"></path><path d="M12 4v0"></path></svg>),
//     Globe: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z"></path><line x1="2.1" y1="14.1" x2="21.9" y2="14.1"></line><line x1="2.1" y1="9.9" x2="21.9" y2="9.9"></line></svg>),
//     Target: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>),
//     Users: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>),
//     Shield: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>),
//     Star: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>),
//     Home: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 22V12h6v10"></path><path d="M12 2L3 10h3v8h12v-8h3L12 2z"></path></svg>),
// };

// const FoundingSocietiesSection = () => {
//     // الألوان الرئيسية المستخدمة (مستخلصة من ألوان الهوية):
//     const primaryColor = '#246efe'; 
//     const secondaryColor = '#6de7fe'; 
//     const softNeutralBg = '#f9fafb'; // لون الخلفية الحيادي الناعم
//     const iconColor = primaryColor; // لون الأيقونة

//     // خطوط عربية جميلة (بناءً على الهوية المرفقة: Cairo/Almarai)
//     const fontStyles = {
//         fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
//     };

//     // قائمة الجمعيات المؤسسة (13 جمعية - تم استبدال logoUrl بنوع أيقونة)
//     const societies = [
//         { name: 'جمعية مكنون لتحفيظ القرآن', city: 'الرياض' , description: 'من الجمعيات الرائدة في العاصمة وتشتهر بتبني التقنيات الحديثة.', icon: Icons.Book },
//         { name: 'جمعية خيركم لتحفيظ القرآن', city: 'جدة', description: 'تغطي منطقة واسعة وتنفذ برامج نوعية مبتكرة على مستوى المملكة.', icon: Icons.Lightbulb },
//         { name: 'جمعية الفرقان لتحفيظ القرآن', city: 'مكة المكرمة', description: 'تخدم أشرف البقاع وتسعى لتعميم حلقات التحفيظ في محيط الحرم.', icon: Icons.Globe },
//         { name: 'جمعية التبيان لتحفيظ القرآن', city: 'المدينة المنورة', description: 'تعمل على نشر كتاب الله في مدينة رسول الله صلى الله عليه وسلم.', icon: Icons.Target },
//         { name: 'جمعية تحفيظ القرآن بالقصيم', city: 'منطقة القصيم', description: 'لها انتشار واسع في المنطقة الوسطى وبرامج مجتمعية فعالة ومستدامة.', icon: Icons.Users },
//         { name: 'جمعية تحفيظ القرآن بالشرقية', city: 'الدمام والخبر', description: 'تشمل الدمام والخبر وتسعى للتوسع الجغرافي في كافة مدن المنطقة.', icon: Icons.Shield },
//         { name: 'جمعية آيات لتحفيظ القرآن', city: 'عسير', description: 'تخدم المنطقة الجنوبية ببرامج متخصصة ومبتكرة للرجال والنساء.', icon: Icons.Star },
//         { name: 'جمعية تحفيظ القرآن بتبوك', city: 'تبوك', description: 'مساهمة فعالة في تنمية جيل القرآن بالمنطقة الشمالية الغربية.', icon: Icons.Home },
//         { name: 'جمعية أهالي الخير لتحفيظ القرآن', city: 'الجوف', description: 'تركز على البرامج النوعية والاستدامة المالية لضمان استمراريتها.', icon: Icons.Book },
//         { name: 'جمعية تحفيظ القرآن بنجران', city: 'نجران', description: 'لها دور كبير في تحفيظ الناشئة والشباب وتمكينهم من حفظ القرآن.', icon: Icons.Lightbulb },
//         { name: 'جمعية تحفيظ القرآن بالباحة', city: 'الباحة', description: 'تعمل على تفعيل دور المرأة والأسرة في منظومة تعليم القرآن الكريم.', icon: Icons.Globe },
//         { name: 'جمعية تحفيظ القرآن بحدود الشمالية', city: 'الحدود الشمالية', description: 'تسعى لسد الاحتياج في المناطق الحدودية وتقديم خدمات متميزة.', icon: Icons.Target },
//         { name: 'جمعية تحفيظ القرآن بحائل', city: 'حائل', description: 'تتميز ببرامجها الرقمية لخدمة مختلف الفئات والأعمار عن بعد.', icon: Icons.Users },
//     ];

//     // تحديد عدد الجمعيات المراد عرضها في هذا السكشن (8 جمعيات)
//     const displayedSocieties = societies.slice(0, 8);
//     const hasMore = societies.length > displayedSocieties.length;


//     return (
//         <>
//             {/* ========================================
//               CSS مخصص للحركات والزخرفة
//               ========================================
//             */}
//             <style>
//                 {`
//                   /* استيراد الخطوط مؤقتاً للتأكد من عرضها حتى يتم تطبيقها عالمياً */
//                   @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

//                   /* 1. تأثير الخلفية الناعمة */
//                   .section-soft-bg {
//                     background-color: ${softNeutralBg};
//                   }
                  
//                   /* 2. تنسيق عنوان احترافي بفاصل مزدوج (تم استخدام ألوان الهوية الجديدة) */
//                   .elegant-title-container {
//                       position: relative;
//                       padding-bottom: 2.5rem; 
//                   }
//                   .elegant-title-container::after {
//                       content: '';
//                       position: absolute;
//                       bottom: 1rem;
//                       right: 50%;
//                       transform: translateX(50%);
//                       width: 150px; 
//                       height: 4px;
//                       background-color: ${primaryColor}; /* الأزرق */
//                       border-radius: 3px;
//                   }
//                   .elegant-title-container::before {
//                       content: '';
//                       position: absolute;
//                       bottom: 0.75rem;
//                       right: 50%;
//                       transform: translateX(50%);
//                       width: 60px; 
//                       height: 4px;
//                       background-color: ${secondaryColor}; /* السيان */
//                       border-radius: 3px;
//                   }
                  
//                   /* 3. تأثير الظهور التدريجي (Fade In Up) */
//                   .fade-in-up {
//                     opacity: 0;
//                     transform: translateY(30px);
//                     animation: fadeInUp 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) forwards;
//                   }
                  
//                   @keyframes fadeInUp {
//                     to {
//                       opacity: 1;
//                       transform: translateY(0);
//                     }
//                   }
                  
//                   /* 4. إعداد تأخير الحركة لكل بطاقة */
//                   ${societies.map((_, index) => `.delay-${index + 1} { animation-delay: ${index * 0.08 + 0.1}s; }`).join('\n')}
                  
//                   /* 5. تصميم البطاقة (Hover Effect) - تم تعزيز الظل والتحريك */
//                   .society-card {
//                     transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//                     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//                     border-top: 5px solid transparent; /* شريط علوي مبدئي */
//                     overflow: hidden; /* لمنع الأيقونة من الظهور خارج البطاقة عند التحريك */
//                   }
//                   .society-card:hover {
//                     transform: translateY(-10px); /* تحريك أقوى */
//                     /* ظل خفيف باللون الأساسي أقوى */
//                     box-shadow: 0 25px 50px rgba(36, 110, 254, 0.3); 
//                     border-top-color: ${primaryColor}; /* شريط أزرق عند التحويم */
//                   }

//                   /* 6. تنسيق دائرة الأيقونة وتأثير التحريك */
//                   .icon-wrapper {
//                       position: relative;
//                       transition: transform 0.4s ease-out;
//                   }
//                   .society-card:hover .icon-wrapper {
//                       transform: translateY(-5px); /* تحريك الأيقونة للأعلى داخل البطاقة */
//                   }

//                   .logo-placeholder-circle {
//                       background-color: ${secondaryColor}; /* خلفية سيان للأيقونة */
//                       box-shadow: 0 5px 15px rgba(109, 231, 254, 0.5); /* ظل قوي للسيان */
//                   }

//                   /* 7. تنسيق زر "اعرف أكثر" */
//                   .cta-button {
//                       background-color: ${primaryColor};
//                       transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
//                   }
//                   .cta-button:hover {
//                       background-color: #174ec4; /* Primary 700 */
//                       transform: translateY(-3px); /* تحريك خفيف */
//                       box-shadow: 0 12px 25px rgba(36, 110, 254, 0.5); /* ظل معزز */
//                   }
//                 `}
//             </style>
            
//             {/* الحاوية الرئيسية للسكشن - خلفية ناعمة ومساحة داخلية */}
//             <section 
//                 className="section-soft-bg pt-12 pb-20 md:pt-20 md:pb-28" 
//                 style={fontStyles}
//             >
//                 {/* حاوية العنوان الموحد */}
//                 <div className="container mx-auto px-4 md:px-8 text-center mb-16">
//                     <div className="elegant-title-container mx-auto">
//                         <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
//                             <span style={{ color: primaryColor }}>{societies.length}</span> جمعية مؤسسة
//                         </h2>
//                         <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
//                             قائمة بـ **{displayedSocieties.length}** من الجمعيات التي بادرت بتأسيس اللجنة التنسيقية، والمساهمة في تحقيق أهدافها الاستراتيجية لخدمة كتاب الله.
//                         </p>
//                     </div>
//                 </div>

//                 {/* حاوية الجمعيات - تصميم شبكي مرن (4 أعمدة على الشاشات الكبيرة) */}
//                 <div className="container mx-auto px-4 md:px-8">
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        
//                         {displayedSocieties.map((society, index) => {
//                             const IconComponent = society.icon;
//                             return (
//                                 // بطاقة الجمعية مع الحركة وتأثير التحويم
//                                 <div 
//                                     key={index} 
//                                     className={`fade-in-up delay-${index + 1} society-card bg-white rounded-xl border border-gray-100
//                                         p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full`}
//                                 >
                                    
//                                     {/* 1. منطقة الأيقونة وتأثير الحركة عند التحويم */}
//                                     <div className="icon-wrapper">
//                                         <div className="logo-placeholder-circle w-16 h-16 flex items-center justify-center rounded-full mb-4">
//                                             <IconComponent className="w-8 h-8 text-white" style={{ color: iconColor }} />
//                                         </div>
//                                     </div>
                                    
//                                     {/* 2. اسم الجمعية والمدينة */}
//                                     <h3 
//                                         className="text-xl font-bold mb-1 leading-snug" 
//                                         style={{ color: primaryColor }}
//                                     >
//                                         {society.name}
//                                     </h3>
//                                     <p className="text-sm font-semibold text-gray-500 mb-4">
//                                         {society.city}
//                                     </p>
                                    
//                                     {/* 3. وصف الجمعية */}
//                                     <p className="text-gray-700 text-base leading-relaxed mt-2 flex-1">
//                                         {society.description}
//                                     </p>
                                    
//                                     {/* زر وهمي أو فاصل */}
//                                     <a 
//                                         href="#" 
//                                         className="mt-4 text-sm font-bold transition duration-300"
//                                         style={{ color: primaryColor }}
//                                     >
//                                         عرض التفاصيل &larr;
//                                     </a>
                                    
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* زر "اعرف أكثر" إذا كانت هناك جمعيات إضافية */}
//                     {hasMore && (
//                         <div className="mt-16 text-center fade-in-up delay-9">
//                             <a 
//                                 href="/all-societies" // رابط افتراضي لصفحة الجمعيات الكاملة
//                                 className="cta-button inline-flex items-center justify-center 
//                                     text-white font-extrabold py-3 px-8 rounded-full shadow-lg 
//                                     text-lg tracking-wide hover:shadow-xl transition-all duration-300"
//                             >
//                                 {/* أيقونة السهم للأمام */}
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 -mt-0.5">
//                                     <path d="M5 12h14"></path>
//                                     <path d="M12 5l7 7-7 7"></path>
//                                 </svg>
//                                 اعرف أكثر عن جميع الجمعيات المؤسسة
//                             </a>
//                         </div>
//                     )}

//                 </div>
//             </section>
//         </>
//     );
// };

// export default FoundingSocietiesSection;





import React from 'react';

// مجموعة أيقونات SVG بسيطة ومختلفة لتمثيل الجمعيات
const Icons = {
    Book: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>),
    Lightbulb: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-2 1.5-2.7.5-.5 1-1.1 1.4-1.7-.2-.5-.5-1-.9-1.3-.8-.7-1.7-1.1-2.8-1.4V4"></path><path d="M9 14c-.2-1-.7-2-1.5-2.7-.5-.5-1-1.1-1.4-1.7.2-.5.5-1 .9-1.3.8-.7 1.7-1.1 2.8-1.4V4"></path><path d="M12 22c3.3 0 6-2.7 6-6H6c0 3.3 2.7 6 6 6z"></path><path d="M12 4v0"></path></svg>),
    Globe: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z"></path><line x1="2.1" y1="14.1" x2="21.9" y2="14.1"></line><line x1="2.1" y1="9.9" x2="21.9" y2="9.9"></line></svg>),
    Target: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>),
    Users: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>),
    Shield: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>),
    Star: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>),
    Home: (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 22V12h6v10"></path><path d="M12 2L3 10h3v8h12v-8h3L12 2z"></path></svg>),
};

const FoundingSocietiesSection = () => {
    // الألوان الرئيسية المستخدمة (مستخلصة من ألوان الهوية):
    const primaryColor = '#246efe'; 
    const secondaryColor = '#6de7fe'; 
    const softNeutralBg = '#f9fafb'; // لون الخلفية الحيادي الناعم
    const iconColor = primaryColor; // لون الأيقونة

    // خطوط عربية جميلة (بناءً على الهوية المرفقة: Cairo/Almarai)
    const fontStyles = {
        fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
    };

    // قائمة الجمعيات المؤسسة (13 جمعية - تم استبدال logoUrl بنوع أيقونة)
    const societies = [
        { name: 'جمعية مكنون لتحفيظ القرآن', city: 'الرياض' , description: 'من الجمعيات الرائدة في العاصمة وتشتهر بتبني التقنيات الحديثة.', icon: Icons.Book },
        { name: 'جمعية خيركم لتحفيظ القرآن', city: 'جدة', description: 'تغطي منطقة واسعة وتنفذ برامج نوعية مبتكرة على مستوى المملكة.', icon: Icons.Lightbulb },
        { name: 'جمعية الفرقان لتحفيظ القرآن', city: 'مكة المكرمة', description: 'تخدم أشرف البقاع وتسعى لتعميم حلقات التحفيظ في محيط الحرم.', icon: Icons.Globe },
        { name: 'جمعية التبيان لتحفيظ القرآن', city: 'المدينة المنورة', description: 'تعمل على نشر كتاب الله في مدينة رسول الله صلى الله عليه وسلم.', icon: Icons.Target },
        { name: 'جمعية تحفيظ القرآن بالقصيم', city: 'منطقة القصيم', description: 'لها انتشار واسع في المنطقة الوسطى وبرامج مجتمعية فعالة ومستدامة.', icon: Icons.Users },
        { name: 'جمعية تحفيظ القرآن بالشرقية', city: 'الدمام والخبر', description: 'تشمل الدمام والخبر وتسعى للتوسع الجغرافي في كافة مدن المنطقة.', icon: Icons.Shield },
        { name: 'جمعية آيات لتحفيظ القرآن', city: 'عسير', description: 'تخدم المنطقة الجنوبية ببرامج متخصصة ومبتكرة للرجال والنساء.', icon: Icons.Star },
        { name: 'جمعية تحفيظ القرآن بتبوك', city: 'تبوك', description: 'مساهمة فعالة في تنمية جيل القرآن بالمنطقة الشمالية الغربية.', icon: Icons.Home },
        { name: 'جمعية أهالي الخير لتحفيظ القرآن', city: 'الجوف', description: 'تركز على البرامج النوعية والاستدامة المالية لضمان استمراريتها.', icon: Icons.Book },
        { name: 'جمعية تحفيظ القرآن بنجران', city: 'نجران', description: 'لها دور كبير في تحفيظ الناشئة والشباب وتمكينهم من حفظ القرآن.', icon: Icons.Lightbulb },
        { name: 'جمعية تحفيظ القرآن بالباحة', city: 'الباحة', description: 'تعمل على تفعيل دور المرأة والأسرة في منظومة تعليم القرآن الكريم.', icon: Icons.Globe },
        { name: 'جمعية تحفيظ القرآن بحدود الشمالية', city: 'الحدود الشمالية', description: 'تسعى لسد الاحتياج في المناطق الحدودية وتقديم خدمات متميزة.', icon: Icons.Target },
        { name: 'جمعية تحفيظ القرآن بحائل', city: 'حائل', description: 'تتميز ببرامجها الرقمية لخدمة مختلف الفئات والأعمار عن بعد.', icon: Icons.Users },
    ];

    // تم تغييرها لعرض كل الـ 13 جمعية في السلايدر
    const displayedSocieties = societies;
    
    // تم إزالة check الـ hasMore حيث أن كل الجمعيات أصبحت مرئية

    return (
        <>
            {/* ========================================
              CSS مخصص للحركات والزخرفة والتمرير
              ========================================
            */}
            <style>
                {`
                  /* استيراد الخطوط مؤقتاً للتأكد من عرضها حتى يتم تطبيقها عالمياً */
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

                  /* 1. تأثير الخلفية الناعمة */
                  .section-soft-bg {
                    background-color: ${softNeutralBg};
                  }
                  
                  /* 2. تنسيق عنوان احترافي بفاصل مزدوج */
                  .elegant-title-container {
                      position: relative;
                      padding-bottom: 2.5rem; 
                  }
                  .elegant-title-container::after {
                      content: '';
                      position: absolute;
                      bottom: 1rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 150px; 
                      height: 4px;
                      background-color: ${primaryColor}; /* الأزرق */
                      border-radius: 3px;
                  }
                  .elegant-title-container::before {
                      content: '';
                      position: absolute;
                      bottom: 0.75rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 60px; 
                      height: 4px;
                      background-color: ${secondaryColor}; /* السيان */
                      border-radius: 3px;
                  }
                  
                  /* 3. تأثير الظهور التدريجي (Fade In Up) */
                  .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) forwards;
                  }
                  
                  @keyframes fadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  
                  /* 4. إعداد تأخير الحركة لكل بطاقة */
                  ${societies.map((_, index) => `.delay-${index + 1} { animation-delay: ${index * 0.08 + 0.1}s; }`).join('\n')}
                  
                  /* 5. تصميم البطاقة (Hover Effect) - تم تعزيز الظل والتحريك */
                  .society-card {
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    border-top: 5px solid transparent; /* شريط علوي مبدئي */
                    overflow: hidden; 
                    flex-shrink: 0; /* مهم للسلايدر: لمنع البطاقات من الانكماش */
                  }
                  .society-card:hover {
                    transform: translateY(-10px); /* تحريك أقوى */
                    /* ظل خفيف باللون الأساسي أقوى */
                    box-shadow: 0 25px 50px rgba(36, 110, 254, 0.3); 
                    border-top-color: ${primaryColor}; /* شريط أزرق عند التحويم */
                  }

                  /* 6. تنسيق دائرة الأيقونة وتأثير التحريك */
                  .icon-wrapper {
                      position: relative;
                      transition: transform 0.4s ease-out;
                  }
                  .society-card:hover .icon-wrapper {
                      transform: translateY(-5px); /* تحريك الأيقونة للأعلى داخل البطاقة */
                  }

                  .logo-placeholder-circle {
                      background-color: ${secondaryColor}; /* خلفية سيان للأيقونة */
                      box-shadow: 0 5px 15px rgba(109, 231, 254, 0.5); /* ظل قوي للسيان */
                  }
                  
                  /* 7. تجميل شريط التمرير (لأغراض جمالية) */
                  .slider-container::-webkit-scrollbar {
                    height: 8px;
                  }
                  .slider-container::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1; /* Gray 300 */
                    border-radius: 4px;
                  }
                  .slider-container::-webkit-scrollbar-track {
                    background: #f1f5f9; /* Gray 100 */
                  }
                  
                  /* 8. تنسيق زر "اعرف أكثر" (تم الاحتفاظ بالتنسيق، لكن تم إزالة عرضه المشروط) */
                  .cta-button {
                      background-color: ${primaryColor};
                      transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
                  }
                  .cta-button:hover {
                      background-color: #174ec4; /* Primary 700 */
                      transform: translateY(-3px); /* تحريك خفيف */
                      box-shadow: 0 12px 25px rgba(36, 110, 254, 0.5); /* ظل معزز */
                  }

                `}
            </style>
            
            {/* الحاوية الرئيسية للسكشن - خلفية ناعمة ومساحة داخلية */}
            <section 
                className="section-soft-bg pt-12 pb-20 md:pt-20 md:pb-28" 
                style={fontStyles}
            >
                {/* حاوية العنوان الموحد */}
                <div className="container mx-auto px-4 md:px-8 text-center mb-16">
                    <div className="elegant-title-container mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
                            <span style={{ color: primaryColor }}>الجمعيات</span>  المؤسسة
                        </h2>
                        <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
                            هذه الجمعيات هي من بادرت بتأسيس اللجنة التنسيقية، والمساهمة في تحقيق أهدافها الاستراتيجية لخدمة كتاب الله. قم بالتمرير لرؤية القائمة الكاملة.
                        </p>
                    </div>
                </div>

                {/* حاوية الجمعيات - تصميم سلايدر أفقي قابل للتمرير */}
                <div className="px-4 md:px-8 container">
                    
                    {/* الحاوية الداخلية للسلايدر - flex + overflow-x-scroll */}
                    <div 
                        className="slider-container flex flex-row overflow-x-scroll pb-6 space-x-6 md:space-x-8 lg:px-4"
                        // إضافة ميزة Scroll Snapping لجعل التمرير يتوقف عند بطاقة محددة (ميزة احترافية)
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        
                        {displayedSocieties.map((society, index) => {
                            const IconComponent = society.icon;
                            return (
                                // بطاقة الجمعية مع الحركة وتأثير التحويم
                                <div 
                                    key={index} 
                                    // تم تعديل الـ min-w لضمان عرض بطاقتين أو ثلاث على الأقل
                                    className={`snap-start min-w-[80%] sm:min-w-[45%] md:min-w-[300px] lg:min-w-[320px] xl:min-w-[350px]
                                        fade-in-up delay-${index + 1} society-card bg-white rounded-xl border border-gray-100
                                        p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full`}
                                >
                                    
                                    {/* 1. منطقة الأيقونة وتأثير الحركة عند التحويم */}
                                    <div className="icon-wrapper">
                                        <div className="logo-placeholder-circle w-16 h-16 flex items-center justify-center rounded-full mb-4">
                                            <IconComponent className="w-8 h-8 text-white" style={{ color: iconColor }} />
                                        </div>
                                    </div>
                                    
                                    {/* 2. اسم الجمعية والمدينة */}
                                    <h3 
                                        className="text-xl font-bold mb-1 leading-snug" 
                                        style={{ color: primaryColor }}
                                    >
                                        {society.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-500 mb-4">
                                        {society.city}
                                    </p>
                                    
                                    {/* 3. وصف الجمعية */}
                                    <p className="text-gray-700 text-base leading-relaxed mt-2 flex-1">
                                        {society.description}
                                    </p>
                                    
                                    {/* زر وهمي أو فاصل */}
                                    <a 
                                        href="#" 
                                        className="mt-4 text-sm font-bold transition duration-300"
                                        style={{ color: primaryColor }}
                                    >
                                        عرض التفاصيل &larr;
                                    </a>
                                    
                                </div>
                            );
                        })}
                    </div>

                    {/* زر "اعرف أكثر" بعد السلايدر لتوفير رابط لصفحة مفصلة */}
                    <div className="mt-16 text-center fade-in-up delay-9">
                        <a 
                            href="/all-societies" // رابط افتراضي لصفحة الجمعيات الكاملة
                            className="cta-button inline-flex items-center justify-center 
                                text-white font-extrabold py-3 px-8 rounded-full shadow-lg 
                                text-lg tracking-wide hover:shadow-xl transition-all duration-300"
                        >
                            {/* أيقونة السهم للأمام */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 -mt-0.5">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            الانتقال لصفحة جميع الجمعيات
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundingSocietiesSection;
