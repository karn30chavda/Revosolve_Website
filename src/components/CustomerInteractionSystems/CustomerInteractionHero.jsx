import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone, ChatCircle, WhatsappLogo, EnvelopeSimple, Fingerprint, FlowArrow, ChartLineUp, User
} from "@phosphor-icons/react";

const ChannelChip = ({ icon, label, active }) => {
  const Icon = icon;
  return (
    <span className={`inline-flex items-center gap-[7px] border py-[8px] px-[13px] text-[10.5px] uppercase tracking-[0.08em] transition-all duration-300 font-mono ${active ? "border-[#877BF1] bg-[#877BF1]/15 text-white shadow-[0_0_14px_2px_rgba(135,123,241,0.25)]" : "border-[#877BF1]/25 bg-[#0f1034] text-[#E7E8F4]"}`}>
      <Icon size={15} className={active ? "text-white" : "text-[#A9A0F5]"} />
      {label}
    </span>
  );
};

const CustomerInteractionHero = () => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Customer Interaction Systems",
      },
    });
  };

  const handleScrollDown = () => {
    const target = document.getElementById("solutions-content");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 50
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
        @keyframes cisBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes cisTermIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes cisTyping { 0%,100% { opacity: 0.25; } 50% { opacity: 1; } }
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
                Customer Interaction Systems
              </h1>
              <h3 className="max-w-full min-[1290px]:w-auto justify-start text-white text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                for Enterprise Engagement
              </h3>
            </div>

            {/* Description Subtext */}
            <div className="flex flex-col gap-2 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-70 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-relaxed">
                Customer experience is no longer defined by how quickly organizations respond. It is defined by how intelligently they engage.
              </p>
              
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-50 text-[#FBFBFF] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                RevoSolve engineers Customer Interaction Systems that unify voice, chat, AI agents, IVR, conversational AI, identity verification, workflow automation, and enterprise integrations into a single operational platform — so every interaction becomes structured, intelligent, and operationally connected.
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
                Build Your Interaction System
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/CustomerInteractionSystems/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to a Solution Architect
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/CustomerInteractionSystems/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>


        </Motion.div>

        {/* Right Column: Live Conversation Simulation */}
        <Motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full min-[1290px]:max-w-[480px] xl:max-w-[520px] flex-1 flex flex-col z-10"
        >
          <div className="flex justify-center gap-[10px] mb-[18px] flex-wrap">
            <ChannelChip icon={Phone} label="Voice" />
            <ChannelChip icon={ChatCircle} label="Chat" />
            <ChannelChip icon={WhatsappLogo} label="WhatsApp" active />
            <ChannelChip icon={EnvelopeSimple} label="Email" />
          </div>
          
          <div className="flex justify-center h-[26px] -mb-px">
            <div className="relative w-px bg-[rgba(135,123,241,0.25)]">
              <span 
                className="absolute left-[-3px] w-[6px] h-[6px] rounded-full bg-[#877BF1] shadow-[0_0_8px_#877BF1]" 
                style={{ animation: "cisFlowY 1.8s linear infinite" }} 
              />
            </div>
          </div>

          <div className="border border-[rgba(135,123,241,0.25)] bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.45)] rounded-[12px] overflow-hidden">
            <div className="flex items-center gap-[10px] padding px-[16px] py-[12px] border-b border-[rgba(135,123,241,0.18)]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#877BF1] shadow-[0_0_8px_#877BF1]" />
              <span className="text-[11px] tracking-widest text-[#5C5F85] font-mono">
                revosolve · ai_agent — live session
              </span>
              <span className="ml-auto text-[10px] tracking-widest text-[#A9A0F5] uppercase font-mono">
                verified ✓
              </span>
            </div>
            
            <div className="p-[20px] pb-[16px] flex flex-col gap-[12px]">
              <div 
                className="align-self-end self-end max-w-[82%] bg-[rgba(135,123,241,0.12)] border border-[rgba(135,123,241,0.45)] px-[15px] py-[11px] text-[13.5px] leading-[1.55] text-white"
                style={{ animation: "cisTermIn .45s ease both .3s" }}
              >
                Hi — I'd like to check the status of my loan application.
              </div>
              
              <div 
                className="align-self-start self-start max-w-[86%] bg-[#12143E] border border-[rgba(135,123,241,0.18)] px-[15px] py-[11px] text-[13.5px] leading-[1.55] text-[#CACBDB]"
                style={{ animation: "cisTermIn .45s ease both 1s" }}
              >
                <span className="text-[#A9A0F5] text-[10.5px] tracking-[0.08em] font-mono">
                  AI AGENT · 
                </span>{" "}
                Identity verified via OTP. Your application <span className="text-white">#LN-2841</span> is in the approval workflow — one step remaining.
              </div>
              
              <div 
                className="align-self-start self-start flex gap-[8px] flex-wrap"
                style={{ animation: "cisTermIn .45s ease both 1.7s" }}
              >
                {["workflow: approval → notify", "crm ✓ updated", "erp ✓ synced"].map((t) => (
                  <span key={t} className="text-[10px] tracking-[0.08em] text-[#8F92B8] border border-dashed border-[rgba(135,123,241,0.25)] px-[9px] py-[5px] font-mono">
                    {t}
                  </span>
                ))}
              </div>
              
              <div 
                className="align-self-start self-start flex items-center gap-[5px] px-[2px] py-[6px]"
                style={{ animation: "cisTermIn .45s ease both 2.4s" }}
              >
                {[0, 0.2, 0.4].map((d) => (
                  <span 
                    key={d} 
                    className="w-[6px] h-[6px] rounded-full bg-[#A9A0F5]" 
                    style={{ 
                      animation: "cisTyping 1.2s ease-in-out infinite", 
                      animationDelay: `${d}s` 
                    }} 
                  />
                ))}
              </div>
            </div>

            <div 
              className="flex justify-between px-[16px] py-[12px] border-t border-[rgba(135,123,241,0.18)] text-[10px] tracking-widest text-[#8F92B8] uppercase font-mono"
            >
              <span className="flex items-center gap-[7px]"><Fingerprint size={14} className="text-[#A9A0F5]" />KYC passed</span>
              <span className="flex items-center gap-[7px]"><FlowArrow size={14} className="text-[#A9A0F5]" />Workflow live</span>
              <span className="flex items-center gap-[7px]"><ChartLineUp size={14} className="text-[#A9A0F5]" />Tracked</span>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/CustomerInteractionSystems/hero_arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/CustomerInteractionSystems/hero_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default CustomerInteractionHero;
