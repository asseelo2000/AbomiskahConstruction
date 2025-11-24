import React, { useState } from 'react';
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
  const [hovered, setHovered] = useState(null);

  const content = {
    en: {
      title: "Our History",
      subtitle: "A Legacy of Excellence Since the 1960s",
      description:
        "Abu Miska Enterprise has been a key player in Yemen's economy, starting from supplying essential goods in the early 1960s through adventurous journeys, to becoming a leading force in trading, construction, drilling, and infrastructure development across Yemen and beyond.",
      cta: "Get in Touch",
      milestones: [
        {
          year: "1960s-1968",
          icon: Calendar,
          title: "Founding and Early Innovations",
          description:
            "Abu Miska Enterprise began supplying the Northern Region of Yemen with Food and Fabric via adventurous travels from Aden and Hodeida to Sadah, taking up to three weeks using horses and carriages. In 1968, Sheikh Ahmed Abu Miska, the President to this day, employed the first car in Sadah for service between Aden, Sanaa, and Sadah.",
          highlights: [
            "Supplies from main ports Aden and Hodeida",
            "Journeys up to three weeks with horses and carriages",
            "Introduction of the first car in Sadah for transportation",
          ],
        },
        {
          year: "1975-1979",
          icon: Users,
          title: "Expansion of Facilities and Trade",
          description:
            "Built the first Central Warehouse in Sadah (1975) and another in Reidah (1976). Expanded business into import of Tobacco and export of Coffee to Saudi Arabia (1975-1978). Took over sole distribution of Hayel Saeed Anam Products for North Yemen and built the first Showroom in Sanaa (1979).",
          highlights: [
            "Central Warehouse in Sadah (1975)",
            "Central Warehouse in Reidah (1976)",
            "Tobacco import and Coffee export to Saudi Arabia (1975-1978)",
            "Sole distribution of Hayel Saeed Anam Products (1979)",
            "First Showroom in Sanaa (1979)",
          ],
        },
        {
          year: "1980-1985",
          icon: Award,
          title: "Entry into Construction",
          description:
            "Founded the Abu Miska Construction Division and received the first contract for the Central School Building in Sadah (1980). Built Schools and Health Centers all over the North of Yemen (1980-1985).",
          highlights: [
            "Founding of Construction Division (1980)",
            "First contract: Central School in Sadah",
            "Schools and Health Centers across North Yemen (1980-1985)",
          ],
        },
        {
          year: "1983-1990",
          icon: Rocket,
          title: "Drilling Division and Major Infrastructure",
          description:
            "Founded the Abu Miska Drilling Division and purchased the first Drilling Rig operated in Sadah (1983). Purchased 10 Drilling Rigs and operated on a national level (1983-1990). Awarded Sadah Dam (1986), completed Sana’a Dam (1988), and started import and distribution of Spare Parts for Machinery, Down hole Equipment, and Drilling Fluids (1989).",
          highlights: [
            "Drilling Division founded with first rig (1983)",
            "Expansion to 10 rigs and national operations (1983-1990)",
            "Sadah Dam awarded (1986)",
            "Sana’a Dam completed (1988)",
            "Import of spare parts and equipment (1989)",
          ],
        },
        {
          year: "1994-2000",
          icon: Globe,
          title: "New Management and Road Construction",
          description:
            "Hisham Abu Miska joined as General Manager (1994). Started Jebel Ali Operations (1994). Began Road Construction Business (1995). Awarded and completed an 80 km highway project in Abyan (1999-2000).",
          highlights: [
            "Hisham Abu Miska as General Manager (1994)",
            "Jebel Ali Operations launched (1994)",
            "Road Construction Business started (1995)",
            "80 km highway in Abyan awarded (1999)",
            "Abyan Project completed (2000)",
          ],
        },
        {
          year: "2001-2015",
          icon: Star,
          title: "Major Growth and International Expansion",
          description:
            "Awarded wells for the Grand Mosque in Sanaa (2001). Became the largest contracting company in North Yemen (2002). Awarded 435 km highway construction in Hadramout, the largest infrastructure project there (2003). Restructured the company by major strategic business units (2004). Employees exceeded 500 for the first time (2006). Opened a branch in Djibouti for water well drilling and construction services (2015).",
          highlights: [
            "Wells for Grand Mosque in Sanaa (2001)",
            "Largest contracting company in North Yemen (2002)",
            "435 km highway in Hadramout (2003)",
            "Company restructuring (2004)",
            "Over 500 employees (2006)",
            "Djibouti branch opened (2015)",
          ],
        },
      ],
    },
    ar: {
      title: "تاريخنا",
      subtitle: "إرث من التميز منذ الستينيات",
      description:
        "كانت شركة أبو مسكة لاعباً رئيسياً في اقتصاد اليمن، بدءاً من توريد السلع الأساسية في أوائل الستينيات من خلال رحلات مغامرة، إلى أن أصبحت قوة رائدة في التجارة والبناء والحفر وتطوير البنية التحتية عبر اليمن وخارجها.",
      cta: "تواصل معنا",
      milestones: [
        {
          year: "1960s-1968",
          icon: Calendar,
          title: "التأسيس والابتكارات المبكرة",
          description:
            "بدأت شركة أبو مسكة في توريد الطعام والنسيج إلى المنطقة الشمالية من اليمن عبر رحلات مغامرة من عدن والحديدة إلى صعدة، تستغرق حتى ثلاثة أسابيع باستخدام الخيول والعربات. في عام 1968، استخدم الشيخ أحمد أبو مسكة، الرئيس حتى اليوم، السيارة الأولى في صعدة للخدمة بين عدن وصنعاء وصعدة.",
          highlights: [
            "توريدات من الموانئ الرئيسية عدن والحديدة",
            "رحلات تصل إلى ثلاثة أسابيع باستخدام الخيول والعربات",
            "إدخال السيارة الأولى في صعدة للنقل",
          ],
        },
        {
          year: "1975-1979",
          icon: Users,
          title: "توسع المنشآت والتجارة",
          description:
            "بناء أول مستودع مركزي في صعدة (1975) وآخر في ريدة (1976). توسع الأعمال في استيراد التبغ وتصدير القهوة إلى السعودية (1975-1978). تولي التوزيع الحصري لمنتجات هائل سعيد أنعم لشمال اليمن وبناء أول صالة عرض في صنعاء (1979).",
          highlights: [
            "مستودع مركزي في صعدة (1975)",
            "مستودع مركزي في ريدة (1976)",
            "استيراد التبغ وتصدير القهوة إلى السعودية (1975-1978)",
            "التوزيع الحصري لمنتجات هائل سعيد أنعم (1979)",
            "أول صالة عرض في صنعاء (1979)",
          ],
        },
        {
          year: "1980-1985",
          icon: Award,
          title: "الدخول في مجال البناء",
          description:
            "تأسيس قسم البناء في أبو مسكة وحصول على أول عقد لبناء المدرسة المركزية في صعدة (1980). بناء مدارس ومراكز صحية في جميع أنحاء شمال اليمن (1980-1985).",
          highlights: [
            "تأسيس قسم البناء (1980)",
            "أول عقد: المدرسة المركزية في صعدة",
            "مدارس ومراكز صحية عبر شمال اليمن (1980-1985)",
          ],
        },
        {
          year: "1983-1990",
          icon: Rocket,
          title: "قسم الحفر ومشاريع البنية التحتية الكبرى",
          description:
            "تأسيس قسم الحفر في أبو مسكة وشراء أول جهاز حفر يعمل في صعدة (1983). شراء 10 أجهزة حفر وعمل على المستوى الوطني (1983-1990). منح سد صعدة (1986)، إكمال سد صنعاء (1988)، وبدء استيراد وتوزيع قطع غيار الآلات والمعدات السفلية وسوائل الحفر (1989).",
          highlights: [
            "تأسيس قسم الحفر مع أول جهاز (1983)",
            "توسع إلى 10 أجهزة وعمليات وطنية (1983-1990)",
            "منح سد صعدة (1986)",
            "إكمال سد صنعاء (1988)",
            "استيراد قطع الغيار والمعدات (1989)",
          ],
        },
        {
          year: "1994-2000",
          icon: Globe,
          title: "إدارة جديدة وبناء الطرق",
          description:
            "انضم هشام أبو مسكة كمدير عام (1994). بدء عمليات جبل علي (1994). بدء أعمال بناء الطرق (1995). منح وإكمال مشروع طريق سريع 80 كم في أبين (1999-2000).",
          highlights: [
            "هشام أبو مسكة مديراً عاماً (1994)",
            "إطلاق عمليات جبل علي (1994)",
            "بدء أعمال بناء الطرق (1995)",
            "طريق سريع 80 كم في أبين منح (1999)",
            "إكمال مشروع أبين (2000)",
          ],
        },
        {
          year: "2001-2015",
          icon: Star,
          title: "نمو كبير وتوسع دولي",
          description:
            "منح آبار المسجد الكبير في صنعاء (2001). أصبحت أكبر شركة مقاولات في شمال اليمن (2002). منح بناء طريق سريع 435 كم في حضرموت، أكبر مشروع بنية تحتية هناك (2003). إعادة هيكلة الشركة حسب الوحدات الاستراتيجية الرئيسية (2004). تجاوز عدد الموظفين 500 لأول مرة (2006). فتح فرع في جيبوتي لحفر آبار المياه وخدمات البناء الأخرى (2015).",
          highlights: [
            "آبار المسجد الكبير في صنعاء (2001)",
            "أكبر شركة مقاولات في شمال اليمن (2002)",
            "طريق سريع 435 كم في حضرموت (2003)",
            "إعادة هيكلة الشركة (2004)",
            "أكثر من 500 موظف (2006)",
            "فتح فرع في جيبوتي (2015)",
          ],
        },
      ],
    },
  };

  const currentContent = content[currentLanguage];
  const isRTL = currentLanguage === 'ar';
  const mobileOffsetClass = isRTL ? 'pr-16' : 'pl-16';
  const mobileDotPositionClass = isRTL ? 'right-0' : 'left-0';
  const mobileLinePositionClass = isRTL ? 'right-8' : 'left-8';

  const timelineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  const verticalTimelineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: '',
        stiffness: 120,
        damping: 20,
        mass: 0.8,
        delay: index * 0.1,
      },
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

        <div className="relative pb-8">
          {/* Horizontal Timeline Line */}
          <motion.div
            className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-red-600"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          />

          {/* Vertical Timeline Line for Mobile */}
          <motion.div
            className={`lg:hidden absolute ${mobileLinePositionClass} top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-red-600`}
            variants={verticalTimelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          />

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-4">
            {currentContent.milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  className={`relative ${mobileOffsetClass} lg:pl-0 lg:pr-0 snap-center lg:snap-none flex flex-col items-start lg:items-center gap-6 lg:gap-0 w-full lg:flex-1 min-w-0 transition-all duration-300 ${hovered !== null && hovered !== index ? 'blur-sm scale-95 opacity-70' : ''}`}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -4 }}
                  transition={{ layout: { duration: 0.4, ease: 'easeOut' } }}
                >
                  {/* Milestone Node */}
                  <div
                    className={`absolute ${mobileDotPositionClass} top-2 lg:static w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-4 border-red-600 shadow-md z-10 transform lg:hover:scale-110 transition-transform duration-300 flex items-center justify-center will-change-transform`}
                  >
                    <div className="flex flex-col items-center leading-tight">
                      <Icon className="text-blue-600 w-6 h-6 mb-0.5" />
                      <span className="text-[10px] font-bold text-gray-800">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-4 rounded-xl shadow-lg lg:hover:shadow-2xl transform lg:hover:-translate-y-2 transition-all duration-300 w-full lg:mt-12 will-change-transform">
                    <h3 className="text-lg font-semibold mb-2 text-center lg:text-center">{milestone.title}</h3>
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