import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Heartbeat,
  CompassTool,
  Steps,
  CloudCheck,
  Infinity as InfinityIcon,
  BookOpen,
} from "@phosphor-icons/react";

const whyData = [
  {
    title: "Business Continuity First",
    desc: "We prioritize uninterrupted business operations throughout every modernization initiative.",
    icon: Heartbeat,
  },
  {
    title: "Architecture-Led Modernization",
    desc: "Every program begins with a long-term architecture strategy — not a technology upgrade.",
    icon: CompassTool,
  },
  {
    title: "Incremental Transformation",
    desc: "We modernize systems in phases, reducing operational risk while delivering measurable business value.",
    icon: Steps,
  },
  {
    title: "Cloud-Native Thinking",
    desc: "Applications are modernized to leverage cloud scalability, automation, resilience, and operational efficiency.",
    icon: CloudCheck,
  },
  {
    title: "Long-Term Technology Evolution",
    desc: "Modernization is an ongoing journey. We continue optimizing systems as technologies and priorities evolve.",
    icon: InfinityIcon,
  },
  {
    title: "Knowledge Preservation",
    desc: "Institutional logic embedded in legacy systems is documented and carried forward — not lost in translation.",
    icon: BookOpen,
  },
];

const LegacyWhyRevoSolve = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20">
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit text-left">
            <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [Why RevoSolve]
            </div>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
                Modernization strategies
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                that protect business continuity
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Modernization is not about replacing everything. It is about
              evolving the right systems, at the right time, with the right
              strategy.
            </p>
          </div>
        </div>

        {/* Why Grid */}
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
                borderColor: "rgba(99, 102, 241, 0.7)",
              }}
              style={{
                backgroundColor: "rgba(29, 30, 50, 1)",
                borderColor: "rgba(99, 102, 241, 0.3)",
              }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border-t-2 border-t-[#FCCA71]/80 border-x border-b cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />
              <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] mb-6 shrink-0 relative z-10">
                {item.icon && <item.icon size={26} weight="light" />}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
                <h4 className="text-[#E7E6FC] text-[18px] md:text-[20px] font-semibold font-sans leading-snug text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
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

export default LegacyWhyRevoSolve;
