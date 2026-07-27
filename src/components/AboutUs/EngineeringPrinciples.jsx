import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Compass,
  Sparkle as Sparkles,
  Package as Boxes,
  Cpu,
  ShieldCheck,
} from "@phosphor-icons/react";

const PRINCIPLES = [
  {
    title: "Operational Thinking Over Feature Thinking",
    desc: "Every feature should solve a measurable operational problem. Technology exists to improve execution—not increase complexity.",
    icon: Compass,
    tag: "01 · Thinking",
    accent: "#b980ff",
  },
  {
    title: "User Adoption Is the Ultimate Success Metric",
    desc: "The most advanced platform has little value if people do not use it. We engineer intuitive systems that align with how teams naturally work.",
    icon: Sparkles,
    tag: "02 · Adoption",
    accent: "#ff9dd6",
  },
  {
    title: "Open Architecture. Long-Term Flexibility.",
    desc: "Scalable, API-first, cloud-ready, open architectures that integrate with existing systems while supporting future innovation.",
    icon: Boxes,
    tag: "03 · Architecture",
    accent: "#ffb27a",
  },
  {
    title: "AI Where It Creates Real Operational Value",
    desc: "We integrate AI where it delivers measurable business outcomes—not where it simply follows industry trends.",
    icon: Cpu,
    tag: "04 · Intelligence",
    accent: "#f5a742",
  },
  {
    title: "Transparency Creates Better Partnerships",
    desc: "Transparent communication, measurable milestones, collaborative planning, and shared accountability throughout every engagement.",
    icon: ShieldCheck,
    tag: "05 · Trust",
    accent: "#c99dff",
  },
];

const PrincipleCard = ({ p, i, t, total }) => {
  const step = 1 / total;
  const start = i * step;
  const end = start + step;

  // Keyframes creating a clear rest/pause plateau when card is centered
  const enterEnd = start + step * 0.25;
  const exitStart = start + step * 0.75;

  // Card slides up from 140, rests lower at 56px during [enterEnd, exitStart], then exits to -60
  const y = useTransform(t, [start, enterEnd, exitStart, end], [140, 56, 56, -60]);
  const scale = useTransform(t, [start, enterEnd, exitStart, end], [0.94, 1, 1, 0.94]);
  
  // Sharp opacity window staying 1.0 during rest phase
  const opacity = useTransform(
    t,
    [start - 0.001, enterEnd, exitStart, end + 0.001],
    [0, 1, 1, 0]
  );
  
  const Icon = p.icon;

  return (
    <Motion.div
      style={{ y, scale, opacity, pointerEvents: "none" }}
      className="absolute inset-0 flex items-center"
    >
      <div 
        style={{ 
          background: `linear-gradient(135deg, rgba(15, 14, 35, 0.98) 0%, rgba(40, 25, 90, 0.95) 100%)`,
          borderColor: `${p.accent}40`,
          borderTopColor: "#FCCA71"
        }}
        className="flex flex-col justify-start items-start p-8 min-h-55 w-full rounded-lg border-t-2 relative group overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)] backdrop-blur-sm"
      >
        {/* Card Radial Glow Overlay */}
        <div 
          style={{ background: `radial-gradient(circle at 100% 0%, ${p.accent}15 0%, transparent 60%)` }}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Bottom Background Pattern */}
        <img 
          src="/CloudDevOps/build_bg_pattern.svg" 
          alt="" 
          className="absolute bottom-0 right-0 w-53.75 h-17.75 pointer-events-none opacity-40 z-0 scale-x-[-1]" 
        />

        {/* Icon */}
        <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
          <Icon size={26} color="#FCCA71" weight="light" />
        </div>

        {/* Content Block */}
        <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#FCCA71] font-semibold">
            {p.tag}
          </div>
          <h4 className="text-[#FCCA71] text-[20px] sm:text-[22px] font-semibold font-sans leading-7 text-left">
            {p.title}
          </h4>
          <p className="text-[#D8D6E8] text-[14px] sm:text-[15px] font-normal font-sans leading-5.5 text-left max-w-full">
            {p.desc}
          </p>
        </div>
      </div>
    </Motion.div>
  );
};

const PrincipleIndicator = ({ i, t, total, label, accent }) => {
  const step = 1 / total;
  const active = useTransform(
    t,
    [i * step - 0.02, i * step + step * 0.2],
    [0.35, 1]
  );
  const scale = useTransform(
    t,
    [i * step - 0.02, i * step + step * 0.2],
    [0.8, 1]
  );

  return (
    <Motion.div style={{ opacity: active }} className="flex items-center gap-3">
      <Motion.div
        style={{ scale, backgroundColor: accent }}
        className="w-2.5 h-2.5 rounded-full"
      />
      <span className="font-mono text-xs uppercase tracking-widest text-white/70">
        {label}
      </span>
    </Motion.div>
  );
};

export const EngineeringPrinciples = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const t = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div
      ref={ref}
      className="relative h-[280vh] font-sans -mt-6 min-[1290px]:-mt-10"
      data-testid="section-principles"
    >
      <div className="sticky top-12 h-[calc(100vh-48px)] flex items-center overflow-hidden">
        <div className="w-[85%] max-w-7xl mx-auto relative z-10 grid grid-cols-1 min-[1290px]:grid-cols-12 gap-10 min-[1290px]:gap-16 items-center">
          
          {/* Left Rail: Section Tag, Theme Title & Principles Nav */}
          <div className="min-[1290px]:col-span-5 flex flex-col gap-6">
            <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
              [engineering principles]
            </div>

            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Five commitments that guide{" "}
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin">
                every engagement.
              </span>
            </h2>

            {/* Principles Nav Indicator List */}
            <div className="mt-4 space-y-3">
              {PRINCIPLES.map((p, i) => (
                <PrincipleIndicator
                  key={p.title}
                  i={i}
                  t={t}
                  total={PRINCIPLES.length}
                  label={p.tag}
                  accent={p.accent}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-0.5 rounded-full bg-white/10 overflow-hidden max-w-60">
              <Motion.div
                className="h-full origin-left"
                style={{
                  scaleX: t,
                  background: "linear-gradient(90deg, #877BF1, #FCCA71)",
                }}
              />
            </div>
          </div>

          {/* Right Rail: Lock-Screen Pinned Card Stack */}
          <div className="min-[1290px]:col-span-7 relative h-105 sm:h-115 flex items-center">
            {PRINCIPLES.map((p, i) => (
              <PrincipleCard
                key={p.title}
                p={p}
                i={i}
                t={t}
                total={PRINCIPLES.length}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default EngineeringPrinciples;
