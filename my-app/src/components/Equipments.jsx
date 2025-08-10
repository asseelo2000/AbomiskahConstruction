import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Hammer,
  Globe,
  Shield,
  Wrench,
} from "lucide-react";

const Equipments = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Equipments",
      subtitle: "Comprehensive Equipment Overview",
      cta: "Get Quote",
      equipments: [
        {
          icon: Shield,
          title: "Equipment Capabilities",
          description: "Overview of our equipment capabilities and features.",
          pdf: "equipment-capabilities.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Factory,
          title: "Machinery Park",
          description: "Our extensive machinery park for various operations.",
          pdf: "machinery-park.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Wrench,
          title: "List of Equipment Owned",
          description: "Detailed list of all equipment owned by the company.",
          pdf: "list-of-equipment-owned.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Hammer,
          title: "List of Drilling Equipment",
          description: "Specialized drilling equipment in our inventory.",
          pdf: "list-of-drilling-equipment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Globe,
          title:
            "Equipment in the Republic of Djibouti owned by Abu Miska",
          description: "Equipment assets in Djibouti.",
          pdf: "djibouti-equipment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
      ],
    },
    ar: {
      title: "المعدات",
      subtitle: "نظرة عامة شاملة على المعدات",
      cta: "الحصول على عرض أسعار",
      equipments: [
        {
          icon: Shield,
          title: "قدرات المعدات",
          description: "نظرة عامة على قدرات معداتنا وميزاتها.",
          pdf: "equipment-capabilities.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Factory,
          title: "حديقة الآلات",
          description: "حديقة الآلات الواسعة لدينا لعمليات متنوعة.",
          pdf: "machinery-park.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Wrench,
          title: "قائمة المعدات المملوكة",
          description: "قائمة مفصلة بجميع المعدات المملوكة للشركة.",
          pdf: "list-of-equipment-owned.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Hammer,
          title: "قائمة معدات الحفر",
          description: "معدات الحفر المتخصصة في مخزوننا.",
          pdf: "list-of-drilling-equipment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Globe,
          title:
            "المعدات في جمهورية جيبوتي المملوكة لأبو مسكة",
          description: "أصول المعدات في جيبوتي.",
          pdf: "djibouti-equipment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg", "/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
      ],
    },
  };

  const currentContent = content[currentLanguage] || content.en;
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  useEffect(() => {
  if (selectedEquipment) {
    setIsPaused(true);
  } else {
    setIsPaused(false);
  }
}, [selectedEquipment]);

useEffect(() => {
  if (isPaused) return;

  const container = containerRef.current;
  if (!container) return;

  let scrollAmount = container.scrollLeft;
  const speed = 0.5;
  let animationFrameId;

  const scrollStep = () => {
    if (!container) return;

    scrollAmount += speed;
    if (scrollAmount >= container.scrollWidth / 2) {
      scrollAmount = 0;
      container.scrollLeft = 0;
    } else {
      container.scrollLeft = scrollAmount;
    }

    animationFrameId = requestAnimationFrame(scrollStep);
  };

  animationFrameId = requestAnimationFrame(scrollStep);

  return () => cancelAnimationFrame(animationFrameId);
}, [isPaused]);

  const equipmentItems = [
    ...currentContent.equipments,
    ...currentContent.equipments,
  ];

  return (
    <section
      className="py-16 bg-gradient-to-tr from-blue-700 to-red-600 text-white"
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">{currentContent.title}</h2>
          <p className="mt-2 text-xl">{currentContent.subtitle}</p>
        </div>

        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide cursor-pointer py-6"
          onMouseEnter={() => !selectedEquipment && setIsPaused(true)} // don't override modal pause
          onMouseLeave={() => !selectedEquipment && setIsPaused(false)} // resume only if modal closed
          style={{
            scrollBehavior: "auto",
            scrollSnapType: "none",
          }}
        >
          {equipmentItems.map((item, idx) => {
            const originalIndex = idx % currentContent.equipments.length;
            const originalItem = currentContent.equipments[originalIndex];
            const OriginalIcon = originalItem.icon;

            return (
              <motion.div
                key={idx}
                className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 w-80 flex flex-col items-center text-center shadow-lg cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                transition={{ duration: 0.6, delay: originalIndex * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setSelectedEquipment(originalItem)}
              >
                <div className="bg-gradient-to-br from-blue-600 to-red-500 rounded-full p-6 mb-6 shadow-md">
                  <OriginalIcon className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 break-words">
                  {originalItem.title}
                </h3>
                <p className="text-white/80 mb-4 break-words">
                  {originalItem.description}
                </p>
                {originalItem.features.length > 0 && (
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    {originalItem.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition"
          >
            {currentContent.cta}
          </button>
        </div>
      </div>

      {selectedEquipment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedEquipment(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-800 p-8 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">
              {selectedEquipment.title}
            </h2>

            {/* PDF Viewer */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Detailed PDF</h3>
              <iframe
                src={`/pdfs/${selectedEquipment.pdf}`}
                className="w-full h-96 border-2 border-gray-300 rounded-lg"
                title="Equipment PDF"
              />
            </div>

            {/* Image Gallery */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Image Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedEquipment.images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Equipments;
