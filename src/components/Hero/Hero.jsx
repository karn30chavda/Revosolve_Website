import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-22 bg-[#01031c] transform-gpu">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/hero_section/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-[#01031c]/65 lg:bg-[#01031c]/50"></div>

        {/* Atmospheric Transition Gradient (The Bridge) */}
        <div className="absolute bottom-3 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
          <img
            src="/hero_section/gradient.png"
            className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
            alt=""
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-center relative z-10 w-full px-5 text-center max-w-7xl mx-auto">
        {/* Tagline Pill - Mobile Optimized */}
        <div
          className="flex items-center justify-center whitespace-nowrap overflow-hidden relative group 
          rounded-full bg-white/5 h-10 px-5 py-2 gap-2.5 backdrop-blur-md 
          border border-white/20 mb-8"
        >
          <div className="text-[#fbfbff] text-[0.8125rem] md:text-base font-medium tracking-[0.01em] uppercase opacity-90">
            Revosolve
          </div>

          <img
            className="shrink-0 w-3 h-3 md:w-3.5 md:h-3.5 object-contain"
            src="/hero_section/icon_1.svg"
            alt=""
          />

          <div className="text-[#fbfbff] text-[0.8125rem] md:text-base font-medium tracking-[0.01em] uppercase opacity-90">
            Building Future Tech
          </div>
        </div>

        {/* Main Heading Section - Redesigned for mobile impact */}
        <div className="flex flex-col items-center justify-center relative mb-6 w-full px-2">
          <h1 className="text-center w-full flex flex-col items-center gap-1">
            <span
              className="text-[1.85rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] 
              bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent 
              font-bold md:font-black tracking-[-0.03em]"
            >
              Engineering Technology
            </span>
            <span className="flex flex-col md:flex-row items-center gap-x-4 gap-y-1">
              <span
                className="text-[1.85rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] 
                text-[#888EBF]/90 font-bold md:font-black tracking-[-0.03em]"
              >
                Systems
              </span>
              <span
                className="text-[1.85rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] 
                text-[#ffffff] font-bold md:font-black tracking-[-0.03em]"
              >
                for Governments,
              </span>
            </span>
            <span
              className="text-[1.75rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] 
              text-[#ffffff] font-bold md:font-black tracking-[-0.03em]"
            >
              Finance, and Enterprise
            </span>
          </h1>

          <p className="text-[#fbfbff] text-center text-sm md:text-lg lg:text-xl font-normal relative w-full max-w-2xl opacity-60 leading-relaxed mt-8 md:mt-12">
            Revosolve helps businesses transform ideas into scalable digital
            solutions using AI, cloud infrastructure and modern software
            engineering.
          </p>
        </div>

        {/* CTA Buttons - Mobile Stacked */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center shrink-0 relative w-full mt-10 md:mt-16">
          {/* Main Button */}
          <button
            onClick={() => navigate("/connect")}
            className="w-4/5 md:w-64 h-[3.4rem] md:h-[3.8rem] bg-[#ffaa00] rounded-xl flex items-center justify-center gap-3
            cursor-pointer border-none group transition-all duration-300 shadow-[0_0_25px_rgba(255,170,0,0.25)]
            active:scale-95"
          >
            <span className="text-[#070784] text-center  md:text-lg font-semibold tracking-tight">
              Start a Conversation
            </span>
            <img
              className="shrink-0 w-4.5 h-4.5 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300"
              src="/hero_section/icon_2.svg"
              alt=""
            />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/coming-soon")}
            className="w-4/5 md:w-64 h-[3.4rem] md:h-[3.8rem] rounded-xl border-[1.5px] border-white/20 flex items-center justify-center gap-4 
            backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent"
          >
            <span className="text-white text-center  md:text-lg font-semibold tracking-tight">
              Explore case studies
            </span>
            <img
              className="shrink-0 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              src="/hero_section/icon_3.svg"
              alt=""
            />
          </button>
        </div>

        {/* Scroll Arrow - Desktop Only */}
        <div className="hidden md:flex mt-20 justify-center w-full">
          <img
            src="/hero_section/arrow_icon.svg"
            className="w-6 h-5 object-contain opacity-50 hover:opacity-100 transition-opacity animate-bounce cursor-pointer"
            alt="Scroll down"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
