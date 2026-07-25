import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Database, Stack as Layers, Gear as Cog, GitMerge as Workflow } from "@phosphor-icons/react";

const STACK_LAYERS = [
  {
    id: "int",
    label: "Intelligence",
    sub: "AI · Decisions · Signals",
    icon: Brain,
    color: "#f5a742",
    chips: ["ML", "GenAI", "Forecast"],
  },
  {
    id: "aut",
    label: "Automation",
    sub: "Workflow · Approvals · RPA",
    icon: Workflow,
    color: "#ff9dd6",
    chips: ["Rules", "BPMN", "Events"],
  },
  {
    id: "data",
    label: "Data Fabric",
    sub: "Ingest · Model · Govern",
    icon: Database,
    color: "#c99dff",
    chips: ["ETL", "Warehouse", "Lineage"],
  },
  {
    id: "app",
    label: "Applications",
    sub: "ERP · CRM · Commerce · Docs",
    icon: Layers,
    color: "#b980ff",
    chips: ["Frappe", "Custom", "SaaS"],
  },
  {
    id: "infra",
    label: "Cloud Foundation",
    sub: "Compute · Network · Identity",
    icon: Cog,
    color: "#8b7dff",
    chips: ["K8s", "IAM", "Observability"],
  },
];

export const OperationalDiagram = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const t = useSpring(scrollYProgress, { stiffness: 60, damping: 22 });
  const rotate = useTransform(t, [0, 1], [-8, 8]);
  const lift = useTransform(t, [0, 1], [-12, 12]);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-140 mx-auto"
      data-testid="hero-diagram"
    >
      {/* Ambient glow behind stack */}
      <div
        className="absolute inset-0 -m-16 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(185,128,255,0.25), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(245,167,66,0.15), transparent 60%)",
          filter: "blur(30px)",
        }}
      />

      {/* Live-signal ticker top-left */}
      <Motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -top-4 left-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-xl"
      >
        <Motion.span
          className="w-1.5 h-1.5 rounded-full bg-[#f5a742]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{ boxShadow: "0 0 10px #f5a742" }}
        />
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/70">
          Operational · Live
        </span>
      </Motion.div>

      {/* Isometric stack container */}
      <Motion.div
        className="relative w-full h-130"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1400px",
        }}
      >
        <Motion.div
          style={{
            transformStyle: "preserve-3d",
            rotateX: 22,
            rotateZ: rotate,
            y: lift,
          }}
          className="relative w-full h-full"
        >
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            const rowY = 40 + i * 82; // vertical spacing so each slab visible
            const z = (STACK_LAYERS.length - i) * 8;
            return (
              <Motion.div
                key={layer.id}
                initial={{ opacity: 0, y: -60, rotateX: 60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.3 + i * 0.13,
                  duration: 0.9,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="absolute left-0 right-0 h-16 md:h-18.5 rounded-2xl border backdrop-blur-md flex items-center px-5 gap-4"
                style={{
                  top: rowY,
                  transform: `translateZ(${z}px)`,
                  background: `linear-gradient(115deg, ${layer.color}22, rgba(10,13,31,0.7))`,
                  borderColor: `${layer.color}55`,
                  boxShadow: `0 20px 40px -20px ${layer.color}55, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    background: `${layer.color}22`,
                    borderColor: `${layer.color}55`,
                  }}
                >
                  <Icon size={16} style={{ color: layer.color }} />
                </div>
                <div className="relative flex-1 min-w-0 text-left">
                  <div className="text-white font-semibold text-[14px] tracking-tight leading-tight truncate">
                    {layer.label}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-0.5 truncate">
                    {layer.sub}
                  </div>
                </div>
                <div className="relative hidden sm:flex items-center gap-1.5 shrink-0">
                  {layer.chips.slice(0, 2).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase border"
                      style={{
                        color: layer.color,
                        borderColor: `${layer.color}66`,
                        background: `${layer.color}12`,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <Motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: layer.color,
                    boxShadow: `0 0 12px ${layer.color}, 0 0 24px ${layer.color}66`,
                  }}
                  animate={{ left: ["-2%", "102%"] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: 1.2 + i * 0.32,
                    ease: "easeInOut",
                  }}
                />
              </Motion.div>
            );
          })}

          {/* Vertical spine connecting layers */}
          <Motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="absolute left-6 top-8 bottom-8 w-0.5 origin-top"
            style={{
              background: "linear-gradient(180deg, #f5a742 0%, #b980ff 100%)",
              transform: "translateZ(30px)",
              boxShadow: "0 0 12px #f5a742",
            }}
          />
        </Motion.div>
      </Motion.div>

      {/* Floating status badges */}
      <Motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="absolute -right-2 top-[38%] z-20 px-3 py-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md text-left opacity-85 hover:opacity-100 transition-opacity"
      >
        <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">
          Uptime · 30d
        </div>
        <div className="text-white/90 font-semibold text-lg leading-none mt-1">
          99.98<span className="text-white/40 text-sm">%</span>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute -left-2 bottom-[16%] z-20 px-3 py-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md text-left opacity-85 hover:opacity-100 transition-opacity"
      >
        <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">
          Cycle Time
        </div>
        <div className="text-[#f5a742]/90 font-semibold text-lg leading-none mt-1">
          −62<span className="text-white/40 text-sm">%</span>
        </div>
      </Motion.div>
    </div>
  );
};

export const AboutHero = () => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    const target = document.getElementById("our-reason-to-exist");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop ? scrollTop + rect.top - 70 : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col items-center justify-center pt-24 min-[1290px]:pt-10 z-10 font-sans overflow-hidden">
      {/* Decorative Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/10 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/5 rounded-full blur-[130px] pointer-events-none z-10" />

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-between pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-[7.5%] py-12 min-[1290px]:py-12 z-20 relative bg-transparent gap-12 min-[1290px]:gap-16">
        {/* Left Column: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left w-full min-[1290px]:w-[50%] min-[1290px]:max-w-162.5 shrink-0"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 min-[1290px]:gap-6 w-full">
            {/* Main Headline */}
            <div className="flex flex-col items-center min-[1290px]:items-start w-full">
              <h1 className="max-w-full justify-start text-white text-[28px] sm:text-4xl md:text-5xl min-[1290px]:text-[40px] xl:text-[48px] font-black font-sans leading-tight min-[1290px]:leading-13 xl:leading-15 tracking-[-0.02em]">
                We Engineer the Operational Systems{" "}
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Behind Modern Enterprises
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-full min-[1290px]:max-w-135 opacity-70 text-[#FBFBFF] text-sm sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed">
              Technology has never been the hardest part of transformation. <span className="text-white font-medium">Operations are.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 min-[1290px]:gap-6 items-center justify-center min-[1290px]:justify-start shrink-0 relative w-full mt-8 mb-4">
            
            {/* Primary Button */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Company",
                    service: "About Us",
                  },
                })
              }
              className="btn-premium-glow w-62.5 sm:w-65 min-[1290px]:w-65 px-4 h-11 min-[1290px]:h-11 rounded-md flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784] shrink-0"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Start a Conversation
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/AboutUs/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={handleScrollDown}
              className="w-62.5 sm:w-65 min-[1290px]:w-65 px-4 h-11 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group shrink-0"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Our Philosophy
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/AboutUs/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column: Interactive Isometric Stack Visual (From Testing.jsx) */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0 w-full min-[1290px]:w-[48%] relative scale-90 lg:scale-85 translate-y-6 lg:translate-y-8"
        >
          <OperationalDiagram />
        </Motion.div>
      </div>

      {/* Scroll Down Arrow - Desktop & Mobile */}
      <div className="absolute bottom-6 lg:bottom-10 left-0 right-0 w-full flex justify-center z-40">
        <img
          onClick={handleScrollDown}
          src="/AboutUs/hero_scroll_arrow.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>
    </section>
  );
};

export default AboutHero;
