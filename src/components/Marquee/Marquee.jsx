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
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-32 flex flex-col items-center relative z-20 bg-transparent overflow-hidden">
      
      {/* Sharp Component Hider - Atmospheric Bridge Transition */}
      <div className="absolute -top-72 left-0 right-0 w-full pointer-events-none z-50">
        <img 
          src="/hero_section/gradient.png" 
          className="w-full h-auto object-cover scale-105" 
          alt="" 
        />
      </div>

      {/* Heading - Single line, refined opacity */}
      <div className="w-[80%] mx-auto px-4 flex justify-center mb-16">
        <p className="text-[#B9BAC8] font-sans text-base md:text-lg font-normal tracking-wide text-center leading-normal">
          Relied upon by businesses excelling through data and AI.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex overflow-hidden w-full group">
        {/* Left & Right Edge Fades - Smooth infinite loop edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>

        <Motion.div
          className="flex items-center gap-6 shrink-0"
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 w-44 md:w-52 h-24 bg-[#191A34] rounded-sm border-none shadow-xl hover:bg-[#1e1f40] transition-all duration-500"
            >
              <img
                src={logo}
                className="max-h-10 max-w-40 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
