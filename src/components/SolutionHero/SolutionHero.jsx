import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SolutionHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen lg:min-h-0 lg:h-screen overflow-x-hidden flex flex-col items-center justify-center pt-20 bg-[#01031c] font-sans">
      
      {/* Background Atmosphere Elements */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(29, 31, 76, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 85% 50%, rgba(25, 26, 62, 0.9) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Decorative Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-[#FCCA71]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-30 w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 xl:gap-2 pt-4 lg:pt-0 pb-16 lg:pb-0">
        
        {/* Left Column: Text & CTA */}
        <Motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-start items-start gap-6 w-full lg:max-w-[540px] xl:max-w-[700px] lg:flex-1"
        >
          <div className="inline-flex flex-col justify-start items-start gap-2 w-full">
            <div className="opacity-30 justify-start">
              <span className="text-white text-lg font-normal font-sans tracking-tight">[</span>
              <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">solutions</span>
              <span className="text-white text-lg font-normal font-sans tracking-tight">]</span>
            </div>
            
            <div className="flex flex-col justify-start items-start gap-6 w-full">
              <div className="flex flex-col justify-start items-start w-full">
                <div className="max-w-full lg:w-auto lg:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Unified Commerce Operations
                </div>
                <div className="max-w-full lg:w-auto justify-start text-white text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Across Brands, Channels, <br />& Markets
                </div>
              </div>
              
              <div className="max-w-full lg:max-w-[480px] xl:max-w-[553px] opacity-60 justify-start text-[#FBFBFF] text-base xl:text-[18px] font-normal font-sans leading-normal">
                Build a centralised system to manage orders, inventory, fulfilment, financials, and customer communication across multiple brands, e-commerce platforms, and marketplaces — with real-time visibility, operational control, and built-in compliance
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/connect")}
            className="h-[56px] py-[10px] px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
          >
            <span className="text-white text-center font-sans text-[16px] font-medium leading-[24px] tracking-[-0.312px]">
              Build Your Commerce System
            </span>
            <img 
              src="/Solution_page/solution_hero_arrow.svg" 
              alt="Arrow" 
              className="w-[14px] h-[10px] shrink-0"
            />
          </button>
        </Motion.div>

        {/* Right Column: Infographic Image */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0 w-full lg:w-auto relative lg:-translate-y-8"
        >
          {/* Subtle surrounding glow effect to blend image */}
          <div className="absolute inset-0 bg-[#877BF1]/5 rounded-full blur-[80px] pointer-events-none scale-90" />
          <img 
            src="/Solution_page/solution_hero_image.webp" 
            alt="Commerce Operations System Graphic"
            className="object-contain w-full max-w-[240px] lg:max-w-none lg:w-[280px] lg:h-[280px] xl:w-[550px] xl:h-[550px] relative z-10"
          />
        </Motion.div>
        
      </div>

      {/* Scroll Down Arrow - Desktop & Mobile */}
      <div className="absolute bottom-6 left-0 right-0 w-full flex justify-center z-20">
        <img
          onClick={() => {
            document
              .getElementById("solutions-content")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          src="/hero_section/arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

    </section>
  );
};

export default SolutionHero;
