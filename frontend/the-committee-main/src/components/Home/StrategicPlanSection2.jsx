
import React from "react";
import { motion } from "framer-motion";

const plans = [
  "إعداد الملتقى الأول لجمعيات تحفيظ القرآن بالمملكة",
  "توقيع عشر شراكات دعم وتمويل للمجلس",
  "الانتهاء من الدراسة المسحية الميدانية",
  "زيادة عدد الجمعيات المشاركة في اللجنة التنسيقية",
  "زيادة عدد الجمعيات المشاركة في الصندوق الوقفي الاستثماري",
  "عقد (13) لقاء في مناطق المملكة لجمعيات التحفيظ",
  "تنفيذ أربع مبادرات استراتيجية نوعية على مستوى جمعيات التحفيظ في المملكة",
  "تحويل اللجنة التنسيقية إلى مجلس تخصصي",
];

const PlanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f6f9fc]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004d7a] mb-12"
        >
          خطة اللجنة
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 250 },
              }}
              className="relative bg-white/60 backdrop-blur-md border border-[#d0e6f7] shadow-md rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/10 to-[#00b4d8]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <motion.div
                whileHover={{ y: -5 }}
                className="relative z-10 flex flex-col items-center justify-center h-full"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#0077b6]/20 flex items-center justify-center text-[#0077b6] text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {plan}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
