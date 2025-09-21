import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Eye,
  Heart,
  Target,
} from 'lucide-react';

const About = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "About Abomiskah",
      subtitle: "Building Excellence Since 2008",
      description:
        "Abomiskah Construction Company has been at the forefront of the construction industry for over 15 years. We specialize in delivering high-quality residential, commercial, and industrial projects that stand the test of time.",
      mission: {
        title: "Our Mission",
        text: "To deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.",
      },
      vision: {
        title: "Our Vision",
        text: "To be the leading construction company in the region, recognized for innovation, reliability, and commitment to building a better future.",
      },
      values: {
        title: "Our Values",
        items: [
          "Quality craftsmanship in every project",
          "Commitment to safety and sustainability",
          "Transparent communication with clients",
          "Innovation in construction techniques",
          "Timely project delivery",
        ],
      },
      features: [
        {
          icon: Target,
          title: "Precision Planning",
          description:
            "Detailed project planning and execution to ensure optimal results.",
        },
        {
          icon: CheckCircle,
          title: "Quality Assurance",
          description:
            "Rigorous quality control processes at every stage of construction.",
        },
        {
          icon: Heart,
          title: "Client Satisfaction",
          description:
            "Dedicated to exceeding client expectations and building lasting relationships.",
        },
      ],
    },
    ar: {
      title: "عن أبو مسكة",
      subtitle: "نبني التميز منذ 2008",
      description:
        "شركة أبو مسكة للمقاولات في المقدمة في صناعة البناء لأكثر من 15 عامًا. نحن متخصصون في تقديم مشاريع سكنية وتجارية وصناعية عالية الجودة تصمد أمام اختبار الزمن.",
      mission: {
        title: "مهمتنا",
        text: "تقديم حلول إنشائية استثنائية تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير الجودة والسلامة والاستدامة.",
      },
      vision: {
        title: "رؤيتنا",
        text: "أن نكون شركة البناء الرائدة في المنطقة، معترف بها للابتكار والموثوقية والالتزام ببناء مستقبل أفضل.",
      },
      values: {
        title: "قيمنا",
        items: [
          "الحرفية عالية الجودة في كل مشروع",
          "الالتزام بالسلامة والاستدامة",
          "التواصل الشفاف مع العملاء",
          "الابتكار في تقنيات البناء",
          "التسليم في الوقت المحدد",
        ],
      },
      features: [
        {
          icon: Target,
          title: "التخطيط الدقيق",
          description: "تخطيط وتنفيذ مفصل للمشاريع لضمان النتائج المثلى.",
        },
        {
          icon: CheckCircle,
          title: "ضمان الجودة",
          description: "عمليات مراقبة جودة صارمة في كل مرحلة من مراحل البناء.",
        },
        {
          icon: Heart,
          title: "رضا العملاء",
          description: "مكرسون لتجاوز توقعات العملاء وبناء علاقات دائمة.",
        },
      ],
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 to-red-50"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-blue-700 font-semibold mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[currentContent.mission, currentContent.vision].map((block, index) => {
            const Icon = index === 0 ? Target : Eye;
            const gradient =
              index === 0
                ? 'from-blue-600 to-blue-400'
                : 'from-red-500 to-pink-400';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`p-8 rounded-xl shadow-xl text-white bg-gradient-to-br ${gradient} transform hover:-translate-y-2`}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl font-bold">{block.title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{block.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentContent.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative p-6 rounded-xl bg-white shadow-xl text-center transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
              <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full top-6 left-1/2 -translate-x-1/2 z-0 scale-100 group-hover:scale-[10] transition-transform duration-300"></div>
              <div className="relative w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg  group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-red-500 transition-all duration-300 z-10">
                <div className="absolute w-14 h-14 bg-gradient-to-br from-blue-500 to-red-500 rounded-full group-hover:bg-white transition-all duration-300"></div>
                <IconComponent className="relative w-8 h-8 text-white group-hover:text-white transition-colors duration-300 z-20" />
              </div>
              <h3 className="relative text-lg font-bold text-gray-800 mb-2 z-10 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
              <p className="relative text-sm text-gray-600 z-10 group-hover:text-white transition-colors duration-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gradient-to-r from-blue-100 via-white to-red-100 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {currentContent.values.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentContent.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-800">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
