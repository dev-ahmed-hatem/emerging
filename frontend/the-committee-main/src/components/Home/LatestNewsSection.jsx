// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, Image as ImageIcon } from 'lucide-react';

// // ********************************************
// // ألوان الهوية المعتمدة
// // ********************************************
// const PRIMARY_COLOR_DARK = '#057687'; // الفيروزي الداكن
// const ACCENT_COLOR_GOLD = '#d4c291'; // الذهبي المطفأ
// const BACKGROUND_DARK = '#1C1C1C'; // خلفية داكنة جداً للسكشن
// const CARD_BACKGROUND = '#2A2A2A'; // لون خلفية البطاقة
// const TEXT_LIGHT = '#FFFFFF'; // لون النص الأساسي
// const TEXT_GOLD_LIGHT = '#F0E6D8'; // لون نص ذهبي فاتح

// // ********************************************
// // بيانات الأخبار الافتراضية (10 أخبار)
// // ********************************************
// const newsItems = [
//     {
//         id: 1,
//         title: "تكريم الفائزين بالدورة السادسة لجائزة الأمير عبد العزيز بن فهد",
//         description: "أقيم حفل بهيج لتكريم الفائزين والفائزات من الناشئة في كافة فروع المسابقة لعام ١٤٤٦ هـ.",
//         date: "25/11/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=حفل+التكريم",
//         category: "فعاليات",
//     },
//     {
//         id: 2,
//         title: "اجتماع اللجنة التنسيقية لمراجعة الخطة الاستراتيجية",
//         description: "عقدت اللجنة اجتماعها الدوري لمناقشة التعديلات المقترحة على اللوائح التنفيذية للدورة القادمة.",
//         date: "15/10/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=اجتماع+اللجنة",
//         category: "أخبار اللجنة",
//     },
//     {
//         id: 3,
//         title: "ندوة حول 'أثر القرآن في تنمية المهارات اللغوية'",
//         description: "شاركت اللجنة في تنظيم ندوة علمية بمشاركة كوكبة من الأكاديميين والمتخصصين في علوم اللغة والقرآن.",
//         date: "01/10/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=ندوة+علمية",
//         category: "ندوات ومؤتمرات",
//     },
//     {
//         id: 4,
//         title: "إطلاق المبادرة الرقمية 'مقرئ الناشئة'",
//         description: "مبادرة تهدف لتوفير محتوى تعليمي تفاعلي لحفظ وتجويد القرآن الكريم عن بُعد للناشئة.",
//         date: "20/09/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=مبادرة+رقمية",
//         category: "مشاريع جديدة",
//     },
//     {
//         id: 5,
//         title: "زيارة تفقدية لمركز الإشراف الإقليمي في المنطقة الشرقية",
//         description: "قام وفد من الأمانة العامة بزيارة المراكز للتأكد من جاهزيتها لاستضافة التصفيات الإقليمية.",
//         date: "05/09/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=زيارة+إشرافية",
//         category: "أخبار اللجنة",
//     },
//     {
//         id: 6,
//         title: "إصدار دليل المتسابقين المحدّث لعام ١٤٤٧ هـ",
//         description: "تم إطلاق النسخة الجديدة من دليل المتسابقين، شاملة التعديلات على شروط الفروع والمستويات.",
//         date: "20/08/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=دليل+المتسابقين",
//         category: "إعلانات",
//     },
//     {
//         id: 7,
//         title: "ورشة عمل 'معايير التحكيم المتقدمة'",
//         description: "نظمت ورشة عمل مكثفة لرفع كفاءة المحكمين والمشرفين على المسابقة في جميع مناطق المملكة.",
//         date: "10/08/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=ورشة+عمل",
//         category: "تدريب",
//     },
//     {
//         id: 8,
//         title: "تهنئة الفائزين بجائزة الملك سلمان المحلية",
//         description: "اللجنة التنسيقية ترفع أسمى آيات التهاني للفائزين بجائزة الملك سلمان لحفظ القرآن الكريم.",
//         date: "01/08/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=تهنئة",
//         category: "أخبار عامة",
//     },
//     {
//         id: 9,
//         title: "توقيع اتفاقية تعاون مع جمعية خيرية لتحفيظ القرآن في حائل",
//         description: "يهدف التعاون إلى توسيع نطاق المسابقة وزيادة عدد المشاركين في المنطقة.",
//         date: "15/07/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=اتفاقية+تعاون",
//         category: "شراكات",
//     },
//     {
//         id: 10,
//         title: "الإعلان عن موعد انطلاق التسجيل في الدورة الجديدة",
//         description: "بدء استقبال طلبات التسجيل للمتسابقين والمراكز التعليمية اعتباراً من الشهر القادم.",
//         date: "01/07/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=اعلان+التسجيل",
//         category: "إعلانات",
//     },
// ];

