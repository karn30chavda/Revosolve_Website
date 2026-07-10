import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What is Enterprise Application Development?",
    a: "The process of designing, building, integrating, and maintaining software systems that support core business operations across departments, users, and enterprise workflows.",
  },
  {
    q: "When should an organization build a custom enterprise application?",
    a: "When existing software cannot support operational workflows, integration requirements, scalability, or business-specific processes.",
  },
  {
    q: "What is the difference between Business and Enterprise Applications?",
    a: "Business applications typically address a specific business function, while enterprise applications connect multiple departments, workflows, and systems into a unified operational ecosystem.",
  },
  {
    q: "Can RevoSolve modernize existing enterprise applications?",
    a: "Yes. We modernize legacy applications, improve architecture, migrate workloads, enhance performance, and integrate existing systems while minimizing business disruption.",
  },
  {
    q: "Do you integrate with ERP, CRM, HRMS, and third-party platforms?",
    a: "Yes. We design integration architectures that connect enterprise applications with ERP, CRM, HRMS, payment gateways, identity providers, analytics platforms, and external services.",
  },
  {
    q: "Which industries do you serve?",
    a: "Government, financial institutions, infrastructure companies, healthcare, manufacturing, retail, and broader enterprise organizations.",
  },
  {
    q: "How do you ensure enterprise security?",
    a: "Applications are designed with secure architecture, role-based access control, encryption, identity management, audit trails, and enterprise security best practices.",
  },
  {
    q: "Can applications scale as our business grows?",
    a: "Yes. Every system uses scalable architectures that support increasing users, transactions, integrations, and operational complexity.",
  },
  {
    q: "What technologies do you use?",
    a: "Modern enterprise technologies including .NET, Java, Python, Node.js, React, Angular, PostgreSQL, AWS, Azure, Kubernetes, Docker, and API-first architectures.",
  },
  {
    q: "Why choose RevoSolve?",
    a: "Because we don’t simply develop software — we engineer technology systems that align with operational workflows, integrate with enterprise ecosystems, and support long-term growth.",
  },
];

const EnterpriseFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          {/* Eyebrow */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [faq]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              Enterprise Systems
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Answered
            </span>
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

export default EnterpriseFAQ;
