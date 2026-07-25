import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Stack as Layers,
  GitMerge as Workflow,
  CodeBlock as GitBranch,
  Brain,
  Network,
  Cpu,
} from "@phosphor-icons/react";

const PROMISE_ITEMS = [
  { line: "Every architecture we design.", icon: Layers, color: "#877BF1" },
  { line: "Every workflow we automate.", icon: Workflow, color: "#e28eff" },
  { line: "Every platform we modernize.", icon: GitBranch, color: "#ffb27a" },
  { line: "Every AI capability we deploy.", icon: Brain, color: "#FCCA71" },
  { line: "Every integration we build.", icon: Network, color: "#877BF1" },
  { line: "Every operational system we engineer.", icon: Cpu, color: "#FCCA71" },
];

const ProgressReadout = ({ t }) => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const unsub = t.on("change", (v) => {
      setPct(Math.max(0, Math.min(100, Math.round(v * 100))));
    });
    return unsub;
  }, [t]);

  return <span className="font-mono text-[11px] text-[#FCCA71] font-medium">{pct}%</span>;
};

const PromiseItemRow = ({ item, i, t }) => {
  const start = 0.05 + i * 0.13;
  const mid = start + 0.15;
  const end = start + 0.28;

  // Staggered icon shoot from central hub to line position
  const x = useTransform(t, [start, mid, end], [-280, -60, 0]);
  const y = useTransform(t, [start, mid, end], [i * -50 + 150, i * 4, 0]);
  const scale = useTransform(t, [start, mid, end], [0.4, 1.25, 1]);
  const iconOpacity = useTransform(t, [start, start + 0.02, end + 0.05], [0, 1, 1]);

  // Initial opacity starts at 0 until user scrolls to reveal each row
  const rowOpacity = useTransform(t, [start - 0.02, start + 0.08], [0, 1]);
  const rowX = useTransform(t, [start - 0.02, start + 0.08], [30, 0]);

  const Icon = item.icon;

  return (
    <Motion.div
      style={{ opacity: rowOpacity, x: rowX }}
      className="flex items-center gap-4 sm:gap-6 py-2.5 min-[1290px]:py-3 border-b border-white/10 relative group"
    >
      {/* Icon Badge */}
      <Motion.div
        style={{
          x,
          y,
          scale,
          opacity: iconOpacity,
          borderColor: `${item.color}66`,
          boxShadow: `0 0 20px ${item.color}44`,
        }}
        className="w-10 h-10 rounded-xl flex items-center justify-center border bg-[#07092b]/80 backdrop-blur-md shrink-0"
      >
        <Icon size={18} style={{ color: item.color }} />
      </Motion.div>

      {/* Row Text */}
      <span className="text-lg sm:text-xl min-[1290px]:text-2xl font-bold text-white flex-1 tracking-tight">
        {item.line}
      </span>

      {/* Row Number */}
      <Motion.span
        style={{ opacity: rowOpacity, color: item.color }}
        className="font-mono text-xs tracking-widest text-white/40"
      >
        0{i + 1}
      </Motion.span>
    </Motion.div>
  );
};

export const OurPromise = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const t = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  const hubScale = useTransform(t, [0, 0.05, 1], [1, 1.15, 1]);
  const hubRotate = useTransform(t, [0, 1], [0, 60]);

  return (
    <div
      ref={ref}
      className="relative h-[260vh] font-sans -mt-6 min-[1290px]:-mt-10"
      data-testid="section-promise"
    >
      <div className="sticky top-12 h-[calc(100vh-48px)] flex items-center overflow-hidden">
        <div className="w-[85%] max-w-7xl mx-auto relative z-10 grid grid-cols-1 min-[1290px]:grid-cols-12 gap-10 min-[1290px]:gap-16 items-center">
          
          {/* Left Rail: Section Tag, Theme Title, Orb Hub & Scroll Readout */}
          <div className="min-[1290px]:col-span-5 flex flex-col gap-6 relative z-10">
            
            {/* Section Tag */}
            <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
              [our promise]
            </div>

            {/* Main Headline (Matching Cloud & Site Theme) */}
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Has one purpose.
                </span>
              </span>
            </h2>

            {/* Description Subtext */}
            <p className="text-white/60 text-base sm:text-lg font-normal leading-relaxed max-w-md">
              Helping organizations operate{" "}
              <span className="text-white font-semibold">better than they did yesterday.</span>
            </p>

            {/* Central Animated Purpose Hub Orb */}
            <div className="relative mt-4 h-48 sm:h-52 flex items-center justify-center">
              <Motion.div
                style={{ scale: hubScale, rotate: hubRotate }}
                className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center"
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #877BF1, #e28eff, #ffb27a, #FCCA71, #877BF1)",
                    filter: "blur(1px)",
                    opacity: 0.65,
                  }}
                />
                <div className="absolute inset-1.5 rounded-full bg-[#01031c] backdrop-blur-xl flex items-center justify-center flex-col z-10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">PURPOSE</div>
                  <div className="italic font-serif bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-xl font-normal mt-0.5">
                    core
                  </div>
                </div>
              </Motion.div>

              {/* Expanding Pulse Emission Ring */}
              <Motion.div
                className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[#FCCA71]/40 pointer-events-none"
                animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Scroll Reveal Readout */}
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                SCROLL TO REVEAL
              </span>
              <div className="w-20 h-0.5 rounded-full bg-white/10 overflow-hidden">
                <Motion.div
                  className="h-full origin-left"
                  style={{
                    scaleX: t,
                    background: "linear-gradient(90deg, #877BF1, #FCCA71)",
                  }}
                />
              </div>
              <ProgressReadout t={t} />
            </div>
          </div>

          {/* Right Rail: Choreographed Staggered Icon & Line Reveal */}
          <div className="min-[1290px]:col-span-7 relative flex flex-col justify-center">
            {PROMISE_ITEMS.map((item, i) => (
              <PromiseItemRow key={item.line} item={item} i={i} t={t} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurPromise;
