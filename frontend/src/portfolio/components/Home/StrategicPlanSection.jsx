import React from "react";

const StrategicPlanSection = () => {
  // الألوان الرئيسية المستخدمة من الهوية
  const primaryColor = "#246efe"; // الأزرق الأساسي
  const secondaryColor = "#246efe"; // السيان الثانوي
  const neutralBg = "#ffffff"; // الخلفية البيضاء
  const softNeutralBg = "#f9fafb"; // لون خلفية السكشن

  // خطوط عربية جميلة
  const fontStyles = {
    fontFamily: "var(--font-committee-primary, 'Cairo', 'Almarai', sans-serif)",
  };

  // عناصر الخطة الاستراتيجية الثمانية
  const planItems = [
    "إعداد الملتقى األول لجمعيات تحفيظ القرآن بالمملكة",
    "توقيع عشر شراكات دعم وتمويل للمجلس",
    "اإلنتهاء من الدراسة المسحية الميدانية",
    "زيادة عدد الجمعيات المشاركة في اللجنة التنسيقية",
    "زيادة عدد الجمعيات المشاركة في الصندوق الوقفي الاستثماري.",
    "عقد (13) لقاء في مناطق المملكة لجمعيات التحفيظ",
    "تنفيذ أربع مبادرات استراتيجية نوعية على مستوى جمعيات التحفيظ في المملكة",
    "تحويل اللجنة التنسيقة إلى مجلس تخصصي",
  ];

  // مكون بطاقة الهدف الفردي
  const PlanCard = ({ text, index }) => {
    const number = index + 1;

    // تناوب الألوان بين الأزرق والسيان
    const itemColor = number % 2 === 1 ? primaryColor : secondaryColor;
    const numberBg = number % 2 === 1 ? primaryColor : secondaryColor;

    return (
      <div
        className="plan-card bg-white p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 transform cursor-default relative overflow-hidden"
        style={{
          // تحديد اللون الرئيسي للعنصر
          "--item-color": itemColor,
        }}
      >
        {/* تأثير الإطار عند التحويم */}
        <div className="absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-300 plan-card-border"></div>

        {/* الرقم التسلسلي البارز */}
        <div
          className="plan-number-badge w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                                rounded-full text-white text-2xl md:text-3xl font-extrabold mb-4 transition-transform duration-300"
          style={{
            backgroundColor: numberBg,
            boxShadow: `0 8px 15px -5px ${itemColor}99`,
            // تأثير التحريك عند التحويم
            transform: "translateY(0)",
          }}
        >
          {number}
        </div>

        {/* نص الهدف */}
        <h3 className="text-lg md:text-xl font-bold leading-relaxed text-gray-800 transition-colors duration-300">
          {text}
        </h3>
      </div>
    );
  };

  return (
    <>
      {/* ========================================
              CSS مخصص للحركات والزخرفة
              ========================================
            */}
      <style>
        {`
                  /* استيراد الخطوط */
                  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap');

                  /* 1. تنسيق العنوان الرئيسي */
                  .elegant-title-container {
                      position: relative;
                      padding-bottom: 2.5rem;
                  }
                  .elegant-title-container::after {
                      content: '';
                      position: absolute;
                      bottom: 1rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 150px;
                      height: 4px;
                      background-color: ${primaryColor};
                      border-radius: 3px;
                  }
                  .elegant-title-container::before {
                      content: '';
                      position: absolute;
                      bottom: 0.75rem;
                      right: 50%;
                      transform: translateX(50%);
                      width: 60px;
                      height: 4px;
                      background-color: ${secondaryColor};
                      border-radius: 3px;
                  }

                  /* 2. تنسيق السكشن والحاوية الرئيسية */
                  .section-plan-bg {
                    background-color: ${softNeutralBg};
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                  }
                  .plan-container {
                    /* ظل خفيف للحاوية الرئيسية لتعطي تأثير "containered" */
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                  }

                  /* 3. تأثير التحويم على البطاقة */
                  .plan-card:hover {
                    /* رفع خفيف للبطاقة */
                    transform: translateY(-5px);
                    /* ظل أقوى عند التحويم */
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                  }

                  /* 4. تأثير إطار لون الهوية عند التحويم */
                  .plan-card:hover .plan-card-border {
                    /* استخدام متغير اللون المعرّف في الـ JSX */
                    border-color: var(--item-color);
                    transform: scale(1.02); /* تكبير خفيف للإطار */
                  }

                  /* 5. تأثير تحريك الرقم عند التحويم */
                  .plan-card:hover .plan-number-badge {
                    transform: translateY(-5px);
                  }

                  /* 6. تأثير تغيير لون النص عند التحويم */
                  .plan-card:hover h3 {
                    color: var(--item-color);
                  }

                `}
      </style>

      {/* السكشن الرئيسي */}
      <section className="section-plan-bg" style={fontStyles}>
        <div className="container mx-auto px-4 md:px-8">
          {/* العنوان الرئيسي */}
          <div className="elegant-title-container mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
              الخطة الاستراتيجية والأهداف
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
              الأهداف الثمانية التي تسعى اللجنة التنسيقية لتحقيقها خلال الفترة
              القادمة.
            </p>
          </div>

          {/* حاوية الخطة - (Containered) */}
          <div className="plan-container bg-white rounded-2xl p-6 md:p-12">
            {/* شبكة الأهداف (4 أعمدة في سطح المكتب، 2 في التابلت، 1 في الهاتف) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {planItems.map((item, index) => (
                <PlanCard key={index} text={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrategicPlanSection;
