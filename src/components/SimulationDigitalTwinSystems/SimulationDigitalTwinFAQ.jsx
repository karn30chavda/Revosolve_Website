import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What is a Digital Twin?",
    a: "A dynamic digital representation of a physical asset, facility, or operational environment that continuously synchronizes with real-world data to support monitoring, simulation, and decision-making.",
  },
  {
    q: "How is a Digital Twin different from GIS?",
    a: "GIS provides geographic visualization, while a Digital Twin combines GIS with operational data, IoT, AI, simulation, enterprise systems, and predictive analytics to create a living operational model.",
  },
  {
    q: "Can Digital Twins integrate with IoT sensors?",
    a: "Yes. The platform integrates with IoT devices, telemetry systems, SCADA, weather services, enterprise applications, and third-party data sources.",
  },
  {
    q: "Which industries benefit from Digital Twins?",
    a: "Smart Cities, Government, Transportation, Utilities, Manufacturing, Oil & Gas, Defense, Healthcare, and Infrastructure organizations.",
  },
  {
    q: "Can the platform simulate future scenarios?",
    a: "Yes. Organizations can model operational changes, infrastructure expansion, emergency situations, maintenance strategies, and resource planning before implementing them.",
  },
];

const SimulationDigitalTwinFAQ = () => {
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
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [faq]
          </span>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
              Digital Twin Systems,{" "}
            </span>
            <span className="text-[#CACBDB] font-light">
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

export default SimulationDigitalTwinFAQ;
