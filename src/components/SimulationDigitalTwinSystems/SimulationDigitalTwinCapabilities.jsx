import React from "react";
import { motion as Motion } from "framer-motion";
import {
  GlobeHemisphereWest,
  MapTrifold,
  CubeTransparent,
  Broadcast,
  Wrench,
  ChartLineUp,
  Shuffle,
  Brain,
  ProjectorScreenChart,
} from "@phosphor-icons/react";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -6% 0px" },
  transition: {
    duration: 0.55,
    delay: (i % 4) * 0.08,
    ease: [0.2, 0.7, 0.2, 1],
  },
});

const capabilities = [
  {
    n: "01",
    icon: GlobeHemisphereWest,
    t: "Digital Twin Platform",
    d: "A continuously synchronized digital representation of physical infrastructure and operational environments.",
  },
  {
    n: "02",
    icon: MapTrifold,
    t: "GIS Visualization",
    d: "View infrastructure assets geographically with live operational data layered directly onto maps.",
  },
  {
    n: "03",
    icon: CubeTransparent,
    t: "3D Infrastructure Models",
    d: "Buildings, utilities, transportation networks, industrial plants, and public infrastructure in immersive 3D.",
  },
  {
    n: "04",
    icon: Broadcast,
    t: "IoT Integration",
    d: "Live sensor data — temperature, pressure, energy, water, traffic, air quality, equipment health, weather, occupancy.",
  },
  {
    n: "05",
    icon: Wrench,
    t: "Asset Intelligence",
    d: "Monitor asset condition, lifecycle, maintenance schedules, utilization, and operational performance.",
  },
  {
    n: "06",
    icon: ChartLineUp,
    t: "Predictive Analytics",
    d: "Forecast maintenance requirements, identify risks, and optimize resource planning from live and historical data.",
  },
  {
    n: "07",
    icon: Shuffle,
    t: "Scenario Simulation",
    d: "Model future operational scenarios before implementing changes — from road closures to population growth.",
  },
  {
    n: "08",
    icon: Brain,
    t: "AI Event Detection",
    d: "Identify abnormal operational patterns before they become critical incidents.",
  },
  {
    n: "09",
    icon: ProjectorScreenChart,
    t: "Executive Command Center",
    d: "Unified dashboard displaying infrastructure health, operational status, predictive alerts, asset performance, and key metrics.",
  },
];

const SimulationDigitalTwinCapabilities = () => {
  return (
    <section
      id="capabilities"
      className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <Motion.div {...reveal(0)} className="flex flex-col gap-6 max-w-[740px] pb-6">
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [capabilities]
          </span>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
            <span className="font-black block w-fit bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Engineering real-time
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              operational intelligence
            </span>
          </h2>
        </Motion.div>

        {/* Grid of Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {capabilities.map((c, i) => (
            <Motion.div
              key={c.n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(99, 102, 241, 0.7)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Pattern */}
              {i === 0 ? (
                <img 
                  src="/DefenseSimulationTrainingSystems/differentiation_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                />
              ) : (
                <img 
                  src="/DefenseSimulationTrainingSystems/differentiation_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 lg:hidden scale-x-[-1]" 
                />
              )}

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                <c.icon size={26} className="text-[#FCCA71]" weight="light" />
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                  {c.t}
                </h4>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[20px] text-left max-w-full">
                  {c.d}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <Motion.div
            {...reveal(10)}
            className="border border-dashed border-[#877BF1] p-5 md:p-6 font-mono text-[12px] tracking-wide text-[#E7E6FC] leading-relaxed bg-[rgba(135,123,241,0.06)] rounded-[8px]"
          >
            <span className="text-[#FCCA71] uppercase tracking-widest font-semibold block mb-1">
              iot signals
            </span>
            temperature · pressure · energy · water · traffic · air_quality · equipment_health · weather · occupancy
          </Motion.div>
          <Motion.div
            {...reveal(11)}
            className="border border-dashed border-[#877BF1] p-5 md:p-6 font-mono text-[12px] tracking-wide text-[#E7E6FC] leading-relaxed bg-[rgba(135,123,241,0.06)] rounded-[8px]"
          >
            <span className="text-[#FCCA71] uppercase tracking-widest font-semibold block mb-1">
              simulate scenarios
            </span>
            road_closures · flood_events · emergency_response · traffic_diversions · infrastructure_expansion · utility_failures · population_growth
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulationDigitalTwinCapabilities;
