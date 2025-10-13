import React from 'react';

// الأيقونات المستخدمة (يمكن استخدام أيقونات lucide-react لو كانت متاحة، لكن سنستخدم SVG هنا لضمان العمل)
const QuoteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 11H7a1 1 0 0 0-1 1v3a2 2 0 0 1-2 2c0 2.76 1.12 5.26 2.7 7H13"></path>
    <path d="M19 11H16a1 1 0 0 0-1 1v3a2 2 0 0 1-2 2c0 2.76 1.12 5.26 2.7 7H22"></path>
  </svg>
);

const AboutSection = () => {
    
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

                  /* تأثير بسيط للصورة عند التحويم */
                  .image-hover-effect:hover {
                    transform: scale(1.03) rotate(1deg);
                    box-shadow: 0 20px 25px -5px rgba(42, 128, 122, 0.5), 0 10px 10px -5px rgba(42, 128, 122, 0.04);
                  }
                  .image-hover-effect {
                    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease-in-out;
                  }

                  /* تأثير خلفية مميز مع تدرج لوني خفيف للخلفية */
                  .section-bg {
                    background: linear-gradient(145deg, #f7fcfc, #eef9f9); /* تدرج لوني خفيف مائل */
                  }

                  /* تنسيق خاص لعنوان "عن اللجنة" */
                  .decorated-title {
                    position: relative;
                    display: inline-block;
                    padding: 0 1rem;
                  }
                  .decorated-title::before, .decorated-title::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 30px; /* طول الهامش/الحد */
                    height: 4px;
                    background-color: #2A807A; /* لون الهوية */
                    border-radius: 2px;
                    transform: translateY(-50%);
                  }
                  .decorated-title::before {
                    right: 100%; /* وضع الحد على يمين النص */
                  }
                  .decorated-title::after {
                    left: 100%; /* وضع الحد على يسار النص */
                  }

                `}
            </style>

            {/* الحاوية الرئيسية للسكشن - خلفية مميزة ومساحة داخلية */}
            <section 
                className="section-bg py-16 md:py-24" 
                style={fontStyles}
            >
                {/* حاوية المحتوى الثابتة - ممركّزة ومتجاوبة */}
                <div className="container mx-auto px-4 md:px-8">
                    
                    {/* الشقين: Text (اليمين) و Image (اليسار) */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        
                        {/* ----------------- الشق الأول: النص والمعلومات (اليمين) ----------------- */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            
                            {/* العنوان المُزخرف */}
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-neutral-800 text-center lg:text-right">
                                <span className="decorated-title">عن اللجنة</span>
                            </h2>
                            
                            {/* إطار النص بالكامل */}
                            <div className="p-6 md:p-8 bg-white rounded-3xl shadow-xl border-t-4 border-[#2A807A] transition duration-500 hover:shadow-2xl">
                                
                                {/* اقتباس (Quotes) */}
                                <div className="mb-6 border-r-4 border-[#2A807A]/50 pr-4">
                                    <QuoteIcon className="w-8 h-8 text-[#2A807A] mb-2 opacity-75"/>
                                    <p className="text-lg italic font-medium text-gray-700">
                                        "من أعظم الأعمال وأجلها، رعاية كتاب الله عز وجل حفظاً وتدبراً وعملاً، وهو أساس نهضتنا وقوتنا."
                                    </p>
                                </div>

                                {/* النص التعبيري عن تاريخ وعمل اللجنة */}
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 border-b pb-4 border-gray-100">
                                    تأسست اللجنة التنسيقية لجمعيات تحفيظ القرآن بالمملكة بهدف توحيد الجهود، وتعظيم الأثر، ورفع مستوى الأداء للجمعيات الخيرية العاملة في ميدان خدمة القرآن الكريم. نعمل على تقديم الدعم   والاستشارات المتخصصة، والبرامج التدريبية التي تضمن تحقيق رؤية قرآنية شاملة.
                                </p>
                                
                                {/* أهداف اللجنة (شرح مبسط) */}
                                <ul className="space-y-3 text-sm text-gray-700 list-none mb-8">
                                    <li className="flex items-start">
                                        <span className="text-[#2A807A] font-bold text-xl ml-2 leading-none">✓</span>
                                        <span className="font-semibold">دعم الجمعيات:</span> توفير الموارد المالية والبشرية اللازمة لاستدامة العمل القرآني.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2A807A] font-bold text-xl ml-2 leading-none">✓</span>
                                        <span className="font-semibold">تنسيق الجهود:</span> بناء شبكات تواصل فعالة بين الجمعيات لتبادل الخبرات.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2A807A] font-bold text-xl ml-2 leading-none">✓</span>
                                        <span className="font-semibold">رفع الكفاءة:</span> تقديم برامج تدريبية متخصصة للمعلمين والإداريين.
                                    </li>
                                </ul>

                                {/* زر "اعرف المزيد" */}
                                <a 
                                    href="/about" 
                                    className="inline-flex items-center px-6 py-3 border-2 border-[#2A807A] text-base font-bold rounded-xl 
                                      text-[#2A807A] bg-white hover:bg-[#2A807A] hover:text-white transition-all duration-300 shadow-md 
                                      transform hover:scale-[1.03] active:scale-95"
                                >
                                    اعرف المزيد عن رؤيتنا
                                </a>
                            </div>
                        </div>

                        {/* ----------------- الشق الثاني: الصورة الاحترافية (اليسار) ----------------- */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative group">
                            
                            {/* إطار زخرفي خارجي بلون الهوية */}
                            <div className="absolute inset-0 -top-4 -bottom-4 -right-4 -left-4 
                                bg-[#2A807A] opacity-10 rounded-[2.5rem] 
                                transition duration-700 group-hover:opacity-20 hidden md:block"
                            ></div>
                            
                            {/* الصورة مع تأثير الحركة والزخرفة */}
                            <img
                                src="/hero-bg-2.jpg" // استخدام صورة من بيانات Hero2 كبديل
                                alt="مجموعة من الطلاب يدرسون القرآن الكريم"
                                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 
                                  image-hover-effect
                                  border-4 border-white"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "/hero-bg-1.jpg";
                                }}
                            />
                            
                            {/* نقطة زخرفية في الزاوية */}
                            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#2A807A] rounded-full z-20 shadow-lg hidden md:block transition duration-500 group-hover:scale-125"></div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;



