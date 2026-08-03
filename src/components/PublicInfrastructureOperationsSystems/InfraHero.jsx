import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileText, HardHat, CurrencyCircleDollar, Package } from "@phosphor-icons/react";

const personas = [
  {
    label: "Tenders",
    icon: FileText,
    console: "tender_pipeline",
    stats: [
      { label: "Active Tenders", value: "128" },
      { label: "Submitted", value: "34" },
      { label: "Won This Month", value: "9" },
      { label: "Win Rate", value: "61%" },
    ],
  },
  {
    label: "Project Execution",
    icon: HardHat,
    console: "site_operations",
    stats: [
      { label: "Live Projects", value: "46" },
      { label: "Field Teams", value: "312" },
      { label: "Milestones Due", value: "18" },
      { label: "On Schedule", value: "87%" },
    ],
  },
  {
    label: "Accounting",
    icon: CurrencyCircleDollar,
    console: "finance_ledger",
    stats: [
      { label: "Invoices Raised", value: "212" },
      { label: "Collections", value: "₹4.2Cr" },
      { label: "Retention Held", value: "₹68L" },
      { label: "GST Filed", value: "100%" },
    ],
  },
  {
    label: "Inventory",
    icon: Package,
    console: "asset_inventory",
    stats: [
      { label: "Assets Tracked", value: "2.4K" },
      { label: "In Transit", value: "86" },
      { label: "Maintenance Due", value: "14" },
      { label: "Utilization", value: "78%" },
    ],
  },
];

const InfraHero = () => {
  const navigate = useNavigate();
  const [persona, setPersona] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPersona((p) => (p + 1) % personas.length), 4200);
    return () => clearInterval(t);
  }, []);

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Public Infrastructure Operations",
      },
    });
  };

  const handleScrollDown = () => {
    const target =
      document.getElementById("challenge") ||
      document.getElementById("solutions-content");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 100
        : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  const active = personas[persona];

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
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(135,123,241,0.05) 0 1px, transparent 1px 26px)",
          maskImage:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
        }}
      />

      <style>{`
        @keyframes pioRadar { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pioPing { 0% { transform: scale(0.4); opacity: 0.9; } 100% { transform: scale(2.6); opacity: 0; } }
      `}</style>

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-between pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-[7.5%] py-12 min-[1290px]:py-12 z-20 relative bg-transparent gap-12 min-[1290px]:gap-16">
        {/* Left Column: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-135 xl:max-w-175 min-[1290px]:flex-1"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 w-full">
            {/* Main Headline Stack */}
            <div className="flex flex-col items-center min-[1290px]:items-start w-full gap-1">
              <h1 className="max-w-full min-[1290px]:w-auto text-[20px] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-11.5 xl:leading-14 tracking-[0.264px]">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Managing Infrastructure Projects{" "}
                </span>
                <span className="text-white">
                  from Tender to Execution
                </span>
              </h1>
            </div>

            {/* Description Subtext */}
            <div className="flex flex-col gap-2 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              <p className="max-w-full min-[1290px]:max-w-120 xl:max-w-155 opacity-90 text-white text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-relaxed">
                Infrastructure execution is no longer delayed by physical scale. It is delayed by disconnected operational tools.
              </p>

              <p className="max-w-full min-[1290px]:max-w-120 xl:max-w-155 opacity-75 text-[#F3F4FE] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                A unified system to manage tenders, execution, workforce, assets, and financials across infrastructure and government projects on one connected platform.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center min-[1290px]:justify-start items-center">
            <button
              onClick={goConnect}
              className="btn-premium-glow w-62.5 sm:w-67.5 px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Infrastructure System
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/PublicInfrastructureOperationsSystems/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="w-62.5 sm:w-67.5 px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Book a Discovery Workshop
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/PublicInfrastructureOperationsSystems/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column: Original Radar & Stats Console Animation Box */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-[95%] sm:max-w-[90%] min-[1290px]:w-full min-[1290px]:max-w-125 xl:max-w-140 flex-1 flex flex-col z-10 mx-auto min-[1290px]:mx-0"
        >
          <div className="border border-[rgba(135,123,241,0.3)] bg-[#0A0B28] rounded-xl w-full overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            {/* Top Persona Tabs */}
            <div className="flex items-center justify-between p-1.5 min-[1290px]:p-2 gap-0.5 bg-[#070818] border-b border-[rgba(135,123,241,0.22)]">
              {personas.map((p, i) => {
                const isSelected = i === persona;
                const Icon = p.icon;

                return (
                  <button
                    key={p.label}
                    onClick={() => setPersona(i)}
                    className={`flex items-center gap-1.5 justify-center py-2 px-2 min-[1290px]:px-3 border-none rounded-md text-xs font-semibold cursor-pointer transition-all flex-1 ${
                      isSelected
                        ? "bg-[rgba(135,123,241,0.22)] text-white"
                        : "bg-transparent text-white/50 hover:text-white/80"
                    }`}
                  >
                    <Icon size={14} className="text-[#FCCA71] shrink-0" />
                    <span className={isSelected ? "block whitespace-nowrap" : "hidden min-[1290px]:block whitespace-nowrap"}>
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Console Live Status Header */}
            <div className="flex justify-between px-4 py-3 border-b border-[rgba(135,123,241,0.22)] font-mono text-[10.5px] uppercase tracking-widest">
              <span className="text-[#8E94C5]">{active.console} · live</span>
              <span className="text-[#C8C2FF] font-bold">● operational</span>
            </div>

            {/* Radar Animation Circle & 2x2 Stats Grid */}
            <div className="p-4 sm:p-5 flex gap-4 sm:gap-5 items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 min-[1290px]:w-30 min-[1290px]:h-30 shrink-0 rounded-full border border-[rgba(135,123,241,0.4)] bg-[radial-gradient(circle,rgba(135,123,241,0.1),transparent_70%)]">
                <div className="absolute inset-3.5 min-[1290px]:inset-4 rounded-full border border-[rgba(135,123,241,0.22)]" />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(135,123,241,0.45), transparent 70deg, transparent 360deg)",
                    animation: "pioRadar 4s linear infinite",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <active.icon size={28} className="text-[#FCCA71] min-[1290px]:hidden" />
                  <active.icon size={34} className="text-[#FCCA71] hidden min-[1290px]:block" />
                </div>
                <span className="absolute top-[32%] left-[58%] w-1.5 h-1.5 min-[1290px]:w-1.75 min-[1290px]:h-1.75 rounded-full bg-[#FCCA71] shadow-[0_0_9px_rgba(252,202,113,0.8)]" />
                <span
                  className="absolute top-[32%] left-[58%] w-1.5 h-1.5 min-[1290px]:w-1.75 min-[1290px]:h-1.75 rounded-full border border-[#FCCA71]"
                  style={{ animation: "pioPing 2.2s ease-out infinite" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {active.stats.map((hs) => (
                  <div
                    key={hs.label}
                    className="border border-[rgba(135,123,241,0.3)] bg-[#0F1034] p-2.5 rounded-md"
                  >
                    <div className="font-mono text-[9px] tracking-wider uppercase text-[#C4BEF9] font-bold mb-1">
                      {hs.label}
                    </div>
                    <div className="text-[15px] sm:text-[16px] font-extrabold text-white">
                      {hs.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-2 sm:bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/PublicInfrastructureOperationsSystems/hero_arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/PublicInfrastructureOperationsSystems/hero_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default InfraHero;
