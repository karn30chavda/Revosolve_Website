import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const problemItems = [
  {
    title: "AI Without Business Context",
    desc: "Many AI initiatives focus on technology rather than solving real operational challenges.",
  },
  {
    title: "Disconnected Enterprise Knowledge",
    desc: "Business information exists across multiple systems, making it hard for employees and customers to access accurate information.",
  },
  {
    title: "Manual Decision-Making",
    desc: "Employees spend significant time gathering information and performing repetitive decision-support activities.",
  },
  {
    title: "High Customer Support Volumes",
    desc: "Support teams face increasing workloads while customers expect faster, more personalized interactions.",
  },
  {
    title: "Repetitive Business Processes",
    desc: "Manual document processing, approvals, and administrative tasks reduce operational efficiency.",
  },
  {
    title: "Stuck at Proof of Concept",
    desc: "Many organizations successfully demonstrate AI but struggle to deploy and manage production-ready systems.",
  },
];

const GenAIProblems = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#01031c] py-8 lg:py-12">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
          [the problem]
        </div>

        {/* Heading Block */}
        <div className="flex flex-col items-start justify-start">
          <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px]">
            AI Demos Are Easy
          </h2>
          <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal">
            Production AI Is Not
          </h3>
        </div>

        {/* Interactive Card */}
        <div
          style={{
            background: "linear-gradient(225deg, #0F1034 24.88%, #2C2F9A 187.87%)",
          }}
          className="w-full mt-6 p-6 lg:p-8 border border-black rounded-2xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 overflow-hidden relative z-10"
        >
          {/* Left Column: Active problem detail */}
          <div className="w-full lg:w-[440px] shrink-0 flex flex-col justify-center gap-4 self-stretch relative z-10">
            <Motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="text-[#E7E6FC] text-[22px] lg:text-[26px] font-extrabold font-sans leading-snug">
                {problemItems[activeIdx].title}
              </div>
              <div className="self-stretch h-px bg-linear-to-r from-amber-500 to-transparent" />
              <p className="text-[#CACBDB] text-[16px] lg:text-[18px] font-normal font-sans leading-relaxed opacity-80">
                {problemItems[activeIdx].desc}
              </p>
            </Motion.div>
          </div>

          {/* Right Column: Problem list */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-6 relative z-10">
            <div className="self-stretch text-white text-[18px] font-normal font-sans leading-[24px]">
              The challenges we see inside most organizations
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              {problemItems.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full rounded-[8px] flex items-center gap-[16px] py-[10px] px-[14px] self-stretch cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-[#26274A] opacity-100"
                        : "bg-transparent opacity-50 hover:opacity-85"
                    }`}
                  >
                    {/* Checkmark Circle */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "border border-[#FCCA71] bg-[#FCCA71]/5 shadow-[0_0_6px_rgba(252,202,113,0.2)]"
                          : "border border-[#877BF1] bg-transparent"
                      }`}
                    >
                      <img
                        src="/Solution_page/solution_problem_tick.svg"
                        alt="Tick"
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                        }`}
                      />
                    </div>

                    <span className="text-white text-[15px] xl:text-[17px] font-normal font-sans leading-[24px] xl:leading-[26px]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Right Decorative Pattern */}
          <img
            src="/Solution_page/solution_problem_bg_pattern.webp"
            alt=""
            className="absolute bottom-0 right-0 pointer-events-none z-0 mix-blend-screen opacity-40 select-none w-auto h-auto max-h-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default GenAIProblems;
