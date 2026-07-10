import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  MagnifyingGlass,
  MapTrifold,
  Code,
  AirplaneTakeoff,
  ChartLineUp,
} from "@phosphor-icons/react";

const methodSteps = [
  {
    title: "Discover",
    desc: "Assess existing applications, infrastructure, architecture, technical debt, dependencies, and operational workflows.",
    a: "We don't begin with technology. We begin with understanding how your systems — and your organization — actually work.",
    icon: MagnifyingGlass,
  },
  {
    title: "Strategize",
    desc: "Define modernization priorities, migration roadmap, architecture strategy, and business continuity plan.",
    a: "",
    icon: MapTrifold,
  },
  {
    title: "Modernize",
    desc: "Refactor applications, redesign architecture, optimize performance, and improve security.",
    a: "",
    icon: Code,
  },
  {
    title: "Migrate",
    desc: "Transition applications, databases, and workloads to modern platforms using controlled deployment strategies.",
    a: "Business continuity is non-negotiable at every step of the migration.",
    icon: AirplaneTakeoff,
  },
  {
    title: "Optimize & Evolve",
    desc: "Continuously enhance architecture, scalability, monitoring, and operational efficiency to support future growth.",
    a: "",
    icon: ChartLineUp,
  },
];

const LegacyMethod = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % methodSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-12 pb-8 lg:pt-20 lg:pb-12 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start w-full gap-4 pb-6">
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px]">
            [the revosolve engineering method]
          </span>
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              Modernization without
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              business disruption
            </span>
          </h2>
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
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-[50%] bg-linear-to-r from-transparent via-[#FCCA71]/80 to-transparent"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <div className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[26px]">
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

export default LegacyMethod;
