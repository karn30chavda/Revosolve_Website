import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import {
  UsersThree,
  FlowArrow,
  Gear,
  Users,
  AppWindow,
  ClipboardText,
  LockSimple,
  XCircle,
  ShareNetwork,
  Heart,
  UserCircle,
  Eye,
  CheckCircle,
  Infinity as InfinityIcon,
  ChartLineUp
} from "@phosphor-icons/react";

const compare = [
  { 
    dim: "Starting Point", 
    trad: "Starts with technology and feature lists", 
    revo: "Starts with business models and users" 
  },
  { 
    dim: "System Design", 
    trad: "Isolated, standalone applications", 
    revo: "Integrated, platform-first systems" 
  },
  { 
    dim: "User Focus", 
    trad: "Built strictly to specification", 
    revo: "Built around real users and adoption" 
  },
  { 
    dim: "Architecture", 
    trad: "Optimized for initial launch", 
    revo: "Engineered for scale and maintainability" 
  },
  { 
    dim: "Delivery", 
    trad: "Rigid scope, fixed assumptions", 
    revo: "Transparent, realistic, consistent execution" 
  },
  { 
    dim: "After Launch", 
    trad: "Engagement ends at deployment", 
    revo: "Long-term evolution partnership" 
  },
];

const FlowDotX = ({ w = 26, delay = 0 }) => (
  <div className="relative h-px bg-white/20" style={{ width: w }}>
    <span
      className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71]"
      style={{
        animation: "rseFlowX 2s linear infinite",
        animationDelay: `${delay}s`,
      }}
    />
  </div>
);

const CmpVisualTrad = ({ idx }) => {
  const c = "#8F92B8";
  switch (idx) {
    case 0:
      return (
        <div className="flex items-center gap-2" style={{ color: c }}>
          <Gear size={20} />
          <span className="w-[32px] border-t border-dashed" style={{ borderColor: c }} />
          <Users size={16} />
        </div>
      );
    case 1:
      return (
        <div className="flex items-center gap-[12px]" style={{ color: c }}>
          <AppWindow size={18} />
          <AppWindow size={18} />
          <AppWindow size={18} />
        </div>
      );
    case 2:
      return (
        <div className="flex items-center gap-[10px]" style={{ color: c }}>
          <ClipboardText size={20} />
          <div className="flex flex-col gap-1">
            <span className="w-[54px] h-[2px]" style={{ backgroundColor: c }} />
            <span className="w-[38px] h-[2px]" style={{ backgroundColor: c }} />
            <span className="w-[46px] h-[2px]" style={{ backgroundColor: c }} />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center gap-2">
          <div
            className="w-[32px] h-[32px] border border-white/20 rounded"
            style={{
              background: "repeating-linear-gradient(45deg, #232647 0 4px, #191b33 4px 8px)",
            }}
          />
          <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: c }}>
            Monolith
          </span>
        </div>
      );
    case 4:
      return (
        <div className="flex items-center gap-2.5" style={{ color: c }}>
          <LockSimple size={20} />
          <div className="flex gap-1">
            <span className="w-[24px] h-2 rounded-xs" style={{ backgroundColor: c }} />
            <span className="w-[24px] h-2 rounded-xs" style={{ backgroundColor: c }} />
            <span className="w-[24px] h-2 rounded-xs" style={{ backgroundColor: c }} />
          </div>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1.5" style={{ color: c }}>
          <span className="w-14 h-[1.5px]" style={{ backgroundColor: c }} />
          <XCircle size={18} color="#D15B5B" />
        </div>
      );
  }
};

