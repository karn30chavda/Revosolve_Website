import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

const solutions = [
  {
    id: 0,
    category: "Operating system",
    title: "Operating system for Civil & Engineering services company from...",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/operating_system.svg",
  },
  {
    id: 1,
    category: "OCR Solution",
    title: "OCR Solution for offline Tapaal received in goverment departments",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/ocr_solution.svg",
  },
  {
    id: 2,
    category: "AI Surveillance",
    title: "AI Surveillance for Indian Navy",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/ai_survelliance.svg",
  },
  {
    id: 3,
    category: "IVR & 3D Assistant",
    title: "IVR & 3D Virtual Assistant for automated customer experience",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/operating_system.svg",
  },
  {
    id: 4,
    category: "Manhole Survey",
    title: "Automated Manhole Survey and Diagnosis System",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/ocr_solution.svg",
  },
  {
    id: 5,
    category: "D2C & Ecom",
    title: "Direct to Consumer and E-commerce Scaling Platform",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/ai_survelliance.svg",
  },
  {
    id: 6,
    category: "Digital Twin",
    title: "Real-time Digital Twin for Industrial Infrastructure",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/operating_system.svg",
  },
  {
    id: 7,
    category: "AR/VR",
    title: "Immersive AR/VR Training Content and Systems",
    description:
      "Full-stack development from concept to deployment with modern frameworks and architectures.",
    image: "/home_section_4/ocr_solution.svg",
  },
];

const extendedSolutions = [...solutions, ...solutions, ...solutions];

const IntelligentSolutions = () => {
  const [offset, setOffset] = useState(solutions.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeIndex = offset % solutions.length;
  const cardWidth = 424;
  const gap = 8;
  const step = cardWidth + gap;

  const handleNext = () => {
    if (isTransitioning) return;
    setOffset((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setOffset((prev) => prev - 1);
  };

  const selectCategory = (index) => {
    if (isTransitioning) return;
    setOffset(solutions.length + index);
  };

  // Safe side effect for infinite loop jumping
  useEffect(() => {
    let timeout;
    if (offset >= solutions.length * 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setOffset(solutions.length);
      }, 400);
    } else if (offset < solutions.length) {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setOffset(solutions.length + (solutions.length - 1));
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [offset]);

  return (
    <section className="relative w-full bg-transparent overflow-hidden py-20 pb-32">
      <div className="w-[90%] md:w-[85%] mx-auto px-4">
        <div className="text-white/30 text-xs font-medium uppercase tracking-[3px] mb-6 font-sans">
          [Solutions]
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="relative group">
            <h2 className="text-[36px] md:text-[40px] leading-tight font-black relative font-sans">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent block">
                Intelligent solutions
              </span>
              <span className="text-[#CACBDB] block font-normal mt-[-4px]">
                for real business challenges
              </span>
            </h2>
          </div>

          <div className="md:max-w-[340px] flex items-center md:pb-1">
            <p
              className="text-[#FBFBFF] text-[14px] font-normal leading-normal font-sans"
              style={{ fontFamily: '"Blauer Nue", sans-serif', opacity: 0.4 }}
            >
              Our software powers real-time, AI-driven decisions in critical
              government and commercial enterprises.
            </p>
          </div>

          <div className="flex gap-3 ml-auto items-center">
            <button
              onClick={handlePrev}
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img
                src="/home_section_4/left_arrow.svg"
                alt="Prev"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </button>
            <button
              onClick={handleNext}
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img
                src="/home_section_4/right_arrow.svg"
                alt="Next"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start relative min-h-[440px]">
          <div className="w-full md:w-[200px] flex flex-col gap-0.5 shrink-0 sticky top-24 self-start z-20">
            {solutions.map((item, idx) => (
              <button
                key={`${item.category}-${idx}`}
                onClick={() => selectCategory(idx)}
                className={`flex items-center justify-between py-2.5 px-2 text-left transition-all duration-300 rounded-lg group cursor-pointer ${
                  activeIndex === idx
                    ? "text-white opacity-100"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                <Motion.span
                  animate={{ x: activeIndex === idx ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="text-[17px] font-normal tracking-[-0.4px] font-sans"
                >
                  {item.category}
                </Motion.span>
                {activeIndex === idx && (
                  <Motion.span
                    layoutId="dash"
                    className="w-3.5 h-[1.5px] bg-white opacity-60"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex-1 w-full max-w-[1119px] ml-auto overflow-hidden relative">
            <Motion.div
              className="flex gap-2"
              animate={{ x: -offset * step }}
              onAnimationComplete={() => {
                if (isTransitioning) setIsTransitioning(false);
              }}
              transition={
                isTransitioning
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      mass: 1,
                    }
              }
            >
              {extendedSolutions.map((card, idx) => (
                <Motion.div
                  key={`card-${idx}`}
                  className="rounded-xl p-[1.5px] w-[424px] h-[470px] shrink-0"
                >
                  <div
                    className="w-full h-full rounded-xl overflow-hidden relative flex flex-col p-[22px] pb-6 shadow-2xl border border-white/5"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #D8D9F2 35%, #A6A9F7 100%)",
                    }}
                  >
                    <div className="relative w-full h-[200px] mb-4 rounded-lg bg-[#1d1f4c]/10 overflow-hidden shrink-0 border border-black/5">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>

                    <div className="flex-1 flex flex-col relative z-10 box-border">
                      <div className="h-[75px] mb-1.5 overflow-hidden">
                        <h3 className="text-[#050737] font-bold text-[19px] leading-tight font-sans">
                          {card.title}
                        </h3>
                      </div>

                      <div className="h-[85px] mb-3 overflow-hidden">
                        <p className="text-[#050737]/65 text-[15px] leading-[1.35] tracking-tight font-sans">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-row items-center gap-1.5 cursor-pointer group/link w-fit">
                        <span className="text-[#050737] text-[16px] font-medium font-sans">
                          Explore
                        </span>
                        <img
                          src="/home_section_4/explore_arrow.svg"
                          alt=""
                          className="w-4.5 h-4.5 group-hover/link:translate-x-1.5 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Decorative Pattern at Bottom */}
                    <img
                      src="/home_section_4/card_bottom_pattern.svg"
                      alt=""
                      className="absolute bottom-0 right-0 pointer-events-none opacity-20 select-none"
                    />
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
