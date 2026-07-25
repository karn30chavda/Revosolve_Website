import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";

const PHASE_LABELS = [
  "01 · BEFORE — Operational Chaos",
  "02 · IN PROGRESS — Engineering Connections",
  "03 · AFTER — Connected Operations",
];

const PHASE_TEXTS = [
  "Fragmented departments. Disconnected data. Manual coordination that consumes more energy than execution itself.",
  "We identify the operational pathways where connection unlocks compounding value — and engineer that connective architecture.",
  "Information flows. Approvals accelerate. AI becomes practical. Technology investments finally generate measurable business outcomes.",
];

// Phase 1: Truly randomized scattered dots inside the box canvas
const CHAOS_DOTS = [
  { x: 16, y: 18 }, { x: 70, y: 22 }, { x: 38, y: 78 },
  { x: 84, y: 48 }, { x: 26, y: 54 }, { x: 62, y: 82 },
  { x: 14, y: 68 }, { x: 86, y: 84 }, { x: 42, y: 32 },
  { x: 66, y: 16 }, { x: 52, y: 62 }, { x: 30, y: 22 }
];

// Phase 2 & 3: Clean, balanced 3x4 Matrix Nodes (0-3 top, 4-7 mid, 8-11 bot)
const MATRIX_NODES = [
  { x: 20, y: 25 }, { x: 40, y: 25 }, { x: 60, y: 25 }, { x: 80, y: 25 },
  { x: 20, y: 50 }, { x: 40, y: 50 }, { x: 60, y: 50 }, { x: 80, y: 50 },
  { x: 20, y: 75 }, { x: 40, y: 75 }, { x: 60, y: 75 }, { x: 80, y: 75 }
];

// Phase 3: Exact fan-out ray network from screenshot
// Top row: 0, 1, 2, 3
// Mid row: 4, 5, 6, 7
// Bot row: 8, 9, 10, 11
const CONNECTIONS = [
  // Upper fan-out connections from mid-row nodes to top-row nodes
  { from: 4, to: 1 }, { from: 4, to: 2 }, { from: 4, to: 3 },
  { from: 5, to: 2 }, { from: 5, to: 3 },
  { from: 6, to: 3 },

  // Lower fan-out connections from bot-row nodes to mid-row nodes
  { from: 8, to: 5 }, { from: 8, to: 6 }, { from: 8, to: 7 },
  { from: 9, to: 6 }, { from: 9, to: 7 },
  { from: 10, to: 7 }
];

