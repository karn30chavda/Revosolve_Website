import React from "react";
import { motion as Motion } from "framer-motion";
import {
  MapTrifold,
  MagnifyingGlass,
  NotePencil,
  Cube,
  GearSix,
  PlugsConnected,
  Handshake,
  ChartLineUp,
} from "@phosphor-icons/react";

const steps = [
  { label: "Mapped operations", Icon: MapTrifold },
  { label: "Identified manual work", Icon: MagnifyingGlass },
  { label: "Designed future workflows", Icon: NotePencil },
  { label: "Selected ERPNext", Icon: Cube },
  { label: "Automated processes", Icon: GearSix },
  { label: "Integrated Shopify", Icon: PlugsConnected },
  { label: "Connected vendors", Icon: Handshake },
  { label: "Enabled analytics", Icon: ChartLineUp },
];

const PHASES = ["discovery", "design", "build", "operate"];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceMethod = () => (
  <section className="relative w-full overflow-hidden bg-[#01031c] pt-6 pb-16 lg:pt-8 lg:pb-24 font-sans touch-pan-y" style={{ touchAction: "pan-y" }}>
    <style>{`
      .scrollbar-none::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .scrollbar-none {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
      @keyframes mkFlowDot {
        0% { left: 0%; opacity: 0; }
        5% { opacity: 1; }
        95% { opacity: 1; }
        100% { left: 100%; opacity: 0; }
      }
      @keyframes mkNodeGlow {
        0%, 100% { border-color: rgba(252,202,113,0.35); box-shadow: 0 0 6px rgba(252,202,113,0.15); }
        50% { border-color: rgba(252,202,113,0.9); box-shadow: 0 0 16px rgba(252,202,113,0.5); }
      }
    `}</style>

    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="mb-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
        [how we re-engineered operations]
      </div>

      <Motion.h2
        {...reveal}
        className="mb-10 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-[-0.03em]"
      >
        <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
          From understanding the business
        </span>
        <br />
        <span className="font-light text-white/90">
          to automating it
        </span>
      </Motion.h2>

      {/* Mobile View: Vertical Step Grid (Zero Horizontal Scroll) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden mb-6">
        {steps.map((step, i) => {
          const StepIcon = step.Icon;
          return (
            <div
              key={step.label}
              className="rounded-xl border border-white/10 bg-white/4 p-4 flex flex-col items-start gap-2.5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-2xl font-black font-sans bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FCCA71]/10 border border-[#FCCA71]/20">
                  <StepIcon size={16} weight="light" className="text-[#FCCA71]" />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#FBFBFF] leading-snug">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop View: Blueprint rail */}
      <div className="hidden lg:block overflow-x-auto pb-3 scrollbar-none">
        <div className="relative h-80 min-w-270">
          {/* Spine + left-to-right flowing dots (clipped container) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-4 overflow-hidden pointer-events-none">
            <div
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(72,76,255,0.15), rgba(72,76,255,0.7) 20%, rgba(135,123,241,0.7) 55%, #FCCA71 92%)",
              }}
            />
            {[0, 6].map((delay, idx) => (
              <span
                key={idx}
                className="absolute top-1/2 -translate-y-1/2 h-1.25 w-1.25 -translate-x-1/2 rounded-full bg-[#FCCA71]"
                style={{
                  boxShadow: "0 0 8px #FCCA71",
                  animation: "mkFlowDot 12s linear infinite",
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>

          {steps.map((step, i) => {
            const above = i % 2 === 0;
            return (
              <div
                key={step.label}
                className="absolute bottom-0 top-0 w-37.5 -translate-x-1/2"
                style={{ left: `${(((i + 0.5) / steps.length) * 100).toFixed(2)}%` }}
              >
                {/* Diamond node */}
                <div
                  className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#FCCA71]/55 bg-[#01031c]"
                  style={{
                    animation: "mkNodeGlow 3.6s ease-in-out infinite",
                    animationDelay: `${(i * 0.4).toFixed(2)}s`,
                  }}
                />
                {/* Tick */}
                <div
                  className="absolute left-1/2 h-8 w-px"
                  style={{
                    top: above ? "128px" : "160px",
                    background:
                      "linear-gradient(180deg, rgba(251,251,255,0.28), rgba(251,251,255,0.06))",
                  }}
                />
                {/* Label */}
                <div
                  className="absolute left-0 right-0 text-center"
                  style={{ top: above ? "14px" : "196px" }}
                >
                  <div className="text-[34px] font-thin leading-none text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <step.Icon size={22} weight="light" className="mx-auto my-2.5 text-[#FCCA71]" />
                  <div className="text-sm font-semibold leading-snug tracking-tight text-[#FBFBFF]">
                    {step.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-5 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#AAA9BE]">
        {PHASES.map((p) => (
          <span key={p}>[{p}]</span>
        ))}
      </div>
    </div>
  </section>
);

export default MarketplaceMethod;
