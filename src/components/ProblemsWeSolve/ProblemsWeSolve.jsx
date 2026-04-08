import React, { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const ProjectCard = ({ card, index, total, scrollYProgress }) => {
  // Calculate start and end points for each card in the 0-1 scroll range
  const start = index / total;

  // Faster sliding: slide in over 15% of the total scroll instead of 25%
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.25), start],
    ["100%", "0%"],
  );

  // Subsequent stacking transitions
  const nextStart = (index + 1) / total;
  const scale = useTransform(
    scrollYProgress,
    [nextStart, nextStart + 0.1],
    [1, 0.96], // Subtler scale for speed
  );
  const opacity = useTransform(
    scrollYProgress,
    [nextStart, nextStart + 0.1],
    [1, 0.4],
  );

  return (
    <Motion.div
      style={{
        y: index === 0 ? 0 : y,
        scale,
        opacity,
        zIndex: index + 10,
      }}
      className={`absolute inset-0 w-full h-full rounded-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row ${
        card.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Mobile Icon (Header part) */}
      <div className="md:hidden p-6 pb-0 flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <img
            src={card.icon}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-[#f5f5ff] text-[20px] font-bold">{card.title}</h3>
      </div>

      {/* Text Content - Restoring Original Dimensions and Padding */}
      <div
        style={{
          background: "linear-gradient(147deg, #222468 14.75%, #191A3E 90.8%)",
        }}
        className="w-full md:w-[460px] flex flex-col justify-start items-start px-6 md:px-10 pt-8 md:pt-[50px] pb-8 md:pb-12 z-20 shrink-0 md:border-r border-white/10 font-sans"
      >
        <div className="hidden md:flex w-[60px] h-[60px] items-start justify-start mb-10 scale-125 origin-left">
          <img
            src={card.icon}
            alt=""
            width="40"
            height="40"
            className="object-contain"
          />
        </div>
        <h3 className="hidden md:block text-[#f5f5ff] text-[28px] font-black mb-8 leading-tight tracking-tight">
          {card.title}
        </h3>
        <p className="text-[#FBFBFF]/50 text-[14px] md:text-[18px] font-thin leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Video Side - Restoring Flex-1 Original Behavior */}
      <div className="flex-1 relative overflow-hidden bg-black min-h-[200px] md:min-h-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={card.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-none" />
      </div>
    </Motion.div>
  );
};

const ProblemsWeSolve = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappier smoothing for faster responses
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  const cardData = [
    {
      title: "Government & Public Sector",
      description:
        "Digital governance platforms, citizen service automation, and workflow systems for public operations.",
      icon: "/home_section_3/government.svg",
      video: "/home_section_3/government.mp4",
      reverse: false,
    },
    {
      title: "Banking & Financial Institutions",
      description:
        "Technology systems for customer interaction, identity verification, and financial operations enabling automated onboarding.",
      icon: "/home_section_3/accounts.svg",
      video: "/home_section_3/accounts.mp4",
      reverse: true,
    },
    {
      title: "Enterprise Organizations",
      description:
        "AI-driven workflow automation, decision intelligence, and operational systems.",
      icon: "/home_section_3/enterprice.svg",
      video: "/home_section_3/enterprice.mp4",
      reverse: false,
    },
  ];

  return (
    <section
      id="problems-we-solve"
      ref={containerRef}
      className="relative w-full bg-transparent overflow-visible md:h-[300vh] h-auto"
    >
      {/* Desktop View - Sticky Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden flex-col justify-start pt-12">
        <div className="relative z-30 w-[85%] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 w-full gap-6 md:gap-8 pt-0">
            <div className="flex flex-col items-start min-w-fit">
              <span className="text-white/30 uppercase mb-3 md:mb-4 block font-sans text-xs md:text-sm tracking-widest">
                [Problems We Solve]
              </span>
              <h2 className="prose-none">
                <span className="bg-linear-to-r from-[#897BF1] to-[#FCCB71] bg-clip-text text-transparent text-[32px] md:text-[3rem] font-black block leading-tight md:leading-none mb-1 md:mb-2 w-fit text-left">
                  Solving Complex
                </span>
                <span className="text-[#CACBDB] text-[32px] md:text-[3rem] font-thin block leading-tight md:leading-none text-left">
                  Institutional Challenges
                </span>
              </h2>
            </div>
            <div className="flex-1 pb-0 md:pb-2">
              <p className="text-[#FBFBFF]/60 max-w-[360px] font-sans text-[13px] md:text-[14px] leading-relaxed text-left">
                Modern institutions require reliable technology systems to
                manage large-scale operations, compliance, and decision-making.
              </p>
            </div>
          </div>

          {/* Cards Container - Using exact original height */}
          <div className="relative w-full h-[400px] md:h-[400px] overflow-hidden rounded-sm">
            {cardData.map((card, idx) => (
              <ProjectCard
                key={idx}
                card={card}
                index={idx}
                total={cardData.length}
                scrollYProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Static Vertical Stack */}
      <div className="md:hidden flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative py-12 px-4">
        {/* Header Section */}
        <div className="flex flex-col gap-3 items-start justify-start self-stretch relative">
          <div className="text-white/30 text-left font-sans text-[10px] tracking-[0.26px] lowercase">
            <span>
              <span className="opacity-50">[</span>
              <span>Problems We Solve</span>
              <span className="opacity-50">]</span>
            </span>
          </div>
          <div className="flex flex-col gap-0 items-start justify-start relative">
            <div className="text-left font-black text-[28px] leading-tight bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Solving Complex
            </div>
            <div className="text-[#CACBDB] text-left font-sans font-thin text-[28px] leading-tight">
              Institutional Challenges
            </div>
          </div>
          <div className="text-[#FBFBFF]/60 text-left font-sans text-[14px] font-normal relative self-stretch leading-relaxed">
            Modern institutions require reliable technology systems to manage
            large-scale operations, compliance, and decision-making
          </div>
        </div>

        {/* Mobile Cards List */}
        <div className="flex flex-col gap-6 items-center justify-start self-stretch relative">
          {cardData.map((card, idx) => (
            <div
              key={`mobile-card-${idx}`}
              className="rounded-lg p-6 flex flex-col gap-6 items-start justify-start self-stretch relative overflow-hidden"
              style={{
                background: "linear-gradient(205deg, #222468 0%, #191A3E 100%)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex flex-col gap-4 items-start justify-start self-stretch relative">
                <div className="flex items-center justify-start w-12 h-12 relative shrink-0">
                  <img
                    className="w-10 h-10 object-contain"
                    src={card.icon}
                    alt={card.title}
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start self-stretch relative">
                  <h3 className="text-[#f5f5ff] text-left font-black text-[20px] leading-tight font-sans">
                    {card.title}
                  </h3>
                  <p className="text-[#fbfbff]/50 text-left font-sans text-[14px] font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="w-full h-[180px] rounded-lg overflow-hidden border border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </section>
  );
};

export default ProblemsWeSolve;
