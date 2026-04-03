import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full  h-screen overflow-hidden flex flex-col items-center justify-center font-sans pt-32 pb-24 bg-bg-primary">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/hero_section/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Custom High-Fidelity Image Transition */}
        <div className="absolute bottom-[-237px] left-0 right-0 w-full pointer-events-none z-1">
          <img 
            src="/hero_section/gradient.png" 
            className="w-full h-auto object-cover translate-y-[2px]" 
            alt="Section transition gradient" 
          />
        </div>


      </div>

      {/* Content Overlay - Strictly Tailwind Utility Classes and Precise Figma Spacing */}
      <div className="flex flex-col items-center justify-start relative z-10 w-full px-4 text-center">
        
        {/* Tagline Pill */}
        <div className="flex items-center justify-center whitespace-nowrap overflow-hidden relative group 
          rounded-[48px] bg-white/12 h-[38px] px-4 py-2 gap-[10px] backdrop-blur-[10px] 
          border border-white/30 
          shadow-[inset_0_0_10px_rgba(255,255,255,0.1),0_0_15px_rgba(255,255,255,0.05)]
          bg-linear-[110deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%] 
          bg-size-[200%_100%] animate-shine mb-[22px]">
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-linear-to-b from-transparent via-white/40 to-transparent"></div>

          <div className="text-[#fbfbff] text-left text-[14px] md:text-lg font-normal tracking-wide">
            Revosolve
          </div>
          
          <img
            className="shrink-0 w-3.5 h-3.5 object-contain"
            src="/hero_section/icon_1.svg"
            alt=""
          />
          
          <div className="text-[#fbfbff] text-left text-[14px] md:text-lg font-normal tracking-wide">
            Building Future Tech
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-start shrink-0 relative mb-[15px] w-full max-w-5xl mx-auto px-2">
          <div className="flex flex-col gap-2 items-center justify-start shrink-0 relative w-full">
            <h1
              className="text-center relative w-full text-[clamp(2rem,4vw,3.375rem)] leading-[1.1] 
              bg-linear-[90.19deg,rgba(135,123,241,1)_0%,rgba(252,202,113,1)_100%] bg-clip-text text-transparent 
              font-extrabold md:font-black tracking-[0.26px] drop-shadow-sm"
            >
              Engineering Technology Systems
            </h1>
            
            <h2 className="text-[#ffffff] text-center relative w-full text-[clamp(2rem,4vw,3.375rem)] 
              leading-[1.1] font-extrabold md:font-black tracking-[0.26px] drop-shadow-sm">
              for Governments, Finance, and Enterprise
            </h2>
          </div>

          <p className="text-[#fbfbff] text-center text-[clamp(1rem,1.5vw,1.125rem)] font-normal relative w-full max-w-[600px] opacity-70 leading-relaxed mt-6">
            Revosolve helps businesses transform ideas into scalable digital
            solutions using AI, cloud infrastructure and modern software
            engineering.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center shrink-0 relative w-full mt-8">
          
          {/* Start a Conversation Button */}
          <button className="bg-[#ffaa00] rounded-[4px] px-8 py-4 flex flex-row gap-2 items-center justify-start 
            shrink-0 relative cursor-pointer border-none group transition-all duration-300 overflow-hidden
            active:scale-[0.98]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-[radial-gradient(166.43%_72.8%_at_50%_100%,#FFEBC3_0%,#FFaa00_72.02%)]"></div>
            
            <div className="text-[#070784] text-center text-lg leading-6 font-semibold relative z-10 tracking-[-0.31px]">
              Start a Conversation
            </div>
            <img className="shrink-0 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" src="/hero_section/icon_2.svg" alt="" />
          </button>

          {/* Explore Case Studies Button */}
          <button className="rounded-[4px] border-2 border-[rgba(91,98,191,0.37)] px-8 py-4 h-auto
            flex flex-row gap-[22px] items-center justify-center shrink-0 relative backdrop-blur-sm 
            cursor-pointer hover:bg-white/5 transition-all active:scale-[0.98] text-white group bg-transparent">
            <div className="text-center text-lg leading-6 font-semibold relative tracking-[-0.31px]">
              Explore Case Studies
            </div>
            <img className="shrink-0 w-3.5 h-2.5 relative group-hover:translate-x-1 transition-transform" src="/hero_section/icon_3.svg" alt="" />
          </button>
        </div>

        {/* Arrow Icon - Below buttons in flow */}
        <div className="mt-20 flex justify-center w-full">
          <img 
            src="/hero_section/arrow_icon.svg" 
            className="w-[26px] h-[22px] object-contain opacity-70 hover:opacity-100 transition-opacity animate-bounce cursor-pointer" 
            alt="Scroll down"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
