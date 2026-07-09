import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  MagnifyingGlass,
  GearSix,
  GraduationCap,
  RocketLaunch,
  ChartLineUp,
} from "@phosphor-icons/react";

const methodSteps = [
  {
    title: "Assess",
    desc: "Understand document lifecycle, stakeholders, and operational objectives.",
    icon: MagnifyingGlass,
  },
  {
    title: "Configure",
    desc: "Define document types, extraction logic, workflows, business rules, and integrations.",
    icon: GearSix,
  },
  {
    title: "Train",
    desc: "Optimize AI models using organization-specific documents.",
    icon: GraduationCap,
  },
  {
    title: "Deploy",
    desc: "Roll out across departments while ensuring operational continuity.",
    icon: RocketLaunch,
  },
  {
    title: "Optimize",
    desc: "Continuously improve extraction accuracy, workflows, and automation.",
    icon: ChartLineUp,
  },
];

const DocMethod = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % methodSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#01031c] pt-8 pb-10 lg:pt-10 lg:pb-16 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8 font-sans">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [RevoSolve implementation approach]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">From paper trail </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">to production</span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                in five steps
              </span>
            </h2>
          </div>
        </div>

        {/* Method Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {methodSteps.map((step, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActiveStep(idx)}
              className="flex flex-col justify-start items-start gap-4 relative cursor-pointer group"
            >
              {/* Icon + connector line */}
              <div className="w-full flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeStep === idx
                    ? "border-[#FCCA71] bg-[#FCCA71]/10 shadow-[0_0_10px_rgba(252,202,113,0.25)]"
                    : "border-[#877BF1]/40 bg-[#877BF1]/5"
                }`}>
                  {step.icon && (
                    <step.icon
                      size={20}
                      weight="light"
                      className={`transition-colors duration-300 ${
                        activeStep === idx ? "text-[#FCCA71]" : "text-[#877BF1]/60"
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
              <div className="flex flex-col gap-2">
                <div className={`text-[20px] font-semibold font-sans leading-[26px] transition-colors duration-300 ${
                  activeStep === idx ? "text-white" : "text-[#E7E6FC]"
                }`}>
                  {step.title}
                </div>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[22px] pr-2">
                  {step.desc}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocMethod;
