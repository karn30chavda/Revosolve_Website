import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "Why choose ERPNext over traditional ERP solutions?",
    a: "ERPNext provides enterprise-grade capabilities with greater flexibility, lower licensing costs, and complete customization while letting you retain ownership of your platform.",
  },
  {
    q: "Can ERPNext be customized?",
    a: "Yes. ERPNext is built on the Frappe Framework, enabling extensive customization, workflow automation, integrations, and module development.",
  },
  {
    q: "Do you migrate data from existing ERP systems?",
    a: "Yes. We migrate from legacy ERP platforms, accounting systems, spreadsheets, and custom applications while preserving business continuity.",
  },
  {
    q: "Can ERPNext integrate with external systems?",
    a: "Yes. We integrate ERPNext with CRM platforms, banking APIs, GST Portal, payment gateways, HR systems, logistics, eCommerce, and custom applications.",
  },
  {
    q: "Which industries benefit from enterprise operating systems?",
    a: "Government, infrastructure, manufacturing, BFSI, healthcare, retail, commerce, and professional services organizations.",
  },
];

const EntFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30 text-left">
            [faq]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3 text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Open-source ERP,
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin">
                answered
              </span>
            </h2>
          </div>
        </div>

        {/* FAQ List */}
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

export default EntFAQ;
