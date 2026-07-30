import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Buildings,
  HardHat,
  Ruler,
  MapTrifold,
  Lightning,
} from "@phosphor-icons/react";

const industryCards = [
  {
    icon: Buildings,
    t: "Government Departments",
    d: "Digitize infrastructure planning, execution, and compliance through one operational platform.",
    typical: ["Municipal Corporations", "PWD", "Water Boards", "Smart City Missions"],
  },
  {
    icon: HardHat,
    t: "EPC & Infrastructure Companies",
    d: "Manage projects from bid to financial closure with visibility across every active project.",
    typical: ["Roads & Highways", "Bridges", "Metro & Rail", "Utilities"],
  },
  {
    icon: Ruler,
    t: "Engineering & PMC Consultants",
    d: "Improve governance through centralized planning, site monitoring, and reporting.",
    typical: ["PMC", "Design Firms", "Technical Advisory"],
  },
  {
    icon: MapTrifold,
    t: "Survey Organizations",
    d: "Digitize field operations, asset mapping, and drone inspections at scale.",
    typical: ["Survey Companies", "Drone Providers", "Utility Mapping"],
  },
  {
    icon: Lightning,
    t: "Utilities & Public Services",
    d: "Coordinate assets, maintenance, and compliance across distributed infrastructure.",
    typical: ["Electricity", "Water", "Gas", "Telecom"],
  },
];

const InfraIndustries = () => {
  return (
    <section
      id="industries"
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
          [industries]
        </span>
        <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
            Infrastructure operations
          </span>{" "}
          <span className="text-[#CACBDB] font-light">
            across every delivery model
          </span>
        </h2>
      </Motion.div>

      {/* Grid: 3 Cards in Top Row, 2 Cards in Bottom Row */}
      <div className="max-w-310 mx-auto grid grid-cols-1 md:grid-cols-6 gap-5">
        {industryCards.map((ind, i) => {
          const Icon = ind.icon;
          const isBottomRow = i >= 3;

          return (
            <Motion.div
              key={ind.t}
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
                <div className="flex items-center gap-3 mb-3.5">
                  <Icon
                    size={24}
                    className="text-[#FCCA71] shrink-0 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-semibold text-[16.5px] text-[#E7E6FC] group-hover:text-white transition-colors duration-300 m-0">
                    {ind.t}
                  </h3>
                </div>

                <p className="text-[13.5px] leading-relaxed text-[#CACBDB]/80 mb-5 m-0">
                  {ind.d}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {ind.typical.map((ty) => (
                  <span
                    key={ty}
                    className="font-mono text-[10.5px] text-[#CACBDB] border border-[#877BF1]/20 bg-[#877BF1]/04 px-2.5 py-1 rounded"
                  >
                    {ty}
                  </span>
                ))}
              </div>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default InfraIndustries;
