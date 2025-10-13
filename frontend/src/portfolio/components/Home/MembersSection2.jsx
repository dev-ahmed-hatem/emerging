


// import React from 'react';

// const BoardMembersSection = () => {
//     // الألوان الرئيسية المستخدمة من الهوية
//     const primaryColor = '#246efe'; // الأزرق الأساسي
//     const secondaryColor = '#6de7fe'; // السيان الثانوي
//     const lightBlueBg = '#e6efff'; // خلفية زرقاء فاتحة (لمجلس الإدارة)
//     const lightCyanBg = '#f1fdff'; // خلفية سيان فاتحة (للجنة التنفيذية)

//     // خطوط عربية جميلة
//     const fontStyles = {
//         fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
//     };

//     // بيانات الأعضاء
//     const membersData = [
//         {
//             title: 'مجلس إدارة اللجنة التنسيقية',
//             color: primaryColor,
//             bgColor: lightBlueBg,
//             members: [
//                 { name: 'م. عبد العزيــــز بن عبـد اللـه حنفــي', role: 'رئيساً', image: 'https://placehold.co/400x400/246efe/ffffff?text=رئيس+المجلس' },
//                 { name: 'أ. عبد الرحمن بن عبد الله الهذلول', role: 'نائباً للرئيس', image: 'https://placehold.co/400x400/246efe/ffffff?text=نائب+الرئيس' },
//                 { name: 'أ. منصور بن عبد الله بن سعيد', role: 'مسئولاً مالياً', image: 'https://placehold.co/400x400/246efe/ffffff?text=مسئول+مالي' },
//             ],
//         },
//         {
//             title: 'أعضاء اللجنة التنفيذية',
//             color: secondaryColor,
//             bgColor: lightCyanBg,
//             members: [
//                 { name: 'أ. د. نوح بن يحيى الشهري', role: 'رئيساً', image: 'https://placehold.co/400x400/6de7fe/000000?text=رئيس+تنفيذي' },
//                 { name: 'أ. حمد بن سليمان العنقري', role: 'عضواً', image: 'https://placehold.co/400x400/6de7fe/000000?text=عضو' },
//                 { name: 'أ. ناصر بن أحمد المسعود', role: 'عضواً', image: 'https://placehold.co/400x400/6de7fe/000000?text=عضو' },
//                 { name: 'أ. فوزي بن عليوي الجعيد', role: 'عضواً', image: 'https://placehold.co/400x400/6de7fe/000000?text=عضو' },
//                 { name: 'أ. تركي بن عبدالله الشهراني', role: 'عضواً', image: 'https://placehold.co/400x400/6de7fe/000000?text=عضو' },
//                 { name: 'أ. خليفة بن سعد الدخيل', role: 'عضواً', image: 'https://placehold.co/400x400/6de7fe/000000?text=عضو' },
//             ],
//         },
//     ];

//     // دمج الأعضاء في قائمة واحدة مع الاحتفاظ ببيانات المجموعة
//     const allMembers = membersData.flatMap(group => 
//         group.members.map(member => ({
//             ...member,
//             groupTitle: group.title,
//             groupColor: group.color,
//             bgColor: group.bgColor,
//             isBoard: group.title.includes('إدارة'), // لتمييز مجلس الإدارة
//         }))
//     );

//     // مكون قسم العضو الفردي
//     const MemberSection = ({ member, index }) => {
//         // تحديد اتجاه العرض بالتناوب: الصورة يمين/يسار
//         const reverseLayout = index % 2 !== 0; 
//         const textColor = member.isBoard ? primaryColor : primaryColor;
//         const subColor = member.isBoard ? 'text-gray-600' : 'text-gray-700';
        
//         // النص الخاص بالرتبة (يختلف للرئيس/نائب الرئيس)
//         const roleText = member.isBoard ? 
//             (member.role === 'رئيساً' ? 'رئيس مجلس الإدارة' : member.role === 'نائباً للرئيس' ? 'نائب رئيس مجلس الإدارة' : member.role)
//             : member.role;

