
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCommitteeSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 md:py-24 overflow-hidden">
      {/* خلفية زخرفية خفيفة */}{" "}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
      <div className="container relative mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 px-6">
        {/* الجزء النصي */}
        <motion.div
          className="w-full md:w-1/2 bg-white/70 backdrop-blur-sm border border-primary-100 rounded-2xl shadow-xl p-8 relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* عنوان */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="h-[2px] w-8 bg-primary-500 mx-3 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 relative font-committee-primary">
              عن اللجنة التنسيقية
            </h2>
            <div className="h-[2px] w-8 bg-primary-500 mx-3 rounded-full"></div>
          </div>

          {/* اقتباس */}
          <blockquote className="text-neutral-700 italic text-lg leading-relaxed mb-6 relative">
            <span className="text-4xl text-primary-400 font-serif absolute -top-4 right-2">
              “
            </span>
            اللجنة التنسيقية هي نواة العمل الجماعي المنظم الذي يسعى إلى تعزيز
            التعاون بين مختلف الجهات الأكاديمية والمجتمعية لتحقيق أهداف التنمية
            المستدامة.
            <span className="text-4xl text-primary-400 font-serif absolute -bottom-4 left-2">
              ”
            </span>
          </blockquote>

          {/* نص الشرح */}
          <p className="text-neutral-700 text-justify leading-8 mb-8">
            تأسست اللجنة منذ عدة سنوات بهدف دعم المشاريع الطلابية والمبادرات
            البحثية، وتنظيم الفعاليات التي تُسهم في بناء جيل واعٍ ومؤهل للمشاركة
            في تطوير المجتمع. تعمل اللجنة على مدّ الجسور بين الخبراء والطلاب
            والمؤسسات المختلفة من أجل خلق بيئة تفاعلية تجمع بين الفكر والعمل.
          </p>

          {/* زر */}
          <div className="flex justify-center md:justify-start">
            <Link
              to="/about"
              className="inline-block px-6 py-2 bg-primary-600 text-white font-bold rounded-xl shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              اعرف المزيد
            </Link>
          </div>
        </motion.div>

        {/* الجزء الصوري */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src="/hero-bg-1.jpg"
              alt="اللجنة التنسيقية"
              className="rounded-3xl shadow-2xl border-4 border-white object-cover w-full max-w-md md:max-w-lg transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.png";
              }}
            />
            <div className="absolute inset-0 rounded-3xl border-4 border-primary-400/60 scale-105 rotate-1 opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCommitteeSection;
