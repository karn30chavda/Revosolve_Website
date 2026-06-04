import React, { useState, useRef } from "react";
import { motion as Motion, useScroll, useMotionValueEvent } from "framer-motion";

const CommerceClarity = () => {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const clarityItems = [
    "Single source of truth for all orders",
    "Real-time inventory synchronization",
    "Seamless fulfillment and delivery tracking",
    "Automated customer communication",
    "Centralized dashboards for decision-makers"
  ];

  const clarityImages = [
    "/Solution_page/operational_clarity_img.webp",
    "/Solution_page/operational_clarity_img_2.webp",
    "/Solution_page/operational_clarity_img_3.webp",
    "/Solution_page/operational_clarity_img_4.webp",
    "/Solution_page/operational_clarity_img_5.webp"
  ];

  // Desktop Scroll Tracking (5 stages)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * 5), 4);
    setActiveIdx(idx);
  });

  // Smooth scroll handler for desktop clicks
  const handleTabClick = (idx) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Map click index to scroll position
    const sectionHeight = element.offsetHeight / 5;
    const targetY = scrollTop + rect.top + (idx * sectionHeight) + 50;
    
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Desktop Sticky Scroll Section */}
      <section 
        ref={containerRef} 
        className="relative w-full bg-[#01031c] h-[300vh] hidden lg:block"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10">
          <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start pt-14">
            
            {/* Section Tag */}
            <div className="text-white text-xs uppercase tracking-wider opacity-30 mb-2">
              [what it enables]
            </div>

            {/* Heading Block */}
            <div className="w-full flex flex-col items-start justify-start mt-1 pb-1">
              <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] font-sans">
                Operational Clarity
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal font-sans mt-1">
                and Control
              </h3>
            </div>

            {/* Interactive Card (Swapped: Image Left, List Right) */}
            <div 
              style={{ background: "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)" }}
              className="w-full mt-6 p-6 border border-black rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden relative z-10"
            >
              
              {/* Left Column: Visual Diagram Frame */}
              <div className="w-full lg:w-[700px] h-[360px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative z-10 shrink-0">
                <Motion.img 
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={clarityImages[activeIdx]} 
                  alt="Operational Clarity Graphic" 
                  className="w-full h-full object-fill"
                  onError={(e) => {
                    e.target.src = "/Solution_page/operational_clarity_img.webp";
                  }}
                />
              </div>

              {/* Right Column: Interactive Systems List */}
              <div className="flex-1 w-full flex flex-col justify-center items-start gap-10 self-stretch py-1 relative z-10">
                <div className="self-stretch text-white text-[18px] font-normal font-sans leading-[24px] mt-4">
                  This system brings everything into one place
                </div>

                <div className="w-full flex flex-col gap-3">
                  {clarityItems.map((item, idx) => {
                    const isActive = idx === activeIdx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        className={`w-full rounded-[4px] flex items-center gap-[12px] py-[4px] px-[10px] self-stretch cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? "bg-[#26274A] opacity-100" 
                            : "bg-transparent opacity-50 hover:opacity-85"
                        }`}
                      >
                        {/* Checkmark Circle */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive 
                            ? "border border-[#FCCA71] bg-[#FCCA71]/5 shadow-[0_0_6px_rgba(252,202,113,0.2)]" 
                            : "border border-[#877BF1] bg-transparent"
                        }`}>
                          <img 
                            src="/Solution_page/solution_problem_tick.svg" 
                            alt="Tick" 
                            className={`w-3.5 h-3.5 transition-all duration-300 ${
                              isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                            }`} 
                          />
                        </div>

                        {/* Text */}
                        <span className="text-white text-[16px] font-normal font-sans leading-[24px]">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mobile / Tablet Interactive View (Click to swap tabs) */}
      <section className="relative w-full bg-[#01031c] py-12 lg:hidden">
        <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
          
          <div className="w-full flex flex-col items-start justify-start border-b border-white/5 pb-4">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [what it enables]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start mt-1">
              <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-3xl md:text-4xl font-black leading-tight tracking-[0.264px]">
                Operational Clarity
              </h2>
              <h3 className="text-[#CACBDB] text-2xl md:text-[34px] font-light leading-normal mt-1">
                and Control
              </h3>
            </div>
          </div>

          {/* Interactive Card (Mobile) */}
          <div 
            style={{ background: "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)" }}
            className="w-full p-5 border border-black rounded-2xl flex flex-col gap-8 overflow-hidden relative"
          >
            
            {/* Visual Diagram Frame */}
            <div className="w-full h-[280px] md:h-[340px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative shrink-0">
              <Motion.img 
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={clarityImages[activeIdx]} 
                alt="Operational Clarity Graphic" 
                className="w-full h-full object-fill"
                onError={(e) => {
                  e.target.src = "/Solution_page/operational_clarity_img.webp";
                }}
              />
            </div>

            {/* System list */}
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <div className="text-white text-[18px] font-normal font-sans leading-[26px]">
                This system brings everything into one place
              </div>

              <div className="w-full flex flex-col gap-2">
                {clarityItems.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full rounded-[4px] flex items-start gap-[16px] py-[8px] px-[12px] cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "bg-[#26274A] opacity-100" 
                          : "bg-transparent opacity-50"
                      }`}
                    >
                      {/* Checkmark Circle */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-[2px] transition-all duration-300 ${
                        isActive 
                          ? "border-2 border-[#FCCA71] bg-[#FCCA71]/5 shadow-[0_0_8px_rgba(252,202,113,0.2)]" 
                          : "border-2 border-[#877BF1] bg-transparent"
                      }`}>
                        <img 
                          src="/Solution_page/solution_problem_tick.svg" 
                          alt="Tick" 
                          className={`w-4 h-4 transition-all duration-300 ${
                            isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                          }`} 
                        />
                      </div>

                      {/* Text */}
                      <span className="text-white text-[16px] md:text-[18px] font-normal font-sans leading-[26px]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> 

        </div>
      </section>
    </>
  );
};

export default CommerceClarity;
