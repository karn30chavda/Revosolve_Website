import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center font-sans pt-56 pb-16 bg-bg-primary">
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

        {/* Sharp Component Hider - Bottom Transition Bridge */}
        <div className="absolute -bottom-64 left-0 right-0 w-full pointer-events-none z-50">
          <img
            src="/hero_section/gradient.png"
            className="w-full h-auto object-cover scale-105"
            alt=""
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-start relative z-10 w-full px-4 text-center">
        {/* Tagline Pill */}
        <div
          className="flex items-center justify-center whitespace-nowrap overflow-hidden relative group 
          rounded-full bg-white/10 h-10 px-5 py-2 gap-2.5 backdrop-blur-md 
          border border-white/30 
          shadow-inner
          bg-linear-[110deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%] 
          bg-size-[200%_100%] animate-shine mb-6"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3/5 bg-linear-to-b from-transparent via-white/40 to-transparent"></div>

          <div className="text-[#fbfbff] text-xs md:text-base font-normal tracking-wide">
            Revosolve
          </div>

          <img
            className="shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 object-contain"
            src="/hero_section/icon_1.svg"
            alt=""
          />

          <div className="text-[#fbfbff] text-xs md:text-base font-normal tracking-wide">
            Building Future Tech
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-start shrink-0 relative mb-4 w-[85%] mx-auto px-2">
          <div className="flex flex-col gap-2 items-center justify-start shrink-0 relative w-full">
            <h1
              className="text-center relative w-full text-2xl md:text-4xl lg:text-5xl xl:text-5.5xl leading-tight 
              bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent 
              font-extrabold md:font-black tracking-tight drop-shadow-sm"
            >
              Engineering Technology Systems
            </h1>

            <h2
              className="text-[#ffffff] text-center relative w-full text-2xl md:text-4xl lg:text-5xl xl:text-5.5xl 
              leading-tight font-extrabold md:font-black tracking-tight drop-shadow-sm"
            >
              for Governments, Finance, and Enterprise
            </h2>
          </div>

          <p className="text-[#fbfbff] text-center text-sm md:text-base lg:text-lg font-normal relative w-full max-w-xl opacity-70 leading-relaxed mt-6">
            Revosolve helps businesses transform ideas into scalable digital
            solutions using AI, cloud infrastructure and modern software
            engineering.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center shrink-0 relative w-full mt-8">
          {/* Start a Conversation Button */}
          <button
          onClick={() => navigate("/connect")}
            className="bg-[#ffaa00] rounded-sm px-8 py-3.5 flex flex-row gap-2 items-center justify-start 
            shrink-0 relative cursor-pointer border-none group transition-all duration-300 overflow-hidden
            active:scale-95 shadow-xl"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-[radial-gradient(ellipse_at_bottom,#FFEBC3_0%,#FFaa00_70%)]"
            ></div>

            <div className="text-[#070784] text-center text-base md:text-lg leading-6 font-semibold relative z-10 tracking-tight">
              Start a Conversation
            </div>
            <img
              className="shrink-0 w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
              src="/hero_section/icon_2.svg"
              alt=""
            />
          </button>

          {/* Explore Case Studies Button */}
          <button
          onClick={() => navigate("/coming-soon")}
            className="rounded-sm border-2 border-white/20 px-8 py-3.5 h-auto
            flex flex-row gap-5 items-center justify-center shrink-0 relative backdrop-blur-md 
            cursor-pointer hover:bg-white/10 transition-all active:scale-95 text-white group bg-transparent"
          >
            <div className="text-center text-base md:text-lg leading-6 font-semibold relative tracking-tight">
              Explore Case Studies
            </div>
            <img
              className="shrink-0 w-3.5 h-3.5 md:w-4 md:h-3 relative group-hover:translate-x-1 transition-transform"
              src="/hero_section/icon_3.svg"
              alt=""
            />
          </button>
        </div>

        {/* Arrow Icon */}
        <div className="mt-16 flex justify-center w-full">
          <img
            src="/hero_section/arrow_icon.svg"
            className="w-5 h-4 md:w-6 md:h-5 object-contain opacity-70 hover:opacity-100 transition-opacity animate-bounce cursor-pointer"
            alt="Scroll down"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
