import React, {
  useEffect,
  useState,
} from 'react';

import {
  Globe,
  Menu,
  X,
} from 'lucide-react';

const HeaderFixed = ({ currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', en: 'Home', ar: 'الرئيسية' },
    { key: 'about', en: 'About Us', ar: 'من نحن' },
    { key: 'history', en: 'History', ar: 'تاريخنا' },
    { key: 'services', en: 'Services', ar: 'خدماتنا' },
    { key: 'clients', en: 'Clients', ar: 'عملاؤنا' },
    { key: 'equipments', en: 'Equipments', ar: 'معداتنا' },
    { key: 'projects', en: 'Projects', ar: 'مشاريعنا' },
    { key: 'contact', en: 'Contact', ar: 'اتصل بنا' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-16 h-16">
              {/* Logo Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="images/logo/images-removebg-preview.png"
                  alt="Company Logo"
                  className="w-20 h-20 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
                />
              </div>
              {/* Red lines around logo */}
              <div className="absolute -top-0 -left-0 w-8 h-8 border-l-2 border-t-2 border-red-500"></div>
              <div className="absolute -bottom-0 -right-0 w-8 h-8 border-r-2 border-b-2 border-red-500"></div>
            </div>
            <div className="ml-3 mr-3">
              <div className={`text-lg font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Abomiskah</div>
              <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                {currentLanguage === 'ar' ? 'شركة المقاولات' : 'Construction Company'}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`relative text-base font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-red-400'
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {currentLanguage === 'ar' ? item.ar : item.en}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLanguage === 'en' ? 'ar' : 'en')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              <Globe className="w-6 h-4" />
              <span>{currentLanguage === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          {isMenuOpen && (
           <div className="lg:hidden absolute top-full left-0 right-0 w-full z-40">
             <div className={`pt-2 pb-3 space-y-1 rounded-lg mt-2 shadow-lg ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md' 
                : 'bg-black/50 backdrop-blur-md'
             }`}>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-white hover:text-red-400 hover:bg-black/30'
                  }`}
                >
                  {currentLanguage === 'ar' ? item.ar : item.en}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderFixed;