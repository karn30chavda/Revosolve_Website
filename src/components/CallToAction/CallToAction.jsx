import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-transparent py-20 px-4 md:px-20 flex flex-col items-center justify-start relative w-full overflow-hidden">
      <div 
        className="w-full md:w-7xl max-w-full rounded-lg py-16 px-4 md:px-76 flex flex-col gap-8 items-center justify-end relative overflow-hidden"
        style={{
          background: "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
        }}
      >
        {/* Background Pattern */}
        <img
          className="absolute pointer-events-none select-none opacity-[0.3] object-contain overflow-visible"
          style={{
            width: "40.29156rem",
            height: "19.6875rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src="/home_section_7/bg_pattern.svg"
          alt=""
        />

        {/* Content Group */}
        <div className="flex flex-col gap-2 items-center justify-start shrink-0 relative z-10 text-center">
          <h2
            className="text-white text-center font-sans text-[2.125rem] font-black relative md:w-236 max-w-full leading-normal"
            style={{ 
                letterSpacing: "0.0165rem",
                fontFamily: "'Blauer Nue'"
            }}
          >
            Work with us to design and deploy technology systems that power
            governance, financial operations, and enterprise intelligence
          </h2>
          <p
            className="text-[#CACBEB] text-center font-sans text-[1.25rem] leading-12 font-normal relative"
            style={{ 
                letterSpacing: "-0.017rem",
                fontFamily: "'Blauer Nue'"
            }}
          >
            Partner with Revosolve to build scalable and intelligent digital solutions.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="bg-[#FFAA00] rounded-sm py-4 px-8 flex flex-row gap-2 items-center justify-start shrink-0 relative overflow-hidden group hover:bg-[#ffb732] transition-colors duration-300 z-10 cursor-pointer"
        >
          <span
            className="text-[#070784] text-center font-sans text-[1rem] leading-6 font-medium relative"
            style={{ 
                letterSpacing: "-0.0195rem",
                fontFamily: "'Blauer Nue'"
            }}
          >
            Start a Conversation
          </span>
          {/* Arrow Icon */}
          <img 
            src="/home_section_7/conversation_arrow.svg"
            className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300 "
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
