import React, { useState } from "react";
import { UsersThree, HandHeart, BookOpen } from "@phosphor-icons/react";

const CareerWhyJoin = () => {
  const [activeCard, setActiveCard] = useState(0);

  const joinCards = [
    {
      title: "Growth Circles",
      description:
        "Collaborative forums where team members explore new skills, share experiences, and grow together, because personal and professional growth go hand in hand.",
      icon: UsersThree,
    },
    {
      title: "Corporate Social Responsibility",
      description:
        "Through meaningful initiatives, we give back to communities and support a sustainable future. Because real success includes responsibility.",
      icon: HandHeart,
    },
    {
      title: "Learning Opportunities",
      description:
        "From hands-on projects to expert-led sessions, our team is always learning. Because evolving skills means evolving solutions.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="why-join-section" className="relative w-full bg-[#01031c] pt-8 pb-8 lg:pt-10 lg:pb-12 scroll-mt-20 font-sans">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30 select-none">
          [WHAT]
        </div>

        {/* Heading Block: Left Title and Right Description Row */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-start lg:gap-20 mt-1 pb-1">
          <div className="flex flex-col items-start justify-start text-left">
            <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px]">
              Why Join
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal">
              Revosolve
            </h3>
          </div>
          <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-[480px] text-left opacity-75 lg:mb-1 mt-4 lg:mt-0">
            Join a team where your ideas matter, your skills evolve, and your
            work drives measurable impact. At RevoSolve, we combine technical
            excellence with a culture of ownership and innovation – giving you
            the space to grow and the platform to make a difference.
          </p>
        </div>

        {/* Bottom Content Row */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-start gap-8 lg:gap-12 mt-12 lg:mt-16">
          {/* Left Column: Interactive Cards */}
          <div className="w-full lg:w-[35%] flex flex-col justify-start items-start gap-5 shrink-0">
            {joinCards.map((card, idx) => {
              const isActive = idx === activeCard;
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  style={{
                    backgroundColor: isActive ? "rgba(38, 40, 66, 1)" : "rgba(29, 30, 50, 0.4)",
                    borderColor: isActive ? "rgba(99, 102, 241, 0.7)" : "rgba(99, 102, 241, 0.2)"
                  }}
                  className={`w-full p-6 flex flex-col justify-start items-start overflow-hidden cursor-pointer transition-all duration-300 rounded-[10px] ${
                    isActive
                      ? "border-t-2 border-t-[#FCCA71]/80 border-x border-b shadow-[0_0_20px_rgba(74,81,177,0.15)]"
                      : "border hover:border-indigo-500/50"
                  }`}
                >
                  <div className="w-full flex flex-col justify-start items-start">
                    {/* Icon (Above) */}
                    <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] mb-4 shrink-0">
                      <Icon size={26} className="text-[#FCCA71]" weight="light" />
                    </div>
                    {/* Title (Below Icon) */}
                    <h4 className="text-white text-lg font-semibold font-sans leading-6 mb-2.5 text-left">
                      {card.title}
                    </h4>
                    {/* Description */}
                    <p
                      className={`w-full text-sm font-sans leading-relaxed transition-all duration-300 text-left ${
                        isActive
                          ? "text-[#fbfbff] opacity-90 font-normal"
                          : "text-[#AAA9BE] opacity-60 font-light"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Image Frame */}
          <div className="w-full lg:w-[65%] min-h-[350px] sm:min-h-[450px] lg:min-h-0 flex-1 self-stretch rounded-2xl overflow-hidden relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/Careers/career_join_image.webp"
              alt="RevoSolve Careers Team Interaction"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerWhyJoin;
