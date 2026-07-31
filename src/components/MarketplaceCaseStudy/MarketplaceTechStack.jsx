import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ShoppingBag,
  Cube,
  BracketsCurly,
  ChatsCircle,
  Cloud,
} from "@phosphor-icons/react";

const stack = [
  { cat: "Commerce", name: "Shopify", Icon: ShoppingBag },
  { cat: "Operating system", name: "ERPNext", Icon: Cube },
  { cat: "Framework", name: "Frappe", Icon: BracketsCurly },
  { cat: "Messaging", name: "Gupshup", Icon: ChatsCircle },
  { cat: "Infrastructure", name: "Frappe Cloud", Icon: Cloud },
];

/** 4 Cardinal Satellites around ERPNext Core */
const satellites = [
  { cat: "Commerce", name: "Shopify", Icon: ShoppingBag, angle: -90, left: "50%", top: "12%", dur: "3.6s", delay: "0s" },
  { cat: "Framework", name: "Frappe", Icon: BracketsCurly, angle: 0, left: "88%", top: "50%", dur: "4.3s", delay: "0.9s" },
  { cat: "Messaging", name: "Gupshup", Icon: ChatsCircle, angle: 90, left: "50%", top: "88%", dur: "5.0s", delay: "1.8s" },
  { cat: "Infrastructure", name: "Frappe Cloud", Icon: Cloud, angle: 180, left: "12%", top: "50%", dur: "5.7s", delay: "2.7s" },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceTechStack = () => (
  <section className="relative w-full overflow-hidden bg-[#01031c] py-12 lg:py-16 font-sans">
    <style>{`
      @keyframes mkRadarSpin {
        0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
        50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
        100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
      }
      @keyframes mkOrbit {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes mkOrbitRev {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes mkInbound {
        0% { left: 100%; opacity: 0; }
        15% { opacity: 1; }
        45% { opacity: 1; }
        50% { left: 42%; opacity: 0; }
        100% { left: 42%; opacity: 0; }
      }
      @keyframes mkRipple {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(1.6); opacity: 0; }
      }
      @keyframes mkDotBlink {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
    `}</style>

    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-2">
        {/* Left Column: Title & Component List */}
        <div>
          <div className="mb-2 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
            [technology foundation]
          </div>

          <Motion.h2
            {...reveal}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-[-0.03em] max-w-xl mb-4"
          >
            <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              The stack behind the,
            </span>{" "}
            <br />
            <span className="font-light text-white/90">
              operating system
            </span>
          </Motion.h2>

          <Motion.p
            {...reveal}
            className="mb-6 lg:mb-8 max-w-md text-sm sm:text-base leading-relaxed text-[#AAA9BE]"
          >
            Five components, one control plane.
          </Motion.p>

          <div className="flex flex-col border-b border-white/10">
            {stack.map((item) => {
              const StackIcon = item.Icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-4 border-t border-white/10 px-1 py-3.5"
                >
                  <StackIcon size={20} weight="light" className="shrink-0 text-[#FCCA71]" />
                  <span className="w-32.5 shrink-0 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE]">
                    {item.cat}
                  </span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-[#FBFBFF]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Orbital Control Plane Diagram */}
        <Motion.div
          {...reveal}
          className="flex flex-col items-center gap-2 relative pt-8 sm:pt-10 lg:pt-0 pointer-events-none lg:pointer-events-auto"
          style={{ touchAction: "pan-y" }}
        >
          <div
            className="relative aspect-square w-full max-w-72 sm:max-w-85 md:max-w-115 mt-6 sm:mt-8 lg:mt-2 pointer-events-none lg:pointer-events-auto"
            style={{ touchAction: "pan-y" }}
          >
            {/* Dynamic Rotating Conic Radar Sweep BG */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 sm:h-90 sm:w-90 md:h-110 md:w-110 rounded-full opacity-25 blur-3xl overflow-hidden"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(252,202,113,0.5) 0deg, rgba(135,123,241,0.4) 120deg, rgba(1,3,28,0) 240deg, rgba(252,202,113,0.5) 360deg)",
                animation: "mkRadarSpin 18s linear infinite",
              }}
            />

            {/* Orbit Rings */}
            <div className="absolute inset-[12%] rounded-full border border-white/10 pointer-events-none" />
            <div
              className="absolute inset-[26%] rounded-full border border-dashed border-[#877BF1]/25 pointer-events-none"
              style={{ animation: "mkOrbitRev 45s linear infinite" }}
            />
            <div
              className="absolute inset-[12%] rounded-full pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(252,202,113,0.18), transparent 22%, transparent 78%, rgba(135,123,241,0.18))",
                animation: "mkOrbit 22s linear infinite",
              }}
            />

            {/* Spoke Lines Radiating to Satellites */}
            {satellites.map((o) => (
              <div
                key={`spoke-${o.name}`}
                className="absolute left-1/2 top-1/2 h-px w-[38%] origin-[0_50%] pointer-events-none"
                style={{
                  transform: `rotate(${o.angle}deg)`,
                  background:
                    "linear-gradient(90deg, rgba(252,202,113,0.6), rgba(135,123,241,0.2))",
                }}
              >
                {/* Inward Moving Packet Dot */}
                <span
                  className="absolute -top-1 h-2 w-2 rounded-full bg-[#FCCA71]"
                  style={{
                    boxShadow: "0 0 10px #FCCA71, 0 0 4px #877BF1",
                    animation: `mkInbound ${o.dur} linear infinite`,
                    animationDelay: o.delay,
                  }}
                />
              </div>
            ))}

            {/* Core ERPNext Control Plane */}
            <div
              className="absolute left-1/2 top-1/2 z-20 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-[#FCCA71]/40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(252,202,113,0.28), rgba(1,3,28,0.95) 70%)",
                boxShadow: "0 0 60px rgba(252,202,113,0.25)",
              }}
            >
              {/* Core Pulse Ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#FCCA71]/50 pointer-events-none"
                style={{ animation: "mkRipple 3.5s ease-out infinite" }}
              />

              <Cube size={20} weight="light" className="text-[#FCCA71] sm:hidden" />
              <Cube size={26} weight="light" className="text-[#FCCA71] hidden sm:block" />
              <span className="text-xs sm:text-base md:text-lg font-black tracking-tight text-white">
                ERPNext
              </span>
              <span className="text-[7px] sm:text-[8px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE]">
                control plane
              </span>
            </div>

            {/* Satellites - Non-Conflicting Absolute Cardinal Directional Positioning */}
            {satellites.map((sat) => {
              const NodeIcon = sat.Icon;
              return (
                <div
                  key={sat.name}
                  className="absolute z-30 pointer-events-none"
                  style={{ left: sat.left, top: sat.top }}
                >
                  {/* Icon Circle */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 flex h-9 sm:h-12 w-9 sm:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#01031c]/95 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-110 touch-pan-y"
                    style={{ boxShadow: "0 0 16px rgba(135,123,241,0.4)" }}
                  >
                    <NodeIcon size={16} weight="light" className="text-[#FBFBFF] sm:hidden" />
                    <NodeIcon size={20} weight="light" className="text-[#FBFBFF] hidden sm:block" />
                  </div>

                  {/* Top Node (Shopify at -90deg): Text sits 8px ABOVE icon circle */}
                  {sat.angle === -90 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex w-36 flex-col items-center text-center whitespace-nowrap">
                      <span className="text-xs font-semibold tracking-tight text-white leading-tight">
                        {sat.name}
                      </span>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE] leading-tight mt-0.5">
                        {sat.cat}
                      </span>
                    </div>
                  )}

                  {/* Bottom Node (Gupshup at 90deg): Text sits 8px BELOW icon circle */}
                  {sat.angle === 90 && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex w-36 flex-col items-center text-center whitespace-nowrap">
                      <span className="text-xs font-semibold tracking-tight text-white leading-tight">
                        {sat.name}
                      </span>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE] leading-tight mt-0.5">
                        {sat.cat}
                      </span>
                    </div>
                  )}

                  {/* Left Node (Frappe Cloud at 180deg): Text sits 8px to the LEFT of icon circle */}
                  {sat.angle === 180 && (
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex w-36 flex-col items-end text-right whitespace-nowrap">
                      <span className="text-xs font-semibold tracking-tight text-white leading-tight">
                        {sat.name}
                      </span>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE] leading-tight mt-0.5">
                        {sat.cat}
                      </span>
                    </div>
                  )}

                  {/* Right Node (Frappe at 0deg): Text sits 8px to the RIGHT of icon circle */}
                  {sat.angle === 0 && (
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 flex w-36 flex-col items-start text-left whitespace-nowrap">
                      <span className="text-xs font-semibold tracking-tight text-white leading-tight">
                        {sat.name}
                      </span>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE] leading-tight mt-0.5">
                        {sat.cat}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Indicator Badge: Mobile = centered below animation with top space, Desktop = top-right overlay */}
          <div className="mt-8 sm:mt-10 lg:mt-0 lg:absolute lg:-top-6 lg:right-0 z-40 flex items-center justify-center gap-2.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#FCCA71]"
              style={{
                boxShadow: "0 0 8px #FCCA71",
                animation: "mkDotBlink 2s ease-in-out infinite",
              }}
            />
            <span>five systems · one control plane</span>
          </div>
        </Motion.div>
      </div>
    </div>
  </section>
);

export default MarketplaceTechStack;
