import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Award,
  Users,
  Globe,
  Star,
  Rocket,
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

const History = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Our History",
      subtitle: "A Legacy of Excellence Spanning Decades",
      description:
        "From humble beginnings in a small workshop to becoming a cornerstone of the construction industry, our journey is marked by innovation, resilience, and unwavering commitment to quality. Explore the milestones that have shaped us into the trusted leader we are today.",
      cta: "Get in Touch",
      milestones: [
        {
          year: "2000",
          icon: Calendar,
          title: "Foundation and First Steps",
          description:
            "Founded by visionary engineer Ahmed Al-Mansour in a modest garage in Riyadh, starting with local residential repairs and small builds. This marked the birth of our passion for crafting spaces that last.",
          highlights: ["Initial team of 5 dedicated builders", "First project: A family home renovation", "Focus on sustainable materials from day one"],
        },
        {
          year: "2005",
          icon: Award,
          title: "Breakthrough Recognition",
          description:
            "Completed our first major commercial project—a state-of-the-art office complex—that earned us the National Construction Excellence Award. This milestone propelled us into larger-scale ventures.",
          highlights: ["Expanded team to 50 experts", "Introduced eco-friendly building techniques", "Partnerships with leading architects"],
        },
        {
          year: "2010",
          icon: Users,
          title: "Team Growth and Diversification",
          description:
            "Grew our workforce to over 200 professionals and diversified into industrial construction, tackling warehouses and factories with cutting-edge safety standards.",
          highlights: ["Opened branches in Jeddah and Dammam", "Launched apprenticeship programs", "Adopted digital project management tools"],
        },
        {
          year: "2015",
          icon: Globe,
          title: "International Expansion",
          description:
            "Ventured beyond borders with our first overseas project in the UAE, building luxury hotels and establishing a global footprint while maintaining our core values of integrity and innovation.",
          highlights: ["Collaborations with international firms", "Certification in green building standards", "Community outreach initiatives launched"],
        },
        {
          year: "2020",
          icon: Star,
          title: "Innovation Amid Challenges",
          description:
            "Navigated the global pandemic by pivoting to smart construction technologies, including AI-driven planning and remote monitoring, ensuring project continuity and employee safety.",
          highlights: ["Implemented contactless site management", "Won Innovation Award for Tech Integration", "Expanded into renewable energy infrastructure"],
        },
        {
          year: "2025",
          icon: Rocket,
          title: "Looking to the Future",
          description:
            "Celebrating 25 years with ambitious goals: Sustainable mega-projects, AI-optimized designs, and a commitment to carbon-neutral builds. Our history fuels our drive for tomorrow's horizons.",
          highlights: ["R&D center established", "Partnerships with tech startups", "Vision 2030 alignment for national development"],
        },
      ],
    },
    ar: {
      title: "تاريخنا",
      subtitle: "إرث من التميز عبر العقود",
      description:
        "من بدايات متواضعة في ورشة صغيرة إلى أن أصبحنا عماد صناعة البناء، رحلتنا مليئة بالابتكار والصمود والالتزام غير المحدود بالجودة. استكشف المعالم التي شكلتنا إلى القائد الموثوق الذي نحن عليه اليوم.",
      cta: "تواصل معنا",
      milestones: [
        {
          year: "2000",
          icon: Calendar,
          title: "التأسيس والخطوات الأولى",
          description:
            "تأسست على يد المهندس الرؤيوي أحمد المنصور في مرآب صغير في الرياض، بدءًا بإصلاحات سكنية محلية وبناءات صغيرة. هذا كان ميلاد شغفنا بصنع مساحات تدوم.",
          highlights: ["فريق أولي من 5 بنائين مخلصين", "أول مشروع: تجديد منزل عائلي", "التركيز على المواد المستدامة من اليوم الأول"],
        },
        {
          year: "2005",
          icon: Award,
          title: "التعرف الرائد",
          description:
            "أكملنا أول مشروع تجاري كبير—مجمع مكاتب حديث—الذي منحنا جائزة التميز الوطني في البناء. هذا المعلم دفعنا نحو مشاريع أكبر حجمًا.",
          highlights: ["توسيع الفريق إلى 50 خبيرًا", "إدخال تقنيات بناء صديقة للبيئة", "شراكات مع مهندسين معماريين رائدين"],
        },
        {
          year: "2010",
          icon: Users,
          title: "نمو الفريق والتنويع",
          description:
            "نما قوتنا العاملة إلى أكثر من 200 متخصص وتنويعنا في البناء الصناعي، متعاملين مع المستودعات والمصانع بمعايير سلامة متطورة.",
          highlights: ["فتح فروع في جدة والدمام", "إطلاق برامج التدريب المهني", "تبني أدوات إدارة المشاريع الرقمية"],
        },
        {
          year: "2015",
          icon: Globe,
          title: "التوسع الدولي",
          description:
            "غامرنا خارج الحدود بأول مشروع خارجي في الإمارات، بناء فنادق فاخرة وإنشاء بصمة عالمية مع الحفاظ على قيمنا الأساسية من النزاهة والابتكار.",
          highlights: ["تعاونات مع شركات دولية", "شهادة في معايير البناء الأخضر", "إطلاق مبادرات مجتمعية"],
        },
        {
          year: "2020",
          icon: Star,
          title: "الابتكار وسط التحديات",
          description:
            "تنقلنا خلال الجائحة العالمية بالتحول إلى تقنيات البناء الذكية، بما في ذلك التخطيط المدعوم بالذكاء الاصطناعي والمراقبة عن بعد، مضمونين استمرارية المشاريع وسلامة الموظفين.",
          highlights: ["تنفيذ إدارة مواقع بدون تماس", "فوز بجائزة الابتكار للتكامل التكنولوجي", "التوسع في بنية تحتية الطاقة المتجددة"],
        },
        {
          year: "2025",
          icon: Rocket,
          title: "النظر إلى المستقبل",
          description:
            "نحتفل بـ25 عامًا بأهداف طموحة: مشاريع عملاقة مستدامة، تصاميم محسنة بالذكاء الاصطناعي، والتزام بالبناء الكربوني المحايد. تاريخنا يغذي دافعنا نحو آفاق الغد.",
          highlights: ["إنشاء مركز بحث وتطوير", "شراكات مع شركات ناشئة تكنولوجية", "التوافق مع رؤية 2030 للتطوير الوطني"],
        },
      ],
    },
  };

  const currentContent = content[currentLanguage];

  const timelineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    }),
  };

  return (
    <section
      id="history"
      className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-300"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold text-gray-800"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-600 mt-2"
          >
            {currentContent.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto"
          >
            {currentContent.description}
          </motion.p>
        </div>

        <div className="relative flex flex-row gap-4 pb-8">
          {/* Horizontal Timeline Line */}
          <motion.div
            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-blue-600 to-red-600"
            style={{ width: '100%' }}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          />

          {currentContent.milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                className="flex-1 flex flex-col items-center relative min-w-0"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Milestone Node */}
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center border-4 border-red-600 shadow-md z-10 transform hover:scale-110 transition-transform duration-300">
                  <Icon className="text-blue-600 w-6 h-6" />
                  <span className="text-xs font-bold text-gray-800 mt-1">{milestone.year}</span>
                </div>

                {/* Card */}
                <div className="mt-12 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full">
                  <h3 className="text-lg font-semibold mb-2 text-center">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{milestone.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {milestone.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {currentContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default History;