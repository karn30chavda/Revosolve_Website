import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const ComingSoon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Force reset scroll to top on every navigation event
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <Motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-sans"
      style={{
        background: "linear-gradient(180deg, #1C1F52 0%, #050614 100%)",
      }}
    >
      {/* Background Atmosphere */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(29, 31, 76, 0.8) 0%, transparent 70%)`,
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-[#4A51B1] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-[#FFAA00] opacity-5 blur-[120px] rounded-full" />

      <Motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Label */}
        <Motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white/30 text-sm tracking-[0.3em] font-medium mb-6 uppercase font-sans"
        >
          Exciting things ahead
        </Motion.div>

        {/* Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[3rem] md:text-[5rem] lg:text-[7.5rem] font-black leading-tight mb-4 font-sans uppercase"
          style={{
            background:
              "linear-gradient(89.75deg, rgba(135, 123, 241, 1) 0%, rgba(252, 202, 113, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WE'RE PREPARING <br />
          SOMETHING<span className="text-red-500" style={{ WebkitTextFillColor: "initial" }}>*</span> BIG
        </Motion.h1>

        {/* Footnote / Description */}
        <Motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex items-center gap-3 text-[#AAA9BE] text-xl md:text-3xl mb-16 font-medium font-sans"
        >
          <span className="text-red-500 font-bold text-2xl md:text-4xl">*</span>
          <span className="tracking-wide">something</span>
          <span className="text-[#3B82F6] font-bold uppercase tracking-wider">revolutionary</span>
        </Motion.div>

        {/* Back Button */}
        <Motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={() => navigate("/")}
          className="group relative px-8 py-4 bg-[#FFB73320] border border-[#FFB73340] rounded-xl flex items-center gap-3 transition-all hover:bg-[#FFB73330] hover:border-[#FFBB1A] active:scale-95 cursor-pointer font-sans"
        >
          <div className="text-[#FFBB1A] font-medium text-lg">Back to Home</div>
          <img
            src="/connect/back_to_home_arrow.svg"
            alt="Arrow"
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            style={{
              filter:
                "invert(76%) sepia(85%) saturate(1637%) hue-rotate(352deg) brightness(102%) contrast(101%)",
            }}
          />
        </Motion.button>
      </Motion.div>
    </Motion.div>
  );
};

export default ComingSoon;

