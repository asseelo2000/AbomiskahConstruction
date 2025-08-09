import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Clients = ({ currentLanguage = 'en' }) => {
  const isArabic = currentLanguage === 'ar';
  const [isHovered, setIsHovered] = useState(false);
  const [animationX, setAnimationX] = useState(0);
  const animationRef = useRef();

  const content = {
    en: {
      title: 'Our Clients',
      subtitle: 'Trusted by Leading Organizations',
      description:
        "We're proud to have worked with some of the most respected companies and organizations in the region.",
      testimonials: [
        {
          id: 1,
          name: 'Ahmed Al-Rashid',
          position: 'CEO, Al-Rashid Development',
          company: 'Al-Rashid Development',
          rating: 5,
          text:
            'Abomiskah delivered our residential project on time and within budget. Their attention to detail and quality craftsmanship exceeded our expectations.',
          avatar: 'AR',
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          position: 'Project Manager, TechCorp',
          company: 'TechCorp International',
          rating: 5,
          text:
            'Working with Abomiskah on our corporate headquarters was a seamless experience. They understood our vision and brought it to life perfectly.',
          avatar: 'SJ',
        },
        {
          id: 3,
          name: 'Mohammed Hassan',
          position: 'Operations Director, Industrial Solutions',
          company: 'Industrial Solutions Ltd',
          rating: 5,
          text:
            'The manufacturing facility Abomiskah built for us is state-of-the-art. Their expertise in industrial construction is unmatched.',
          avatar: 'MH',
        },
      ],
      clients: [
        { name: 'Al-Rashid Development', logo: '🏢' },
        { name: 'TechCorp International', logo: '💻' },
        { name: 'Industrial Solutions', logo: '🏭' },
        { name: 'Green Energy Corp', logo: '🌱' },
        { name: 'Metro Construction', logo: '🚇' },
        { name: 'Royal Hotels Group', logo: '🏨' },
        { name: 'Smart City Initiative', logo: '🌆' },
        { name: 'Healthcare Partners', logo: '🏥' },
      ],
    },
    ar: {
      title: 'عملاؤنا',
      subtitle: 'موثوق من قبل المؤسسات الرائدة',
      description:
        'نحن فخورون بالعمل مع بعض أكثر الشركات والمؤسسات احتراماً في المنطقة.',
      testimonials: [
        {
          id: 1,
          name: 'أحمد الراشد',
          position: 'الرئيس التنفيذي، تطوير الراشد',
          company: 'تطوير الراشد',
          rating: 5,
          text:
            'أبو مسكة سلمت مشروعنا السكني في الوقت المحدد وضمن الميزانية. اهتمامهم بالتفاصيل وجودة الصنعة فاق توقعاتنا.',
          avatar: 'أر',
        },
        {
          id: 2,
          name: 'سارة جونسون',
          position: 'مدير المشروع، تك كورب',
          company: 'تك كورب الدولية',
          rating: 5,
          text:
            'العمل مع أبو مسكة على مقرنا الرئيسي كان تجربة سلسة. فهموا رؤيتنا وحققوها بشكل مثالي.',
          avatar: 'سج',
        },
        {
          id: 3,
          name: 'محمد حسن',
          position: 'مدير العمليات، الحلول الصناعية',
          company: 'الحلول الصناعية المحدودة',
          rating: 5,
          text:
            'منشأة التصنيع التي بناها أبو مسكة لنا متطورة جداً. خبرتهم في البناء الصناعي لا مثيل لها.',
          avatar: 'مح',
        },
      ],
      clients: [
        { name: 'تطوير الراشد', logo: '🏢' },
        { name: 'تك كورب الدولية', logo: '💻' },
        { name: 'الحلول الصناعية', logo: '🏭' },
        { name: 'شركة الطاقة الخضراء', logo: '🌱' },
        { name: 'مترو للإنشاءات', logo: '🚇' },
        { name: 'مجموعة الفنادق الملكية', logo: '🏨' },
        { name: 'مبادرة المدينة الذكية', logo: '🌆' },
        { name: 'شركاء الرعاية الصحية', logo: '🏥' },
      ],
    },
  };

  const currentContent = content[currentLanguage] || content.en;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        setAnimationX((prev) => {
          const newX = prev - 0.05;
          return newX <= -100 ? 0 : newX;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  const animationDirection = isArabic ? '100%' : '-100%';

  // Stats counting logic
  const stats = [
    { number: 500, suffix: '+', label: isArabic ? 'مشروع مكتمل' : 'Projects Completed' },
    { number: 100, suffix: '+', label: isArabic ? 'عميل راضي' : 'Happy Clients' },
    { number: 15, suffix: '+', label: isArabic ? 'سنة خبرة' : 'Years Experience' },
    { number: 99, suffix: '%', label: isArabic ? 'معدل الرضا' : 'Satisfaction Rate' },
  ];

  const [refStats, inViewStats] = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inViewStats) {
      stats.forEach((stat, i) => {
        let start = 0;
        const duration = 1500;
        const increment = stat.number / (duration / 16);
        const counter = () => {
          start += increment;
          if (start < stat.number) {
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = Math.floor(start);
              return updated;
            });
            requestAnimationFrame(counter);
          } else {
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = stat.number;
              return updated;
            });
          }
        };
        counter();
      });
    }
  }, [inViewStats]);

  return (
    <section
      id="clients"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-red-50"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
            {currentContent.title}
          </h2>
          <p className="text-xl font-semibold mb-6 text-red-600">
            {currentContent.subtitle}
          </p>
          <p className="text-lg max-w-xl mx-auto text-gray-700 leading-relaxed">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {currentContent.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <Quote className="absolute top-0 right-0 w-8 h-8 text-red-200 opacity-30" />
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="italic text-gray-800 text-base leading-relaxed tracking-wide">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-red-400 text-white flex items-center justify-center font-bold text-lg select-none shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-red-600 font-medium">{t.position}</p>
                  <p className="text-sm text-gray-900 font-semibold mt-1">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white rounded-xl shadow-lg py-12 px-10 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-2xl font-bold text-center text-red-600 mb-12 tracking-wide">
            {isArabic ? 'شركاؤنا الموثوقون' : 'Our Trusted Partners'}
          </h3>
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: isArabic ? animationX + '%' : animationX + '%' }}
            transition={{
              duration: 0,
              ease: 'linear',
            }}
            style={{
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {[...currentContent.clients, ...currentContent.clients].map(
              ({ name, logo }, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-5xl mb-2">{logo}</div>
                  <p className="text-xs font-semibold text-gray-900 text-center">
                    {name}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Stats Section with animation */}
        <motion.div
          ref={refStats}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center mt-24 max-w-5xl mx-auto text-gray-900"
        >
          {stats.map(({ suffix, label }, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold tracking-tight">
                {counts[i]}{suffix}
              </p>
              <p className="mt-2 font-semibold text-lg">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
