import React from 'react';
import { Link } from 'react-router-dom';

// ********************************************
// مُكوّنات الأيقونات (Icons) - مُعاد استخدامها ومُضافة
// ********************************************

const MapPinIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="m11.54 22.351.07.039.066.035.065.035c.142.083.29.155.446.215a47.53 47.53 0 0 0 3.993 1.157c1.498.396 3.064.6 4.673.6a.75.75 0 0 0 0-1.5c-1.637 0-3.18-.198-4.661-.593-.66-.175-1.32-.395-1.972-.656-.12-.047-.238-.096-.354-.147a.75.75 0 0 0-.018-1.472l-1.056-1.056a.75.75 0 0 0-1.06 0L2.73 17.22a.75.75 0 0 0 0 1.06l.858.858ZM14.49 9.19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" /></svg>);
const PhoneIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V4.5Zm4.5 1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9Zm6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" /></svg>);
const MailIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.44 5.28a3 3 0 0 1-3.12 0L1.5 8.67Z" /><path d="M22.5 6.25a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.3l10.5 6.56a3 3 0 0 0 3.12 0L22.5 6.55v-.3Z" /></svg>);

// أيقونات التواصل الاجتماعي
const FacebookIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.42 16.5V20H12v-7.5h-1.5V10H12V8.5a3.5 3.5 0 0 1 3.5-3.5h2V7H15.5c-.83 0-1 .17-1 1v2.5h3.5l-.5 3h-3V20Z" /></svg>);
const TwitterIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.8.37-1.74.62-2.67.75.92-.55 1.63-1.42 1.96-2.43-.88.52-1.85.9-2.88 1.1-.82-.88-2-1.43-3.32-1.43-2.52 0-4.57 2.05-4.57 4.57 0 .36.04.72.12 1.06C6.18 8.04 3.42 6.54 1.56 4.14c-.4.69-.64 1.5-.64 2.37 0 1.58.8 2.98 2.02 3.8a4.56 4.56 0 0 1-2.06-.57v.06c0 2.22 1.58 4.07 3.67 4.5-.38.1-.78.15-1.18.15-.29 0-.58-.03-.86-.09.58 1.83 2.26 3.16 4.25 3.2v.01c-1.56 1.22-3.52 1.95-5.64 1.95-.37 0-.74-.02-1.1-.06 2.02 1.29 4.42 2.04 7 2.04 8.4 0 13-6.94 13-13 0-.19 0-.39-.01-.58.9-.65 1.67-1.47 2.29-2.4z" /></svg>);
const LinkedInIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.75 14.5V13.5c0-1.5-.5-2.5-1.75-2.5-1 0-1.5.75-1.75 1.5v.75H14v-4.5h2.5v1.5c.35-.55.9-1.25 2.25-1.25 1.5 0 2.75 1 2.75 3V17.5h-2.5zM7.5 7h-2.5V17.5H7.5V7z" /></svg>);


// ********************************************
// البيانات (مُعاد استخدامها من Navbar)
// ********************************************

// الخدمات التي ستظهر في القائمة المنسدلة
const services = [
    { name: 'الندوات', path: '/services/seminars' },
    { name: 'الدعم', path: '/services/support' },
    { name: 'الاستشارات', path: '/services/consultations' },
    { name: 'الدورات التدريبية', path: '/services/training' },
    { name: 'المشروعات', path: '/services/projects' },
];

// روابط التنقل الرئيسية
const mainNavItems = [
    { name: 'الرئيسية', path: '/', type: 'link' },
    { name: 'الأعضاء', path: '/members', type: 'link' }, 
    { name: 'عن اللجنة', path: '/about', type: 'link' },
    { name: 'المدونة', path: '/blogs', type: 'link' },
    { name: 'اتصل بنا', path: '/contacts', type: 'link' },
];

// بيانات التواصل الخاصة بالفوتر
const footerContactInfo = [
    { 
        icon: MapPinIcon, 
        text: 'المقر الرئيسي: الرياض، شارع الأمير محمد بن سلمان', 
        href: '#', 
        label: 'الموقع' 
    },
    { 
        icon: PhoneIcon, 
        text: '+966 5x xxxx (للاستفسارات)', 
        href: 'tel:+9665xxxxxxxx', 
        label: 'رقم الهاتف' 
    },
    { 
        icon: MailIcon, 
        text: 'info@committee.sa', 
        href: 'mailto:info@committee.sa', 
        label: 'البريد الإلكتروني' 
    },
];

// روابط السياسات السفلية
const policyLinks = [
    { name: 'سياسة الخصوصية', path: '/privacy' },
    { name: 'شروط الاستخدام', path: '/terms' },
    { name: 'الأسئلة الشائعة', path: '/faq' },
];

// ********************************************
// المكوّن المساعد: Footer Link Group
// ********************************************

// مُكوّن لإنشاء مجموعات الروابط بشكل نظيف
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
                        {/* خط متحرك عند التحويم */}
                        <span 
                            className="absolute bottom-0 right-0 h-[1px] bg-primary-400 transition-all duration-300 w-0 group-hover:w-full"
                        ></span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

// ********************************************
// المكوّن الرئيسي: Footer
// ********************************************

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t-4 border-primary-600 font-inter  ">
            
            {/* القسم العلوي: الروابط الرئيسية والاتصال */}
            <div className="container py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16">
                    
                    {/* العمود 1: الشعار والوصف */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img 
                                // Placeholder image: 150x40 with white background and text
                                src="/logo.png" 
                                alt="شعار اللجنة" 
                                className="h-25 w-auto filter   opacity-180 hover:opacity-50 transition-opacity duration-300"
                            />
                        </Link>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                            نعمل كجسر تنسيقي لتعزيز الشراكات وتقديم الدعم الفني والتدريبي للمبادرات المجتمعية الرائدة.
                        </p>

                        {/* أيقونات التواصل الاجتماعي */}
                        <div className="flex space-x-4  pt-2">
                            <a href="#" aria-label="فيسبوك" className="text-neutral-500 hover:text-primary-500 transition-colors duration-200">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                            <a href="#" aria-label="تويتر" className="text-neutral-500 hover:text-primary-500 transition-colors duration-200">
                                <TwitterIcon className="h-6 w-6" />
                            </a>
                            <a href="#" aria-label="لينكدإن" className="text-neutral-500 hover:text-primary-500 transition-colors duration-200">
                                <LinkedInIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* العمود 2: روابط سريعة */}
                    <FooterLinkGroup 
                        title="روابط سريعة" 
                        links={mainNavItems.filter(item => item.type === 'link')} // تصفية الروابط العادية فقط
                    />
                    
                    {/* العمود 3: خدماتنا */}
                    <FooterLinkGroup 
                        title="خدماتنا الأساسية" 
                        links={services} 
                    />

                    {/* العمود 4: معلومات الاتصال */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-primary-300 mb-5 border-b-2 border-primary-500/50 pb-2 inline-block">
                            للتواصل معنا
                        </h3>
                        <div className="space-y-4">
                            {footerContactInfo.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.href}
                                    className="flex items-start gap-3 text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 group"
                                >
                                    <item.icon className="h-5 w-5 flex-shrink-0 text-primary-500 group-hover:text-primary-400 transition-colors" />
                                    <span dir="ltr" className='text-right'>{item.text}</span>
                                </a>
                            ))}
                        </div>

                        {/* زر Call to Action */}
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

            {/* شريط حقوق النشر السفلي */}
            <div className="bg-neutral-800 border-t border-primary-800">
                <div className="container py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
                    <p className="order-2 sm:order-1 mt-3 sm:mt-0 text-center">
                        &copy; {new Date().getFullYear()} اللجنة التنسيقية. جميع الحقوق محفوظة.
                    </p>
                    
                    {/* روابط السياسات */}
                    <div className="order-1 sm:order-2 flex space-x-4   font-medium">
                        {policyLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                to={link.path} 
                                className="hover:text-primary-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
