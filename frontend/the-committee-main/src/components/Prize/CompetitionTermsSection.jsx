import React from 'react';

// ********************************************
// الألوان والأيقونات والبيانات
// ********************************************

// الألوان الأساسية
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن (الخلفية)
const ACCENT_COLOR_LIGHT = '#d4c291'; // الذهبي المطفأ (الإطارات والأيقونات)
const TEXT_LIGHT_ON_DARK = '#FFFFFF'; // لون النص الفاتح الأساسي
const TEXT_DARK_ON_LIGHT = '#292826'; // لون النص الداكن الأساسي

// قائمة الشروط مع أيقونات بسيطة (SVG Paths)
// سنستخدم أيقونات بسيطة تعبر عن المحتوى
const terms = [
    { 
        id: 1, 
        content: "أن يكـــــــــــــــون المتسابق/المتســـابقة سعودي الجنسية.", 
        icon: (
            // أيقونة علم/هوية (Nationality/ID)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 0-1.5h-3v-3Z" clipRule="evenodd" />
            </svg>
        )
    },
    { 
        id: 2, 
        content: "أن يكون من طلاب المرحلة الابتدائية أو الروضـــة والتمهيـــدي ولا يزيـــد عمره عن 12 عام.", 
        icon: (
            // أيقونة كتاب/مدرسة (School/Age Limit)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path d="M11.25 4.53v5.69l3.44-2.296a.75.75 0 0 0 0-1.296L11.25 4.53Z" />
                <path fillRule="evenodd" d="M10.5 4.097A35.289 35.289 0 0 0 8.028 3H6.75A3 3 0 0 0 3.75 6v12a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1.278c-.975 0-1.929.176-2.822.506C13.886 4.417 12.378 5.23 10.5 5.23c-1.878 0-3.386-.813-4.472-1.694a32.043 32.043 0 0 1-1.46.331V12a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V4.53a32.043 32.043 0 0 1-1.46.331c-.975 0-1.929.176-2.822.506C14.114 5.23 15.622 4.417 17.5 4.417h.75a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-10.5a1.5 1.5 0 0 1-1.5-1.5V5.594c.594-.216 1.18-.456 1.76-.713Z" clipRule="evenodd" />
            </svg>
        )
    },
    { 
        id: 3, 
        content: "أن تكون المشاركة في الفروع من بداية المصحف أو من نهايته. ", 
        icon: (
            // أيقونة مصحف (Quran/Start/End)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path fillRule="evenodd" d="M7.5 6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 6h-9ZM9 7.5h6a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 11V8.25A.75.75 0 0 1 9 7.5ZM9 12.75h6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
        )
    },
    { 
        id: 4, 
        content: "الفرع الســـادس يكون تلاوة فقط للفئة العمرية (4–6 أعوام).", 
        icon: (
            // أيقونة ميكروفون/صوت (Recitation/Audio)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path d="M8.5 2C8 2 7.5 2.5 7.5 3V6.5C7.5 7 8 7.5 8.5 7.5H9.5C10 7.5 10.5 7 10.5 6.5V3C10.5 2.5 10 2 9.5 2H8.5ZM14.5 2C14 2 13.5 2.5 13.5 3V6.5C13.5 7 14 7.5 14.5 7.5H15.5C16 7.5 16.5 7 16.5 6.5V3C16.5 2.5 16 2 15.5 2H14.5ZM18.5 17C18.25 17 18 17.25 18 17.5V18.5C18 18.75 18.25 19 18.5 19H19.5C19.75 19 20 18.75 20 18.5V17.5C20 17.25 19.75 17 19.5 17H18.5ZM21.5 12C21.25 12 21 12.25 21 12.5V14.5C21 14.75 21.25 15 21.5 15H22.5C22.75 15 23 14.75 23 14.5V12.5C23 12.25 22.75 12 22.5 12H21.5Z M2.5 12C2.25 12 2 12.25 2 12.5V14.5C2 14.75 2.25 15 2.5 15H3.5C3.75 15 4 14.75 4 14.5V12.5C4 12.25 3.75 12 3.5 12H2.5Z M5.5 17C5.25 17 5 17.25 5 17.5V18.5C5 18.75 5.25 19 5.5 19H6.5C6.75 19 7 18.75 7 18.5V17.5C7 17.25 6.75 17 6.5 17H5.5Z M10.5 11C9.75 11 9 11.75 9 12.5V21.5C9 22.25 9.75 23 10.5 23H13.5C14.25 23 15 22.25 15 21.5V12.5C15 11.75 14.25 11 13.5 11H10.5Z" />
            </svg>
        )
    },
];

