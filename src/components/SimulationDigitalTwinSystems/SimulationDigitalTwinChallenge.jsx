import React from "react";
import { motion as Motion } from "framer-motion";
import {
  MapTrifold,
  Broadcast,
  VideoCamera,
  AirplaneTilt,
  Buildings,
  Wrench,
  CloudSun,
  TrafficSignal,
  WaveSine,
  ClipboardText,
  ClockCountdown,
  ArrowCounterClockwise,
  TrendUp,
  Siren,
  PuzzlePiece,
  Warning,
  CheckCircle,
} from "@phosphor-icons/react";

const sources = [
  [MapTrifold, "GIS"],
  [Broadcast, "IoT Sensors"],
  [VideoCamera, "CCTV"],
  [AirplaneTilt, "Drone Surveys"],
  [Buildings, "ERP"],
  [Wrench, "Asset Systems"],
  [CloudSun, "Weather"],
  [TrafficSignal, "Traffic"],
  [WaveSine, "Telemetry"],
  [ClipboardText, "Field Inspections"],
];

const consequences = [
  [ClockCountdown, "Critical events are identified late."],
  [ArrowCounterClockwise, "Infrastructure planning becomes reactive."],
  [TrendUp, "Maintenance costs increase."],
  [Siren, "Emergency response slows."],
  [PuzzlePiece, "Operational decisions depend on fragmented information."],
];

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -6% 0px" },
  transition: {
    duration: 0.55,
    delay: (i % 4) * 0.05,
    ease: [0.2, 0.7, 0.2, 1],
  },
});

const SimulationDigitalTwinChallenge = () => {
  return (
    <section
      id="challenge"
      className="relative w-full pt-16 pb-16 md:pt-24 md:pb-24 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Column: Eyebrow, Heading, Description, Chip Cloud */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          
          {/* Eyebrow */}
          <div>
            {/* Desktop Pill */}
            <div className="hidden min-[1290px]:block opacity-35 justify-start mb-4">
              <span className="text-white text-lg font-normal tracking-tight">[</span>
              <span className="text-white text-lg font-normal uppercase tracking-[0.12em]">the operational challenge</span>
              <span className="text-white text-lg font-normal tracking-tight">]</span>
            </div>

            {/* Mobile Styled Glassmorphic Solutions Badge */}
            <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-4 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
              <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
                the operational challenge
              </span>
            </div>
            
            <h2 className="text-[24px] md:text-[32px] xl:text-[38px] leading-tight font-bold tracking-tight text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
                Organizations have data.
              </span>{" "}
              <span className="text-[#CACBDB] font-light">
                They don't have operational visibility.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4 text-[#CACBDB] text-base md:text-[17px] leading-relaxed">
            <p>
              Modern infrastructure generates enormous amounts of information — yet it exists in disconnected systems. Leadership gets reports. Operations gets alerts. Field teams collect data.{" "}
              <span className="text-white font-semibold">
                Nobody sees the complete operational picture.
              </span>
            </p>
          </div>

          {/* Chip Cloud */}
          <Motion.div
            {...reveal(1)}
            className="flex flex-wrap gap-2 items-center"
          >
            {sources.map(([SrcIcon, t]) => {
              const Icon = SrcIcon;
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 border border-dashed border-[rgba(135,123,241,0.45)] bg-[#0A0B28] px-3.5 py-2.5 font-mono text-[11.5px] tracking-wider uppercase text-[#E7E8F4]"
                >
                  <Icon size={16} className="text-[#FCCA71]" />
                  <span>{t}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse" />
                </span>
              );
            })}
            <span className="inline-flex items-center font-mono text-[11px] tracking-widest text-[#FCCA71] uppercase px-1 py-2">
              — 10 systems, zero shared context
            </span>
          </Motion.div>

          {/* Bottom Callout Text */}
          <Motion.div
            {...reveal(2)}
            className="w-full mt-4"
          >
            <p className="font-semibold text-[19px] md:text-[24px] leading-snug text-white">
              Organizations don't need another dashboard. They need a living digital representation of{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                how operations behave.
              </span>
            </p>
          </Motion.div>
        </div>

        {/* Right Column: Log console with consequences */}
        <div className="lg:col-span-5 w-full lg:pt-[105px]">
          <Motion.div
            {...reveal(3)}
            className="border border-[rgba(252,202,113,0.25)] bg-[#0A0B28] rounded-[16px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] w-full max-w-[460px] mx-auto lg:mx-0"
          >
            {/* Log Header */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[rgba(135,123,241,0.18)] font-mono text-[11px] tracking-widest text-white/50 uppercase">
              <Warning size={15} className="text-[#FCCA71]" />
              <span>without_a_unified_model.log</span>
            </div>

            {/* Log list */}
            <div className="flex flex-col">
              {consequences.map(([SrcIcon, t]) => {
                const Icon = SrcIcon;
                return (
                  <div
                    key={t}
                    className="grid grid-cols-[auto_auto_1fr] gap-[14px] items-start p-4 sm:p-5 border-b border-[rgba(135,123,241,0.18)] hover:bg-white/1 transition-colors"
                  >
                    <span className="font-mono text-[10.5px] tracking-wider text-[#FCCA71] border border-[rgba(252,202,113,0.35)] px-1.5 py-0.5 bg-[rgba(252,202,113,0.07)] uppercase font-semibold shrink-0">
                      WARN
                    </span>
                    <Icon size={19} className="text-white/60 mt-0.5 shrink-0" />
                    <p className="text-white/95 text-[13.5px] sm:text-[14px] leading-relaxed font-sans font-normal">
                      {t}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Log Footer / Resolution */}
            <div className="flex items-center gap-2.5 px-5 py-4 font-mono text-[10.5px] tracking-widest uppercase bg-[#050726]">
              <CheckCircle size={16} className="text-[#FCCA71]" />
              <span className="text-[#FCCA71] font-bold">
                resolution: a living digital representation of operations
              </span>
            </div>
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default SimulationDigitalTwinChallenge;
