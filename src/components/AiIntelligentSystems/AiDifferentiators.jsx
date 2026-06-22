import React from "react";
import { motion as Motion } from "framer-motion";

const differentiators = [
  {
    title: "Operational-First Approach",
    desc: "AI designed around workflows, not just models.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 8.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Ready Architecture",
    desc: "Built for security, governance, scalability, and reliability.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Domain-Aware Implementation",
    desc: "Experience across government, BFSI, commerce, and enterprise operations.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m0 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: "Production-Focused Delivery",
    desc: "Designed for long-term adoption, monitoring, and continuous improvement.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.59 8.37m6 6c1.19-1.19 1.45-2.88.62-3.71-.83-.83-2.52-.57-3.71.62m3.71 3.09c-.93.93-2.35.96-3.17.14-.82-.82-.8-2.24.14-3.17m-3.17 3.17c-1.19 1.19-2.88 1.45-3.71.62-.83-.83-.57-2.52.62-3.71m3.09 3.71a2.25 2.25 0 1 1-3.17-3.17M9.59 8.37a14.98 14.98 0 0 1-6.16 12.12A14.98 14.98 0 0 1 9.59 8.37Z" />
      </svg>
    ),
  },
  {
    title: "Systems Thinking",
    desc: "We view AI as one component of a larger operational ecosystem, not an isolated capability.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const AiDifferentiators = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden z-20">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: "url(/home_section_6/bg_pattern.svg)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [differentiators]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
                What Makes
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                Us Different
              </span>
            </h2>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {differentiators.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.015
              }}
              style={{ 
                backgroundColor: "rgba(2, 3, 25, 1)",
                borderColor: "rgba(95, 95, 255, 1)"
              }}
              className="flex flex-col justify-between items-start p-8 min-h-[260px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-300 mb-6">
                {item.icon}
              </div>

              {/* Text stack */}
              <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                <h4 className="text-white text-[18px] font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#CACBDB] text-[13.5px] font-normal leading-relaxed opacity-60 group-hover:opacity-85 transition-opacity duration-300">
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

export default AiDifferentiators;
