import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FileText,
  GitBranch,
  Brain,
  ChatCircleText,
  ShieldCheck,
  Scales,
  TestTube
} from "@phosphor-icons/react";

const GenAIWhatWeDo = () => {
  return (
    <section id="genai-what-we-do" className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes revoFlowX {
          0% {
            left: 0%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(135, 123, 241, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px 4px rgba(135, 123, 241, 0.25);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-revo-flow {
          animation: revoFlowX 2.2s linear infinite;
        }

        .animate-breathe {
          animation: breathe 3.4s ease-in-out infinite;
        }

        .animate-pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
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
          <span className="text-white/30 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-4 select-none">
            [what we do]
          </span>
          
          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">Engineering </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">AI systems </span>
            <span className="font-thin text-[#E7E6FC] opacity-70 block sm:inline">
              that deliver operational value
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: RAG Pipeline Animation Card */}
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
              className="border rounded-[22px] p-6 sm:p-8 xl:p-10 w-full relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[#E7E6FC]/40 uppercase mb-8 flex justify-between items-center w-full">
                <span>rag_pipeline</span>
                <span className="flex items-center gap-1.5 text-[#FCCA71]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse-dot" />
                  grounded
                </span>
              </div>

              {/* RAG Pipeline Flow Nodes & Connectors */}
              <div className="flex items-center justify-between gap-1 sm:gap-2 w-full my-auto py-2">
                
                {/* Node 1: Documents */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#877BF1]/30 flex items-center justify-center text-[#877BF1] bg-[#877BF1]/5 hover:bg-[#877BF1]/10 hover:border-[#877BF1]/50 transition-all duration-300">
                    <FileText size={22} className="sm:hidden" weight="light" />
                    <FileText size={26} className="hidden sm:block" weight="light" />
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9.5px] tracking-tight sm:tracking-widest text-[#CACBDB]/60 uppercase mt-3 text-center">
                    Documents
                  </div>
                </div>

                {/* Line 1 */}
                <div className="relative flex-1 h-[1.5px] bg-[#877BF1]/20">
                  <span className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-revo-flow" />
                </div>

                {/* Node 2: Embeddings */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#877BF1]/30 flex items-center justify-center text-[#877BF1] bg-[#877BF1]/5 hover:bg-[#877BF1]/10 hover:border-[#877BF1]/50 transition-all duration-300">
                    <GitBranch size={22} className="sm:hidden" weight="light" />
                    <GitBranch size={26} className="hidden sm:block" weight="light" />
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9.5px] tracking-tight sm:tracking-widest text-[#CACBDB]/60 uppercase mt-3 text-center">
                    Embeddings
                  </div>
                </div>

                {/* Line 2 */}
                <div className="relative flex-1 h-[1.5px] bg-[#877BF1]/20">
                  <span className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-revo-flow [animation-delay:0.55s]" />
                </div>

                {/* Node 3: LLM Reasoning (Central Highlighted Node) */}
                <div className="flex flex-col items-center flex-1 z-10">
                  <div className="w-13 h-13 sm:w-[66px] sm:h-[66px] rounded-full border-2 border-[#877BF1] flex items-center justify-center text-white bg-[#877BF1]/15 shadow-[0_0_15px_rgba(135,123,241,0.2)] animate-breathe cursor-pointer">
                    <Brain size={26} className="sm:hidden" weight="light" />
                    <Brain size={30} className="hidden sm:block" weight="light" />
                  </div>
                  <div className="font-mono text-[8.5px] sm:text-[10px] tracking-tight sm:tracking-[0.15em] text-[#877BF1] font-bold uppercase mt-2.5 text-center">
                    Reasoning
                  </div>
                </div>

                {/* Line 3 */}
                <div className="relative flex-1 h-[1.5px] bg-[#877BF1]/20">
                  <span className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-revo-flow [animation-delay:1.1s]" />
                </div>

                {/* Node 4: Grounded Answer */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#877BF1]/30 flex items-center justify-center text-[#877BF1] bg-[#877BF1]/5 hover:bg-[#877BF1]/10 hover:border-[#877BF1]/50 transition-all duration-300">
                    <ChatCircleText size={22} className="sm:hidden" weight="light" />
                    <ChatCircleText size={26} className="hidden sm:block" weight="light" />
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9.5px] tracking-tight sm:tracking-widest text-[#CACBDB]/60 uppercase mt-3 text-center">
                    Answer
                  </div>
                </div>

              </div>

              {/* Bottom Badges */}
              <div className="flex justify-center gap-2 mt-8 flex-wrap w-full">
                <span className="border border-[#877BF1]/15 rounded-full px-3.5 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.08em] uppercase text-[#CACBDB]/70 flex items-center gap-1.5 hover:border-[#877BF1]/40 hover:text-white transition-all duration-300 cursor-pointer">
                  <ShieldCheck size={14} className="text-[#877BF1]" />
                  Guardrails
                </span>
                <span className="border border-[#877BF1]/15 rounded-full px-3.5 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.08em] uppercase text-[#CACBDB]/70 flex items-center gap-1.5 hover:border-[#877BF1]/40 hover:text-white transition-all duration-300 cursor-pointer">
                  <Scales size={14} className="text-[#877BF1]" />
                  Governance
                </span>
                <span className="border border-[#877BF1]/15 rounded-full px-3.5 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.08em] uppercase text-[#CACBDB]/70 flex items-center gap-1.5 hover:border-[#877BF1]/40 hover:text-white transition-all duration-300 cursor-pointer">
                  <TestTube size={14} className="text-[#877BF1]" />
                  Evaluation
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
              Many AI initiatives fail because they remain isolated proof-of-concepts. We help organizations move beyond experimentation by engineering AI that integrates with enterprise applications, workflows, and decision-making ecosystems.
            </p>
            
            <p className="text-[#E7E6FC]/70 text-sm md:text-base leading-relaxed font-sans opacity-90">
              Our focus is not simply implementing models — it is engineering intelligent systems that create measurable business outcomes and support long-term growth.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default GenAIWhatWeDo;
