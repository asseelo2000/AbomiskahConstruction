//1
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Landmark, Hammer, Building, Factory, Shield } from 'lucide-react';

// // Local Button Component
// const Button = ({ children, className = '', ...props }) => (
//   <button
//     {...props}
//     className={`inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-md ${className}`}
//   >
//     {children}
//   </button>
// );

// const History = ({ currentLanguage }) => {
//   const content = {
//     en: {
//       title: "Our Journey Through Time",
//       subtitle: "A Legacy Forged in Excellence",
//       description:
//         "Over two decades, we’ve evolved from humble beginnings to a leader in construction, shaping skylines and communities with innovation and dedication.",
//       milestones: [
//         {
//           year: 2003,
//           icon: Calendar,
//           title: "Founding Vision",
//           description: "Established with a mission to deliver quality residential projects, laying the foundation for future growth.",
//           highlight: "First residential project completed",
//         },
//         {
//           year: 2008,
//           icon: Landmark,
//           title: "Commercial Expansion",
//           description: "Broke into commercial construction, building iconic office spaces and retail centers.",
//           highlight: "Opened first commercial complex",
//         },
//         {
//           year: 2012,
//           icon: Hammer,
//           title: "Industrial Breakthrough",
//           description: "Entered industrial sector with state-of-the-art factories and warehouses.",
//           highlight: "Largest warehouse project to date",
//         },
//         {
//           year: 2017,
//           icon: Building,
//           title: "Infrastructure Leadership",
//           description: "Led major infrastructure projects, including roads and bridges, enhancing connectivity.",
//           highlight: "Completed first bridge construction",
//         },
//         {
//           year: 2020,
//           icon: Factory,
//           title: "Global Recognition",
//           description: "Earned international acclaim for sustainable industrial developments.",
//           highlight: "Awarded Green Building Certification",
//         },
//         {
//           year: 2025,
//           icon: Shield,
//           title: "Future Innovation",
//           description: "Committed to cutting-edge technology and project management excellence.",
//           highlight: "Launching smart construction initiatives",
//         },
//       ],
//       cta: "Explore Our Legacy",
//     },
//     ar: {
//       title: "رحلتنا عبر الزمن",
//       subtitle: "إرث مزج بالتميز",
//       description:
//         "خلال أكثر من عقدين، تطورنا من بدايات متواضعة إلى قائد في البناء، نشكل الأفق والمجتمعات بالابتكار والتفاني.",
//       milestones: [
//         {
//           year: 2003,
//           icon: Calendar,
//           title: "رؤية التأسيس",
//           description: "تأسسنا برسالة تقديم مشاريع سكنية عالية الجودة، مفضية إلى نمو مستقبلي.",
//           highlight: "اكتمال أول مشروع سكني",
//         },
//         {
//           year: 2008,
//           icon: Landmark,
//           title: "توسع تجاري",
//           description: "دخلنا عالم البناء التجاري بمبانٍ مكتبية ومراكز تسوق رمزية.",
//           highlight: "افتتاح أول مجمع تجاري",
//         },
//         {
//           year: 2012,
//           icon: Hammer,
//           title: "اختراق صناعي",
//           description: "بدأنا في القطاع الصناعي بمصانع ومستودعات متطورة.",
//           highlight: "أكبر مشروع مستودع حتى الآن",
//         },
//         {
//           year: 2017,
//           icon: Building,
//           title: "قيادة البنية التحتية",
//           description: "قدمنا مشاريع بنية تحتية كبرى، مثل الطرق والجسور، لتعزيز التواصل.",
//           highlight: "اكتمال أول جسر",
//         },
//         {
//           year: 2020,
//           icon: Factory,
//           title: "اعتراف عالمي",
//           description: "حصلنا على إشادة دولية بمشاريع صناعية مستدامة.",
//           highlight: "الحصول على شهادة البناء الأخضر",
//         },
//         {
//           year: 2025,
//           icon: Shield,
//           title: "ابتكار المستقبل",
//           description: "ملتزمون بالتكنولوجيا المتطورة وتميز إدارة المشاريع.",
//           highlight: "إطلاق مبادرات البناء الذكي",
//         },
//       ],
//       cta: "استكشف إرثنا",
//     },
//   };

//   const currentContent = content[currentLanguage];

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, rotate: -5 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       rotate: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//     hover: {
//       scale: 1.05,
//       rotate: 2,
//       boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
//       transition: { duration: 0.3 },
//     },
//   };

//   // Particle effect for background
//   const Particle = () => (
//     <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse" />
//   );

