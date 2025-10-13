// export default function Blogs() {
//   return (
//     <section className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-4 text-green-700">الأخبار والمقالات</h1>
//       <p>تابع آخر الأخبار والمستجدات حول أنشطة الجمعية ومسابقات التحفيظ.</p>
//     </section>
//   );
// }


import { useNavigate, Link } from "react-router";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Calendar,
  Bookmark,
  Hash,
  Search,
  ArrowLeft,
   ArrowRight,
} from "lucide-react";

 

// ********************************************
// ألوان الهوية المعتمدة بناءً على الثيم الجديد
// ********************************************
const PRIMARY_DARK = "var(--color-primary-800, #123da0)"; // الأزرق الداكن
const PRIMARY_LIGHT = "var(--color-primary-600, #1e60e6)"; // الأزرق المتوسط
const ACCENT_COLOR = "var(--color-secondary-500, #6de7fe)"; // الفيروزي الفاتح
const BACKGROUND_DEEP = "var(--color-neutral-900, #111827)"; // خلفية داكنة جداً
const CARD_BACKGROUND = "var(--color-neutral-800, #1f2937)"; // لون خلفية البطاقة
const TEXT_LIGHT = "var(--color-neutral-50, #f9fafb)"; // لون النص الأساسي
const TEXT_HINT = "var(--color-neutral-400, #9ca3af)"; // لون تلميح خفيف

