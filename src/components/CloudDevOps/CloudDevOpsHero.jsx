import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Hammer, Flask, RocketLaunch, Pulse } from "@phosphor-icons/react";

const PipeStage = (props) => {
  const Icon = props.icon;
  const { label, active } = props;
  return (
    <div 
      className="flex items-center gap-1 sm:gap-2 bg-[#0A0B28] px-2 sm:px-3.5 py-1.5 sm:py-2.5 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider whitespace-nowrap"
      style={{
        border: active ? "1px solid #877BF1" : "1px solid rgba(135,123,241,0.45)",
        background: active ? "rgba(135,123,241,0.16)" : "#0A0B28",
        color: active ? "#fff" : "#E7E8F4",
        animation: active ? "cidStagePulse 2.6s ease-in-out infinite" : "none"
      }}
    >
      <Icon size={14} className="sm:w-[15px] sm:h-[15px]" color={active ? "#fff" : "#A9A0F5"} />
      {label}
    </div>
  );
};

const PipeFlow = ({ delay = 0 }) => (
  <div className="relative w-[12px] sm:w-[34px] h-px shrink-0 bg-[rgba(135,123,241,0.25)]">
    <span 
      className="absolute -top-[2px] sm:-top-[3px] w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#877BF1]"
      style={{
        boxShadow: "0 0 8px #877BF1",
        animation: "cidFlowX 2.4s linear infinite",
        animationDelay: `${delay}s`
      }} 
    />
  </div>
);

const CloudDevOpsHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c]">
      <style>{`
        @keyframes cidFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes cidPulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
        @keyframes cidBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes cidTermIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
        @keyframes cidStagePulse { 0%,100% { box-shadow: 0 0 0 0 rgba(135,123,241,0.4); } 50% { box-shadow: 0 0 14px 2px rgba(135,123,241,0.5); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Soft Blue/Indigo Glow behind the left side */}
      <div className="hidden min-[1290px]:block w-[500px] h-[500px] absolute left-[-10%] bottom-[-20%] opacity-40 bg-linear-to-br from-[#191b57]/60 to-[#0e1038]/60 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] pr-[5%] min-[1290px]:pr-[44vw] py-6 min-[1290px]:py-12 z-20 relative bg-transparent gap-10 min-[1290px]:gap-0">
        
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-3 min-[1290px]:gap-4 w-full min-[1290px]:max-w-[680px] xl:max-w-[800px] min-[1290px]:flex-1 z-30 relative min-[1290px]:min-h-[380px] xl:min-h-[440px] justify-center">
          
          {/* Desktop Original Pill */}
          <div className="hidden min-[1290px]:block opacity-30 justify-start mb-1">
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              [
            </span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
              services
            </span>
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              ]
            </span>
          </div>

          {/* Mobile Styled Glassmorphic Services Badge */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-1 w-fit mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              services
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full">
            <div className="max-w-full min-[1290px]:max-w-none min-[1290px]:w-max min-[1290px]:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[24px] sm:text-[32px] md:text-4xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px] pb-1">
              Cloud &amp; DevOps
            </div>
            <div className="max-w-full min-[1290px]:w-auto justify-start text-white/90 text-[15px] sm:text-[20px] md:text-[24px] min-[1290px]:text-[22px] xl:text-[28px] font-semibold min-[1290px]:font-bold font-sans leading-snug tracking-[0.2px] mt-1.5">
              Secure, Scalable &amp; Resilient Digital Foundations
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-3 max-w-full min-[1290px]:max-w-[620px] xl:max-w-[720px] opacity-75 text-[#FBFBFF] text-[13px] sm:text-[15px] xl:text-[17px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-2 mb-3">
            <p>
              Modern enterprises require infrastructure that enables innovation — not infrastructure that slows it down.
              RevoSolve designs, builds, automates, and manages cloud-native infrastructure that improves operational resilience, accelerates software delivery, and lets you scale with confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 min-[1290px]:gap-6 items-center justify-center min-[1290px]:justify-start shrink-0 relative w-full mt-6 mb-4">
            {/* Primary Button */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Cloud Infrastructure & DevOps",
                  },
                })
              }
              className="btn-premium-glow min-w-[280px] max-w-full px-6 h-12 min-[1290px]:h-14 rounded-sm flex items-center justify-center gap-3 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[14px] min-[1290px]:text-lg font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Cloud Foundation
              </span>
              <img
                className="relative z-10 shrink-0 w-4 h-4 min-[1290px]:w-5 min-[1290px]:h-5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/hero_section/icon_2.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Cloud Infrastructure & DevOps",
                  },
                })
              }
              className="min-w-[280px] max-w-full px-6 h-12 min-[1290px]:h-14 rounded-md border-2 border-white/20 flex items-center justify-center gap-4 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[14px] min-[1290px]:text-lg font-semibold tracking-tight whitespace-nowrap">
                Talk to a Cloud Architect
              </span>
              <img
                className="shrink-0 w-3 h-3 min-[1290px]:w-3.5 min-[1290px]:h-3.5 group-hover:translate-x-1 transition-transform"
                src="/hero_section/icon_3.svg"
                alt=""
              />
            </button>
          </div>

          {/* Sub-features/Chips */}
          <div className="flex flex-row flex-wrap justify-center min-[1290px]:justify-start gap-x-6 gap-y-2 opacity-60 text-[#fbfbff] text-[11px] min-[1290px]:text-[13px] font-semibold font-sans uppercase tracking-widest mt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#877BF1]" />
              99.99% uptime targets
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#877BF1]" />
              Automation-first
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#877BF1]" />
              DevSecOps
            </span>
          </div>

        </div>

        {/* Right Column: Terminal Simulator + Pipeline Stages */}
        <div className="flex flex-col gap-6 justify-center items-center pointer-events-auto w-full mt-8 min-[1290px]:mt-0 min-[1290px]:w-[38vw] min-[1290px]:absolute min-[1290px]:right-[4%] min-[1290px]:top-1/2 min-[1290px]:-translate-y-1/2 z-20 mb-16 min-[1290px]:mb-0">
          
          {/* Terminal Box */}
          <Motion.div 
            initial={{ opacity: 0, y: 26 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-full max-w-[540px] rounded-[6px] border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-[rgba(135,123,241,0.18)]">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e5604c]" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FCCA71]" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#877BF1]" />
              <span className="ml-2 sm:ml-3 font-mono text-[10px] sm:text-[11px] tracking-wider text-[#5C5F85]">{`revosolve@prod:~/deploy`}</span>
            </div>
            <div className="px-3 sm:px-5.5 py-3 sm:py-5 font-mono text-[10.5px] sm:text-[12.5px] leading-relaxed text-[#CACBDB] text-left">
              <div style={{ animation: "cidTermIn .4s ease both .2s" }}>
                <span className="text-[#A9A0F5] mr-1.5">$</span> terraform apply <span className="text-[#5C5F85]">--auto-approve</span>
              </div>
              <div className="text-[#8F92B8]" style={{ animation: "cidTermIn .4s ease both .7s" }}>
                ✓ 42 resources provisioned <span className="text-[#5C5F85]">(eu-west · 3 zones)</span>
              </div>
              <div style={{ animation: "cidTermIn .4s ease both 1.2s" }}>
                <span className="text-[#A9A0F5] mr-1.5">$</span> kubectl rollout status deploy/core
              </div>
              <div className="text-[#8F92B8]" style={{ animation: "cidTermIn .4s ease both 1.7s" }}>
                ✓ rolling update complete <span className="text-[#5C5F85]">— 0 downtime</span>
              </div>
              <div style={{ animation: "cidTermIn .4s ease both 2.2s" }}>
                <span className="text-[#FCCA71] mr-1.5">▲</span> security scan · policies enforced <span className="text-[#A9A0F5]">passed</span>
              </div>
              <div style={{ animation: "cidTermIn .4s ease both 2.7s" }}>
                <span className="text-[#877BF1] mr-1.5">●</span> pipeline healthy
                <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-3.5 bg-[#877BF1] align-middle ml-1.5 animate-pulse" style={{ animation: "cidBlink 1.1s steps(1) infinite" }} />
              </div>
            </div>
          </Motion.div>

          {/* Pipeline Stages */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center w-full overflow-x-auto no-scrollbar py-2"
          >
            <div className="flex items-center mx-auto">
              <PipeStage icon={Hammer} label="Build" />
              <PipeFlow />
              <PipeStage icon={Flask} label="Test" />
              <PipeFlow delay={0.6} />
              <PipeStage icon={RocketLaunch} label="Deploy" active />
              <PipeFlow delay={1.2} />
              <PipeStage icon={Pulse} label="Monitor" />
            </div>
          </Motion.div>

        </div>

      </div>

      {/* Scroll Arrow - Bottom Center (Desktop & Mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/hero_section/arrow_icon.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/hero_section/gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default CloudDevOpsHero;
