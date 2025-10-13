

import React from 'react';
import { Link } from 'react-router';

// ********************************************
// مُكوّن الأيقونات المُستخدمة (Navy Blue & Silver)
// ********************************************

// أيقونة نجمة (لإضفاء طابع الجوائز والتميز)
const StarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

// أيقونة المصحف (لربط الجائزة بهوية القرآن)
const QuranIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.75c-1.35 0-2.6-.5-3.54-1.44L3 15.54V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v11.04l-5.46 4.77a5.5 5.5 0 0 1-3.54 1.44ZM12 4.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 12 4.5Z" />
    </svg>
);


// ********************************************
// المكوّن الرئيسي للجائزة
// ********************************************

const QuranPrizeSection = () => {

    const prizeDescription = "جائزة الناشئة لحفظ القرآن الكريم وتلاوته وتجويده هي مسابقة قرآنية في حفظ القرآن الكريم وتلاوته وتجويده على مستوى المملكة. تستهدف البنين والبنات ضمن المرحلة الدراسية الابتدائية والتمهيدية والروضة. ويتنافس المتسابقون والمتسابقات فيها في ستة فروع محددة وتقدم لهم الجوائز القيمة.";
    
    // لوحة الألوان الجديدة (Modern/Prestige Navy Blue & Silver):
    // Primary Navy Blue: #0D47A1 (اللون الرئيسي للبروز)
    // Secondary Silver/Light Grey: #E0E0E0 (للزخرفة والإطارات)
    // Text Dark: #212121 
    // Background Light: #F5F8FF

    // ********************************************
    // تصميم الإطار النصي الديني (Islamic Arch/Mihrab Style)
    // ********************************************
    
    // استخدام clipPath لإنشاء شكل القوس/المحراب على الحافة اليمنى للنص
    const FrameStyle = {
        backgroundColor: 'white', 
        borderRadius: '0.5rem',
        boxShadow: '0 10px 30px rgba(13, 71, 161, 0.2)', // ظل بلون أزرق داكن
        border: '3px solid #0D47A1', // إطار أساسي أزرق
        position: 'relative',
        zIndex: 10,
        // شكل زخرفي على الحافة اليمنى (Mihrab/Arch shape on the right edge)
        // هذا الشكل يُعطي زاوية مميزة وغير تقليدية
        clipPath: 'polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 50%)',
    };
    
    // لإضافة حركة خفيفة عند التحويم (Hover)
    const [isHovered, setIsHovered] = React.useState(false);

    // ********************************************
    // مكان مخصص للصورة
    // ********************************************
    const imagePlaceholderUrl = 'https://placehold.co/600x400/0D47A1/E0E0E0?text=رسومات+أطفال+القرآن';


    return (
        <section 
            className="font-inter py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
                backgroundColor: '#F5F8FF', // لون خلفية أزرق فاتح جداً
            }}
        >
            <style>
                {`
                    /* حركات خفيفة للنجوم والأيقونة */
                    @keyframes pulseGlow {
                        0%, 100% { opacity: 0.8; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.05); }
                    }
                    .prize-title-icon { animation: pulseGlow 4s infinite ease-in-out; }
                    
                    /* تأثير تحويم متقدم على الإطار النصي */
                    .text-frame-hover:hover {
                        box-shadow: 0 15px 40px rgba(13, 71, 161, 0.4); 
                        transform: translateY(-5px);
                        border-color: #0080FF; /* لون أزرق لامع عند التحويم */
                    }

                    /* الزخرفة الإضافية على يمين النص */
                    .quran-decorative-border {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 100%;
                        width: 100%;
                        /* شكل محراب زخرفي باللون الأزرق الفاتح والشفافية */
                        clip-path: polygon(90% 0%, 100% 5%, 100% 95%, 90% 100%, 93% 50%); 
                        background-color: #0D47A1;
                        opacity: 0.15;
                        transition: opacity 0.3s;
                    }

                `}
            </style>
            
            <div className="container mx-auto max-w-7xl">
                
                {/* العنوان الرئيسي للقسم */}
                <h2 className="text-4xl sm:text-6xl font-extrabold text-center text-[#0D47A1] mb-20 relative drop-shadow-lg" dir="rtl">
                    <StarIcon className='h-10 w-10 text-[#0D47A1] mx-auto mb-2 prize-title-icon' />
                    جائزة الناشئة لحفظ القرآن الكريم
                    {/* شريط زخرفي تحت العنوان */}
                    <span className="block w-40 h-1.5 bg-[#E0E0E0] mx-auto mt-4 rounded-full shadow-xl"></span>
                </h2>

                {/* التكوين: صورة يسار، النص والإطار يمين (في صف واحد) */}
                <div className="grid lg:grid-cols-3 gap-12 items-start" dir="rtl">
                    
                    {/* العمود 1 (2/3): الإطار النصي المزخرف في اليمين */}
                    <div 
                        className="lg:col-span-2 relative p-8 md:p-12 transition-all duration-300 text-frame-hover" 
                        style={FrameStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        
                        {/* زخرفة داخلية فضية/زرقاء - خلفية شفافة */}
                        <div className="quran-decorative-border"></div>
                        
                        {/* العنوان الداخلي (تمهيد عن الجائزة) بتصميم راقٍ */}
                        <div className="text-right mb-8 relative z-20">
                             <div className="inline-block px-8 py-2 bg-[#0D47A1] rounded-l-lg shadow-xl border-y-2 border-r-4 border-[#E0E0E0]">
                                <h3 className="text-xl font-black text-white tracking-wider drop-shadow-md">
                                    تعريف بالمسابقة وأهدافها
                                </h3>
                            </div>
                        </div>

                        {/* المحتوى داخل الإطار */}
                        <div className="space-y-6 relative z-20">
                            {/* النص بخط واضح ومريح */}
                            <p className="text-lg md:text-xl text-[#212121] font-medium leading-relaxed text-justify pr-4" dir="rtl">
                                {prizeDescription}
                            </p>
                            
                            {/* زخرفة سفلية للنص - بصيغة البسملة الأنيقة */}
                            <div className="mt-10 pt-4 border-t-2 border-[#E0E0E0] flex justify-center">
                                <span className="text-4xl text-[#0D47A1] drop-shadow-sm font-serif italic [text-shadow:1px_1px_2px_#E0E0E0]">
                                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                                </span>
                            </div>
                        </div>


                        {/* زر الانتقال لصفحة الجائزة */}
                        <div className='pt-12 text-center relative z-20'>
                            <Link
                                to="/prize-details"
                                className="inline-flex items-center justify-center px-12 py-4 text-lg font-black rounded-full 
                                    text-white bg-[#0D47A1] border-4 border-[#E0E0E0] hover:bg-[#093581] transition-all duration-300 shadow-xl shadow-[#0D47A1]/50 
                                    transform hover:scale-[1.05] active:scale-95 group relative overflow-hidden"
                            >
                                <QuranIcon className="h-7 w-7 ml-3 text-[#E0E0E0] group-hover:text-white transition-colors" />
                                لمعرفة المزيد عن الجائزة
                            </Link>
                        </div>
                    </div>

                    {/* العمود 2 (1/3): مكان مخصص لصورة المستخدم (اليسار) */}
                    <div className="lg:col-span-1 flex justify-center items-center h-full min-h-[450px] p-4">
                        {/* استخدام عنصر <img> لسهولة استبدال الرابط */}
                        <img 
                            src={imagePlaceholderUrl}
                            alt="صورة جرافيكية تعبر عن حفظ القرآن الكريم"
                            className="w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-[#0D47A1]/70 transition-transform duration-500 hover:scale-[1.03]"
                            style={{ aspectRatio: '4/3' }}
                            // Placeholder attributes for error handling
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = 'https://placehold.co/600x400/0D47A1/E0E0E0?text=خطأ+في+تحميل+الصورة';
                            }}
                        />
                         {/* تلميح للمستخدم لاستبدال الصورة */}
                         <p className="absolute bottom-10 text-sm text-[#212121] bg-[#F5F8FF]/80 p-1 rounded-lg border border-[#0D47A1]">
                            **تنبيه:** يرجى استبدال رابط الصورة الافتراضي.
                        </p>
                    </div>

                </div>
            </div>
            
            {/* زخرفة سفلية فاصلة */}
            <div className="mt-28 w-full h-6 bg-[#0D47A1] border-t-4 border-[#E0E0E0] shadow-inner">
            </div>

        </section>
    );
};

