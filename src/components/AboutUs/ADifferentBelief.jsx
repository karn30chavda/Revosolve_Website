import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

export const ADifferentBelief = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax Y scroll offset for giant background watermark text
  const y = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      ref={ref}
      className="relative w-full py-12 md:py-16 font-sans overflow-hidden bg-[#01031c]"
      data-testid="section-different-belief"
    >
      {/* Giant Background Light Watermark Text: OPERATIONS */}
      <Motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.045] pointer-events-none select-none overflow-hidden"
      >
        <span className="font-sans font-black text-[22vw] uppercase tracking-tighter text-white whitespace-nowrap">
          OPERATIONS
        </span>
      </Motion.div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">
        
        {/* Section Tag & Giant Headline */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
            [a different belief]
          </div>

          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              We didn't build another technology company.{" "}
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin">
              We built an Operational Systems Engineering company.
            </span>
          </h2>
        </div>

        {/* 2-Column Lower Grid: Copy + Vertical Line Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column: Problem & Context Paragraphs */}
          <div className="md:col-span-6 flex flex-col gap-6 text-[#CACBDB] text-base md:text-lg font-light leading-relaxed">
            <p>
              The world doesn't need another software vendor. Organizations don't struggle because they lack applications. They struggle because the applications they already own{" "}
              <strong className="font-semibold text-white">don't work together.</strong>
            </p>
            <p>
              Project teams operate independently. Finance works from different data. Operations rely on manual coordination. Leadership receives reports after decisions should have already been made.
            </p>
          </div>

          {/* Right Column: Gradient Line + Italic Belief Quote */}
          <div className="md:col-span-6 relative pl-6 sm:pl-8 flex flex-col gap-4">
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
              style={{
                background: "linear-gradient(180deg, #877BF1, #FCCA71)",
              }}
            />
            <blockquote className="italic font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug">
              &ldquo;Technology should{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-normal">
                reflect
              </span>{" "}
              how an organization works—not force an organization to adapt to technology.&rdquo;
            </blockquote>
            <div className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold mt-2">
              — The RevoSolve Belief
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ADifferentBelief;
