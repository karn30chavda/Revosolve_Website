import React from "react";
import { motion as Motion } from "framer-motion";
import {
  CubeTransparent,
  MapTrifold,
  Broadcast,
  Brain,
  VideoCamera,
  Buildings,
  Shuffle,
  ChartLineUp,
  GlobeHemisphereWest,
} from "@phosphor-icons/react";

const ingredients = [
  [CubeTransparent, "3D Visualization"],
  [MapTrifold, "GIS"],
  [Broadcast, "IoT Sensors"],
  [Brain, "AI"],
  [VideoCamera, "Computer Vision"],
  [Buildings, "Enterprise Data"],
  [Shuffle, "Workflows"],
  [ChartLineUp, "Predictive Analytics"],
];

const SimulationDigitalTwinSystem = () => {
  return (
    <section
      id="system"
      className="relative w-full pt-10 pb-20 md:pt-16 md:pb-32 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      <style>{`
        @keyframes dstFlowStreak {
          0%   { top: -10px; opacity: 0; }
          5%   { opacity: 1; }
          30%  { opacity: 1; }
          35%  { top: 100%; opacity: 0; }
          35.1%, 100% { top: -10px; opacity: 0; }
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT: Tag + Title + Description + Trio lines */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6"
        >
          {/* Desktop bracket tag */}
          <div className="hidden min-[1290px]:block opacity-30">
            <span className="text-white text-lg font-normal tracking-tight">[ </span>
            <span className="text-white text-lg font-normal uppercase tracking-tight">
              The RevoSolve System
            </span>
            <span className="text-white text-lg font-normal tracking-tight"> ]</span>
          </div>

          {/* Mobile pill tag */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              The RevoSolve System
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              A living digital model
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              of your operations
            </span>
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-4 text-[#CACBDB] text-[15.5px] md:text-[16.5px] leading-relaxed">
            <p>
              Simulation & Digital Twin Systems combine 3D visualization, GIS, IoT, AI, computer vision, enterprise data, operational workflows, and predictive analytics into one intelligent operational platform.
            </p>
            <p className="text-[#8F92B8]">
              Instead of monitoring individual systems, organizations understand how the entire operational environment behaves.
            </p>
          </div>

          {/* Monospace trio lines */}
          <div className="font-mono flex flex-col gap-2 text-[13px] tracking-wide leading-loose text-[#CACBDB]">
            <span>
              Every sensor. Every asset. Every <span className="text-[#A9A0F5] font-semibold">building</span>.
            </span>
            <span>
              Every vehicle. Every pipeline. Every <span className="text-[#A9A0F5] font-semibold">operation</span>.
            </span>
            <span>
              Connected. Visualized. Continuously <span className="text-[#A9A0F5] font-semibold">updated</span>.
            </span>
          </div>
        </Motion.div>

        {/* RIGHT: Convergence ecosystem map panel */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="border border-[rgba(135,123,241,0.18)] bg-linear-to-br from-[rgba(18,20,62,0.7)] to-[rgba(10,11,40,0.7)] p-6 md:p-9 rounded-[8px] lg:mt-[86px]"
        >
          {/* Header */}
          <div className="font-mono flex justify-between items-center text-[10.5px] tracking-[0.14em] uppercase text-[#5C5F85] mb-5">
            <span>twin_composition.map</span>
            <span className="text-[#A9A0F5]">● synchronized</span>
          </div>

          {/* 4×2 Ingredient Grid */}
          <div className="grid grid-cols-4 gap-2 mb-0">
            {ingredients.map(([SrcIcon, t]) => {
              const Icon = SrcIcon;
              return (
                <div
                  key={t}
                  className="p-3 text-center flex flex-col items-center gap-1.5 border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] hover:border-[rgba(252,202,113,0.5)] hover:bg-[rgba(252,202,113,0.03)] transition-all duration-300"
                >
                  <Icon
                    size={19}
                    color="#FCCA71"
                  />
                  <div
                    className="font-mono text-[8.5px] tracking-wide uppercase leading-tight text-[#FBFBFF]"
                  >
                    {t}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flowing dots — 4 columns, one per grid column */}
          <div className="grid grid-cols-4 gap-2 h-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative flex justify-center overflow-hidden">
                {/* Static track */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(252,202,113,0.15)]" />
                {/* Flowing golden dot */}
                <span
                  style={{
                    position: "absolute",
                    left: "calc(50% - 3px)",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#FCCA71",
                    boxShadow: "0 0 10px #FCCA71, 0 0 20px rgba(252,202,113,0.4)",
                    animation: "dstFlowStreak 5.5s linear infinite",
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Unified platform badge */}
          <div
            className="font-mono flex items-center justify-center gap-3 p-4 text-[12px] tracking-wide uppercase text-[#FBFBFF] border border-[rgba(135,123,241,0.25)] bg-[rgba(135,123,241,0.06)]"
          >
            <GlobeHemisphereWest size={19} color="#FCCA71" />
            One intelligent operational platform
          </div>
        </Motion.div>

        {/* CSS workaround for no bg or border on component request earlier if applicable, but this section matches DefenseSystem style layout */}

      </div>
    </section>
  );
};

export default SimulationDigitalTwinSystem;
