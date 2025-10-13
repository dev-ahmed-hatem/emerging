import React from "react";
import { motion } from "framer-motion";

const MembersSection = () => {
  const boardMembers = [
    {
      name: "م. عبد العزيــــز بن عبـد اللـه حنفــي",
      role: "رئيس اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم بالمملكة",
      image: "https://via.placeholder.com/400x400.png?text=رئيس+اللجنة",
    },
    {
      name: "أ. عبد الرحمن بن عبد الله الهذلول",
      role: "نائب رئيس اللجنة التنسيقية",
      image: "https://via.placeholder.com/400x400.png?text=نائب+الرئيس",
    },
    {
      name: "أ. منصور بن عبد الله بن سعيد",
      role: "المسؤول المالي للجنة التنسيقية",
      image: "https://via.placeholder.com/400x400.png?text=المسؤول+المالي",
    },
  ];

  const executiveMembers = [
    {
      name: "أ. د. نوح بن يحيى الشهري",
      role: "رئيس اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=نوح+الشهري",
    },
    {
      name: "أ. حمد بن سليمان العنقري",
      role: "عضو اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=حمد+العنقري",
    },
    {
      name: "أ. ناصر بن أحمد المسعود",
      role: "عضو اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=ناصر+المسعود",
    },
    {
      name: "أ. فوزي بن عليوي الجعيد",
      role: "عضو اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=فوزي+الجعيد",
    },
    {
      name: "أ. تركي بن عبدالله الشهراني",
      role: "عضو اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=تركي+الشهراني",
    },
    {
      name: "أ. خليفة بن سعد الدخيل",
      role: "عضو اللجنة التنفيذية",
      image: "https://via.placeholder.com/400x400.png?text=خليفة+الدخيل",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const renderMemberSection = (member, index, isReversed = false) => (
    <section
      key={index}
      dir="rtl"
      className={`w-full flex flex-col md:flex-row items-center justify-between py-16 md:py-24 px-6 md:px-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      } ${
        index % 2 === 0
          ? "bg-gradient-to-l from-blue-50 to-white"
          : "bg-gradient-to-r from-emerald-50 to-white"
      }`}
    >
      {/* النص */}
      <motion.div
        custom={index}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:w-1/2 w-full text-center md:text-right space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {member.name}
        </h2>
        <p className="text-lg text-emerald-700 font-medium">{member.role}</p>
      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0"
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-emerald-300 blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
          <motion.img
            src={member.image}
            alt={member.name}
            className="relative z-10 w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </motion.div>
    </section>
  );

  return (
    <div className="overflow-hidden">
      {/* 🟩 مجلس الإدارة */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          مجلس إدارة اللجنة التنسيقية
        </h1>
        <p className="text-gray-600 text-lg">
          نخبة من القادة يعملون بإخلاص لتحقيق رؤية اللجنة التنسيقية لجمعيات
          تحفيظ القرآن الكريم بالمملكة
        </p>
      </div>
      {boardMembers.map((member, index) =>
        renderMemberSection(member, index, index % 2 !== 0)
      )}

      {/* 🟦 اللجنة التنفيذية */}
      <div className="text-center py-12 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          أعضاء اللجنة التنفيذية
        </h1>
        <p className="text-gray-600 text-lg">
          مجموعة من الأعضاء المتميزين يسهمون في التخطيط والتنفيذ والإشراف على
          مشاريع اللجنة وبرامجها
        </p>
      </div>
      {executiveMembers.map((member, index) =>
        renderMemberSection(member, index, index % 2 === 0)
      )}
    </div>
  );
};

export default MembersSection;



