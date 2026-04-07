import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion as Motion, useAnimation, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const solutions = [
  { id: 0, category: "Operating system", title: "Operating system for Civil & Engineering services company", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/operating_system.svg" },
  { id: 1, category: "OCR Solution", title: "OCR Solution for offline Tapaal received in goverment departments", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/ocr_solution.svg" },
  { id: 2, category: "AI Surveillance", title: "AI Surveillance for Indian Navy", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/ai_survelliance.svg" },
  { id: 3, category: "IVR & 3D Assistant", title: "IVR & 3D Virtual Assistant for automated customer experience", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/operating_system.svg" },
  { id: 4, category: "Manhole Survey", title: "Automated Manhole Survey and Diagnosis System", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/ocr_solution.svg" },
  { id: 5, category: "D2C & Ecom", title: "Direct to Consumer and E-commerce Scaling Platform", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/ai_survelliance.svg" },
  { id: 6, category: "Digital Twin", title: "Real-time Digital Twin for Industrial Infrastructure", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/operating_system.svg" },
  { id: 7, category: "AR/VR", title: "Immersive AR/VR Training Content and Systems", description: "Full-stack development from concept to deployment with modern frameworks and architectures.", image: "/home_section_4/ocr_solution.svg" },
];

const IntelligentSolutions = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const isPaused = useRef(false);
  
  const mobileCardsRef = useRef(null);
  const mobileTabsRef = useRef(null);

  const CARD_WIDTH = 424;
  const GAP = 24;
  const ITEM_WIDTH = CARD_WIDTH + GAP;
  const TOTAL_WIDTH = ITEM_WIDTH * solutions.length;
  const DURATION = 40; // Increased duration for more cards to keep speed natural

  const marqueeSolutions = [...solutions, ...solutions, ...solutions];

  const startMarquee = useCallback(async (currentPos = null) => {
    if (isPaused.current) return;

    const startValue = currentPos !== null ? currentPos : x.get();
    
    // Normalize position within [0, -TOTAL_WIDTH]
    let normalizedX = startValue % TOTAL_WIDTH;
    if (normalizedX > 0) normalizedX -= TOTAL_WIDTH;
    
    // Smooth reset if we are near the edge
    if (normalizedX <= -TOTAL_WIDTH + 1) normalizedX = 0;

    const remainingDistance = Math.abs(-TOTAL_WIDTH - normalizedX);
    const dynamicDuration = (remainingDistance / TOTAL_WIDTH) * DURATION;

    controls.set({ x: normalizedX });
    x.set(normalizedX);

    await controls.start({
      x: -TOTAL_WIDTH,
      transition: {
        duration: dynamicDuration,
        ease: "linear",
      },
    });

    if (!isPaused.current) {
        controls.set({ x: 0 });
        x.set(0);
        // Seamless transition to infinite repeat
        controls.start({
          x: -TOTAL_WIDTH,
          transition: {
            duration: DURATION,
            ease: "linear",
            repeat: Infinity,
          },
        });
    }
  }, [controls, x, TOTAL_WIDTH, DURATION]);

  useEffect(() => {
    startMarquee(0);
    return () => controls.stop();
  }, [controls, startMarquee]);

  const selectCategory = (index) => {
    setActiveIndex(index);
    const targetX = -(index * ITEM_WIDTH);
    
    controls.stop();
    
    controls.start({
      x: targetX,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }).then(() => {
        x.set(targetX);
        if (!isPaused.current) {
            startMarquee(targetX);
        }
    });

    // Mobile sync
    if (mobileCardsRef.current?.children[index]) {
      const card = mobileCardsRef.current.children[index];
      mobileCardsRef.current.scrollTo({
        left: card.offsetLeft - 20,
        behavior: "smooth"
      });
    }
  };

  const handleMobileScroll = (e) => {
    const sPos = e.target.scrollLeft;
    const idx = Math.round(sPos / (280 + 16));
    if (idx !== activeIndex && idx < solutions.length) {
      setActiveIndex(idx);
      if (mobileTabsRef.current?.children[idx]) {
        const tab = mobileTabsRef.current.children[idx];
        mobileTabsRef.current.scrollTo({
          left: tab.offsetLeft - (mobileTabsRef.current.offsetWidth / 2) + 50,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className="relative w-full bg-transparent overflow-hidden pb-12 transform-gpu antialiased">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="text-white/30 text-[10px] md:text-xs font-medium uppercase tracking-[3px] mb-6 font-sans">
          [Solutions]
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-10 relative">
          <div className="relative group">
            <h2 className="text-[2rem] md:text-[40px] leading-tight font-black relative font-sans">
              <span className="w-fit block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Intelligent solutions
                </span>
                <span className="text-[#CACBDB] font-thin ml-2">for</span>
              </span>
              <span className="text-[#CACBDB] block font-thin mt-[-4px]">
                real business challenges
              </span>
            </h2>
          </div>
          <div className="md:max-w-[320px] flex items-center md:pb-1">
            <p className="text-[#FBFBFF] opacity-50 text-[14px] font-sans font-normal leading-relaxed">
              Our software powers real-time, AI-driven decisions in critical government and commercial enterprises.
            </p>
          </div>
          
          <div className="hidden md:flex gap-3 ml-auto items-center">
            <button 
              onClick={() => selectCategory((activeIndex - 1 + solutions.length) % solutions.length)}
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img src="/home_section_4/left_arrow.svg" alt="Prev" className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={() => selectCategory((activeIndex + 1) % solutions.length)}
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img src="/home_section_4/right_arrow.svg" alt="Next" className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div ref={mobileTabsRef} className="md:hidden flex overflow-x-auto scrollbar-hide gap-8 pb-4 mb-4 border-b border-white/5 relative">
          {solutions.map((item, id) => (
            <button key={`tab-${id}`} onClick={() => selectCategory(id)} className={`shrink-0 flex items-center transition-opacity duration-300 ${activeIndex === id ? "text-white opacity-100" : "text-white opacity-40"}`}>
              <span className="whitespace-nowrap font-medium font-sans text-[15px]">{item.category}</span>
            </button>
          ))}
        </div>
        <div ref={mobileCardsRef} onScroll={handleMobileScroll} className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 mb-12 py-2">
          {solutions.map((card, id) => (
            <div key={`m-card-${id}`} className="snap-center shrink-0 w-[280px] h-[360px]">
              <div className="w-full h-full rounded-xl overflow-hidden relative flex flex-col p-4 pb-6 shadow-xl border border-white/5 bg-white group/cm" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #D8D9F2 35%, #A6A9F7 100%)" }}>
                <div className="relative w-full h-[140px] mb-3 rounded-lg bg-[#1d1f4c]/10 overflow-hidden shrink-0 border border-black/5 z-10"><img src={card.image} alt="" className="w-full h-full object-cover" /></div>
                <div className="flex-1 z-10">
                  <h3 className="text-[#050737] font-bold text-[16px] leading-tight mb-2 font-sans relative z-20">
                    <span className="bg-bottom-left bg-no-repeat bg-linear-to-r from-[#050737] to-[#050737] bg-size-[0%_1.5px] group-hover/cm:bg-size-[100%_1.5px] transition-[background-size] duration-500 ease-out pb-0.5">
                      {card.title}
                    </span>
                  </h3>
                  <p className="text-[#050737]/65 text-[12px] leading-snug line-clamp-3 font-sans">{card.description}</p>
                </div>
                <img src="/home_section_4/card_bottom_pattern.svg" alt="" className="absolute bottom-0 right-0 opacity-30 select-none z-0 group-hover/cm:scale-125 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row gap-12 items-start relative min-h-[500px]">
          <div className="w-[200px] flex flex-col gap-0.5 shrink-0 sticky top-24 self-start z-30">
            {solutions.map((item, idx) => (
              <button 
                key={`side-${idx}`} 
                onClick={() => selectCategory(idx)} 
                className={`flex items-center justify-between py-2.5 px-2 text-left transition-all duration-300 rounded-lg group cursor-pointer ${activeIndex === idx ? "text-white opacity-100" : "text-white/30 hover:text-white/60" }`}
              >
                <Motion.span animate={{ x: activeIndex === idx ? 8 : 0 }} className="text-[17px] font-sans relative">
                  {item.category}
                  <span className={`absolute left-0 -bottom-1 h-[1.5px] bg-white/40 transition-all duration-300 ${activeIndex === idx ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Motion.span>
                {activeIndex === idx && <Motion.span layoutId="dash-d" className="w-4 h-[1.5px] bg-white opacity-60" />}
              </button>
            ))}
          </div>

          <div 
            className="flex-1 overflow-hidden relative py-8"
            onMouseEnter={() => { isPaused.current = true; controls.stop(); }}
            onMouseLeave={() => { isPaused.current = false; startMarquee(); }}
          >
            <Motion.div
              animate={controls}
              initial={{ x: 0 }}
              onUpdate={(latest) => {
                const val = parseFloat(latest.x);
                x.set(val);
                // Offset mapping by half an item width so the category changes when the card is centered
                const visualOffset = ITEM_WIDTH / 2;
                const progress = (Math.abs(val - visualOffset) % TOTAL_WIDTH) / TOTAL_WIDTH;
                const idx = Math.floor(progress * solutions.length) % solutions.length;
                if (idx !== activeIndex && !isPaused.current) {
                  setActiveIndex(idx);
                }
              }}
              style={{ x, translateZ: 0, willChange: "transform" }}
              className="flex gap-6 w-fit"
            >
              {marqueeSolutions.map((card, idx) => (
                <div key={`d-card-${idx}`} className="w-[424px] h-[470px] shrink-0">
                  <div className="w-full h-full rounded-xl overflow-hidden relative flex flex-col p-[22px] pb-6 shadow-2xl border border-white/5 bg-white transition-all duration-700 ease-out group/cb hover:-translate-y-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #D8D9F2 35%, #A6A9F7 100%)" }}>
                    <div className="absolute inset-0 opacity-0 group-hover/cb:opacity-100 transition-opacity duration-700 bg-linear-to-bl from-[#9CA0F5] to-[#CACBEB]" />
                    <div className="relative w-full h-[200px] mb-4 rounded-lg bg-[#1d1f4c]/10 overflow-hidden shrink-0 z-10 border border-black/5"><img src={card.image} alt="" className="w-full h-full object-cover" /></div>
                    <div className="flex-1 z-10 flex flex-col">
                      <h3 className="text-[#050737] font-bold text-[20px] leading-tight font-sans mb-3 transition-colors relative z-20">
                        <span className="bg-bottom-left bg-no-repeat bg-linear-to-r from-[#050737] to-[#050737] bg-size-[0%_2px] group-hover/cb:bg-size-[100%_2px] transition-[background-size] duration-500 ease-out pb-1">
                          {card.title}
                        </span>
                      </h3>
                      <p className="text-[#050737]/70 text-[15px] leading-[1.4] font-sans line-clamp-3">{card.description}</p>
                      <div className="mt-auto pt-6 flex items-center gap-1.5 cursor-pointer group/link w-fit">
                        <span onClick={() => navigate("/coming-soon")} className="text-[#050737] text-[16px] font-medium relative">
                          Explore
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#050737] group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <img src="/home_section_4/explore_arrow.svg" alt="" className="w-4.5 h-4.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                    <img src="/home_section_4/card_bottom_pattern.svg" alt="" className="absolute bottom-0 right-0 opacity-40 z-0 group-hover/cb:scale-125 transition-transform duration-700" />
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }` }} />
    </section>
  );
};

export default IntelligentSolutions;
