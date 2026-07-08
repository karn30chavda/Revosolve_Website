import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Strategy,
  Stack,
  Sparkle,
  Scales,
  Infinity as InfinityIcon,
  UsersThree,
} from "@phosphor-icons/react";

const whyData = [
  {
    title: "Business-Driven Data Engineering",
    desc: "Data platforms designed around business objectives, operational workflows, and decision-making — not just technology.",
    icon: <Strategy size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise-Scale Architecture",
    desc: "Every platform is engineered for scalability, governance, performance, and long-term maintainability.",
    icon: <Stack size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "AI-Ready by Design",
    desc: "Architectures that prepare you for machine learning, Generative AI, predictive analytics, and future innovation.",
    icon: <Sparkle size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Trusted Data Governance",
    desc: "Reliable, secure, compliant data ecosystems that stakeholders can trust.",
    icon: <Scales size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Long-Term Data Evolution",
    desc: "Your data platform evolves with you — new sources, analytics, AI capabilities, and operational requirements.",
    icon: <InfinityIcon size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Self-Service Data Access",
    desc: "Governed platforms that let business teams explore, analyze, and act on data without engineering bottlenecks.",
    icon: <UsersThree size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const DataWhyRevoSolve = () => {
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
              [Why RevoSolve]
            </div>

            {/* Heading Block */}
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="block font-black">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent inline-block">
                  Data platforms that
                </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                support better decisions
              </span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Data initiatives often fail because they focus on reporting rather than building a sustainable foundation. We engineer data ecosystems that become a strategic asset.
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

export default DataWhyRevoSolve;
