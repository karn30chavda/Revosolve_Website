import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What is Legacy Modernization?",
    a: "The process of upgrading aging software, infrastructure, databases, and architectures to improve scalability, security, performance, and maintainability while preserving business functionality.",
  },
  {
    q: "What is the difference between Modernization and Migration?",
    a: "Migration moves applications to a new environment, such as the cloud, while modernization improves the application's architecture, technology stack, user experience, and operational capabilities.",
  },
  {
    q: "Can legacy applications be modernized without rebuilding everything?",
    a: "Yes. Many systems can be refactored, re-platformed, or incrementally modernized without requiring a complete redevelopment.",
  },
  {
    q: "Do you migrate applications to AWS, Azure, and Google Cloud?",
    a: "Yes. We support structured cloud migration strategies across all major cloud platforms.",
  },
  {
    q: "How do you reduce migration risk?",
    a: "Phased modernization strategies, architecture assessments, dependency analysis, automated testing, rollback planning, and continuous monitoring minimize business disruption.",
  },
  {
    q: "Which applications should be modernized first?",
    a: "Applications that present security risks, operational bottlenecks, high maintenance costs, or limited scalability typically deliver the highest modernization value.",
  },
];

const LegacyFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">

        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [faq]
          </div>
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              Legacy Modernization,
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin"> Answered</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {faqData.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div key={idx} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center gap-5 py-6 text-left cursor-pointer bg-transparent border-none group focus:outline-none"
                >
                  <span className="text-white/25 text-xs md:text-sm font-medium font-sans tracking-widest shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-base md:text-lg font-semibold font-sans leading-snug transition-colors duration-300 ${
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
                      <p className="text-[#AAA9BE] text-sm md:text-base font-normal font-sans leading-relaxed pb-7 pl-9 lg:pl-10 max-w-[760px] opacity-90">
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

export default LegacyFAQ;
