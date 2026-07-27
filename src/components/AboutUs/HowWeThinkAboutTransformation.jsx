import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

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

// Phase 1: Dots arranged in pairs - each pair horizontal, equally spaced diagonally
const CHAOS_DOTS = [
  { x: 8, y: 10 }, { x: 10, y: 7 },
  { x: 24, y: 26 }, { x: 26, y: 23 },
  { x: 40, y: 42 }, { x: 42, y: 39 },
  { x: 56, y: 58 }, { x: 58, y: 55 },
  { x: 72, y: 74 }, { x: 74, y: 71 },
  { x: 88, y: 90 }, { x: 90, y: 87 }
];

// Phase 2 & 3: Clean, balanced 3x4 Matrix Nodes
const MATRIX_NODES = [
  { x: 20, y: 25 }, { x: 40, y: 25 }, { x: 60, y: 25 }, { x: 80, y: 25 },
  { x: 20, y: 50 }, { x: 40, y: 50 }, { x: 60, y: 50 }, { x: 80, y: 50 },
  { x: 20, y: 75 }, { x: 40, y: 75 }, { x: 60, y: 75 }, { x: 80, y: 75 }
];

const CONNECTIONS = [
  { from: 4, to: 1 }, { from: 4, to: 2 }, { from: 4, to: 3 },
  { from: 5, to: 2 }, { from: 5, to: 3 },
  { from: 6, to: 3 },
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
    <div className="hidden min-[1290px]:flex items-center gap-1.5">
      <Motion.div style={{ opacity: p1 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
      <Motion.div style={{ opacity: p2 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
      <Motion.div style={{ opacity: p3 }} className="w-6 h-0.5 rounded-full bg-[#FCCA71]" />
    </div>
  );
};

export const HowWeThinkAboutTransformation = () => {
  const ref = useRef(null);
  
  // Desktop scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const desktopSpring = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  // Mobile auto-looping motion value
  const mobileProgress = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Screen-size detector
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1290);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile auto-looping logic with pause on last phase
  useEffect(() => {
    if (!isMobile) return;

    let animFrameId;
    let pauseTimer = null;
    let currentProgress = 0;
    const stepSpeed = 0.0018; 
    const pauseDuration = 2200; 

    const animateMobile = () => {
      currentProgress += stepSpeed;
      if (currentProgress >= 1) {
        currentProgress = 1;
        mobileProgress.set(1);
        pauseTimer = setTimeout(() => {
          currentProgress = 0;
          mobileProgress.set(0);
          animFrameId = requestAnimationFrame(animateMobile);
        }, pauseDuration);
      } else {
        mobileProgress.set(currentProgress);
        animFrameId = requestAnimationFrame(animateMobile);
      }
    };

    animFrameId = requestAnimationFrame(animateMobile);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [isMobile, mobileProgress]);

  // Determine active progress value
  const t = isMobile ? mobileProgress : desktopSpring;

  // Phase Opacities for Left Paragraphs & Top Phase Label
  const p1 = useTransform(t, [0, 0.3, 0.38], [1, 1, 0]);
  const p2 = useTransform(t, [0.35, 0.42, 0.65, 0.72], [0, 1, 1, 0]);
  const p3 = useTransform(t, [0.68, 0.75, 1], [0, 1, 1]);

  // SVG lines draw opacity
  const lineOpacity = useTransform(t, [0.65, 0.8], [0, 1]);

  // Canvas progress bar width
  const canvasProgressWidth = useTransform(t, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={`relative font-sans ${
        isMobile ? "h-auto py-12 sm:py-12 my-2" : "h-[220vh] -mt-14 min-[1290px]:-mt-24"
      }`}
      data-testid="sticky-transformation"
    >
      <div className={`${isMobile ? "relative" : "sticky top-12 h-[calc(100vh-48px)]"} flex items-center overflow-hidden`}>
        <div className="w-[85%] max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 min-[1290px]:grid-cols-12 gap-6 min-[1290px]:gap-12 items-center">
            
            {/* Left Column */}
            <div className="min-[1290px]:col-span-5 flex flex-col gap-3 sm:gap-4 text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              
              {/* Bracketed section tag */}
              <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
                [how we think about transformation]
              </div>

              {/* Main Headline */}
              <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight font-sans">
                <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Not the implementation of software.{" "}
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  The redesign of work.
                </span>
              </h2>

              {/* Morphing Paragraph Content Below Title */}
              <div className="relative min-h-27.5 mt-1 sm:mt-2 w-full flex justify-center min-[1290px]:justify-start">
                <Motion.p
                  style={{ opacity: p1 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto min-[1290px]:mx-0"
                >
                  {PHASE_TEXTS[0]}
                </Motion.p>
                <Motion.p
                  style={{ opacity: p2 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto min-[1290px]:mx-0"
                >
                  {PHASE_TEXTS[1]}
                </Motion.p>
                <Motion.p
                  style={{ opacity: p3 }}
                  className="absolute inset-0 text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto min-[1290px]:mx-0"
                >
                  {PHASE_TEXTS[2]}
                </Motion.p>
              </div>
            </div>

            {/* Right Column */}
            <div className="min-[1290px]:col-span-7 flex flex-col gap-4 sm:gap-6 items-center min-[1290px]:items-start w-full">
              
              {/* Top Phase Header Bar (3-line indicator hidden on mobile) */}
              <div className="w-full max-w-140 mx-auto flex justify-center min-[1290px]:justify-between items-center px-1 relative h-6">
                <div className="relative flex justify-center w-full min-[1290px]:w-auto">
                  <Motion.span
                    style={{ opacity: p1 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-1/2 -translate-x-1/2 min-[1290px]:left-0 min-[1290px]:translate-x-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[0]}
                  </Motion.span>
                  <Motion.span
                    style={{ opacity: p2 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-1/2 -translate-x-1/2 min-[1290px]:left-0 min-[1290px]:translate-x-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[1]}
                  </Motion.span>
                  <Motion.span
                    style={{ opacity: p3 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#FCCA71] font-semibold absolute left-1/2 -translate-x-1/2 min-[1290px]:left-0 min-[1290px]:translate-x-0 whitespace-nowrap"
                  >
                    {PHASE_LABELS[2]}
                  </Motion.span>
                </div>
                <PhaseProgress t={t} />
              </div>

              {/* Visualization Canvas Box */}
              <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-2xl border border-[rgba(135,123,241,0.25)] bg-[#07092b]/60 backdrop-blur-xl overflow-hidden p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Background Grid Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15" 
                  style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", 
                    backgroundSize: "32px 32px" 
                  }} 
                />

                {/* Inner Padded Relative Container for Dots and SVG Lines */}
                <div className="relative w-full h-full">
                  {/* SVG Connections */}
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
                </div>

                {/* Bottom Canvas Progress Bar */}
                <div className="absolute bottom-3 left-6 right-6 h-1 rounded-full bg-white/10 overflow-hidden">
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