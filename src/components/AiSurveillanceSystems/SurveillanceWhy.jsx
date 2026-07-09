import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Strategy,
  VideoCamera,
  FlowArrow,
  Stack,
  TrendUp,
  LockKey
} from "@phosphor-icons/react";

const whyData = [
  {
    title: "Built Around Business Operations",
    desc: "Designed for operational teams, security personnel, command centers, and decision-makers — not just surveillance operators.",
    icon: <Strategy size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Infrastructure-Agnostic",
    desc: "Works with existing CCTV investments and integrates with leading VMS platforms.",
    icon: <VideoCamera size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "AI + Rules + Workflow",
    desc: "Combines Computer Vision with configurable operational workflows, making insights immediately actionable.",
    icon: <FlowArrow size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise Scale",
    desc: "Built for distributed environments with centralized governance, analytics, and operational visibility.",
    icon: <Stack size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Continuously Evolving Intelligence",
    desc: "AI models, operational rules, and dashboards improve over time as new requirements emerge.",
    icon: <TrendUp size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Privacy & Compliance Built In",
    desc: "Data retention, access controls, and privacy safeguards aligned with regulatory requirements.",
    icon: <LockKey size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const SurveillanceWhy = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit text-left">
            {/* Section Tag */}
            <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [Why RevoVision]
            </div>

            {/* Heading Block */}
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="block font-black">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent inline-block">
                  From surveillance
                </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                to operational intelligence
              </span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Most systems simply record video. RevoVision interprets it.
            </p>
          </div>
        </div>

        {/* Differentiation Grid - Symmetrical 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {whyData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(99, 102, 241, 0.7)"
              }}
              style={{ 
                backgroundColor: "rgba(29, 30, 50, 1)", 
                borderColor: "rgba(99, 102, 241, 0.3)" 
              }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border-t-2 border-t-[#FCCA71]/80 border-x border-b cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Radial Glow on Hover */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] mb-6 shrink-0 relative z-10">
                {item.icon}
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
                {/* Card Title */}
                <h4 className="text-[#E7E6FC] text-[18px] md:text-[20px] font-semibold font-sans leading-snug text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Card Description */}
                <p className="text-[#AAA9BE] text-[13px] md:text-[14px] font-normal font-sans leading-relaxed text-left opacity-80">
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

export default SurveillanceWhy;
