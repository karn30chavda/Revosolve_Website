import React, { useState, useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const CommerceProblems = () => {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const problemItems = [
    "Inventory mismatches across channels",
    "Disconnected logistics and delivery tracking",
    "Separate tools for communication and reporting",
    "No unified view of business performance",
  ];

  const problemImages = [
    "/Solution_page/solution_problem_img_1.svg",
    "/Solution_page/solution_problem_img_2.svg",
    "/Solution_page/solution_problem_img_3.svg",
    "/Solution_page/solution_problem_img_4.svg",
  ];

  // Desktop Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50px", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) into 4 active indexes (0, 1, 2, 3)
    const idx = Math.min(Math.floor(latest * 4), 3);
    setActiveIdx(idx);
  });

  // Handle click on tab to scroll to the corresponding section height
  const handleTabClick = (idx) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = scrollTop + rect.top;

    // Calculate the total scrollable height of the sticky container
    const scrollableRange = element.offsetHeight - window.innerHeight + 50;

    // Position the scroll exactly in the middle of the target section's scroll range
    const targetProgress = (idx + 0.5) / 4;
    const targetY =
      (containerTop - 50) + targetProgress * Math.max(0, scrollableRange);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Sticky Scroll Section */}
      <section
        ref={containerRef}
        className="relative w-full bg-[#01031c] h-[280vh] hidden lg:block"
      >
        <div className="sticky top-[50px] h-[calc(100vh-50px)] w-full flex flex-col justify-start overflow-hidden z-10">
          <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start pt-16">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [the problem]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px]">
                Commerce Operations
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal">
                Break as You Scale
              </h3>
            </div>

            {/* Interactive Card */}
            <div
              style={{
                background:
                  "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
              }}
              className="w-full mt-6 p-6 border border-black rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden relative z-10"
            >
              {/* Left Column: Infographic Illustration with fade transition */}
              <div className="w-full lg:w-[540px] h-[350px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative z-10 shrink-0">
                {problemImages.map((src, idx) => (
                  <Motion.img
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{
                      opacity: idx === activeIdx ? 1 : 0,
                      scale: idx === activeIdx ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    src={src}
                    alt="Commerce Operations Infographic"
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      e.target.src =
                        "/Solution_page/solution_problem_img_1.svg";
                    }}
                  />
                ))}
              </div>

              {/* Right Column: Problem list */}
              <div className="flex-1 w-full flex flex-col justify-start items-start gap-10 self-stretch py-1 relative z-10">
                <div className="self-stretch text-white text-[18px] font-normal font-sans leading-[24px]">
                  What starts as a few tools quickly becomes operational
                  complexity
                </div>

                <div className="w-full flex flex-col gap-[18px]">
                  {problemItems.map((item, idx) => {
                    const isActive = idx === activeIdx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        className={`w-full rounded-[8px] flex items-center gap-[16px] py-[12px] px-[16px] self-stretch cursor-pointer transition-all duration-300 ${
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
                        <span className="text-white text-[15px] xl:text-[17px] font-normal font-sans leading-[24px] xl:leading-[26px]">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Right Decorative Pattern */}
              <img
                src="/Solution_page/solution_problem_bg_pattern.webp"
                alt=""
                className="absolute bottom-0 right-0 pointer-events-none z-0 mix-blend-screen opacity-40 select-none w-auto h-auto max-h-[70%] lg:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Card Section (Desktop) */}
      <section className="w-full bg-[#01031c] pt-4 pb-8 hidden lg:block lg:-mt-[calc(100vh-720px)]">
        <div className="relative z-30 w-[85%] mx-auto">
          <div
            style={{
              background:
                "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
            }}
            className="w-full pl-12 pr-8 py-10 border border-black rounded-2xl flex flex-col md:flex-row items-start justify-between gap-10 md:gap-14 overflow-hidden relative z-10"
          >
            {/* Left Column: Text Statement */}
            <div className="text-[#CACBDB] font-sans text-[24px] font-thin leading-normal w-[368px] relative z-10 text-left pt-2">
              Commerce doesn’t break at the frontend, It breaks in operations.
            </div>

            {/* Right Column: Statement Details */}
            <div className="flex-1 w-full md:max-w-[608px] flex flex-col justify-start items-start gap-5 relative z-10">
              <div className="flex flex-col justify-start items-start gap-3 w-full">
                <div className="justify-center text-[#E7E6FC] text-lg md:text-[20px] font-extrabold font-sans leading-[32.5px] text-left">
                  As teams and brands grow
                </div>
                <ul className="list-disc list-inside text-[#E7E6FC] text-base md:text-[20px] font-normal font-sans leading-[32.5px] flex flex-col gap-1 text-left ml-1">
                  <li>Founders lose visibility</li>
                  <li>Ecom heads struggle with coordination</li>
                  <li>Supply chain teams operate in silos</li>
                </ul>
              </div>

              {/* Golden Gradient Line */}
              <div className="self-stretch h-px bg-linear-to-r from-amber-500 to-transparent my-1" />

              <div className="self-stretch opacity-40 justify-start text-white text-base md:text-[18px] font-normal font-sans leading-normal text-left">
                Most businesses aren’t lacking tools. <br />
                They’re overloaded with them.
              </div>
            </div>

            {/* Bottom Left Decorative Pattern 2 */}
            <img
              src="/Solution_page/solution_problem_bg_pattern_2.webp"
              alt=""
              className="absolute bottom-0 left-0 pointer-events-none z-0 mix-blend-screen opacity-40 select-none w-auto h-auto max-h-[70%] lg:max-h-full"
            />
          </div>
        </div>
      </section>

      {/* Mobile / Tablet Interactive View (Click to swap tabs + Card 2 stack) */}
      <section className="relative w-full bg-[#01031c] py-8 lg:hidden">
        <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
          <div className="w-full flex flex-col items-start justify-start">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [the problem]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start mt-1">
              <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-3xl md:text-4xl font-black leading-tight tracking-[0.264px]">
                Commerce Operations
              </h2>
              <h3 className="text-[#CACBDB] text-2xl md:text-[34px] font-light leading-normal">
                Break as You Scale
              </h3>
            </div>
          </div>

          {/* Card 1 (Interactive Checklist) */}
          <div
            style={{
              background:
                "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
            }}
            className="w-full p-5 border border-black rounded-2xl flex flex-col gap-8 overflow-hidden relative"
          >
            {/* Infographic Illustration */}
            <div className="w-full h-[240px] md:h-[340px] bg-transparent rounded-2xl overflow-hidden flex items-center justify-center relative shrink-0">
              {problemImages.map((src, idx) => (
                <Motion.img
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === activeIdx ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  src={src}
                  alt="Commerce Operations Infographic"
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    e.target.src = "/Solution_page/solution_problem_img_1.svg";
                  }}
                />
              ))}
            </div>

            {/* Problem list */}
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <div className="text-white text-[18px] font-normal font-sans leading-[26px]">
                What starts as a few tools quickly becomes operational
                complexity
              </div>

              <div className="w-full flex flex-col gap-3">
                {problemItems.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full rounded-[8px] flex items-center gap-[16px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "bg-[#26274A] opacity-100"
                          : "bg-transparent opacity-50"
                      }`}
                    >
                      {/* Checkmark Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "border-2 border-[#FCCA71] bg-[#FCCA71]/5 shadow-[0_0_8px_rgba(252,202,113,0.2)]"
                            : "border-2 border-[#877BF1] bg-transparent"
                        }`}
                      >
                        <img
                          src="/Solution_page/solution_problem_tick.svg"
                          alt="Tick"
                          className={`w-4 h-4 transition-all duration-300 ${
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

            {/* Bottom Right Decorative Pattern */}
            <img
              src="/Solution_page/solution_problem_bg_pattern.webp"
              alt=""
              className="absolute bottom-0 right-0 pointer-events-none z-0 mix-blend-screen opacity-30 select-none w-[120px] h-auto"
            />
          </div>

          {/* Card 2 (Statement details block) */}
          <div
            style={{
              background:
                "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
            }}
            className="w-full mt-4 p-5 border border-black rounded-2xl flex flex-col gap-6 overflow-hidden relative"
          >
            {/* Statement Text */}
            <div className="text-[#CACBDB] font-sans text-[24px] font-thin leading-normal text-left relative z-10">
              Commerce doesn’t break at the frontend, It breaks in operations.
            </div>

            {/* Statement Details */}
            <div className="w-full flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-2 w-full">
                <div className="text-[#E7E6FC] text-base md:text-lg font-extrabold font-sans leading-relaxed text-left">
                  As teams and brands grow
                </div>
                <ul className="list-disc list-inside text-[#E7E6FC] text-base md:text-lg font-normal font-sans leading-relaxed flex flex-col gap-1 text-left ml-1">
                  <li>Founders lose visibility</li>
                  <li>Ecom heads struggle with coordination</li>
                  <li>Supply chain teams operate in silos</li>
                </ul>
              </div>

              {/* Golden Gradient Line */}
              <div className="self-stretch h-px bg-linear-to-r from-amber-500 to-transparent my-1" />

              <div className="opacity-60 text-white text-sm md:text-base font-normal font-sans leading-relaxed text-left">
                Most businesses aren’t lacking tools. <br />
                They’re overloaded with them.
              </div>
            </div>

            {/* Bottom Left Decorative Pattern 2 */}
            <img
              src="/Solution_page/solution_problem_bg_pattern_2.webp"
              alt=""
              className="absolute bottom-0 left-0 pointer-events-none z-0 mix-blend-screen opacity-30 select-none w-[100px] h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommerceProblems;