// // ********************************************
// // مكون البطاقة الواحدة (Card)
// // ********************************************
// const NewsCard = ({ item }) => (
//     <div
//         className="flex-shrink-0 w-80 sm:w-[350px] lg:w-96 p-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,194,145,0.4)] hover:scale-[1.03]"
//         style={{
//             backgroundColor: CARD_BACKGROUND,
//             border: `1px solid ${ACCENT_COLOR_GOLD}50`, // إطار خفيف
//             color: TEXT_LIGHT,
//         }}
//     >
//         {/* الثلث الأول: الصورة */}
//         <div className="relative w-full h-40 overflow-hidden">
//             <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/057687/ffffff?text=صورة+غير+متوفرة"; }}
//             />
//             {/* وسم التصنيف */}
//             <span
//                 className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full"
//                 style={{ backgroundColor: PRIMARY_COLOR_DARK + 'D0', color: TEXT_LIGHT }}
//             >
//                 {item.category}
//             </span>
//         </div>

//         {/* الثلث الثاني: العنوان والوصف */}
//         <div className="p-5 flex flex-col justify-between h-[180px]">
//             <h3
//                 className="text-xl font-extrabold mb-2 leading-snug"
//                 style={{ color: ACCENT_COLOR_GOLD }}
//             >
//                 {item.title}
//             </h3>
//             <p className="text-sm font-light leading-relaxed mb-4 text-gray-300 flex-grow">
//                 {item.description}
//             </p>

//             {/* الجزء الأخير: التاريخ */}
//             <div className="flex items-center justify-start mt-2 pt-3 border-t border-gray-700">
//                 <Calendar size={18} className="ml-2 flex-shrink-0" style={{ color: PRIMARY_COLOR_DARK }} />
//                 <span className="text-xs font-bold" style={{ color: TEXT_GOLD_LIGHT }}>
//                     {item.date}
//                 </span>
//             </div>
//         </div>
//     </div>
// );

// // ********************************************
// // مكون الأزرار (Arrows)
// // ********************************************
// const SliderButton = ({ direction, onClick }) => (
//     <button
//         onClick={onClick}
//         className={`absolute top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-10
//                    transition-all duration-300 backdrop-blur-sm
//                    hover:scale-110 hover:shadow-2xl active:scale-95`}
//         style={{
//             backgroundColor: PRIMARY_COLOR_DARK + 'D0',
//             color: TEXT_LIGHT,
//             [direction === 'next' ? 'left' : 'right']: '1rem',
//             border: `2px solid ${ACCENT_COLOR_GOLD}`,
//         }}
//         aria-label={direction === 'next' ? 'التالي' : 'السابق'}
//     >
//         {direction === 'next' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
//     </button>
// );

// // ********************************************
// // المكون الرئيسي: LatestNewsSection
// // ********************************************
// const LatestNewsSection = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sliderRef = useRef(null);
//     const itemWidth = 384; // 350px width + 34px padding/margin (approximate for smooth scroll)
//     const AUTO_SCROLL_INTERVAL = 4000; // 4 ثواني

//     // ********************************************
//     // دوال التحكم بالحركة
//     // ********************************************

//     // دالة التمرير السلس
//     const scrollToItem = (index) => {
//         if (sliderRef.current) {
//             const containerWidth = sliderRef.current.clientWidth;
//             // عدد العناصر المرئية تقريباً (أصغر رقم صحيح)
//             const visibleItemsCount = Math.floor(containerWidth / (350 + 32));

