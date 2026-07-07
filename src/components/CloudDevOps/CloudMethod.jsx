import React from "react";
import { motion as Motion } from "framer-motion";

const methodSteps = [
  {
    title: "Discover",
    desc: "Assess existing infrastructure, workloads, business objectives, and operational challenges.",
  },
  {
    title: "Architect",
    desc: "Design cloud-native architectures optimized for scalability, security, and resilience.",
  },
  {
    title: "Engineer",
    desc: "Implement cloud infrastructure, automation, and DevOps practices using modern engineering standards.",
  },
  {
    title: "Integrate",
    desc: "Connect infrastructure with enterprise applications, monitoring systems, identity platforms, and security frameworks.",
  },
  {
    title: "Operate & Optimize",
    desc: "Continuously monitor, optimize, secure, and evolve cloud environments to support business growth.",
  },
];

const CloudMethod = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-8 lg:pt-20 lg:pb-12 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [the method]
            </span>

            {/* Heading Block */}
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
                Cloud Engineering
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                Designed Around Reliability
              </span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              A feedback-driven lifecycle to build and operate stable cloud environments, running continuously from initial discovery to always-on optimization.
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
              className="flex flex-col justify-start items-start gap-4 relative group"
            >
              {/* Step number + connector line */}
              <div className="w-full flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#877BF1] bg-[#877BF1]/5 flex items-center justify-center shrink-0 group-hover:border-[#FCCA71] group-hover:bg-[#FCCA71]/5 group-hover:shadow-[0_0_10px_rgba(252,202,113,0.25)] transition-all duration-300">
                  <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[15px] font-black font-sans">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                {idx < methodSteps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-linear-to-r from-[#877BF1]/40 to-transparent" />
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

export default CloudMethod;
