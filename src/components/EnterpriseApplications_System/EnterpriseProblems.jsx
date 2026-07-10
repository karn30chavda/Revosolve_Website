import React from "react";
import { motion as Motion } from "framer-motion";
import {
  PuzzlePiece,
  ClipboardText,
  HourglassMedium,
  Plugs,
  UserCircleMinus,
  ArrowsOut
} from "@phosphor-icons/react";

const problemsList = [
  {
    title: "Fragmented Business Applications",
    desc: "Disconnected systems create duplicate work, inconsistent information, and limited operational visibility across departments.",
    icon: <PuzzlePiece size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Manual Operational Workflows",
    desc: "Business-critical activities often depend on spreadsheets, emails, and repetitive manual processes that reduce efficiency and increase operational risk.",
    icon: <ClipboardText size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Legacy Applications Limiting Growth",
    desc: "Older applications become difficult to maintain, expensive to operate, and unable to support evolving business requirements.",
    icon: <HourglassMedium size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Lack of System Integration",
    desc: "Departments operate using different software platforms that do not communicate effectively, leading to information silos and delayed decision-making.",
    icon: <Plugs size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Poor User Adoption",
    desc: "Applications designed without understanding user workflows often become difficult to use, resulting in low adoption and reduced business value.",
    icon: <UserCircleMinus size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Limited Scalability",
    desc: "Technology designed for today’s operations often struggles to support tomorrow’s growth, expansion, and increasing transaction volumes.",
    icon: <ArrowsOut size={28} className="text-[#FCCA71]" weight="light" />,
  }
];

const EnterpriseProblems = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black text-[#877BF1]">Modern </span>
              <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">Enterprises </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block sm:inline">
                need systems that scale with their operations
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Multiple applications, manual processes, disconnected data, and aging systems create inefficiencies that impact productivity, decisions, and growth.
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
              className="flex flex-col justify-between items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top part: Icon */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-[#FCCA71]/10 border border-[#FCCA71]/20 group-hover:bg-[#FCCA71]/20 transition-all duration-300 mb-4">
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

export default EnterpriseProblems;
