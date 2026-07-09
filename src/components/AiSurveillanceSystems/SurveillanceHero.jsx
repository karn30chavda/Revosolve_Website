import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  VideoCamera, Cpu, Person, PersonSimpleWalk, Truck, HardHat, BellRinging
} from "@phosphor-icons/react";

const SurveillanceHero = () => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "AI Surveillance Systems",
      },
    });
  };

  const handleScrollDown = () => {
    const target = document.getElementById("surveillance-content");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 70
        : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] font-sans overflow-hidden">
      {/* Background Atmosphere Elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(29, 31, 76, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(25, 26, 62, 0.45) 0%, transparent 45%)
          `,
        }}
      />

      {/* Decorative Subtle Glow Spot */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/5 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-30" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(-45deg, rgba(135,123,241,0.05) 0 1px, transparent 1px 26px)", 
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)", 
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)" 
        }} 
      />

      <style>{`
        @keyframes cisFlowY { 0% { top: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 112%; opacity: 0; } }
        @keyframes rvRecBlink { 0%,55% { opacity: 1; } 60%,100% { opacity: 0.15; } }
        @keyframes rvScanSweep { 0% { top: 0%; } 100% { top: 98%; } }
        @keyframes rvBoxPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(252,202,113,0.5); } 50% { box-shadow: 0 0 0 5px rgba(252,202,113,0); } }
        @keyframes rvBoxDrift1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(26px,8px); } }
        @keyframes rvBoxDrift2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-20px,-6px); } }
        @keyframes rvAlertIn { 0% { opacity: 0; transform: translateX(14px); } 8% { opacity: 1; transform: none; } 88% { opacity: 1; } 100% { opacity: 0; } }
      `}</style>

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-between pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-[7.5%] py-12 min-[1290px]:py-12 z-20 relative bg-transparent gap-12 min-[1290px]:gap-16">
        {/* Left Column: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-[540px] xl:max-w-[700px] min-[1290px]:flex-1"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 w-full">
            {/* Main Headline Stack */}
            <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full gap-1">
              <h1 className="max-w-full min-[1290px]:w-auto bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                Your cameras record.
              </h1>
              <h3 className="max-w-full min-[1290px]:w-auto justify-start text-white text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                RevoVision understands.
              </h3>
            </div>

            {/* Description Subtext */}
            <div className="flex flex-col gap-2 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-70 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-relaxed">
                More than video analytics — a real-time operational intelligence platform.
              </p>
              
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-50 text-[#FBFBFF] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                RevoVision continuously analyzes live video streams, detects events and anomalies, generates intelligent alerts, and integrates with enterprise workflows — enhancing your existing CCTV infrastructure with enterprise-grade AI, not replacing it.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center min-[1290px]:justify-start items-center">
            <button
              onClick={goConnect}
              className="btn-premium-glow min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Book a Live Demonstration
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/AiSurveillanceSystems/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to a Computer Vision Specialist
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/AiSurveillanceSystems/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column: Live Surveillance Feed Simulation */}
        <Motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full min-[1290px]:max-w-[480px] xl:max-w-[520px] flex-1 flex flex-col z-10"
        >
          <div className="border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.45)] rounded-[12px] overflow-hidden">
            <div className="flex items-center gap-[10px] px-[16px] py-[12px] border-b border-[rgba(135,123,241,0.18)]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#877BF1] shadow-[0_0_8px_#877BF1]" />
              <span className="text-[11px] tracking-widest text-[#E7E8F4] font-mono font-bold">
                CAM-07 · loading dock · east
              </span>
              <span className="ml-auto text-[10px] tracking-widest text-[#FCCA71] uppercase font-mono flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FCCA71] inline-block animate-pulse" />
                LIVE
              </span>
            </div>
            
            {/* Viewfinder simulation */}
            <div className="relative h-[230px] bg-linear-to-b from-[#0D0F33] via-[#070829] to-[#0A0B28] overflow-hidden">
              <div 
                className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#877BF1]/55 to-transparent" 
                style={{ animation: "rvScanSweep 4.5s linear infinite" }} 
              />
              <div className="absolute top-[10px] left-[10px] w-[18px] h-[18px] border-t-2 border-l-2 border-[#877BF1]" />
              <div className="absolute top-[10px] right-[10px] w-[18px] h-[18px] border-t-2 border-r-2 border-[#877BF1]" />
              <div className="absolute bottom-[10px] left-[10px] w-[18px] h-[18px] border-b-2 border-l-2 border-[#877BF1]" />
              <div className="absolute bottom-[10px] right-[10px] w-[18px] h-[18px] border-b-2 border-r-2 border-[#877BF1]" />
              
              <div 
                className="absolute left-0 right-0 bottom-0 h-[44%] opacity-10" 
                style={{ 
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", 
                  backgroundSize: "46px 22px", 
                  transform: "perspective(300px) rotateX(48deg)", 
                  transformOrigin: "bottom" 
                }} 
              />

              {/* Bounding box: Person */}
              <div 
                className="absolute top-[18%] left-[14%] w-[70px] h-[100px] border-[1.5px] border-[#4FD47C]" 
                style={{ animation: "rvBoxDrift1 7s ease-in-out infinite" }}
              >
                <div className="absolute top-[-22px] left-[-1.5px] bg-[#4FD47C] text-[#04160A] font-mono text-[9px] tracking-[0.06em] px-1.5 py-0.5 font-bold flex items-center gap-1 whitespace-nowrap">
                  <Person size={11} weight="bold" />PERSON 0.98
                </div>
                <PersonSimpleWalk size={32} className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#4FD47C]/50" />
              </div>

              {/* Bounding box: Vehicle */}
              <div 
                className="absolute top-[44%] right-[12%] w-[110px] h-[64px] border-[1.5px] border-[#59B8FF]" 
                style={{ animation: "rvBoxDrift2 8s ease-in-out infinite" }}
              >
                <div className="absolute top-[-22px] left-[-1.5px] bg-[#59B8FF] text-[#051523] font-mono text-[9px] tracking-[0.06em] px-1.5 py-0.5 font-bold flex items-center gap-1 whitespace-nowrap">
                  <Truck size={11} weight="bold" />VEHICLE 0.95
                </div>
                <Truck size={32} className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[#59B8FF]/50" />
              </div>

              {/* Bounding box: PPE Alert */}
              <div 
                className="absolute bottom-[10%] left-[44%] w-[64px] h-[85px] border-[1.5px] border-[#FCCA71]" 
                style={{ animation: "rvBoxPulse 1.8s ease-out infinite" }}
              >
                <div className="absolute top-[-22px] left-[-1.5px] bg-[#FCCA71] text-[#2B1A05] font-mono text-[9px] tracking-[0.06em] px-1.5 py-0.5 font-bold flex items-center gap-1 whitespace-nowrap">
                  <HardHat size={11} weight="bold" />NO HELMET
                </div>
                <Person size={32} className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#FCCA71]/50" />
              </div>

              {/* Real-time alert toast */}
              <div 
                className="absolute top-[14px] right-[40px] flex items-center gap-2.5 rounded-sm border border-[#FCCA71]/30 bg-[#070829]/80 backdrop-blur-md px-3 py-2 font-mono text-[10px] tracking-[0.06em] text-[#FCCA71] uppercase font-bold shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                style={{ animation: "rvAlertIn 6s ease-in-out infinite" }}
              >
                <BellRinging size={14} className="animate-bounce" />PPE violation → incident #1042 created
              </div>
            </div>

            <div className="flex justify-between px-[16px] py-[12px] border-t border-[rgba(135,123,241,0.18)] text-[10px] tracking-widest text-[#E7E8F4] uppercase font-mono font-bold">
              <span className="flex items-center gap-[7px] text-[#E7E8F4]"><Cpu size={14} className="text-[#877BF1]" />Edge inference 24ms</span>
              <span className="flex items-center gap-[7px] text-[#E7E8F4]"><VideoCamera size={14} className="text-[#877BF1]" />212 cams online</span>
              <span className="flex items-center gap-[7px] text-[#E7E8F4]"><BellRinging size={14} className="text-[#877BF1]" />3 active alerts</span>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/AiSurveillanceSystems/hero_arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/AiSurveillanceSystems/hero_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default SurveillanceHero;
