import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What are Defense Simulation & Training Systems?",
    a: "Systems that use AR, VR, MR, AI, and simulation technologies to create immersive environments where personnel can safely practice operational procedures, emergency response, and mission scenarios.",
  },
  {
    q: "Can training scenarios be customized?",
    a: "Yes. Organizations can design custom scenarios reflecting their equipment, facilities, procedures, and operational objectives.",
  },
  {
    q: "Does the platform support multi-user training?",
    a: "Yes. Multiple trainees and instructors can participate simultaneously in collaborative virtual environments.",
  },
  {
    q: "Can the platform integrate with Learning Management Systems (LMS)?",
    a: "Yes. Training records, assessments, certifications, and performance analytics can integrate with existing LMS and HR systems.",
  },
  {
    q: "Which industries benefit from immersive simulation?",
    a: "Defense, public safety, aviation, maritime, healthcare, manufacturing, utilities, energy, and critical infrastructure organizations.",
  },
];

const DefenseFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section
      id="faq"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start w-full gap-10">
        
        {/* Section Header - Styled exactly like Capabilities / Outcomes */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full"
        >
          {/* Desktop Original Pill */}
          <div className="hidden min-[1290px]:block opacity-30 justify-start mb-4">
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              [
            </span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
              FAQ
            </span>
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              ]
            </span>
          </div>

          {/* Mobile Styled Glassmorphic Solutions Badge */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-4 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block w-fit">
              Simulation & training,
            </span>
            <span className="text-[#CACBDB] font-light block mt-1">
              answered
            </span>
          </h2>
        </Motion.div>

        {/* FAQ List */}
        <div className="w-full flex flex-col border-t border-[#877BF1]/20">
          {faqData.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div
                key={idx}
                className="border-b border-[#877BF1]/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center gap-5 py-6 text-left cursor-pointer bg-transparent border-none group relative z-10 focus:outline-none"
                >
                  <span className="text-white/25 text-[13px] font-medium tracking-widest shrink-0 font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-[16px] lg:text-[18px] font-semibold font-sans leading-snug transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#CACBDB] group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-[18px] font-light transition-all duration-300 ${
                      isOpen
                        ? "border-[#FCCA71] text-[#FCCA71] rotate-45"
                        : "border-[#877BF1]/60 text-[#877BF1] group-hover:border-[#877BF1] group-hover:text-white"
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
                      <p className="text-[#CACBDB] text-[14px] lg:text-[15px] font-normal leading-relaxed pb-7 pl-9 lg:pl-10 max-w-[800px] opacity-80">
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

export default DefenseFAQ;