// ********************************************
// بيانات الأخبار الافتراضية (15 خبر)
// ********************************************
const allNewsItems = [
  {
    id: 1,
    title: " عضوية مجلس الجمعيات الأهلية",
    description:
      "شهد الحدث التاريخي  عضوية مجلس الجمعيات الأهلية بحضور عدد من كبار المسؤولين والمشايخ. يهدف هذا التعاون إلى تعزيز العمل المشترك.",
    date: "9 أغسطس 2023",
    imageUrl: "/news-01.jpg",
    category: "فعاليات",
    duration: "10 دقائق قراءة",
    isFeatured: true,
  },
  {
    id: 2,
    title: "برعاية أمير حائل: ' شريك تنموي'",
    description:
      "برعاية كريمة، أقيم الملتقى التنسيقي الأول في حائل لتعزيز دور الجمعيات كشريك تنموي فعال وتحقيق رؤية 2030.",
    date: "30 نوفمبر 2023",
    imageUrl: "/news-02.jpg",
    category: "أخبار اللجنة",
    duration: "7 دقائق قراءة",
    isPopular: true,
  },
  {
    id: 3,
    title: "زيارة خاصة لسدارة الأعمال الاجتماعية",
    description:
      "قام وفد من اللجنة بزيارة مركز سدارة لمناقشة آفاق التعاون المشترك في خدمة القرآن وأهله وأهمية الشراكة المجتمعية.",
    date: "30 نوفمبر 2023",
    imageUrl: "/news-03.jpg",
    category: "زيارات",
    duration: "5 دقائق قراءة",
  },
  {
    id: 4,
    title: "بدعم وتمكين الجمعيات 'ختام الملتقى الأول'",
    description:
      "اختتام فعاليات الملتقى الذي يهدف لتمكين الجمعيات وتقديم الدعم اللازم لرفع كفاءتها الإدارية والتشغيلية في المرحلة المقبلة.",
    date: "10 ديسمبر 2023",
    imageUrl: "/news-04.jpg",
    category: "ملتقيات",
    duration: "8 دقائق قراءة",
  },
  {
    id: 5,
    title: "مبادرة 'مقرئ الناشئة' تنطلق رقمياً",
    description:
      "مبادرة تهدف لتوفير محتوى تعليمي تفاعلي لحفظ وتجويد القرآن الكريم عن بُعد للناشئة والأطفال.",
    date: "20 سبتمبر 2023",
    imageUrl: "/news-05.jpg",
    category: "مشاريع جديدة",
    duration: "6 دقائق قراءة",
    isPopular: true,
  },
  {
    id: 6,
    title: "إصدار دليل المتسابقين المحدّث لعام ١٤٤٧ هـ",
    description:
      "تم إطلاق النسخة الجديدة من دليل المتسابقين، شاملة التعديلات على شروط الفروع والمستويات والإجراءات المتبعة.",
    date: "20 أغسطس 2023",
    imageUrl: "/news-06.jpg",
    category: "إعلانات",
    duration: "4 دقائق قراءة",
  },
  {
    id: 7,
    title: "ورشة عمل 'معايير التحكيم المتقدمة' للجنة",
    description:
      "نظمت ورشة عمل مكثفة لرفع كفاءة المحكمين والمشرفين على المسابقة في جميع مناطق المملكة.",
    date: "10 أغسطس 2023",
    imageUrl: "/news-07.jpg",
    category: "تدريب",
    duration: "7 دقائق قراءة",
  },
  {
    id: 8,
    title: "تهنئة الفائزين بجائزة الملك سلمان",
    description:
      "اللجنة التنسيقية ترفع أسمى آيات التهاني للفائزين بجائزة الملك سلمان لحفظ القرآن الكريم وتجويده.",
    date: "1 أغسطس 2023",
    imageUrl: "/news-08.jpg",
    category: "أخبار عامة",
    duration: "3 دقائق قراءة",
  },
  {
    id: 9,
    title: "توقيع اتفاقية تعاون مع جمعية خيرية لتحفيظ القرآن",
    description:
      "يهدف التعاون إلى توسيع نطاق المسابقة وزيادة عدد المشاركين في المنطقة المستهدفة والارتقاء بالمخرجات التعليمية.",
    date: "15 يوليو 2023",
    imageUrl: "/news-09.jpg",
    category: "شراكات",
    duration: "5 دقائق قراءة",
  },
  {
    id: 10,
    title: "الإعلان عن موعد انطلاق التسجيل في الدورة الجديدة",
    description:
      "بدء استقبال طلبات التسجيل للمتسابقين والمراكز التعليمية اعتباراً من الشهر القادم والترتيبات اللوجستية.",
    date: "1 يوليو 2023",
    imageUrl: "/news-10.jpg",
    category: "إعلانات",
    duration: "4 دقائق قراءة",
  },
  {
    id: 11,
    title: "تقرير إنجازات الربع الأول للجنة التنسيقية",
    description:
      "نشر تقرير مفصل يلخص إنجازات الربع الأول، بما في ذلك عدد المستفيدين والفعاليات المنفذة.",
    date: "15 يونيو 2023",
    imageUrl: "/news-11.jpg",
    category: "أخبار اللجنة",
    duration: "12 دقائق قراءة",
  },
  {
    id: 12,
    title: "المشاركة في مؤتمر تطوير العمل الخيري",
    description:
      "شاركت اللجنة بورقة عمل حول أفضل الممارسات في إدارة المسابقات القرآنية على المستوى الوطني.",
    date: "10 يونيو 2023",
    imageUrl: "/news-12.jpg",
    category: "ندوات",
    duration: "6 دقائق قراءة",
  },
  {
    id: 13,
    title: "جولة ميدانية على مراكز الإشراف",
    description:
      "وفد اللجنة يختتم جولة تفقدية على مراكز الإشراف للتأكد من سير العمل والوقوف على الاحتياجات.",
    date: "5 يونيو 2023",
    imageUrl: "/news-13.jpg",
    category: "زيارات",
    duration: "4 دقائق قراءة",
  },
  {
    id: 14,
    title: "تحديث شروط القبول للمحكمين الجدد",
    description:
      "اللجنة تعلن عن تحديثات في شروط ومعايير القبول للمتقدمين الجدد للانضمام إلى فريق التحكيم.",
    date: "20 مايو 2023",
    imageUrl: "/news-14.jpg",
    category: "إعلانات",
    duration: "5 دقائق قراءة",
  },
  {
    id: 15,
    title: "منهجية العمل في اللجان الفرعية",
    description:
      "اجتماع توضيحي لتعريف أعضاء اللجان الفرعية بمنهجية العمل المتوقعة ومؤشرات الأداء الرئيسية.",
    date: "15 مايو 2023",
    imageUrl: "/news-15.jpg",
    category: "تدريب",
    duration: "8 دقائق قراءة",
  },
].sort((a, b) => new Date(b.date) - new Date(a.date)); // ترتيب من الأحدث للأقدم

// ********************************************
// قائمة التصنيفات الفريدة مع عدد الأخبار
// ********************************************
const categories = allNewsItems.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

// ********************************************
// مكون عرض خبر واحد في الشبكة (Grid Card)
// ********************************************

const GridNewsCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/singleblog")} // ✅ الانتقال إلى /singleblog عند الضغط
      className="flex flex-col rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer"
      style={{
        backgroundColor: CARD_BACKGROUND,
        border: `1px solid ${ACCENT_COLOR}10`,
      }}
    >
      {/* الصورة - الثلث العلوي */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/${PRIMARY_DARK.replace(
              "#",
              ""
            )}/${TEXT_LIGHT.replace("#", "")}?text=صورة+للخبر`;
          }}
        />
        {/* وسم التصنيف في الأعلى */}
        <span
          className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full"
          style={{
            backgroundColor: ACCENT_COLOR + "D0",
            color: BACKGROUND_DEEP,
          }}
        >
          {item.category}
        </span>
      </div>

      {/* المحتوى - الثلثان السفليان */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl font-bold mb-3 leading-snug truncate"
          title={item.title}
          style={{ color: TEXT_LIGHT }}
        >
          {item.title}
        </h3>
        <p
          className="text-base font-light mb-4 line-clamp-3"
          style={{ color: TEXT_HINT }}
        >
          {item.description}
        </p>

        {/* معلومات الخبر - التاريخ والمدة */}
        <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center text-sm">
          <div className="flex items-center" style={{ color: PRIMARY_LIGHT }}>
            <Calendar size={16} className="ml-2" />
            <span className="font-medium">{item.date}</span>
          </div>
          <div className="flex items-center" style={{ color: TEXT_HINT }}>
            <Clock size={16} className="ml-2" />
            <span>{item.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ********************************************
// مكون الخبر المميز (Featured Post)
// ********************************************
const FeaturedNews = ({ item }) => (
  <div
    className="w-full h-[450px] md:h-[550px] relative rounded-3xl overflow-hidden mb-16 shadow-2xl transition-shadow duration-500"
    style={{ border: `2px solid ${ACCENT_COLOR}` }}
  >
    <img
      src={item.imageUrl}
      alt={item.title}
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/1200x550/${PRIMARY_DARK.replace(
          "#",
          ""
        )}/${TEXT_LIGHT.replace("#", "")}?text=الخبر+المميز`;
      }}
    />

    {/* طبقة تدرج لضمان وضوح النص */}
    <div
      className="absolute inset-0 p-8 md:p-12 flex items-end"
      style={{
        background:
          "linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, transparent 100%)",
      }}
    >
      <div className="max-w-4xl">
        <span
          className="inline-block px-4 py-1 text-sm font-bold rounded-full mb-3"
          style={{ backgroundColor: ACCENT_COLOR, color: BACKGROUND_DEEP }}
        >
          {item.category}
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          style={{ color: TEXT_LIGHT }}
        >
          {item.title}
        </h2>
        <p className="text-lg mb-6 line-clamp-2" style={{ color: TEXT_HINT }}>
          {item.description}
        </p>

        <Link
          to={`/singleblog`} // ✅ يروح إلى صفحة الخبر الكامل
          className="inline-flex items-center font-bold text-lg transition-colors duration-300"
          style={{ color: ACCENT_COLOR }}
        >
          اقرأ الخبر كاملاً
        </Link>
      </div>
    </div>
  </div>
);

