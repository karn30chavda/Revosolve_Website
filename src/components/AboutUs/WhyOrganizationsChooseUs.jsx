import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Code,
  Gear as Cog,
  Brain,
  GitMerge as Workflow,
  Cloud,
  Database,
  CodeBlock,
  Cpu,
  Compass,
} from "@phosphor-icons/react";

const CAPABILITIES = [
  { label: "Enterprise Software Engineering", icon: Code },
  { label: "Operational Systems Design", icon: Cog },
  { label: "Artificial Intelligence", icon: Brain },
  { label: "Business Process Automation", icon: Workflow },
  { label: "Cloud & DevOps", icon: Cloud },
  { label: "Data Engineering", icon: Database },
  { label: "Open-Source Enterprise Platforms", icon: CodeBlock },
  { label: "Product Engineering", icon: Cpu },
  { label: "Digital Transformation Consulting", icon: Compass },
];

const FEATURES = [
  {
    num: "01",
    title: "Beyond Implementation",
    desc: "Continuous engineering that evolves with the organization.",
  },
  {
    num: "02",
    title: "Operational Intelligence",
    desc: "Systems that strengthen decision-making, not just automate tasks.",
  },
  {
    num: "03",
    title: "Long-Term Impact",
    desc: "Sustainable transformation, not one-off projects.",
  },
];

export const WhyOrganizationsChooseUs = () => {
  return (
    <section className="relative w-full py-10 min-[1290px]:py-14 font-sans overflow-hidden -mt-10 min-[1290px]:-mt-16">
      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col gap-6 max-w-4xl mb-10">
          <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
            [why organizations choose us]
          </div>

          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              One integrated{" "}
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin">
              engineering approach.
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mt-1">
            Organizations partner with RevoSolve because they need more than software. They need an engineering partner capable of understanding operational complexity and translating it into scalable digital systems.
          </p>
        </div>

        {/* Capabilities Tag Cloud */}
        <div className="flex flex-wrap gap-3 max-w-full lg:max-w-6xl mb-16">
          {CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Motion.span
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[rgba(252,202,113,0.35)] bg-[#07092b]/60 backdrop-blur-xl text-white/90 text-sm md:text-[15px] font-normal hover:border-[#FCCA71] hover:text-white transition-all cursor-default shadow-sm group"
              >
                <Icon size={18} className="text-[#FCCA71] group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Motion.span>
            );
          })}
          <span
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-[15px] font-bold shadow-md cursor-default"
            style={{
              background: "linear-gradient(90deg, #877BF1, #FCCA71)",
              color: "#07092b",
            }}
          >
            <Compass size={18} weight="bold" />
            <span>Operational Capability</span>
          </span>
        </div>

        {/* 3 Pillars Footer Grid */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {FEATURES.map((feat) => (
            <div key={feat.num} className="flex flex-col gap-2">
              <div className="font-mono text-xs text-white/30 tracking-widest">{feat.num}</div>
              <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{feat.title}</h4>
              <p className="text-white/55 text-sm md:text-base leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyOrganizationsChooseUs;
