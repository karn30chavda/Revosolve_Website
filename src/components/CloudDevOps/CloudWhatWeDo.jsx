import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowsSplit, ShieldCheck, ArrowsClockwise, Pulse } from "@phosphor-icons/react";

const Zone = ({ label, d1, d2 }) => (
  <div className="border border-[rgba(252,202,113,0.2)] p-2 sm:p-2.5 text-center bg-[#0A0B28]/60">
    <div className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#CACBDB] uppercase mb-1.5 select-none">
      {label}
    </div>
    <div className="flex justify-center gap-2">
      <span 
        className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#FCCA71]/20 border border-[#FCCA71]/60 animate-cid-pulse" 
        style={{ animationDelay: `${d1}s` }} 
      />
      <span 
        className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#FCCA71]/20 border border-[#FCCA71]/60 animate-cid-pulse" 
        style={{ animationDelay: `${d2}s` }} 
      />
    </div>
  </div>
);

const CloudWhatWeDo = () => {
  return (
    <section id="cloud-what-we-do" className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowStem {
          0% {
            top: 0%;
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          18% {
            opacity: 1;
          }
          20% {
            top: 100%;
            opacity: 0;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes flowLeft {
          0%, 20% {
            left: 50%;
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          43% {
            opacity: 1;
          }
          45% {
            left: 0%;
            opacity: 0;
          }
          100% {
            left: 0%;
            opacity: 0;
          }
        }
        @keyframes flowRight {
          0%, 20% {
            left: 50%;
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          43% {
            opacity: 1;
          }
          45% {
            left: 100%;
            opacity: 0;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        @keyframes flowVertB {
          0%, 20% {
            top: 0%;
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          80% {
            top: 100%;
            opacity: 0;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes flowVertAC {
          0%, 45% {
            top: 0%;
            opacity: 0;
          }
          47% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          80% {
            top: 100%;
            opacity: 0;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes cidPulse {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-flow-stem {
          animation: flowStem 4s linear infinite;
        }
        .animate-flow-left {
          animation: flowLeft 4s linear infinite;
        }
        .animate-flow-right {
          animation: flowRight 4s linear infinite;
        }
        .animate-flow-vert-b {
          animation: flowVertB 4s linear infinite;
        }
        .animate-flow-vert-ac {
          animation: flowVertAC 4s linear infinite;
        }
        .animate-cid-pulse {
          animation: cidPulse 3.5s ease-in-out infinite;
        }
      `}} />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: "url(/home_section_6/bg_pattern.svg)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header Block at the top left */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full"
        >
          <span className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-4 select-none">
            [what we do]
          </span>
          
          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">Engineering </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">Cloud Platforms </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              that enable business growth
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: HA Topology Animation Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div 
              style={{ 
                backgroundColor: "rgba(13, 15, 48, 0.75)",
                borderColor: "rgba(252, 202, 113, 0.2)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(252, 202, 113, 0.05)"
              }}
              className="border rounded-[22px] p-5 sm:p-6 xl:p-8 w-full relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#FCCA71]/30 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[#E7E6FC]/70 uppercase mb-5 flex justify-between items-center w-full">
                <span>ha_topology.map</span>
                <span className="flex items-center gap-1.5 text-[#39ff14] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]" />
                  healthy
                </span>
              </div>

              {/* Topology Map Visualization */}
              <div className="flex flex-col w-full my-auto py-2">
                {/* Load Balancer Node */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2.5 border border-[#FCCA71] bg-[rgba(252,202,113,0.16)] px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-white shadow-[0_0_15px_rgba(252,202,113,0.1)] z-10">
                    <ArrowsSplit size={18} className="text-[#FCCA71]" />
                    <span>Load Balancer</span>
                  </div>
                </div>

                {/* Connection Lines Wrapper */}
                <div className="w-full relative flex flex-col items-center -mt-px">
                  {/* Stem under Load Balancer */}
                  <div className="w-[1.5px] h-3 bg-[#FCCA71]/20 relative">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-flow-stem" />
                  </div>

                  {/* Combined Horizontal & Vertical Grid */}
                  <div className="w-full relative -mt-px">
                    
                    {/* Horizontal distributor bar (connected exactly to column centers) */}
                    <div 
                      style={{ left: "calc(16.67% - 4px)", right: "calc(16.67% - 4px)" }}
                      className="absolute top-0 h-px bg-[#FCCA71]/20 z-0"
                    >
                      {/* Flowing dots along horizontal line */}
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-flow-left" />
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-flow-right" />
                    </div>

                    {/* Vertical Flow Lines */}
                    <div className="grid grid-cols-3 gap-3 w-full h-8 relative z-10">
                      {[
                        { animateClass: "animate-flow-vert-ac" },
                        { animateClass: "animate-flow-vert-b" },
                        { animateClass: "animate-flow-vert-ac" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-center w-full h-full relative">
                          <div className="relative w-[1.5px] h-full bg-[#FCCA71]/20">
                            <span 
                              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] ${item.animateClass}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Zone Nodes */}
                <div className="grid grid-cols-3 gap-3 w-full -mt-px">
                  <Zone label="Zone A" d1={0} d2={0.3} />
                  <Zone label="Zone B" d1={0.5} d2={0.8} />
                  <Zone label="Zone C" d1={1} d2={1.3} />
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="flex justify-between mt-5 pt-3.5 border-t border-[rgba(252,202,113,0.18)] w-full flex-wrap gap-y-2">
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#FCCA71]" />
                  <span>Policy Enforced</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <ArrowsClockwise size={15} className="text-[#FCCA71]" />
                  <span>Auto-Scaling</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <Pulse size={15} className="text-[#FCCA71]" />
                  <span>Observability</span>
                </span>
              </div>

            </div>
          </Motion.div>

          {/* Right Column: Paragraph Description Blocks */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center items-start text-left gap-6 relative z-10"
          >
            <p className="text-white text-base md:text-lg xl:text-[20px] font-medium leading-relaxed font-sans">
              Cloud adoption is no longer simply about migration. Organizations need secure, scalable, automated environments that accelerate innovation, simplify operations, and improve business continuity.
            </p>
            
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              We combine cloud engineering, DevOps automation, infrastructure as code, observability, security, and continuous delivery – so you focus on business outcomes instead of infrastructure complexity.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default CloudWhatWeDo;
