import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is a Public Infrastructure Operations System?",
    a: "An integrated platform managing the complete infrastructure lifecycle — from tender discovery to execution, billing, and executive reporting.",
  },
  {
    q: "How is this different from project management software?",
    a: "It connects tenders, field operations, procurement, finance, and governance into one operational platform, not just schedules and tasks.",
  },
  {
    q: "Can it integrate with Tender247 and Tender Tiger?",
    a: "Yes, through APIs or approved integration methods with major tender and procurement portals.",
  },
  {
    q: "Can project profitability be tracked?",
    a: "Yes, across business units, clients, projects, sites, and work packages in real time.",
  },
  {
    q: "Does it support milestone-based billing?",
    a: "Yes. Verified milestones trigger invoicing, GST-compliant workflows, and payment tracking.",
  },
  {
    q: "Can field engineers update progress from mobile devices?",
    a: "Yes, via dedicated mobile apps for progress, photos, inspections, and attendance.",
  },
  {
    q: "Is Indian accounting and GST supported?",
    a: "Yes — GST workflows, accounting integrations, and audit-ready financial reporting.",
  },
  {
    q: "Can it manage multiple projects simultaneously?",
    a: "Yes, designed for organizations managing multiple projects, clients, and business units.",
  },
  {
    q: "Is it suitable for government departments?",
    a: "Yes, engineered for transparency, compliance, and operational visibility required by public agencies.",
  },
];

const InfraFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section
      id="faq"
      className="relative w-full py-12 md:py-16 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-310 mx-auto relative z-10 flex flex-col items-start w-full gap-10">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full"
        >
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [faq]
          </span>
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
              Public infrastructure operations,{" "}
            </span>
            <span className="text-[#CACBDB] font-light">answered</span>
          </h2>
        </Motion.div>

        {/* FAQ List */}
        <div className="w-full flex flex-col border-t border-[#877BF1]/20">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div
                key={item.q}
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
                      isOpen
                        ? "text-white"
                        : "text-[#CACBDB] group-hover:text-white"
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
                      <p className="text-[#CACBDB] text-[14px] lg:text-[15px] font-normal leading-relaxed pb-7 pl-9 lg:pl-10 max-w-3xl opacity-80 m-0">
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

export default InfraFAQ;
