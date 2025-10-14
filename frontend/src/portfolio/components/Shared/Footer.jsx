import React from "react";
import { Link } from "react-router";
import { FaTiktok, FaXTwitter, FaFacebookF } from "react-icons/fa6";

import {
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaSnapchatGhost,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

// ===================== بيانات =====================

// الخدمات التي ستظهر في القائمة المنسدلة
const services = [
  { name: "الندوات", path: "/" },
  { name: "الدعم", path: "/" },
  { name: "الاستشارات", path: "/" },
  { name: "الدورات التدريبية", path: "/" },
  { name: "المشروعات", path: "/" },
];

// روابط التنقل الرئيسية
const mainNavItems = [
  { name: "الرئيسية", path: "/", type: "link" },
  { name: "الأعضاء", path: "/members", type: "link" },
  { name: "عن اللجنة", path: "/about", type: "link" },
  // { name: "المدونة", path: "/blogs", type: "link" },
  { name: "اتصل بنا", path: "/contacts", type: "link" },
];

// بيانات التواصل
const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-primary-400 h-5 w-5" />,
    text: "الجزيرة، الرويس، جدة ",
    href: "https://maps.app.goo.gl/YP9XumEkUm9kPXvs5",
    target:"_blank"
  },
  {
    icon: <FaPhone className="text-primary-400 h-5 w-5" />,
    text: "966553066775‬+ (للاستفسارات)",
    href: "tel:+966553066775",
  },
];

// روابط السياسات السفلية
const policyLinks = [
  { name: "سياسة الخصوصية", path: "/privacy" },
  { name: "شروط الاستخدام", path: "/terms" },
  { name: "الأسئلة الشائعة", path: "/faq" },
];

// روابط التواصل الاجتماعي
const socialLinks = [
  // {
  //   icon: <FaInstagram />,
  //   href: "https://www.instagram.com/ccsqmksa",
  //   label: "Instagram",
  // },
  // {
  //   icon: <FaTiktok />,
  //   href: "https://www.tiktok.com/@ccsqmksa",
  //   label: "TikTok",
  // },
  // {
  //   icon: <FaSnapchatGhost />,
  //   href: "https://www.snapchat.com/add/ccsqmksa",
  //   label: "Snapchat",
  // },
  // {
  //   icon: <FaXTwitter />,
  //   href: "https://x.com/ccsqmKSA",
  //   label: "X (Twitter)",
  // },
];

// ===================== المكون الفرعي =====================
const FooterLinkGroup = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-bold text-primary-300 mb-5 border-b-2 border-primary-500/50 pb-2 inline-block">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.path}
            className="text-neutral-300 hover:text-primary-400 text-sm transition-colors duration-200 relative group"
          >
            {link.name}
            <span className="absolute bottom-0 right-0 h-[1px] bg-primary-400 transition-all duration-300 w-0 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ===================== Footer =====================
const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t-4 border-primary-600 font-inter">
      {/* القسم العلوي */}
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16">
          {/* العمود 1: الشعار والوصف */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="شعار اللجنة"
                className="h-20 w-auto opacity-90 hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              نعمل كجسر تنسيقي لتعزيز الشراكات وتقديم الدعم الفني والتدريبي
              للمبادرات المجتمعية الرائدة.
            </p>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-neutral-500 hover:text-primary-400 transition-colors duration-200 text-xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* العمود 2: روابط سريعة */}
          <FooterLinkGroup
            title="روابط سريعة"
            links={mainNavItems.filter((item) => item.type === "link")}
          />

          {/* العمود 3: خدماتنا */}
          <FooterLinkGroup title="خدماتنا الأساسية" links={services} />

          {/* العمود 4: معلومات الاتصال */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary-300 mb-5 border-b-2 border-primary-500/50 pb-2 inline-block">
              للتواصل معنا
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 group"
                >
                  {item.icon}
                  <span dir="ltr" className="text-right">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            {/* زر دعوة للعمل */}
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 border border-transparent text-sm font-bold rounded-xl 
                                text-neutral-100 bg-primary-400 hover:bg-primary-300 transition-all duration-300 shadow-xl shadow-primary-500/30 
                                transform hover:scale-[1.02] active:scale-95"
            >
              انضم إلينا اليوم
            </Link>
          </div>
        </div>
      </div>

      {/* شريط الحقوق */}
      <div className="bg-neutral-800 border-t border-primary-800">
        <div className="container py-4 flex justify-center text-xs text-neutral-400 text-center">
          <p className="order-2 sm:order-1 mt-3 sm:mt-0">
            &copy; {new Date().getFullYear()} اللجنة التنسيقية. جميع الحقوق
            محفوظة.
          </p>
          <div className="order-1 sm:order-2 flex flex-wrap justify-center gap-4 font-medium">
            
            
            
            
            
            {/* مفيشششش بوليسي يحمادةةةةةةةةةة */}
            
            
            
            
            {/* {policyLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-primary-400 transition-colors"
              >
                {link.name}
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
