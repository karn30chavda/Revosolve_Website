import React from "react";
import { motion as Motion } from "framer-motion";
import { Timer, WarningDiamond, SquaresFour, ArrowsOut, PuzzlePiece, Gauge } from "@phosphor-icons/react";

const problemsList = [
  {
    title: "Slow Product Development",
    desc: "Disconnected engineering processes delay releases and slow the pace of innovation.",
    icon: <Timer size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Technical Debt",
    desc: "Poor architectural decisions create long-term maintenance challenges and rising costs.",
    icon: <WarningDiamond size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Inconsistent User Experience",
    desc: "Products evolve without a unified design or platform strategy, fragmenting the experience.",
    icon: <SquaresFour size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Scaling Challenges",
    desc: "Applications struggle to support increasing users, data, and transaction volumes.",
    icon: <ArrowsOut size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Platform Fragmentation",
    desc: "Multiple disconnected systems create operational inefficiencies and inconsistent customer experiences.",
    icon: <PuzzlePiece size={28} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Limited Engineering Agility",
    desc: "Teams spend more time maintaining systems than building new capabilities.",
    icon: <Gauge size={28} className="text-[#FCCA71]" weight="light" />,
  }
];

const ProductPlatformProblems = () => {
  return (
    <section className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden z-20 scroll-mt-20">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                  Great products fail
                </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                because their foundations don’t scale
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm md:text-base font-normal leading-relaxed opacity-70 text-left">
              Many organizations invest heavily in product development but cannot scale because their architecture, workflows, and engineering practices were never designed for long-term growth.
            </p>
          </div>
        </div>

        {/* Problems Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {problemsList.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.015
              }}
              className="flex flex-col justify-between items-start p-8 min-h-[220px] w-full bg-[#020319] border-2 border-[#5f5fff] rounded-[8px] cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top part: Icon Container */}
              <div 
                className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-transparent border border-[#FCCA71]/20 transition-all duration-300 mb-4 text-[#FCCA71]"
              >
                {item.icon}
              </div>

              {/* Bottom part: Text stack */}
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

export default ProductPlatformProblems;
