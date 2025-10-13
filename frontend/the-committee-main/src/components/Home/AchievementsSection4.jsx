


import React from "react";
import { Award, Database, Building2, Users, Handshake, ClipboardList, Search, Gift, Cpu, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievements = [
    "البدء في إعداد قاعدة بيانات لجمعيات تحفيظ القرآن الكريم بالمملكة",
    "تجهيز مقر مخصص للجنة وتأثيثه بالأدوات المكتبية والأجهزة الحاسوبية",
    "إعداد وثيقة البناء المؤسسي للجنة",
    "تشكيل اللجنة التنفيذية لمتابعة مبادرات ومشاريع اللجنة التنسيقية",
    "عقد اجتماع عام تعريفي باللجنة لجمعيات تحفيظ القرآن الكريم بالمملكة",
    "تأسيس الصندوق الوقفي الاستثماري",
    "إعداد دليل الشراكات الاستراتيجية للجنة",
    "البدء في إعداد دراسة مسحية ميدانية لاحتياجات وتحديات جمعيات التحفيظ",
    "التواصل مع بعض المؤسسات المانحة لرعاية أعمال اللجنة",
    "تدشين دراسة مستقبل تقنيات القرآن الكريم بالشراكة مع جمعية مكنون",
    "تعيين مسؤول إداري للجنة التنسيقية لجمعيات تحفيظ القرآن في المملكة",
  ];

  const icons = [
    Database, Building2, ClipboardList, Users, Award, Gift, Handshake,
    Search, Cpu, UserPlus, Handshake,
  ];

  return (
    <section dir="rtl" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          منجزات اللجنة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-4 rounded-full">
                    <Icon size={32} />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
