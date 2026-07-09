import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Target,
  Books,
  HandTap,
  Headset,
  ArrowsClockwise,
  Scales,
} from "@phosphor-icons/react";

const problemsList = [
  {
    title: "AI Without Business Context",
    desc: "Many AI initiatives focus on technology rather than solving real operational challenges.",
    icon: <Target size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Disconnected Enterprise Knowledge",
    desc: "Business information exists across multiple systems, making it hard for employees and customers to access accurate information.",
    icon: <Books size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Manual Decision-Making",
    desc: "Employees spend significant time gathering information and performing repetitive decision-support activities.",
    icon: <HandTap size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "High Customer Support Volumes",
    desc: "Support teams face increasing workloads while customers expect faster, more personalized interactions.",
    icon: <Headset size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Repetitive Business Processes",
    desc: "Manual document processing, approvals, and administrative tasks reduce operational efficiency.",
    icon: <ArrowsClockwise size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "AI Governance Challenges",
    desc: "Organizations require secure, explainable, and compliant AI systems suitable for enterprise environments.",
    icon: <Scales size={28} className="text-[#877BF1]" weight="light" />,
  }
];

const GenAIProblems = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: "url(/home_section_6/bg_pattern.svg)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">Enterprise </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                requires more than large language models
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Organizations invest heavily in AI but struggle to reach business value – disconnected pilots, poor data quality, and missing operational integration.
            </p>
          </div>
        </div>

        {/* Problems Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {problemsList.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.015
              }}
              style={{ 
                backgroundColor: "rgba(2, 3, 25, 1)",
                borderColor: "rgba(95, 95, 255, 1)"
              }}
              className={`flex flex-col justify-between items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                idx === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top part: Icon */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-300 mb-4">
                {item.icon}
              </div>

              {/* Bottom part: Text stack */}
              <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                <h4 className="text-white text-[18px] font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#CACBDB] text-[13.5px] font-normal leading-relaxed opacity-60 group-hover:opacity-85 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenAIProblems;
