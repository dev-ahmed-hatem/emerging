import React from 'react';

// الأيقونة المستخدمة للهدف (Target/Goal Icon)
const TargetIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke={props.color} strokeWidth="1.5" className="opacity-70"/>
        <path d="M12 18v-6h6" stroke={props.color} strokeWidth="2"/>
        <path d="M12 6v6h6" stroke={props.color} strokeWidth="2"/>
    </svg>
);

const GoalsSection = () => {
    // الألوان الرئيسية المستخدمة (مستخلصة من القسم السابق):
    // primary: #2A807A (الأخضر الداكن)
    // secondary: #F59E0B (البرتقالي)
    const primaryColor = '#4d7eff';
    const secondaryColor = '#6de7fe';
    // خلفية مائلة للأخضر الفاتح لتمييز السكشن (للتكامل مع السكشن السابق)
    const softGreenBg = '#a2f1fe'; 

    // خطوط عربية جميلة
    const fontStyles = {
        fontFamily: "Tajawal, Cairo, sans-serif",
    };

    // قائمة الأهداف الاستراتيجية السبعة
    const strategicGoals = [
        'التنسيق والتكامل بين جميعات تحفيظ القرآن بالمملكـة',
        'تقديم المساندة والمشورة لجمعيات تحفيظ القرآن الكريم',
        'تمثيل جمعيات التحفيظ أمام الجهات الحكومية والخاصة والجهات ذات العالقة',
        'تبني وإطلاق المبادرات المشتركة والبرامج الإستراتيجية التي تخدم كافة جمعيات التحفيظ',
        'الإسهام في معالجة التحديات والعوائق التي تواجه جمعيات التحفيظ لتحقيق رسالتها وأهدافها',
        'بناء الشراكات والعلاقات النوعية لدعم جمعيات تحفيظ القرآن',
        'إعداد الدراسات والأبحاث المتعلقة بواقع جمعيات التحفيظ في المملكة',
    ];

    return (
        <>
            {/* ========================================
              CSS مخصص للحركات والزخرفة
              ========================================
            */}
            <style>
                {`
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;700&display=swap');

                  /* 1. تأثير الخلفية الناعمة */
                  .section-soft-bg {
                    background-color: ${softGreenBg};
                  }
                  
                  /* 2. تنسيق عنوان احترافي بفاصل مزدوج أكثر حيوية */
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
                      width: 120px; 
                      height: 3px;
                      background-color: ${primaryColor};
                      border-radius: 3px;
                  }
                  .elegant-title-container::before {
                      content: '';
                      position: absolute;
                      bottom: 0.75rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 50px; 
                      height: 3px;
                      background-color: ${secondaryColor};
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
                  ${strategicGoals.map((_, index) => `.delay-${index + 1} { animation-delay: ${index * 0.15 + 0.1}s; }`).join('\n')}

                  /* 5. تصميم البطاقة المائل على التحويم */
                  .goal-card-tilt:hover {
                    transform: rotateZ(-0.5deg) scale(1.09);
                    box-shadow: 0 10px 20px rgba(42, 128, 122, 0.2);
                  }
                  /* 6. تأثير Pulse Border على التحويم */
                  .pulse-border-hover {
                    transition: all 0.3s ease-out;
                    box-shadow: 0 0 0 0 #666655;
                  }
                  .pulse-border-hover:hover {
                    /* محاكاة النبض بظل خفيف يتسع */
                    box-shadow: 0 0 0 2px #999999; 
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
                            <span style={{ color: secondaryColor }}>الأهداف</span>  الإستراتيجية
                        </h2>
                        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                            الركائز الأساسية التي توجه خطط اللجنة التنسيقية لتحقيق الأثر القرآني الأقصى في المملكة.
                        </p>
                    </div>
                </div>

                {/* حاوية الأهداف - تصميم شبكي مع تركيز على التباين والعمق */}
                <div className="container mx-auto px-4 md:px-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        
                        {strategicGoals.map((goal, index) => (
                            // بطاقة الهدف الاستراتيجي مع الحركة وتأثير التحويم الجديد
                            <div 
                                key={index} 
                                className={`fade-in-up delay-${index + 1} relative bg-white rounded-xl shadow-xl border-b-4 border-r-4 border-gray-100 p-0 
                                    transition-all duration-300 goal-card-tilt cursor-pointer overflow-hidden pulse-border-hover`}
                            >
                                {/* شارة الرقم في الزاوية */}
                                <div 
                                    className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center text-3xl font-black text-white rounded-bl-3xl z-10"
                                    style={{ backgroundColor: secondaryColor, boxShadow: `0 4px 10px ${secondaryColor}60` }}
                                >
                                    {index + 1}
                                </div>

                                {/* محتوى البطاقة */}
                                <div className="p-6 pt-16 md:p-8 md:pt-16">
                                    {/* عنوان الهدف الداخلي (لون ثانوي) */}
                                    <h3 
                                        className="text-lg font-bold mb-3 leading-snug" 
                                        style={{ color: primaryColor }}
                                    >
                                        {/* الهدف الاستراتيجي {index + 1} */}
                                    </h3>
                                    
                                    {/* وصف الهدف */}
                                    <p className="text-gray-700 text-2xl leading-relaxed">
                                        {goal}
                                    </p>
                                </div>
                                
                                {/* عنصر زخرفي سفلي (شريط) */}
                                <div className="h-2 w-full absolute bottom-0 left-0" style={{ backgroundColor: primaryColor }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default GoalsSection;


