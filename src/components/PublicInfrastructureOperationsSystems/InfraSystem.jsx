import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  SquaresFour,
  CurrencyCircleDollar,
  UsersThree,
  Package,
  HardHat,
  ShoppingCart,
  Receipt,
  CheckCircle,
  ChartLineUp,
  Warehouse,
  Gauge,
  Hexagon,
} from "@phosphor-icons/react";

const systemConnectsChips = [
  { icon: FileText, label: "Tenders" },
  { icon: SquaresFour, label: "Projects" },
  { icon: CurrencyCircleDollar, label: "Finance" },
  { icon: UsersThree, label: "HR" },
  { icon: Package, label: "Assets" },
  { icon: HardHat, label: "Field Ops" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Receipt, label: "Billing" },
  { icon: CheckCircle, label: "Approvals" },
  { icon: ChartLineUp, label: "Analytics" },
  { icon: Warehouse, label: "Inventory" },
  { icon: Gauge, label: "Reports" },
];

const statements = [
  { from: "tender", to: "tracked project." },
  { from: "milestone", to: "verified invoice." },
  { from: "activity", to: "real-time dashboard." },
];

const InfraSystem = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % statements.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="system"
      className="relative w-full pt-10 pb-20 md:pt-16 md:pb-28 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      <style>{`
        @keyframes pioFlowStreak {
          0%   { top: -10px; opacity: 0; }
          5%   { opacity: 1; }
          30%  { opacity: 1; }
          35%  { top: 100%; opacity: 0; }
          35.1%, 100% { top: -10px; opacity: 0; }
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-310 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* LEFT COLUMN: Eyebrow, Title, Description, Animated Rotator */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] block text-left">
            [the revosolve system]
          </span>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              One operating system
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              behind every infrastructure project
            </span>
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-4 text-[#CACBDB] text-[15.5px] md:text-[16.5px] leading-relaxed">
            <p>
              Tenders, Projects, Finance, HR, Assets, Field Operations, Procurement, Billing, Approvals, Surveys, and Reports operate from one connected platform. Every operational activity updates the next automatically.
            </p>
          </div>

          {/* Monospace Single Line Animated Rotator */}
          <div className="font-mono text-[13.5px] sm:text-[14px] tracking-wide text-[#CACBDB] mt-1 flex items-center h-8 overflow-hidden">
            <span>Every&nbsp;</span>
            <AnimatePresence mode="wait">
              <Motion.span
                key={activeLine}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-white font-semibold inline-block"
              >
                {statements[activeLine].from}
              </Motion.span>
            </AnimatePresence>

            <span>&nbsp;becomes a&nbsp;</span>

            <AnimatePresence mode="wait">
              <Motion.span
                key={activeLine}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-[#A9A0F5] font-semibold inline-block"
              >
                {statements[activeLine].to}
              </Motion.span>
            </AnimatePresence>
          </div>
        </Motion.div>

        {/* RIGHT COLUMN: Interactive Operations Map Panel */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-6 border border-[rgba(135,123,241,0.22)] bg-linear-to-br from-[rgba(18,20,62,0.7)] to-[rgba(10,11,40,0.7)] p-6 md:p-8 rounded-lg shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          {/* Console Header */}
          <div className="font-mono flex justify-between items-center text-[10.5px] tracking-[0.14em] uppercase text-[#5C5F85] mb-5">
            <span>operations.map</span>
            <span className="text-[#A9A0F5]">● integrated</span>
          </div>

          {/* 3x4 Chips Grid */}
          <div className="grid grid-cols-4 gap-2">
            {systemConnectsChips.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="p-3 text-center flex flex-col items-center gap-1.5 border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] hover:border-[rgba(252,202,113,0.5)] hover:bg-[rgba(252,202,113,0.03)] transition-all duration-300 rounded-sm"
                >
                  <Icon size={19} className="text-[#FCCA71]" />
                  <span className="font-mono text-[8.5px] tracking-wide uppercase leading-tight text-[#FBFBFF]">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Flowing Golden Dots Connector Lines */}
          <div className="grid grid-cols-4 gap-2 h-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative flex justify-center overflow-hidden">
                {/* Static track */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(252,202,113,0.18)]" />
                {/* Flowing golden dot */}
                <span
                  style={{
                    position: "absolute",
                    left: "calc(50% - 3px)",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#FCCA71",
                    boxShadow: "0 0 10px #FCCA71, 0 0 20px rgba(252,202,113,0.4)",
                    animation: "pioFlowStreak 5.5s linear infinite",
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Unified Operational Core Badge */}
          <div className="font-mono flex items-center justify-center gap-2.5 p-3.5 text-[11.5px] sm:text-[12px] tracking-wide uppercase text-[#FBFBFF] border border-[rgba(135,123,241,0.25)] bg-[rgba(135,123,241,0.06)] rounded-sm">
            <Hexagon size={18} className="text-[#FCCA71]" />
            <span>One integrated operational core</span>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default InfraSystem;
