const Footer = () => {
  return (
    <footer className="bg-minsk-950 text-white py-6 padding-container mt-10">
      <div
        className="max-w-7xl mx-auto flex flex-wrap
      justify-between items-center gap-4"
      >
        {/* Logo */}
        {/* <a href="https://kaffo.co"> */}
        {/* <Logo className="fill-orange hover:fill-orange-200 size-40" /> */}
        <img
          src="/logo.jpeg"
          alt="logo"
          className="rounded-lg h-40 bg-white px-8"
        />

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">
            اللجنة التنسيقية لجمعيات تحفيظ القرآن الكريم بالمملكة
          </h2>
          {/* <p className="text-ﻻشسث text-gray-400 mt-2">
            منصة شاملة لتنظيم بيانات المستفيدين وإدارة العمليات اليومية.
          </p> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - اللجنة التنسيقية
        لجمعيات تحفيظ القرآن الكريم <br />
      </div>
    </footer>
  );
};

export default Footer;
