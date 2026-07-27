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
    accent: "#a78bfa",
  },
  {
    title: "User Adoption Is the Ultimate Success Metric",
    desc: "The most advanced platform has little value if people do not use it. We engineer intuitive systems that align with how teams naturally work.",
    icon: Sparkles,
    tag: "02 · Adoption",
    accent: "#f472b6",
  },
  {
    title: "Open Architecture. Long-Term Flexibility.",
    desc: "Scalable, API-first, cloud-ready, open architectures that integrate with existing systems while supporting future innovation.",
    icon: Boxes,
    tag: "03 · Architecture",
    accent: "#fb923c",
  },
  {
    title: "AI Where It Creates Real Operational Value",
    desc: "We integrate AI where it delivers measurable business outcomes—not where it simply follows industry trends.",
    icon: Cpu,
    tag: "04 · Intelligence",
    accent: "#facc15",
  },
  {
    title: "Transparency Creates Better Partnerships",
    desc: "Transparent communication, measurable milestones, collaborative planning, and shared accountability throughout every engagement.",
    icon: ShieldCheck,
    tag: "05 · Trust",
    accent: "#c084fc",
  },
];

const PrincipleCard = ({ p, i, t, total }) => {
  const step = 1 / total;
  const start = i * step;
  const end = start + step;

  // Keyframes creating a clear rest/pause plateau when card is centered
  const enterEnd = start + step * 0.25;
  const exitStart = start + step * 0.75;

  // Shifted resting y-position up from 56px to 0px so cards appear higher up
  const y = useTransform(t, [start, enterEnd, exitStart, end], [100, 0, 0, -80]);
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
          background: `
            radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.18) 0%, transparent 40%),
            linear-gradient(135deg, #0a0914 0%, #0d0a1a 50%, #150f2a 100%)
          `,
          borderColor: "rgba(139, 92, 246, 0.28)"
        }}
        className="flex flex-row items-start p-8 sm:p-10 min-h-64 sm:min-h-72 w-full rounded-3xl border relative group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md gap-6 sm:gap-8"
      >
        {/* Subtle Accent Edge Glow */}
        <div 
          style={{ background: `radial-gradient(circle at 100% 0%, ${p.accent}25 0%, transparent 65%)` }}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Bottom Background Pattern */}
        <img 
          src="/CloudDevOps/build_bg_pattern.svg" 
          alt="" 
          className="absolute bottom-0 right-0 w-53.75 h-17.75 pointer-events-none opacity-30 z-0 scale-x-[-1]" 
        />

        {/* Left Column: Stylized Glass Icon Box */}
        <div className="shrink-0 relative z-10 pt-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1b1535]/80 border border-[#8b5cf6]/35 flex items-center justify-center shadow-inner">
            <Icon size={30} color="#FCCA71" weight="light" />
          </div>
        </div>

        {/* Right Column: Tag, Title, Vibrant Crisp Description */}
        <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 sm:gap-4 relative z-10">
          <div className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#FCCA71] font-semibold pt-1">
            {p.tag}
          </div>
          
          <h4 className="text-[#FCCA71] text-[28px] sm:text-[34px] md:text-[38px] font-bold font-sans leading-[1.12] text-left tracking-tight">
            {p.title}
          </h4>
          
          {/* Paragraph updated to crisp white & medium weight */}
          <p className="text-white text-[15px] sm:text-[16px] font-medium font-sans leading-relaxed text-left max-w-full opacity-100 mt-1">
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
          
          {/* Left Rail */}
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
          <div className="min-[1290px]:col-span-7 relative h-120 sm:h-130 flex items-center">
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