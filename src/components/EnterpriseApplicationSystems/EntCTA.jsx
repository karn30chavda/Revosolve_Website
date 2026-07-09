import React from "react";
import { useNavigate } from "react-router-dom";

const EntCTA = () => {
  const navigate = useNavigate();

  const handleStartConversation = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Enterprise Application Systems",
      },
    });
  };

  return (
    <section className="bg-transparent pt-12 pb-12 lg:pt-16 lg:pb-16 flex flex-col items-center justify-start relative w-full overflow-hidden transform-gpu font-sans z-20">
      {/* Desktop View */}
      <div 
        className="hidden md:flex w-[85%] mx-auto rounded-lg py-16 px-12 flex-col gap-8 items-center justify-end relative overflow-hidden drop-shadow-2xl"
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
          src="/EnterpriseApplicationSystems/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* Content Group */}
        <div className="flex flex-col gap-2 items-center justify-start shrink-0 relative z-10 text-center">
          <h2
            className="text-white text-center font-sans text-[2.125rem] font-black relative md:w-[85%] max-w-full leading-normal"
            style={{ 
              letterSpacing: "0.0165rem",
            }}
          >
            Build Your Enterprise Application System
          </h2>
          <p
            className="text-[#CACBEB] text-center font-sans text-[1.25rem] leading-12 font-normal relative mt-2"
            style={{ 
              letterSpacing: "-0.017rem",
            }}
          >
            Enterprise applications should not just support your workflows. They should drive operational efficiency and scale.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStartConversation}
          className="btn-premium-glow rounded-sm py-4 px-8 flex flex-row gap-2 items-center justify-start shrink-0 relative group transition-all duration-300 z-10 cursor-pointer"
        >
          <span
            className="text-[#070784] text-center font-sans text-[1rem] leading-6 font-semibold relative"
            style={{ 
              letterSpacing: "-0.0195rem",
            }}
          >
            Start a Conversation
          </span>
          <img 
            src="/EnterpriseApplicationSystems/cta_conversation_arrow.svg"
            className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
            alt=""
          />
        </button>
      </div>

      {/* Mobile View */}
      <div 
        className="md:hidden w-[85%] mx-auto rounded-lg pt-16 pr-[22px] pb-16 pl-[22px] flex flex-col gap-8 items-center justify-end relative overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(-70.26deg, rgba(32, 206, 255, 1) 0%, rgba(7, 7, 132, 1) 100%), linear-gradient(to left, #151618, #151618)",
        }}
      >
        <img
          className="shrink-0 w-[230%] h-[315px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none opacity-90 mix-blend-screen"
          src="/EnterpriseApplicationSystems/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative z-10">
          <h2
            className="text-[#ffffff] text-center font-sans text-[28px] font-bold relative self-stretch leading-tight"
            style={{ 
              letterSpacing: "0.26px",
            }}
          >
            Build Your Enterprise Application System
          </h2>
          <p
            className="text-[#cacbeb] text-center font-sans text-[14px] font-normal relative self-stretch opacity-90 leading-relaxed"
            style={{ 
              letterSpacing: "-0.27px",
            }}
          >
            Enterprise applications should not just support your workflows. They should drive operational efficiency and scale.
          </p>
        </div>

        <button
          onClick={handleStartConversation}
          className="btn-premium-glow rounded pt-4 pr-8 pb-4 pl-8 flex flex-row gap-2 items-center justify-start shrink-0 relative group transition-all duration-300 z-10 cursor-pointer active:scale-95"
        >
          <span
            className="text-[#070784] text-center font-sans text-base leading-6 font-semibold relative"
            style={{ 
              letterSpacing: "-0.31px",
            }}
          >
            Start a Conversation
          </span>
          <img 
            className="shrink-0 w-5 h-5 relative overflow-visible transition-transform group-hover:translate-x-1" 
            src="/EnterpriseApplicationSystems/cta_conversation_arrow.svg" 
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default EntCTA;
