import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrizeSection() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-[linear-gradient(180deg,#fffaf6,rgba(250,245,240,0.7))] py-16 md:py-24"
      aria-labelledby="prize-heading"
    >
      {/* Decor background SVG (light geometric/islamic pattern) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="hidden lg:block absolute right-0 top-8 w-[520px] opacity-10"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#F8F6F3" />
              <stop offset="1" stopColor="#FCF9F7" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#g1)" />
          {/* subtle pattern */}
          <g fill="#EDE6DA">
            <path d="M60 120h20v20H60z" />
            <path d="M120 60h20v20h-20z" />
            {/* repeated small decor could be added */}
          </g>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12">
          {/* left: image / graphic area */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div
              className="w-full max-w-xl    transform transition-transform duration-700   flex items-center justify-center"
              role="img"
              aria-label="رسوم الجائزة — صورة توضيحية"
            >
              {/* placeholder: سيستبدل لاحقاً بالرسوم الحقيقية */}
              <img
                src="/مصحف.png"
                alt="رمز الجائزة الناشئة"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/efe3c9/886b3b?text=Prize+Graphic";
                }}
              />

              {/* soft decorative corner */}
              <div className="absolute top-4 left-4 w-16 h-16 rounded-bl-[40px] bg-[#efe3c9] opacity-60" />
            </div>
          </div>

          {/* right: framed text panel (for RTL -> appears right) */}
          <div className="md:w-1/2 flex items-center">
            <div className="w-full">
              {/* small ribbon title */}
              <div className="inline-flex items-center mb-6">
                <span className="bg-[#1f5360] text-white px-4 py-2 rounded-r-md rounded-l-[6px] text-sm font-bold">
                  تمهيد عن الجائزة
                </span>
                <span className="ml-3 hidden sm:inline-block h-8 w-8 rounded-lg bg-[#e9dcc4]" />
              </div>

              {/* framed cream panel */}
              <div
                className="relative bg-white/95 border border-[#efe3c9] rounded-2xl p-8 md:p-10 shadow-lg"
                style={{ boxShadow: "0 18px 50px rgba(33,23,8,0.06)" }}
              >
                {/* decorative corners */}
                <div className="absolute top-0 right-0 w-10 h-10 rounded-bl-xl bg-[#f3ead6]" />
                <div className="absolute bottom-0 left-0 w-10 h-10 rounded-tr-xl bg-[#f3ead6]" />

                {/* quote mark on top-left */}
                <div className="absolute -top-6 left-6 text-7xl text-[#efe3c9] select-none">
                  “
                </div>

                <h3
                  id="prize-heading"
                  className="text-2xl md:text-3xl font-extrabold text-[#8b5a21] mb-4 leading-tight"
                >
                  جائزة الناشئة لحفظ القرآن الكريم
                </h3>

                <p className="text-neutral-700 leading-relaxed text-base md:text-lg mb-6">
                  جائـــزة الناشـــئة لحفـــظ القـــرآن الكريـــم وتـــلاوته
                  وتجويـــده هي مســـابقة قرآنيـــة في حفـــظ القـــرآن
                  الكريـــم وتلاوتـــه وتجويده على مســـتوى اململكة. تســـتهدف
                  البنين والبنات ضمن املرحلة الدراســـية الابتدائيـــة
                  والتمهيديـــة والروضـــة، ويتنافـــس املتســـابقون
                  واملتســـابقات فيهـــا في ســـتة فـــروع محددة وتقدم لهم
                  الجوائز القيمة.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[#d6b77c] grid place-items-center text-white font-bold">
                      ✓
                    </span>
                    <span className="text-neutral-700">
                      برامج تعليمية مخصصة
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[#d6b77c] grid place-items-center text-white font-bold">
                      ✓
                    </span>
                    <span className="text-neutral-700">
                      جوائز تشجيعية ومراكز تدريب
                    </span>
                  </li>
                </ul>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate("/prize")}
                    className="inline-flex cursor-pointer items-center gap-3 bg-[#b07e3a] hover:bg-[#a06f2e] text-white font-semibold px-6 py-2 rounded-xl shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#b07e3a]/30"
                  >
                    معرفة المزيد عن الجائزة
                     
                  </button>

                  <a
                    href="#contact"
                    className="text-sm text-[#8b5a21] underline hover:text-[#6d451a]"
                  >
                    تواصل معنا
                  </a>
                </div>

                {/* subtle bottom decorative band */}
                <div className="mt-6 h-1 rounded-full bg-gradient-to-l from-[#efe3c9] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