// ********************************************
// المكوّن الفرعي: TermCard
// ********************************************

const TermCard = ({ term }) => {
    return (
        <div 
            // استخدام Grid لتوزيع الأيقونة والمحتوى أفقياً (لكل البطاقة)
            className="flex flex-col md:flex-row items-start p-6 rounded-2xl shadow-xl transition-all duration-500 ease-out h-full transform hover:scale-[1.02] hover:shadow-2xl space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse"
            style={{ 
                backgroundColor: TEXT_LIGHT_ON_DARK, // خلفية البطاقة بيضاء/فاتحة
                border: `3px solid ${ACCENT_COLOR_LIGHT}`, // الإطار الذهبي المطفأ
                color: TEXT_DARK_ON_LIGHT,
                boxShadow: `0 8px 15px rgba(0, 0, 0, 0.1)`,
            }}
        >
            {/* الأيقونة (الثلث الأول) */}
            <div 
                className="flex-shrink-0 p-3 rounded-full shadow-lg"
                style={{ 
                    backgroundColor: PRIMARY_COLOR_DARK, // دائرة بلون الخلفية الغامقة
                    color: ACCENT_COLOR_LIGHT, // الأيقونة بلون الذهبي المطفأ
                }}
            >
                {term.icon}
            </div>

            {/* المحتوى (الثلثين الباقيين) */}
            <p 
                className="text-lg md:text-xl font-medium flex-grow leading-relaxed"
            >
                {term.content}
            </p>
        </div>
    );
};

// ********************************************
// المكوّن الرئيسي: CompetitionTermsSection
// ********************************************

const CompetitionTermsSection = () => {
    return (
        <section 
            className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
            style={{ 
                backgroundColor: PRIMARY_COLOR_DARK, // الخلفية الغامقة
                direction: 'rtl',
                position: 'relative',
            }}
        >
            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* 1. العنوان الرئيسي المنفصل (في الأعلى) */}
                <div className="flex justify-center mb-16">
                    <div 
                        className="p-4 md:p-6 rounded-2xl shadow-2xl relative text-center"
                        style={{ 
                            backgroundColor: ACCENT_COLOR_LIGHT, // خلفية العنوان الفاتحة
                            border: `3px solid ${PRIMARY_COLOR_DARK}`,
                        }}
                    >
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                            style={{ color: PRIMARY_COLOR_DARK }}
                        >
                            شروط الجــــــــــائزة
                        </h2>
                        <p className="text-lg md:text-xl mt-2 font-medium" style={{ color: TEXT_DARK_ON_LIGHT }}>
                            أحكام وشروط المشاركة في المسابقة
                        </p>
                    </div>
                </div>

                {/* 2. حاوية الشروط - توزيع متناسق باستخدام Grid في عمودين */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {terms.map((term) => (
                        <TermCard key={term.id} term={term} />
                    ))}
                </div>

            </div>
            
            {/* 3. الزخرفة السفلية (كما في القسم السابق) */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-16" 
                style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), transparent)`,
                }}
            >
                {/* نمط الزخرفة الهندسية (مكعبات متكررة) */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-8"
                    style={{ 
                        background: `repeating-linear-gradient(90deg, transparent 0 10px, ${ACCENT_COLOR_LIGHT} 10px 11px)`,
                        opacity: 0.15,
                    }}
                ></div>
            </div>
        </section>
    );
};

export default CompetitionTermsSection;
