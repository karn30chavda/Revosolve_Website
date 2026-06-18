import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Careers = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on mount
    window.scrollTo(0, 0);
  }, [location.key]);

  const scrollToOpenings = () => {
    document
      .getElementById("openings-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start relative overflow-hidden font-sans"
      style={{
        background: "#01031c",
      }}
    >
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFAA00]/5 opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section Container */}
      <section className="relative w-full min-h-[90vh] lg:h-screen flex flex-col lg:flex-row items-center justify-start pt-24 lg:pt-10 z-10">
        {/* Soft Blue/Indigo Glow behind the button */}
        <div className="hidden lg:block w-[500px] h-[500px] absolute left-[-10%] bottom-[-20%] opacity-40 bg-linear-to-br from-[#191b57]/60 to-[#0e1038]/60 rounded-full blur-[110px] pointer-events-none z-0" />
        {/* Left Column: Copy & Actions */}
        <div className="w-full lg:w-1/2 flex items-center justify-start pl-[5%] md:pl-[7.5%] lg:pl-[7.5%] pr-[5%] lg:pr-12 py-12 lg:py-0 z-20 relative bg-transparent">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 w-full lg:max-w-[540px] xl:max-w-[700px] lg:flex-1">
            {/* Desktop Original Pill */}
            <div className="hidden lg:block opacity-30 justify-start mb-2">
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
            <div className="flex lg:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-1 w-fit mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
              <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
                careers
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center lg:justify-start lg:items-start w-full">
              <div className="max-w-full lg:w-auto lg:whitespace-nowrap justify-start bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                Build What’s Next
              </div>
              <div className="max-w-full lg:w-auto justify-start text-white text-[26px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] font-black font-sans leading-tight lg:leading-[46px] xl:leading-[56px] tracking-[0.264px]">
                Engineer the Future
              </div>
            </div>

            {/* Description */}
            <p className="max-w-full lg:max-w-[480px] xl:max-w-[553px] opacity-60 justify-start text-[#FBFBFF] text-sm sm:text-base xl:text-[18px] font-normal font-sans leading-relaxed lg:leading-normal mt-4 mb-6">
              At RevoSolve, we don't just build software, we engineer digital
              ecosystems that power modern enterprises. We're a team of
              thinkers, builders, problem-solvers, and innovators driven by one
              goal: to create technology that delivers measurable impact.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToOpenings}
              className="h-[46px] lg:h-[56px] py-[8px] lg:py-[10px] px-[24px] lg:px-[35px] rounded-[8px] border-2 border-[rgba(91,98,191,0.37)] backdrop-blur-[2px] flex justify-center items-center gap-[12px] lg:gap-[22px] bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 shrink-0"
            >
              <span className="text-white text-center font-sans text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] tracking-[-0.312px]">
                View Open Roles
              </span>
              <img
                src="/hero_section/icon_3.svg"
                alt="Arrow"
                className="w-[12px] lg:w-[14px] h-[8px] lg:h-[10px] shrink-0"
              />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image (Full Bleed on the right edge on desktop) */}
        {/* Right Column: Hero Image (Full Bleed on the right edge on desktop) */}
        <div className="w-[90%] md:w-[85%] lg:w-[42vw] relative h-[300px] sm:h-[350px] lg:h-[420px] overflow-hidden flex items-stretch z-10 mt-6 lg:mt-0 mx-auto lg:mx-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          {/* Atmospheric dark wash overlay */}
          <div className="absolute inset-0 bg-[#01031c]/15 z-10 pointer-events-none" />

          <img
            src="/careers/career_hero.png"
            alt="RevoSolve Careers Team"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        {/* Sibling Gradient Image - unclipped, overlapping and spilling to the left */}
        <img
          src="/careers/career_hero_gradient.png"
          className="hidden lg:block absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[23vw] lg:h-[422px] w-auto object-cover z-20 pointer-events-none"
          alt="Gradient Transition"
        />
        {/* Flipped/Reverted Gradient Image overlay */}
        <img
          src="/careers/career_hero_gradient.png"
          className="hidden lg:block absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[40vw] lg:h-[422px] w-auto object-cover z-10 pointer-events-none scale-x-[-1]"
          alt="Gradient Transition Reversed"
        />

        {/* Scroll Arrow - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:flex flex-col items-center justify-center">
          <img
            onClick={scrollToOpenings}
            src="/hero_section/arrow_icon.svg"
            className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
            alt="Scroll down"
          />
        </div>

        {/* Atmospheric Transition Gradient (The Bridge) */}
        <div className="absolute bottom-3 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
          <img
            src="/hero_section/gradient.png"
            className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
            alt=""
          />
        </div>
      </section>

      {/* Next Section (Openings Target) */}
      <section
        id="openings-section"
        className="w-[90%] md:w-[85%] mx-auto py-20 z-10 border-t border-white/5 mt-10 scroll-mt-24"
      >
        <div className="flex flex-col gap-6 max-w-2xl text-left">
          <span className="text-[#ffaa00] text-xs font-semibold tracking-widest uppercase">
            [ JOIN OUR MISSION ]
          </span>
          <h2 className="text-white text-2xl md:text-4xl font-bold font-sans">
            Current Openings
          </h2>
          <p className="text-[#AAA9BE] text-sm md:text-base font-light leading-relaxed">
            We are always looking for exceptionally talented engineers,
            designers, and operators. If you don't see an open role that fits
            your profile, feel free to reach out to us at sales@revosolve.com.
          </p>
        </div>

        {/* Dummy/Placeholder Position Card */}
        <div className="mt-12 bg-[#18192E]/50 border border-white/5 rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-all">
          <div className="flex flex-col gap-2">
            <span className="text-[#ffaa00] text-xs font-medium uppercase tracking-wider">
              Engineering
            </span>
            <h3 className="text-white text-xl font-bold font-sans">
              Full Stack / System Engineer
            </h3>
            <p className="text-[#AAA9BE] text-sm font-light mt-1">
              Remote / Mumbai, India • Full-Time
            </p>
          </div>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:sales@revosolve.com?subject=Application for Full Stack / System Engineer")
            }
            className="w-full md:w-auto px-6 py-3 bg-transparent text-white border border-[#4A51B1] hover:bg-[#4A51B1]/20 active:scale-[0.98] transition-all rounded-lg text-sm font-semibold cursor-pointer uppercase tracking-wider"
          >
            Apply Via Email
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
