import React from "react";
import { useNavigate } from "react-router-dom";

const SimulationDigitalTwinCTA = () => {
  const navigate = useNavigate();

  const handleNavigate = (actionText) => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Simulation & Digital Twin Systems",
        notes: actionText ? `Interested in: ${actionText}` : ""
      },
    });
  };

  return (
    <section className="bg-transparent pt-2 pb-10 md:py-12 flex flex-col items-center justify-start relative w-full overflow-hidden transform-gpu font-sans z-20">
      {/* Desktop View */}
      <div
        className="hidden md:flex w-[85%] mx-auto rounded-lg py-10 px-8 flex-col gap-6 items-center justify-end relative overflow-hidden drop-shadow-2xl"
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
          src="/SimulationDigitalTwinSystems/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* Content Group */}
        <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative z-10 text-center max-w-4xl">


          <h2
            className="text-white text-center font-sans text-[2.25rem] md:text-[2.5rem] font-black relative leading-tight"
            style={{
              letterSpacing: "0.0165rem",
            }}
          >
            Build a living digital model of{" "}
            <span 
              className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              your operations
            </span>
          </h2>
          
          <p
            className="text-[#CACBEB] text-center font-sans text-[1.15rem] leading-relaxed font-normal relative mt-2 max-w-3xl"
            style={{
              letterSpacing: "-0.017rem",
            }}
          >
            Move beyond dashboards and static reports. Engineer a Digital Twin that connects infrastructure, enterprise systems, IoT, AI, and operational intelligence into one decision-support platform designed for the future.
          </p>
        </div>

        {/* Button Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center z-10 relative mt-4 font-mono">
          <button
            onClick={() => handleNavigate("Book a Digital Twin Workshop")}
            className="btn-premium-glow rounded-sm py-4 px-8 flex flex-row gap-2.5 items-center justify-start shrink-0 relative group transition-all duration-300 cursor-pointer active:scale-95 border-none"
          >
            <span
              className="text-[#070784] text-center font-sans text-[1rem] leading-6 font-semibold relative"
              style={{
                letterSpacing: "-0.0195rem",
              }}
            >
              Book a Digital Twin Workshop
            </span>
            <img
              src="/SimulationDigitalTwinSystems/cta_conversation_arrow.svg"
              className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
              alt=""
            />
          </button>

          <button
            onClick={() => handleNavigate("Talk to Our Specialists")}
            className="border border-white/20 hover:border-white/40 text-white font-semibold rounded-sm py-4 px-8 flex flex-row gap-3 items-center justify-center transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
          >
            <span className="font-sans text-[1rem] leading-6 tracking-tight">
              Talk to Our Specialists
            </span>
            <img
              className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              src="/SimulationDigitalTwinSystems/hero_icon_3.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="md:hidden w-[90%] mx-auto rounded-lg py-10 px-6 flex flex-col gap-6 items-center justify-end relative overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(-70.26deg, rgba(32, 206, 255, 1) 0%, rgba(7, 7, 132, 1) 100%), linear-gradient(to left, #151618, #151618)",
        }}
      >
        <img
          className="shrink-0 w-[230%] h-[315px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none opacity-90 mix-blend-screen"
          src="/SimulationDigitalTwinSystems/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative z-10 text-center pt-4">


          <h2
            className="text-[#ffffff] text-center font-sans text-[26px] font-bold relative self-stretch leading-tight"
            style={{
              letterSpacing: "0.26px",
            }}
          >
            Build a living digital model of{" "}
            <span 
              className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              your operations
            </span>
          </h2>
          <p
            className="text-[#cacbeb] text-center font-sans text-[14px] font-normal relative self-stretch opacity-90 leading-relaxed"
            style={{
              letterSpacing: "-0.27px",
            }}
          >
            Move beyond dashboards and static reports. Engineer a Digital Twin that connects infrastructure, enterprise systems, IoT, AI, and operational intelligence.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full z-10 relative font-mono">
          <button
            onClick={() => handleNavigate("Book a Digital Twin Workshop")}
            className="btn-premium-glow rounded py-4 px-6 flex flex-row gap-2.5 items-center justify-center w-full transition-all duration-300 cursor-pointer active:scale-95 group border-none"
          >
            <span
              className="text-[#070784] text-center font-sans text-base leading-6 font-semibold relative"
              style={{
                letterSpacing: "-0.31px",
              }}
            >
              Book a Digital Twin Workshop
            </span>
            <img
              className="shrink-0 w-5 h-5 relative overflow-visible transition-transform group-hover:translate-x-1"
              src="/SimulationDigitalTwinSystems/cta_conversation_arrow.svg"
              alt="arrow"
            />
          </button>

          <button
            onClick={() => handleNavigate("Talk to Our Specialists")}
            className="border border-white/20 text-white font-semibold rounded py-4 px-6 flex flex-row gap-3 items-center justify-center w-full transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
          >
            <span className="font-sans text-base leading-6">
              Talk to Our Specialists
            </span>
            <img
              className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              src="/SimulationDigitalTwinSystems/hero_icon_3.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimulationDigitalTwinCTA;
