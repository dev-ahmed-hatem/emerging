// import React from 'react';
// // ********************************************
// // استبدال أيقونات Font Awesome بأيقونات Lucide المتوفرة
// // ********************************************
// import { MapPin, Phone, Instagram, Music, Camera, X, Facebook, LocateFixed } from 'lucide-react';

// // ********************************************
// // بيانات التواصل (مأخوذة من طلبك)
// // ********************************************
// const contactLinks = [
//   {
//     icon: MapPin, // بديل FaMapMarkerAlt
//     text: "موقع المقر (الجزيرة، الرويس، جدة 22231)",
//     href: "https://maps.app.goo.gl/2swqBmpEMwC4ijFB9",
//     color: "text-red-600", // لون الخريطة
//     detail: "Al Jazirah, Al-Ruwais, Jeddah 22231",
//   },
//   {
//     icon: Phone, // بديل FaPhoneAlt
//     text: "+966 55 3066775",
//     href: "tel:+966553066775",
//     color: "text-teal-700", // لون الهاتف
//     detail: "جوال وواتس اللجنة التنسيقية",
//   },
//   {
//     icon: Instagram, // بديل FaInstagram
//     text: "إنستغرام",
//     href: "https://www.instagram.com/ccsqmksa",
//     color: "text-pink-500",
//     detail: "@ccsqmksa",
//   },
//   {
//     icon: Music, // بديل FaTiktok (استخدام الموسيقى لتمثيل TikTok)
//     text: "تيك توك",
//     href: "https://www.tiktok.com/@ccsqmksa",
//     color: "text-gray-800",
//     detail: "@ccsqmksa",
//   },
//   {
//     icon: Camera, // بديل FaSnapchatGhost (استخدام الكاميرا لتمثيل Snapchat)
//     text: "سناب شات",
//     href: "https://www.snapchat.com/add/ccsqmksa",
//     color: "text-yellow-500",
//     detail: "@ccsqmksa",
//   },
//   {
//     icon: X, // بديل FaXTwitter
//     text: "إكس (تويتر)",
//     href: "https://x.com/ccsqmKSA",
//     color: "text-sky-500",
//     detail: "@ccsqmKSA",
//   },
//   {
//     icon: Facebook, // بديل FaFacebookF
//     text: "فيسبوك",
//     href: "#", // رابط وهمي للفيسبوك
//     color: "text-blue-600",
//     detail: "/ccsqmksa",
//   },
// ];

// // الألوان الرئيسية للاستخدام الرسمي
// const primaryColor = "teal-700"; // لون أساسي قوي
// const accentColor = "amber-500"; // لون ثانوي للتأكيد

// // ********************************************
// // مكون بطاقة التواصل المفردة
// // ********************************************
// const ContactCard = ({ icon: Icon, text, href, color, detail }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     // تصميم حاد: زوايا مدببة (xl)، ظل واضح، تأثير حركة خفيف
//     className={`
//       flex flex-col items-center justify-center p-6 sm:p-8 text-center h-full
//       bg-white border-2 border-gray-100 rounded-xl shadow-lg
//       transition-all duration-300 ease-in-out cursor-pointer
//       transform hover:scale-[1.02] hover:shadow-xl hover:border-teal-700
//       focus:outline-none focus:ring-4 focus:ring-amber-500/50
//     `}
//     dir="rtl"
//   >
//     {/* الأيقونة - حجم كبير وبلون مخصص. يجب استخدام لون تيلويند كامل هنا */}
//     <Icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 ${color} transition-colors duration-300`} />

//     {/* النص الرئيسي - لوتس بولد (محاكاة) */}
//     <p
//       className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-1"
//       style={{ fontFamily: 'Tajawal, Noto Kufi Arabic, serif', fontWeight: 700 }}
//     >
//       {text}
//     </p>

//     {/* التفاصيل/اسم المستخدم - خط رسمي ورفيع */}
//     <p
//       className="text-sm sm:text-base text-gray-500 font-medium tracking-wide"
//       style={{ fontFamily: 'Cairo, sans-serif' }}
//     >
//       {detail}
//     </p>
//   </a>
// );