//             // تحديد الموقع الجديد بناءً على عرض البطاقة
//             // نستخدم scrollTo لأنها تتيح التمرير السلس (smooth behavior)
//             sliderRef.current.scrollTo({
//                 left: index * (350 + 32), // 350px عرض البطاقة + 32px مسافة بين البطاقات
//                 behavior: 'smooth'
//             });

//             setCurrentIndex(index);
//         }
//     };

//     // الانتقال للعنصر التالي
//     const goToNext = () => {
//         const nextIndex = (currentIndex + 1) % newsItems.length;
//         scrollToItem(nextIndex);
//     };

//     // الانتقال للعنصر السابق
//     const goToPrev = () => {
//         const prevIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
//         scrollToItem(prevIndex);
//     };

//     // ********************************************
//     // الحركة التلقائية
//     // ********************************************
//     useEffect(() => {
//         const interval = setInterval(() => {
//             goToNext();
//         }, AUTO_SCROLL_INTERVAL);

//         return () => clearInterval(interval);
//     }, [currentIndex]); // يعاد تشغيله عند تغيير الـ currentIndex

//     // ********************************************
//     // حساب نقطة البداية للمؤشر بناءً على التمرير اليدوي
//     // ********************************************
//     const handleScroll = () => {
//         if (sliderRef.current) {
//             const scrollLeft = sliderRef.current.scrollLeft;
//             // نحسب الفهرس التقريبي للعنصر الموجود في أقصى اليمين (البداية باللغة العربية)
//             // نستخدم نفس قيمة العرض التقريبي للبطاقة
//             const newIndex = Math.round(scrollLeft / (350 + 32));
//             setCurrentIndex(newIndex);
//         }
//     };

//     // ********************************************
//     // التصميم والـ JSX
//     // ********************************************

//     return (
//         <section
//             className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
//             style={{
//                 direction: 'rtl',
//                 backgroundColor: BACKGROUND_DARK,
//                 fontFamily: 'Inter, Tahoma, sans-serif',
//                 color: TEXT_LIGHT,
//                 // خلفية مزخرفة داكنة
//                 backgroundImage: 'repeating-linear-gradient(-45deg, rgba(212, 194, 145, 0.05), rgba(212, 194, 145, 0.05) 1px, transparent 1px, transparent 20px)',
//             }}
//         >
//             {/* تأثير خلفي مضلع (كما في الصورة) */}
//             <div
//                 className="absolute inset-0 opacity-10"
//                 style={{
//                     background: 'radial-gradient(ellipse at center, rgba(5, 118, 135, 0.3) 0%, transparent 70%)',
//                 }}
//             ></div>

//             <div className="container mx-auto max-w-7xl relative z-10">

//                 {/* العنوان الرئيسي */}
//                 <header className="text-center mb-16">
//                     <h2
//                         className="text-4xl sm:text-5xl font-extrabold pb-3 inline-block relative"
//                         style={{ color: TEXT_LIGHT }}
//                     >
//                         آخر الأخبار والفعاليات
//                         {/* خط فاصل ذهبي */}
//                         <span
//                             className="absolute bottom-0 right-1/4 w-1/2 h-1 rounded-full"
//                             style={{ backgroundColor: ACCENT_COLOR_GOLD }}
//                         ></span>
//                     </h2>
//                     <p className="text-lg mt-4" style={{ color: TEXT_GOLD_LIGHT }}>
//                         متابعة مستمرة لجهود اللجنة التنسيقية والمشاركة المجتمعية.
//                     </p>
//                 </header>

//                 {/* منطقة الـ Slider الرئيسية */}
//                 <div className="relative">

//                     {/* شرائط التدرج على الجوانب */}
//                     <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
//                          style={{ background: `linear-gradient(to left, ${BACKGROUND_DARK} 0%, transparent 100%)` }}></div>
//                     <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
//                          style={{ background: `linear-gradient(to right, ${BACKGROUND_DARK} 0%, transparent 100%)` }}></div>

