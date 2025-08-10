import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import {
  Building,
  Factory,
  Hammer,
  Home,
  Shield,
  Wrench,
} from 'lucide-react';

const Equipments = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Equipments",
      subtitle: "Comprehensive Construction Solutions",
      Equipments: [
        {
          icon: Home,
          title: "Residential Construction",
          description:
            "Custom homes, renovations, and residential developments built to the highest standards of quality and comfort.",
          features: [
            "Custom Home Design",
            "Renovations & Extensions",
            "Interior Finishing",
            "Landscaping",
          ],
        },
        {
          icon: Building,
          title: "Commercial Construction",
          description:
            "Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal.",
          features: [
            "Office Buildings",
            "Retail Spaces",
            "Restaurants & Hotels",
            "Shopping Centers",
          ],
        },
        {
          icon: Factory,
          title: "Industrial Construction",
          description:
            "Warehouses, factories, and industrial facilities built for efficiency, safety, and long-term durability.",
          features: [
            "Warehouses",
            "Manufacturing Plants",
            "Storage Facilities",
            "Industrial Complexes",
          ],
        },
        {
          icon: Wrench,
          title: "Infrastructure Development",
          description:
            "Roads, bridges, and public infrastructure projects that connect communities and drive economic growth.",
          features: [
            "Road Construction",
            "Bridge Building",
            "Utilities Installation",
            "Site Development",
          ],
        },
        {
          icon: Hammer,
          title: "Renovation & Remodeling",
          description:
            "Transform existing spaces with our comprehensive renovation and remodeling Equipments.",
          features: [
            "Kitchen Remodeling",
            "Bathroom Renovation",
            "Office Upgrades",
            "Structural Modifications",
          ],
        },
        {
          icon: Shield,
          title: "Project Management",
          description:
            "Complete project oversight from planning to completion, ensuring timely delivery and quality results.",
          features: [
            "Project Planning",
            "Quality Control",
            "Timeline Management",
            "Budget Oversight",
          ],
        },
      ],
      cta: "Get Quote",
    },
  };

  const currentContent = content[currentLanguage] || content.en;

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = container.scrollLeft;
    const speed = 0.5; // px per frame

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

  const equipmentItems = [...currentContent.Equipments, ...currentContent.Equipments];

  const handlePressStart = () => setIsPaused(true);
  const handlePressEnd = () => setIsPaused(false);

  return (
    <section className="py-16 bg-gradient-to-tr from-blue-700 to-red-600 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">{currentContent.title}</h2>
          <p className="mt-2 text-xl">{currentContent.subtitle}</p>
        </div>

        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide cursor-pointer"
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          style={{
            scrollBehavior: "auto",
            scrollSnapType: "none",
          }}
        >
          {equipmentItems.map((item, idx) => {
            const originalIndex = idx % currentContent.Equipments.length;
            const originalItem = currentContent.Equipments[originalIndex];
            const OriginalIcon = originalItem.icon;

            return (
              <motion.div
                key={idx}
                className="inline-block snap-none bg-white/10 backdrop-blur-md rounded-3xl p-8 w-80 flex flex-col items-center text-center shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: originalIndex * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-red-500 rounded-full p-6 mb-6 shadow-md">
                  <OriginalIcon className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{originalItem.title}</h3>
                {/* Description removed */}
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  {originalItem.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
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

      {/* Hide scrollbar globally */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default Equipments;
