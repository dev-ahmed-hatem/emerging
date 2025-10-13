

 
import React from "react";
import { motion } from "framer-motion";

/**
 * StrategicGoals.jsx
 * قسم: الأهداف الاستراتيجية
 * - Responsive: grid 2 columns on md+, 1 column on mobile
 * - Uses framer-motion for entrance animations and stagger
 * - RTL-aware design (badges on the right)
 */

const goals = [
  "التنسيق والتكامل بين جمعيات تحفيظ القرآن بالمملكـة",
  "تقديم المساندة والمشورة لجمعيات تحفيظ القرآن الكريم",
  "تمثيل جمعيات التحفيظ أمام الجهات الحكومية والخاصة والجهات ذات العلاقة",
  "تبني وإطلاق المبادرات المشتركة والبرامج الاستراتيجية التي تخدم كافة جمعيات التحفيظ",
  "الإسهام في معالجة التحديات والعوائق التي تواجه جمعيات التحفيظ لتحقيق رسالتها وأهدافها",
  "بناء الشراكات والعلاقات النوعية لدعم جمعيات تحفيظ القرآن",
  "إعداد الدراسات والأبحاث المتعلقة بواقع جمعيات التحفيظ في المملكة",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StrategicGoals() {
  return (
    <section className="relative w-full bg-white/80 overflow-hidden py-16 md:py-24">
      {/* زخرفة خفيفة في الخلفية — يمكن استبدالها برسم svg أو صورة */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* optional decorative background if you have one: /pattern.svg */}
        {/* <img src="/pattern.svg" alt="" className="w-full h-full object-cover" /> */}
      </div>

      <div className="container relative mx-auto px-4 md:px-8">
        {/* العنوان */}
        <div className="mb-8 md:mb-12 flex items-center justify-center md:justify-start">
          <div className="h-[2px] w-10 bg-[#246efe] rounded-full ml-4" />
          <h2 className="text-xl md:text-2xl font-extrabold text-[#0b5870] font-committee-primary">
            الأهداف الاستراتيجية
          </h2>
          <div className="h-[2px] w-10 bg-[#246efe] rounded-full mr-4" />
        </div>

        {/* وصف قصير (اختياري) */}
        <p className="text-neutral-600 text-center md:text-right max-w-3xl mx-auto md:mx-0 mb-8 md:mb-12">
          تسعى اللجنة لتحقيق أثر مستدام عبر مجموعة من الأهداف الاستراتيجية المصممة لدعم جمعيات
          تحفيظ القرآن وتعزيز قدراتها ومكانتها داخل المجتمع والمؤسسات.
        </p>

        {/* Grid للأهداف */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {goals.map((text, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              <div className="flex items-center justify-between gap-4">
                {/* صندوق النص */}
                <div
                  className="
                    flex-1
                    bg-neutral-100
                    rounded-lg
                    p-4 md:p-5
                    border border-neutral-200
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-[1.02]
                    hover:shadow-md
                    text-neutral-800
                    text-[15px] md:text-base
                    leading-relaxed
                    text-right
                  "
                >
                  {text}
                </div>

                {/* رقم الهدف (Badge) — على اليمين بسبب RTL */}
                <div
                  className="
                    flex-none
                    w-10 h-10 md:w-12 md:h-12
                    rounded-md
                    bg-[#246efe]
                    text-white
                    font-bold
                    flex items-center justify-center
                    ml-3
                    transition-transform duration-300
                    group-hover:scale-105
                    "
                  aria-hidden
                >
                  <span className="text-sm md:text-base">{idx + 1}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA أو ملاحظة أسفل السكشن */}
        <div className="mt-10 md:mt-12 flex justify-center md:justify-start">
          <a
            href="/about"
            className="inline-block px-6 py-2 rounded-xl bg-[#2A807A] text-white font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            المزيد عن أهدافنا
          </a>
        </div>
      </div>
    </section>
  );
}