//                     {/* شريط التمرير الأفقي */}
//                     <div
//                         ref={sliderRef}
//                         onScroll={handleScroll}
//                         className="flex overflow-x-auto scrollbar-hide space-x-8 pb-4 px-2"
//                         style={{ scrollSnapType: 'x mandatory' }}
//                     >
//                         {newsItems.map((item) => (
//                             <div key={item.id} style={{ scrollSnapAlign: 'start' }}>
//                                 <NewsCard item={item} />
//                             </div>
//                         ))}
//                     </div>

//                     {/* أزرار التنقل (الأسهم) */}
//                     <SliderButton direction="prev" onClick={goToPrev} />
//                     <SliderButton direction="next" onClick={goToNext} />
//                 </div>

//                 {/* نقاط الحركة (Indicators) */}
//                 <div className="flex justify-center mt-10 space-x-2">
//                     {newsItems.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => scrollToItem(index)}
//                             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                                 index === currentIndex ? 'w-8' : 'w-3'
//                             }`}
//                             style={{
//                                 backgroundColor: index === currentIndex ? ACCENT_COLOR_GOLD : PRIMARY_COLOR_DARK,
//                                 border: index !== currentIndex ? `2px solid ${ACCENT_COLOR_GOLD}50` : 'none'
//                             }}
//                             aria-label={`الانتقال إلى الخبر رقم ${index + 1}`}
//                         />
//                     ))}
//                 </div>

//                 {/* زر اعرف المزيد */}
//                 <div className="text-center mt-16">
//                     <a
//                         href="#blog-page" // يمكنك تغيير هذا الرابط لصفحة المدونة
//                         className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold rounded-full transition-all duration-300 shadow-xl"
//                         style={{
//                             backgroundColor: ACCENT_COLOR_GOLD,
//                             color: PRIMARY_COLOR_DARK,
//                             border: `2px solid ${ACCENT_COLOR_GOLD}`,
//                             boxShadow: '0 10px 20px -5px rgba(212, 194, 145, 0.4)',
//                         }}
//                         onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY_COLOR_DARK; e.currentTarget.style.color = TEXT_LIGHT; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ACCENT_COLOR_GOLD; e.currentTarget.style.color = PRIMARY_COLOR_DARK; }}
//                     >
//                         اعرف المزيد عن آخر أخبارنا
//                         <ArrowLeft size={20} className="mr-2" />
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default LatestNewsSection;

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ********************************************
// ألوان الهوية
// ********************************************
const PRIMARY_DARK = "var(--color-primary-800, #123da0)";
const ACCENT_COLOR = "var(--color-secondary-500, #6de7fe)";
const BACKGROUND_DEEP = "var(--color-neutral-900, #111827)";
const CARD_BACKGROUND = "var(--color-neutral-800, #1f2937)";
const TEXT_LIGHT = "var(--color-neutral-50, #f9fafb)";
const TEXT_HINT = "var(--color-neutral-300, #d1d5db)";

