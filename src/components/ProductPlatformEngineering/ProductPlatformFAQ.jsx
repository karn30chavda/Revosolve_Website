import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  { 
    q: "What is product & platform engineering?", 
    a: "Designing, building, and evolving digital products and platforms engineered to scale with your business over their entire lifecycle." 
  },
  { 
    q: "How is a platform different from an application?", 
    a: "A platform is architected as a scalable foundation — multi-tenant, integration-ready, and built to support many products, teams, and future capabilities." 
  },
  { 
    q: "Can you modernize our existing product?", 
    a: "Yes. We re-engineer legacy products onto modern cloud-native architectures without disrupting business continuity." 
  },
  { 
    q: "Do you build multi-tenant SaaS platforms?", 
    a: "Yes. We design multi-tenant architectures for SaaS businesses serving multiple customers from a unified, secure platform." 
  },
  { 
    q: "How do you ensure platforms scale?", 
    a: "Architecture-first engineering, clean code, automation, and embedded quality — designed for growing users, data, and transactions." 
  },
  { 
    q: "What happens after launch?", 
    a: "We continuously optimize performance, introduce new capabilities, and evolve the platform as your business requirements change." 
  },
];

const ProductPlatformFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden z-20 scroll-mt-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start text-left">
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [faq]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight font-sans">
              <span className="font-black block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                  Product & platform engineering,
                </span>{" "}
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  answered
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col border-t border-white/10 mt-4">
          {faqData.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div key={idx} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center gap-5 py-6 text-left cursor-pointer bg-transparent border-none group outline-hidden"
                >
                  <span className="text-white/25 text-[13px] font-medium font-sans tracking-widest shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-[16px] lg:text-[18.5px] font-semibold font-sans leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#FCCA71]" : "text-[#CACBDB] group-hover:text-white"
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
                      <p className="text-[#AAA9BE] text-[14px] lg:text-[15px] font-normal font-sans leading-relaxed pb-7 pl-9 lg:pl-10 max-w-[760px] text-left">
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

export default ProductPlatformFAQ;
