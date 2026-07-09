import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What is RevoDox?",
    a: "RevoDox is an AI-powered Intelligent Document Processing platform that combines OCR, document understanding, workflow automation, business rules, and enterprise integrations.",
  },
  {
    q: "Does RevoDox support handwritten documents?",
    a: "Yes. RevoDox supports printed, handwritten, multilingual, and scanned documents.",
  },
  {
    q: "Can RevoDox integrate with ERP systems?",
    a: "Yes. It integrates with ERP, CRM, banking systems, HRMS, DMS, government portals, and custom applications.",
  },
  {
    q: "Can workflows be customized?",
    a: "Yes. RevoDox includes a no-code Journey Builder for creating custom document workflows.",
  },
  {
    q: "Does RevoDox support Human-in-the-Loop validation?",
    a: "Yes. Documents with low AI confidence can be routed for manual review before approval.",
  },
];

const DocFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="relative w-full bg-[#01031c] pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">

        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-4">
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [FAQ]
          </div>

          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black mr-2.5">
              RevoDox,
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin">
              answered
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
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

export default DocFAQ;
