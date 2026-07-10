import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  { q: "What is Quality Engineering?", a: "A structured approach to embedding quality throughout the software development lifecycle using automation, governance, performance engineering, and continuous testing." },
  { q: "What is Test Automation?", a: "Using software tools and frameworks to execute test cases automatically, improving speed, consistency, and software quality." },
  { q: "Why is Continuous Testing important?", a: "It enables organizations to identify issues early, reduce release risk, and accelerate software delivery." },
  { q: "Do you provide API and Performance Testing?", a: "Yes. Functional, API, integration, load, stress, scalability, and performance testing for enterprise systems." },
  { q: "Can you integrate testing into DevOps pipelines?", a: "Yes. We integrate automated testing into CI/CD workflows to support continuous delivery and release automation." },
  { q: "Which automation frameworks do you support?", a: "Selenium, Playwright, Cypress, Appium, REST Assured, JMeter, LoadRunner, and other enterprise-grade frameworks." },
];

const QAFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          {/* Eyebrow */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [faq]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
              Quality Engineering,
            </span>{" "}
            <span className="text-[#CACBDB] font-light xl:font-thin inline-block">
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
                      <p className="text-[#AAA9BE] text-sm md:text-base font-normal font-sans leading-relaxed pb-7 pl-9 lg:pl-10 max-w-[760px] opacity-90 text-left">
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

export default QAFAQ;
