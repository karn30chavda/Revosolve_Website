import React from "react";
import { motion as Motion } from "framer-motion";
import {
  UsersThree,
  FlowArrow,
  Database,
  Stack,
  Cube,
  AddressBook,
  BracketsCurly,
} from "@phosphor-icons/react";

const EcoChip = ({ icon, label, tint }) => {
  const Icon = icon;
  return (
    <div
      className={`flex-1 text-center border border-white/10 py-2 px-1.5 font-mono text-[10px] sm:text-[10.5px] tracking-wider uppercase flex flex-col items-center gap-1.5 transition-all duration-300 rounded-sm ${
        tint ? "bg-white/5" : "bg-transparent hover:bg-white/5"
      }`}
    >
      <Icon size={19} className="text-[#FCCA71] transition-transform duration-300 hover:scale-110" />
      <span className="font-bold text-white">{label}</span>
    </div>
  );
};

const EnterpriseWhatWeDo = () => {
  return (
    <section
      id="enterprise-what-we-do"
      className="relative w-full py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20"
    >
      <style>{`
        @keyframes rseFlowY {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

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
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">Enterprise Systems </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              that drive operational excellence
            </span>
          </h2>
        </Motion.div>

        {/* Content columns */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: Architecture Illustration Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div className="border border-white/10 rounded-md p-4 sm:p-5 xl:p-6 w-full relative overflow-hidden group flex flex-col justify-between bg-[#0a0b28]/75 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/70 uppercase mb-4 flex justify-between items-center w-full">
                <span>operational_ecosystem.map</span>
                <span className="flex items-center gap-1.5 text-[#FCCA71] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse shadow-[0_0_8px_#FCCA71]" />
                  flowing
                </span>
              </div>

              {/* Ecosystem Map Visualization */}
              <div className="flex flex-col w-full my-auto py-1">
                {/* Top row: People, Process, Data */}
                <div className="flex gap-3 justify-center">
                  <EcoChip icon={UsersThree} label="People" tint={true} />
                  <EcoChip icon={FlowArrow} label="Process" tint={true} />
                  <EcoChip icon={Database} label="Data" tint={true} />
                </div>

                {/* Connecting line with dot */}
                <div className="relative h-6 flex justify-center">
                  <div className="relative w-[1.5px] bg-white/10 h-full">
                    <span
                      style={{ animation: "rseFlowY 2.2s linear infinite" }}
                      className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71]"
                    />
                  </div>
                </div>

                {/* Central Node: Enterprise Applications */}
                <div className="text-center border border-white/10 py-3.5 px-4 bg-white/5 font-bold text-[14.5px] sm:text-base text-white flex flex-col items-center gap-1.5 rounded-sm shadow-md transition-all duration-300 hover:bg-white/10">
                  <Stack size={22} className="text-[#FCCA71]" />
                  <span className="tracking-wide text-white font-extrabold">Enterprise Applications</span>
                  <div className="font-mono text-[9px] sm:text-[9.5px] tracking-wider text-[#FCCA71] uppercase mt-0.5 font-bold">
                    unified operational core
                  </div>
                </div>

                {/* Connecting line with dot */}
                <div className="relative h-6 flex justify-center">
                  <div className="relative w-[1.5px] bg-white/10 h-full">
                    <span
                      style={{ animation: "rseFlowY 2.2s linear infinite", animationDelay: "1.1s" }}
                      className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71]"
                    />
                  </div>
                </div>

                {/* Bottom row: ERP, CRM, APIs */}
                <div className="flex gap-3 justify-center">
                  <EcoChip icon={Cube} label="ERP" tint={false} />
                  <EcoChip icon={AddressBook} label="CRM" tint={false} />
                  <EcoChip icon={BracketsCurly} label="APIs" tint={false} />
                </div>
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
              As businesses grow, applications become fragmented, workflows disconnect, and operational complexity increases. We engineer applications that simplify operations, improve visibility, and enable organizations to run on integrated, scalable, future-ready systems.
            </p>
            
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              Whether building a new application, modernizing legacy software, or integrating enterprise platforms, our approach aligns with real operational workflows — not just technical requirements.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnterpriseWhatWeDo;
