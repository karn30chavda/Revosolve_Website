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

const BalancedBlueprintEngine = ({ t }) => {
  const containerRef = useRef(null);

  // Subtle Parallax Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // --- CARD 1 (Data Pathways - Top Left) ---
  const card1X = useTransform(t, [0, 0.5, 1], ["0%", "0%", "0%"]);
  const card1Y = useTransform(t, [0, 0.5, 1], ["10px", "0px", "0px"]);
  const card1Rotate = useTransform(t, [0, 0.5, 1], [-6, -2, 0]);
  const card1Width = useTransform(t, [0, 0.5, 1], ["47%", "47%", "48%"]);

  // --- CARD 2 (Execution Pipeline - Top Right) ---
  const card2X = useTransform(t, [0, 0.5, 1], ["53%", "53%", "52%"]);
  const card2Y = useTransform(t, [0, 0.5, 1], ["35px", "0px", "0px"]);
  const card2Rotate = useTransform(t, [0, 0.5, 1], [5, 2, 0]);
  const card2Width = useTransform(t, [0, 0.5, 1], ["47%", "47%", "48%"]);

  // --- CARD 3 (Operational Core - Center/Bottom Balanced Anchor) ---
  const card3X = useTransform(t, [0, 0.5, 1], ["10%", "5%", "0%"]);
  const card3Y = useTransform(t, [0, 0.5, 1], ["160px", "145px", "135px"]);
  const card3Rotate = useTransform(t, [0, 0.5, 1], [-3, 0, 0]);
  const card3Width = useTransform(t, [0, 0.5, 1], ["80%", "90%", "100%"]);

  // Connectors & Glow
  const connectorOpacity = useTransform(t, [0.35, 0.65], [0, 1]);
  const activeGlowOpacity = useTransform(t, [0.7, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full h-80 sm:h-90 relative select-none pt-4"
    >
      <Motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {/* Soft Ambient Background Glow */}
        <Motion.div 
          style={{
            opacity: useTransform(t, [0, 0.5, 1], [0.15, 0.35, 0.5]),
          }}
          className="absolute inset-0 bg-linear-to-tr from-[#877BF1]/20 via-transparent to-[#FCCA71]/20 blur-3xl pointer-events-none"
        />

        {/* Phase 2 Animated Laser Connections */}
        <Motion.svg
          style={{ opacity: connectorOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        >
          <line
            x1="24%"
            y1="50px"
            x2="76%"
            y2="50px"
            stroke="#FCCA71"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="50%"
            y1="50px"
            x2="50%"
            y2="135px"
            stroke="#877BF1"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </Motion.svg>

        {/* --- MODULE 1: DATA PATHWAYS --- */}
        <Motion.div
          style={{
            left: card1X,
            top: card1Y,
            rotate: card1Rotate,
            width: card1Width,
            borderColor: useTransform(t, [0, 0.5, 1], ["rgba(255,122,122,0.35)", "rgba(135,123,241,0.4)", "rgba(252,202,113,0.5)"]),
          }}
          className="absolute p-3.5 sm:p-4 rounded-xl bg-[#0a081c]/90 border backdrop-blur-xl shadow-lg z-10 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] sm:text-[10px] text-white/50 tracking-wider uppercase">MOD_01 // DATA PATHWAYS</span>
            <Motion.span 
              style={{
                backgroundColor: useTransform(t, [0, 0.7], ["rgba(255,122,122,0.15)", "rgba(252,202,113,0.2)"]),
                color: useTransform(t, [0, 0.7], ["#FF7A7A", "#FCCA71"])
              }}
              className="px-2 py-0.5 rounded text-[9px] font-mono font-bold"
            >
              {t.get() > 0.6 ? "CONNECTED" : "ISOLATED"}
            </Motion.span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <Motion.div 
              style={{ width: useTransform(t, [0, 1], ["30%", "100%"]) }}
              className="h-full bg-linear-to-r from-[#FF7A7A] via-[#877BF1] to-[#FCCA71]" 
            />
          </div>
          <div className="grid grid-cols-3 gap-1 pt-0.5">
            <div className="h-5.5 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[9px] text-white/70">ERP</div>
            <div className="h-5.5 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[9px] text-white/70">CRM</div>
            <div className="h-5.5 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[9px] text-white/70">API</div>
          </div>
        </Motion.div>

        {/* --- MODULE 2: EXECUTION PIPELINE --- */}
        <Motion.div
          style={{
            left: card2X,
            top: card2Y,
            rotate: card2Rotate,
            width: card2Width,
            borderColor: useTransform(t, [0, 0.5, 1], ["rgba(255,122,122,0.35)", "rgba(135,123,241,0.4)", "rgba(252,202,113,0.5)"]),
          }}
          className="absolute p-3.5 sm:p-4 rounded-xl bg-[#0a081c]/90 border backdrop-blur-xl shadow-lg z-10 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] sm:text-[10px] text-white/50 tracking-wider uppercase">MOD_02 // EXECUTION</span>
            <span className="text-[10px] font-mono text-[#877BF1]">v2.4</span>
          </div>
          <div className="flex items-center gap-2 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-ping" />
            <div className="font-mono text-[10px] sm:text-[11px] text-white/90 font-medium truncate">
              Automated Workflows
            </div>
          </div>
          <div className="flex gap-1.5 pt-1">
            <div className="h-1.5 flex-1 rounded-full bg-[#877BF1]/40" />
            <div className="h-1.5 flex-1 rounded-full bg-[#FCCA71]/50" />
            <div className="h-1.5 flex-1 rounded-full bg-white/10" />
          </div>
        </Motion.div>

        {/* --- MODULE 3: UNIFIED OPERATIONAL CORE --- */}
        <Motion.div
          style={{
            left: card3X,
            top: card3Y,
            rotate: card3Rotate,
            width: card3Width,
            borderColor: useTransform(t, [0, 0.7], ["rgba(255,255,255,0.15)", "rgba(252,202,113,0.8)"]),
            boxShadow: useTransform(activeGlowOpacity, v => `0 15px 35px rgba(0,0,0,0.6), 0 0 ${v * 30}px rgba(252,202,113,0.25)`)
          }}
          className="absolute p-4 sm:p-5 rounded-2xl bg-linear-to-br from-[#120f33] via-[#09071c] to-[#04030d] border backdrop-blur-2xl z-20 flex flex-col gap-3"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FCCA71] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white tracking-wider">OPERATIONAL ARCHITECTURE</span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#FCCA71] font-bold">99.8% EFFICIENCY</span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-white/60">
              <span>Automation Layer</span>
              <span className="text-[#877BF1]">Active System</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <Motion.div 
                style={{ width: useTransform(t, [0, 1], ["20%", "100%"]) }}
                className="h-full bg-linear-to-r from-[#877BF1] via-[#e28eff] to-[#FCCA71]" 
              />
            </div>
          </div>

          {/* Connected AI Badge */}
          <Motion.div 
            style={{ opacity: activeGlowOpacity }}
            className="p-2 rounded-lg bg-[#FCCA71]/10 border border-[#FCCA71]/30 flex items-center justify-between"
          >
            <span className="font-mono text-[9px] sm:text-[10px] text-[#FCCA71] font-bold">CONNECTED AI AGENTS ACTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-ping" />
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </div>
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

  // Mobile auto-looping logic
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

  // Active progress value
  const t = isMobile ? mobileProgress : desktopSpring;

  // Phase Opacities
  const p1 = useTransform(t, [0, 0.3, 0.38], [1, 1, 0]);
  const p2 = useTransform(t, [0.35, 0.42, 0.65, 0.72], [0, 1, 1, 0]);
  const p3 = useTransform(t, [0.68, 0.75, 1], [0, 1, 1]);

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

          <div className="grid grid-cols-1 min-[1290px]:grid-cols-12 gap-8 min-[1290px]:gap-16 items-center">

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

              {/* Top Phase Header Bar */}
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

              {/* Balanced Engine Canvas */}
              <div className="w-full relative pt-2">
                <BalancedBlueprintEngine t={t} />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HowWeThinkAboutTransformation;