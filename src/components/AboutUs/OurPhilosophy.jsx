import React from "react";
import { motion as Motion } from "framer-motion";
import {
  GitBranch,
  ShieldCheck,
  Users,
  Wrench,
  Factory,
  Cube as Boxes,
  TrendUp as LineChart,
  Radio as Radar,
  GitMerge as Workflow,
  Bank as Landmark,
} from "@phosphor-icons/react";

const PHILOSOPHY_ITEMS = [
  { t: "The way information flows", icon: GitBranch },
  { t: "The way approvals happen", icon: ShieldCheck },
  { t: "The way customers are served", icon: Users },
  { t: "The way infrastructure projects are delivered", icon: Wrench },
  { t: "The way manufacturing plants operate", icon: Factory },
  { t: "The way procurement teams collaborate", icon: Boxes },
  { t: "The way finance governs risk", icon: LineChart },
  { t: "The way field operations run", icon: Radar },
];

const ORBIT_ITEMS = [
  { label: "Workflows", icon: Workflow },
  { label: "Approvals", icon: ShieldCheck },
  { label: "Customers", icon: Users },
  { label: "Field Ops", icon: Wrench },
  { label: "Procurement", icon: Boxes },
  { label: "Finance", icon: LineChart },
  { label: "Manufacturing", icon: Factory },
  { label: "Governance", icon: Landmark },
];

const OrbitDiagram = () => {
  const size = 460;
  const cx = size / 2;
  const cy = size / 2;
  const rings = [
    { r: 105, dur: 40, dir: 1, items: ORBIT_ITEMS.slice(0, 4) },
    { r: 175, dur: 70, dir: -1, items: ORBIT_ITEMS.slice(4) },
  ];

  return (
    <div
      className="relative w-full aspect-square max-w-115 mx-auto pointer-events-none"
      data-testid="orbit-diagram"
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="corePulse">
            <stop offset="0%" stopColor="#FCCA71" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FCCA71" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Motion.circle
          cx={cx}
          cy={cy}
          r="60"
          fill="url(#corePulse)"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={ring.r}
            fill="none"
            stroke="rgba(135,123,241,0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        ))}
      </svg>

      {/* Center label */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center border pointer-events-auto z-20"
        style={{
          background:
            "radial-gradient(circle, rgba(135,123,241,0.25), rgba(7,9,43,0.9))",
          borderColor: "rgba(252,202,113,0.6)",
          boxShadow: "0 0 30px rgba(252,202,113,0.2)",
        }}
      >
        <div className="text-center">
          <div className="text-[#FCCA71] font-mono text-[10px] uppercase tracking-widest font-bold">
            OPERATIONS
          </div>
          <div className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-lg font-black mt-0.5">
            core
          </div>
        </div>
      </div>

      {rings.map((ring, ringIdx) => (
        <Motion.div
          key={ringIdx}
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 * ring.dir }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
        >
          {ring.items.map((it, i) => {
            const angle = (360 / ring.items.length) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const px = ((cx + ring.r * Math.cos(rad)) / size) * 100;
            const py = ((cy + ring.r * Math.sin(rad)) / size) * 100;
            const Icon = it.icon;
            return (
              <Motion.div
                key={it.label}
                animate={{ rotate: -360 * ring.dir }}
                transition={{
                  duration: ring.dur,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left: `${px}%`, top: `${py}%` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#07092b] border border-[rgba(252,202,113,0.4)] backdrop-blur-md flex items-center justify-center hover:border-[#FCCA71] transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <Icon size={16} className="text-[#FCCA71]" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/70 whitespace-nowrap bg-black/60 px-1.5 py-0.5 rounded border border-white/10">
                  {it.label}
                </span>
              </Motion.div>
            );
          })}
        </Motion.div>
      ))}
    </div>
  );
};

export const OurPhilosophy = () => {
  return (
    <section className="relative w-full pt-6 pb-20 min-[1290px]:pt-8 min-[1290px]:pb-28 font-sans overflow-hidden">
      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 min-[1290px]:grid-cols-12 gap-10 min-[1290px]:gap-16 items-center">
          
          {/* Left Column: Tag, Title & Description */}
          <div className="min-[1290px]:col-span-6 flex flex-col gap-6">
            <div>
              <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30 mb-2">
                [our philosophy]
              </div>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Understand operations
                </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                before engineering technology
              </span>
            </h2>
            </div>

            <div className="flex flex-col gap-4 text-white/70 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Every organization has unique operational DNA. Before recommending technology, our teams immerse themselves in understanding these dynamics.
              </p>
              <p>
                We study workflows. We observe field operations. We identify bottlenecks, duplicated effort, and decision-making gaps.
              </p>
            </div>
          </div>

          {/* Right Column: Orbit Animation Diagram (Positioned slightly lower for balance) */}
          <div className="min-[1290px]:col-span-6 translate-y-3 min-[1290px]:translate-y-6">
            <OrbitDiagram />
          </div>
        </div>

        {/* Bottom 8 Philosophy Cards (Standard Website Glass Card Theme) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="p-5 rounded-2xl border border-[rgba(135,123,241,0.25)] bg-[#07092b]/60 backdrop-blur-xl flex flex-col justify-between hover:border-[#FCCA71]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(252,202,113,0.3)] flex items-center justify-center mb-4 bg-[#FCCA71]/10 group-hover:border-[#FCCA71] transition-colors">
                  <Icon
                    size={18}
                    className="text-[#FCCA71]"
                  />
                </div>
                <span className="text-white/90 text-sm font-medium leading-snug">
                  {item.t}
                </span>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurPhilosophy;
