import React from "react";
import { motion as Motion } from "framer-motion";

const Marquee = () => {
  const logos = [
    "/marquee_icons/1.svg",
    "/marquee_icons/2.svg",
    "/marquee_icons/3.svg",
    "/marquee_icons/4.svg",
  ];

  // Multiple sets for a truly infinite feel
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 md:py-32 flex flex-col items-center relative z-20 bg-transparent overflow-hidden transform-gpu">
      
      {/* Top Atmospheric Transition Bridge */}
      <div className="absolute -top-5 left-0 right-0 w-full pointer-events-none z-30 transform-gpu -translate-y-1/2">
        <img 
          src="/hero_section/gradient.png" 
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100" 
          alt="" 
        />
      </div>

      {/* Heading - Responsive typography */}
      <div className="w-full max-w-2xl mx-auto px-6 flex justify-center mb-12 md:mb-16">
        <p className="text-[#B9BAC8] font-sans text-sm md:text-lg font-normal tracking-wide text-center leading-relaxed opacity-80">
          Relied upon by businesses excelling through data and AI.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex overflow-hidden w-full group py-4">
        {/* Left & Right Edge Fades - Desktop Only */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-64 bg-linear-to-r from-[#01031c] via-[#01031c]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-64 bg-linear-to-l from-[#01031c] via-[#01031c]/80 to-transparent z-10 pointer-events-none"></div>

        <Motion.div
          className="flex items-center gap-4 md:gap-8 shrink-0 py-2"
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 w-48 h-22 md:w-52 md:h-24 bg-[#191A34] rounded-sm border-none shadow-lg hover:bg-[#1e1f40] transition-all duration-500 transform-gpu"
            >
              <img
                src={logo}
                className="max-h-9 md:max-h-10 max-w-[70%] md:max-w-[75%] w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                alt={`Partner Logo ${index + 1}`}
              />
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Marquee;