// ********************************************
// مكون الشريط الجانبي (Sidebar)
// ********************************************
const Sidebar = ({ newsItems, categories }) => (
  <aside className="lg:sticky lg:top-8 w-full lg:w-96 space-y-10">
    {/* مربع البحث */}
    <div
      className="p-6 rounded-xl shadow-lg"
      style={{
        backgroundColor: CARD_BACKGROUND,
        border: `1px solid ${PRIMARY_DARK}`,
      }}
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: TEXT_LIGHT }}>
        بحث في الأخبار
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="اكتب كلمة مفتاحية..."
          className="w-full py-3 pr-4 pl-12 rounded-lg text-base outline-none"
          style={{
            backgroundColor: BACKGROUND_DEEP,
            color: TEXT_LIGHT,
            border: `1px solid ${PRIMARY_LIGHT}`,
          }}
        />
        <Search
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          style={{ color: ACCENT_COLOR }}
        />
      </div>
    </div>

    {/* الأخبار الأكثر شيوعاً */}
    <div
      className="p-6 rounded-xl shadow-lg"
      style={{
        backgroundColor: CARD_BACKGROUND,
        border: `1px solid ${PRIMARY_DARK}`,
      }}
    >
      <h3
        className="text-xl font-bold mb-5 border-b pb-3"
        style={{ color: TEXT_LIGHT, borderColor: ACCENT_COLOR + "50" }}
      >
        الأكثر قراءة
      </h3>
      <div className="space-y-4">
        {newsItems
          .filter((item) => item.isPopular)
          .slice(0, 3)
          .map((item) => (
            <a
              key={item.id}
              href={`#news-${item.id}`}
              className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700"
            >
              <Bookmark
                size={20}
                className="ml-3 flex-shrink-0"
                style={{ color: PRIMARY_LIGHT }}
              />
              <div>
                <p
                  className="text-base font-semibold truncate"
                  style={{ color: TEXT_LIGHT }}
                >
                  {item.title}
                </p>
                <span className="text-xs" style={{ color: TEXT_HINT }}>
                  {item.date} | {item.duration}
                </span>
              </div>
            </a>
          ))}
      </div>
    </div>

    {/* تصنيفات الأخبار */}
    <div
      className="p-6 rounded-xl shadow-lg"
      style={{
        backgroundColor: CARD_BACKGROUND,
        border: `1px solid ${PRIMARY_DARK}`,
      }}
    >
      <h3
        className="text-xl font-bold mb-5 border-b pb-3"
        style={{ color: TEXT_LIGHT, borderColor: ACCENT_COLOR + "50" }}
      >
        التصنيفات
      </h3>
      <ul className="space-y-3">
        {Object.entries(categories).map(([category, count]) => (
          <li key={category}>
            <a
              href={`#category-${category}`}
              className="flex justify-between items-center text-base font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: TEXT_LIGHT }}
            >
              <div className="flex items-center">
                <Hash
                  size={18}
                  className="ml-2"
                  style={{ color: ACCENT_COLOR }}
                />
                {category}
              </div>
              <span
                className="px-3 py-1 text-xs rounded-full"
                style={{ backgroundColor: PRIMARY_DARK, color: TEXT_LIGHT }}
              >
                {count}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

// ********************************************
// المكون الرئيسي: BlogPage
// ********************************************
const BlogPage = () => {
  // الخبر المميز هو أحدث خبر
  const featuredItem =
    allNewsItems.find((item) => item.isFeatured) || allNewsItems[0];
  // باقي الأخبار (باستثناء الخبر المميز)
  const regularNews = allNewsItems.filter(
    (item) => item.id !== featuredItem.id
  );


  
    const navigate = useNavigate();
  
    const onBack = () => {
      navigate("/");
    };
  

  return (
    <section
      className="w-full min-h-screen py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        direction: "rtl",
        backgroundColor: BACKGROUND_DEEP,
        fontFamily: "Inter, Tahoma, sans-serif",
        color: TEXT_LIGHT,
        // خلفية مزخرفة داكنة
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(30, 96, 230, 0.05) 0, rgba(30, 96, 230, 0.05) 1px, transparent 1px, transparent 20px)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* زر العودة */}
        <button
          onClick={onBack}
          className="flex items-center text-lg font-bold mb-8 mt-12 transition-colors duration-200 cursor-pointer"
          style={{ color: ACCENT_COLOR }}
        >
          <ArrowRight size={20} className="ml-2" />
          العودة إلى الصفحة الرئيسية
        </button>

        {/* رأس الصفحة */}
        <header className="text-center mb-20">
          <h1
            className="text-5xl sm:text-6xl font-extrabold pb-3 inline-block relative"
            style={{ color: TEXT_LIGHT }}
          >
            مدونة أخبار اللجنة التنسيقية
            <span
              className="absolute bottom-0 right-1/4 w-1/2 h-1 rounded-full"
              style={{ backgroundColor: ACCENT_COLOR }}
            ></span>
          </h1>
          <p
            className="text-xl mt-4 max-w-3xl mx-auto"
            style={{ color: TEXT_HINT }}
          >
            ابق على اطلاع بآخر المستجدات، الندوات، المبادرات، والفعاليات التي
            تنظمها اللجنة.
          </p>
        </header>

        {/* 1. الخبر المميز (FEATURED POST) */}
        <FeaturedNews item={featuredItem} />

        {/* 2 & 3. المحتوى الرئيسي والشريط الجانبي */}
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* 3. الشريط الجانبي (Sidebar) */}
          <Sidebar newsItems={allNewsItems} categories={categories} />

          {/* 2. شبكة الأخبار الرئيسية (MAIN GRID) */}
          <main className="lg:flex-1">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: ACCENT_COLOR }}
            >
              جميع الأخبار والتقارير
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularNews.map((item) => (
                <GridNewsCard key={item.id} item={item} />
              ))}
            </div>

            {/* زر تحميل المزيد (Pagination/Load More) */}
            <div className="text-center mt-12">
              <button
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full transition-all duration-300"
                style={{
                  backgroundColor: PRIMARY_DARK,
                  color: TEXT_LIGHT,
                  border: `2px solid ${ACCENT_COLOR}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = ACCENT_COLOR;
                  e.currentTarget.style.color = BACKGROUND_DEEP;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = PRIMARY_DARK;
                  e.currentTarget.style.color = TEXT_LIGHT;
                }}
              >
                تحميل المزيد من الأخبار
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

//----------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
