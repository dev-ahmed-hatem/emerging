import React from 'react';
import { Link } from 'react-router';

// ********************************************
// مُكوّن الأيقونات المُستخدمة
// ********************************************

// أيقونة الكتاب/المصحف - تعكس الموضوع الديني
const BookOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.75c-1.35 0-2.6-.5-3.54-1.44L3 15.54V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v11.04l-5.46 4.77a5.5 5.5 0 0 1-3.54 1.44Z" />
        <path fillRule="evenodd" d="M12 21.75c-1.35 0-2.6-.5-3.54-1.44L3 15.54V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v11.04l-5.46 4.77a5.5 5.5 0 0 1-3.54 1.44ZM12 4.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 12 4.5Z" clipRule="evenodd" />
    </svg>
);

// ********************************************
// المكوّن الرئيسي للجائزة
// ********************************************

const QuranPrizeSection = () => {

    // الوصف المستمد من الصورة المرفقة
    const prizeDescription = "جائزة الناشئة لحفظ القرآن الكريم وتلاوته وتجويده هي مسابقة قرآنية في حفظ القرآن الكريم وتلاوته وتجويده على مستوى المملكة. تستهدف البنين والبنات ضمن المرحلة الدراسية الابتدائية والتمهيدية والروضة. ويتنافس المتسابقون والمتسابقات فيها في ستة فروع محددة وتقدم لهم الجوائز القيمة.";

    // ملاحظة: يُفضل إضافة خطوط عربية ذات طابع إسلامي/جمالي (مثل خطوط النسخ) عبر Tailwind config أو استيرادها،
    // ولكن هنا سنعتمد على الخطوط الافتراضية مع بعض التعديلات الجمالية.

    return (
        <section
            className="font-inter py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50"
            style={{
                // خلفية مزخرفة خفيفة تعطي طابعاً دينياً ودافئاً
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-paper-light.png")',
                backgroundRepeat: 'repeat',
            }}
        >
            <div className="container mx-auto max-w-7xl">

                {/* العنوان */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#0A6E3F] mb-12 relative">
                    جائزة الناشئة لحفظ القرآن الكريم
                    {/* شريط زخرفي تحت العنوان */}
                    <span className="block w-24 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full shadow-lg"></span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* العمود 1: الإطار النصي والوصف */}
                    <div className="relative p-6 md:p-10 lg:p-16">

                        {/* الإطار المزخرف (محاكاة للشكل في الصورة المرفقة) */}
                        <div
                            className="absolute inset-0 border-[6px] border-[#FFD700] rounded-3xl opacity-80 shadow-2xl"
                            style={{
                                // إضافة شكل مميز للإطار
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 5% 100%, 0 85%)',
                            }}
                        >
                            {/* زخرفة داخلية خفيفة */}
                            <div className="absolute inset-2 border-[4px] border-[#0A6E3F] rounded-2xl opacity-10"></div>
                        </div>

                        {/* المحتوى داخل الإطار */}
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-2xl font-bold text-[#0A6E3F] border-b-2 border-green-200 pb-3 inline-block">
                                تمهيد عن الجائزة
                            </h3>

                            <div className="bg-white/90 p-6 rounded-xl shadow-inner border border-green-100">
                                <p className="text-lg md:text-xl text-neutral-700 leading-loose">
                                    {prizeDescription}
                                </p>
                            </div>

                            {/* زر الانتقال لصفحة الجائزة */}
                            <div className='pt-4 text-center sm:text-right'>
                                <Link
                                    to="/prize-details"
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#0A6E3F] text-base font-extrabold rounded-full
                                        text-white bg-[#0A6E3F] hover:bg-[#085a30] transition-all duration-300 shadow-xl shadow-[#0A6E3F]/40
                                        transform hover:scale-[1.05] active:scale-95 group"
                                >
                                    <BookOpenIcon className="h-6 w-6 ml-3 text-[#FFD700] group-hover:animate-pulse" />
                                    اكتشف المزيد عن الجائزة
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* العمود 2: صور وفيكتورات (مكان مخصص) */}
                    <div className="flex justify-center items-center h-full min-h-[300px] lg:min-h-full p-4">
                        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0A6E3F]/50">

                            {/* Placeholder for Graphic/Vector 1 (Qur'an Stand) */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#f0f9ff] p-6 text-center">
                                {/* يمكن استبدال هذا برسم SVG للمصحف أو حامل المصحف (الرحل) */}
                                <BookOpenIcon className="w-20 h-20 text-[#0A6E3F] mb-4 opacity-70" />
                                <p className="text-neutral-500 font-semibold text-sm italic">
                                  <img src='/مصحف.png'></img>
                                </p>
                            </div>

                            {/* Placeholder for Graphic/Vector 2 (Children/Stars) */}
                            <div className="absolute top-4 right-4 bg-[#FFD700]/20 p-2 rounded-full transform rotate-12 shadow-md">
                                <span role="img" aria-label="نجمة" className="text-3xl">⭐</span>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-[#0A6E3F]/20 p-2 rounded-full transform -rotate-12 shadow-md">
                                <span role="img" aria-label="ولد يقرأ" className="text-3xl">👦🏽</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* زخرفة سفلية (شريط من الأنماط الهندسية) */}
            <div className="mt-16 w-full h-4 bg-repeat-x opacity-30"
                style={{
                    backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 100 100\'><path fill=\'%230A6E3F\' d=\'M50 0 L100 50 L50 100 L0 50 Z\' opacity=\'.2\'/></svg>")',
                    backgroundSize: '15px 15px'
                }}>
            </div>

        </section>
    );
};

export default QuranPrizeSection;
 