// ********************************************
// بيانات الأخبار الافتراضية
// ********************************************
// const newsItems = [
//     {
//         id: 1,
//         title: "تكريم الفائزين بالدورة السادسة لجائزة الأمير عبد العزيز بن فهد",
//         description: "أقيم حفل بهيج لتكريم الفائزين والفائزات من الناشئة في كافة فروع المسابقة لعام ١٤٤٦ هـ.",
//         date: "25/11/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=حفل+التكريم",
//         category: "فعاليات",
//     },
//     {
//         id: 2,
//         title: "اجتماع اللجنة التنسيقية لمراجعة الخطة الاستراتيجية",
//         description: "عقدت اللجنة اجتماعها الدوري لمناقشة التعديلات المقترحة على اللوائح التنفيذية للدورة القادمة.",
//         date: "15/10/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=اجتماع+اللجنة",
//         category: "أخبار اللجنة",
//     },
//     {
//         id: 3,
//         title: "ندوة حول 'أثر القرآن في تنمية المهارات اللغوية'",
//         description: "شاركت اللجنة في تنظيم ندوة علمية بمشاركة كوكبة من الأكاديميين والمتخصصين في علوم اللغة والقرآن.",
//         date: "01/10/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=ندوة+علمية",
//         category: "ندوات ومؤتمرات",
//     },
//     {
//         id: 4,
//         title: "إطلاق المبادرة الرقمية 'مقرئ الناشئة'",
//         description: "مبادرة تهدف لتوفير محتوى تعليمي تفاعلي لحفظ وتجويد القرآن الكريم عن بُعد للناشئة.",
//         date: "20/09/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=مبادرة+رقمية",
//         category: "مشاريع جديدة",
//     },
//     {
//         id: 5,
//         title: "زيارة تفقدية لمركز الإشراف الإقليمي في المنطقة الشرقية",
//         description: "قام وفد من الأمانة العامة بزيارة المراكز للتأكد من جاهزيتها لاستضافة التصفيات الإقليمية.",
//         date: "05/09/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=زيارة+إشرافية",
//         category: "أخبار اللجنة",
//     },
//     {
//         id: 6,
//         title: "إصدار دليل المتسابقين المحدّث لعام ١٤٤٧ هـ",
//         description: "تم إطلاق النسخة الجديدة من دليل المتسابقين، شاملة التعديلات على شروط الفروع والمستويات.",
//         date: "20/08/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=دليل+المتسابقين",
//         category: "إعلانات",
//     },
//     {
//         id: 7,
//         title: "ورشة عمل 'معايير التحكيم المتقدمة'",
//         description: "نظمت ورشة عمل مكثفة لرفع كفاءة المحكمين والمشرفين على المسابقة في جميع مناطق المملكة.",
//         date: "10/08/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=ورشة+عمل",
//         category: "تدريب",
//     },
//     {
//         id: 8,
//         title: "تهنئة الفائزين بجائزة الملك سلمان المحلية",
//         description: "اللجنة التنسيقية ترفع أسمى آيات التهاني للفائزين بجائزة الملك سلمان لحفظ القرآن الكريم.",
//         date: "01/08/2025",
//         imageUrl: "https://placehold.co/400x250/d4c291/057687?text=تهنئة",
//         category: "أخبار عامة",
//     },
//     {
//         id: 9,
//         title: "توقيع اتفاقية تعاون مع جمعية خيرية لتحفيظ القرآن في حائل",
//         description: "يهدف التعاون إلى توسيع نطاق المسابقة وزيادة عدد المشاركين في المنطقة.",
//         date: "15/07/2025",
//         imageUrl: "https://placehold.co/400x250/057687/ffffff?text=اتفاقية+تعاون",
//         category: "شراكات",
//     },
//     {
//         id: 10,
//         title: "الإعلان عن موعد انطلاق التسجيل في الدورة الجديدة",
//         description: "بدء استقبال طلبات التسجيل للمتسابقين والمراكز التعليمية اعتباراً من الشهر القادم.",
//         date: "01/07/2025",
//         imageUrl: "https://placehold.co/400x250/2A2A2A/d4c291?text=اعلان+التسجيل",
//         category: "إعلانات",
//     },
// ];

