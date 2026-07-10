import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowsClockwise,
  CloudArrowUp,
  SquaresFour,
  CompassTool,
  BracketsCurly,
  Database,
  PaintBrushBroad,
  HardDrives,
  PlugsConnected,
} from "@phosphor-icons/react";

const buildItems = [
  {
    title: "Legacy Application Modernization",
    desc: "Refactor, redesign, or rebuild aging business applications using modern engineering practices while preserving business functionality.",
    icon: <ArrowsClockwise size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Cloud Migration",
    desc: "Move enterprise applications, databases, and workloads to AWS, Azure, or Google Cloud using structured migration strategies.",
    icon: <CloudArrowUp size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Monolith to Microservices",
    desc: "Break down monolithic applications into modular, scalable services that improve agility and deployment flexibility.",
    icon: <SquaresFour size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Platform Re-Engineering",
    desc: "Redesign application architecture to improve scalability, performance, integration, and operational efficiency.",
    icon: <CompassTool size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "API Enablement",
    desc: "Expose legacy functionality through secure APIs to support modern integrations and digital ecosystems.",
    icon: <BracketsCurly size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Database Modernization",
    desc: "Upgrade or migrate databases to improve performance, availability, scalability, and data governance.",
    icon: <Database size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "User Experience Modernization",
    desc: "Transform outdated interfaces into modern, intuitive digital experiences that improve adoption and productivity.",
    icon: <PaintBrushBroad size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Infrastructure Modernization",
    desc: "Modernize hosting, networking, security, and deployment architectures using cloud-native technologies.",
    icon: <HardDrives size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Application Integration",
    desc: "Connect modernized systems with ERP, CRM, banking platforms, identity providers, and analytics platforms.",
    icon: <PlugsConnected size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const LegacyWhatWeEngineer = () => {
  return (
    <section className="relative w-full pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden z-20">
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [what we engineer]
            </span>
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
                  Modern architectures built
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  for the future
                </span>
              </h2>
            </div>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Modernization is not simply a migration exercise — it is an opportunity to redesign systems for greater agility, resilience, and operational efficiency.
            </p>
          </div>
        </div>

        {/* Build Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {buildItems.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(135, 123, 241, 0.7)",
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-[#877BF1]/30 hover:border-[#877BF1]/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />
              <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                {item.icon}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[20px] text-left max-w-full">
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

export default LegacyWhatWeEngineer;
