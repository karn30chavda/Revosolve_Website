import React, { useRef, useState } from "react";
import { UsersThree, HandHeart, BookOpen } from "@phosphor-icons/react";
import { useScroll, useMotionValueEvent, motion as Motion } from "framer-motion";

const CareerWhyJoin = () => {
  const scrollTrackRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const joinCards = [
    {
      title: "Growth Circles",
      description:
        "Collaborative forums where team members explore new skills, share experiences, and grow together, because personal and professional growth go hand in hand.",
      icon: UsersThree,
      image: "/Careers/growth_img.jpg",
    },
    {
      title: "Corporate Social Responsibility",
      description:
        "Through meaningful initiatives, we give back to communities and support a sustainable future. Because real success includes responsibility.",
      icon: HandHeart,
      image: "/Careers/CorporateSocialResponsibility.webp",
    },
    {
      title: "Learning Opportunities",
      description:
        "From hands-on projects to expert-led sessions, our team is always learning. Because evolving skills means evolving solutions.",
      icon: BookOpen,
      image: "/Careers/LearningOpportunities.webp",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveCard(0);
    } else if (latest < 0.66) {
      setActiveCard(1);
    } else {
      setActiveCard(2);
    }
  });

  const handleCardClick = (idx) => {
    setActiveCard(idx);
    if (scrollTrackRef.current) {
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetProgress = (idx + 0.35) / joinCards.length;
      const targetY = scrollTop + rect.top + targetProgress * (rect.height - window.innerHeight);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-join-section"
      ref={scrollTrackRef}
      className="relative w-full h-[200vh] md:h-[220vh] bg-[#01031c] scroll-mt-32 font-sans touch-pan-y"
    >
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Sticky Content Container */}
      <div className="sticky top-27 min-[1290px]:top-29 w-full min-h-fit py-2 lg:py-4 flex flex-col justify-center items-center z-20">
        <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start">
          {/* Section Tag */}
          <div className="text-white text-[14px] sm:text-[16px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30 select-none mb-0.5">
            [WHAT]
          </div>

          {/* Heading Block: Left Title and Right Description Row */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-start lg:gap-16 mt-0 pb-1">
            <div className="flex flex-col items-start justify-start text-left">
              <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[34px] font-black leading-tight tracking-[0.264px]">
                Why Join
              </h2>
              <h3 className="text-[#CACBDB] text-lg md:text-xl xl:text-[26px] font-light xl:font-thin leading-snug">
                Revosolve
              </h3>
            </div>
            <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-120 text-left opacity-75 lg:mb-0.5 mt-2 lg:mt-0">
              Join a team where your ideas matter, your skills evolve, and your
              work drives measurable impact. At RevoSolve, we combine technical
              excellence with a culture of ownership and innovation – giving you
              the space to grow and the platform to make a difference.
            </p>
          </div>

          {/* Bottom Content Row */}
          <div className="w-full flex flex-col lg:flex-row items-stretch justify-start gap-5 lg:gap-8 mt-4 lg:mt-6">
            {/* Left Column: Interactive Cards */}
            <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col justify-start items-start gap-3 shrink-0">
              {joinCards.map((card, idx) => {
                const isActive = idx === activeCard;
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    style={{
                      backgroundColor: isActive ? "rgba(38, 40, 66, 1)" : "rgba(29, 30, 50, 0.4)",
                      borderColor: isActive ? "rgba(99, 102, 241, 0.7)" : "rgba(99, 102, 241, 0.2)"
                    }}
                    className={`w-full p-3.5 sm:p-4 flex flex-col justify-start items-start overflow-hidden cursor-pointer transition-all duration-300 rounded-[10px] ${
                      isActive
                        ? "border-t-2 border-t-[#FCCA71]/80 border-x border-b shadow-[0_0_20px_rgba(74,81,177,0.2)] scale-[1.01]"
                        : "border opacity-70 hover:opacity-100 hover:border-indigo-500/50"
                    }`}
                  >
                    <div className="w-full flex flex-col justify-start items-start">
                      {/* Icon & Title on the same line */}
                      <div className="flex items-center gap-2.5 mb-1.5 shrink-0">
                        <div className="flex items-center justify-center text-[#FCCA71] shrink-0">
                          <Icon size={20} className="text-[#FCCA71]" weight="light" />
                        </div>
                        <h4 className="text-white text-sm sm:text-base font-semibold font-sans leading-snug text-left">
                          {card.title}
                        </h4>
                      </div>
                      {/* Description */}
                      <p
                        className={`w-full text-[11px] sm:text-xs font-sans leading-relaxed transition-all duration-300 text-left ${
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
            <div className="w-full lg:w-[60%] xl:w-[65%] min-h-55 sm:min-h-65 lg:min-h-0 flex-1 self-stretch rounded-xl overflow-hidden relative border border-white/10 shadow-2xl">
              <Motion.img
                key={activeCard}
                initial={{ opacity: 0.7, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                src={joinCards[activeCard]?.image || "/Careers/growth_img.jpg"}
                alt={joinCards[activeCard]?.title || "RevoSolve Careers"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerWhyJoin;