export default QuranPrizeSection;




////////------------------------

// // src/components/Home/QuranPrizeSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const QuranPrizeSection = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-[#f6f2e8] via-[#f3ecdc] to-[#efe6d3] py-20 overflow-hidden">
//       {/* خلفية زخرفية */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/images/islamic-pattern.png')] bg-repeat bg-center"></div>

//       {/* إطار خارجي */}
//       <div className="relative mx-auto max-w-6xl px-6 md:px-12 border-[3px] border-[#c2a25f] rounded-[2rem] shadow-[0_0_20px_rgba(194,162,95,0.3)] bg-white/70 backdrop-blur-sm">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
          
//           {/* النص */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 space-y-6 text-center md:text-right"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#3e2e0f] mb-4">
//               جائزة الناشئة لحفظ القرآن الكريم وتلاوته وتجويده
//             </h2>
//             <p className="text-[#5b4a1e] leading-relaxed text-lg">
//               جائزة الناشئة لحفظ القرآن الكريم وتلاوته وتجويده هي مسابقة قرآنية
//               في حفظ القرآن الكريم وتلاوته وتجويده على مستوى المملكة. تستهدف
//               البنين والبنات ضمن المرحلة الدراسية الابتدائية والتمهيدية والروضة،
//               ويتنافس المتسابقون والمتسابقات فيها في ستة فروع محددة، وتُقدَّم لهم
//               الجوائز القيمة.
//             </p>

//             {/* زر بسيط */}
//             <button
//               onClick={() => (window.location.href = "/award-details")}
//               className="bg-[#c2a25f] hover:bg-[#b29250] text-white font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 shadow-md hover:shadow-[#c2a25f]/40"
//             >
//               اعرف المزيد
//             </button>
//           </motion.div>

//           {/* صورة جرافيك */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 flex justify-center"
//           >
//             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#f7f1e1] to-[#f0e5c3] shadow-inner border-[4px] border-[#c2a25f] overflow-hidden flex items-center justify-center">
//               <img
//                 src="/مصحف.png"
//                 alt="Quran Graphic"
//                 className="w-56 md:w-72 object-contain"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuranPrizeSection;
