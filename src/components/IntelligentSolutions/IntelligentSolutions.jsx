import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    id: 0,
    category: "Operating system",
    title: "Operating system for Civil & Engineering services company",
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
  const navigate = useNavigate();
  const mobileCardsRef = useRef(null);
  const mobileTabsRef = useRef(null);

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

  // Helper to center the active mobile tab
  const syncMobileTabs = (index) => {
    if (mobileTabsRef.current && mobileTabsRef.current.children[index]) {
      const tab = mobileTabsRef.current.children[index];
      const container = mobileTabsRef.current;
      const scrollLeft = tab.offsetLeft - (container.offsetWidth / 2) + (tab.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const selectCategory = (index) => {
    if (isTransitioning) return;
    setOffset(solutions.length + index);
    
    // Sync mobile cards scroll
    if (mobileCardsRef.current) {
      mobileCardsRef.current.scrollTo({ left: index * (window.innerWidth * 0.85 + 20), behavior: "smooth" });
    }
    // Sync mobile tabs centering
    syncMobileTabs(index);
  };

  // Synchronize mobile tabs when swiping cards
  const handleMobileScroll = (e) => {
    const cardSize = window.innerWidth * 0.85 + 20;
    const newIndex = Math.round(e.target.scrollLeft / cardSize);
    if (newIndex >= 0 && newIndex < solutions.length && newIndex !== activeIndex) {
      setOffset(solutions.length + newIndex);
      syncMobileTabs(newIndex);
    }
  };

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
    <section className="relative w-full bg-transparent overflow-hidden py-16 transform-gpu">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Header Section */}
        <div className="text-white/30 text-[10px] md:text-xs font-medium uppercase tracking-[3px] mb-4 md:mb-6 font-sans">
          [Solutions]
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 relative">
          <div className="relative group">
            <h2 className="text-[2rem] md:text-[40px] leading-tight font-black relative font-sans">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent block">
                Intelligent solutions
              </span>
              <span className="text-[#CACBDB] block font-normal mt-[-2px] md:mt-[-4px]">
                for real business challenges
              </span>
            </h2>
          </div>

          <div className="md:max-w-[340px] flex items-center md:pb-1">
            <p className="text-[#FBFBFF]/40 text-[13px] md:text-[14px] font-normal leading-relaxed font-sans max-w-[320px] md:max-w-none">
              Our software powers real-time, AI-driven decisions in critical
              government and commercial enterprises.
            </p>
          </div>

          {/* Nav Arrows - Desktop Only */}
          <div className="hidden md:flex gap-3 ml-auto items-center">
            <button onClick={handlePrev} className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer">
              <img src="/home_section_4/left_arrow.svg" alt="Prev" className="w-10 h-10" />
            </button>
            <button onClick={handleNext} className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer">
              <img src="/home_section_4/right_arrow.svg" alt="Next" className="w-10 h-10" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Tabs */}
        <div 
          ref={mobileTabsRef}
          className="md:hidden flex flex-row overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 pb-4 mb-8 w-full border-b border-white/5 relative"
        >
          {solutions.map((item, idx) => (
            <button
              key={`tab-${idx}`}
              onClick={() => selectCategory(idx)}
              className={`snap-center shrink-0 flex items-center gap-3 py-2 text-[15px] font-medium transition-all duration-300 ${
                activeIndex === idx ? "text-white opacity-100" : "text-white/40"
              }`}
            >
              <span className="whitespace-nowrap">{item.category}</span>
              {activeIndex === idx && (
                <div className="w-4 h-[1.5px] bg-white opacity-80" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Vertical Tabs + Carousel Sidebar */}
        <div className="hidden md:flex flex-row gap-12 items-start relative min-h-[440px]">
          <div className="w-[200px] flex flex-col gap-0.5 shrink-0 sticky top-24 self-start z-20">
            {solutions.map((item, idx) => (
              <button
                key={`${item.category}-${idx}`}
                onClick={() => selectCategory(idx)}
                className={`flex items-center justify-between py-2.5 px-2 text-left transition-all duration-300 rounded-lg group cursor-pointer ${
                  activeIndex === idx ? "text-white opacity-100" : "text-white/60 hover:text-white/80"
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
                  <Motion.span layoutId="dash" className="w-3.5 h-[1.5px] bg-white opacity-60" />
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
              transition={isTransitioning ? { duration: 0 } : { type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            >
              {extendedSolutions.map((card, idx) => (
                <div key={`card-desktop-${idx}`} className="rounded-xl p-[1.5px] w-[424px] h-[470px] shrink-0">
                  <div
                    className="w-full h-full rounded-xl overflow-hidden relative flex flex-col p-[22px] pb-6 shadow-2xl border border-white/5"
                    style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #D8D9F2 35%, #A6A9F7 100%)" }}
                  >
                    <div className="relative w-full h-[200px] mb-4 rounded-lg bg-[#1d1f4c]/10 overflow-hidden shrink-0 border border-black/5">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col relative z-10 box-border">
                      <div className="h-[75px] mb-1.5 overflow-hidden">
                        <h3 className="text-[#050737] font-bold text-[19px] leading-tight font-sans">{card.title}</h3>
                      </div>
                      <div className="h-[85px] mb-3 overflow-hidden">
                        <p className="text-[#050737]/65 text-[15px] leading-[1.35] tracking-tight font-sans">{card.description}</p>
                      </div>
                      <div className="mt-auto flex flex-row items-center gap-1.5 cursor-pointer group/link w-fit">
                        <span onClick={() => navigate("/coming-soon")} className="text-[#050737] text-[16px] font-medium font-sans">Explore</span>
                        <img src="/home_section_4/explore_arrow.svg" alt="" className="w-4.5 h-4.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                    <img src="/home_section_4/card_bottom_pattern.svg" alt="" className="absolute bottom-0 right-0 pointer-events-none opacity-20 select-none" />
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* Mobile View: High-Fidelity Scrollable Cards */}
        <div 
          ref={mobileCardsRef}
          onScroll={handleMobileScroll}
          className="md:hidden flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-5 pb-6 w-full relative"
        >
          {solutions.map((card, idx) => (
            <div 
              key={`card-mobile-${idx}`} 
              className="snap-center shrink-0 w-full rounded-[10px] p-4 flex flex-col gap-[22px] items-start justify-start relative shadow-xl overflow-hidden"
              style={{
                background: "linear-gradient(186.41deg, rgba(202, 203, 235, 1) 4.87%, rgba(156, 160, 245, 1) 166.88%)"
              }}
            >
              <div className="w-full h-[185px] rounded-lg overflow-hidden relative border border-black/5 shrink-0">
                 <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  style={{ background: "linear-gradient(to left, rgba(29, 31, 76, 0.49), rgba(29, 31, 76, 0.49))" }}
                />
              </div>
              
              <div className="flex flex-col gap-[11px] items-start justify-start self-stretch shrink-0 relative">
                <div className="text-[#050737] text-left font-bold text-lg relative self-stretch leading-tight line-clamp-2">
                  {card.title}
                </div>
                <div className="text-[#050737] text-left text-sm font-normal relative self-stretch tracking-[-0.15px] opacity-65 leading-relaxed line-clamp-3">
                  {card.description}
                </div>
              </div>

              <div 
                onClick={() => navigate("/coming-soon")}
                className="flex flex-row gap-[7px] items-center justify-start shrink-0 relative cursor-pointer active:scale-95 transition-transform"
              >
                <div className="text-[#050737] text-left text-lg font-normal relative">
                  Explore
                </div>
                <img src="/home_section_4/explore_arrow.svg" className="shrink-0 w-5 h-5 relative object-contain" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default IntelligentSolutions;
