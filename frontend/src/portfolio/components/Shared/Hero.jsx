import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/hero-bg-1.jpg",
    title: "نحو جيل قرآني واعٍ",
    subtitle: "انضم إلينا في رحلة حفظ كتاب الله وتعليمه.",
    buttonText: "اكتشف البرامج",
  },
  {
    image: "/hero-bg-2.jpg",
    title: "العلم نور دربنا",
    subtitle: "نعمل على دعم وتنسيق جهود جمعيات تحفيظ القرآن الكريم.",
    buttonText: "تعرف على اللجنة",
  },
  {
    image: "/hero-bg-3.jpg",
    title: "شراكة في الخير",
    subtitle: "ساهم معنا في نشر رسالة القرآن وتعظيم أثرها في المجتمع.",
    buttonText: "ادعم جهودنا",
  },
];

// دالة مساعدة لتأخير تنفيذ الدوال (debounce)
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // تحديث الشريحة التالية: زيادة المؤشر
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [isAnimating]);

  // تحديث الشريحة السابقة: إنقاص المؤشر
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [isAnimating]);

  // الانتقال إلى شريحة محددة
  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setCurrentIndex(index);
    },
    [isAnimating, currentIndex]
  );

  // استخدام useCallback و Debounce لمنع التشغيل المتعدد للسلايدر عند الضغط المتكرر
  const debouncedNextSlide = useCallback(debounce(nextSlide, 300), [nextSlide]);
  const debouncedPrevSlide = useCallback(debounce(prevSlide, 300), [prevSlide]);
  const debouncedGoToSlide = useCallback(debounce(goToSlide, 300), [goToSlide]);

  // التأثير الزمني للتقليب كل 5 ثواني
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // إيقاف حالة التحريك بعد انتهاء الانتقال (لتحسين تجربة المستخدم)
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 800); // 800ms matching transition duration
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  // خطوط عربية جميلة
  const fontStyles = {
    fontFamily: "Tajawal, Cairo, sans-serif",
  };

  return (
    // تم تعديل الارتفاع ليناسب المساحة أسفل شريط التنقل
    <div
      className="relative w-full h-[calc(100vh-4rem)] md:h-[36rem] overflow-hidden pt-16 md:pt-0"
      style={fontStyles}
    >
      {/* ========================================
        التصميم المخصص للفاصل المنحني (Overlay Clip Path)
        ========================================
      */}
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;700&display=swap');

          /*
            hero-clip-path-overlay: تصميم منحني/مائل لـ Layer المحتوى.
            تم تعديل النقاط ليكون الشكل متناظراً ويظهر الانحناء في الوسط
            أو على الأقل يكون التركيز على وسط الشاشة.
          */
          .hero-clip-path-overlay {
             /* النقاط:
                (10% 0): يبدأ من الداخل قليلاً في الأعلى اليسار
                (90% 0): يبدأ من الداخل قليلاً في الأعلى اليمين
                (100% 50%): انحناء على اليمين (نقطة منتصف الارتفاع)
                (90% 100%): في الأسفل اليمين
                (10% 100%): في الأسفل اليسار
                (0 50%): انحناء على اليسار (نقطة منتصف الارتفاع)
                (10% 0): يعود إلى البداية
             */
             clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);
             /* استخدمنا مسار مستطيل بسيط لمنع التشتت أثناء التوسيط الكامل،
                وفيما بعد يمكن استبداله بمسار بيضاوي أو منحني أكثر تعقيداً إذا لزم الأمر */
          }
          
          .slide-transition {
              transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          }
        `}</style>
      </>

      {/* ======================================== SLIDES CONTAINER ======================================== */}
      <div
        className="flex w-full h-full absolute top-0 left-0 slide-transition"
        style={{
          width: `${slides.length * 100}%`,
          // التحريك يعتمد على الإزاحة السلبية لتحريك الحاوية إلى اليسار، مما يكشف الشريحة التالية في RTL
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full relative flex-shrink-0"
            style={{
              width: `${100 / slides.length}%`,
            }}
          >
            {/* الخلفية الكلية (الصورة) */}
            <div className="w-full h-full absolute inset-0">
              <img
                src={slide.image}
                alt={`Hero Background ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1000x1000/cccccc/333333?text=Image+Placeholder";
                }}
              />
              {/* تدرج خفيف (Overlay) فوق الصورة لتوضيح النص الأبيض في حالة الجوال */}
              <div className="absolute inset-0 bg-black opacity-50 md:opacity-40"></div>
            </div>

            {/* ======================================== OVERLAY للمحتوى النصي (الـ Layer) - توسيط كامل ======================================== */}

            {/* الحاوية الخارجية: تستخدم flex لتوسيط الطبقة البيضاء عمودياً وأفقياً */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* الطبقة البيضاء/الرمادية (الـ Layer)
               * تم تعديل العرض ليكون متجاوباً وممركزاُ باستخدام mx-auto
               */}
              <div
                className="
                  w-11/12 h-auto max-h-[55%] md:w-3/5 lg:w-2/5
                  bg-gray-50/70 md:bg-gray-50/70 
                  shadow-2xl 
                  relative mx-auto rounded-2xl
                  md:hero-clip-path-overlay
                  flex items-center justify-center 
                  
                "
              >
                {/* حاوية المحتوى النصي - ممركّزة داخلياً */}
                <div
                  className="
                    w-full max-w-xl 
                    flex flex-col items-center justify-center 
                    p-5 md:p-10 text-center 
                  "
                >
                  {/* العنوان الرئيسي: ضبط أحجام الخطوط للتجاوبية */}
                  <h1
                    className="
                      text-3xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold mb-3 
                      text-gray-900 
                      transition duration-700 ease-out
                    "
                  >
                    اللجنة التنسيقية لجمعيات
                    <br className="hidden lg:block" />
                    تحفيظ القرآن بالمملكة
                  </h1>

                  {/* العنوان الفرعي (Slide Content): ضبط أحجام الخطوط للتجاوبية */}
                  <h2
                    className="
                      text-lg sm:text-xl md:text-xl font-semibold mb-5 
                      text-gray-700
                      transition duration-700 ease-out
                    "
                  >
                    {slide.title}
                  </h2>

                  {/* الوصف: ضبط أحجام الخطوط للتجاوبية */}
                  <p
                    className="
                      text-base md:text-lg mb-8 
                      text-gray-600
                      transition duration-700 ease-out
                    "
                  >
                    {slide.subtitle}
                  </p>

                  {/* الزر */}
                  <button
                    className="
                      px-8 py-3 bg-primary-300 text-white font-bold rounded-2xl cursor-pointer
                      hover:bg-[#082b28] transition duration-300 
                      shadow-lg hover:shadow-xl transform hover:scale-105 
                      focus:outline-none focus:ring-4 focus:ring-[#2A807A]/50
                    "
                    onClick={() => console.log(`${slide.buttonText} clicked`)}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* نهاية المحتوى */}
          </div>
        ))}
      </div>

      {/* ======================================== CONTROLS (Navigation) ======================================== */}

      {/* الأسهم (يمين ويسار) - تم تصحيح الوظائف لتناسب RTL */}
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10">
        {/* السهم الأيسر (Next) */}
        <button
          onClick={debouncedNextSlide}
          className="p-3 md:p-4 bg-blue-400 cursor-pointer hover:bg-blue-400/50 text-white rounded-full transition duration-300 transform hover:scale-110 shadow-lg focus:outline-none"
          aria-label="Next Slide"
        >
          {/* الأيقونة تشير لليسار، وهو اتجاه الحركة لـ Next في RTL */}

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* السهم الأيمن (Previous) */}
        <button
          onClick={debouncedPrevSlide}
          className="p-3 md:p-4 bg-blue-400 cursor-pointer hover:bg-blue-400/50 text-white rounded-full transition duration-300 transform hover:scale-110 shadow-lg focus:outline-none"
          aria-label="Previous Slide"
        >
          {/* الأيقونة تشير لليمين، وهو اتجاه الحركة لـ Previous في RTL */}

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* النقاط السفلية (Bullets/Dots) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => debouncedGoToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 
              ${
                index === currentIndex
                  ? "bg-primary-300 w-6"
                  : "bg-gray-400 hover:bg-gray-200"
              }
              shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A807A]
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
