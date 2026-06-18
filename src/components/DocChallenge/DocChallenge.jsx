import React from "react";
import { motion as Motion } from "framer-motion";

const DocChallenge = () => {
  return (
    <section 
      id="solutions-content" 
      className="relative w-full bg-[#01031c] py-16 md:py-24 px-[5%] lg:px-[7.5%] overflow-hidden z-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full mx-auto flex flex-col items-start relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 font-sans"
        >
          [the challenge]
        </Motion.div>

        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left text-[28px] sm:text-3xl md:text-[42px] leading-tight font-black font-sans tracking-tight w-full max-w-4xl"
        >
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
            Documents Are Still the Bottleneck
          </span>
          <br className="hidden sm:inline" />
          <span className="text-[#CACBDB] font-light"> in Institutional Workflows</span>
        </Motion.h2>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:h-[460px] bg-linear-to-b from-[#0F1034] to-[#15164B] rounded-[16px] border border-black/40 flex flex-col lg:flex-row justify-between items-center overflow-hidden relative mt-10 pr-0 lg:pr-10 gap-8 lg:gap-0"
        >
          <div className="w-full lg:w-[50%] h-[280px] sm:h-[360px] lg:h-[460px] relative overflow-hidden shrink-0 z-10">
            <img
              src="/soulution_doc_intelligence_system/docChallengeImg.png"
              alt="Hands sorting a stack of documents"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#01031c]/10 pointer-events-none" />
          </div>

          <div className="w-full lg:w-[45%] p-6 lg:p-0 flex flex-col justify-center items-start gap-6 relative z-10 text-left">
            <div className="self-stretch justify-start text-[#E7E6FC] text-base sm:text-[18px] font-medium font-sans leading-relaxed relative z-10">
              Across banking, government, and enterprise systems critical operations still depend on manual document handling.
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2.5 relative z-10">
              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Data entry is slow and error-prone (manual entry, +mistakes)
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Verification requires human effort
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Workflows break due to unstructured inputs
                </span>
              </div>

              <div className="flex items-center gap-3 relative text-left">
                <svg className="w-[18px] h-[18px] text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#CACBDB] text-xs sm:text-[15px] font-normal font-sans">
                  Scaling document processing is difficult
                </span>
              </div>
            </div>

            <div className="self-stretch bg-[#050737] rounded-lg border border-l-4 border-[#20ceff] p-4 flex flex-col justify-center items-start relative z-10">
              <div className="self-stretch justify-start text-[#cacbdb] text-xs sm:text-[15px] font-normal font-sans leading-relaxed">
                Institutions don&apos;t need OCR tools.
                They need systems that can understand and process documents end-to-end.
              </div>
            </div>

          </div>
          <img 
            src="/soulution_doc_intelligence_system/docChallengepattern.svg" 
            alt="" 
            className="absolute right-0 top-[5%] w-[192px] h-[263px] pointer-events-none opacity-30 lg:opacity-50 z-0 select-none mix-blend-screen"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default DocChallenge;
