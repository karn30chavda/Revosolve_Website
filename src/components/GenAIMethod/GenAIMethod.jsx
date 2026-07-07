import React from "react";
import { motion as Motion } from "framer-motion";

const methodSteps = [
  {
    title: "Discover",
    desc: "Understand business objectives, workflows, users, and operational challenges before selecting AI technologies.",
  },
  {
    title: "Design",
    desc: "Define AI architecture, knowledge sources, governance, user experiences, and integration strategy.",
  },
  {
    title: "Engineer",
    desc: "Develop AI systems using enterprise-grade engineering practices — scalable, secure, maintainable.",
  },
  {
    title: "Integrate",
    desc: "Connect AI with enterprise platforms, business workflows, databases, APIs, and operational systems.",
  },
  {
    title: "Optimize",
    desc: "Continuously improve AI performance through monitoring, evaluation, feedback, retraining, and governance.",
  },
];

const GenAIMethod = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-10">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-2">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [our method]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#CACBDB] font-light xl:font-thin">From</span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Objective to Operation
              </span>
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              A Five-Stage Engineering Discipline
            </h3>
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

export default GenAIMethod;
