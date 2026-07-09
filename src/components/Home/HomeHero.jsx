import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-22 bg-[#01031c] transform-gpu font-sans">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:scale-105 scale-100"
        >
          <source src="/Home/hero_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-[#01031c]/65 lg:bg-[#01031c]/50"></div>

        {/* Atmospheric Transition Gradient (The Bridge) */}
        <div className="absolute bottom-3 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
          <img
            src="/Home/hero_gradient.png"
            className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
            alt=""
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-center relative z-10 w-full px-5 text-center max-w-7xl mx-auto">
        {/* Tagline Pill - Mobile Optimized */}
        <div
          className="flex items-center justify-center whitespace-nowrap relative group 
          rounded-full bg-white/5 h-10 px-5 md:px-7 gap-2 grow-0 shrink-0 md:min-w-[329px] md:w-fit md:h-[38px] backdrop-blur-md 
          border border-white/20 mb-8"
        >
          <div className="text-[#fbfbff] text-[13px] md:text-lg font-medium tracking-[0.01em]  opacity-90">
            Revosolve
          </div>

          <img
            className="shrink-0 w-3 h-3 md:w-3.5 md:h-3.5 object-contain"
            src="/Home/hero_icon_1.svg"
            alt=""
          />

          <div className="text-[#fbfbff] text-[13px] md:text-lg font-medium tracking-[0.01em]  opacity-90">
            Building Future Tech
          </div>
        </div>

        {/* Main Heading Section - Redesigned for mobile impact */}
        <div className="flex flex-col items-center justify-center relative mb-6 w-full px-2">
          <h1 className="text-center w-full flex flex-col items-center gap-2.5">
            <div
              className="text-center relative w-full md:w-[934px] text-[28px] md:text-[54px] md:leading-[1.1] 
              bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent 
              font-extrabold md:font-black tracking-tight"
            >
              Engineering Technology Systems
            </div>
            <div
              className="text-[#ffffff] text-center relative w-full md:w-[934px] text-[28px] md:text-[54px] 
              md:leading-[1.1] font-extrabold md:font-black tracking-tight"
            >
              for Governments, Finance, and Enterprise
            </div>
          </h1>

          <p className="text-[#fbfbff] text-center text-[14px] md:text-lg font-normal relative w-full md:w-[562px] opacity-60 leading-relaxed mt-10 md:mt-6">
            Revosolve helps businesses transform ideas into scalable digital
            solutions using AI, cloud infrastructure and modern software
            engineering.
          </p>
        </div>

        {/* CTA Buttons - Mobile Stacked */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center shrink-0 relative w-full mt-6">
          {/* Main Button */}
          <button
            onClick={() => navigate("/connect")}
            className="btn-premium-glow w-[280px] md:w-64 h-12 md:h-14 rounded-sm flex items-center justify-center gap-3
            cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
          >
            <span className="relative z-10 text-center text-[14px] md:text-lg font-sans font-semibold tracking-tight">
              Start a Conversation
            </span>
            <img
              className="relative z-10 shrink-0 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300"
              src="/Home/hero_icon_2.svg"
              alt=""
            />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/coming-soon")}
            className="w-[280px] md:w-64 h-12 md:h-14 rounded-md border-2 border-white/20 flex items-center justify-center gap-4 
            backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent"
          >
            <span className="text-white text-center text-[14px] md:text-lg font-semibold tracking-tight">
              Explore case studies
            </span>
            <img
              className="shrink-0 w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform"
              src="/Home/hero_icon_3.svg"
              alt=""
            />
          </button>
        </div>

        {/* Scroll Arrow - Desktop Only */}
        <div className="hidden md:flex mt-8 justify-center w-full">
          <img
            onClick={() => {
              document
                .getElementById("marquee-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            src="/Home/hero_arrow_icon.svg"
            className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            alt="Scroll down"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
