import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Factory,
  RoadHorizon,
  Drop,
  Lightning,
  Train,
  Broadcast,
  Buildings,
} from "@phosphor-icons/react";

const twinIcons = [Factory, RoadHorizon, Drop, Lightning, Train, Broadcast];

const SimulationDigitalTwinHero = () => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Simulation & Digital Twin Systems",
      },
    });
  };

  const handleScrollDown = () => {
    const target = document.getElementById("simulation-content");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 50
        : scrollTop + rect.top;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] font-sans overflow-hidden">

      {/* Keyframes */}
      <style>{`
        @keyframes sdtFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes sdtPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes sdtBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes sdtDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
        @keyframes sdtTermIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes sdtStagePulse { 0%,100% { box-shadow: 0 0 0 0 rgba(135,123,241,0.4); } 50% { box-shadow: 0 0 14px 2px rgba(135,123,241,0.5); } }
        @keyframes sdtTwinScan { 0% { top: 0; opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { top: calc(100% - 2px); opacity: 0; } }
      `}</style>

      {/* Background Atmosphere */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(29, 31, 76, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(25, 26, 62, 0.45) 0%, transparent 45%)
          `,
        }}
      />

      {/* Soft glow top-left */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/5 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Drifting glow right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: -80,
          left: "55%",
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(135,123,241,0.2), transparent 68%)",
          filter: "blur(24px)",
          animation: "sdtDrift 18s ease-in-out infinite",
        }}
      />


      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-between pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-[7.5%] py-12 min-[1290px]:py-12 z-20 relative bg-transparent gap-12 min-[1290px]:gap-16">

        {/* LEFT: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-[540px] xl:max-w-[700px] min-[1290px]:flex-1"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 w-full">

            {/* Headline — gradient + white on same line */}
            <div className="flex flex-col items-center min-[1290px]:items-start w-full gap-1">
              <h1 className="max-w-full min-[1290px]:w-auto text-[20px] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Living digital models{" "}
                </span>
                <span className="text-white">
                  that improve operational decisions
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[560px] opacity-70 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed">
                Physical infrastructure continuously changes. Most organizations only understand what has already happened.
              </p>
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[560px] opacity-50 text-[#FBFBFF] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                RevoSolve engineers Simulation & Digital Twin Systems that create real-time digital representations of infrastructure, assets, facilities, and operations — so you can monitor conditions, simulate scenarios, predict outcomes, and decide faster.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center min-[1290px]:justify-start items-center">
            <button
              onClick={goConnect}
              className="btn-premium-glow w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Digital Twin
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/SimulationDigitalTwinSystems/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to a Twin Specialist
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/SimulationDigitalTwinSystems/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* RIGHT: Physical ↔ Digital Twin Sync Panel */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-[85vw] min-[1290px]:w-full min-[1290px]:max-w-[480px] xl:max-w-[520px] flex-1 flex flex-col z-10 mx-auto min-[1290px]:mx-0"
        >
          {/* Physical ↔ Digital twin grid */}
          <div className="grid grid-cols-[1fr_auto_1fr]">

            {/* Physical side */}
            <div className="border border-[rgba(135,123,241,0.45)] bg-[#0A0B28] p-[18px]">
              <div className="flex justify-between items-center mb-[14px]">
                <span className="font-mono text-[9.5px] tracking-[0.14em] text-white/60 uppercase">physical</span>
                <Buildings size={14} className="text-white/80" />
              </div>
              <div className="grid grid-cols-3 gap-[7px]">
                {twinIcons.map((Icon, i) => (
                  <div key={i} className="h-[34px] border border-[rgba(135,123,241,0.25)] flex items-center justify-center bg-white/5">
                    <Icon size={16} className="text-white/70" />
                  </div>
                ))}
              </div>
              <div className="mt-[14px] font-mono text-[9.5px] tracking-[0.08em] text-white/50">
                sensors: <span className="text-white font-medium">2,418 live</span>
              </div>
            </div>

            {/* Sync bridge */}
            <div className="flex flex-col justify-center items-center gap-[10px] px-[10px]">
              <div className="relative w-[44px] h-px bg-[rgba(252,202,113,0.35)]">
                <span
                  className="absolute top-[-3px] w-[6px] h-[6px] rounded-full bg-[#FCCA71] shadow-[0_0_10px_#FCCA71]"
                  style={{ animation: "sdtFlowX 1.8s linear infinite" }}
                />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-[#FCCA71] font-bold uppercase">sync</span>
              <div className="relative w-[44px] h-px bg-[rgba(252,202,113,0.35)]">
                <span
                  className="absolute top-[-3px] w-[6px] h-[6px] rounded-full bg-[#FCCA71] shadow-[0_0_10px_#FCCA71]"
                  style={{ animation: "sdtFlowX 1.8s linear infinite", animationDelay: "0.9s" }}
                />
              </div>
            </div>

            {/* Digital twin side */}
            <div
              className="border border-[#FCCA71] bg-[rgba(252,202,113,0.06)] p-[18px] relative overflow-hidden"
              style={{ animation: "sdtStagePulse 3s ease-in-out infinite" }}
            >
              {/* Scan line */}
              <div
                className="absolute left-0 right-0 h-[2px] pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, #FCCA71, transparent)",
                  animation: "sdtTwinScan 3.2s linear infinite",
                }}
              />
              <div className="flex justify-between items-center mb-[14px]">
                <span className="font-mono text-[9.5px] tracking-[0.14em] text-[#FCCA71] font-bold uppercase">digital twin</span>
                <span className="font-mono text-[9.5px] text-[#FCCA71] font-bold">● live</span>
              </div>
              <div className="grid grid-cols-3 gap-[7px]">
                {twinIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className="h-[34px] border border-dashed border-[rgba(252,202,113,0.45)] flex items-center justify-center bg-[rgba(252,202,113,0.08)]"
                  >
                    <Icon
                      size={16}
                      className="text-[#FCCA71]"
                      style={{ animation: `sdtPulse 2.4s ease-in-out infinite ${i * 0.3}s` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-[14px] font-mono text-[9.5px] tracking-[0.08em] text-[#FCCA71]">
                latency: <span className="text-white font-bold">0.4s</span>
              </div>
            </div>
          </div>

          {/* Telemetry strip */}
          <div className="border border-[rgba(252,202,113,0.25)] border-t-0 bg-[#050726] px-[18px] py-[14px] flex flex-wrap justify-between gap-[10px] font-mono text-[10px] tracking-[0.08em] text-white/90 uppercase">
            <span style={{ animation: "sdtTermIn .4s ease both .4s" }}>
              <span className="text-[#FCCA71] font-bold">▲</span> pump_07 vibration anomaly — predicted failure in 12d
            </span>
            <span style={{ animation: "sdtTermIn .4s ease both 1.1s" }}>
              simulation: flood_scenario_03{" "}
              <span className="text-[#FCCA71] font-bold">running</span>
              <span
                className="inline-block w-[7px] h-[12px] bg-[#FCCA71] align-middle ml-[6px]"
                style={{ animation: "sdtBlink 1.1s steps(1) infinite" }}
              />
            </span>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron */}
      <div className="absolute bottom-2 min-[1290px]:bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/SimulationDigitalTwinSystems/hero_arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric gradient transition */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/SimulationDigitalTwinSystems/hero_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default SimulationDigitalTwinHero;