const newsItems = [
  {
    id: 1,
    title: "تدشين عضوية مجلس الجمعيات الأهلية",
    description:
      "شهد الحدث التاريخي تدشين عضوية مجلس الجمعيات الأهلية بحضور عدد من كبار المسؤولين والمشايخ.",
    date: "9 أغسطس 2023",
    imageUrl: "/hero-bg-1.jpg",
    category: "فعاليات",
  },
  {
    id: 2,
    title: "برعاية أمير منطقة حائل 'مجلس الجمعيات الأهلية شريك تنموي'",
    description:
      "برعاية كريمة، أقيم الملتقى التنسيقي الأول في منطقة حائل لتعزيز دور الجمعيات كشريك تنموي فعال.",
    date: "30 نوفمبر 2023",
    imageUrl: "/hero-bg-2.jpg",
    category: "أخبار اللجنة",
  },
  {
    id: 3,
    title: "زيارة خاصة لسدارة الأعمال الاجتماعية بمنطقة حائل",
    description:
      "قام وفد من اللجنة بزيارة مركز سدارة لمناقشة آفاق التعاون المشترك في خدمة القرآن وأهله.",
    date: "30 نوفمبر 2023",
    imageUrl: "/hero-bg-3.jpg",
    category: "زيارات",
  },
  {
    id: 4,
    title: "إطلاق المبادرة الرقمية 'مقرئ الناشئة'",
    description:
      "مبادرة تهدف لتوفير محتوى تعليمي تفاعلي لحفظ وتجويد القرآن الكريم عن بُعد للناشئة.",
    date: "20/09/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "مشاريع جديدة",
  },
  {
    id: 5,
    title: "زيارة تفقدية لمركز الإشراف الإقليمي في المنطقة الشرقية",
    description:
      "قام وفد من الأمانة العامة بزيارة المراكز للتأكد من جاهزيتها لاستضافة التصفيات الإقليمية.",
    date: "05/09/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "أخبار اللجنة",
  },
  {
    id: 6,
    title: "إصدار دليل المتسابقين المحدّث لعام ١٤٤٧ هـ",
    description:
      "تم إطلاق النسخة الجديدة من دليل المتسابقين، شاملة التعديلات على شروط الفروع والمستويات.",
    date: "20/08/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "إعلانات",
  },
  {
    id: 7,
    title: "ورشة عمل 'معايير التحكيم المتقدمة'",
    description:
      "نظمت ورشة عمل مكثفة لرفع كفاءة المحكمين والمشرفين على المسابقة في جميع مناطق المملكة.",
    date: "10/08/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "تدريب",
  },
  {
    id: 8,
    title: "تهنئة الفائزين بجائزة الملك سلمان المحلية",
    description:
      "اللجنة التنسيقية ترفع أسمى آيات التهاني للفائزين بجائزة الملك سلمان لحفظ القرآن الكريم.",
    date: "01/08/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "أخبار عامة",
  },
  {
    id: 9,
    title: "توقيع اتفاقية تعاون مع جمعية خيرية لتحفيظ القرآن في حائل",
    description:
      "يهدف التعاون إلى توسيع نطاق المسابقة وزيادة عدد المشاركين في المنطقة.",
    date: "15/07/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "شراكات",
  },
  {
    id: 10,
    title: "الإعلان عن موعد انطلاق التسجيل في الدورة الجديدة",
    description:
      "بدء استقبال طلبات التسجيل للمتسابقين والمراكز التعليمية اعتباراً من الشهر القادم.",
    date: "01/07/2025",
    imageUrl: "/hero-bg-3.jpg",
    category: "إعلانات",
  },

  // باقي العناصر كما هي...
].sort((a, b) => new Date(b.date) - new Date(a.date));

// ********************************************
// مكون البطاقة
// ********************************************
const NewsCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs`)} // ✅ عند الضغط ينتقل لصفحة الخبر
      className="flex-shrink-0 w-[350px] md:w-[380px] lg:w-[400px] p-0 overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        backgroundColor: CARD_BACKGROUND,
        border: `1px solid ${ACCENT_COLOR}20`,
        color: TEXT_LIGHT,
      }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x192/${PRIMARY_DARK.replace(
              "#",
              ""
            )}/${TEXT_LIGHT.replace("#", "")}?text=صورة+للخبر`;
          }}
        />
        <span
          className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full"
          style={{ backgroundColor: PRIMARY_DARK + "E0", color: TEXT_LIGHT }}
        >
          {item.category}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between h-48">
        <div className="flex-grow">
          <h3
            className="text-lg font-extrabold mb-2 leading-snug truncate"
            title={item.title}
            style={{ color: ACCENT_COLOR }}
          >
            {item.title}
          </h3>
          <p
            className="text-sm font-light leading-relaxed mb-3 line-clamp-3"
            style={{ color: TEXT_HINT }}
          >
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-start mt-2 pt-3 border-t border-gray-700">
          <Calendar
            size={18}
            className="ml-2 flex-shrink-0"
            style={{ color: ACCENT_COLOR }}
          />
          <span className="text-sm font-bold" style={{ color: TEXT_HINT }}>
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
};

