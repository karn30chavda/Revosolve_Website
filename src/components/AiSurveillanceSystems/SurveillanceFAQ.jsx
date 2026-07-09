import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What is RevoVision?",
    a: "RevoVision is an AI-powered operational intelligence platform that analyzes live video streams to detect events, generate alerts, and improve situational awareness.",
  },
  {
    q: "Can RevoVision work with existing CCTV cameras?",
    a: "Yes. It is designed to integrate with most ONVIF-compatible IP camera systems and existing video infrastructure.",
  },
  {
    q: "Does the platform support edge deployment?",
    a: "Yes. RevoVision can be deployed on edge devices, on-premises servers, hybrid environments, or cloud infrastructure depending on operational requirements.",
  },
  {
    q: "Can custom detection scenarios be configured?",
    a: "Yes. Organizations can configure custom operational rules, event definitions, alert thresholds, and workflows tailored to their environment.",
  },
  {
    q: "Does RevoVision integrate with enterprise systems?",
    a: "Yes. The platform integrates with ERP, HRMS, access control, IoT devices, GIS, Digital Twin platforms, incident management systems, and other enterprise applications.",
  },
];

const SurveillanceFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="relative w-full bg-[#01031c] pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-4">
          {/* Section Tag */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [FAQ]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              RevoVision,
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              answered
            </span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {faqData.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div key={idx} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center gap-5 py-6 text-left cursor-pointer bg-transparent border-none group"
                >
                  <span className="text-white/25 text-[13px] font-medium font-sans tracking-widest shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-[17px] lg:text-[19px] font-semibold font-sans leading-snug transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#CACBDB] group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-[18px] font-light transition-all duration-300 ${
                      isOpen
                        ? "border-[#FCCA71] text-[#FCCA71] rotate-45"
                        : "border-[#877BF1]/60 text-[#877BF1]"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#AAA9BE] text-[15px] lg:text-[16px] font-normal font-sans leading-relaxed pb-7 pl-9 lg:pl-10 max-w-[760px]">
                        {item.a}
                      </p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SurveillanceFAQ;
