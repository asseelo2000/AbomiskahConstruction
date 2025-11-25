import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Building,
  HardHat,
  TrafficConeIcon,
  Sun,
  Droplet,
  Recycle
} from 'lucide-react';

// Local Button Component
const Button = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ${className}`}
  >
    {children}
  </button>
);

const Services = ({ currentLanguage }) => {
  const [hovered, setHovered] = useState(null);

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Construction Solutions",
      description:
        "From residential homes to large-scale commercial and industrial projects, we provide end-to-end construction services with unmatched quality and expertise.",
      cta: "Get Quote",
      services: [
        {
          icon: TrafficConeIcon,
          title: "Roads and Bridges",
          description:
            "Road excavation, asphalt paving, and bridge construction",
          features: ["Road excavation", "Construction of surface bridges", "Stone paving for roads"],
        },
        {
          icon: HardHat,
          title: "Construction",
          description:
            "Construction of commercial, residential, and service buildings",
          features: ["Residential buildings", "Malls and commercial markets", "Warehouses and metal structures", "Industrial centers", "Sports facilities"],
        },
        {
          icon: Droplet,
          title: "Well Drilling",
          description:
            "Drilling, installing pumps, and testing water flow",
          features: ["Drilling or deepening", "Widening", "Casing or lining", "Installing pumps and flow testing"],
        },
       {
          icon: Building,
          title: "Infrastructure Projects",
          description: "Implementation of strategic projects that serve the community and the economy",
          features: [
            "Universities and schools",
            "Hospitals",
            "Airports"
          ],
        },
        {
          icon: Recycle,
          title: "Sustainable Development Projects",
          description: "Various projects supporting long-term development",
          features: [
            "Major sports facilities",
            "Establishment of seaports",
            "Construction of dams of all types and sizes"
          ],
        },  
        {
          icon: Sun,
          title: "Solar and Clean Energy",
          description: "Design and implementation of renewable energy projects to meet the needs of communities and large-scale projects",
          features: [
            "Integrated solutions to reduce emissions and achieve sustainability",
            "Clean energy projects (wind, biomass)",
            "Photovoltaic energy systems for buildings and residential complexes",
            "Solar power plants"
          ],
        }
        // {
        //   icon: Factory,
        //   title: "Industrial Construction",
        //   description:
        //     "Warehouses, factories, and industrial facilities built for efficiency, safety, and long-term durability.",
        //   features: ["Warehouses", "Manufacturing Plants", "Storage Facilities", "Industrial Complexes"],
        // },
        // {
        //   icon: Wrench,
        //   title: "Infrastructure Development",
        //   description:
        //     "Roads, bridges, and public infrastructure projects that connect communities and drive economic growth.",
        //   features: ["Road Construction", "Bridge Building", "Utilities Installation", "Site Development"],
        // },
        // {
        //   icon: Hammer,
        //   title: "Renovation & Remodeling",
        //   description:
        //     "Transform existing spaces with our comprehensive renovation and remodeling services.",
        //   features: ["Kitchen Remodeling", "Bathroom Renovation", "Office Upgrades", "Structural Modifications"],
        // },
        // {
        //   icon: Shield,
        //   title: "Project Management",
        //   description:
        //     "Complete project oversight from planning to completion, ensuring timely delivery and quality results.",
        //   features: ["Project Planning", "Quality Control", "Timeline Management", "Budget Oversight"],
        // },
      ],
    },
    ar: {
      title: "خدماتنا",
      subtitle: "حلول إنشائية شاملة",
      description:
        "من المنازل السكنية إلى المشاريع التجارية والصناعية الكبيرة، نقدم خدمات البناء الشاملة بجودة وخبرة لا مثيل لها.",
      cta: "احصل على عرض سعر",
      services: [
        {
          icon: TrafficConeIcon,
          title: "الطرق والجسور",
          description:
            "شق الطرق والسفلتة وبناء الجسور",
          features: ["الرصف الحجري للطرق ", "تنفيذ الجسور السطحية", "شق الطرق"],
        },
        {
          icon: HardHat,
          title: "الإنشاءات",
          description:
            "انشاء المباني التجارية والسكنية والخدمية",
          features: ["المنشئات الرياضية" ,"المراكز الصناعية", "الهناجر والإنشاءات المعدنية", "المولات والأسواق التجارية", "المباني السكنية"],
        },
        {
          icon: Droplet,
          title: "حفر الابار",
          description:
            "حفر و وتركيب مضخات وتجربة الضخ",
          features: ["تركيب المضخات واختبار الضخ", "التغليف او التكييس", "التوسيع", "الحفر او التعميق"],
        },
        {
          icon: Building,
          title: "مشاريع البنى التحتية",
          description:
            "تنفيذ المشاريع الاستراتيجية التي تخدم المجتمع والاقتصاد",
          features: ["الجامعات والمدارس", "المستشفيات", "المطارات"],
        },
        {
          icon: Recycle,
          title: "المشاريع التنموية المستدامة",
          description:
            "مشاريع متنوعة تدعم التنمية طويلة الأمد",
          features: ["المنشآت الرياضية الكبرى", "تأسيس الموانئ البحرية", "بناء السدود بكافة أنواعها وأحجامها"],
        },
        {
          icon: Sun,
          title: "الطاقة الشمسية والطاقة النظيفة",
          description:
            "تصميم وتنفيذ مشاريع الطاقة المتجددة لتلبية احتياجات المجتمعات والمشاريع الكبرى",
          features: ["حلول متكاملة لتقليل الانبعاثات وتحقيق الاستدامة", "مشاريع الطاقة النظيفة (الرياح، الكتلة الحيوية)", "أنظمة الطاقة الكهروضوئية للمباني والمجمعات السكنية", "محطات الطاقة الشمسية"],
        },
        // {
        //   icon: Factory,
        //   title: "البناء الصناعي",
        //   description:
        //     "مستودعات، مصانع، ومرافق صناعية مبنية بالكفاءة والسلامة.",
        //   features: ["مستودعات", "مصانع", "مرافق تخزين", "مجمعات صناعية"],
        // },
        // {
        //   icon: Wrench,
        //   title: "تطوير البنية التحتية",
        //   description:
        //     "طرق وجسور ومشاريع بنية تحتية عامة تربط المجتمعات.",
        //   features: ["بناء الطرق", "بناء الجسور", "التركيبات", "تطوير المواقع"],
        // },
        // {
        //   icon: Hammer,
        //   title: "تجديد وإعادة التصميم",
        //   description:
        //     "تحويل المساحات الحالية بخدمات التجديد.",
        //   features: ["تجديد المطابخ", "تجديد الحمامات", "تحديث المكاتب", "تعديلات هيكلية"],
        // },
        // {
        //   icon: Shield,
        //   title: "إدارة المشاريع",
        //   description:
        //     "إشراف كامل من البداية للنهاية مع ضمان الجودة.",
        //   features: ["تخطيط المشروع", "مراقبة الجودة", "إدارة الجدول الزمني", "إدارة الميزانية"],
        // },
      ],
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-600 via-white to-red-600"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">{currentContent.title}</h2>
          <p className="text-xl text-white mt-2">{currentContent.subtitle}</p>
          <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentContent.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${hovered !== null && hovered !== index ? 'blur-sm scale-95 opacity-70' : ''}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  {currentContent.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;