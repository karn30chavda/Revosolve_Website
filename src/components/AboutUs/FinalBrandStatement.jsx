import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutCTA = () => {
  const navigate = useNavigate();

  const handleNavigate = (actionText) => {
    navigate("/connect", {
      state: {
        category: "About Us",
        service: "General Inquiry / Partnership",
        notes: actionText ? `Interested in: ${actionText}` : "",
      },
    });
  };

  return (
    <section className="bg-transparent pt-4 pb-12 md:py-16 flex flex-col items-center justify-start relative w-full overflow-hidden font-sans z-20">
      
      {/* Desktop Container */}
      <div
        className="hidden md:flex w-[85%] mx-auto rounded-lg py-12 px-10 flex-col gap-8 items-center justify-center relative overflow-hidden drop-shadow-2xl"
        style={{
          background: "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
        }}
      >
        {/* Background Pattern */}
        <img
          className="absolute pointer-events-none select-none opacity-[0.9] object-contain overflow-visible mix-blend-screen"
          style={{
            width: "40.29156rem",
            height: "19.6875rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src="/AboutUs/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* Content Group */}
        <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative z-10 text-center max-w-4xl">
          <h2
            className="text-white text-center font-sans text-[2.25rem] md:text-[2.6rem] font-black relative leading-tight max-w-4xl"
            style={{
              letterSpacing: "0.0165rem",
            }}
          >
            RevoSolve doesn't build{" "}
            <span 
              className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              software for organizations.
            </span>
          </h2>
          
          <p
            className="text-[#CACBEB] text-center font-sans text-[1.1rem] md:text-[1.2rem] leading-relaxed font-normal relative mt-2 max-w-3xl opacity-90"
            style={{
              letterSpacing: "-0.017rem",
            }}
          >
            We engineer the operational systems that help them perform, adapt, and lead in a digital world. <span className="text-white font-semibold block mt-2 text-[1.15rem]">Ready to engineer better operations?</span>
          </p>
        </div>

        {/* Button Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center z-10 relative mt-4">
          <button
            onClick={() => handleNavigate("Start a Conversation")}
            className="btn-premium-glow rounded-sm py-4 px-8 flex flex-row gap-2.5 items-center justify-start shrink-0 relative group transition-all duration-300 cursor-pointer active:scale-95"
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
              src="/AboutUs/cta_conversation_arrow.svg"
              className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
              alt=""
            />
          </button>

          <button
            onClick={() => handleNavigate("Explore Our Systems")}
            className="border border-white/20 hover:border-white/40 text-white font-semibold rounded-sm py-4 px-8 flex flex-row gap-3 items-center justify-center transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
          >
            <span className="font-sans text-[1rem] leading-6 tracking-tight">
              Explore Our Systems
            </span>
            <img
              className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              src="/AboutUs/hero_btn_icon_2.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="flex md:hidden w-[90%] mx-auto rounded-lg py-8 px-6 flex-col gap-6 items-center justify-center relative overflow-hidden drop-shadow-2xl"
        style={{
          background: "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
        }}
      >
        <img
          className="absolute pointer-events-none select-none opacity-[0.8] object-contain overflow-visible mix-blend-screen w-75 h-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/AboutUs/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
        />

        <div className="flex flex-col gap-3 items-center justify-start relative z-10 text-center">
          <h2 className="text-white text-center font-sans text-xl font-black relative leading-snug">
            RevoSolve doesn't build{" "}
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block mt-1">
              software for organizations.
            </span>
          </h2>
          <p className="text-[#CACBEB] text-center font-sans text-sm leading-relaxed font-normal opacity-90">
            We engineer the operational systems that help them perform, adapt, and lead in a digital world. <span className="text-white font-semibold block mt-1">Ready to engineer better operations?</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full items-center z-10 relative">
          <button
            onClick={() => handleNavigate("Start a Conversation")}
            className="btn-premium-glow w-full rounded-sm py-3.5 px-6 flex flex-row gap-2 items-center justify-center group cursor-pointer"
          >
            <span className="text-[#070784] text-center font-sans text-sm font-semibold">
              Start a Conversation
            </span>
            <img
              src="/AboutUs/cta_conversation_arrow.svg"
              className="shrink-0 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              alt=""
            />
          </button>
        </div>
      </div>

    </section>
  );
};

export default AboutCTA;
