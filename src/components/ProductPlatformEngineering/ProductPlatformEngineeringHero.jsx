import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Cloud, DeviceMobile, DoorOpen, PlugsConnected, Stack } from "@phosphor-icons/react";

const OrbitChip = ({ icon, label }) => {
  const Icon = icon;
  return (
    <div
      className="flex items-center gap-2 border border-[#877bf1]/45 bg-[#0A0B28] py-2 px-3.5 font-mono text-[11px] tracking-wider uppercase text-white whitespace-nowrap rounded-sm"
    >
      <Icon size={17} className="text-[#FCCA71]" />
      {label}
    </div>
  );
};

const ProductPlatformEngineeringHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Product & Platform Engineering",
      },
    });
  };

  const handleScrollDown = () => {
    if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      const target = document.getElementById("do");
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
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex items-center justify-center pt-32 pb-16 z-10 bg-[#01031c] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ppeSpin { to { transform: rotate(360deg); } }
        @keyframes ppeSpinRev { to { transform: rotate(-360deg); } }
        @keyframes ppeCorePulse { 0%,100% { box-shadow: 0 0 24px rgba(135,123,241,0.25); } 50% { box-shadow: 0 0 44px rgba(135,123,241,0.55); } }
        @keyframes ppeDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
      `}} />

      {/* Blueprint grid overlay */}
      <div
        style={{
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
        }}
        className="absolute inset-0 pointer-events-none z-0 opacity-35 bg-[linear-gradient(rgba(135,123,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(135,123,241,0.05)_1px,transparent_1px)] bg-size-[46px_46px]"
      />

      {/* Atmospheric Glow */}
      <div
        className="absolute top-[-80px] right-[6%] w-[480px] h-[480px] bg-radial from-[#877BF1]/24 to-transparent blur-xl pointer-events-none animate-[ppeDrift_18s_ease-in-out_infinite]"
      />

      {/* Main Content Layout */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16 z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-3 sm:gap-4 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          >

            <h1 className="text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[48px] font-black font-sans leading-tight tracking-tight pb-1 mb-6">
              Digital products and platforms that{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                scale with your business
              </span>
            </h1>

            <p className="text-[#CACBDB] max-w-[620px] mb-4 text-base sm:text-lg xl:text-[18.5px] leading-relaxed opacity-95">
              RevoSolve helps organizations design, engineer, modernize, and scale digital products, SaaS applications, and enterprise platforms that create long-term business value.
            </p>
            
            <p className="text-[#8F92B8] max-w-[600px] mb-8 text-[15.5px] leading-relaxed opacity-90">
              Instead of simply delivering software, we engineer platforms that become the technology foundation of your business.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              {/* Primary Button */}
              <button
                onClick={goConnect}
                className="btn-premium-glow min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
              >
                <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                  Build Your Digital Platform
                </span>
                <img
                  className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                  src="/LegacyTransformationSystems/hero_btn_icon_1.svg"
                  alt=""
                />
              </button>

              {/* Secondary Button */}
              <button
                onClick={goConnect}
                className="min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
              >
                <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                  Talk to Our Engineering Team
                </span>
                <img
                  className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                  src="/LegacyTransformationSystems/hero_btn_icon_2.svg"
                  alt=""
                />
              </button>
            </div>

          </Motion.div>
        </div>

        {/* Right Column: Orbit Visual */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-[min(86vw,440px)] aspect-square mx-auto"
          >
            {/* outer ring */}
            <div
              className="absolute inset-0 border border-dashed border-[#877bf1]/45 rounded-full animate-[ppeSpin_70s_linear_infinite]"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="animate-[ppeSpinRev_70s_linear_infinite]">
                  <OrbitChip icon={DeviceMobile} label="Mobile" />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              >
                <div className="animate-[ppeSpinRev_70s_linear_infinite]">
                  <OrbitChip icon={Cloud} label="SaaS" />
                </div>
              </div>
            </div>

            {/* inner ring */}
            <div
              className="absolute inset-[17%] border border-dashed border-[#877bf1]/25 rounded-full animate-[ppeSpinRev_50s_linear_infinite]"
            >
              <div
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="animate-[ppeSpin_50s_linear_infinite]">
                  <OrbitChip icon={PlugsConnected} label="APIs" />
                </div>
              </div>
              <div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
              >
                <div className="animate-[ppeSpin_50s_linear_infinite]">
                  <OrbitChip icon={DoorOpen} label="Portals" />
                </div>
              </div>
            </div>

            {/* core */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center border border-[#877BF1] bg-linear-to-b from-[#181440]/95 to-[#0a0b28]/95 w-[140px] h-[140px] flex flex-col items-center justify-center animate-[ppeCorePulse_4s_ease-in-out_infinite] rounded-full"
            >
              <Stack size={32} className="text-[#A9A0F5]" />
              <div className="font-bold text-[14px] mt-2 leading-tight text-white">Platform Core</div>
              <div
                className="font-mono text-[9px] tracking-widest text-[#FCCA71] uppercase mt-1"
              >
                ● scaling
              </div>
            </div>
          </Motion.div>
        </div>

      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/LegacyTransformationSystems/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/LegacyTransformationSystems/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default ProductPlatformEngineeringHero;
