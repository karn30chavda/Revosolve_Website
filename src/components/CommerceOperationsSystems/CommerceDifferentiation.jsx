import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Cpu,
  SquaresFour,
  Exclude,
  Sliders,
  TrendUp
} from "@phosphor-icons/react";

const differentiationData = [
  {
    title: "Built as an operational backbone, not an integration layer",
    desc: "Functions as the core system that manages end-to-end operations instead of simply connecting third-party tools.",
    icon: Cpu,
    pattern: "/CommerceOperationsSystems/diff_pattern_1.svg",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Designed for multi-brand, multi-channel environments",
    desc: "Supports multiple brands, marketplaces, and sales channels within a single ecosystem.",
    icon: SquaresFour,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Eliminates dependency on multiple SaaS tools",
    desc: "Reduces the need for separate software subscriptions for different operational tasks.",
    icon: Exclude,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Enables complete operational and financial control",
    desc: "Provides centralized oversight of inventory, orders, logistics, and financial processes.",
    icon: Sliders,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Scales without increasing system complexity",
    desc: "Supports business growth without adding complicated workflows or disconnected systems.",
    icon: TrendUp,
    colSpan: "lg:col-span-1",
  },
];

const CommerceDifferentiation = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-6">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [differentiation]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-[#CACBDB] font-light xl:font-thin">
                Why
              </span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                RevoSolve
              </span>
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              Where Intelligence Takes Shape
            </h3>
          </div>
        </div>

        {/* Differentiation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {differentiationData.map((item, idx) => {
            const Icon = item.icon;
            return (
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
                className={`flex flex-col justify-start items-start p-8 min-h-[280px] w-full rounded-[8px] border-t-2 border-t-[#FCCA71]/80 border-x border-b cursor-pointer transition-all duration-300 relative group overflow-hidden ${item.colSpan}`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none" />

                {/* Bottom Left Pattern (For first card only) */}
                {item.pattern && (
                  <img 
                    src={item.pattern} 
                    alt="" 
                    className="absolute bottom-0 left-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0" 
                  />
                )}

                {/* Icon Container */}
                <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] mb-6 shrink-0 relative z-10">
                  <Icon size={26} className="text-[#FCCA71]" weight="light" />
                </div>

                {/* Text Content Block */}
                <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                  {/* Title */}
                  <h4 className="text-[#E7E6FC] text-[24px] font-semibold font-sans leading-[32px] text-left group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h4>
                  {/* Description */}
                  <p className="text-[#AAA9BE] text-[16px] font-normal font-sans leading-[24px] text-left max-w-full lg:max-w-[520px]">
                    {item.desc}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CommerceDifferentiation;
