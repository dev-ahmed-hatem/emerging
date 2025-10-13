import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

// ********************************************
// ألوان الهوية لجوائز القرآن
// ********************************************
const PRIMARY_COLOR_DARK = "#057687"; // الفيروزي الداكن (لون خلفية رصين)
const ACCENT_COLOR_GOLD = "#d4c291"; // الذهبي المطفأ (لون الفخامة والتمييز)
const TEXT_LIGHT = "#FFFFFF"; // لون النص الأساسي

// ********************************************
// المكون الرئيسي: AppFooter
// ********************************************

const AppFooter = () => {
  // بيانات الروابط والقوائم
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "عن الجائزة", href: "#about" },
    { name: "فروع المسابقة", href: "#sections" },
    { name: "لجنة التحكيم", href: "#judges" },
  ];

  const supportLinks = [
    { name: "شروط التسجيل", href: "#rules" },
    { name: "دليل المرشحين للجائزة", href: "#guide" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "سياسة الخصوصية", href: "#privacy" },
  ];

  // بيانات التواصل
  const contactInfo = [
    { icon: Mail, text: " ", detail: "البريد الرسمي" },
    { icon: Phone, text: " ", detail: "هاتف الدعم المباشر" },
    { icon: MapPin, text: "", detail: "مقر الأمانة العامة" },
  ];

  // روابط التواصل الاجتماعي
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "فيسبوك" },
    { icon: Twitter, href: "https://twitter.com", label: "تويتر" },
    { icon: Instagram, href: "https://instagram.com", label: "إنستغرام" },
  ];

  // عنصر الرابط بتصميم كلاسيكي هادئ
  const FooterLink = ({ name, href }) => (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 relative text-base font-normal leading-loose"
    >
      {name}
    </a>
  );

  return (
    <footer
      className="w-full shadow-2xl"
      style={{
        direction: "rtl",
        fontFamily: "Almarai, Tahoma, sans-serif", // استخدام خط ذو طابع عربي
        backgroundColor: PRIMARY_COLOR_DARK,
        color: TEXT_LIGHT,
      }}
    >
      {/* ******************************************** */}
      {/* القسم العلوي: التفاصيل الأساسية */}
      {/* ******************************************** */}
      <div
        className="py-16 md:py-20 px-6 md:px-10 border-b border-opacity-20"
        style={{ borderColor: ACCENT_COLOR_GOLD }}
      >
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8">
          {/* 1. شعار وعنوان الجائزة */}
          <div className="space-y-6 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3  ">
              {/* يمكن استبدال هذا بـ <img src="URL" /> لشعار الجائزة */}

              <h3
                className="text-3xl md:text-4xl font-extrabold tracking-wide"
                style={{ color: ACCENT_COLOR_GOLD }}
              >
                جائزة الناشئة لحفظ القرآن الكريم
              </h3>
            </div>

            <p className="text-sm leading-6 max-w-sm text-gray-100">
              ترعى الجائزة الناشئة في حفظ كتاب الله، وتشجعهم على التجويد
              والإتقان، في سبيل خدمة القرآن الكريم وأهله.
            </p>
          </div>

          {/* 2. روابط الجائزة (عمود واحد) */}
          <div className="space-y-4">
            <h4
              className="text-xl font-bold pb-2 border-b border-opacity-30"
              style={{
                borderColor: ACCENT_COLOR_GOLD,
                color: ACCENT_COLOR_GOLD,
              }}
            >
              روابط الجائزة
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          {/* 3. الدعم والتوجيه (عمود واحد) */}
          <div className="space-y-4">
            <h4
              className="text-xl font-bold pb-2 border-b border-opacity-30"
              style={{
                borderColor: ACCENT_COLOR_GOLD,
                color: ACCENT_COLOR_GOLD,
              }}
            >
              إرشادات المتسابق
            </h4>
            <div className="flex flex-col space-y-2">
              {supportLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          {/* 4. معلومات التواصل (عمود واحد) */}
          <div className="space-y-6 lg:col-span-1">
            <h4
              className="text-xl font-bold pb-2 border-b border-opacity-30"
              style={{
                borderColor: ACCENT_COLOR_GOLD,
                color: ACCENT_COLOR_GOLD,
              }}
            >
              تواصل مع الأمانة
            </h4>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3  ">
                  <item.icon
                    size={20}
                    strokeWidth={2.5}
                    style={{ color: ACCENT_COLOR_GOLD, marginTop: "4px" }}
                  />
                  <div className="text-sm">
                    <p className="font-light text-gray-100">{item.detail}</p>
                    <p
                      className="text-base font-semibold break-words"
                      style={{ color: TEXT_LIGHT }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ******************************************** */}
      {/* القسم السفلي: حقوق الملكية والتواصل الاجتماعي */}
      {/* ******************************************** */}
      <div className="py-6 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* حقوق الملكية */}
          <p className="text-sm md:text-base font-medium text-gray-400">
            جميع الحقوق محفوظة لأمانة جائزة الناشئة لحفظ القرآن الكريم &copy;{" "}
            {new Date().getFullYear()}.
          </p>

          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex space-x-5  ">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: ACCENT_COLOR_GOLD }}
                aria-label={link.label}
              >
                <link.icon size={22} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
