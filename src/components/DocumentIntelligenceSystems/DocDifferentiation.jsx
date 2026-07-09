import React from "react";
import { motion as Motion } from "framer-motion";

const differentiationData = [
  {
    title: "Built as end-to-end systems, not standalone OCR tools",
    desc: "required Text for this Card",
    icon: "/DocumentIntelligenceSystems/diff_icon_1.svg",
    pattern: "/DocumentIntelligenceSystems/diff_pattern.svg",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Designed for BFSI and government workflows",
    desc: "required Text for this Card",
    icon: "/DocumentIntelligenceSystems/diff_icon_2.svg",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Integrates with existing infrastructure",
    desc: "required Text for this Card",
    icon: "/DocumentIntelligenceSystems/diff_icon_3.svg",
    colSpan: "lg:col-span-3",
  },
  {
    title: "Scalable for high-volume processing",
    desc: "required Text for this Card",
    icon: "/DocumentIntelligenceSystems/diff_icon_4.svg",
    colSpan: "lg:col-span-3",
  },
];

const DocDifferentiation = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-4 pb-10 lg:pt-6 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          {/* Section Tag */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [differentiation]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-[#CACBDB] font-light xl:font-thin">
                Why
              </span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                RevoSolve
              </span>
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              Required Text
            </h3>
          </div>
        </div>

        {/* Differentiation Grid (6-column layout to handle 2:1 and 1.5:1.5 rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full">
          {differentiationData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(167, 139, 250, 0.12)",
                borderColor: "rgba(99, 102, 241, 0.7)"
              }}
              className={`flex flex-col justify-start items-start p-8 min-h-[210px] w-full bg-violet-400/10 rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden ${item.colSpan}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Left Pattern (For first card only) */}
              {item.pattern && (
                <img 
                  src={item.pattern} 
                  alt="" 
                  className="absolute bottom-0 left-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0" 
                />
              )}

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-full h-full object-contain" 
                />
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                {/* Title */}
                <h4 className="text-[#E7E6FC] text-[24px] font-semibold font-sans leading-[32px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Description */}
                <p className="text-[#AAA9BE] text-[16px] font-normal font-sans leading-[24px] text-left max-w-full lg:max-w-[520px]">
                  {item.desc}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DocDifferentiation;
