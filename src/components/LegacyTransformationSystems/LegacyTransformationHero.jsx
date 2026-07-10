import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  Warning,
  ShieldCheck,
  ArrowDown,
} from "@phosphor-icons/react";

const LegacyTile = ({ label, sub }) => (
  <div
    style={{
      border: "1px solid rgba(252,202,113,0.35)",
      minHeight: "52px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "4px 2px",
      textAlign: "center",
      fontSize: "clamp(8px, 1.2vw, 10px)",
      letterSpacing: "0.04em",
      color: "#FFFFFF",
      textTransform: "uppercase",
    }}
    className="rounded-sm font-semibold font-mono"
  >
    <div>{label}</div>
    <div className="text-[#FCCA71]" style={{ fontSize: "clamp(7px, 1vw, 8px)", marginTop: 2 }}>{sub}</div>
  </div>
);

const ModernTile = ({ label, sub }) => (
  <div
    style={{
      border: "1px solid rgba(135,123,241,0.45)",
      minHeight: "52px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "4px 2px",
      textAlign: "center",
      fontSize: "clamp(8px, 1.2vw, 10px)",
      letterSpacing: "0.04em",
      color: "#FFFFFF",
      textTransform: "uppercase",
      background: "rgba(135,123,241,0.06)",
    }}
    className="rounded-sm font-semibold font-mono"
  >
    <div>{label}</div>
    <div className="text-[#A9A0F5]" style={{ fontSize: "clamp(7px, 1vw, 8px)", marginTop: 2 }}>{sub}</div>
  </div>
);

const LegacyTransformationHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Legacy Transformation Systems",
      },
    });
  };

  const handleScrollDown = () => {
    if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      const target = document.getElementById("legacy-what-we-do");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex items-center justify-center pt-24 pb-16 z-10 bg-[#01031c] overflow-hidden">
      <style>{`
        @keyframes rseFlowY { 0% { top: -10%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 108%; opacity: 0; } }
        @keyframes rseDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
        @keyframes lmmCrackFlicker { 0%,100% { opacity: 0.85; } 46% { opacity: 0.85; } 50% { opacity: 0.4; } 54% { opacity: 0.85; } }
        @keyframes lmmProgressSweep { 0% { width: 8%; } 60% { width: 68%; } 100% { width: 68%; } }
        @keyframes lmmModGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(135,123,241,0.05); } 50% { box-shadow: 0 0 8px 1px rgba(135,123,241,0.15); } }
      `}</style>

      {/* Blueprint grid overlay */}
      <div
        style={{
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
        }}
        className="absolute inset-0 pointer-events-none z-0 opacity-35 bg-[linear-gradient(rgba(135,123,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(135,123,241,0.05)_1px,transparent_1px)] bg-size-[46px_46px]"
      />

      {/* Atmospheric Glow */}
      <div
        style={{
          background: "radial-gradient(circle, rgba(135,123,241,0.18), transparent 68%)",
          animation: "rseDrift 18s ease-in-out infinite",
        }}
        className="absolute top-[-60px] right-[8%] w-[420px] h-[420px] filter blur-[20px] pointer-events-none"
      />

      {/* Main Content Layout */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16 z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-3 sm:gap-4 w-full">
          {/* Heading */}
          <div className="w-full">
            <Motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[48px] font-black font-sans leading-tight tracking-tight pb-1"
            >
              Modernizing business-critical systems{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                without disrupting operations
              </span>
            </Motion.h1>
          </div>

          {/* Description */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 text-[14px] sm:text-[16px] lg:text-[17px] font-normal font-sans leading-relaxed mt-2 mb-1"
          >
            <p className="text-[#CACBDB] opacity-95">
              Technology should accelerate business growth — not become the reason it slows down.
            </p>
            <p className="text-[#8F92B8] opacity-90">
              We help governments, financial institutions, and enterprises modernize legacy applications, migrate critical workloads, and transform aging technology into scalable, secure, cloud-ready systems — while preserving operational continuity.
            </p>
          </Motion.div>

          {/* CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-start w-full mt-1 mb-4"
          >
            {/* Primary Button */}
            <button
              onClick={goConnect}
              className="btn-premium-glow w-full sm:w-auto min-w-[180px] sm:min-w-[200px] px-5 h-10 md:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-[13px] md:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Modernize Your Legacy Systems
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/LegacyTransformationSystems/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={goConnect}
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] px-5 h-10 md:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-[13px] md:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to a Modernization Expert
              </span>
              <img
                className="shrink-0 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                src="/LegacyTransformationSystems/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </Motion.div>
        </div>

        {/* Right Column: Migration Console */}
        <div className="lg:col-span-6 flex justify-center items-center w-full">
          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            style={{
              border: "1px solid rgba(135,123,241,0.18)",
              background: "linear-gradient(160deg, #0F1034, #0A0B28)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            }}
            className="w-full max-w-[540px] rounded-md p-4 sm:p-6"
          >
            {/* Console Header */}
            <div className="flex justify-between items-center mb-5 font-mono text-[clamp(8px,1.2vw,10px)] tracking-[0.14em] uppercase">
              <span className="text-[#5C5F85]">migration_console</span>
              <span className="text-[#A9A0F5]">● zero-downtime cutover in progress</span>
            </div>

            {/* Vertical Migration Bridge Stack */}
            <div className="flex flex-col items-stretch w-full gap-1">
              {/* Legacy Monolith block */}
              <div
                style={{
                  border: "1px dashed rgba(252,202,113,0.35)",
                  background: "rgba(252,202,113,0.04)",
                  padding: "clamp(12px, 1.5vw, 16px)",
                  animation: "lmmCrackFlicker 5s ease-in-out infinite",
                }}
                className="rounded-sm w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[#FCCA71] uppercase tracking-[0.12em] text-[clamp(8px,1.2vw,10px)]">
                    Legacy Monolith
                  </span>
                  <Warning size={14} color="#FCCA71" className="shrink-0" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <LegacyTile label="Core v3.2" sub="EOL 2019" />
                  <LegacyTile label="Batch Jobs" sub="Nightly" />
                  <LegacyTile label="Oracle 11g" sub="Unsupported" />
                  <LegacyTile label="No APIs" sub="Point-to-point" />
                </div>
              </div>

              {/* Central Vertical Bridge / Flow block */}
              <div className="flex flex-row items-center justify-center my-1.5 relative w-full">
                {/* Spacer */}
                <div className="flex-1 text-right pr-3 opacity-0 pointer-events-none select-none uppercase font-mono text-[clamp(7px,1vw,9px)] tracking-[0.12em]">
                  Strangler-fig migration
                </div>

                {/* Line & Arrow */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    style={{
                      position: "relative",
                      width: "1.5px",
                      height: "22px",
                      borderLeft: "1.5px dashed rgba(135,123,241,0.25)",
                    }}
                  >
                    {[0, 1].map((d) => (
                      <span
                        key={d}
                        style={{
                          position: "absolute",
                          left: "-2.5px",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#FCCA71",
                          boxShadow: "none",
                          animation: "rseFlowY 2s linear infinite",
                          animationDelay: `${d}s`,
                        }}
                      />
                    ))}
                  </div>
                  <ArrowDown size={16} color="#877BF1" className="shrink-0 mt-0.5" />
                </div>

                {/* Right label */}
                <div className="flex-1 text-left pl-3 uppercase font-mono text-[clamp(7px,1vw,9px)] tracking-[0.12em] text-[#CACBDB]">
                  Strangler-fig migration
                </div>
              </div>

              {/* Cloud-Native block */}
              <div
                style={{
                  border: "1px solid rgba(135,123,241,0.45)",
                  background: "rgba(135,123,241,0.05)",
                  padding: "clamp(12px, 1.5vw, 16px)",
                  animation: "lmmModGlow 3.4s ease-in-out infinite",
                }}
                className="rounded-sm w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[#A9A0F5] uppercase tracking-[0.12em] text-[clamp(8px,1.2vw,10px)]">
                    Cloud Platform
                  </span>
                  <ShieldCheck size={14} color="#877BF1" className="shrink-0" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <ModernTile label="Services" sub="Autoscaled" />
                  <ModernTile label="Streaming" sub="Real-Time" />
                  <ModernTile label="PostgreSQL" sub="Managed HA" />
                  <ModernTile label="Open APIs" sub="Governed" />
                </div>
              </div>
            </div>

            {/* Migration progress */}
            <div className="mt-6">
              <div className="flex justify-between font-mono text-[clamp(8px,1.2vw,9.5px)] tracking-[0.12em] uppercase text-[#CACBDB] mb-2">
                <span>Workloads Migrated</span>
                <span className="text-[#A9A0F5]">68% · uninterrupted</span>
              </div>
              <div
                style={{
                  height: 6,
                  background: "rgba(135,123,241,0.18)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    background: "linear-gradient(90deg, #FCCA71, #877BF1)",
                    animation: "lmmProgressSweep 6s ease-out both",
                  }}
                />
              </div>
            </div>
          </Motion.div>
        </div>

      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/LegacyTransformationSystems/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/LegacyTransformationSystems/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default LegacyTransformationHero;
