import React, { useEffect, useState } from 'react';
import { ArrowRight, Building, Users, Award } from 'lucide-react';

const HeroFinal = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    en: {
      title: "Building Tomorrow's",
      titleHighlight: "Infrastructure",
      subtitle: "Leading construction and contracting company delivering exceptional projects across residential, commercial, and industrial sectors.",
      cta1: "View Our Projects",
      cta2: "Get Quote",
      stats: [
        { number: "500+", label: "Projects Completed" },
        { number: "15+", label: "Years Experience" },
        { number: "100+", label: "Happy Clients" }
      ]
    },
    ar: {
      title: "نبني البنية التحتية",
      titleHighlight: "للمستقبل",
      subtitle: "شركة رائدة في المقاولات والإنشاءات تقدم مشاريع استثنائية في القطاعات السكنية والتجارية والصناعية.",
      cta1: "عرض مشاريعنا",
      cta2: "احصل على عرض سعر",
      stats: [
        { number: "500+", label: "مشروع مكتمل" },
        { number: "15+", label: "سنة خبرة" },
        { number: "100+", label: "عميل راضي" }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="/videos/HeroFinalBackgroundVideo.mp4"  // Replace with your actual video file name
      ></video>

      {/* Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-[0]">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-red-400 rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border-2 border-blue-400 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-red-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-xl">
                <span>{currentContent.title}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                  {currentContent.titleHighlight}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white max-w-lg drop-shadow-lg">
                {currentContent.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                {currentContent.cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                {currentContent.cta2}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {currentContent.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">{stat.number}</div>
                  <div className="text-sm text-gray-200 drop-shadow-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Large Logo Representation */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Logo Circle */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/90 to-red-100/90 animate-pulse backdrop-blur-md"></div>
                
                {/* AM Letters */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold drop-shadow-2xl">
                    <span className="text-blue-600">A</span>
                    <span className="text-blue-600">M</span>
                  </div>
                </div>

                {/* Animated Red Lines */}
                <div className="absolute inset-0">
                  {/* Top-left lines */}
                  <div className="absolute top-8 left-8 w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-400 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400 animate-pulse"></div>
                  </div>
                  
                  {/* Top-right lines */}
                  <div className="absolute top-8 right-8 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-1 bg-red-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-red-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Bottom-left lines */}
                  <div className="absolute bottom-8 left-8 w-16 h-16">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-0 left-0 w-1 h-full bg-red-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Bottom-right lines */}
                  <div className="absolute bottom-8 right-8 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-red-400 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute bottom-0 right-0 w-1 h-full bg-red-400 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100/90 rounded-full flex items-center justify-center animate-bounce drop-shadow-lg">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-100/90 rounded-full flex items-center justify-center animate-bounce drop-shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-100/90 rounded-full flex items-center justify-center animate-bounce drop-shadow-lg" style={{ animationDelay: '1s' }}>
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-[1]">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroFinal;