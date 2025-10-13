import React from 'react';
import { Calendar, Users, Map, Clock, ChevronsLeft } from 'lucide-react';

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات المرحلة الثانية
// ********************************************
const phaseTwoDetails = [
    {
        icon: Map,
        title: "مستـــــــوى الإقامة",
        content: "تقام فعاليات المسابقة في مرحلتها الثانية على مستوى المناطق.",
        delay: 0.2,
    },
    {
        icon: Calendar,
        title: "تاريــــــــخ البداية",
        content: "اعتبارًا من ۲۰ ربيع الثاني ۱٤٤٧هـ الموافق ۱۲ أكتوبر ۲۰۲٥م.",
        delay: 0.4,
    },
    {
        icon: Users,
        title: "آلية الترشيح للختام",
        content: "ترشيح ستة متسابقين وست متسابقات على الأكثر بواقع مرشح واحد ومرشحة واحدة في كل فرع من فروع المسابقة.",
        delay: 0.6,
    },
    {
        icon: Clock,
        title: "آخر موعد للترشيح",
        content: "آخر موعد لإرسال أسماء المرشحين للتصفيات الختامية سيتم تحديده لاحقاً.",
        delay: 0.8,
    },
];

// ********************************************
// المكون الفرعي: بطاقة التفاصيل المكدسة
// ********************************************
const DetailCard = ({ detail }) => {
    const IconComponent = detail.icon;

    return (
        <div 
            className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6"
            style={{ 
                animation: `fadeInUp 0.6s ease-out forwards ${detail.delay}s`,
                opacity: 0, // يبدأ مخفياً
            }}
        >
            <div 
                className="bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] flex flex-col items-center text-center h-full"
                style={{
                    // تحسين شكل الحدود عبر Shadow قوية وظل داخلي خفيف
                    border: `1px solid ${ACCENT_COLOR_GOLD}30`,
                    boxShadow: `0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 3px ${ACCENT_COLOR_GOLD}50`,
                }}
            >
                {/* الأيقونة */}
                <div 
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                    style={{ 
                        backgroundColor: PRIMARY_COLOR_DARK, 
                        color: TEXT_LIGHT,
                        border: `4px solid ${ACCENT_COLOR_GOLD}` // إطار ذهبي بارز
                    }}
                >
                    <IconComponent size={30} strokeWidth={2.5} />
                </div>
                
                {/* العنوان */}
                <h3 
                    className="text-lg font-bold mb-2 uppercase" 
                    style={{ color: ACCENT_COLOR_GOLD, letterSpacing: '0.5px' }}
                >
                    {detail.title}
                </h3>
                
                {/* المحتوى */}
                <p 
                    className="text-base text-gray-700 leading-relaxed font-medium"
                    style={{ color: PRIMARY_COLOR_DARK }}
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
const CompetitionPhaseTwo = () => {
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
                        مراحــــــــل المسابقــــــــــــــة
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
                        المرحلـــة الثانية: تصفيات المناطق
                    </h3>
                </header>
                
                {/* الإشراف المزدوج (كتلة معلومات منفصلة) */}
                <div 
                    className="mx-auto max-w-4xl p-6 mb-12 rounded-2xl text-center shadow-lg"
                    style={{ 
                        backgroundColor: PRIMARY_COLOR_DARK, 
                        border: `2px dashed ${ACCENT_COLOR_GOLD}`,
                        animation: `fadeInUp 0.5s ease-out forwards 0s`,
                        opacity: 0,
                    }}
                >
                    <p className="text-lg font-semibold" style={{ color: TEXT_LIGHT }}>
                        تحت إشراف <span className="font-extrabold" style={{ color: ACCENT_COLOR_GOLD }}>الجمعية الخيرية لتحفيظ القرآن الكريم</span> في المدينة الرئيسية بالمنطقة، وبمتابعة من <span className="font-extrabold" style={{ color: ACCENT_COLOR_GOLD }}>اللجنة التنسيقية</span> لجمعيات تحفيظ القرآن الكريم بالمملكة.
                    </p>
                </div>

                {/* تخطيط البطاقات المكدسة */}
                <div className="flex flex-wrap -mx-3 justify-center">
                    {phaseTwoDetails.map((detail, index) => (
                        <DetailCard 
                            key={index} 
                            detail={detail}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default CompetitionPhaseTwo;
