import React from "react";
import { motion as Motion } from "framer-motion";
import { Check, ArrowsClockwise, Clock, ArrowUUpLeft, Flask, Pulse } from "@phosphor-icons/react";

const LegacyTransformationWhatWeDo = () => {
  return (
    <section
      id="legacy-what-we-do"
      className="relative w-full py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20"
    >
      <style>{`
        @keyframes lmmTileConvert {
          0%, 38% {
            background: rgba(252, 202, 113, 0.08);
            border-color: rgba(252, 202, 113, 0.3);
            color: #FCCA71;
          }
          62%, 100% {
            background: rgba(135, 123, 241, 0.12);
            border-color: #877BF1;
            color: #A9A0F5;
          }
        }
      `}</style>

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-10 lg:gap-14">

        {/* Header Block */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full"
        >
          <span className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-3 select-none font-mono">
            [what we do]
          </span>
          <h2 className="text-2xl sm:text-[32px] xl:text-[38px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">Engineering the </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              next generation{" "}
            </span>
            <span className="font-thin text-[#E7E6FC]/90 block sm:inline">
              of enterprise systems
            </span>
          </h2>
        </Motion.div>

        {/* Content columns */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-10 lg:gap-14 relative">

          {/* Left Column: Incremental Modernization Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div className="border border-white/10 rounded-md p-5 sm:p-6 w-full relative overflow-hidden flex flex-col justify-between bg-[#0a0b28]/75 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Card Header */}
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/60 uppercase mb-5 flex justify-between items-center w-full">
                <span>incremental_modernization</span>
                <span className="flex items-center gap-1.5 text-[#A9A0F5] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse shadow-[0_0_8px_#877BF1]" />
                  phase 3 of 5
                </span>
              </div>

              {/* Progress Grid */}
              <div className="grid grid-cols-5 gap-2 sm:gap-2.5 my-auto py-4">
                {[
                  { label: "Auth",    status: "done" },
                  { label: "Portal",  status: "done" },
                  { label: "Orders",  status: "converting" },
                  { label: "Billing", status: "pending" },
                  { label: "Reports", status: "pending" },
                ].map(({ label, status }) => {
                  const isDone       = status === "done";
                  const isConverting = status === "converting";

                  return (
                    <div
                      key={label}
                      style={
                        isDone
                          ? { border: "1px solid #877BF1", background: "rgba(135,123,241,0.12)", color: "#A9A0F5" }
                          : isConverting
                            ? { animation: "lmmTileConvert 4s ease-in-out infinite alternate" }
                            : { border: "1px solid rgba(252,202,113,0.25)", background: "rgba(252,202,113,0.06)", color: "#FCCA71" }
                      }
                      className="py-3 px-1 rounded-sm flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 min-h-[90px] border"
                    >
                      {isDone ? (
                        <Check size={18} className="text-[#877BF1]" />
                      ) : isConverting ? (
                        <ArrowsClockwise size={18} />
                      ) : (
                        <Clock size={18} className="opacity-60" />
                      )}
                      <span className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-white">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Legend & Footer */}
              <div>
                <div className="flex gap-4 mt-2 mb-4 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase">
                  <span className="flex items-center gap-1.5 text-[#A9A0F5] font-semibold">
                    <span className="w-2 h-2 border border-[#877BF1] rounded-xs" />
                    Modernized
                  </span>
                  <span className="flex items-center gap-1.5 text-[#FCCA71] font-semibold">
                    <span className="w-2 h-2 border border-white/20 rounded-xs" />
                    Scheduled
                  </span>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between font-mono text-[9px] sm:text-[10px] text-white/50 tracking-wider uppercase font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ArrowUUpLeft size={13} className="text-[#877BF1]" />
                    Rollback ready
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flask size={13} className="text-[#877BF1]" />
                    Parallel run
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Pulse size={13} className="text-[#877BF1]" />
                    Monitored
                  </span>
                </div>
              </div>

            </div>
          </Motion.div>

          {/* Right Column: Description */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center items-start text-left gap-5 relative z-10"
          >
            <p className="text-white text-base md:text-lg xl:text-[19px] font-medium leading-relaxed font-sans">
              Every organization reaches a point where existing technology begins limiting innovation — expensive to maintain, difficult to integrate, challenging to secure.
            </p>

            <p className="text-[#8F92B8] text-[14px] md:text-[15.5px] leading-relaxed font-sans">
              Rather than replacing systems overnight, we engineer controlled modernization strategies that reduce risk, preserve business continuity, and enable long-term digital growth — migrating workloads, re-engineering applications, modernizing databases, and redesigning architecture with minimal disruption.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default LegacyTransformationWhatWeDo;
