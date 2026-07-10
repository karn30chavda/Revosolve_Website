import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Cpu, Sparkle, ShieldCheck, Database, UserCheck } from "@phosphor-icons/react";

const GenAIHero = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  // Animation cycle for the agent terminal simulation
  useEffect(() => {
    let timer;
    if (step === 0) {
      timer = setTimeout(() => setStep(1), 1200); // User bubble appears
    } else if (step === 1) {
      timer = setTimeout(() => setStep(2), 1400); // Query status appears
    } else if (step === 2) {
      timer = setTimeout(() => setStep(3), 1000); // Thinking dots appear
    } else if (step === 3) {
      timer = setTimeout(() => setStep(4), 1200); // Agent response appears
    } else if (step === 4) {
      timer = setTimeout(() => setStep(5), 6000); // Complete rest state (with loader dots)
    } else if (step === 5) {
      timer = setTimeout(() => setStep(0), 1500); // Reset
    }
    return () => clearTimeout(timer);
  }, [step]);

  const handleScrollDown = () => {
    const target = document.getElementById("genai-what-we-do");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] overflow-hidden">
      
      {/* Background Atmosphere Gradients */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 80%, rgba(29, 31, 76, 0.8) 0%, transparent 60%),
            radial-gradient(circle at 90% 20%, rgba(135, 123, 241, 0.1) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Subtle Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] pr-[5%] min-[1290px]:pr-[44vw] py-6 min-[1290px]:py-12 z-20 relative bg-transparent gap-10 min-[1290px]:gap-0">
        
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-3 min-[1290px]:gap-4 w-full min-[1290px]:max-w-[680px] xl:max-w-[800px] min-[1290px]:flex-1 z-30 relative min-[1290px]:min-h-[380px] xl:min-h-[440px] justify-center">
          


          {/* Heading */}
          <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full">
            <h1 className="max-w-full justify-start text-white text-[20px] sm:text-[32px] md:text-4xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px] pb-1">
              Transforming institutional workflows through{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                applied AI
              </span>
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-3 max-w-full min-[1290px]:max-w-[620px] xl:max-w-[720px] opacity-75 text-[#FBFBFF] text-[13px] sm:text-[15px] xl:text-[17px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-2 mb-3">
            <p className="font-semibold text-white/95 text-[14px] sm:text-[16px] xl:text-[18px]">
              Artificial Intelligence delivers measurable value only when it becomes part of how an organization operates.
              From AI Agents and Document Intelligence to Conversational AI and Enterprise Knowledge Systems – we engineer AI that moves beyond experimentation into production-ready operational systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 min-[1290px]:gap-6 items-center justify-center min-[1290px]:justify-start shrink-0 relative w-full mt-6 mb-4">
            
            {/* Primary Button (Standard Website Theme Style) */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Generative AI Systems",
                  },
                })
              }
              className="btn-premium-glow w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your AI System
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/AiIntelligentSystems/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button (Standard Website Theme Style) */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Generative AI Systems",
                  },
                })
              }
              className="w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to an AI Solutions Architect
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/AiIntelligentSystems/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>



        </div>

        {/* Right Column: Animated RevoSolve Agent Chat Simulation (Themed) */}
        <div className="flex flex-col justify-center items-center pointer-events-auto w-full mt-8 min-[1290px]:mt-0 min-[1290px]:w-[38vw] min-[1290px]:absolute min-[1290px]:right-[4%] min-[1290px]:top-1/2 min-[1290px]:-translate-y-1/2 z-20 mb-16 min-[1290px]:mb-0">
          
          <Motion.div 
            initial={{ opacity: 0, y: 25, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85vw] sm:w-full sm:max-w-[500px] xl:max-w-[540px] rounded-xl border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[rgba(135,123,241,0.18)] bg-[#0A0B28]">
              <div className="flex items-center gap-2.5">
                <Cpu size={18} className="text-[#877BF1]" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#CACBDB] font-semibold">
                  REVOSOLVE_AGENT
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]" />
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#5C5F85] uppercase font-bold">
                  ONLINE
                </span>
              </div>
            </div>

            {/* Chat Body Container */}
            <div className="p-4 sm:p-6 flex flex-col gap-5 min-h-[260px] sm:min-h-[290px] justify-start font-sans">
              
              {/* User Bubble (State >= 1) */}
              {step >= 1 && (
                <Motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="self-end max-w-[85%] bg-[rgba(135,123,241,0.16)] border border-[rgba(135,123,241,0.45)] rounded-2xl rounded-tr-sm px-4 py-3 text-right"
                >
                  <p className="text-[#E7E8F4] text-[13px] sm:text-[14px] leading-relaxed">
                    Summarize today's claims backlog and flag anything urgent.
                  </p>
                </Motion.div>
              )}

              {/* Status Query Log (State >= 2) */}
              {step >= 2 && (
                <Motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 text-[#A9A0F5] font-mono text-[10px] sm:text-[11px] px-3.5 py-1.5 rounded-full border border-[rgba(135,123,241,0.2)] bg-[#0A0B28] w-fit shadow-inner"
                >
                  <Sparkle size={13} className="animate-spin-slow text-[#877BF1]" />
                  <span>querying claims system · 214 records</span>
                </Motion.div>
              )}

              {/* Loader pulsing dots (State == 3 or 5) */}
              {(step === 3 || step === 5) && (
                <div className="flex gap-1 pl-4 items-center h-6">
                  <span className="w-1.5 h-1.5 bg-[#877BF1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#877BF1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#877BF1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              {/* Agent Response Bubble (State >= 4) */}
              {step >= 4 && (
                <Motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="self-start max-w-[90%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3"
                >
                  <p className="text-[#E2E4E9] text-[13px] sm:text-[14px] leading-relaxed text-left">
                    <strong className="text-[#FCCA71] font-semibold">214 open claims</strong> — <span className="text-[#A9A0F5]">12 flagged urgent</span> (SLA &lt; 4h). Drafted responses for 38 routine cases, routed 6 to underwriting review.
                  </p>
                </Motion.div>
              )}

            </div>

            {/* Terminal Footer Info */}
            <div className="border-t border-[rgba(135,123,241,0.18)] px-4 sm:px-6 py-3 bg-[#0A0B28]/60 flex items-center justify-between text-[#8F92B8] font-mono text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#A9A0F5]" />
                <span>Governed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database size={14} className="text-[#A9A0F5]" />
                <span>RAG-Grounded</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={14} className="text-[#A9A0F5]" />
                <span>Human-In-Loop</span>
              </div>
            </div>

          </Motion.div>
          
        </div>

      </div>

      {/* Scroll Arrow - Bottom Center (Desktop & Mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/AiIntelligentSystems/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/AiIntelligentSystems/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
      
    </section>
  );
};

export default GenAIHero;