//   return (
//     <section
//       id="history"
//       className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black"
//       dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
//     >
//       {/* Particle Background */}
//       {[...Array(20)].map((_, i) => (
//         <Particle
//           key={i}
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 2}s`,
//           }}
//         />
//       ))}

//       {/* Timeline Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-red-500 opacity-50" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400">
//             {currentContent.title}
//           </h2>
//           <p className="text-xl text-white/80 mt-2">{currentContent.subtitle}</p>
//           <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">
//             {currentContent.description}
//           </p>
//         </div>

//         <div className="relative">
//           {currentContent.milestones.map((milestone, index) => {
//             const Icon = milestone.icon;
//             const isLeft = index % 2 === 0;
//             return (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className={`mb-16 flex items-start ${isLeft ? 'justify-end' : 'justify-start'} w-full`}
//               >
//                 <div
//                   className={`relative w-11/12 max-w-md p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 transform hover:bg-white/95 transition-all duration-300`}
//                 >
//                   {/* Year Circle */}
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                     {milestone.year}
//                   </div>
//                   {/* Icon */}
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center mb-4 -mt-6">
//                     <Icon className="text-white w-6 h-6" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-gray-700 mb-2">{milestone.description}</p>
//                   <p className="text-sm text-blue-600 font-medium">
//                     {milestone.highlight}
//                   </p>
//                   <Button
//                     className="mt-4"
//                     onClick={() =>
//                       document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//                     }
//                   >
//                     {currentContent.cta}
//                   </Button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

//2
// export default History;
// import React, { useRef, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { Calendar, Landmark, Hammer, Building, Factory, Shield } from 'lucide-react';

// // Local Button Component
// const Button = ({ children, className = '', ...props }) => (
//   <button
//     {...props}
//     className={`inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white bg-blue-900/50 hover:bg-blue-800/70 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
//   >
//     {children}
//   </button>
// );

// // Particle Component for Background Effect
// const Particle = ({ style }) => (
//   <div
//     className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
//     style={{
//       ...style,
//       animationDuration: `${Math.random() * 3 + 2}s`,
//     }}
//   />
// );

// // Holographic Glow Effect
// const HoloGlow = () => (
//   <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-red-400/20 animate-pulse-slow blur-xl opacity-50" />
// );

// const History = ({ currentLanguage }) => {
//   const content = {
//     en: {
//       title: "Our Epic Journey",
//       subtitle: "Forging a Legacy in Construction",
//       description:
//         "Step into our 20+ year odyssey, where innovation and grit have transformed landscapes and lives across the globe.",
//       milestones: [
//         {
//           year: 2003,
//           icon: Calendar,
//           title: "The Genesis",
//           description: "Born from a dream to craft quality homes, marking our first step in the industry.",
//           highlight: "First home built in record time",
//           color: "from-blue-500 to-cyan-500",
//         },
//         {
//           year: 2008,
//           icon: Landmark,
//           title: "Rise of Skylines",
//           description: "Pioneered commercial hubs, reshaping urban landscapes with bold designs.",
//           highlight: "Landmark office tower completed",
//           color: "from-cyan-500 to-green-500",
//         },
//         {
//           year: 2012,
//           icon: Hammer,
//           title: "Industrial Revolution",
//           description: "Revolutionized industrial spaces with cutting-edge facilities.",
//           highlight: "Mega factory inauguration",
//           color: "from-green-500 to-yellow-500",
//         },
//         {
//           year: 2017,
//           icon: Building,
//           title: "Connecting Worlds",
//           description: "Built infrastructure that united communities with roads and bridges.",
//           highlight: "First highway project",
//           color: "from-yellow-500 to-orange-500",
//         },
//         {
//           year: 2020,
//           icon: Factory,
//           title: "Green Horizons",
//           description: "Led sustainable construction with eco-friendly industrial parks.",
//           highlight: "Zero-emission facility award",
//           color: "from-orange-500 to-red-500",
//         },
//         {
//           year: 2025,
//           icon: Shield,
//           title: "Future Forged",
//           description: "Embracing AI and smart tech for the next era of building.",
//           highlight: "Smart city project launch",
//           color: "from-red-500 to-purple-500",
//         },
//       ],
//       cta: "Join Our Legacy",
//     },
//     ar: {
//       title: "رحلتنا الأسطورية",
//       subtitle: "صياغة إرث في البناء",
//       description:
//         "استكشف رحلتنا التي استمرت أكثر من 20 عامًا، حيث حول الابتكار والعزيمة المناظر الطبيعية والحياة عبر العالم.",
//       milestones: [
//         {
//           year: 2003,
//           icon: Calendar,
//           title: "البداية",
//           description: "ولدت من حلم بصنع منازل عالية الجودة، خطوتنا الأولى في الصناعة.",
//           highlight: "بناء أول منزل في وقت قياسي",
//           color: "from-blue-500 to-cyan-500",
//         },
//         {
//           year: 2008,
//           icon: Landmark,
//           title: "صعود الأفق",
//           description: "سبقنا في بناء المراكز التجارية، عاودنا تشكيل المناظر الحضرية بتصاميم جريئة.",
//           highlight: "اكتمال برج مكتبي رمزي",
//           color: "from-cyan-500 to-green-500",
//         },
//         {
//           year: 2012,
//           icon: Hammer,
//           title: "ثورة صناعية",
//           description: "أحدثنا ثورة في المساحات الصناعية بمرافق متطورة.",
//           highlight: "افتتاح مصنع ضخم",
//           color: "from-green-500 to-yellow-500",
//         },
//         {
//           year: 2017,
//           icon: Building,
//           title: "ربط العالمين",
//           description: "بنينا بنية تحتية جمعت المجتمعات بالطرق والجسور.",
//           highlight: "أول مشروع طريق سريع",
//           color: "from-yellow-500 to-orange-500",
//         },
//         {
//           year: 2020,
//           icon: Factory,
//           title: "آفاق خضراء",
//           description: "قدمنا بناءً مستدامًا بمناطق صناعية صديقة للبيئة.",
//           highlight: "جائزة منشأة خالية من الانبعاثات",
//           color: "from-orange-500 to-red-500",
//         },
//         {
//           year: 2025,
//           icon: Shield,
//           title: "المستقبل المشكل",
//           description: "نعتمد الذكاء الاصطناعي وتكنولوجيا ذكية لعصر البناء القادم.",
//           highlight: "إطلاق مشروع المدينة الذكية",
//           color: "from-red-500 to-purple-500",
//         },
//       ],
//       cta: "انضم إلى إرثنا",
//     },
//   };

