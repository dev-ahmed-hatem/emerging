import React from "react";

// الأيقونات المستخدمة (Quotes)
const QuoteIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 11H7a1 1 0 0 0-1 1v3a2 2 0 0 1-2 2c0 2.76 1.12 5.26 2.7 7H13"></path>
    <path d="M19 11H16a1 1 0 0 0-1 1v3a2 2 0 0 1-2 2c0 2.76 1.12 5.26 2.7 7H22"></path>
  </svg>
);

const AboutSection = () => {
  // الألوان الرئيسية المستخدمة:
  // primary: #2A807A
  // secondary: #F59E0B
  const primaryColor = "#2A807A";
  const secondaryColor = "#F59E0B";
  const lightBg = "#f7fcfc"; // خلفية فاتحة جداً مائلة للأخضر

  // خطوط عربية جميلة
  const fontStyles = {
    fontFamily: "Tajawal, Cairo, sans-serif",
  };

  return (
    <>
      {/* ========================================
              CSS مخصص للحركات والزخرفة
              ========================================
            */}
      <style>
        {`
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;700&display=swap');

                  /* 1. تأثير 3D Tilt للصورة عند التحويم */
                  .image-tilt-effect {
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.6s ease-in-out;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                  }
                  .image-tilt-effect:hover {
                    transform: rotateY(3deg) rotateX(1deg) scale(1.05); /* إمالة ثلاثية الأبعاد */
                    box-shadow: 0 30px 60px -12px rgba(42, 128, 122, 0.6), 0 18px 36px -18px rgba(42, 128, 122, 0.1);
                  }

                  /* 2. تأثير خلفية مميز مع تدرج لوني خفيف للخلفية */
                  .section-bg {
                    background-color: ${lightBg};
                  }

                  /* 3. تنسيق عنوان احترافي بفاصل مرن */
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
                      width: 80px;
                      height: 5px;
                      background-color: ${primaryColor};
                      border-radius: 3px;
                      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                  }

                

                `}
      </style>

      {/* فاصل الموجة العلوية لمرونة الانتقال من السكشن السابق */}

      {/* الحاوية الرئيسية للسكشن - خلفية مميزة ومساحة داخلية */}
      <section
        className="section-bg pt-8 pb-16 md:pt-16 md:pb-24"
        style={fontStyles}
      >
        {/* حاوية العنوان الموحد */}
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <div className="elegant-title-container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
              <span className="text-secondary-600">رسالتنا</span>: عن اللجنة
              التنسيقية
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              شراكة فاعلة لخدمة كتاب الله وتعظيم أثره في بناء المجتمع.
            </p>
          </div>
        </div>

        {/* حاوية المحتوى الثابتة - ممركّزة ومتجاوبة */}
        <div className="container mx-auto px-4 md:px-8">
          {/* الشقين: Text (اليمين) و Image (اليسار) */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* ----------------- الشق الأول: النص والمعلومات (اليمين) ----------------- */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              {/* إطار النص بالكامل بتصميم انسيابي */}
              <div className="p-6 md:p-10 bg-white rounded-3xl shadow-2xl border-r-4 border-[#2A807A] transition duration-500 hover:shadow-3xl">
                {/* اقتباس (Quotes) */}
                <div className="mb-6 border-b-2 border-gray-100 pb-4">
                  <QuoteIcon className="w-10 h-10 text-primary-500 mb-3 opacity-90" />
                  <p className="text-xl italic font-medium text-gray-700 leading-snug">
                    "من أعظم الأعمال وأجلها، رعاية كتاب الله عز وجل حفظاً
                    وتدبراً وعملاً، وهو أساس نهضتنا وقوتنا ومستقبل أمتنا
                    المشرق."
                  </p>
                </div>

                {/* النص التعبيري عن تاريخ وعمل اللجنة */}
                <p className="text-gray-600 text-base md:text-lg leading-loose mb-6 text-justify ">
                  <span className="font-bold text-primary-600">
                    تأسست اللجنة التنسيقية
                  </span>{" "}
                  لجمعيات تحفيظ القرآن بالمملكة بهدف توحيد الجهود، وتعظيم الأثر،
                  ورفع مستوى الأداء للجمعيات الخيرية العاملة في ميدان خدمة
                  القرآن الكريم. نعمل على تقديم الدعم  ، والاستشارات
                  المتخصصة، والبرامج التدريبية التي تضمن تحقيق رؤية قرآنية شاملة
                  ومؤثرة في كل أنحاء المملكة.
                </p>

                {/* أهداف اللجنة (شرح مبسط) - تصميم أعمدة مرن */}
                <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-8 border-t pt-4 border-gray-100">
                  <div className="flex items-start">
                    <span className="text-primary-600 font-bold text-lg ml-2 leading-none">
                      ★
                    </span>
                    <span className="font-semibold">دعم الجمعيات:</span> توفير
                    الموارد اللازمة لاستدامة العمل.
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 font-bold text-lg ml-2 leading-none">
                      ★
                    </span>
                    <span className="font-semibold ">تنسيق الجهود:</span> بناء
                    شبكات تواصل لتبادل الخبرات.
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 font-bold text-lg ml-2 leading-none">
                      ★
                    </span>
                    <span className="font-semibold">رفع الكفاءة:</span> برامج
                    تدريبية متخصصة للمعلمين والإداريين.
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 font-bold text-lg ml-2 leading-none">
                      ★
                    </span>
                    <span className="font-semibold">تعظيم الأثر:</span> الوصول
                    إلى شرائح مجتمعية أوسع.
                  </div>
                </div>

                {/* زر "اعرف المزيد" بتصميم أكثر بروزاً */}
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-transparent text-base font-bold rounded-2xl
                                      text-white bg-primary-400 hover:bg-primary-300 transition-all duration-300 shadow-xl shadow-[#2A807A]/40
                                      transform hover:scale-[1.05] active:scale-95 group"
                >
                  اعرف المزيد عن رؤيتنا
                  {/* سهم متحرك */}
                  <svg
                    className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8L19 12M19 12L15 16M19 12H5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ----------------- الشق الثاني: الصورة الاحترافية (اليسار) ----------------- */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative flex justify-center lg:justify-end">
              {/* حاوية الصورة لتطبيق الـ Tilt Effect */}
              <div className="relative max-w-lg w-full">
                {/* إطار زخرفي خارجي بلون الهوية (طبقة أولى) */}
                <div
                  className="absolute inset-0 -top-6 -bottom-6 -right-6 -left-6
                                    bg-[#2A807A] opacity-5 rounded-[3rem]
                                    transition duration-700 group-hover:opacity-10 hidden md:block"
                ></div>

                {/* الصورة مع تأثير 3D Tilt والزخرفة */}
                <img
                  src="/hero-bg-3.jpg" // استخدام صورة بديلة احترافية
                  alt="فريق قيادي يتباحث حول الرؤية القرآنية"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10
                                      image-tilt-effect
                                      border-8 border-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/800x600/2A807A/ffffff?text=Visionary+Leadership";
                  }}
                />

                {/* عنصر زخرفي متحرك في الزاوية */}
                <div className="absolute -top-4 right-4 w-10 h-10 bg-secondary-600 rounded-lg shadow-lg z-20 transition duration-700 hover:rotate-45 transform"></div>
                <div className="absolute -bottom-4 left-4 w-16 h-1 bg-[#2A807A] rounded-full z-20 transition duration-700 hover:w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* فاصل الموجة السفلية لمرونة الانتقال للسكشن التالي (لون الموجة يتطابق مع خلفية السكشن الحالي) */}
      <div className="wavy-divider-top wavy-divider-bottom"></div>
    </>
  );
};

export default AboutSection;
