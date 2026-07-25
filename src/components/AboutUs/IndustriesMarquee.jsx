import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Bank,
  Factory,
  Wrench,
  Buildings,
  ShoppingBag,
  Storefront,
  Heartbeat,
  Truck,
  Briefcase,
  Cpu,
} from "@phosphor-icons/react";

const INDUSTRIES = [
  { name: "Government & Public Sector", icon: Bank },
  { name: "Manufacturing & Industrial", icon: Factory },
  { name: "Infrastructure & EPC", icon: Wrench },
  { name: "Smart Cities & Mobility", icon: Buildings },
  { name: "Retail & Consumer Goods", icon: ShoppingBag },
  { name: "D2C & Omnichannel Commerce", icon: Storefront },
  { name: "Healthcare & Life Sciences", icon: Heartbeat },
  { name: "Banking & Financial Services", icon: Bank },
  { name: "Logistics & Supply Chain", icon: Truck },
  { name: "Engineering & Field Ops", icon: Briefcase },
  { name: "Technology & Enterprise SaaS", icon: Cpu },
];

export const IndustriesMarquee = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="relative w-full pt-14 pb-20 min-[1290px]:pt-16 min-[1290px]:pb-28 font-sans overflow-hidden">
      <div className="w-[85%] max-w-7xl mx-auto relative z-10 mb-12">
        
        {/* Header Grid: Tag, Title & Right Description */}
        <div className="flex flex-col min-[1290px]:flex-row justify-between items-start min-[1290px]:items-end gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
              [industries we serve]
            </div>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent max-w-fit">
                Adapting to every
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                operational reality
              </span>
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base font-normal leading-relaxed max-w-md">
            The objective remains consistent: create connected operations that scale seamlessly with the organization regardless of industry domain.
          </p>
        </div>

      </div>

      {/* Infinite Dual-Row Scrolling Marquee */}
      <div className="relative flex flex-col gap-6 overflow-hidden w-full py-4">
        
        {/* Row 1: Forward Marquee */}
        <div className="relative flex overflow-hidden w-full">
          <Motion.div
            className="flex items-center gap-8 md:gap-12 shrink-0 py-2"
            animate={{ x: "-33.333%" }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {marqueeItems.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`r1-${index}`}
                  className="flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl font-black text-white/50 hover:text-white transition-colors group shrink-0 cursor-default"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-[#FCCA71] group-hover:bg-[#FCCA71]/10 transition-colors">
                    <Icon size={20} className="text-white/60 group-hover:text-[#FCCA71] transition-colors" />
                  </div>
                  <span className="whitespace-nowrap tracking-tight font-sans">
                    {ind.name}
                  </span>
                  <span className="text-[#FCCA71] text-2xl md:text-3xl ml-4">✦</span>
                </div>
              );
            })}
          </Motion.div>
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="relative flex overflow-hidden w-full">
          <Motion.div
            className="flex items-center gap-8 md:gap-12 shrink-0 py-2"
            initial={{ x: "-33.333%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {marqueeItems.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`r2-${index}`}
                  className="flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl font-black text-white/50 hover:text-white transition-colors group shrink-0 cursor-default"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-[#FCCA71] group-hover:bg-[#FCCA71]/10 transition-colors">
                    <Icon size={20} className="text-white/60 group-hover:text-[#FCCA71] transition-colors" />
                  </div>
                  <span className="whitespace-nowrap tracking-tight font-sans">
                    {ind.name}
                  </span>
                  <span className="text-[#FCCA71] text-2xl md:text-3xl ml-4">✦</span>
                </div>
              );
            })}
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesMarquee;
