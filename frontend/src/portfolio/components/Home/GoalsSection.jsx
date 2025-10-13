import React from 'react';

// الأيقونة المستخدمة للهدف (Target/Goal Icon)
const TargetIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke={props.color} strokeWidth="1.5" className="opacity-70"/>
        <circle cx="12" cy="12" r="7" fill={props.color} />
        <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
);

const GoalsSection = () => {
    // الألوان الرئيسية المستخدمة (مستخلصة من القسم السابق):
    // primary: #2A807A
    // secondary: #F59E0B
    const primaryColor = '#2A807A';
    const secondaryColor = '#F59E0B';
    const lightBg = '#ffffff'; // خلفية بيضاء نقية لهذا السكشن (ليأتي بعد خلفية الأقسام المائلة للأخضر)

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
        'إعداد الدراسات واألبحاث المتعلقة بواقع جمعيات التحفيظ في المملكة',
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

                  /* 1. تأثير الخلفية البيضاء النظيفة */
                  .section-bg-white {
                    background-color: ${lightBg};
                  }
                  
                  /* 2. تنسيق عنوان احترافي بفاصل مرن */
                  .elegant-title-container {
                      position: relative;
                      padding-bottom: 2rem; /* مسافة للخط السفلي */
                  }
                  .elegant-title-container::after {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      right: 50%;
                      transform: translateX(50%);
                      width: 120px; /* أطول قليلاً */
                      height: 5px;
                      background-color: ${secondaryColor}; /* لون ثانوي مختلف للتركيز */
                      border-radius: 3px;
                      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
                `}
            </style>
            
            {/* الحاوية الرئيسية للسكشن - خلفية بيضاء ومساحة داخلية */}
            <section 
                className="section-bg-white pt-8 pb-16 md:pt-16 md:pb-24" 
                style={fontStyles}
            >
                {/* حاوية العنوان الموحد */}
                <div className="container mx-auto px-4 md:px-8 text-center mb-16">
                    <div className="elegant-title-container mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
                            <span className="text-primary-800" style={{ color: primaryColor }}>الأهداف الإستراتيجية</span>  للجنة التنسيقة
                        </h2>
                        <p className="mt-3 text-lg text-gray-500 max-w-3xl mx-auto">
                            سبعة محاور أساسية تقود عمل اللجنة نحو تحقيق رؤية المملكة في خدمة كتاب الله والارتقاء بأداء الجمعيات.
                        </p>
                    </div>
                </div>

                {/* حاوية الأهداف - تصميم شبكي مرن ومتجاوب */}
                <div className="container mx-auto px-4 md:px-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {strategicGoals.map((goal, index) => (
                            // بطاقة الهدف الاستراتيجي مع الحركة وتأثير التحويم
                            <div 
                                key={index} 
                                className={`fade-in-up delay-${index + 1} p-6 md:p-8 bg-white rounded-3xl shadow-xl border-t-8 border-transparent 
                                    hover:border-t-8 hover:border-b-0 hover:border-l-0 hover:border-r-0 hover:border-t-${secondaryColor} 
                                    transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer`}
                                style={{
                                    borderTopColor: `var(--tw-border-opacity, 1) ${secondaryColor}`, // fallback in case hover doesn't work perfectly
                                    '--tw-border-opacity': '0', // Start with 0 opacity for the top border
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.setProperty('--tw-border-opacity', '1')}
                                onMouseLeave={(e) => e.currentTarget.style.setProperty('--tw-border-opacity', '0')}
                            >
                                <div className="flex items-start">
                                    {/* رقم الهدف (احترافي) */}
                                    <div className="flex-shrink-0 ml-4">
                                        <div 
                                            className="w-12 h-12 flex items-center justify-center rounded-full text-xl font-extrabold text-white"
                                            style={{ backgroundColor: primaryColor }}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                    
                                    {/* عنوان الهدف */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-neutral-800 leading-normal" style={{ color: primaryColor }}>
                                            الهدف رقم {index + 1}
                                        </h3>
                                        <p className="text-gray-600 text-base leading-loose">
                                            {goal}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* فاصل الموجة السفلية (إذا كانت الخلفية التالية ستكون مختلفة) */}
            {/* ملاحظة: سنستخدم هنا فاصلة بيضاء نقية تتطابق مع خلفية السكشن الحالي */}
            {/* <div className="wavy-divider-top wavy-divider-bottom" style={{ backgroundColor: lightBg }}></div> */}
        </>
    );
};

export default GoalsSection;





