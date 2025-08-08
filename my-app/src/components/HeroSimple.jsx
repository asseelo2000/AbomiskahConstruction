import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSimple = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Building Tomorrow's",
      titleHighlight: "Infrastructure",
      subtitle: "Leading construction and contracting company delivering exceptional projects across residential, commercial, and industrial sectors.",
      cta1: "View Our Projects",
      cta2: "Get Quote"
    },
    ar: {
      title: "نبني البنية التحتية",
      titleHighlight: "للمستقبل",
      subtitle: "شركة رائدة في المقاولات والإنشاءات تقدم مشاريع استثنائية في القطاعات السكنية والتجارية والصناعية.",
      cta1: "عرض مشاريعنا",
      cta2: "احصل على عرض سعر"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">{currentContent.title}</span>
            <br />
            <span className="Abomiskah-text-gradient">{currentContent.titleHighlight}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="Abomiskah-gradient text-white">
              {currentContent.cta1}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary">
              {currentContent.cta2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;

