import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Strategy,
  PlugsConnected,
  Bank,
  Infinity as InfinityIcon,
  ArrowsCounterClockwise,
} from "@phosphor-icons/react";

const whyCards = [
  {
    icon: Strategy,
    t: "Infrastructure-First Thinking",
    d: "We study how projects move from opportunity to execution before designing software.",
  },
  {
    icon: PlugsConnected,
    t: "One Connected Platform",
    d: "Instead of isolated apps for tenders, HR, and finance, we engineer one connected platform.",
  },
  {
    icon: Bank,
    t: "Built for Government & Infrastructure",
    d: "Transparency, accountability, and compliance engineered in from the start.",
  },
  {
    icon: InfinityIcon,
    t: "Enterprise-Scale Architecture",
    d: "Scales across departments, business units, and regions without compromising governance.",
  },
  {
    icon: ArrowsCounterClockwise,
    t: "Long-Term Engineering Partnership",
    d: "We continuously enhance capabilities as regulations and technologies evolve.",
  },
];

const InfraWhy = () => {
  return (
    <section
      id="why"
      className="relative w-full py-12 md:py-16 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl mb-10 md:mb-12"
      >
        <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
          [why revosolve]
        </span>
        <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
            We engineer infrastructure operations
          </span>{" "}
          <span className="text-[#CACBDB] font-light">
            — not just project software
          </span>
        </h2>
      </Motion.div>

      {/* 3 Top Cards / 2 Bottom Cards Layout */}
      <div className="max-w-310 mx-auto grid grid-cols-1 md:grid-cols-6 gap-5">
        {whyCards.map((w, i) => {
          const Icon = w.icon;
          const isBottomRow = i >= 3;

          return (
            <Motion.div
              key={w.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 bg-[#0F1034]/40 border border-[#877BF1]/22 rounded-lg cursor-pointer transition-all duration-300 group hover:border-[#877BF1]/60 hover:bg-[#877BF1]/10 flex flex-col justify-between ${
                isBottomRow ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div>
                <div className="text-[#FCCA71] mb-4 shrink-0">
                  <Icon
                    size={26}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-semibold text-[17px] text-[#E7E6FC] mb-2 leading-snug group-hover:text-white transition-colors duration-300 m-0">
                  {w.t}
                </h3>

                <p className="text-[13.5px] leading-relaxed text-[#CACBDB]/80 m-0">
                  {w.d}
                </p>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default InfraWhy;
