import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const techCats = [
  {
    cat: "GIS & Mapping",
    items: [
      { name: "ArcGIS" },
      { name: "QGIS" },
      { name: "CesiumJS" },
      { name: "Mapbox" },
    ],
  },
  {
    cat: "3D & Visualization",
    items: [
      { name: "Unity" },
      { name: "Unreal Engine" },
      { name: "NVIDIA Omniverse" },
      { name: "WebGL" },
    ],
  },
  {
    cat: "IoT & Telemetry",
    items: [
      { name: "MQTT" },
      { name: "Azure IoT Hub" },
      { name: "AWS IoT Core" },
      { name: "SCADA Integration" },
    ],
  },
  {
    cat: "Data & Streaming",
    items: [
      { name: "Apache Kafka" },
      { name: "PostgreSQL" },
      { name: "TimescaleDB" },
      { name: "InfluxDB" },
    ],
  },
  {
    cat: "AI & Simulation",
    items: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Predictive Models" },
    ],
  },
  {
    cat: "Cloud & APIs",
    items: [
      { name: "Microsoft Azure" },
      { name: "AWS" },
      { name: "REST APIs" },
      { name: "WebSockets" },
    ],
  },
];

const TechCard = ({ item }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(39, 41, 69, 1)",
        borderColor: "rgba(95, 95, 255, 1)"
      }}
      style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
      className="flex items-center justify-center rounded-xl border-2 cursor-pointer transition-all duration-300 min-h-[64px] md:min-h-[76px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-18px)] max-w-[190px] xl:max-w-none p-2.5 sm:p-3"
    >
      <span className="text-[#E7E6FC] text-center text-xs md:text-sm font-semibold select-none px-1 leading-tight line-clamp-2">
        {item.name}
      </span>
    </Motion.div>
  );
};

const SimulationDigitalTwinTechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20 font-sans">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-center justify-center gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full text-center pb-4">
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [technology stack]
          </span>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-center font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              The Digital Twin
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Toolchain
            </span>
          </h2>
        </div>

        {/* Tabs Control Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full pb-6 font-mono">
          {techCats.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#FCCA71] border-[#FCCA71] text-[#01031c] shadow-lg shadow-[#FCCA71]/25 font-bold"
                    : "bg-white/5 border-white/10 text-[#AAA9BE] hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.cat}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Panel */}
        <div className="w-full relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full relative z-10"
            >
              {techCats[activeTab].items.map((item, idx) => (
                <TechCard key={idx} item={item} />
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SimulationDigitalTwinTechStack;