// // ********************************************
// // المكون الرئيسي: ContactSection
// // ********************************************
// const ContactSection = () => {

//   // إضافة بعض الخطوط لمحاكاة الأسلوب الرسمي
//   const LotusFont = "Tajawal, Noto Kufi Arabic, serif";
//   const HarirFont = "Harmattan, Cairo, sans-serif";

//   return (
//     <section
//       className="py-12 md:py-16 lg:py-20 bg-gray-50"
//       dir="rtl"
//       // إضافة أسلوب الخطوط
//       style={{ fontFamily: 'Cairo, sans-serif' }}
//     >
//       <style>
//         {`
//           .font-lotus-bold { font-family: ${LotusFont}; font-weight: 700; }
//           .font-harir-bold { font-family: ${HarirFont}; font-weight: 800; }
//           /* Fix for dynamic Tailwind classes when not explicitly present in code */
//           .hover\:border-teal-700:hover { border-color: #047878; }
//           .focus\:ring-amber-500\/50:focus { --tw-ring-color: rgba(245, 158, 11, 0.5); }
//         `}
//       </style>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* العنوان الرئيسي للقسم */}
//         <header className="text-center mb-12 lg:mb-16">
//           <h2
//             className={`text-4xl sm:text-5xl font-harir-bold mb-3 tracking-tight`}
//             style={{ color: `#1f2937` }} // لون داكن للنص من أجل الرسمية
//           >
//             تواصل معنا
//           </h2>
//           <p
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//             style={{ fontFamily: LotusFont, fontWeight: 300 }}
//           >
//             نحن هنا لخدمتك. تفضل بزيارة مقرنا، أو تواصل معنا عبر الهاتف، أو تابعنا على منصات التواصل الاجتماعي.
//           </p>
//           {/* فاصل حاد */}
//           <div className="w-20 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></div>
//         </header>

//         {/* شبكة توزيع الروابط (Distribution Grid) */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {/* عرض البطاقات باستخدام المكون ContactCard */}
//           {contactLinks.map((link, index) => (
//             <ContactCard
//               key={index}
//               icon={link.icon}
//               text={link.text}
//               href={link.href}
//               color={link.color}
//               detail={link.detail}
//             />
//           ))}
//         </div>

//         {/* ملاحظة بخصوص الموقع بشكل منفصل أسفل Grid */}
//         <div className="mt-12 text-center">
//             <h3 className="text-2xl font-bold text-gray-700 mb-4">
//                 معلومات المقر الإضافية:
//             </h3>
//             <a
//                 href="https://maps.app.goo.gl/2swqBmpEMwC4ijFB9"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-lg text-teal-700 hover:text-teal-500 transition-colors"
//             >
//                 <MapPin className="w-5 h-5 ml-2" />
//                 <span>Al Jazirah, Al-Ruwais, Jeddah 22231</span>
//             </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

///////////-------------------------------------

import React from "react";
// ********************************************
// استخدام أيقونات Lucide المدعومة
// ********************************************
import {
  MapPin,
  Phone,
  Instagram,
  Music,
  Camera,
  X,
  Facebook,
} from "lucide-react";

// ********************************************
// بيانات التواصل
// ********************************************
const contactLinks = [
  {
    icon: MapPin,
    title: "الموقع الجغرافي", // تم تغيير النص إلى عنوان رسمي
    href: "https://maps.app.goo.gl/2swqBmpEMwC4ijFB9",
    color: "text-red-600",
    value: "Al Jazirah, Al-Ruwais, Jeddah 22231",
  },
  {
    icon: Phone,
    title: "رقم التواصل (جوال وواتس)",
    href: "tel:+966553066775",
    color: "text-teal-700",
    value: "+966 55 3066775",
  },
  {
    icon: Instagram,
    title: "حساب إنستغرام",
    href: "https://www.instagram.com/ccsqmksa",
    color: "text-pink-500",
    value: "ccsqmksa",
  },
  {
    icon: Music, // لتمثيل TikTok
    title: "حساب تيك توك",
    href: "https://www.tiktok.com/@ccsqmksa",
    color: "text-gray-800",
    value: "ccsqmksa",
  },
  {
    icon: Camera, // لتمثيل Snapchat
    title: "حساب سناب شات",
    href: "https://www.snapchat.com/add/ccsqmksa",
    color: "text-yellow-500",
    value: "ccsqmksa",
  },
  {
    icon: X,
    title: "حساب إكس (تويتر)",
    href: "https://x.com/ccsqmKSA",
    color: "text-sky-500",
    value: "ccsqmKSA",
  },
  {
    icon: Facebook,
    title: "حساب فيسبوك",
    href: "#",
    color: "text-blue-600",
    value: "",
  },
];

