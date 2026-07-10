import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  MagnifyingGlass,
  CompassTool,
  Code,
  GitMerge,
  ChartLineUp,
} from "@phosphor-icons/react";

const methodSteps = [
  {
    title: "Discover",
    desc: "Understand business models, users, operational workflows, and long-term product vision.",
    highlight: "We engineer around your business model — not just a feature list.",
    icon: MagnifyingGlass,
  },
  {
    title: "Architect",
    desc: "Design platform architecture optimized for scalability, security, maintainability, and future expansion.",
    highlight: "",
    icon: CompassTool,
  },
  {
    title: "Engineer",
    desc: "Develop using modern engineering principles with clean architecture, automation, and quality embedded throughout.",
    highlight: "",
    icon: Code,
  },
  {
    title: "Integrate",
    desc: "Connect platforms with payment gateways, ERP, CRM, identity providers, AI services, and third-party ecosystems.",
    highlight: "Platforms are only as strong as what they connect to.",
    icon: GitMerge,
  },
  {
    title: "Operate & Evolve",
    desc: "Continuously optimize performance, introduce new capabilities, and support evolving business requirements.",
    highlight: "Technology should evolve alongside your business.",
    icon: ChartLineUp,
  },
];

const ProductPlatformMethod = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % methodSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="method" className="relative w-full bg-transparent pt-4 pb-8 lg:pt-8 lg:pb-12 overflow-hidden z-20 scroll-mt-20">
      
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit font-sans">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [The RevoSolve Engineering Method]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">From product vision </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                  to living platform
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1 font-sans">
            <p className="text-[#CACBDB] text-sm md:text-base font-normal leading-relaxed opacity-70 text-left">
              Five stages, one continuous loop — discovery, architecture, engineering, integration, and evolution.
            </p>
          </div>
        </div>

        {/* Method Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {methodSteps.map((step, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col justify-start items-start gap-4 relative cursor-pointer group"
            >
              {/* Step number + connector line */}
              <div className="w-full flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    activeStep === idx
                      ? "border-[#FCCA71] bg-[#FCCA71]/10 shadow-[0_0_10px_rgba(252,202,113,0.25)]"
                      : "border-[#877BF1]/40 bg-[#877BF1]/5"
                  }`}
                >
                  {step.icon && (
                    <step.icon
                      size={20}
                      weight="light"
                      className={`transition-colors duration-300 ${
                        activeStep === idx
                          ? "text-[#FCCA71]"
                          : "text-[#877BF1]/60"
                      }`}
                    />
                  )}
                </div>
                {idx < methodSteps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-[#877BF1]/20 relative overflow-hidden">
                    {activeStep === idx && (
                      <Motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{
                          duration: 3,
                          ease: "linear",
                        }}
                        className="absolute top-0 bottom-0 w-[50%] bg-linear-to-r from-transparent via-[#FCCA71]/80 to-transparent"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 text-left">
                <div className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[26px]">
                  {step.title}
                </div>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[22px] pr-2">
                  {step.desc}
                </p>
                {step.highlight && (
                  <div className="mt-2 pl-3 border-l border-[#877BF1] text-[#A9A0F5] text-[12.5px] font-medium leading-relaxed italic opacity-95">
                    {step.highlight}
                  </div>
                )}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPlatformMethod;
