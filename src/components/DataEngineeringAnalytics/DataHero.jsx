import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Database, ShieldCheck, Sparkle } from "@phosphor-icons/react";

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const BG = "#01031c",
  CARD = "#0F1034",
  ACCENT = "#877BF1",
  ACCENT2 = "#A9A0F5",
  GOLD = "#FCCA71";
const BORDER = "rgba(135,123,241,0.18)",
  BORDER15 = "rgba(135,123,241,0.25)";

const bars = [
  ["rgba(135,123,241,0.25)", "44%", 0],
  ["rgba(135,123,241,0.4)", "62%", 0.2],
  ["rgba(135,123,241,0.55)", "52%", 0.4],
  ["rgba(135,123,241,0.75)", "78%", 0.6],
  ["#877BF1", "100%", 0.8],
  ["rgba(135,123,241,0.7)", "70%", 1],
  ["#FCCA71", "86%", 1.2],
];

const DataHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();
  const goConnect = () =>
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Data Engineering & Data Analytics",
      },
    });

  const handleScrollDown = () => {
    const el = document.getElementById("do");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col items-center justify-center pt-24 z-10 bg-[#01031c] overflow-hidden">
      <style>{`
        @keyframes deiBar { 0%,100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
        @keyframes deiTermIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        {/* Left Column */}
        <Motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <h1 className="max-w-full text-white text-[20px] sm:text-[32px] md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-tight pb-1">
            Enterprise data, transformed into{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              operational intelligence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#CACBDB] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Data becomes valuable only when it is trusted, connected, and
            actionable. RevoSolve engineers modern data platforms that unify
            enterprise data, enable real-time visibility, and power analytics,
            BI, AI, and operational decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 items-center">
            <button
              onClick={goConnect}
              className="btn-premium-glow w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Data Platform
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/DataEngineeringAnalytics/hero_icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to an Expert
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/DataEngineeringAnalytics/hero_icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column (Analytics Console) */}
        <Motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-5 border border-[rgba(135,123,241,0.25)] bg-[#0F1034] shadow-[0_24px_60px_rgba(0,0,0,0.4)] rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(135,123,241,0.18)]">
            <span
              style={{ fontFamily: MONO }}
              className="text-[11px] tracking-wider text-[#A9A0F5] uppercase font-semibold"
            >
              ops_intelligence.board
            </span>
            <span
              style={{ fontFamily: MONO }}
              className="text-[10px] tracking-wider text-[#E7E8F4] uppercase flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />{" "}
              live sync
            </span>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[rgba(135,123,241,0.18)] border-b border-[rgba(135,123,241,0.18)]">
            {[
              ["46", "Pipelines active", null, 0.2],
              ["98.4", "Data quality", "%", 0.4],
              ["<5", "Freshness", "min", 0.6],
            ].map(([v, l, suffix, d]) => (
              <div
                key={l}
                style={{ animation: `deiTermIn .5s ease both ${d}s` }}
                className="p-4 bg-[#0F1034]"
              >
                <div className="font-bold text-xl sm:text-2xl text-white">
                  {v}
                  {suffix && (
                    <span className="text-xs text-[#A9A0F5] ml-0.5">
                      {suffix}
                    </span>
                  )}
                </div>
                <div
                  style={{ fontFamily: MONO }}
                  className="text-[9px] tracking-wider text-[#A9A0F5] uppercase mt-1"
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5">
            <div
              style={{ fontFamily: MONO }}
              className="text-[9.5px] tracking-wider text-[#A9A0F5] uppercase mb-3"
            >
              Orders processed / hour
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {bars.map(([c, h, d], i) => (
                <div
                  key={i}
                  style={{
                    background: c,
                    height: h,
                    transformOrigin: "bottom",
                    animation: "deiBar 2.4s ease-in-out infinite",
                    animationDelay: `${d}s`,
                  }}
                  className="flex-1 rounded-sm"
                />
              ))}
            </div>
          </div>

          <div
            className="flex justify-between px-5 py-3 border-t border-[rgba(135,123,241,0.18)] text-[9.5px] text-[#CACBDB] uppercase"
            style={{ fontFamily: MONO }}
          >
            <span className="flex items-center gap-1.5">
              <Database size={13} className="text-[#A9A0F5]" />
              Warehouse ok
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#A9A0F5]" />
              Governed
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkle size={13} className="text-[#FCCA71]" />
              AI-ready
            </span>
          </div>
        </Motion.div>
      </div>

      {/* Scroll Arrow - Bottom Center (Desktop & Mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/DataEngineeringAnalytics/hero_arrow_icon.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/DataEngineeringAnalytics/hero_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default DataHero;
