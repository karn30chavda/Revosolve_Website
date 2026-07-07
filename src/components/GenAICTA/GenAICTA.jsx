import React from "react";
import { useNavigate } from "react-router-dom";

const GenAICTA = () => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Generative AI Systems",
      },
    });

  return (
    <section className="bg-transparent pt-2 pb-10 md:py-10 flex flex-col items-center justify-start relative w-full overflow-hidden transform-gpu font-sans">
      {/* Desktop View */}
      <div
        className="hidden md:flex w-[85%] mx-auto rounded-lg py-16 px-12 flex-col gap-6 items-center justify-end relative overflow-hidden drop-shadow-2xl"
        style={{
          background: "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
        }}
      >
        {/* Background Pattern */}
        <img
          className="absolute pointer-events-none select-none opacity-[0.9] object-contain overflow-visible"
          style={{
            width: "40.29156rem",
            height: "19.6875rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src="/home_section_7/bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* Content Group */}
        <div className="flex flex-col gap-3 items-center justify-start shrink-0 relative z-10 text-center">
          <h2 className="text-white text-center font-sans text-[2.125rem] font-black relative leading-normal tracking-[0.0165rem]">
            Build AI That Works Where It Matters — In Production
          </h2>
          <p className="text-[#CACBEB] text-center font-sans text-[1.25rem] leading-normal font-normal relative tracking-[-0.017rem]">
            Move beyond proof of concept. Engineer AI systems that run your
            operations securely, every day
          </p>
        </div>

        <button
          onClick={handleClick}
          className="btn-premium-glow rounded-sm py-4 px-8 flex flex-row gap-2 items-center justify-start shrink-0 relative group transition-all duration-300 z-10 cursor-pointer mt-4"
        >
          <span className="text-[#070784] text-center font-sans text-[1rem] leading-6 font-semibold relative tracking-[-0.0195rem]">
            Start a Conversation
          </span>
          <img
            src="/home_section_7/conversation_arrow.svg"
            className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
            alt=""
          />
        </button>
      </div>

      {/* Mobile View */}
      <div
        className="md:hidden w-[90%] mx-auto rounded-lg pt-16 pr-[22px] pb-16 pl-[22px] flex flex-col gap-6 items-center justify-end relative overflow-hidden shadow-2xl"
        style={{
          background:
            "linear-gradient(-70.26deg, rgba(32, 206, 255, 1) 0%, rgba(7, 7, 132, 1) 100%), linear-gradient(to left, #151618, #151618)",
        }}
      >
        <img
          className="shrink-0 w-[230%] h-[315px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none opacity-90 mix-blend-screen"
          src="/home_section_7/bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative z-10">
          <h2 className="text-[#ffffff] text-center font-sans text-[24px] font-bold relative self-stretch leading-tight tracking-[0.26px]">
            Build AI That Works Where It Matters — In Production
          </h2>
          <p className="text-[#cacbeb] text-center font-sans text-[14px] font-normal relative self-stretch opacity-90 leading-relaxed tracking-[-0.27px]">
            Move beyond proof of concept. Engineer AI systems that run your
            operations securely, every day
          </p>
        </div>

        <button
          onClick={handleClick}
          className="btn-premium-glow rounded pt-4 pr-8 pb-4 pl-8 flex flex-row gap-2 items-center justify-start shrink-0 relative group transition-all duration-300 z-10 cursor-pointer active:scale-95 mt-2"
        >
          <span className="text-[#070784] text-center font-sans text-base leading-6 font-semibold relative tracking-[-0.31px]">
            Start a Conversation
          </span>
          <img
            className="shrink-0 w-5 h-5 relative overflow-visible transition-transform group-hover:translate-x-1"
            src="/home_section_7/conversation_arrow.svg"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default GenAICTA;