// الألوان والخطوط
const primaryColor = "teal-700";
const HarirFont = "Harmattan, Cairo, sans-serif";
const LotusFont = "Tajawal, Noto Kufi Arabic, serif";

// ********************************************
// مكون عنصر التواصل الفردي (بتصميم حقل النموذج)
// ********************************************
const ContactField = ({ icon: Icon, title, value, href, color, isLast }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center justify-between p-4 rounded-lg 
      hover:bg-gray-50 transition-colors duration-200 group
      ${!isLast ? "border-b border-gray-100" : ""}
    `}
    dir="rtl"
  >
    {/* الجزء الأيمن: الأيقونة والعنوان */}
    <div className="flex items-center gap-4">
      {/* الأيقونة الملونة */}
      <div
        className={`p-2 rounded-full ${color.replace("text-", "bg-")}/10`}
        // تأثير حاد على الأيقونة عند التحويم
      >
        <Icon
          className={`w-6 h-6 ${color} transition-transform duration-300 group-hover:scale-110`}
        />
      </div>

      {/* عنوان الحقل (مثل التسمية في النموذج) */}
      <span
        className="text-base font-semibold text-gray-700"
        style={{ fontFamily: LotusFont, fontWeight: 600 }}
      >
        {title}
      </span>
    </div>

    {/* الجزء الأيسر: القيمة (القابلة للنقر) */}
    <div className="flex items-center">
      <span
        className={`text-sm md:text-base text-gray-500 font-medium ml-2 
                      group-hover:text-teal-700 transition-colors`}
        style={{ fontFamily: HarirFont }}
      >
        {value}
      </span>
      {/* أيقونة خارجية لتوضيح أنه رابط */}
      <X
        className="w-4 h-4 text-gray-400 group-hover:text-teal-700 transform group-hover:rotate-45 transition-transform"
        style={{ display: title.includes("فيسبوك") ? "none" : "block" }} // إخفاء الأيقونة إذا لم يكن هناك رابط خارجي فعّال
      />
    </div>
  </a>
);

// ********************************************
// المكون الرئيسي: ContactSection
// ********************************************
const ContactSection = () => {
  return (
    <section
      className="py-12 md:py-20 bg-gray-50"
      dir="rtl"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <style>
        {`
          .font-lotus-bold { font-family: ${LotusFont}; font-weight: 700; }
          .font-harir-bold { font-family: ${HarirFont}; font-weight: 800; }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* العنوان الرئيسي للقسم */}
        <header className="text-center mb-10 lg:mb-14">
          <h2
            className={`text-4xl sm:text-5xl font-harir-bold mb-3 tracking-tight text-gray-800`}
          >
            طرق التواصل الرسمية
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: LotusFont, fontWeight: 300 }}
          >
            كل المعلومات الخاصة بالتواصل معنا مُجمعة في بطاقة واحدة منظمة
            وواضحة.
          </p>
          {/* فاصل حاد */}
          <div className="w-20 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* البطاقة الرئيسية التي تحوي جميع الروابط (Single Box) */}
        <div
          className={`
            bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl border-t-4 border-b-4 border-teal-700 
            max-w-xl mx-auto
            transition-all duration-500
          `}
        >
          <h3 className="text-2xl font-harir-bold text-gray-800 mb-6 border-b pb-3">
            بيانات التواصل
          </h3>

          <div className="space-y-1">
            {contactLinks.map((link, index) => (
              <ContactField
                key={index}
                icon={link.icon}
                title={link.title}
                value={link.value}
                href={link.href}
                color={link.color}
                isLast={index === contactLinks.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
