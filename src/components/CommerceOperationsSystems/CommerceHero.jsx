import { solutionHeroSvg } from "./commerce_hero_svg";
import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CommerceHero = () => {
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
          `
        }}
      />
      
      {/* Decorative Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-[#FCCA71]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-30 w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4 xl:gap-2 pt-0 lg:pt-0 pb-0 lg:pb-0">
        
        {/* Left Column: Text & CTA */}
        <Motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:justify-start lg:items-start text-center lg:text-left gap-4 lg:gap-6 w-full lg:max-w-[540px] xl:max-w-[700px] lg:flex-1"
        >
          <div className="inline-flex flex-col items-center lg:justify-start lg:items-start gap-3 lg:gap-2 w-full">

            
            <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3 lg:gap-6 w-full">
              <div className="flex flex-col items-center lg:justify-start lg:items-start w-full">
                <div className="max-w-full lg:w-auto lg:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Unified Commerce Operations
                </div>
                <div className="max-w-full lg:w-auto justify-start text-white text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                  Across Brands, Channels, <br className="hidden sm:inline" />& Markets
                </div>
              </div>
              
              <p className="max-w-full lg:max-w-[480px] xl:max-w-[553px] opacity-60 justify-start text-[#FBFBFF] text-sm sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed lg:leading-normal">
                Build a centralised system to manage orders, inventory, fulfilment, financials, and customer communication across multiple brands, e-commerce platforms, and marketplaces — with real-time visibility, operational control, and built-in compliance
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() =>
              navigate("/connect", {
                state: {
                  category: "Services/Solution",
                  service: "Customer Interaction Systems",
                },
              })
            }
            className="h-[46px] lg:h-[56px] py-[8px] lg:py-[10px] px-[24px] lg:px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[12px] lg:gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
          >
            <span className="text-white text-center font-sans text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] tracking-[-0.312px]">
              Build Your Commerce System
            </span>
            <img 
              src="/CommerceOperationsSystems/hero_btn_icon_1.svg" 
              alt="Arrow" 
              className="w-[12px] lg:w-[14px] h-[8px] lg:h-[10px] shrink-0"
            />
          </button>
        </Motion.div>

        {/* Right Column: Infographic Image */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0 w-full lg:w-auto relative lg:-translate-y-8 mt-2 lg:mt-0"
        >
          {/* Subtle surrounding glow effect to blend image */}
          <div className="absolute inset-0 bg-[#877BF1]/10 rounded-full blur-[60px] pointer-events-none scale-100 lg:scale-90" />
          <div className="aspect-square w-[60%] min-w-[190px] max-w-[240px] sm:w-auto sm:max-w-[280px] md:max-w-[340px] lg:max-w-none lg:w-[260px] lg:h-[260px] xl:w-[480px] xl:h-[480px] relative z-10">
            {/* Background SVG Graphic */}
            <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: solutionHeroSvg }} />
            
            {/* Shopify GIF (Circle 1 - Center 204, 568) */}
            <img 
              src="/CommerceOperationsSystems/hero_gif_1.gif" 
              alt="Shopify Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "32.74%",
                top: "91.17%",
                width: "6.26%",
                height: "6.26%"
              }}
            />
            
            {/* Amazon GIF (Circle 2 - Center 112, 507) */}
            <img 
              src="/CommerceOperationsSystems/hero_gif_2.gif" 
              alt="Amazon Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "17.98%",
                top: "81.38%",
                width: "6.26%",
                height: "6.26%"
              }}
            />
            
            {/* Flipkart GIF (Circle 3 - Center 154, 544) */}
            <img 
              src="/CommerceOperationsSystems/hero_gif_3.gif" 
              alt="Flipkart Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "24.72%",
                top: "87.32%",
                width: "6.26%",
                height: "6.26%"
              }}
            />
          </div>
        </Motion.div>
        
      </div>

      {/* Scroll Down Arrow - Desktop & Mobile */}
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 w-full flex justify-center z-40">
        <img
          onClick={() => {
            const target = document.getElementById("solutions-content");
            if (target) {
              const rect = target.getBoundingClientRect();
              const scrollTop = window.scrollY || document.documentElement.scrollTop;
              const isDesktop = window.innerWidth >= 1024;
              const targetY = isDesktop ? (scrollTop + rect.top - 50) : (scrollTop + rect.top);
              window.scrollTo({
                top: targetY,
                behavior: "smooth",
              });
            }
          }}
          src="/CommerceOperationsSystems/hero_scroll_arrow.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

    </section>
  );
};

export default CommerceHero;
