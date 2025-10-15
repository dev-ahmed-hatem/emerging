import React from 'react';

// ********************************************
// البيانات والألوان
// ********************************************

const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

// محاور المسابقة
const tracks = [
    { 
        title: "التعليـــم العــــــــــــــــــــام", 
        description: "(الحكومـــي، الأهـــلي، الأجنبي).",
        bgColor: '#f0fff4', // أخضر فاتح جداً
        borderColor: PRIMARY_COLOR,
    },
    { 
        title: "مـــدارس تحفيــــــــــــظ", 
        description: "القرآن الكريم",
        bgColor: '#fff7f0', // برتقالي فاتح جداً
        borderColor: ACCENT_COLOR,
    },
    { 
        title: "جمعيـــات تحفيــــــــظ", 
        description: "القـــرآن الكريــــــــــــــــــم بالمملكة",
        bgColor: '#f0f4ff', // أزرق فاتح جداً
        borderColor: PRIMARY_COLOR,
    },
];

// ********************************************
// المكوّن الفرعي: TrackCard
// ********************************************

const TrackCard = ({ track }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl 
                       shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl h-full"
            style={{ 
                backgroundColor: track.bgColor,
                border: `3px solid ${track.borderColor}`,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* زخرفة خفيفة في الخلفية */}
            <div 
                className="absolute inset-0 opacity-5"
                style={{ 
                    backgroundImage: `radial-gradient(${track.borderColor} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                }}
            ></div>

            <div className="relative z-10">
                {/* العنوان الأساسي */}
                <h3 
                    className="text-2xl md:text-3xl font-bold mb-2 leading-snug"
                    style={{ color: PRIMARY_COLOR }}
                >
                    {track.title}
                </h3>
                
                {/* الوصف / التفاصيل */}
                <p 
                    className="text-lg font-medium mt-3 pb-2 border-b-2"
                    style={{ color: '#4a4a4a', borderColor: track.borderColor + '80' }}
                >
                    {track.description}
                </p>
            </div>
            
        </div>
    );
};

// ********************************************
// المكوّن الرئيسي: CompetitionTracksSection
// ********************************************

const CompetitionTracksSection = () => {
    return (
        <section 
            className="w-full py-20 px-4 md:px-8 lg:px-16" 
            style={{ backgroundColor: '#f9f6ef', direction: 'rtl' }}
        >
            <div className="container mx-auto max-w-6xl">
                
                {/* 1. العنوان (مطابق لنمط الأقسام السابقة) */}
                <h2 
                    className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4 p-4 
                                 shadow-lg rounded-t-xl mx-auto w-full md:w-3/4 max-w-2xl"
                    style={{ backgroundColor: PRIMARY_COLOR, borderBottom: `4px solid ${ACCENT_COLOR}` }}
                >
                    مسارات المسابقة
                </h2>
                
                {/* 2. الوصف */}
                <p 
                    className="text-center text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
                    style={{ color: PRIMARY_COLOR }}
                >
                    تستهدف المسابقة البنين والبنات في كافة الجهات التعليمية المملكة العربية السعودية، وفق املسارات التالية:
                </p>
                
                {/* 3. حاوية المسارات - شبكة عرض بثلاثة أعمدة */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-6">
                    {tracks.map((track, index) => (
                        <TrackCard key={index} track={track} />
                    ))}
                </div>

            </div>
            
             {/* زخرفة سفلية */}
            <div 
                className="w-full h-10 mt-16" 
                style={{ 
                    background: `repeating-linear-gradient(-45deg, ${ACCENT_COLOR} 0 1px, transparent 1px 10px)`,
                    opacity: 0.15,
                }}
            ></div>
        </section>
    );
};

export default CompetitionTracksSection;
