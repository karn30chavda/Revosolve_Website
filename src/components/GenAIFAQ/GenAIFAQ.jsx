import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What are Generative AI Systems?",
    a: "Systems that use large language models and machine learning to automate tasks, generate content, support decision-making, and enhance business operations.",
  },
  {
    q: "What is an AI Agent?",
    a: "An intelligent software system capable of understanding context, performing tasks, interacting with users, and integrating with enterprise workflows.",
  },
  {
    q: "What is Retrieval-Augmented Generation (RAG)?",
    a: "RAG combines enterprise knowledge with large language models to generate accurate, context-aware responses using organizational data.",
  },
  {
    q: "Can AI integrate with ERP, CRM, and enterprise applications?",
    a: "Yes. AI can integrate with ERP, CRM, HRMS, banking platforms, document management systems, and other applications through APIs and workflow automation.",
  },
  {
    q: "Which AI models do you support?",
    a: "OpenAI GPT, Anthropic Claude, Google Gemini, Meta Llama, Mistral, and other enterprise-grade language models.",
  },
  {
    q: "How do you ensure AI security?",
    a: "Governance, access controls, secure architecture, data privacy, auditability, and monitoring ensure enterprise-grade AI deployments.",
  },
];

const GenAIFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [faq]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Enterprise AI
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin">
                Answered
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

export default GenAIFAQ;