//   const currentContent = content[currentLanguage];
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 100, rotate: -10, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotate: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//       },
//     },
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       zIndex: 10,
//       boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section
//       id="history"
//       className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950"
//       dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
//     >
//       {/* Holographic Background */}
//       <HoloGlow />
//       {/* Particle Effect */}
//       {[...Array(30)].map((_, i) => (
//         <Particle
//           key={i}
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//           }}
//         />
//       ))}

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-red-500 animate-pulse-slow">
//             {currentContent.title}
//           </h2>
//           <p className="text-xl text-white/80 mt-4">{currentContent.subtitle}</p>
//           <p className="text-lg text-white/70 mt-6 max-w-4xl mx-auto">
//             {currentContent.description}
//           </p>
//         </div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="relative perspective-1000"
//         >
//           <div className="flex justify-center items-center h-[600px]">
//             {currentContent.milestones.map((milestone, index) => {
//               const Icon = milestone.icon;
//               const angle = (index / currentContent.milestones.length) * 360 - 90; // Circular layout
//               const radius = 300;
//               const x = Math.cos((angle * Math.PI) / 180) * radius;
//               const y = Math.sin((angle * Math.PI) / 180) * radius;

//               return (
//                 <motion.div
//                   key={index}
//                   custom={index}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   style={{
//                     position: "absolute",
//                     left: `50%`,
//                     top: `50%`,
//                     transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
//                     transformStyle: "preserve-3d",
//                   }}
//                   className="w-80 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"
//                 >
//                   <div
//                     className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl ${milestone.color}`}
//                     style={{
//                       background: `linear-gradient(to right, ${milestone.color})`,
//                     }}
//                   >
//                     {milestone.year}
//                   </div>
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center mb-4">
//                     <Icon className="text-white w-6 h-6" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-gray-700 mb-2">{milestone.description}</p>
//                   <p className="text-sm text-blue-600 font-medium">
//                     {milestone.highlight}
//                   </p>
//                   <Button
//                     className="mt-4 w-full"
//                     onClick={() =>
//                       document.getElementById('contact')?.scrollIntoView({
//                         behavior: 'smooth',
//                       })
//                     }
//                   >
//                     {currentContent.cta}
//                   </Button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS Animations */}
//       <style>
//         {`
//           @keyframes pulse-slow {
//             0% { opacity: 0.5; }
//             50% { opacity: 1; }
//             100% { opacity: 0.5; }
//           }
//           .animate-pulse-slow {
//             animation: pulse-slow 4s infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default History;

//3 
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
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <section
      id="history"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-300"
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

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-red-600 h-full"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          />

          {currentContent.milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative mb-12 flex ${isLeft ? 'justify-start' : 'justify-end'} items-center w-full`}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-600">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {milestone.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon className="text-blue-500 w-4 h-4 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Connector Line to Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600" />
                {/* Dot on Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-red-600 rounded-full" />
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