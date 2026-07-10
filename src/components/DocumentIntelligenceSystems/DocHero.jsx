import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileText, Robot } from "@phosphor-icons/react";

const DocHero = () => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Products",
        service: "RevoDox Document Intelligence",
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
        ? scrollTop + rect.top - 70
        : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  const extracted = [
    ["type:", '"Invoice"', "#FCCA71"],
    ["number:", '"INV-2214"', null],
    ["vendor:", '"Meridian Supplies"', null],
    ["amount:", '"₹1,42,500"', "#FCCA71"],
    ["due:", '"2026-07-30"', null],
    ["rules:", "7/7 passed ✓", "#FCCA71"],
    ["route:", "Finance → ERP", null],
  ];

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
        @keyframes rdxScanBeamY { 0% { top: 4%; } 50% { top: 92%; } 100% { top: 4%; } }
        @keyframes rdxFieldIn { 0%, 12% { opacity: 0; transform: translateX(-10px); } 22%, 100% { opacity: 1; transform: none; } }
        @keyframes rdxStampIn { 0%, 55% { opacity: 0; transform: rotate(-14deg) scale(1.6); } 65%, 88% { opacity: 1; transform: rotate(-8deg) scale(1); } 100% { opacity: 1; transform: rotate(-8deg) scale(1); } }
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
              <h1 className="max-w-full min-[1290px]:w-auto bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[20px] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                Transform documents into
              </h1>
              <h3 className="max-w-full min-[1290px]:w-auto justify-start text-white text-[20px] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                intelligent business workflows
              </h3>
            </div>

            {/* Description Subtext */}
            <div className="flex flex-col gap-3 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start mt-2">
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-70 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-relaxed">
                Organizations don’t struggle because they have documents. They struggle because critical information remains trapped inside them.
              </p>
              
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-50 text-[#FBFBFF] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                RevoDox combines OCR, AI-powered document understanding, workflow automation, business rules, and journey orchestration — turning citizen applications, banking forms, invoices, contracts, claims, and enterprise records into structured, actionable processes at scale.
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
                Book a Product Demo
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/DocumentIntelligenceSystems/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to a Product Specialist
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/DocumentIntelligenceSystems/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column: Live Document Scanning Simulation */}
        <Motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] items-stretch w-[85vw] sm:w-full min-[1290px]:max-w-[480px] xl:max-w-[520px] flex-1 z-10 mx-auto lg:mx-0"
        >
          {/* Document scan */}
          <div className="relative bg-[#07092c] border border-[rgba(135,123,241,0.18)] shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-[22px_20px] overflow-hidden flex flex-col justify-between">
            <div 
              className="absolute left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-[#877BF1]/70 to-transparent shadow-[0_0_14px_rgba(135,123,241,0.5)]" 
              style={{ animation: "rdxScanBeamY 5s ease-in-out infinite" }} 
            />
            
            <div>
              <div className="font-mono text-[9.5px] tracking-widest text-[#5C5F85] uppercase mb-3.5 flex justify-between">
                <span>invoice_scan.pdf</span>
                <FileText size={14} className="text-[#877BF1]" />
              </div>
              <div className="h-[11px] bg-[rgba(135,123,241,0.18)] w-[62%] mb-[9px]" />
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[88%] mb-[7px]" />
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[78%] mb-4" />
              
              <div className="border border-dashed border-[#877BF1] bg-[rgba(135,123,241,0.06)] p-[6px_8px] mb-[9px] flex justify-between items-center">
                <div className="h-[8px] bg-[rgba(135,123,241,0.3)] w-[46%]" />
                <span className="font-mono text-[8px] text-[#A9A0F5]">FIELD</span>
              </div>
              
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[84%] mb-[7px]" />
              
              <div className="border border-dashed border-[#877BF1] bg-[rgba(135,123,241,0.06)] p-[6px_8px] mb-[9px] flex justify-between items-center">
                <div className="h-[8px] bg-[rgba(135,123,241,0.3)] w-[34%]" />
                <span className="font-mono text-[8px] text-[#A9A0F5]">FIELD</span>
              </div>
              
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[70%] mb-[7px]" />
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[80%] mb-4" />
            </div>
            
            <div className="flex justify-between items-end mt-4">
              <div className="h-[8px] bg-[rgba(135,123,241,0.1)] w-[38%]" />
              <div 
                className="border-[2.5px] border-[#FCCA71] text-[#FCCA71] font-mono font-bold text-[11px] tracking-[0.18em] p-[6px_12px] uppercase"
                style={{ animation: "rdxStampIn 5s ease-in-out infinite" }}
              >
                Validated
              </div>
            </div>
          </div>

          {/* Extracted data */}
          <div className="bg-[#0A0B28] border border-[rgba(135,123,241,0.3)] shadow-[0_20px_50px_rgba(0,0,0,0.45)] p-[20px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9.5px] tracking-widest text-[#5C5F85] uppercase mb-4 flex justify-between">
                <span>extracted_data</span>
                <span className="text-[#FCCA71]">● 98.6% conf</span>
              </div>
              <div className="font-mono text-[11.5px] leading-[2.2] text-[#CACBDB]">
                {extracted.map(([k, v, c], i) => (
                  <div
                    key={k}
                    style={{
                      animation: "rdxFieldIn 5s ease-in-out infinite",
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <span className="text-[#5C5F85]">{k}</span>{" "}
                    <span style={{ color: c || "#CACBDB" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 border-t border-[rgba(135,123,241,0.25)] pt-3 flex justify-between font-mono text-[9px] tracking-widest text-[#5C5F85] uppercase">
              <span className="flex items-center gap-[6px]">
                <Robot size={12} className="text-[#FCCA71]" />
                Auto-approved
              </span>
              <span>SLA 0.8s</span>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-2 sm:bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/DocumentIntelligenceSystems/hero_scroll_arrow.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/DocumentIntelligenceSystems/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default DocHero;
