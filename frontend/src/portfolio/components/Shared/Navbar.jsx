import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { FaTiktok, FaXTwitter, FaFacebookF } from "react-icons/fa6";

import {
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaSnapchatGhost,
} from "react-icons/fa";

const contactLinks = [
  {
    icon: FaMapMarkerAlt,
    text: "موقع المقر",
    href: "https://maps.app.goo.gl/2swqBmpEMwC4ijFB9",
    color: "text-primary-600",
  },
  {
    icon: FaPhoneAlt,
    text: "+966 55 3066775",
    href: "tel:+966553066775",
    color: "text-secondary-600",
  },
  {
    icon: FaInstagram,
    text: "إنستغرام",
    href: "https://www.instagram.com/ccsqmksa",
    color: "text-pink-500",
  },
  {
    icon: FaTiktok,
    text: "تيك توك",
    href: "https://www.tiktok.com/@ccsqmksa",
    color: "text-gray-800",
  },
  {
    icon: FaSnapchatGhost,
    text: "سناب شات",
    href: "https://www.snapchat.com/add/ccsqmksa",
    color: "text-yellow-500",
  },
  {
    icon: FaXTwitter,
    text: "إكس (تويتر)",
    href: "https://x.com/ccsqmKSA",
    color: "text-sky-500",
  },
  {
    icon: FaFacebookF,
    text: "فيسبوك",
    href: "#",
    color: "text-blue-600",
  },
];

const services = [
  { name: "الندوات", path: "/services/seminars" },
  { name: "الدعم", path: "/services/support" },
  { name: "الاستشارات", path: "/services/consultations" },
  { name: "الدورات التدريبية", path: "/services/training" },
  { name: "المشروعات", path: "/services/projects" },
];

const mainNavItems = [
  { name: "الرئيسية", path: "/", type: "link" },
  // { name: "الخدمات", path: "#", type: "dropdown", subLinks: services },
  { name: "الأعضاء", path: "/members", type: "link" },
  { name: "عن اللجنة", path: "/about", type: "link" },
  // { name: "المدونة", path: "/blogs", type: "link" },
  { name: "اتصل بنا", path: "/contacts", type: "link" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const competitionLink = { name: "جائزة القرآن", path: "/prize" };

  const handleLinkClick = (path, type) => {
    if (type === "link") {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
    } else if (type === "dropdown") {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  return (
    <nav
      className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100"
      dir="rtl"
    >
      <style>
        {`
          @keyframes pulse-inner-glow {
            0% { transform: scale(1); border-color: #F59E0B; }
            50% { transform: scale(1.05); border-color: #D97706; }
            100% { transform: scale(1); border-color: #F59E0B; }
          }
          .animate-flash-button {
            animation: pulse-inner-glow 1.5s infinite alternate ease-in-out;
            box-shadow: 0 3px 6px rgba(234, 179, 8, 0.25);
          }
        `}
      </style>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- TOP BAR --- */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="شعار اللجنة"
              className="h-12 w-auto transition-transform hover:scale-105"
              onError={(e) => (e.target.src = "/placeholder.png")}
            />
          </Link>

          {/* Contact info (Desktop only) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {contactLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary-700 transition"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-700 hover:text-primary-900 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* --- MAIN NAV (Desktop) --- */}
        <div className="hidden md:flex justify-between items-center py-3 border-t border-gray-100">
          <div className="flex gap-8 text-sm font-semibold text-gray-800">
            {mainNavItems.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => handleLinkClick(item.path, item.type)}
                    className={`flex items-center gap-1 py-1 transition ${
                      isServicesDropdownOpen
                        ? "text-primary-700 font-bold"
                        : "text-gray-700 hover:text-primary-700"
                    }`}
                  >
                    {item.name}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path, item.type)}
                  className={`py-1 ${
                    location.pathname === item.path
                      ? "text-primary-700 font-bold"
                      : "text-gray-700 hover:text-primary-700"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={competitionLink.path}
              className="px-5 py-2 border-2 border-amber-500 text-sm font-bold rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition animate-flash-button"
            >
              {competitionLink.name}
            </Link>
            <Link
              to="/contacts"
              className="px-6 py-2 text-sm font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition"
            >
              انضم إلينا
            </Link>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 text-sm">
          {mainNavItems.map((item) =>
            item.type === "dropdown" ? (
              <div key={item.name}>
                <button
                  onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 font-semibold hover:bg-primary-50 rounded-lg"
                >
                  {item.name}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 transition-transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="mt-2 pr-4 border-r-2 border-primary-200 space-y-1">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1.5 text-gray-600 hover:bg-primary-50 rounded-md"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg font-semibold ${
                  location.pathname === item.path
                    ? "bg-primary-50 text-primary-700"
                    : "hover:bg-primary-50"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Competition + Join Buttons */}
          <div className="pt-3 space-y-3">
            <Link
              to={competitionLink.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 font-bold rounded-lg border-2 border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 transition animate-flash-button"
            >
              {competitionLink.name}
            </Link>
            <Link
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
            >
              انضم إلينا الآن
            </Link>
          </div>

          {/* ✅ Contact info inside mobile menu */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-gray-700 font-bold mb-2">معلومات التواصل</h4>
            <div className="grid grid-cols-2 gap-3">
              {contactLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-700 transition text-sm"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