const MorphingDot = ({ startDot, targetNode, t, idx }) => {
  const x = useTransform(t, [0, 0.35, 0.7], [startDot.x, startDot.x, targetNode.x]);
  const y = useTransform(t, [0, 0.35, 0.7], [startDot.y, startDot.y, targetNode.y]);
  const dotColor = useTransform(t, [0, 0.35, 0.7], ["#FF7A7A", "#FFB27A", "#FCCA71"]);
  const leftPos = useTransform(x, (v) => `${v}%`);
  const topPos = useTransform(y, (v) => `${v}%`);

  return (
    <Motion.div
      style={{
        left: leftPos,
        top: topPos,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <Motion.div
        style={{ backgroundColor: dotColor }}
        className="w-3.5 h-3.5 rounded-full shadow-[0_0_12px_rgba(252,202,113,0.8)] relative"
      >
        <Motion.div
          style={{ backgroundColor: dotColor }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.08 }}
          className="absolute inset-0 rounded-full"
        />
      </Motion.div>
    </Motion.div>
  );
};

const PhaseProgress = ({ t }) => {
  const p1 = useTransform(t, [0, 0.33], [0.2, 1]);
  const p2 = useTransform(t, [0.33, 0.66], [0.2, 1]);
  const p3 = useTransform(t, [0.66, 1], [0.2, 1]);

  return (
    <div className="flex items-center gap-1.5">
      <Motion.div style={{ opacity: p1 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
      <Motion.div style={{ opacity: p2 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
      <Motion.div style={{ opacity: p3 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
    </div>
  );
};

export const HowWeThinkAboutTransformation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const t = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  // Phase Opacities for Left Paragraphs & Top Phase Label
  const p1 = useTransform(t, [0, 0.3, 0.38], [1, 1, 0]);
  const p2 = useTransform(t, [0.35, 0.42, 0.65, 0.72], [0, 1, 1, 0]);
  const p3 = useTransform(t, [0.68, 0.75, 1], [0, 1, 1]);

  // SVG lines draw opacity (Starts connecting in Phase 3)
  const lineOpacity = useTransform(t, [0.65, 0.8], [0, 1]);

  // Canvas progress bar width
  const canvasProgressWidth = useTransform(t, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative h-[220vh] font-sans -mt-14 min-[1290px]:-mt-24"
      data-testid="sticky-transformation"
    >
      <div className="sticky top-12 h-[calc(100vh-48px)] flex items-center overflow-hidden">
        <div className="w-[85%] max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 min-[1290px]:grid-cols-12 gap-8 min-[1290px]:gap-12 items-center">
            
            {/* Left Column: Fixed Headline + Dynamic Morphing Paragraph Text */}
            <div className="min-[1290px]:col-span-5 flex flex-col gap-4">
              
              {/* Bracketed section tag */}
              <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
                [how we think about transformation]
              </div>

              {/* Main Headline (FIXED - Never changes across phases) */}
              <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
                <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Not the implementation of software.{" "}
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  The redesign of work.
                </span>
              </h2>

              {/* Morphing Paragraph Content Below Title */}
              <div className="relative min-h-27.5 mt-2">
                <Motion.p
                  style={{ opacity: p1 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg"
                >
                  {PHASE_TEXTS[0]}
                </Motion.p>
                <Motion.p
                  style={{ opacity: p2 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg"
                >
                  {PHASE_TEXTS[1]}
                </Motion.p>
                <Motion.p
                  style={{ opacity: p3 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg"
                >
                  {PHASE_TEXTS[2]}
                </Motion.p>
              </div>
            </div>

            {/* Right Column: Top Phase Label Bar + 3-Phase Morphing Animation Canvas */}
            <div className="min-[1290px]:col-span-7 flex flex-col gap-6 items-center min-[1290px]:items-start">
              
              {/* Top Phase Header Bar (Aligned with animation box) */}
              <div className="w-full max-w-140 mx-auto flex justify-between items-center px-1 relative h-6">
                <div className="relative">
                  <Motion.span
                    style={{ opacity: p1 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[0]}
                  </Motion.span>
                  <Motion.span
                    style={{ opacity: p2 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[1]}
                  </Motion.span>
                  <Motion.span
                    style={{ opacity: p3 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[2]}
                  </Motion.span>
                </div>
                <PhaseProgress t={t} />
              </div>

              {/* Visualization Canvas Box */}
              <div className="relative w-full max-w-125 mx-auto aspect-16/8.5 rounded-2xl border border-[rgba(135,123,241,0.25)] bg-[#07092b]/60 backdrop-blur-xl overflow-hidden p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-1">
                
                {/* Background Grid Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15" 
                  style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", 
                    backgroundSize: "32px 32px" 
                  }} 
                />

                {/* SVG Connections (Phase 3: Clean connected network) */}
                <Motion.svg
                  style={{ opacity: lineOpacity }}
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  {CONNECTIONS.map((conn, idx) => {
                    const fromNode = MATRIX_NODES[conn.from];
                    const toNode = MATRIX_NODES[conn.to];
                    return (
                      <line
                        key={`conn-${idx}`}
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke="#FCCA71"
                        strokeOpacity="0.45"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </Motion.svg>

                {/* 12 Morphing Dots */}
                {CHAOS_DOTS.map((startDot, idx) => (
                  <MorphingDot
                    key={idx}
                    startDot={startDot}
                    targetNode={MATRIX_NODES[idx] || MATRIX_NODES[0]}
                    t={t}
                    idx={idx}
                  />
                ))}

                {/* Bottom Canvas Progress Bar */}
                <div className="absolute bottom-4 left-6 right-6 h-1 rounded-full bg-white/10 overflow-hidden">
                  <Motion.div
                    style={{ width: canvasProgressWidth }}
                    className="h-full bg-linear-to-r from-[#877BF1] via-[#e28eff] to-[#FCCA71]"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HowWeThinkAboutTransformation;
