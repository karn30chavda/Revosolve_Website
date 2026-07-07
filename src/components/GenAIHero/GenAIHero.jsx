import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const orbitItems = [
  { label: "AI Agents", angle: 0 },
  { label: "RAG", angle: 60 },
  { label: "Voice AI", angle: 120 },
  { label: "LLM Apps", angle: 180 },
  { label: "Workflows", angle: 240 },
  { label: "Doc Intelligence", angle: 300 },
];

const GenAIHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-dvh lg:min-h-0 lg:h-screen overflow-x-hidden flex flex-col items-center justify-center pt-0 lg:pt-20 bg-[#01031c] font-sans">
      {/* Background Atmosphere Elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(29, 31, 76, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 85% 50%, rgba(25, 26, 62, 0.9) 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-[#FCCA71]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-30 w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-2">
        {/* Left Column: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:justify-start lg:items-start text-center lg:text-left gap-4 lg:gap-6 w-full lg:max-w-[540px] xl:max-w-[700px] lg:flex-1"
        >
          <div className="inline-flex flex-col items-center lg:justify-start lg:items-start gap-3 lg:gap-2 w-full">
            {/* Desktop Original Pill */}
            <div className="hidden lg:block opacity-30 justify-start">
              <span className="text-white text-lg font-normal font-sans tracking-tight">[</span>
              <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">services</span>
              <span className="text-white text-lg font-normal font-sans tracking-tight">]</span>
            </div>

            {/* Mobile Styled Glassmorphic Badge */}
            <div className="flex lg:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
              <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
                services
              </span>
            </div>

            <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3 lg:gap-6 w-full">
              <div className="flex flex-col items-center lg:justify-start lg:items-start w-full">
                <div className="max-w-full lg:w-auto lg:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Generative AI Systems
                </div>
                <div className="max-w-full lg:w-auto justify-start text-white text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Engineered for Real <br className="hidden sm:inline" />
                  Business Operations
                </div>
              </div>

              <p className="max-w-full lg:max-w-[480px] xl:max-w-[553px] opacity-60 justify-start text-[#FBFBFF] text-sm sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed lg:leading-normal">
                We build production-ready AI agents, conversational platforms,
                document intelligence, and knowledge systems that integrate
                with your enterprise workflows — secure, governed, and designed
                to move beyond proof of concept into daily operations
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() =>
              navigate("/connect", {
                state: {
                  category: "Services/Solution",
                  service: "Generative AI Systems",
                },
              })
            }
            className="h-[46px] lg:h-[56px] py-[8px] lg:py-[10px] px-[24px] lg:px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[12px] lg:gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
          >
            <span className="text-white text-center font-sans text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] tracking-[-0.312px]">
              Build Your AI System
            </span>
            <img
              src="/Solution_page/solution_hero_arrow.svg"
              alt="Arrow"
              className="w-[12px] lg:w-[14px] h-[8px] lg:h-[10px] shrink-0"
            />
          </button>
        </Motion.div>

        {/* Right Column: Orbiting AI Capability Visual (pure CSS, no assets) */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="hidden md:flex items-center justify-center shrink-0 relative lg:-translate-y-4"
        >
          <div className="absolute inset-0 bg-[#877BF1]/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[440px] xl:h-[440px]">
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-[#877BF1]/20" />
            <div className="absolute inset-[18%] rounded-full border border-[#877BF1]/15" />
            <div className="absolute inset-[36%] rounded-full border border-[#FCCA71]/15" />

            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] rounded-full border border-[rgba(91,98,191,0.5)] bg-[#0F1034] shadow-[0_0_60px_rgba(135,123,241,0.35)]">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[20px] xl:text-[26px] font-black font-sans">
                AI
              </span>
              <span className="text-white/50 text-[9px] xl:text-[10px] font-sans uppercase tracking-widest mt-1">
                Core System
              </span>
            </div>

            {/* Rotating orbit layer */}
            <Motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {orbitItems.map((item) => (
                <div
                  key={item.label}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${item.angle}deg) translateX(min(150px, 34vw)) rotate(-${item.angle}deg)`,
                  }}
                >
                  <Motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#0F1034]/90 border border-[#877BF1]/40 px-3 py-1.5 backdrop-blur-sm"
                  >
                    <span className="text-[#E7E6FC] text-[10px] xl:text-[11px] font-medium font-sans tracking-wide">
                      {item.label}
                    </span>
                  </Motion.div>
                </div>
              ))}
            </Motion.div>
          </div>
        </Motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 w-full flex justify-center z-40">
        <img
          onClick={() => {
            const target = document.getElementById("genai-content");
            if (target) {
              const rect = target.getBoundingClientRect();
              const scrollTop = window.scrollY || document.documentElement.scrollTop;
              window.scrollTo({ top: scrollTop + rect.top - 50, behavior: "smooth" });
            }
          }}
          src="/hero_section/arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>
    </section>
  );
};

export default GenAIHero;
