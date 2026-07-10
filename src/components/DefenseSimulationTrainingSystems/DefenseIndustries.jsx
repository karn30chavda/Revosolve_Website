import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ShieldStar,
  Siren,
  AirplaneTilt,
  Anchor,
  Heartbeat,
  Factory,
  Lightning,
  GraduationCap,
} from "@phosphor-icons/react";

const industriesData = [
  {
    icon: ShieldStar,
    t: "Defense",
    items: [
      "Military branches",
      "Naval operations",
      "Air force",
      "Land forces",
      "Mission planning",
      "Equipment training",
    ],
  },
  {
    icon: Siren,
    t: "Public Safety",
    items: [
      "Police",
      "Fire & rescue",
      "Disaster response",
      "Emergency management",
      "Civil defense",
    ],
  },
  {
    icon: AirplaneTilt,
    t: "Aviation",
    items: [
      "Aircraft maintenance",
      "Ground operations",
      "Emergency procedures",
      "Pilot familiarization",
    ],
  },
  {
    icon: Anchor,
    t: "Maritime",
    items: [
      "Port operations",
      "Coast guard",
      "Marine safety",
      "Vessel operations",
    ],
  },
  {
    icon: Heartbeat,
    t: "Healthcare",
    items: [
      "Emergency medicine",
      "Surgical simulation",
      "Clinical response",
      "Emergency preparedness",
    ],
  },
  {
    icon: Factory,
    t: "Manufacturing & Heavy Industry",
    items: [
      "Plant operations",
      "Equipment handling",
      "Hazardous environments",
      "Industrial safety",
      "Maintenance",
    ],
  },
  {
    icon: Lightning,
    t: "Energy & Utilities",
    items: [
      "Power generation",
      "Transmission",
      "Oil & gas",
      "Water treatment",
      "Critical infrastructure",
    ],
  },
  {
    icon: GraduationCap,
    t: "Training Academies",
    items: [
      "Curriculum simulation",
      "Certification programs",
      "Instructor development",
      "Assessment centers",
    ],
  },
];

const DefenseIndustries = () => {
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

          {/* Left/Right Flex Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block w-fit">
                Where readiness
              </span>
              <span className="text-[#CACBDB] font-light block mt-1">
                is mission-critical
              </span>
            </h2>

            <div className="max-w-xl lg:pb-1 shrink-0 lg:w-[45%]">
              <p className="text-[#CACBDB] text-[13.5px] md:text-[14px] font-normal leading-relaxed opacity-70 text-left">
                Our simulation platforms are tailored to meet the strict security protocols, complex physical mechanics, and high-stakes scenarios of industries where failure is not an option.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Industries Grid - 3, 3, 2 layout on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 w-full">
          {industriesData.map((ind, idx) => {
            const Icon = ind.icon;
            const colSpanClass = idx < 6 ? "col-span-1 sm:col-span-3 lg:col-span-2" : "col-span-1 sm:col-span-3 lg:col-span-3";
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
                className={`flex flex-col justify-between items-start p-6 w-full h-full bg-[#0A0B28]/40 rounded-[8px] border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden ${colSpanClass}`}
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col h-full justify-between gap-4">
                  {/* Top block: Icon & Title */}
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

                    {/* Bottom block: Tag List */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {ind.items.map((it) => (
                        <span
                          key={it}
                          className="text-[11px] font-mono tracking-wider text-[#CACBDB] border border-[#877BF1]/20 bg-[#877BF1]/4 px-3 py-1.5 rounded-[4px] group-hover:border-[#FCCA71]/40 group-hover:text-white transition-all duration-300"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
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

export default DefenseIndustries;
