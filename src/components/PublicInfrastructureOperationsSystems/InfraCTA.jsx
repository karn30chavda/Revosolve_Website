import React from "react";
import { useNavigate } from "react-router-dom";

const InfraCTA = () => {
  const navigate = useNavigate();

  const handleNavigate = (actionText) => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Public Infrastructure Operations",
        notes: actionText ? `Interested in: ${actionText}` : "",
      },
    });
  };

  return (
    <section
      id="cta"
      className="bg-transparent pt-4 pb-12 md:py-16 flex flex-col items-center justify-start relative w-full overflow-hidden font-sans z-20"
    >
      <div
        className="w-[90%] lg:w-[85%] max-w-310 mx-auto rounded-xl py-12 md:py-14 px-6 md:px-12 flex flex-col gap-6 items-center justify-center relative overflow-hidden drop-shadow-2xl text-center"
        style={{
          background:
            "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
        }}
      >
        {/* Background Pattern */}
        <img
          className="absolute pointer-events-none select-none opacity-90 object-contain overflow-visible mix-blend-screen w-160 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/PublicInfrastructureOperationsSystems/cta_bg_pattern.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* Content Group */}
        <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative z-10 text-center max-w-4xl">
         
          <h2 className="text-white text-center font-sans text-2xl sm:text-3xl md:text-4xl font-black relative leading-tight m-0">
            Transform your public infrastructure operations into{" "}
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
              one connected system
            </span>
          </h2>

          <p className="text-[#CACBEB] text-center font-sans text-sm md:text-[17px] leading-relaxed font-normal relative mt-1 max-w-3xl m-0">
            Connect tenders, field operations, site execution, assets, and finance into a single unified operational core engineered for enterprise scale.
          </p>
        </div>

        {/* Button Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center z-10 relative mt-3 font-mono w-full sm:w-auto">
          <button
            onClick={() =>
              handleNavigate("Book an Operational Systems Discovery Workshop")
            }
            className="btn-premium-glow rounded-sm py-3.5 md:py-4 px-6 md:px-8 flex flex-row gap-2.5 items-center justify-center w-full sm:w-auto shrink-0 relative group transition-all duration-300 cursor-pointer active:scale-95 border-none"
          >
            <span className="text-[#070784] text-center font-sans text-sm md:text-base leading-6 font-semibold relative">
              Book a Discovery Workshop
            </span>
            <img
              src="/PublicInfrastructureOperationsSystems/cta_conversation_arrow.svg"
              className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
              alt=""
            />
          </button>

          <button
            onClick={() => handleNavigate("Talk to Our Specialists")}
            className="border border-white/20 hover:border-white/40 text-white font-semibold rounded-sm py-3.5 md:py-4 px-6 md:px-8 flex flex-row gap-3 items-center justify-center w-full sm:w-auto transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
          >
            <span className="font-sans text-sm md:text-base leading-6 tracking-tight">
              Talk to Our Specialists
            </span>
            <img
              className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              src="/PublicInfrastructureOperationsSystems/hero_icon_3.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfraCTA;
