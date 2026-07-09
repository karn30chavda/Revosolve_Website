import React from "react";
import { motion as Motion } from "framer-motion";

const DocApproach = () => {
  return (
    <section 
      id="solutions-approach" 
      className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-12 md:pb-24 px-[5%] lg:px-[7.5%] overflow-hidden z-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full mx-auto flex flex-col items-start relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 font-sans"
        >
          [our approach]
        </Motion.div>

        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left text-[28px] md:text-[40px] leading-tight font-black font-sans tracking-tight w-full max-w-4xl"
        >
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
            From OCR
          </span>
          <br />
          <span className="text-[#CACBDB] font-light">to Document Intelligence</span>
        </Motion.h2>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:h-[460px] bg-linear-to-b from-[#0F1034] to-[#15164B] rounded-[16px] border border-black/40 flex flex-col lg:flex-row justify-between items-center overflow-hidden relative mt-10 pl-0 lg:pl-10 gap-8 lg:gap-0"
        >
          <div className="w-full lg:w-[45%] p-6 lg:p-0 flex flex-col justify-center items-start gap-6 relative z-10 text-left">
            <div className="self-stretch justify-start text-[#E7E6FC] text-base sm:text-[18px] font-medium font-sans leading-relaxed relative z-10">
              RevoSolve builds Document Intelligence Systems that go beyond text extraction enabling validation, decision-making, and workflow automation.
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2.5 relative z-10">
              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Extract structured data from documents (multi language documents extraction)
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Verify and validate information (verification)
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Integrate into operational workflows (workflow diagram)
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Trigger actions based on rules (action button clicked, send for payment)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] h-[280px] sm:h-[360px] lg:h-[460px] relative overflow-hidden shrink-0 z-10">
            <img
              src="/DocumentIntelligenceSystems/approach_image.png"
              alt="OCR to Document Intelligence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#01031c]/10 pointer-events-none" />
          </div>

          <img 
            src="/DocumentIntelligenceSystems/challenge_pattern.svg" 
            alt="" 
            className="absolute left-0 top-[5%] w-[192px] h-[263px] pointer-events-none opacity-30 lg:opacity-50 z-0 select-none mix-blend-screen scale-x-[-1] scale-y-[-1]"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default DocApproach;
