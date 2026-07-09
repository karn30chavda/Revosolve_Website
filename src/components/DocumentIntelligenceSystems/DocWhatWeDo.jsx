import React from "react";
import { motion as Motion } from "framer-motion";
import { 
  TrayArrowDown, Scan, Tag, CheckSquare, UserCheck, Stamp, Cube, Archive, ArrowRight, PuzzlePiece, Scales 
} from "@phosphor-icons/react";

const journey = [
  [TrayArrowDown, "Receive"],
  [Scan, "OCR"],
  [Tag, "Classify"],
  [CheckSquare, "Validate"],
  [UserCheck, "Review"],
  [Stamp, "Approve"],
  [Cube, "ERP"],
  [Archive, "Archive"],
];

const DocWhatWeDo = () => {
  return (
    <section id="solutions-content" className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rdxNodeStep { 
          0%, 100% { 
            background: rgba(135,123,241,0.08); 
            border-color: rgba(135,123,241,0.35); 
          } 
          50% { 
            background: rgba(135,123,241,0.24); 
            border-color: #877BF1; 
          } 
        }
      `}} />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: "url(/DocumentIntelligenceSystems/challenge_pattern.svg)",
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
            [what is revodox]
          </span>
          
          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left font-black">
            <span className="text-[#877BF1]">More than OCR — </span>
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">an enterprise </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              document intelligence platform
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: Journey Flowchart Card */}
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
                borderColor: "rgba(135, 123, 241, 0.2)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(135, 123, 241, 0.05)"
              }}
              className="border rounded-[22px] p-5 sm:p-6 xl:p-8 w-full relative overflow-hidden group flex flex-col justify-between gap-8"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[#E7E6FC]/70 uppercase mb-5 flex justify-between items-center w-full">
                <span>document_journey</span>
                <span className="flex items-center gap-1.5 text-[#A9A0F5] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9A0F5] animate-pulse shadow-[0_0_8px_#A9A0F5]" />
                  orchestrating
                </span>
              </div>

              {/* Journey Nodes Grid/Flex */}
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center my-auto py-2">
                {journey.map(([Icon, label], i) => (
                  <React.Fragment key={label}>
                    {i > 0 && <ArrowRight size={13} className="text-[#5C5F85]" />}
                    <div
                      className="flex items-center gap-2 border border-[rgba(135,123,241,0.35)] px-3 py-2 sm:px-3.5 sm:py-2.5 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-white shadow-[0_0_15px_rgba(135,123,241,0.05)]"
                      style={{
                        animation: "rdxNodeStep 6s ease-in-out infinite",
                        animationDelay: `${i * 0.7}s`,
                      }}
                    >
                      <Icon size={14} className="text-[#A9A0F5]" />
                      <span>{label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom Badges */}
              <div className="flex justify-between mt-5 pt-3.5 border-t border-[rgba(135,123,241,0.18)] w-full flex-wrap gap-y-2">
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <PuzzlePiece size={15} className="text-[#877BF1]" />
                  <span>No-code builder</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <UserCheck size={15} className="text-[#877BF1]" />
                  <span>Human-in-the-loop</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-1.5">
                  <Scales size={15} className="text-[#877BF1]" />
                  <span>Audit trail</span>
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
              Traditional OCR extracts text. RevoDox understands documents.
            </p>
            
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              It identifies document types, extracts structured information, validates business rules, triggers workflows, routes approvals, integrates with enterprise systems, and provides complete operational visibility — from document receipt to final decision.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default DocWhatWeDo;
