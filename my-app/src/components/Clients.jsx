import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Clients = ({ currentLanguage = "en" }) => {
  const isArabic = currentLanguage === "ar";

  const content = {
    en: {
      title: "Our Clients",
      subtitle: "Trusted by Leading Organizations",
      description:
        "We're proud to have worked with some of the most respected companies and organizations in the region.",
      clients: [
        // { name: "Al-Rashid Development", logo: "🏢" },
        // { name: "TechCorp International", logo: "💻" },
        // { name: "Industrial Solutions", logo: "🏭" },
        // { name: "Metro Construction", logo: "🚇" },
        // { name: "Royal Hotels Group", logo: "🏨" },
        // { name: "Smart City Initiative", logo: "🌆" },
        // { name: "Healthcare Partners", logo: "🏥" },
        { name: "Rural Roads Development Program", logo: "/images/clients/ruralRoadsLogo.png" },
        { name: "Ministry of Public Works and Roads", logo: "/images/clients/MinistryofPublicWorksandRoads.png" },
        { name: "Civil Aviation and Meteorology Authority", logo: "/images/clients/CivilAviationandMeteorologyAuthority.png"},
        { name: "General Authority for Roads and Bridges", logo: "/images/clients/GeneralAuthorityforRoadsandBridges.png" },
        { name: "Ministry of Water and Environment",  logo: "/images/clients/MinistryofWaterandEnvironment.png" },
        { name: "Local Water and Sanitation Authority - Capital", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
        { name: "Local Water and Sanitation Authority - Sana'a", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
        { name: "Local Water and Sanitation Authority - Aden", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
        { name: "Local Water and Sanitation Authority - Hadramout", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
        { name: "Local Water and Sanitation Authority - Lahj", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
        { name: "Ministry of Agriculture and Irrigation", logo: "/images/clients/MinistryofAgricultureandIrrigation.png" },
        { name: "Yemeni Economic Corporation", logo: "/images/clients/YemeniEconomicCorporation.png" },
        { name: "Ministry of Agriculture, Water and Fisheries (Djibouti)", logo: "/images/clients/MinistryofAgricultureWaterandFisheries.png" },
        { name: "Urban Planning, Finance and Environment (Djibouti)", logo: "🏢" },
        { name: "JICA Japan Company (Djibouti)", logo: "/images/clients/JapanInternationalCooperationAgency.png"},


        { name: "National Dairy and Food Company (Nadfood)", logo: "/images/clients/Nadfood.png"},
        { name: "National Trading Company Ltd. (Natco)", logo: "/images/clients/JapanInternationalCooperationAgency.png"},
        { name: "Yemeni Mills and Silos Company", logo: "/images/clients/YemeniMillsandSilosCompany.png"},
        { name: "Yemeni Sugar Refining Company", logo: "/images/clients/YemeniSugarRefiningCompany.png"},
        { name: "Yemeni Ghee and Soap Manufacturing Company", logo: "/images/clients/YemeniGheeandSoapManufacturingCompany.png"},
        { name: "National Cement Company", logo: "/images/clients/NationalCementCompany.png"},
      ],
    },
    ar: {
      title: "عملاؤنا",
      subtitle: "موثوق من قبل المؤسسات الرائدة",
      description:
        "نحن فخورون بالعمل مع بعض أكثر الشركات والمؤسسات احتراماً في المنطقة.",
      // clients: [
      //   { name: "تطوير الراشد", logo: "🏢" },
      //   { name: "تك كورب الدولية", logo: "💻" },
      //   { name: "الحلول الصناعية", logo: "🏭" },
      //   { name: "مجموعة الفنادق الملكية", logo: "🏨" },
      //   { name: "مبادرة المدينة الذكية", logo: "🌆" },
      //   { name: "شركاء الرعاية الصحية", logo: "🏥" },
      // ],
      clients: [
          { name: "برنامج تنمية الطرق الريفية", logo:"/images/clients/ruralRoadsLogo.png" },
          { name: "وزارة الاشغال العامة والطرق", logo: "/images/clients/MinistryofPublicWorksandRoads.png" },
          { name: "الهيئة العامة للطيران المدني والارصاد", logo:"/images/clients/CivilAviationandMeteorologyAuthority.png"},
          { name: "المؤسسة العامة للطرق والجسور",  logo: "/images/clients/GeneralAuthorityforRoadsandBridges.png"  },
          { name: "وزارة المياه والبيئة", logo: "/images/clients/MinistryofWaterandEnvironment.png" },
          { name: "المؤسسة المحلية للمياه والصرف الصحي بامانة العاصمة", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
          { name: "المؤسسة المحلية للمياه والصرف الصحي محافظة صنعاء", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
          { name: "المؤسسة المحلية للمياه والصرف الصحي محافظة عدن", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
          { name: "المؤسسة المحلية للمياه والصرف الصحي محافظة حضرموت", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
          { name: "المؤسسة المحلية للمياه والصرف الصحي محافظة لحج", logo: "/images/clients/LocalWaterandSanitationAuthority.png" },
          { name: "وزارة الزراعة والري",  logo: "/images/clients/MinistryofAgricultureandIrrigation.png" },
          { name: "المؤسسة الاقتصادية اليمنية",  logo: "/images/clients/YemeniEconomicCorporation.png"  },
          { name: "وزارة الزراعة والمياة والثروة السمكية والزراعية (جيبوتي)", logo: "/images/clients/MinistryofAgricultureWaterandFisheries.png"  },
          { name: "التمويل والتخطيط الحضري والبيئة (جيبوتي)", logo: "Globe" },
          { name: "شركة جايكا اليابانية (جيبوتي)", logo: "/images/clients/JapanInternationalCooperationAgency.png" },


          { name: "الشركة الوطنية للالبان والأغذية (نادفوود)", logo: "/images/clients/JapanInternationalCooperationAgency.png" },
          { name: "الشركة الوطنية للتجارة المحدودة (ناتكو)", logo: "/images/clients/Natco.png" },
          { name: "الشركة اليمنية للمطاحن والصوامع", logo: "/images/clients/YemeniMillsandSilosCompany.png" },
          { name: "الشركة اليمنية لتكرير السكر", logo: "/images/clients/YemeniSugarRefiningCompany.png" },
          { name: "الشركة اليمنية لصناعة السمن والصابون", logo: "/images/clients/YemeniGheeandSoapManufacturingCompany.png" },
          { name: "الشركة الوطنية للاسمنت", logo: "/images/clients/NationalCementCompany.png" },
        ],
    },
  };

  const currentContent = content[currentLanguage] || content.en;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: isArabic ? "مشروع مكتمل" : "Projects Completed",
    },
    {
      number: 100,
      suffix: "+",
      label: isArabic ? "عميل راضي" : "Happy Clients",
    },
    {
      number: 65,
      suffix: "+",
      label: isArabic ? "سنة خبرة" : "Years Experience",
    },
    {
      number: 99,
      suffix: "%",
      label: isArabic ? "معدل الرضا" : "Satisfaction Rate",
    },
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

  const LogoRow = ({ clients, reverse }) => {
  const totalClients = clients.length;
  const logoWidth = 120;
  const gapWidth = 32;
  const totalWidth = totalClients * (logoWidth + gapWidth);

  const controls = useAnimation();
  const duration = 30; // seconds for full scroll

  const [isPaused, setIsPaused] = useState(false);
  const [currentX, setCurrentX] = useState(null);

  // Animate continuously
  const animateScroll = (startX = null) => {
    let from, to;

    if (!reverse) {
      from = startX !== null ? startX : -totalWidth;
      to = 0;
    } else {
      from = startX !== null ? startX : 0;
      to = -totalWidth;
    }

    const distance = Math.abs(to - from);
    const remainingDuration = (distance / totalWidth) * duration;

    controls.set({ x: from });

    controls
      .start({
        x: to,
        transition: { duration: remainingDuration, ease: "linear" },
      })
      .then(() => {
        if (!isPaused) {
          animateScroll(); // loop again
        }
      });
  };

  useEffect(() => {
    if (!isPaused) {
      animateScroll(currentX);
    } else {
      controls.stop();
    }
    return () => controls.stop();
  }, [isPaused]);

  return (
    <div
      className="relative overflow-hidden mb-10"
      style={{ height: "220px", direction: "ltr" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex flex-nowrap items-center"
        style={{ width: totalWidth * 2 }}
        animate={controls}
        initial={{ x: 0 }}
        onUpdate={(latest) => {
          // latest is the current animated style object
          if (latest.x !== undefined) {
            setCurrentX(latest.x);
          }
        }}
      >
        {[...clients, ...clients].map(({ name, logo }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[120px] select-none text-center cursor-pointer"
            style={{ marginRight: gapWidth }}
            title={name}
          >
            <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-4 border border-gray-100">
                    {logo.startsWith("http") || logo.startsWith("/") ? (
                      <img 
                        src={logo} 
                        alt={name} 
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/images/clients/placeholder-logo.png"; // fallback
                        }}
                      />
                    ) : (
                      <span className="text-4xl">{logo}</span> // fallback to emoji if needed
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mt-3 text-center px-2 leading-tight">
                    {name}
                  </p>
                </motion.div>
            {/* <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl"
          >
            {logo}
            <p className="text-base font-medium text-gray-900 mt-2">{name}</p>
          </motion.div> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

  return (
    <section
      id="clients"
      dir={isArabic ? "rtl" : "ltr"}
      className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at top left, #a3bffa55, transparent 60%), 
                          radial-gradient(circle at bottom right, #fbc7c755, transparent 60%)`,
      }}
    >
      <div className="container mx-auto max-w-6xl px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3 text-gray-900">
            {currentContent.title}
          </h2>
          <p className="text-lg font-semibold mb-6 text-pink-600">
            {currentContent.subtitle}
          </p>
          <p
            className={
              isArabic
                ? "text-base max-w-xl mx-auto text-gray-700 leading-relaxed text-right"
                : "text-base max-w-xl mx-auto text-gray-700 leading-relaxed text-left"
            }
          >
            {currentContent.description}
          </p>
        </motion.div>

        {/* Two-Row Moving Logos */}
        <LogoRow clients={currentContent.clients} reverse={false} />
        <LogoRow clients={currentContent.clients} reverse={true} />

        {/* Stats Section */}
        <motion.div
          ref={refStats}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center mt-28 max-w-4xl mx-auto text-gray-900"
        >
          {stats.map(({ suffix, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-pointer relative"
            >
              <p
                className="relative flex items-center justify-center
                           w-20 h-20 rounded-full
                           bg-gradient-to-r from-blue-400 via-purple-500 to-red-400
                           text-white font-extrabold text-4xl shadow-md
                           transition-all duration-500
                           group-hover:shadow-xl group-hover:scale-110"
                style={{ willChange: "transform" }}
              >
                <motion.span
                  animate={{ scale: counts[i] > 0 ? [1, 1.1, 1] : 1 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  className="flex items-baseline"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  {counts[i]}
                  <span className="text-xl font-semibold ml-1 align-super">
                    {suffix}
                  </span>
                </motion.span>

                <motion.span
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 0.4, scale: 1.2 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              </p>
              <p className="mt-3 font-semibold text-base text-gray-700 max-w-[140px]">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
