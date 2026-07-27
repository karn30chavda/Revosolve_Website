import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Lightning as Zap,
  GitMerge as Workflow,
  Brain,
  TrendUp as LineChart,
  Users,
  Compass,
  ArrowUpRight,
} from "@phosphor-icons/react";

const CONNECTED_EFFECTS = [
  {
    line: "Information becomes trusted.",
    icon: ShieldCheck,
    metric: "+40%",
    label: "Data Confidence",
  },
  {
    line: "Approvals become faster.",
    icon: Zap,
    metric: "−62%",
    label: "Cycle Time",
  },
  {
    line: "Automation becomes meaningful.",
    icon: Workflow,
    metric: "3.4×",
    label: "Throughput",
  },
  {
    line: "AI becomes practical.",
    icon: Brain,
    metric: "Prod-grade",
    label: "AI ROI",
  },
  {
    line: "Leadership gains real-time visibility.",
    icon: LineChart,
    metric: "Real-time",
    label: "KPI Latency",
  },
  {
    line: "Teams collaborate without friction.",
    icon: Users,
    metric: "1 view",
    label: "Source of Truth",
  },
  {
    line: "Technology investments generate measurable business outcomes.",
    icon: Compass,
    metric: "Measurable",
    label: "Business Outcome",
  },
];

const CountUp = ({ value, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const m = String(value).match(/^([+-]?)([\d.]+)(.*)$/);
    if (!m) return;
    const sign = m[1];
    const target = parseFloat(m[2]);
    const suffix = m[3];
    let start = null;
    const dur = 900;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = (target * eased).toFixed(target % 1 === 0 ? 0 : 1);
      setDisplay(`${sign}${cur}${suffix}`);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export const OutcomesOfConnectedOperations = () => {
  return (
    <section className="relative w-full py-10 min-[1290px]:py-14 font-sans overflow-hidden lg:-mt-10 min-[1290px]:-mt-16">
      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        
        {/* Header Grid: Section Tag & Gradient Title */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
            [outcomes of connected operations]
          </div>
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="font-black block">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                When operations become connected.
              </span>
            </span>
          </h2>
        </div>

        {/* Connected Effects Interactive Minimal Rows */}
        <div className="space-y-1">
          {CONNECTED_EFFECTS.map((row, i) => {
            const Icon = row.icon;
            return (
              <Motion.div
                key={row.line}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 md:gap-8 py-5 border-b border-white/10 hover:bg-white/1.5 transition-colors cursor-pointer"
              >
                <span className="font-mono text-xs text-white/25 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/2 flex items-center justify-center shrink-0 group-hover:border-[#FCCA71] group-hover:bg-[#FCCA71]/10 transition-all">
                    <Icon size={18} className="text-white/70 group-hover:text-[#FCCA71] transition-colors" />
                  </div>
                  <span className="text-lg md:text-2xl text-white/85 group-hover:text-white transition-colors truncate font-sans">
                    {row.line}
                  </span>
                </div>

                <div className="hidden md:flex flex-col items-end">
                  <CountUp
                    value={row.metric}
                    className="text-xl md:text-2xl font-medium md:font-semibold text-[#FCCA71]"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-0.5">
                    {row.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-white/20 group-hover:text-[#FCCA71] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                />
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OutcomesOfConnectedOperations;
