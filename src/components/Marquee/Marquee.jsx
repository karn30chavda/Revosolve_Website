import React from "react";
import { motion as Motion } from "framer-motion";

const Marquee = () => {
  const logos = [
    "/marquee_icons/icon_1.svg",
    "/marquee_icons/icon_2.svg",
    "/marquee_icons/icon_3.svg",
    "/marquee_icons/icon_4.svg",
    "/marquee_icons/icon_5.svg",
    "/marquee_icons/icon_6.svg",
  ];

  // Multiple sets for a truly infinite feel
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-bg-primary mt-16 pt-12 pb-24 overflow-hidden flex flex-col items-center relative z-10">
      {/* Heading - Single line, refined opacity */}
      <div className="flex justify-center mb-16 px-4">
        <p className="text-white/50 text-[18px] font-normal tracking-wide text-center max-w-[1200px] font-sans">
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
              className="flex items-center justify-center shrink-0 w-[206px] h-[94px] bg-[#191A34] rounded-[4px] border-none shadow-xl hover:bg-[#1e1f40] transition-all duration-500"
            >
              <img
                src={logo}
                className="max-h-[38px] max-w-[155px] w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
