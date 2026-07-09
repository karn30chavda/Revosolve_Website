import React, { useState, useRef, useEffect } from "react";
import {
  motion as Motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const systemItems = [
  "Orders across all channels",
  "Inventory across warehouses and marketplaces",
  "Fulfillment and delivery workflows",
  "Financial tracking and compliance",
  "Customer communication systems",
  "OCR for Quickcommerce",
];

const systemImages = [
  "/Solution_page/solution_positining_image_1.svg",
  "/Solution_page/solution_positining_image_2.svg",
  "/Solution_page/solution_positining_image_3.svg",
  "/Solution_page/solution_positining_image_4.svg",
  "/Solution_page/solution_positining_image_5.svg",
  "/Solution_page/solution_positining_image_6.svg",
];

const CommerceSystem = () => {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [tabKey, setTabKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        setActiveIdx((prev) => {
          const next = (prev + 1) % systemItems.length;
          setTabKey((k) => k + 1);
          return next;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Desktop Scroll Tracking (6 stages)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50px", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * 6), 5);
    if (idx !== activeIdx) {
      setActiveIdx(idx);
      setTabKey((prev) => prev + 1);
    }
  });

  // Helper: get cache-busted src for animated SVGs
  const getSrc = (src) => (src.endsWith(".svg") ? `${src}?v=${tabKey}` : src);

  // Smooth scroll handler for desktop clicks
  const handleTabClick = (idx) => {
    if (!containerRef.current) return;
    setTabKey((prev) => prev + 1);
    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = scrollTop + rect.top;

    // Scrollable distance = total height minus one viewport (sticky content)
    const scrollableHeight = element.offsetHeight - window.innerHeight + 50;
    const sectionScrollHeight = scrollableHeight / 6;

    // Land 30% into the section to reliably trigger the correct active index
    const targetY =
      (elementTop - 50) + idx * sectionScrollHeight + sectionScrollHeight * 0.3;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        @keyframes progressRing {
          from {
            stroke-dashoffset: 62.83;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      {/* Desktop Sticky Scroll Section */}
      <section
        ref={containerRef}
        className="relative w-full bg-[#01031c] h-[340vh] hidden lg:block"
      >
        <div className="sticky top-[50px] h-[calc(100vh-50px)] w-full flex flex-col justify-start overflow-hidden z-10">
          <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start pt-16">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [system positioning]
            </div>

            {/* Heading Block: Left Title and Right Description Row */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-start lg:gap-20 mt-1 pb-1">
              <div className="flex flex-col items-start justify-start">
                <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px]">
                  A Unified Commerce
                </h2>
                <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal">
                  Operations System
                </h3>
              </div>
              <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-[450px] text-left opacity-75 lg:mb-1">
                RevoSolve builds Commerce Operations Systems that act as the
                central command layer for managing multi-brand, multi-channel
                operations.
              </p>
            </div>

            {/* Interactive Card */}
            <div
              style={{
                background:
                  "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
              }}
              className="w-full mt-6 p-6 border border-black rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden relative z-10"
            >
              {/* Left Column: Interactive Systems List */}
              <div className="flex-1 w-full flex flex-col justify-start items-start gap-8 self-stretch py-1 relative z-10">
                <div className="self-stretch text-white text-[18px] font-normal font-sans leading-[24px]">
                  This system brings everything into one place
                </div>

                <div className="w-full flex flex-col gap-3">
                  {systemItems.map((item, idx) => {
                    const isActive = idx === activeIdx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        className={`w-full rounded-[8px] flex items-center gap-[12px] py-[4px] px-[10px] self-stretch cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-[#26274A] opacity-100"
                            : "bg-transparent opacity-50 hover:opacity-85"
                        }`}
                      >
                        {/* Checkmark Circle */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? "border border-[#FCCA71] bg-[#FCCA71]/5 shadow-[0_0_6px_rgba(252,202,113,0.2)]"
                              : "border border-[#877BF1] bg-transparent"
                          }`}
                        >
                          <img
                            src="/Solution_page/solution_problem_tick.svg"
                            alt="Tick"
                            className={`w-3.5 h-3.5 transition-all duration-300 ${
                              isActive
                                ? "scale-100 opacity-100"
                                : "scale-90 opacity-40"
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

              {/* Right Column: Visual Diagram Frame */}
              <div className="w-full lg:w-[590px] h-[350px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative z-10 shrink-0">
                <Motion.img
                  key={tabKey}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={getSrc(systemImages[activeIdx])}
                  alt="System Positioning Graphic"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src =
                      "/Solution_page/solution_positining_image_1.svg";
                  }}
                />
              </div>

              {/* Bottom Right Decorative Pattern */}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / Tablet Interactive View (Click to swap tabs) */}
      <section className="relative w-full bg-[#01031c] py-8 lg:hidden">
        <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
          <div className="w-full flex flex-col items-start justify-start border-b border-white/5 pb-4">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [system positioning]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start mt-1 gap-4">
              <div className="flex flex-col items-start justify-start">
                <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-3xl md:text-4xl font-black leading-tight tracking-[0.264px]">
                  A Unified Commerce
                </h2>
                <h3 className="text-[#CACBDB] text-2xl md:text-[34px] font-light leading-normal">
                  Operations System
                </h3>
              </div>
              <p className="text-[#CACBDB] text-sm font-normal font-sans leading-relaxed max-w-full text-left opacity-75">
                RevoSolve builds Commerce Operations Systems that act as the
                central command layer for managing multi-brand, multi-channel
                operations.
              </p>
            </div>
          </div>

          {/* Interactive Card (Mobile) */}
          <div
            style={{
              background:
                "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
            }}
            className="w-full p-5 border border-black rounded-2xl flex flex-col gap-8 overflow-hidden relative"
          >
            {/* Visual Diagram Frame */}
            <div className="w-full h-[280px] md:h-[340px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative shrink-0">
              <Motion.img
                key={tabKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={getSrc(systemImages[activeIdx])}
                alt="System Positioning Graphic"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "/Solution_page/solution_positining_image.webp";
                }}
              />
            </div>

            {/* System list */}
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <div className="text-white text-[18px] font-normal font-sans leading-[26px]">
                This system brings everything into one place
              </div>

              <div className="w-full flex flex-col gap-2">
                {systemItems.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full rounded-[8px] flex items-start gap-[16px] py-[8px] px-[12px] cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "bg-[#26274A] opacity-100"
                          : "bg-transparent opacity-50"
                      }`}
                    >
                      {/* Progress Ring Checkmark Container (Mobile) */}
                      <div className="relative w-8 h-8 flex items-center justify-center shrink-0 mt-[2px]">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 24 24">
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            className="fill-none stroke-[#877BF1]/30"
                            strokeWidth="1.5"
                          />
                          {isActive && (
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              className="fill-[#FCCA71]/5 stroke-[#FCCA71]"
                              strokeWidth="2"
                              strokeDasharray="62.83"
                              style={{
                                animation: "progressRing 4s linear forwards",
                              }}
                            />
                          )}
                        </svg>
                        <img
                          src="/Solution_page/solution_problem_tick.svg"
                          alt="Tick"
                          className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-90 opacity-40"
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

export default CommerceSystem;