// ********************************************
// أزرار التنقل
// ********************************************
const SliderButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-xl z-20 
               transition-all duration-300 backdrop-blur-sm 
               hover:scale-110 active:scale-95 hidden md:block`}
    style={{
      backgroundColor: PRIMARY_DARK + "D0",
      color: TEXT_LIGHT,
      [direction === "next" ? "right" : "left"]: "1rem", // ✅ تم عكس الاتجاهات لتعمل صح
      border: `2px solid ${ACCENT_COLOR}`,
    }}
    aria-label={direction === "next" ? "التالي" : "السابق"}
  >
    {direction === "next" ? (
      <ChevronRight size={24} />
    ) : (
      <ChevronLeft size={24} />
    )}
  </button>
);

// ********************************************
// المكون الرئيسي
// ********************************************
const LatestNewsSection = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const CARD_WIDTH = 416;

  // ✅ الحركة التلقائية المستمرة من اليمين إلى اليسار كل 2.5 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !isPaused) {
        const { scrollWidth, clientWidth, scrollLeft } = sliderRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - CARD_WIDTH) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({
            left: CARD_WIDTH,
            behavior: "smooth",
          });
        }
      }
    }, 2500); // ⏱️ 2.5 ثانية بين كل حركة
    return () => clearInterval(interval);
  }, [isPaused]);

  // ✅ توقف مؤقت عند التمرير أو الماوس
  const pauseAutoScroll = () => {
    setIsPaused(true);
    clearTimeout(sliderRef.current?.pauseTimeout);
    sliderRef.current.pauseTimeout = setTimeout(() => setIsPaused(false), 5000);
  };

  const scroll = (direction) => {
    pauseAutoScroll();
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? CARD_WIDTH : -CARD_WIDTH;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        direction: "rtl", // ✅ علشان تكون البداية من اليمين
        backgroundColor: BACKGROUND_DEEP,
        fontFamily: "Inter, Tahoma, sans-serif",
        color: TEXT_LIGHT,
        backgroundImage:
          "repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 0, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 20px)",
      }}
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={() =>
        (sliderRef.current.pauseTimeout = setTimeout(
          () => setIsPaused(false),
          5000
        ))
      }
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold pb-13 inline-block relative"
            style={{ color: TEXT_LIGHT }}
          >
            آخر الأخبار والفعاليات
            <span
              className="absolute bottom-0 right-1/4 w-1/2 h-1 rounded-full"
              style={{ backgroundColor: ACCENT_COLOR }}
            ></span>
          </h2>
          <p className="text-lg mt-4" style={{ color: TEXT_HINT }}>
            متابعة مستمرة لجهود اللجنة التنسيقية والمشاركة المجتمعية.
          </p>
        </header>

        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={pauseAutoScroll}
            className="flex overflow-x-auto scrollbar-hide space-x-8 pb-4 snap-x snap-mandatory"
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              scrollbarColor: `${ACCENT_COLOR} ${BACKGROUND_DEEP}`,
            }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="snap-start">
                <NewsCard item={item} />
              </div>
            ))}
          </div>

          {/* أزرار التحريك كما هي */}
          <SliderButton direction="prev" onClick={() => scroll("prev")} />
          <SliderButton direction="next" onClick={() => scroll("next")} />
        </div>

        <div className="text-center mt-16">
          <a
            href="/blogs"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold rounded-full transition-all duration-300 shadow-xl"
            style={{
              backgroundColor: ACCENT_COLOR,
              color: PRIMARY_DARK,
              border: `2px solid ${ACCENT_COLOR}`,
              boxShadow: `0 10px 20px -5px ${ACCENT_COLOR}60`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = PRIMARY_DARK;
              e.currentTarget.style.color = TEXT_LIGHT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ACCENT_COLOR;
              e.currentTarget.style.color = PRIMARY_DARK;
            }}
          >
            اعرف المزيد عن آخر أخبارنا
            <ArrowLeft size={20} className="mr-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
