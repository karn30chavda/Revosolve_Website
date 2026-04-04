import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ 
        fontFamily: "'Blauer Nue'",
        background: "linear-gradient(180deg, #1C1F52 0%, #050614 100%)"
      }}
    >
      {/* Background Atmosphere */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(29, 31, 76, 0.8) 0%, transparent 70%)`
        }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-[#4A51B1] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-[#FFAA00] opacity-5 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Label */}
        <div className="text-white/30 text-sm tracking-[0.3em] font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase">
          Exciting things ahead
        </div>

        {/* Main Heading */}
        <h1 
          className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-bold leading-tight mb-8"
          style={{
            background: "linear-gradient(89.75deg, rgba(135, 123, 241, 1) 0%, rgba(252, 202, 113, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Blauer Nue Medium'"
          }}
        >
          Coming <br className="md:hidden" /> Soon
        </h1>

        {/* Description */}
        <p className="text-[#AAA9BE] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We're hard at work building something extraordinary for you. 
          The future of innovative solutions is just around the corner.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group relative px-8 py-4 bg-[#FFB73320] border border-[#FFB73340] rounded-xl flex items-center gap-3 transition-all hover:bg-[#FFB73330] hover:border-[#FFBB1A] active:scale-95 cursor-pointer"
        >
          <div className="text-[#FFBB1A] font-medium text-lg">
            Back to Home
          </div>
          <img 
            src="/connect/back_to_home_arrow.svg" 
            alt="Arrow" 
            className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
            style={{ filter: "invert(76%) sepia(85%) saturate(1637%) hue-rotate(352deg) brightness(102%) contrast(101%)" }}
          />
        </button>
      </div>


    </div>
  );
};

export default ComingSoon;
