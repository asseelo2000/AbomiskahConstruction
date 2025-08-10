import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ currentLanguage, onLanguageChange }) => {
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
    { key: 'services', en: 'Services', ar: 'خدماتنا' },
    { key: 'history', en: 'History', ar: 'تاريخنا' },
    { key: 'equipments', en: 'Equipments', ar: 'معداتنا' },
    { key: 'projects', en: 'Projects', ar: 'مشاريعنا' },
    { key: 'contact', en: 'Contact', ar: 'اتصل بنا' }
    // { key: 'clients', en: 'Clients', ar: 'عملاؤنا' },
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
            <div className="relative">
              <div className="text-2xl lg:text-3xl font-bold">
                <span className="text-primary">A</span>
                <span className="text-primary">M</span>
              </div>
              {/* Red lines around logo */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-accent"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-accent"></div>
            </div>
            <div className="ml-3 mr-3">
              <div className="text-lg font-semibold text-foreground">Abomiskah</div>
              <div className="text-xs text-muted-foreground">
                {currentLanguage === 'ar' ? 'شركة المقاولات' : 'Construction Company'}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {currentLanguage === 'ar' ? item.ar : item.en}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(currentLanguage === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? 'العربية' : 'English'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-200"
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

export default Header;

