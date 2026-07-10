import React from "react";
import { motion as Motion } from "framer-motion";
import {
  City,
  Bank,
  Train,
  Drop,
  Factory,
  Flame,
  ShieldStar,
  Buildings,
} from "@phosphor-icons/react";

const industriesData = [
  {
    icon: City,
    t: "Smart Cities",
    d: "Traffic, utilities, public services, urban infrastructure, and citizen operations in one live model.",
  },
  {
    icon: Bank,
    t: "Government",
    d: "Urban development, municipal corporations, planning authorities, and infrastructure departments.",
  },
  {
    icon: Train,
    t: "Transportation",
    d: "Metro, rail, airports, ports, and road networks — monitored and simulated end to end.",
  },
  {
    icon: Drop,
    t: "Utilities",
    d: "Water, electricity, gas, waste management, and energy distribution networks.",
  },
  {
    icon: Factory,
    t: "Manufacturing",
    d: "Industrial plants, factory operations, production facilities, and warehouse operations.",
  },
  {
    icon: Flame,
    t: "Oil & Gas",
    d: "Pipeline monitoring, plant operations, remote assets, safety, and compliance.",
  },
  {
    icon: ShieldStar,
    t: "Defense",
    d: "Military bases, training infrastructure, operational planning, and mission support.",
  },
  {
    icon: Buildings,
    t: "Enterprise Infrastructure",
    d: "Campuses, facilities, asset networks, and operations centers.",
  },
];

const SimulationDigitalTwinIndustries = () => {
  return (
    <section
      id="industries"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start w-full">
        
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full mb-12"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [industries]
          </span>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block w-fit">
              From city blocks
            </span>
            <span className="text-[#CACBDB] font-light block mt-1">
              to national infrastructure
            </span>
          </h2>
        </Motion.div>

        {/* Industries Grid - 4 columns layout on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {industriesData.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Motion.div
                key={ind.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(135, 123, 241, 0.09)",
                  borderColor: "rgba(135, 123, 241, 0.6)",
                }}
                className="flex flex-col justify-start items-start p-6 w-full h-full bg-[#0A0B28]/40 rounded-[8px] border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col h-full justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="text-[#FCCA71] shrink-0">
                        <Icon
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-[17px] text-[#E7E6FC] group-hover:text-white transition-colors duration-300 leading-snug">
                        {ind.t}
                      </h3>
                    </div>

                    <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#CACBDB]">
                      {ind.d}
                    </p>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SimulationDigitalTwinIndustries;
