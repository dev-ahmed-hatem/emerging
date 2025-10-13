




// import React, { useState, useEffect } from "react";

// const QuranSlideshowSection = () => {
//   const images = [
//     "/hero1.PNG",
//     "/hero2.PNG"
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-br from-[#fdfaf5] via-[#fff] to-[#f9f6ef] flex items-center justify-center">
//       {/* خلفية زخرفية */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.png')] bg-repeat bg-center"></div>

//       {/* إطار خارجي */}
//       <div className="absolute inset-6 border-[5px] border-[#d4c291] rounded-[30px] shadow-xl pointer-events-none"></div>

//       {/* الصور */}
//       <div className="relative w-[90%] md:w-[85%] h-[85%] rounded-[25px] overflow-hidden shadow-lg">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`slide-${index}`}
//             className={`absolute inset-0 w-full h-full object-cover rounded-[25px] transition-opacity duration-[2000ms] ease-in-out ${
//               index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
//             }`}
//           />
//         ))}
//       </div>

//       {/* تراكب تظليل خفيف */}
//       <div className="absolute inset-6 bg-gradient-to-b from-[#00000020] via-transparent to-[#00000020] rounded-[25px] pointer-events-none"></div>

//       {/* مؤشرات الصور */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-500 ${
//               current === index ? "bg-[#d4c291] scale-125" : "bg-[#ffffff66]"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default QuranSlideshowSection;





////////-------------------------------------------------------------------------






// import React, { useState, useEffect } from "react";

// // ********************************************
// // المكوّن الرئيسي: QuranSlideshowSection
// // ********************************************

// const QuranSlideshowSection = () => {
//     // الألوان المستخدمة (تم دمجها مباشرة من ألوان الهوية: العنّابي الفيروزي والذهبي المطفأ)
//     const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
//     const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

//     // مسارات الصور المحدثة (يفترض أنها متوفرة في بيئة المشروع)
//     const images = [
//         "/hero1.PNG",
//         "/hero2.PNG"
//     ];

//     const [current, setCurrent] = useState(0);

//     // وظيفة التنقل التلقائي كل 5 ثوانٍ
//     useEffect(() => {
//         // تأكد من وجود صور قبل بدء المؤقت
//         if (images.length < 2) return;

//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % images.length);
//         }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ

//         // تنظيف المؤقت عند إزالة المكوّن
//         return () => clearInterval(timer);
//     }, [images.length]);

//     // وظائف التنقل اليدوي
//     const goToPrevious = () => {
//         const isFirstSlide = current === 0;
//         const newIndex = isFirstSlide ? images.length - 1 : current - 1;
//         setCurrent(newIndex);
//     };

//     const goToNext = () => {
//         const isLastSlide = current === images.length - 1;
//         const newIndex = isLastSlide ? 0 : current + 1;
//         setCurrent(newIndex);
//     };

//     // وظيفة التنقل للنقاط (Bullits)
//     const goToSlide = (index) => {
//         setCurrent(index);
//     };


//     return (
//         <section 
//             className="relative w-full overflow-hidden flex items-center justify-center" 
//             style={{ 
//                 // نعتبر ارتفاع شريط التنقل 80 بكسل، ويأخذ هذا القسم الباقي
//                 height: 'calc(100vh - 80px)', 
//                 // خلفية فاتحة وفخمة
//                 backgroundColor: '#f9f6ef', 
//             }}
//             dir="rtl" // اتجاه من اليمين لليسار
//         >
            
//             {/* 1. إطار خارجي بلون الهوية الذهبي المطفأ */}
//             <div 
//                 className="absolute inset-6 rounded-[30px] shadow-2xl pointer-events-none"
//                 style={{ border: `5px solid ${ACCENT_COLOR}` }}
//             ></div>

//             {/* 2. حاوية الصور */}
//             <div className="relative w-[95%] md:w-[90%] h-[90%] rounded-[25px] overflow-hidden shadow-2xl">
//                 {images.map((img, index) => (
//                     <img
//                         key={index}
//                         src={img}
//                         alt={`slide-${index}`}
//                         // استخدام نظام التلاشي/التكبير مع مدة انتقال أطول (2000ms) للحركة الفاخرة
//                         className={`absolute inset-0 w-full h-full object-cover rounded-[25px] 
//                                     transition-all duration-[1500ms] ease-in-out 
//                                     ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
//                         }
//                         // إضافة معالج أخطاء لسهولة التصحيح إذا لم يتم العثور على الصور
//                         onError={() => console.error(`Error loading image: ${img}`)}
//                     />
//                 ))}
//             </div>

//             {/* 3. أزرار التنقل (الأسهم) */}
            
//             {/* السهم الأيسر (للانتقال للوراء في RTL) */}
//             <button 
//                 onClick={goToPrevious} 
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full 
//                            bg-black/30 text-white transition-all duration-300 hover:bg-black/60 
//                            shadow-xl backdrop-blur-sm z-10 active:scale-95"
//                 aria-label="الشريحة السابقة"
//             >
//                 <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
//                 </svg>
//             </button>

//             {/* السهم الأيمن (للانتقال للأمام في RTL) */}
//             <button 
//                 onClick={goToNext} 
//                 className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full 
//                            bg-black/30 text-white transition-all duration-300 hover:bg-black/60 
//                            shadow-xl backdrop-blur-sm z-10 active:scale-95"
//                 aria-label="الشريحة التالية"
//             >
//                 <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path fillRule="evenodd" d="M16.28 12.28a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06L14.69 12l-6.97 6.97a.75.75 0 1 0 1.06 1.06l7.5-7.5Z" clipRule="evenodd" />
//                 </svg>
//             </button>


//             {/* 4. مؤشرات الصور (النقاط - Bullits) */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)} // تم ربط النقرة بالوظيفة الجديدة
//                         className={`w-3 h-3 rounded-full transition-all duration-500 shadow-md cursor-pointer 
//                             ${current === index 
//                                 ? "scale-150 ring-2 ring-offset-2 ring-offset-white" 
//                                 : "bg-[#ffffff80] hover:bg-[#ffffffaa]"
//                             }`}
//                         style={{
//                             backgroundColor: current === index ? ACCENT_COLOR : undefined,
//                             ringColor: PRIMARY_COLOR,
//                         }}
//                         aria-label={`الانتقال إلى الشريحة ${index + 1}`}
//                     ></button>
//                 ))}
//             </div>
            
//             {/* تراكب تظليل خفيف لـ Aesthetic */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#00000010] via-transparent to-[#00000010] pointer-events-none"></div>

//         </section>
//     );
// };

// export default QuranSlideshowSection;





//////////////----------------------------------







import React, { useState, useEffect } from "react";

// ********************************************
// المكوّن الرئيسي: QuranSlideshowSection
// ********************************************

const QuranSlideshowSection = () => {
    // الألوان المستخدمة (تم دمجها مباشرة من ألوان الهوية: العنّابي الفيروزي والذهبي المطفأ)
    const ACCENT_COLOR = '#d4c291'; // الذهبي المطفأ
    const PRIMARY_COLOR = '#057687'; // العنّابي الفيروزي الداكن

    // مسارات الصور المحدثة (يفترض أنها متوفرة في بيئة المشروع)
    const images = [
        "/hero1.PNG",
        "/hero2.PNG"
    ];

    const [current, setCurrent] = useState(0);

    // وظيفة التنقل التلقائي كل 5 ثوانٍ
    useEffect(() => {
        // تأكد من وجود صور قبل بدء المؤقت
        if (images.length < 2) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ

        // تنظيف المؤقت عند إزالة المكوّن
        return () => clearInterval(timer);
    }, [images.length]);

    // وظائف التنقل اليدوي
    const goToPrevious = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? images.length - 1 : current - 1;
        setCurrent(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = current === images.length - 1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex);
    };

    // وظيفة التنقل للنقاط (Bullits)
    const goToSlide = (index) => {
        setCurrent(index);
    };


    return (
        <section 
            className="relative w-full overflow-hidden flex items-center justify-center" 
            style={{ 
                // تم تعديل الارتفاع ليأخذ جزءًا من الشاشة (85% من ارتفاع الشاشة)
                height: '80vh', 
                // خلفية فاتحة وفخمة
                backgroundColor: '#f9f6ef', 
            }}
            dir="rtl" // اتجاه من اليمين لليسار
        >
            
            {/* 1. إطار خارجي بلون الهوية الذهبي المطفأ */}
           

            {/* 2. حاوية الصور */}
            <div className="relative w-[95%] md:w-[90%] h-[90%] rounded-[25px] overflow-hidden shadow-2xl">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        // استخدام نظام التلاشي/التكبير مع مدة انتقال أطول (2000ms) للحركة الفاخرة
                        className={`absolute inset-0 w-full h-full object-cover rounded-[25px] 
                                    transition-all duration-[1500ms] ease-in-out 
                                    ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                        }
                        // إضافة معالج أخطاء لسهولة التصحيح إذا لم يتم العثور على الصور
                        onError={() => console.error(`Error loading image: ${img}`)}
                    />
                ))}
            </div>

            {/* 3. أزرار التنقل (الأسهم) */}
            
            {/* السهم الأيسر (للانتقال للوراء في RTL) */}
            <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full 
                           bg-black/30 text-white transition-all duration-300 hover:bg-black/60 
                           shadow-xl backdrop-blur-sm z-10 active:scale-95"
                aria-label="الشريحة السابقة"
            >
               <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M16.28 12.28a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06L14.69 12l-6.97 6.97a.75.75 0 1 0 1.06 1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>

            {/* السهم الأيمن (للانتقال للأمام في RTL) */}
            <button 
                onClick={goToNext} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full 
                           bg-black/30 text-white transition-all duration-300 hover:bg-black/60 
                           shadow-xl backdrop-blur-sm z-10 active:scale-95"
                aria-label="الشريحة التالية"
            >
                
                 <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>


            {/* 4. مؤشرات الصور (النقاط - Bullits) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)} // تم ربط النقرة بالوظيفة الجديدة
                        className={`w-3 h-3 rounded-full transition-all duration-500 shadow-md cursor-pointer 
                            ${current === index 
                                ? "scale-150 ring-2 ring-offset-2 ring-offset-white" 
                                : "bg-[#ffffff80] hover:bg-[#ffffffaa]"
                            }`}
                        style={{
                            backgroundColor: current === index ? ACCENT_COLOR : undefined,
                            ringColor: PRIMARY_COLOR,
                        }}
                        aria-label={`الانتقال إلى الشريحة ${index + 1}`}
                    ></button>
                ))}
            </div>
            
            {/* تراكب تظليل خفيف لـ Aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000010] via-transparent to-[#00000010] pointer-events-none"></div>

        </section>
    );
};

export default QuranSlideshowSection;