const CmpVisualRevo = ({ idx }) => {
  switch (idx) {
    case 0:
      return (
        <div className="flex items-center gap-1.5">
          <UsersThree size={20} color="#FCCA71" />
          <FlowDotX w={18} />
          <FlowArrow size={16} color="#FFFFFF" />
          <FlowDotX w={18} delay={0.6} />
          <Gear size={16} color="#FCCA71" className="animate-spin" style={{ animationDuration: "8s" }} />
        </div>
      );
    case 1:
      return (
        <div className="flex items-center gap-1.5">
          <AppWindow size={18} color="#FFFFFF" />
          <FlowDotX w={14} />
          <ShareNetwork size={22} color="#FCCA71" className="animate-pulse" />
          <FlowDotX w={14} delay={0.6} />
          <AppWindow size={18} color="#FFFFFF" />
        </div>
      );
    case 2:
      return (
        <div className="flex items-center gap-2.5">
          <Heart
            size={20}
            color="#FCCA71"
            className="animate-[rsePulse_1.6s_ease-in-out_infinite]"
          />
          <div className="flex gap-1.5">
            <UserCircle
              size={18}
              color="#FFFFFF"
              className="animate-[rsePulse_1.9s_ease-in-out_infinite]"
            />
            <UserCircle
              size={18}
              color="#FFFFFF"
              className="animate-[rsePulse_1.9s_ease-in-out_infinite_0.35s]"
            />
            <UserCircle
              size={18}
              color="#FCCA71"
              className="animate-[rsePulse_1.9s_ease-in-out_infinite_0.7s]"
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col gap-0.5 items-center">
            <span
              className="w-[50px] h-2 bg-[#FCCA71] rounded-xs shadow-[0_0_8px_rgba(252,202,113,0.6)] animate-[rseLayer_3.2s_ease-in-out_infinite]"
            />
            <span className="w-[50px] h-2 bg-white rounded-xs" />
            <span className="w-[50px] h-2 bg-white rounded-xs" />
            <span className="w-[50px] h-2 bg-[#FCCA71]/40 rounded-xs" />
          </div>
          <span className="font-mono text-[9px] tracking-widest text-[#FCCA71] uppercase font-bold">
            Modular
          </span>
        </div>
      );
    case 4:
      return (
        <div className="flex items-center gap-2.5">
          <Eye size={18} color="#FCCA71" />
          <div
            className="relative w-16 h-1.5 rounded-full overflow-hidden border"
            style={{
              backgroundColor: "#0A0B28",
              borderColor: "rgba(135,123,241,0.45)",
            }}
          >
            <span
              className="absolute top-0 bottom-0 w-6 bg-linear-to-r from-transparent via-[#FCCA71]/95 to-transparent animate-[rseFlowX_1.8s_linear_infinite]"
            />
          </div>
          <CheckCircle size={16} color="#FFFFFF" />
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-2.5">
          <InfinityIcon size={26} color="#FCCA71" className="animate-pulse" />
          <FlowDotX w={30} />
          <ChartLineUp size={18} color="#FFFFFF" />
        </div>
      );
  }
};

