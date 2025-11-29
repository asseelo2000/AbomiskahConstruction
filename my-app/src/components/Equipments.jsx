import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Globe,
  Hammer,
  Shield,
  Wrench,
  ChevronLeft,
  ChevronRight,
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
          pdf: "pdfs/equipments/capability.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Factory,
          title: "Machinery Park",
          description: "Our extensive machinery park for various operations.",
          pdf: "pdfs/equipments/EquipmentandMachinaryPark.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Wrench,
          title: "List of Equipment Owned",
          description: "Detailed list of all equipment owned by the company.",
          pdf: "pdfs/equipments/LISTOFCONSTRUCTIONEQUIPMENT1.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Hammer,
          title: "List of Drilling Equipment",
          description: "Specialized drilling equipment in our inventory.",
          pdf: "pdfs/equipments/ListofDrillingEquiment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Globe,
          title: "Equipment in Djibouti",
          description: "Equipment assets in Djibouti.",
          pdf: "pdfs/equipments/listofequipment_D.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
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
          pdf: "pdfs/equipments/capability.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Factory,
          title: "حديقة الآلات",
          description: "حديقة الآلات الواسعة لدينا لعمليات متنوعة.",
          pdf: "pdfs/equipments/EquipmentandMachinaryPark.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Wrench,
          title: "قائمة المعدات المملوكة",
          description: "قائمة مفصلة بجميع المعدات المملوكة للشركة.",
          pdf: "pdfs/equipments/LISTOFCONSTRUCTIONEQUIPMENT1.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Hammer,
          title: "قائمة معدات الحفر",
          description: "معدات الحفر المتخصصة في مخزوننا.",
          pdf: "pdfs/equipments/ListofDrillingEquiment.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
        {
          icon: Globe,
          title: "المعدات المملوكة في جيبوتي",
          description: "أصول المعدات في جيبوتي.",
          pdf: "pdfs/equipments/listofequipment_D.pdf",
          images: ["/images/projects/LuxuryResidentialComplex.jpg"],
          features: [],
        },
      ],
    },
  };
  const currentContent = content[currentLanguage] || content.en;
  const containerRef = useRef(null); // scroll container
  const innerRef = useRef(null); // inner flex content
  const cardRefs = useRef([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isRTL = currentLanguage === "ar";
  const realItems = currentContent.equipments;
  const realLength = realItems.length;
  const equipmentItems = [...realItems, ...realItems, ...realItems];
  useEffect(() => {
    cardRefs.current = equipmentItems.map((_, i) => cardRefs.current[i] || null);
  }, [equipmentItems.length]);
  useEffect(() => {
    // measure card width (including gap) and listen for resize
    const measure = () => {
      const inner = innerRef.current;
      if (!inner) return;
      const innerStyle = window.getComputedStyle(inner);
      const gap = parseFloat(innerStyle.columnGap) || 0;
      const first = inner.querySelector(".equipment-card");
      if (!first) return;
      const rect = first.getBoundingClientRect();
      setCardWidth(rect.width + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [currentLanguage, realLength]);
  useEffect(() => {
    // initialize position
    if (cardWidth > 0) {
      const initialIndex = realLength;
      setCurrentIndex(initialIndex);
      scrollToIndex(initialIndex, "auto");
    }
  }, [cardWidth]);
  useEffect(() => {
    // reset position if out of middle range
    if (currentIndex < realLength) {
      const newIndex = currentIndex + realLength;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex, "auto");
    } else if (currentIndex >= realLength * 2) {
      const newIndex = currentIndex - realLength;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex, "auto");
    }
  }, [currentIndex, realLength]);
  useEffect(() => {
    // update index on manual scroll
    const cont = containerRef.current;
    if (!cont || !cardWidth) return;
    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateCurrentIndex);
    };
    cont.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cont.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [cardWidth, realLength]);
  const updateCurrentIndex = () => {
    const cont = containerRef.current;
    if (!cont) return;
    const contRect = cont.getBoundingClientRect();
    const centerX = contRect.left + contRect.width / 2;
    let minDist = Infinity;
    let closestIdx = 0;
    cardRefs.current.forEach((card, idx) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      }
    });
    setCurrentIndex(closestIdx);
  };
  const scrollToIndex = (index, behavior = "smooth") => {
    const card = cardRefs.current[index];
    if (card && containerRef.current) {
      card.scrollIntoView({
        behavior,
        inline: "center",
      });
    }
  };
  // navigation handlers
  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };
  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };
  const realIndex = currentIndex - realLength;
  const prevText = isRTL ? "السابق" : "Prev";
  const nextText = isRTL ? "التالي" : "Next";
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;
  return (
    <section
      id="equipments"
      className="py-16 bg-gradient-to-tr from-blue-700 to-red-600 text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold">{currentContent.title}</h2>
          <p className="mt-2 text-xl">{currentContent.subtitle}</p>
        </div>
        {/* Horizontal scrollable cards */}
        <div
          ref={containerRef}
          className="relative group overflow-x-auto scrollbar-hide py-6"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            ref={innerRef}
            className="flex gap-x-8 px-2"
          >
            {equipmentItems.map((item, idx) => {
              const OriginalIcon = item.icon;
              return (
                <motion.div
                  key={`${item.title}-${idx}`}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="equipment-card flex-shrink-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 w-80 flex flex-col items-center text-center shadow-lg cursor-pointer overflow-hidden scroll-snap-align-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 300 } }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedEquipment(item)}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-red-500 rounded-full p-6 mb-6 shadow-md">
                    <OriginalIcon className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 break-words">{item.title}</h3>
                  <p className="text-white/80 mb-4 break-words">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Navigator: left / counter / right */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow-md transition bg-white text-blue-700 hover:scale-105`}
            aria-label="Previous equipment"
          >
            <PrevIcon className="w-5 h-5" />
            <span className="hidden sm:inline">{prevText}</span>
          </button>
          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white flex flex-col items-center">
            <div className="text-sm opacity-80">
              {realIndex + 1} / {realLength}
            </div>
            <div className="text-xs mt-1 max-w-xs truncate px-2">
              {equipmentItems[currentIndex]?.title}
            </div>
          </div>
          <button
            onClick={handleNext}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow-md transition bg-white text-blue-700 hover:scale-105`}
            aria-label="Next equipment"
          >
            <span className="hidden sm:inline">{nextText}</span>
            <NextIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition"
          >
            {currentContent.cta}
          </button>
        </div>
      </div>
      {/* Modal */}
      {selectedEquipment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEquipment(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="
              bg-white text-gray-800 rounded-3xl shadow-2xl
              w-full max-w-2xl
              max-h-[70vh]
              overflow-y-auto
              p-6 sm:p-8 relative
            "
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">{selectedEquipment.title}</h2>
            {/* PDF Viewer */}
            <div className="mb-6 flex justify-center">
              <iframe
                src={`/${selectedEquipment.pdf}?v=${new Date().getTime()}`}
                title="Equipment PDF"
                className="
                  w-full
                  max-w-lg
                  h-[35vh]
                  sm:h-[40vh]
                  md:h-[45vh]
                  border-2 border-gray-300 rounded-lg
                "
              />
            </div>
            {/* Image Gallery */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{isRTL ? "معرض الصور" : "Image Gallery"}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedEquipment.images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
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
        .scroll-snap-align-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
};
export default Equipments;