//         return (
//             <div 
//                 className={`w-full ${member.isBoard ? 'py-16 md:py-24' : 'py-12 md:py-20'}`}
//                 style={{ backgroundColor: member.bgColor }}
//             >
//                 <div 
//                     className={`container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[50vh]`}
//                 >
//                     {/* 1. قسم الصورة الإبداعي (يتبادل الموقع) */}
//                     <div 
//                         className={`image-section relative order-1 ${reverseLayout ? 'md:order-2' : 'md:order-1'} p-4`}
//                     >
//                         {/* حاوية الإطار المنحني المتحرك */}
//                         <div 
//                             className="w-full max-w-sm h-80 md:h-96 mx-auto relative z-10 floating-animation"
//                         >
//                             {/* الإطار الخارجي المنحني */}
//                             <div 
//                                 className="absolute inset-0 p-2" 
//                                 style={{ 
//                                     background: `linear-gradient(135deg, ${member.groupColor}, ${secondaryColor})`, 
//                                     // نفس شكل الصورة المنحني
//                                     clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
//                                     borderRadius: '1rem',
//                                 }}
//                             >
//                             </div>
                            
//                             {/* الصورة الفعلية داخل الإطار */}
//                             <img 
//                                 src={"/hero-bg-1.jpg"} 
//                                 alt={`صورة ${member.name}`} 
//                                 className="w-full h-full object-cover absolute top-0 left-0" 
//                                 style={{ 
//                                     clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
//                                     border: '4px solid white', 
//                                 }}
//                                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/000000?text=صورة' }}
//                             />
//                         </div>
                        
//                         {/* عنصر زخرفي إضافي - دائرة متقطعة */}
//                         <div 
//                             className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-dashed opacity-50 z-0 ${reverseLayout ? 'top-0 right-0' : 'bottom-0 left-0'}`}
//                             style={{ borderColor: member.groupColor, animation: 'spin-slow 40s linear infinite' }}
//                         ></div>
//                     </div>

//                     {/* 2. قسم النصوص والتعريف (يتبادل الموقع) */}
//                     <div className={`text-section order-2 ${reverseLayout ? 'md:order-1' : 'md:order-2'} md:p-8 text-center md:text-right`}>
                        
//                         {/* اسم المجموعة (مجلس الإدارة / اللجنة التنفيذية) */}
//                         <p 
//                             className={`mb-3 text-xl font-bold uppercase tracking-widest`}
//                             style={{ color: member.groupColor }}
//                         >
//                             {member.groupTitle}
//                         </p>
                        
//                         {/* اسم العضو */}
//                         <h2 
//                             className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight`} 
//                             style={{ color: textColor }}
//                         >
//                             {member.name}
//                         </h2>
                        
//                         {/* المنصب */}
//                         <p className={`text-2xl md:text-3xl font-semibold mb-6 ${subColor}`}>
//                             {roleText}
//                         </p>
                        
//                         {/* نص تعريفي قصير */}
//                         <p className="text-lg md:text-xl text-gray-700 max-w-xl md:max-w-none mx-auto">
//                             شخصية قيادية ذات خبرة واسعة في إدارة وتنسيق الأعمال الخيرية والإشراف على البرامج النوعية التي تخدم كتاب الله تعالى.
//                         </p>
                        
//                         {/* زر تفصيلي (اختياري) */}
//                         <button 
//                             className="mt-8 px-6 py-3 rounded-full text-white font-bold transition-all hover:opacity-90 transform hover:scale-105"
//                             style={{ backgroundColor: member.groupColor }}
//                         >
//                             نبذة عن العضو
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         );
//     };

//     return (
//         <>
//             {/* ========================================
//               CSS مخصص للحركات والزخرفة
//               ========================================
//             */}
//             <style>
//                 {`
//                   /* استيراد الخطوط مؤقتاً للتأكد من عرضها حتى يتم تطبيقها عالمياً */
//                   @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap');

