import React from "react";

const CareerHero = ({ scrollToOpenings }) => {
  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10">
      {/* Mobile Background Image & Tint Wash (Visible only on mobile/tablet below 1290px) */}
      <div className="absolute top-[3.74938rem] bottom-0 left-0 right-0 min-[1290px]:hidden z-0 pointer-events-none">
        <img
          src="/careers/career_hero.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark tint overlay for reading contrast */}
        <div className="absolute inset-0 bg-[#01031c]/75" />
      </div>
      {/* Soft Blue/Indigo Glow behind the button */}
      <div className="hidden min-[1290px]:block w-[500px] h-[500px] absolute left-[-10%] bottom-[-20%] opacity-40 bg-linear-to-br from-[#191b57]/60 to-[#0e1038]/60 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Main Content Row: Wraps left content and absolute right image for height matching on desktop */}
      <div className="w-full min-[1290px]:w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-12 py-12 min-[1290px]:py-12 z-20 relative bg-transparent">
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-[540px] xl:max-w-[700px] min-[1290px]:flex-1">
          {/* Desktop Original Pill */}
          <div className="hidden min-[1290px]:block opacity-30 justify-start mb-2">
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              [
            </span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
              careers
            </span>
            <span className="text-white text-lg font-normal font-sans tracking-tight">
              ]
            </span>
          </div>

          {/* Mobile Styled Glassmorphic Careers Badge */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-1 w-fit mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              careers
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full">
            <div className="max-w-full min-[1290px]:w-auto min-[1290px]:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
              Build What’s Next
            </div>
            <div className="max-w-full min-[1290px]:w-auto justify-start text-white text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
              Engineer the Future
            </div>
          </div>

          {/* Description */}
          <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[553px] opacity-75 justify-start text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-4 mb-6">
            At RevoSolve, we don't just build software, we engineer digital
            ecosystems that power modern enterprises. We're a team of thinkers,
            builders, problem-solvers, and innovators driven by one goal: to
            create technology that delivers measurable impact.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToOpenings}
            className="h-[46px] min-[1290px]:h-[56px] py-[8px] min-[1290px]:py-[10px] px-[24px] min-[1290px]:px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[12px] min-[1290px]:gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
          >
            <span className="text-white text-center font-sans text-[14px] min-[1290px]:text-[16px] font-medium leading-[20px] min-[1290px]:leading-[24px] tracking-[-0.312px]">
              View Open Roles
            </span>
            <img
              src="/hero_section/icon_3.svg"
              alt="Arrow"
              className="w-[12px] min-[1290px]:w-[14px] h-[8px] min-[1290px]:h-[10px] shrink-0"
            />
          </button>

          {/* Mobile Inline Scroll Arrow */}
          <div className="min-[1290px]:hidden mt-8 flex flex-col items-center justify-center">
            <img
              onClick={scrollToOpenings}
              src="/hero_section/arrow_icon.svg"
              className="w-5 h-4 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
              alt="Scroll down"
            />
          </div>
        </div>

        {/* Right Column: Hero Image Container (Matches the left text content column height exactly) */}
        <div className="hidden min-[1290px]:flex min-[1290px]:w-[42vw] min-[1290px]:absolute min-[1290px]:right-0 min-[1290px]:top-12 min-[1290px]:bottom-12 z-10 items-stretch relative">
          {/* Sibling Gradient Image - unclipped, overlapping and spilling to the left */}
          <img
            src="/careers/career_hero_gradient.webp"
            className="hidden min-[1290px]:block absolute top-1/2 -translate-y-1/2 left-0 h-full w-auto object-cover z-20 pointer-events-none"
            alt="Gradient Transition"
          />
          {/* Flipped/Reverted Gradient Image overlay */}
          <img
            src="/careers/career_hero_gradient.webp"
            className="hidden min-[1290px]:block absolute top-1/2 -translate-y-1/2 right-full h-full w-auto object-cover z-10 pointer-events-none scale-x-[-1]"
            alt="Gradient Transition Reversed"
          />

          {/* The Clipped Image Container */}
          <div className="w-full h-full rounded-tl-lg rounded-bl-lg rounded-br-lg overflow-hidden relative z-10 flex items-stretch">
            {/* Atmospheric dark wash overlay */}
            <div className="absolute inset-0 bg-[#01031c]/15 z-10 pointer-events-none" />

            <img
              src="/careers/career_hero.webp"
              alt="RevoSolve Careers Team"
              className="w-full h-full object-cover object-center relative z-0"
            />
          </div>
        </div>
      </div>

      {/* Scroll Arrow - Bottom Center (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 hidden min-[1290px]:flex flex-col items-center justify-center">
        <img
          onClick={scrollToOpenings}
          src="/hero_section/arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/hero_section/gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default CareerHero;
