import React from 'react';
import { CalendarDays, MapPin, Building2, ShieldCheck } from 'lucide-react';

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
const BACKGROUND_LIGHT = '#FDFDFD'; // الخلفية الفاتحة جداً
const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي للأيقونة

// ********************************************
// بيانات المرحلة الأولى
// ********************************************
const phaseOneDetails = [
    {
        icon: CalendarDays,
        title: "تاريــــــــخ البداية",
        content: "من ۲۰ ربيع الثاني ۱٤٤٧هـ الموافق ۱۲ أكتوبر ۲۰۲٥م.",
        delay: 0.2,
    },
    {
        icon: MapPin,
        title: "مستـــــــوى الإقامة",
        content: "تقام فعاليات المسابقة في مرحلتها الأولى على مستوى المحافظات.",
        delay: 0.4,
    },
    {
        icon: Building2,
        title: "المرشحون المستهدفون",
        content: "للمرشحين المتقدمين من قِبل الجهات المشاركة.",
        delay: 0.6,
    },
    {
        icon: ShieldCheck,
        title: "جهة الإشــــــــراف",
        content: "تحت إشراف جمعيات تحفيظ القرآن الكريم بالمحافظات لضمان الجودة والحيادية.",
        delay: 0.8,
    },
];

// ********************************************
// المكون الفرعي: كتلة الخطوة في الخط الزمني
// ********************************************
const TimelineItem = ({ detail, isLast }) => {
    const IconComponent = detail.icon;

    return (
        <div 
            className="flex relative mb-8 pr-12"
            style={{ 
                animation: `fadeInRight 0.8s ease-out forwards ${detail.delay}s`,
                opacity: 0, // يبدأ مخفياً
            }}
        >
            {/* الدائرة والأيقونة على الخط الزمني */}
            <div 
                className="absolute right-0 top-0 mt-2 w-8 h-8 flex items-center justify-center rounded-full z-10"
                style={{ 
                    backgroundColor: PRIMARY_COLOR_DARK,
                    color: TEXT_LIGHT,
                    // تأثير إطار ذهبي بارز
                    boxShadow: `0 0 0 4px ${ACCENT_COLOR_GOLD}, inset 0 0 0 2px ${PRIMARY_COLOR_DARK}`
                }}
            >
                <IconComponent size={18} strokeWidth={2.5} />
            </div>

            {/* خط التوصيل العمودي (Hidden on last item) */}
            {!isLast && (
                <div 
                    className="absolute right-[15px] top-10 bottom-0 w-0.5"
                    style={{ backgroundColor: ACCENT_COLOR_GOLD }}
                ></div>
            )}

            {/* محتوى الكتلة (المربع الحاوي) */}
            <div 
                className="flex-1 p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 mr-2"
                style={{
                    backgroundColor: 'white',
                    // Border Effect: إضافة ظل داخلي خفيف وتظليل على الحافة
                    border: `1px solid ${ACCENT_COLOR_GOLD}50`, 
                    boxShadow: `0 4px 15px -3px rgba(0, 0, 0, 0.05), 0 0 0 2px ${ACCENT_COLOR_GOLD}40`
                }}
            >
                <h3 
                    className="text-xl font-extrabold mb-2" 
                    style={{ color: PRIMARY_COLOR_DARK }}
                >
                    {detail.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                    {detail.content}
                </p>
            </div>
        </div>
    );
};

// ********************************************
// المكون الرئيسي
// ********************************************
const CompetitionPhaseOne = () => {
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
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
            
            <div className="container mx-auto max-w-5xl">
                
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
                        المرحلـــة الأولى: التصفيات المبدئية
                    </h3>
                </header>

                {/* الخط الزمني العمودي (Timeline Layout) */}
                <div className="relative">
                    {phaseOneDetails.map((detail, index) => (
                        <TimelineItem 
                            key={index} 
                            detail={detail}
                            isLast={index === phaseOneDetails.length - 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CompetitionPhaseOne;
