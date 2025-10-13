
import React from "react";
import { Link } from "react-router-dom";

// ********************************************
// مُكوّن الأيقونات المُستخدمة (Gold/Bronze Color)
// ********************************************

// أيقونة الكتاب/المصحف - تعكس الموضوع الديني
const BookOpenIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.75c-1.35 0-2.6-.5-3.54-1.44L3 15.54V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v11.04l-5.46 4.77a5.5 5.5 0 0 1-3.54 1.44Z" />
    <path
      fillRule="evenodd"
      d="M12 21.75c-1.35 0-2.6-.5-3.54-1.44L3 15.54V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v11.04l-5.46 4.77a5.5 5.5 0 0 1-3.54 1.44ZM12 4.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 12 4.5Z"
      clipRule="evenodd"
    />
  </svg>
);

// ********************************************
// المكوّن الرئيسي للجائزة
// ********************************************

const QuranPrizeSection = () => {
  // الوصف المستمد من الصورة المرفقة
  const prizeDescription =
    "جائزة الناشئة لحفظ القرآن الكريم وتلاوته وتجويده هي مسابقة قرآنية في حفظ القرآن الكريم وتلاوته وتجويده على مستوى المملكة. تستهدف البنين والبنات ضمن المرحلة الدراسية الابتدائية والتمهيدية والروضة. ويتنافس المتسابقون والمتسابقات فيها في ستة فروع محددة وتقدم لهم الجوائز القيمة.";

  // الألوان الجديدة ذات الطابع الديني:
  // Green (Deep Teal): #055C4C
  // Gold/Bronze: #C6A969

  // ********************************************
  // تصميم الإطار المزخرف (Islamic Frame Style)
  // ********************************************
  const FrameStyle = {
    // خلفية الإطار (تحاكي ورق البردي الفاتح)
    backgroundColor: "#FCFAF0",
    borderRadius: "1rem",
    // ظل خارجي وداخلي يمنح شعوراً بالعمق والزخرفة
    boxShadow:
      "0 10px 25px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.05)",
    // إطار ذهبي خارجي
    border: "3px solid #C6A969",
  };

  const textContainerStyle = {
    // إطار أخضر داخلي
    border: "2px solid #055C4C",
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "0.75rem",
    // إضاءة ذهبية داخلية (تحاكي الإضاءة/التذهيب في المخطوطات)
    boxShadow: "inset 0 0 15px rgba(198, 169, 105, 0.5)",
  };

  return (
    <section
      className="font-inter py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        // خلفية مزخرفة إسلامية (هندسية)
        backgroundColor: "#F7F4EB", // لون كريمي فاتح
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><path fill='%23C6A969' d='M50 0 L100 50 L50 100 L0 50 Z' opacity='.05'/><path fill='%23055C4C' d='M50 10 L90 50 L50 90 L10 50 Z' opacity='.05'/></svg>\")",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* العنوان الرئيسي */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#055C4C] mb-12 relative drop-shadow-md">
          الجائزة الناشئة لحفظ القرآن الكريم
          {/* شريط زخرفي تحت العنوان */}
          <span className="block w-24 h-1 bg-[#C6A969] mx-auto mt-4 rounded-full shadow-lg"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* العمود 1: الإطار النصي والوصف */}
          <div className="relative p-4 md:p-8" style={FrameStyle}>
            {/* العنوان الداخلي (تمهيد عن الجائزة) بتصميم بارز */}
            <div className="text-center mb-6">
              <div className="inline-block px-6 py-2 bg-[#055C4C] rounded-full shadow-lg border-2 border-[#C6A969]">
                <h3 className="text-xl font-bold text-white tracking-wider">
                  تمهيد عن الجائزة
                </h3>
              </div>
            </div>

            {/* المحتوى داخل الإطار */}
            <div style={textContainerStyle}>
              <span className="text-4xl text-[#C6A969] drop-shadow-sm">﷽</span>
              {/* زخرفة سفلية للنص */}
              <div className="mt-6 pt-3 border-t border-[#C6A969]/50 flex justify-center">
                {/* استخدام البسملة كرمز ديني زخرفي */}
              </div>
              <p
                className="text-lg md:text-xl text-gray-800 leading-loose text-justify"
                dir="rtl"
              >
                {prizeDescription}
              </p>
            </div>

            {/* زر الانتقال لصفحة الجائزة */}
            <div className="pt-8 text-center">
              {/* زر بتصميم فخم ومناسب للهوية الجديدة */}
              <Link
                to="/prize-details"
                className="inline-flex items-center justify-center px-10 py-3 text-base font-extrabold rounded-lg 
                                    text-white bg-[#C6A969] border-2 border-[#055C4C] hover:bg-[#b0965e] transition-all duration-300 shadow-xl shadow-[#C6A969]/50 
                                    transform hover:scale-[1.02] active:scale-95 group"
              >
                <BookOpenIcon className="h-6 w-6 ml-3 text-[#055C4C] group-hover:animate-pulse" />
                اكتشف المزيد عن الجائزة
              </Link>
            </div>
          </div>

          {/* العمود 2: صور وفيكتورات (مكان مخصص) */}
          <div className="flex justify-center items-center h-full min-h-[350px] lg:min-h-full p-4">
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[#C6A969]/50 bg-white p-6">
              {/* SVG يمثل الرحل (حامل المصحف) مع المصحف المفتوح - أصبح أكثر بروزاً */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <svg
                  className="w-40 h-40 text-[#055C4C] mb-4 drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stand (Rahle) */}
                  <path d="M10 21H14V17H10V21Z" fill="#C6A969" />
                  <path d="M9 17L3 5H21L15 17H9Z" fill="#055C4C" />
                  {/* Open Book */}
                  <path
                    d="M5 6L12 11M19 6L12 11M12 11V16"
                    stroke="#C6A969"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 6H19V11H5V6Z"
                    fill="#FCFAF0"
                    stroke="#C6A969"
                    strokeWidth="1"
                  />
                </svg>

                <p className="text-gray-600 font-extrabold text-lg italic mt-4">
                
                </p>
              </div>

              {/* عناصر زخرفية بلمسة طفولية */}
              <div className="absolute top-0 right-0 p-3 bg-[#055C4C]/10 rounded-bl-full shadow-inner">
                <span role="img" aria-label="طفل سعيد" className="text-4xl">
                  👧🏻
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-3 bg-[#C6A969]/10 rounded-tr-full shadow-inner">
                <span role="img" aria-label="نجمة" className="text-4xl">
                  🌟
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* زخرفة سفلية (شريط من الأنماط الهندسية) - أكثر بروزاً وفخامة */}
      <div
        className="mt-20 w-full h-8 bg-repeat-x border-t-4 border-[#C6A969] shadow-inner"
        style={{
          backgroundColor: "#055C4C",
          // زخرفة هندسية بسيطة ومتكررة
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 100 100'><path fill='%23FCFAF0' d='M50 0 L100 50 L50 100 L0 50 Z' opacity='.3'/></svg>\")",
          backgroundSize: "15px 15px",
        }}
      ></div>
    </section>
  );
};

export default QuranPrizeSection;



//---------------------































