import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import {
  FileText,
  Database,
  Gear as Cog,
  TrendUp as LineChart,
  Users,
  GitMerge as Workflow,
  Brain,
  Stack as Layers,
} from "@phosphor-icons/react";

const FRAGMENTED_APPS = [
  { icon: FileText, label: "ERP" },
  { icon: Database, label: "SQL" },
  { icon: Cog, label: "OPS" },
  { icon: LineChart, label: "BI" },
  { icon: Users, label: "CRM" },
  { icon: Workflow, label: "WF" },
  { icon: Brain, label: "AI" },
  { icon: Layers, label: "DMS" },
];

const PhaseDot = ({ i, t }) => {
  const active = useTransform(t, [i * 0.33, i * 0.33 + 0.05], [0.2, 1]);
  return (
    <Motion.div
      style={{
        opacity: active,
        background: "linear-gradient(90deg, #877BF1, #FCCA71)",
      }}
      className="w-8 h-0.5 rounded-full"
    />
  );
};

const FragmentedApp = ({ app, i, t }) => {
  const cols = 4;
  const col = i % cols;
  const row = Math.floor(i / cols);
  const startX = 10 + col * 22 + ((i * 37) % 8);
  const startY = 24 + row * 36 + ((i * 71) % 16);
  const endX = 12 + i * 10.5;
  const endY = 50;
  const jitterRot = ((i * 137) % 36) - 18;

  const x = useTransform(t, [0, 0.35, 0.7], [startX, startX, endX]);
  const y = useTransform(t, [0, 0.35, 0.7], [startY, startY, endY]);
  const rot = useTransform(t, [0, 0.35, 0.7], [jitterRot, jitterRot, 0]);
  const scale = useTransform(t, [0, 0.3, 0.7, 1], [0.85, 1, 1, 1.05]);
  const borderCol = useTransform(
    t,
    [0, 0.35, 0.7, 1],
    [
      "rgba(255,90,90,0.4)",
      "rgba(255,90,90,0.6)",
      "rgba(252,202,113,0.5)",
      "rgba(252,202,113,0.9)",
    ],
  );
  const glow = useTransform(
    t,
    [0, 0.5, 1],
    [
      "0 0 0px rgba(252,202,113,0)",
      "0 0 12px rgba(252,202,113,0.2)",
      "0 0 24px rgba(252,202,113,0.5)",
    ],
  );
  const Icon = app.icon;

  return (
    <Motion.div
      style={{
        left: useTransform(x, (v) => `${v}%`),
        top: useTransform(y, (v) => `${v}%`),
        rotate: rot,
        scale,
        borderColor: borderCol,
        boxShadow: glow,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center gap-1"
    >
      <Icon size={18} className="text-white" />
      <span className="text-[9px] font-mono text-white/70 tracking-widest uppercase">
        {app.label}
      </span>
    </Motion.div>
  );
};

export const AboutTransformation = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mobileProgress = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile: Automatic looping animation with pause after all 3 phases
  useEffect(() => {
    if (!isMobile) return;

    const controls = {
      stop: false,
    };

    const animate = () => {
      if (controls.stop) return;

      const startTime = Date.now();
      const cycleTime = 3600; // 3 phases × 1200ms each = 3600ms
      const pauseAfterCycle = 1000; // 1 second pause after completing all 3 phases
      const totalDuration = cycleTime + pauseAfterCycle;

      const tick = () => {
        if (controls.stop) return;
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % totalDuration) / cycleTime;
        mobileProgress.set(Math.min(progress, 1));
        requestAnimationFrame(tick);
      };

      tick();
    };

    animate();

    return () => {
      controls.stop = true;
    };
  }, [isMobile, mobileProgress]);

  // Desktop: Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80px", "end end"],
  });
  const scrollT = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  // Use mobile progress on mobile, scroll progress on desktop
  const t = isMobile ? mobileProgress : scrollT;

  const stage1 = useTransform(t, [0, 0.3], [1, 0]);
  const stage2 = useTransform(t, [0.25, 0.5, 0.75], [0, 1, 0]);
  const stage3 = useTransform(t, [0.65, 0.85], [0, 1]);

  const spineLength = useTransform(t, [0.35, 0.7], [0, 1]);
  const spineOpacity = useTransform(t, [0.35, 0.6, 1], [0, 0.6, 0.9]);
  const pulseX = useTransform(t, [0.75, 1], [12, 92]);

  return (
    <section
      id="about-content"
      ref={ref}
      className={`relative ${isMobile ? "h-auto py-1 pb-32" : "h-[170vh]"} font-sans`}
      data-testid="frag-to-unified"
    >
      <div className={`${isMobile ? "relative" : "sticky"} top-20 ${isMobile ? "h-auto" : "h-[calc(100vh-80px)]"} flex items-center overflow-hidden`}>
        <div className={`${isMobile ? "w-full px-5" : "w-[85%]"} mx-auto relative z-10`}>
          {/* Header row with dynamic morphing phase labels */}
          <div className="flex justify-between items-center mb-6 relative h-8">
            <Motion.span
              style={{ opacity: stage1 }}
              className="text-[#877BF1] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase absolute left-0"
            >
              Phase 01 — Fragmented Landscape
            </Motion.span>
            <Motion.span
              style={{ opacity: stage2 }}
              className="text-white/80 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase absolute left-0"
            >
              Phase 02 — Converging Systems
            </Motion.span>
            <Motion.span
              style={{ opacity: stage3 }}
              className="text-[#FCCA71] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase absolute left-0"
            >
              Phase 03 — Unified Operating System
            </Motion.span>
            <div className="ml-auto flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <PhaseDot key={i} i={i} t={t} />
              ))}
            </div>
          </div>

          {/* Visualization Canvas */}
          <div
            className={`relative w-full ${isMobile ? "h-64" : "h-[52vh]"} rounded-3xl border border-[rgba(135,123,241,0.25)] bg-[#07092b]/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
          >
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20" 
              style={{ 
                backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", 
                backgroundSize: "40px 40px" 
              }} 
            />

            {/* Central spine */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="stgUnified" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#877BF1" />
                  <stop offset="50%" stopColor="#c99dff" />
                  <stop offset="100%" stopColor="#FCCA71" />
                </linearGradient>
              </defs>
              <Motion.line
                x1="10"
                y1="50"
                x2="94"
                y2="50"
                stroke="url(#stgUnified)"
                strokeWidth="0.4"
                strokeDasharray="0.8 0.8"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: spineLength, opacity: spineOpacity }}
              />
            </svg>

            {/* Traveling Pulse */}
            <Motion.div
              className="absolute w-3.5 h-3.5 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                left: useTransform(pulseX, (v) => `${v}%`),
                top: "50%",
                background: "#FCCA71",
                boxShadow: "0 0 20px #FCCA71, 0 0 40px rgba(252,202,113,0.5)",
                opacity: stage3,
              }}
            />

            {FRAGMENTED_APPS.map((app, i) => (
              <FragmentedApp key={app.label} app={app} i={i} t={t} />
            ))}
          </div>

          {/* Phase Captions */}
          <div className="mt-6 relative h-12">
            <Motion.p
              style={{ opacity: stage1 }}
              className="absolute text-white/60 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Departments adopt different applications. Data becomes siloed. Teams spend more time coordinating than delivering.
            </Motion.p>
            <Motion.p
              style={{ opacity: stage2 }}
              className="absolute text-white/70 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              We identify the operational patterns and begin engineering the connective tissue between systems.
            </Motion.p>
            <Motion.p
              style={{ opacity: stage3 }}
              className="absolute text-white text-base md:text-lg leading-relaxed max-w-3xl"
            >
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-semibold">
                One intelligent operating environment.
              </span>{" "}
              People, processes, data, and technology — connected.
            </Motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTransformation;
