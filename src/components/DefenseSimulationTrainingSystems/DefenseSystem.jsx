import React from "react";
import { motion as Motion } from "framer-motion";
import {
  VirtualReality,
  SelectionPlus,
  Intersect,
  GlobeHemisphereWest,
  Brain,
  Shuffle,
  Sliders,
  ChartLineUp,
  Target,
} from "@phosphor-icons/react";

const ingredients = [
  [VirtualReality, "Virtual Reality"],
  [SelectionPlus, "Augmented Reality"],
  [Intersect, "Mixed Reality"],
  [GlobeHemisphereWest, "Digital Twin"],
  [Brain, "AI"],
  [Shuffle, "Scenario Engine"],
  [Sliders, "Instructor Controls"],
  [ChartLineUp, "Performance Analytics"],
];

const DefenseSystem = () => {
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
            <span className="text-white text-lg font-normal font-sans tracking-tight">[ </span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
              The RevoSolve System
            </span>
            <span className="text-white text-lg font-normal font-sans tracking-tight"> ]</span>
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
              Immersive training
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              designed around operational readiness
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#CACBDB] text-[15.5px] md:text-[16.5px] leading-relaxed">
            Defense Simulation & Training Systems create highly realistic,
            interactive environments where personnel safely practice procedures,
            rehearse missions, and respond to complex operational scenarios.
          </p>

          {/* Monospace trio lines */}
          <div className="font-mono flex flex-col gap-2 text-[13px] tracking-wide leading-loose text-[#CACBDB]">
            <span>
              Every scenario becomes{" "}
              <span className="text-[#A9A0F5] font-semibold">measurable</span>.
            </span>
            <span>
              Every trainee becomes{" "}
              <span className="text-[#A9A0F5] font-semibold">trackable</span>.
            </span>
            <span>
              Every exercise becomes{" "}
              <span className="text-[#A9A0F5] font-semibold">repeatable</span>.
            </span>
          </div>
        </Motion.div>

        {/* RIGHT: Convergence ecosystem map panel */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="border border-[rgba(135,123,241,0.18)] bg-linear-to-br from-[rgba(18,20,62,0.7)] to-[rgba(10,11,40,0.7)] p-6 md:p-9 rounded-[8px] lg:mt-[56px]"
        >
          {/* Header */}
          <div className="font-mono flex justify-between items-center text-[10.5px] tracking-[0.14em] uppercase text-[#5C5F85] mb-5">
            <span>training_ecosystem.map</span>
            <span className="text-[#A9A0F5]">● integrated</span>
          </div>

          {/* 4×2 Ingredient Grid */}
          <div className="grid grid-cols-4 gap-2 mb-0">
            {ingredients.map(([Icon, t]) => {
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
            <Target size={19} color="#FCCA71" />
            One integrated training ecosystem
          </div>
        </Motion.div>

      </div>
    </section>
  );
};

export default DefenseSystem;
