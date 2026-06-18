import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DocHero = () => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    const target = document.getElementById("solutions-content");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop ? (scrollTop + rect.top - 50) : (scrollTop + rect.top);
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
          `
        }}
      />

      {/* Mobile Background Image & Tint Wash (Visible only on mobile/tablet below 1290px) */}
      <div className="absolute top-[3.74938rem] bottom-0 left-0 right-0 min-[1290px]:hidden z-0 pointer-events-none">
        <img
          src="/soulution_doc_intelligence_system/DocHero.png"
          alt=""
          className="w-full h-full object-cover object-top-right"
        />
        {/* Dark tint overlay for reading contrast */}
        <div className="absolute inset-0 bg-[#01031c]/85" />
      </div>

      {/* Desktop 3D Scroll Background Image Layer (Aligned Top Right and faded to Left - Desktop only) */}
      <div 
        className="hidden min-[1290px]:block absolute right-0 top-0 bottom-0 w-[60%] h-[90%] lg:h-[88%] bg-[url('/soulution_doc_intelligence_system/DocHero.png')] bg-top-right bg-cover bg-no-repeat pointer-events-none mix-blend-screen opacity-90 z-0"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 20%, black 80%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 20%, black 80%)"
        }}
      />
      
      {/* Absolute Gradient Overlay to blend screenshot text on the left into solid dark blue (Desktop only) */}
      <div className="hidden min-[1290px]:block absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-[#01031c] via-[#01031c] via-35% min-[1290px]:via-40% to-transparent" />
      
      {/* Decorative Subtle Glow Spot */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/5 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Main Content Layout */}
      <div className="w-full min-[1290px]:w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-12 py-12 min-[1290px]:py-12 z-20 relative bg-transparent">
        
        {/* Left Column: Text & CTA */}
        <Motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-[540px] xl:max-w-[700px] min-[1290px]:flex-1"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 w-full">
            {/* Desktop Original Pill */}
            <div className="hidden min-[1290px]:block opacity-30 justify-start mb-2">
              <span className="text-white text-lg font-normal font-sans tracking-tight">[</span>
              <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">solutions</span>
              <span className="text-white text-lg font-normal font-sans tracking-tight">]</span>
            </div>

            {/* Mobile Styled Glassmorphic Solutions Badge */}
            <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-1 w-fit mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
              <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
                solutions
              </span>
            </div>
            
            {/* Main Headline Stack */}
            <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full gap-1">
              <h1 className="max-w-full min-[1290px]:w-auto min-[1290px]:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                Document Intelligence Systems
              </h1>
              <h3 className="max-w-full min-[1290px]:w-auto justify-start text-white text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                for Institutions
              </h3>
            </div>
            
            {/* Description Subtext */}
            <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[553px] opacity-60 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-2">
              RevoSolve builds intelligent systems that extract, verify, and process data from documents across financial, government, and enterprise workflows. 
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() =>
              navigate("/connect", {
                state: {
                  category: "Services/Solution",
                  service: "Document Intelligence Systems",
                },
              })
            }
            className="h-[46px] min-[1290px]:h-[56px] py-[8px] min-[1290px]:py-[10px] px-[24px] min-[1290px]:px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[12px] min-[1290px]:gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
          >
            <span className="text-white text-center font-sans text-[14px] min-[1290px]:text-[16px] font-medium leading-[20px] min-[1290px]:leading-[24px] tracking-[-0.312px]">
              Build Your Document System
            </span>
            <img 
              src="/Solution_page/solution_hero_arrow.svg" 
              alt="Arrow" 
              className="w-[12px] min-[1290px]:w-[14px] h-[8px] lg:h-[10px] shrink-0"
            />
          </button>
        </Motion.div>
        
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/hero_section/arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/hero_section/gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>

    </section>
  );
};

export default DocHero;
