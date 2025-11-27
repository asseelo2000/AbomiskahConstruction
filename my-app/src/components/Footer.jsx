import React from 'react';

import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

import { SparklesCore } from '../ui/sparkles';

"use client";

const Footer = ({ currentLanguage }) => {
  const content = {
    en: {
      company: {
        name: "Abomiskah",
        tagline: "Construction Company",
        description: "Pioneering Excellence Since 1960. We deliver high-quality construction solutions that stand the test of time."
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#home" },
          { name: "About Us", href: "#about" },
          { name: "Services", href: "#services" },
          { name: "Projects", href: "#projects" },
          { name: "Clients", href: "#clients" },
          { name: "Contact", href: "#contact" }
        ]
      },
      services: {
        title: "Our Services",
        items: [
          "Roads and Bridges",
          "Construction",
          "Well Drilling",
          "Infrastructure Projects",
          "Sustainable Development Projects",
          "Solar and Clean Energy",
        ]
      },
      contact: {
        title: "Contact Info",
        address: "Al-Hasbah, in front of the Central Market",
        phone: "711101986 - 771105751",
        email: "Haabomiska@abomiska.com  Hisham@abomiskah.org"
      },
      social: {
        title: "Follow Us"
      },
      bottom: {
        copyright: "© 2025 Abomiskah Construction Company. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      backToTop: "Back to Top"
    },
    ar: {
      company: {
        name: "أبو مسكة",
        tagline: "شركة المقاولات",
        description: "نبني التميز منذ 1960. نقدم حلول إنشائية عالية الجودة تصمد أمام اختبار الزمن."
      },
      quickLinks: {
        title: "روابط سريعة",
        links: [
          { name: "الرئيسية", href: "#home" },
          { name: "من نحن", href: "#about" },
          { name: "خدماتنا", href: "#services" },
          { name: "مشاريعنا", href: "#projects" },
          { name: "عملاؤنا", href: "#clients" },
          { name: "اتصل بنا", href: "#contact" }
        ]
      },
      services: {
        title: "خدماتنا",
        items: [
          "الطرق والجسور",
          "الإنشاءات",
          "حفر الابار",
          "مشاريع البنى التحتية",
          "المشاريع التنموية المستدامة",
          "الطاقة الشمسية والطاقة النظيفة",
        ]
      },
      contact: {
        title: "معلومات الاتصال",
        address: "الحصبة امام السوق المركزي",
        phone: "711101986 -	771105751",
        email: "Haabomiska@abomiska.com  Hisham@abomiskah.org"
      },
      social: {
        title: "تابعنا"
      },
      bottom: {
        copyright: "© 2024 شركة أبو مسكة للمقاولات. جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة"
      },
      backToTop: "العودة للأعلى"
    }
  };

  const currentContent = content[currentLanguage];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Sparkles Overlay */}
      <div className="w-full absolute inset-0 h-full z-0">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className={`relative ${currentLanguage === 'ar' ? 'ml-4' : 'mr-4'}`}>
                <img
                  src="images/logo/AbomiskaLogo.png"
                  alt={`${currentContent.company.name} logo`}
                  className="w-12 h-12 object-contain rounded"
                />
                {/* Red lines around logo */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-red-400 pointer-events-none"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-red-400 pointer-events-none"></div>
              </div>
              <div>
                <div className="text-lg font-semibold">{currentContent.company.name}</div>
                <div className="text-sm text-gray-400">{currentContent.company.tagline}</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {currentContent.company.description}
            </p>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{currentContent.social.title}</h3>
              <div className="flex gap-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{currentContent.quickLinks.title}</h3>
            <ul className="space-y-3">
              {currentContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{currentContent.services.title}</h3>
            <ul className="space-y-3">
              {currentContent.services.items.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{currentContent.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary m-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{currentContent.contact.address}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary m-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{currentContent.contact.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary m-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{currentContent.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {currentContent.bottom.copyright}
            </p>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {currentContent.bottom.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {currentContent.bottom.terms}
              </a>

              {/* Back to Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                className={`inline-flex items-center px-3 py-1.5 border border-gray-600 rounded text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ${currentLanguage === 'ar' ? 'space-x-reverse' : ''}`}
              >
                <ArrowUp className={`w-4 h-4 mr-2 ${currentLanguage === 'ar' ? 'ml-2 mr-0' : ''}`} />
                {currentContent.backToTop}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;