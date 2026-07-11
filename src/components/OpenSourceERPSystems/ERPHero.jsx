import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  Calculator, UsersThree, Truck, Kanban, Cpu, Package, AddressBook, Wrench, ChartBar,
} from "@phosphor-icons/react";

const launcherTiles = [
  [Calculator, "Finance", 0],
  [UsersThree, "HR", 0.5],
  [Truck, "Procure", 1],
  [Kanban, "Projects", 1.5],
  null,
  [Package, "Inventory", 2],
  [AddressBook, "CRM", 2.5],
  [Wrench, "Assets", 3],
  [ChartBar, "Reports", 3.5],
];

const ERPHero = ({ scrollToWhatWeDo }) => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    if (scrollToWhatWeDo) {
      scrollToWhatWeDo();
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] overflow-hidden">
      <style>{`
        @keyframes entFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes entPulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
        @keyframes entTileGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(135,123,241,0.35); } 50% { box-shadow: 0 0 22px 3px rgba(135,123,241,0.4); } }
        @keyframes entTileBlink { 0%,100% { border-color: rgba(135,123,241,0.3); } 50% { border-color: #877BF1; } }
        @keyframes entDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
      `}</style>

      {/* Background Atmosphere Gradients */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 80%, rgba(29, 31, 76, 0.8) 0%, transparent 60%),
            radial-gradient(circle at 90% 20%, rgba(135, 123, 241, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Drifting radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -80,
          right: "6%",
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(135,123,241,0.14), transparent 68%)",
          filter: "blur(24px)",
          animation: "entDrift 18s ease-in-out infinite",
        }}
      />

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] pr-[5%] min-[1290px]:pr-[44vw] py-6 min-[1290px]:py-12 z-20 relative bg-transparent gap-10 min-[1290px]:gap-0">

        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-3 min-[1290px]:gap-4 w-full min-[1290px]:max-w-[680px] xl:max-w-[800px] min-[1290px]:flex-1 z-30 relative min-[1290px]:min-h-[380px] xl:min-h-[440px] justify-center">

          {/* Heading */}
          <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full">
            <h1 className="max-w-full justify-start text-white text-[20px] sm:text-[32px] md:text-4xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px] pb-1">
              Enterprise operating systems that connect{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #877BF1, #FCCA71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                every business function
              </span>
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-3 max-w-full min-[1290px]:max-w-[620px] xl:max-w-[720px] opacity-75 text-[#FBFBFF] text-[13px] sm:text-[15px] xl:text-[17px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-2 mb-3">
            <p className="font-semibold text-white/95 text-[14px] sm:text-[16px] xl:text-[18px]">
              Organizations don't struggle because they lack software — they struggle because their operations are fragmented across disconnected systems.
            </p>
            <p>
              Built on enterprise-grade open-source technologies like ERPNext and the Frappe Framework — designed around how your organization operates, not how software vendors expect it to.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 min-[1290px]:gap-6 items-center justify-center min-[1290px]:justify-start shrink-0 relative w-full mt-6 mb-4">
            {/* Primary Button */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Open Source & ERP Systems",
                  },
                })
              }
              className="btn-premium-glow w-fit px-6 sm:px-8 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Enterprise Operating System
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/OpenSourceERPSystems/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() =>
                navigate("/connect", {
                  state: {
                    category: "Services/Solution",
                    service: "Open Source & ERP Systems",
                  },
                })
              }
              className="w-fit px-6 sm:px-8 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to an ERP Solutions Architect
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/OpenSourceERPSystems/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>

        </div>

        {/* Right Column: Module Launcher Widget */}
        <div className="flex flex-col gap-5 justify-center items-center pointer-events-auto w-full mt-8 min-[1290px]:mt-0 min-[1290px]:w-[34vw] min-[1290px]:absolute min-[1290px]:right-[4%] min-[1290px]:top-1/2 min-[1290px]:-translate-y-1/2 z-20 mb-16 min-[1290px]:mb-0">

          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-[85vw] sm:w-full sm:max-w-[440px] xl:max-w-[480px]"
            style={{
              border: "1px solid rgba(135,123,241,0.18)",
              background: "linear-gradient(160deg, #0F1034, #0A0B28)",
              padding: "22px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
            }}
          >
            {/* Header row */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 10.5,
                letterSpacing: "0.14em",
                color: "#5C5F85",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>enterprise_os.launcher</span>
              <span style={{ color: "#A9A0F5" }}>● all modules online</span>
            </div>

            {/* 3×3 Tile Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9 }}>
              {launcherTiles.map((tile) =>
                tile === null ? (
                  <div
                    key="core"
                    style={{
                      border: "1.5px solid #FCCA71",
                      padding: "15px 10px",
                      textAlign: "center",
                      background: "rgba(252,202,113,0.10)",
                      color: "#FCCA71",
                      boxShadow: "0 0 18px 3px rgba(252,202,113,0.25)",
                      animation: "entTileGlow 3s ease-in-out infinite",
                    }}
                  >
                    <Cpu size={22} color="#FCCA71" />
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 11,
                        marginTop: 7,
                        color: "#FCCA71",
                        fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      ERP CORE
                    </div>
                  </div>
                ) : (
                  <div
                    key={tile[1]}
                    style={{
                      border: "1px solid rgba(135,123,241,0.3)",
                      padding: "15px 10px",
                      textAlign: "center",
                      animation: "entTileBlink 4s ease-in-out infinite",
                      animationDelay: `${tile[2]}s`,
                      transition: "color 0.4s",
                    }}
                  >
                    {React.createElement(tile[0], { size: 21, color: "#FCCA71" })}
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                        fontSize: 9,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: 7,
                        color: "#E7E8F4",
                      }}
                    >
                      {tile[1]}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px solid rgba(135,123,241,0.18)",
                fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 9.5,
                letterSpacing: "0.1em",
                color: "#C8CAE0",
                textTransform: "uppercase",
              }}
            >
              <span>ERPNext · Frappe</span>
              <span style={{ color: "#A9A0F5" }}>1 platform · 0 silos</span>
            </div>
          </Motion.div>

        </div>

      </div>

      {/* Scroll Arrow - Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/OpenSourceERPSystems/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/OpenSourceERPSystems/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default ERPHero;
