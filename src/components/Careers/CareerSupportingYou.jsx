import React from "react";
import {
  TrendUp,
  Clock,
  Coins,
  Chats,
  Heartbeat,
  Smiley,
} from "@phosphor-icons/react";

const CareerSupportingYou = () => {
  const problemCards = [
    {
      title: "Professional Development",
      description:
        "Grow your expertise with continuous learning, upskilling programs, and mentorship.",
      icon: TrendUp,
    },
    {
      title: "Work-Life Harmony",
      description:
        "Flexible schedules and supportive policies to help you balance work and life with ease.",
      icon: Clock,
    },
    {
      title: "Financial Wellness",
      description:
        "Smart compensation, financial planning support, and long-term stability.",
      icon: Coins,
    },
    {
      title: "Soft Skills Training",
      description:
        "Sharpen communication, leadership, and collaboration skills to thrive in any role.",
      icon: Chats,
    },
    {
      title: "Health & Wellness",
      description:
        "Access to physical and mental wellness resources that keep you feeling your best.",
      icon: Heartbeat,
    },
    {
      title: "Fun & Engagement",
      description:
        "From team outings to cultural events—we make work enjoyable, every step of the way.",
      icon: Smiley,
    },
  ];

  return (
    <section className="relative w-full bg-[#01031c] pt-8 pb-16 lg:pt-12 lg:pb-16 font-sans">
      {/* Decorative Glow Spots */}
      <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30 select-none">
          [PROBLEMS WE SOLVE]
        </div>

        {/* Heading Block */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-20 mt-1 pb-1">
          <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-[0.264px] font-sans text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              Supporting You,
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              In and Out of the Office
            </span>
          </h2>

          <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-[400px] text-left opacity-75 lg:mb-1 mt-4 lg:mt-0">
            We believe great work starts with a great work environment. That’s
            why we offer more than just competitive salaries—think flexible
            schedules, learning support, wellness initiatives, team outings, and
            more.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                style={{ 
                  backgroundColor: "rgba(29, 30, 50, 1)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                className="w-full p-7 rounded-2xl border-t-2 border-t-[#FCCA71]/80 border-x border-b hover:border-indigo-500/50 hover:bg-[rgba(38,40,66,1)] transition-all duration-300 flex flex-col justify-start items-start gap-5 group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] shrink-0">
                  <Icon size={26} className="text-[#FCCA71]" weight="light" />
                </div>

                {/* Text Content */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h4 className="text-white text-base font-semibold font-sans leading-6 text-left">
                    {card.title}
                  </h4>
                  <p className="text-[#AAA9BE] text-sm font-normal font-sans leading-6 text-left opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerSupportingYou;