const ProductPlatformComparison = () => {
  const [cmpIdx, setCmpIdx] = useState(0);
  const [cmpProg, setCmpProg] = useState(0);
  const [cmpFade, setCmpFade] = useState(false);
  const paused = useRef(false);
  const fadeT = useRef(null);
  const stateRef = useRef({ idx: 0, prog: 0, fade: false });

  useEffect(() => {
    stateRef.current = { idx: cmpIdx, prog: cmpProg, fade: cmpFade };
  }, [cmpIdx, cmpProg, cmpFade]);

  const goCmp = (i) => {
    if (i === stateRef.current.idx) {
      setCmpProg(0);
      return;
    }
    clearTimeout(fadeT.current);
    setCmpFade(true);
    fadeT.current = setTimeout(() => {
      setCmpIdx(i);
      setCmpProg(0);
      setCmpFade(false);
    }, 280);
  };

  useEffect(() => {
    const dur = 3000;
    const interval = 30;
    const t = setInterval(() => {
      if (paused.current || stateRef.current.fade) return;
      const p = stateRef.current.prog + interval / dur;
      if (p >= 1) goCmp((stateRef.current.idx + 1) % compare.length);
      else setCmpProg(p);
    }, interval);
    return () => {
      clearInterval(t);
      clearTimeout(fadeT.current);
    };
  }, []);

  const fadeStyle = {
    opacity: cmpFade ? 0 : 1,
    transform: cmpFade ? "translateY(9px)" : "translateY(0)",
    transition: "opacity .28s ease, transform .28s cubic-bezier(.2,.7,.2,1)",
  };

  return (
    <section className="relative w-full bg-transparent pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden z-20 scroll-mt-20">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes rseFlowY { 0% { top: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 112%; opacity: 0; } }
          @keyframes rseFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
          @keyframes rsePulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
          @keyframes rseDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
          @keyframes rseRing { 0% { transform: translate(-50%,-50%) scale(1); opacity: 0.55; } 100% { transform: translate(-50%,-50%) scale(2.1); opacity: 0; } }
          @keyframes rseLayer { 0% { opacity: 0; transform: translateY(10px); } 24% { opacity: 1; transform: translateY(0); } 86% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(10px); } }
        `
      }} />

      {/* Decorative Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto font-sans">
        
        {/* Section Tag */}
        <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-8 lg:mb-10">
          [Traditional Development vs RevoSolve Engineering]
        </div>

        {/* Main Grid Wrapper */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-10 items-stretch w-full mt-4"
        >
          {/* Left Side: Navigation Tabs */}
          <div className="flex flex-col justify-start w-full">
            {compare.map((c, i) => {
              const isActive = i === cmpIdx;
              return (
                <button
                  key={c.dim}
                  onClick={() => goCmp(i)}
                  className="w-full text-left bg-transparent border-t border-white/10 py-3 flex flex-col gap-1 cursor-pointer transition-colors duration-300 group outline-hidden"
                >
                  <span
                    className={`text-[14px] md:text-[15px] font-semibold transition-colors duration-300 ${
                      isActive ? "" : "text-[#B4B6D4] group-hover:text-white"
                    }`}
                    style={{
                      color: isActive ? "#FCCA71" : undefined,
                    }}
                  >
                    {c.dim}
                  </span>
                  
                  {/* Progress bar line container */}
                  <div className="h-[3px] w-full bg-[#0A0B28] relative overflow-hidden mt-1">
                    <div
                      className="absolute left-0 top-0 h-full"
                      style={{
                        width: `${isActive ? Math.round(cmpProg * 100) : 0}%`,
                        background: isActive ? "linear-gradient(90deg, #877BF1, #FCCA71)" : "#877BF1",
                        boxShadow: isActive ? "0 0 8px rgba(252, 202, 113, 0.5)" : "none",
                        transition: isActive && cmpProg > 0 ? "width 30ms ease-in-out" : "none",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Stage Player Box */}
          <div className="border border-white/10 rounded-lg flex flex-col min-h-[270px] w-full overflow-hidden bg-[#0A0B28]">
            
            {/* Stage Box Header */}
            <div className="text-center py-3.5 px-4 border-b border-white/10 bg-[#0A0B28]">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#5C5F85] uppercase mb-1 select-none">
                Dimension
              </div>
              <div style={fadeStyle}>
                <span className="font-bold text-[19px] md:text-[23px] lg:text-[25px] tracking-tight text-white">
                  {compare[cmpIdx].dim}
                </span>
              </div>
            </div>

            {/* Split Panel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1 relative">
              
              {/* Left Column: Traditional */}
              <div className="relative p-6 md:p-7 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                {/* Pattern Background overlay */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 5px)",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D15B5B] shadow-[0_0_8px_#D15B5B]" />
                      <span className="font-mono text-[10px] md:text-[11px] tracking-[0.14em] text-[#C5C6DD] uppercase font-bold">
                        Traditional
                      </span>
                    </div>
                    <div className="min-h-[42px] max-w-[180px] flex items-center mb-2">
                      <CmpVisualTrad idx={cmpIdx} />
                    </div>
                  </div>
                  <div
                    className="text-[14px] md:text-[15.5px] leading-relaxed text-[#EFF0FF] text-left"
                    style={fadeStyle}
                  >
                    {compare[cmpIdx].trad}
                  </div>
                </div>
              </div>

              {/* Right Column: RevoSolve */}
              <div className="relative p-6 md:p-7 overflow-hidden bg-linear-to-b from-[#12143e]/40 to-[#0a0b28]/30">
                {/* Floating ambient radial glow */}
                <div
                  className="absolute -top-10 -right-8 w-44 h-44 bg-radial from-[#877BF1]/20 to-transparent blur-xl pointer-events-none z-0"
                  style={{
                    animation: "rseDrift 14s ease-in-out infinite",
                  }}
                />
                <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_9px_#FCCA71]" />
                      <span className="font-mono text-[10px] md:text-[11px] tracking-[0.14em] text-[#FCCA71] uppercase font-bold">
                        RevoSolve
                      </span>
                    </div>
                    <div className="min-h-[42px] max-w-[180px] flex items-center mb-2">
                      <CmpVisualRevo idx={cmpIdx} />
                    </div>
                  </div>
                  <div
                    className="text-[14px] md:text-[15.5px] leading-relaxed text-white font-semibold text-left"
                    style={fadeStyle}
                  >
                    {compare[cmpIdx].revo}
                  </div>
                </div>
              </div>

              {/* Center Seam Line Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-[#877BF1] to-transparent opacity-60 z-10 pointer-events-none hidden md:block" />
              
              {/* VS Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-20 pointer-events-none hidden md:block">
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#877BF1]/60 rounded-full animate-ping [animation-duration:2.6s]"
                />
                <span className="absolute inset-0 rotate-45 border border-[#877BF1]/50 bg-[#0A0B28]" />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[12px] font-bold tracking-wider text-[#A9A0F5]">
                  VS
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductPlatformComparison;