//                   /* 1. تنسيق العنوان الرئيسي */
//                   .elegant-title-container {
//                       position: relative;
//                       padding-bottom: 2.5rem; 
//                       background-color: white; /* خلفية بيضاء للعنوان الرئيسي */
//                       padding-top: 5rem;
//                   }
//                   .elegant-title-container::after {
//                       content: '';
//                       position: absolute;
//                       bottom: 1rem;
//                       right: 50%;
//                       transform: translateX(50%);
//                       width: 150px; 
//                       height: 4px;
//                       background-color: ${primaryColor}; 
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
//                       background-color: ${secondaryColor}; 
//                       border-radius: 3px;
//                   }
                  
//                   /* 2. حركة العوم (Floating Animation) */
//                   .floating-animation {
//                     animation: float 6s ease-in-out infinite;
//                   }
                  
//                   @keyframes float {
//                       0% { transform: translateY(0px) scale(1); }
//                       50% { transform: translateY(-10px) scale(1.02); }
//                       100% { transform: translateY(0px) scale(1); }
//                   }

//                   /* 3. حركة دوران بطيئة (للزخرفة) */
//                   @keyframes spin-slow {
//                       from { transform: rotate(0deg); }
//                       to { transform: rotate(360deg); }
//                   }

//                 `}
//             </style>
            
//             {/* السكشن الرئيسي - تجميع جميع الأقسام */}
//             <section style={fontStyles}>
                
//                 {/* العنوان الرئيسي لمرة واحدة */}
//                 <div className="elegant-title-container mx-auto text-center mb-0">
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
//                         قيادة اللجنة التنسيقية
//                     </h2>
//                     <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto mb-16">
//                         القيادات التي تعمل على تسيير وإنجاح أعمال اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم.
//                     </p>
//                 </div>

//                 {/* عرض أقسام الأعضاء بالتسلسل */}
//                 {allMembers.map((member, index) => (
//                     <MemberSection key={index} member={member} index={index} />
//                 ))}

//             </section>
//         </>
//     );
// };

// export default BoardMembersSection;











/////////////------------------------------------------------






import React from 'react';

