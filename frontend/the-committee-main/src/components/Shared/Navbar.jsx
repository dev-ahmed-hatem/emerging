
import React, { useState, useRef, useEffect } from 'react'; // إضافة useRef و useEffect
import { Link, useLocation } from 'react-router-dom';

// ********************************************
// مُكوّنات الأيقونات (Icons)
// ********************************************

// أيقونة قائمة (لشاشات الهاتف)
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 17.25Z" clipRule="evenodd" /></svg>);

// أيقونة إغلاق
const CloseIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>);

// أيقونة سهم لأسفل/أعلى (للقائمة المنسدلة)
const ChevronIcon = ({ isOpen, ...props }) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor"
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

// أيقونات التواصل
const MapPinIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="m11.54 22.351.07.039.066.035.065.035c.142.083.29.155.446.215a47.53 47.53 0 0 0 3.993 1.157c1.498.396 3.064.6 4.673.6a.75.75 0 0 0 0-1.5c-1.637 0-3.18-.198-4.661-.593-.66-.175-1.32-.395-1.972-.656-.12-.047-.238-.096-.354-.147a.75.75 0 0 0-.018-1.472l-1.056-1.056a.75.75 0 0 0-1.06 0L2.73 17.22a.75.75 0 0 0 0 1.06l.858.858ZM14.49 9.19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" /></svg>);
const PhoneIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V4.5Zm4.5 1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9Zm6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" /></svg>);
const FacebookIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.42 16.5V20H12v-7.5h-1.5V10H12V8.5a3.5 3.5 0 0 1 3.5-3.5h2V7H15.5c-.83 0-1 .17-1 1v2.5h3.5l-.5 3h-3V20Z" /></svg>);


// ********************************************
// البيانات
// ********************************************

// الخدمات التي ستظهر في القائمة المنسدلة
const services = [
    { name: 'الندوات', path: '/services/seminars' },
    { name: 'الدعم', path: '/services/support' },
    { name: 'الاستشارات', path: '/services/consultations' },
    { name: 'الدورات التدريبية', path: '/services/training' },
    { name: 'المشروعات', path: '/services/projects' },
];

// روابط التنقل الرئيسية بضمنها الرابط الجديد (الأعضاء)
const mainNavItems = [
    { name: 'الرئيسية', path: '/', type: 'link' },
    { 
      name: 'الخدمات', 
      path: '#', // مسار وهمي للنقر يفتح القائمة
      type: 'dropdown', 
      subLinks: services 
    },
    { name: 'الأعضاء', path: '/members', type: 'link' }, // الرابط الجديد
    { name: 'عن اللجنة', path: '/about', type: 'link' },
    { name: 'المدونة', path: '/blogs', type: 'link' },
    { name: 'اتصل بنا', path: '/contacts', type: 'link' },
];

