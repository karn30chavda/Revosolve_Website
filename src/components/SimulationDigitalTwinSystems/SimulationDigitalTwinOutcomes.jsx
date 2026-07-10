import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Eye,
  Strategy,
  TrendDown,
  Siren,
  Gauge,
  Lightbulb,
  Infinity,
  ShieldCheck,
} from "@phosphor-icons/react";

const outcomesData = [
  {
    n: "01",
    icon: Eye,
    t: "Complete Operational Visibility",
    d: "Monitor infrastructure, assets, facilities, and operations from one unified environment.",
  },
  {
    n: "02",
    icon: Strategy,
    t: "Better Planning",
    d: "Evaluate future operational scenarios before making investments.",
  },
  {
    n: "03",
    icon: TrendDown,
    t: "Reduced Maintenance Costs",
    d: "Identify maintenance requirements before failures occur.",
  },
  {
    n: "04",
    icon: Siren,
    t: "Improved Emergency Response",
    d: "Understand incidents in context and coordinate operational responses more effectively.",
  },
  {
    n: "05",
    icon: Gauge,
    t: "Higher Asset Utilization",
    d: "Improve planning, scheduling, maintenance, and lifecycle management.",
  },
  {
    n: "06",
    icon: Lightbulb,
    t: "Smarter Decision-Making",
    d: "Leadership decides with real-time operational intelligence instead of delayed reports.",
  },
  {
    n: "07",
    icon: Infinity,
    t: "Long-Term Infrastructure Intelligence",
    d: "A continuously evolving model supporting planning, maintenance, sustainability, and expansion.",
  },
  {
    n: "08",
    icon: ShieldCheck,
    t: "Reduced Operational Risk",
    d: "Simulate failures, stress-test responses, and harden operations before real events occur.",
  },
];

const SimulationDigitalTwinOutcomes = () => {
  return (
    <section
      id="outcomes"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start w-full">
        
        {/* Section Header - Styled exactly like Capabilities / Approach */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full mb-12"
        >
          {/* Desktop Original Pill */}
          <div className="hidden min-[1290px]:block opacity-30 justify-start mb-4">
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              [
            </span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
              Operational Outcomes
            </span>
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              ]
            </span>
          </div>

          {/* Mobile Styled Glassmorphic Solutions Badge */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-4 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              Operational Outcomes
            </span>
          </div>

          {/* Left/Right Flex Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left max-w-xl">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                What Digital Twin Systems
              </span>{" "}
              <span className="text-[#CACBDB] font-light">
                achieve
              </span>
            </h2>

            <div className="max-w-xl lg:pb-1 shrink-0 lg:w-[45%]">
              <p className="text-[#CACBDB] text-[13.5px] md:text-[14px] font-normal leading-relaxed opacity-70 text-left">
                Static information becomes operational intelligence — and decisions get faster, cheaper, and safer.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Floating Cards Grid Layout - Standard Page UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {outcomesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(135, 123, 241, 0.09)",
                  borderColor: "rgba(135, 123, 241, 0.6)",
                }}
                className="flex flex-col justify-start items-start p-6 w-full h-full bg-[#0A0B28]/40 rounded-[8px] border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full">
                  {/* Top Row: Icon */}
                  <div className="text-[#FCCA71] mb-5 shrink-0">
                    <Icon
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold text-[16px] sm:text-[17px] text-[#E7E6FC] mb-2 group-hover:text-white transition-colors duration-300 leading-snug">
                    {item.t}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#CACBDB]">
                    {item.d}
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

export default SimulationDigitalTwinOutcomes;