const BoardMembersSection = () => {
    // الألوان الرئيسية المستخدمة من الهوية
    const primaryColor = '#0b2872'; // الأزرق الأساسي
    const secondaryColor = '#4d7eff'; // السيان الثانوي
    const lightBlueBg = '#e6efff'; // خلفية زرقاء فاتحة (لمجلس الإدارة)
    const lightCyanBg = '#f1fdff'; // خلفية سيان فاتحة (للجنة التنفيذية)

    // خطوط عربية جميلة
    const fontStyles = {
        fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
    };

    // بيانات الأعضاء - تم تحديث مسارات الصور إلى مسارات محلية افتراضية
    const membersData = [
        {
            title: 'مجلس إدارة اللجنة التنسيقية',
            color: primaryColor,
            bgColor: lightBlueBg,
            members: [
                { name: 'م. عبد العزيــــز بن عبـد اللـه حنفــي', role: 'رئيساً', image: '/member-abdulaziz.jpg' },
                { name: 'أ. عبد الرحمن بن عبد الله الهذلول', role: 'نائباً للرئيس', image: '/member-abdulrahman.jpg' },
                { name: 'أ. منصور بن عبد الله بن سعيد', role: 'مسئولاً مالياً', image: '/member-mansour.jpg' },
            ],
        },
        {
            title: 'أعضاء اللجنة التنفيذية',
            color: secondaryColor,
            bgColor: lightCyanBg,
            members: [
                { name: 'أ. د. نوح بن يحيى الشهري', role: 'رئيساً', image: '/member-noah.jpg' },
                { name: 'أ. حمد بن سليمان العنقري', role: 'عضواً', image: '/member-hamad.jpg' },
                { name: 'أ. ناصر بن أحمد المسعود', role: 'عضواً', image: '/member-nasser2.jpg' },
                { name: 'أ. فوزي بن عليوي الجعيد', role: 'عضواً', image: '/member-fawzi.jpg' },
                { name: 'أ. تركي بن عبدالله الشهراني', role: 'عضواً', image: '/member-turki.jpg' },
                { name: 'أ. خليفة بن سعد الدخيل', role: 'عضواً', image: '/member-khalifa.jpg' },
            ],
        },
    ];

    // دمج الأعضاء في قائمة واحدة مع الاحتفاظ ببيانات المجموعة
    const allMembers = membersData.flatMap(group => 
        group.members.map(member => ({
            ...member,
            groupTitle: group.title,
            groupColor: group.color,
            bgColor: group.bgColor,
            isBoard: group.title.includes('إدارة'), // لتمييز مجلس الإدارة
        }))
    );

    // مكون قسم العضو الفردي
    const MemberSection = ({ member, index }) => {
        // تحديد اتجاه العرض بالتناوب: الصورة يمين/يسار
        const reverseLayout = index % 2 !== 0; 
        const textColor = member.isBoard ? primaryColor : primaryColor;
        const subColor = member.isBoard ? 'text-gray-600' : 'text-gray-700';
        
        // النص الخاص بالرتبة (يختلف للرئيس/نائب الرئيس)
        const roleText = member.isBoard ? 
            (member.role === 'رئيساً' ? 'رئيس مجلس الإدارة' : member.role === 'نائباً للرئيس' ? 'نائب رئيس مجلس الإدارة' : member.role)
            : member.role;

        return (
            <div 
                // تقليل الحشوة الرأسية لتقليل المسافة بين الأعضاء
                className={`w-full ${member.isBoard ? 'py-10 md:py-16' : 'py-8 md:py-12'}`}
                style={{ backgroundColor: member.bgColor }}
            >
                <div 
                    // إزالة min-h لتخفيف قيود الارتفاع وتقليل المسافة
                    className={`container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
                >
                    {/* 1. قسم الصورة الإبداعي (يتبادل الموقع) */}
                    <div 
                        className={`image-section relative order-1 ${reverseLayout ? 'md:order-2' : 'md:order-1'} p-4 perspective-container`}
                    >
                        {/* حاوية الإطار المنحني المتحرك */}
                        <div 
                            // إضافة animation-hover-tilt للحركة عند التحويم
                            className="w-full max-w-sm h-80 md:h-96 mx-auto relative z-10 floating-animation animation-hover-tilt"
                        >
                            {/* الإطار الخارجي المنحني */}
                            <div 
                                className="absolute inset-0 p-2" 
                                style={{ 
                                    background: `linear-gradient(135deg, ${member.groupColor}, ${secondaryColor})`, 
                                    // نفس شكل الصورة المنحني
                                    clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                                    borderRadius: '1rem',
                                }}
                            >
                            </div>
                            
                            {/* الصورة الفعلية داخل الإطار */}
                            <img 
                                // استخدام مسار الصورة من الـ props
                                src={member.image} 
                                alt={`صورة ${member.name}`} 
                                className="w-full h-full object-cover absolute top-0 left-0" 
                                style={{ 
                                    clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                                    border: '4px solid white', 
                                }}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/000000?text=صورة' }}
                            />
                        </div>
                        
                        {/* عنصر زخرفي إضافي - دائرة متقطعة */}
                        <div 
                            className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-dashed opacity-50 z-0 ${reverseLayout ? 'top-0 right-0' : 'bottom-0 left-0'}`}
                            style={{ borderColor: member.groupColor, animation: 'spin-slow 40s linear infinite' }}
                        ></div>
                    </div>

                    {/* 2. قسم النصوص والتعريف (يتبادل الموقع) */}
                    <div className={`text-section order-2 ${reverseLayout ? 'md:order-1' : 'md:order-2'} md:p-8 text-center md:text-right`}>
                        
                        {/* اسم المجموعة (مجلس الإدارة / اللجنة التنفيذية) */}
                        <p 
                            className={`mb-3 text-xl font-bold uppercase tracking-widest`}
                            style={{ color: member.groupColor }}
                        >
                            {member.groupTitle}
                        </p>
                        
                        {/* اسم العضو */}
                        <h2 
                            className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight`} 
                            style={{ color: textColor }}
                        >
                            {member.name}
                        </h2>
                        
                        {/* المنصب */}
                        <p className={`text-2xl md:text-3xl font-semibold mb-6 ${subColor}`}>
                            {roleText}
                        </p>
                        
                        {/* نص تعريفي قصير */}
                        <p className="text-lg md:text-xl text-gray-700 max-w-xl md:max-w-none mx-auto">
                            شخصية قيادية ذات خبرة واسعة في إدارة وتنسيق الأعمال الخيرية والإشراف على البرامج النوعية التي تخدم كتاب الله تعالى.
                        </p>
                        
                        {/* زر تفصيلي (اختياري) */}
                        <button 
                            className="mt-8 px-6 py-3 rounded-full text-white font-bold transition-all hover:opacity-90 transform hover:scale-105"
                            style={{ backgroundColor: member.groupColor }}
                        >
                            نبذة عن العضو
                        </button>
                    </div>

                </div>
            </div>
        );
    };

    return (
        <>
            {/* ========================================
              CSS مخصص للحركات والزخرفة
              ========================================
            */}
            <style>
                {`
                  /* استيراد الخطوط مؤقتاً للتأكد من عرضها حتى يتم تطبيقها عالمياً */
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap');

                  /* 1. تنسيق العنوان الرئيسي */
                  .elegant-title-container {
                      position: relative;
                      padding-bottom: 2.5rem; 
                      background-color: white; /* خلفية بيضاء للعنوان الرئيسي */
                      padding-top: 5rem;
                  }
                  .elegant-title-container::after {
                      content: '';
                      position: absolute;
                      bottom: 1rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 150px; 
                      height: 4px;
                      background-color: ${primaryColor}; 
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
                      background-color: ${secondaryColor}; 
                      border-radius: 3px;
                  }
                  
                  /* 2. حركة العوم (Floating Animation) - تم تعزيزها */
                  .floating-animation {
                    animation: float 5s ease-in-out infinite; /* أسرع قليلاً */
                  }
                  
                  @keyframes float {
                      0% { transform: translateY(0px) scale(1); }
                      50% { transform: translateY(-15px) scale(1.03); } /* حركة أكبر */
                      100% { transform: translateY(0px) scale(1); }
                  }

                  /* 3. حركة دوران بطيئة (للزخرفة) */
                  @keyframes spin-slow {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  }
                  
                  /* 4. حاوية لمنع تأثير المنظور من التأثير على العناصر المجاورة */
                  .perspective-container {
                    perspective: 1000px;
                  }

                  /* 5. حركة المنظور (Perspective Tilt) عند التحويم */
                  .animation-hover-tilt:hover {
                    animation: perspective-tilt 0.5s forwards;
                  }

                  @keyframes perspective-tilt {
                      /* زوم خفيف مع إمالة على محور Y */
                      0% { transform: scale(1) rotateY(0deg) rotateX(0deg); }
                      50% { transform: scale(1.05) rotateY(-3deg) rotateX(1deg); }
                      100% { transform: scale(1.03) rotateY(-2deg) rotateX(0deg); }
                  }


                `}
            </style>
            
            {/* السكشن الرئيسي - تجميع جميع الأقسام */}
            <section style={fontStyles}>
                
                {/* العنوان الرئيسي لمرة واحدة */}
                <div className="elegant-title-container mx-auto text-center mb-0">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
                        أعضاء اللجنة التنسيقية
                    </h2>
                    <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                        القيادات التي تعمل على تسيير وإنجاح أعمال اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم.
                    </p>
                </div>

                {/* عرض أقسام الأعضاء بالتسلسل */}
                {allMembers.map((member, index) => (
                    <MemberSection key={index} member={member} index={index} />
                ))}

            </section>
        </>
    );
};

export default BoardMembersSection;