// ********************************************
// المكوّن الرئيسي: Navbar
// ********************************************

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // حالة قائمة الهاتف
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // حالة قائمة الخدمات
  const dropdownRef = useRef(null); // مرجع لعنصر القائمة المنسدلة للتحقق من النقر خارجه
  const location = useLocation();

  // لوجيك إغلاق القائمة عند الضغط خارجها (Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // إذا كان النقر خارج منطقة القائمة المنسدلة
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // إغلاق قائمة الخدمات عند التنقل إلى صفحة جديدة
  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const contactLinks = [
    { icon: MapPinIcon, text: 'موقع المقر', href: '#', color: 'text-primary-600' },
    { icon: PhoneIcon, text: '+966 5x xxxx', href: 'tel:0000', color: 'text-secondary-600' },
    { icon: FacebookIcon, text: 'صفحتنا', href: '#', color: 'text-info' },
  ];

  // رابط المسابقة المنفصل والمُبرز (يبقى كما هو)
  const competitionLink = { 
    name: 'جائزة القرآن', 
    path: '/prize' 
  };

  // وظيفة مخصصة لتبديل حالة قائمة الخدمات في وضع الهاتف فقط
  // تم تحسينها لتكون في نطاق المكون، لكن الأفضل هو تطبيقها مباشرة في JSX لتجنب التكرار.
  // في النسخة السابقة، كانت هذه الدالة تستخدم بشكل صحيح: setIsServicesDropdownOpen(prev => !prev);
  // سنقوم باستخدامها مباشرة في JSX.
  
  // وظيفة النقر على الروابط (لـ Desktop و Mobile Links العادية)
  const handleLinkClick = (path, type) => {
    if (type === 'link') {
      // إغلاق قائمة الهاتف بعد النقر على رابط عادي
      setIsOpen(false); 
      // إغلاق قائمة الخدمات إذا كانت مفتوحة
      setIsServicesDropdownOpen(false);
    } else if (type === 'dropdown') {
      // تبديل حالة قائمة الخدمات (لـ Desktop فقط)
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  return (
    <>
      {/* ========================================
        CSS مخصص لحركة الوميض (Animation)
        ========================================
      */}
      <style>
        {`
          @keyframes pulse-inner-glow {
            0% {
                background-color: #FFFFFF; 
                border-color: #F59E0B; 
                transform: scale(1);
            }
            50% {
                background-color: #FFFFFF; 
                border-color: #D97706; 
                transform: scale(1.09);
            }
            100% {
                background-color: #FFFFFF; 
                border-color: #F59E0B; 
                transform: scale(1);
            }
          }
          .animate-flash-button {
            animation: pulse-inner-glow 1.5s infinite alternate ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(234, 179, 8, 0.3); 
          }
        `}
      </style>
      
      <nav className="bg-white sticky top-0 z-50 transition-all duration-500 ease-out shadow-lg border-b-2 border-primary-500/10">
        
        <div className="container">
          {/* الصف العلوي: اللوجو وأدوات التواصل */}
          <div className="flex items-center justify-between h-12 md:h-15">
            
            {/* 1. الشعار / اللوجو */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="شعار اللجنة التنسيقية" 
                  className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
                  onError={(e) => { e.target.onerror = null; e.target.src="/placeholder.png" }}
                />
              </Link>
            </div>

            {/* 2. أيقونات التواصل السريع (Desktop/Tablet) */}
            <div className="hidden sm:flex items-center space-x-8   text-sm font-medium">
              {contactLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className={`flex items-center gap-2 text-neutral-600 hover:text-primary-700 transition-all duration-300 group`}
                  aria-label={`تواصل عبر ${item.text}`}
                >
                  <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className='font-committee-primary hidden md:inline'>{item.text}</span>
                </a>
              ))}
            </div>

            {/* 3. زر القائمة المنسدلة (Mobile) */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-primary-700 hover:text-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg transform hover:scale-105"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <CloseIcon className="h-8 w-8" />
                ) : (
                  <MenuIcon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
          
          {/* 4. الشريط السفلي: الروابط الأساسية وأزرار العمليات (Desktop) */}
          <div className="hidden sm:flex justify-between items-center h-12 border-t border-neutral-100/70">
              
              {/* روابط التنقل الرئيسية (Desktop) */}
              <div className="flex space-x-10   font-committee-primary text-neutral-800">
                  {mainNavItems.map((item) => {
                      const isActive = location.pathname === item.path; 

                      // حالة القائمة المنسدلة "الخدمات"
                      if (item.type === 'dropdown') {
                          return (
                              <div key={item.name} className="relative" ref={dropdownRef}>
                                  {/* رابط القائمة المنسدلة */}
                                  <button
                                      onClick={() => handleLinkClick(item.path, item.type)}
                                      className={`flex items-center gap-1 text-base font-medium py-1 relative group transition-all duration-300 ease-in-out 
                                          ${isServicesDropdownOpen ? 'text-primary-700 font-bold' : 'text-neutral-700 hover:text-primary-700'}`}
                                  >
                                      {item.name}
                                      <ChevronIcon isOpen={isServicesDropdownOpen} className="mt-0.5"/>
                                      <span 
                                          className={`absolute bottom-0 right-0 h-[3px] transition-all duration-300 
                                          ${isServicesDropdownOpen ? 'w-full bg-primary-600' : 'w-0 bg-primary-500 group-hover:w-full'}`}
                                      ></span>
                                  </button>
                                  
                                  {/* القائمة المنسدلة نفسها - تصميم انسيابي وحركي */}
                                  <div
                                      className={`absolute right-0 mt-3 w-64 bg-white border border-primary-100 rounded-xl shadow-2xl overflow-hidden 
                                          transform origin-top-right transition-all duration-300 ease-out  
                                          ${isServicesDropdownOpen 
                                              ? 'opacity-100 scale-y-100 translate-y-0 ' 
                                              : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}` 
                                      }
                                  >
                                      {item.subLinks.map((subLink) => (
                                          <Link
                                              key={subLink.name}
                                              to={subLink.path}
                                              onClick={() => setIsServicesDropdownOpen(false)}
                                              className="block px-6 py-3 text-sm text-neutral-800 font-medium  
                                                  hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 border-b border-primary-50/50 last:border-b-0"
                                          >
                                              {subLink.name}
                                          </Link>
                                      ))}
                                      {/* تذييل لتمييز الهوية */}
                                      <div className="px-6 py-2 bg-primary-50 text-xs text-primary-600 font-bold text-center border-t border-primary-100">
                                        خدماتنا لدعم المجتمع
                                      </div>
                                  </div>
                              </div>
                          );
                      }

                      // حالة الروابط العادية (الرئيسية، الأعضاء، عن اللجنة، إلخ)
                      return (
                          <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => handleLinkClick(item.path, item.type)}
                              className={`text-base font-medium py-1 relative group 
                                  ${location.pathname === item.path ? 'text-primary-700 font-bold' : 'text-neutral-700 hover:text-primary-700'} 
                                  transition-all duration-300 ease-in-out`}
                          >
                              {item.name}
                              {/* خط متحرك أسفل الرابط */}
                              <span 
                                  className={`absolute bottom-0 right-0 h-[3px] transition-all duration-300 
                                  ${location.pathname === item.path ? 'w-full bg-primary-600' : 'w-0 bg-primary-500 group-hover:w-full'}`}
                              ></span>
                          </Link>
                      );
                  })}
              </div>

              {/* زر المسابقة وزر الانضمام */}
              <div className="flex items-center space-x-10  "> 
                  
                  {/* زر المسابقة - تطبيق الوميض الداخلي */}
                  <Link
                      to={competitionLink.path}
                      className="inline-flex items-center px-5 py-2 border-2 border-secondary-500 text-sm font-bold rounded-2xl 
                          text-secondary-700 bg-secondary-50 hover:bg-secondary-100 transition-all duration-300 shadow-md shadow-secondary-500/30 
                          transform hover:scale-[1.03] active:scale-95 animate-flash-button" 
                  >
                      {competitionLink.name}
                  </Link>

                  {/* زر الانضمام - تصميم عصري باللون الأساسي */}
                  <Link
                      to="/contacts"
                      className="inline-flex items-center px-6 py-2 border border-transparent text-xs font-bold rounded-2xl 
                          text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/50 
                          transform hover:scale-[1.05] active:scale-95"
                  >
                      انضم إلينا
                  </Link>
              </div>
          </div>
        </div>

        {/* 5. قائمة الهاتف (Mobile Menu) */}
        <div 
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-500 ease-in-out sm:hidden ${
            isOpen ? 'max-h-screen opacity-100 py-4 shadow-xl border-t border-primary-100' : 'max-h-0 opacity-0'
          } bg-white`}
        >
          <div className="container flex flex-col space-y-3 font-committee-primary text-neutral-800">
            
            {/* روابط التنقل الرئيسية في الهاتف */}
            {mainNavItems.map((item) => {
                const isActive = location.pathname === item.path;

                if (item.type === 'dropdown') {
                  return (
                    <div key={item.name} className="border-b border-primary-50/50 pb-2">
                        {/* رابط "الخدمات" في قائمة الهاتف */}
                        <button
                            // [FIX] استخدام دالة تبديل الحالة مباشرة لضمان العمل كـ Toggle
                            onClick={() => setIsServicesDropdownOpen(prev => !prev)} 
                            className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 
                                ${isServicesDropdownOpen ? 'bg-primary-50 text-primary-700 font-bold' : 'hover:bg-primary-50 hover:text-primary-700'}`}
                            aria-expanded={isServicesDropdownOpen}
                        >
                            {item.name}
                            <ChevronIcon isOpen={isServicesDropdownOpen} className="mt-0.5 w-6 h-6"/>
                        </button>

                        {/* قائمة الخدمات المنسدلة في الهاتف */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                            ${isServicesDropdownOpen ? 'max-h-60 pt-2' : 'max-h-0'}`}>
                            <div className='bg-primary-50/50 rounded-lg p-2 space-y-1 mr-4 border-r-4 border-primary-300'>
                                {item.subLinks.map(subLink => {
                                    // [New] حساب حالة التفعيل للرابط الفرعي
                                    const isSubLinkActive = location.pathname === subLink.path;

                                    return (
                                        <Link
                                            key={subLink.name}
                                            to={subLink.path}
                                            // عند النقر على رابط فرعي، يتم إغلاق قائمة الهاتف الرئيسية وقائمة الخدمات الفرعية
                                            onClick={() => { setIsOpen(false); setIsServicesDropdownOpen(false); }}
                                            className={`block px-4 py-1.5 text-base rounded-md transition-colors 
                                                ${isSubLinkActive 
                                                    ? 'bg-white text-primary-800 font-bold shadow-sm' // تنسيق نشط
                                                    : 'text-neutral-700 hover:bg-white' // تنسيق عادي
                                                }`}
                                        >
                                            {subLink.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleLinkClick(item.path, item.type)}
                    className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 
                        ${isActive ? 'bg-primary-50 text-primary-700 font-bold' : 'hover:bg-primary-50 hover:text-primary-700'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            
            {/* زر المسابقة في قائمة الهاتف */}
            <Link
              to={competitionLink.path}
              onClick={() => { setIsOpen(false); setIsServicesDropdownOpen(false); }}
              className="mt-4 block w-full text-center px-4 py-3 text-base font-bold rounded-xl 
                  text-secondary-700 bg-secondary-100 hover:bg-secondary-200 transition-all duration-300 shadow-md shadow-secondary-500/40 
                  transform hover:scale-[0.99] active:scale-95 border-2 border-secondary-300"
            >
              {competitionLink.name}
            </Link>

            {/* أيقونات التواصل في قائمة الهاتف */}
            <div className="pt-4 border-t border-neutral-200 mt-4 space-y-2">
              <p className="px-4 py-1 text-sm text-neutral-500 font-bold border-b border-neutral-100">تواصل سريع:</p>
              {contactLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg hover:bg-neutral-50 transition-colors group"
                  onClick={() => { setIsOpen(false); setIsServicesDropdownOpen(false); }}
                >
                  <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-105 transition-transform`} />
                  <span className='font-committee-primary'>{item.text}</span>
                </a>
              ))}
            </div>

            {/* زر الانضمام في قائمة الهاتف */}
            <Link
              to="/contacts"
              onClick={() => { setIsOpen(false); setIsServicesDropdownOpen(false); }}
              className="mt-6 block w-full text-center px-4 py-3 text-base font-bold rounded-xl 
                  text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-md shadow-primary-500/40 
                  transform hover:scale-[0.99] active:scale-95"
            >
              انضم إلينا الآن
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
