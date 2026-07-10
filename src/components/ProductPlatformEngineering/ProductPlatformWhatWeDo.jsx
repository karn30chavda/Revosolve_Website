import React from "react";
import { motion as Motion } from "framer-motion";
import { Sparkle, Devices, SquaresFour, Stack, HardDrives } from "@phosphor-icons/react";

const ProductPlatformWhatWeDo = () => {
  return (
    <section id="do" className="relative w-full bg-[#01031c] py-16 lg:py-24 overflow-hidden font-sans scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ppeLayer {
          0% { opacity: 0; transform: translateY(10px); }
          24% { opacity: 1; transform: translateY(0); }
          86% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-ppe-layer {
          animation: ppeLayer 4.4s ease-in-out infinite;
        }
      `}} />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen bg-repeat"
        style={{
          backgroundImage: "url(/ProductPlatformEngineering/card_bg_pattern.svg)",
          backgroundSize: "180px",
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
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
              Engineering products
            </span>{" "}
            <span className="font-thin text-[#CACBDB] opacity-90 block sm:inline">
              beyond initial launch
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: Platform Layers Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div 
              className="border border-[#877bf1]/25 rounded-[22px] p-5 sm:p-6 xl:p-8 w-full bg-[#0d0f30]/75 shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_40px_rgba(135,123,241,0.05)] relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div 
                className="mb-6 flex justify-between items-center w-full select-none font-mono text-[10.5px] tracking-widest text-[#5c5f85] uppercase"
              >
                <span>platform_layers</span>
                <span className="flex items-center gap-1.5 text-[#FCCA71] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse" />
                  evolving
                </span>
              </div>

              {/* Platform Layers List */}
              <div className="flex flex-col gap-2.5 w-full my-auto py-2">
                
                {/* Next Capability (Animated) */}
                <div 
                  className="flex items-center gap-3.5 py-2 px-3.5 bg-transparent rounded-sm animate-ppe-layer border border-dashed border-[#877bf1]/45"
                >
                  <Sparkle size={20} className="shrink-0 text-[#FCCA71]" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-[#FCCA71]">
                    Next capability
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#5c5f85]">
                    shipping…
                  </span>
                </div>

                {/* Experience */}
                <div 
                  className="flex items-center gap-3.5 p-3.5 rounded-sm border border-[#877bf1]/25 bg-[#877bf1]/6"
                >
                  <Devices size={20} className="shrink-0 text-[#A9A0F5]" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-[#e7e8f4]">
                    Experience
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#5c5f85]">
                    web · mobile · portals
                  </span>
                </div>

                {/* Applications */}
                <div 
                  className="flex items-center gap-3.5 p-3.5 rounded-sm border border-[#877bf1]/25 bg-[#877bf1]/6"
                >
                  <SquaresFour size={20} className="shrink-0 text-[#A9A0F5]" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-[#e7e8f4]">
                    Applications
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#5c5f85]">
                    products · workflows
                  </span>
                </div>

                {/* Platform Core */}
                <div 
                  className="flex items-center gap-3.5 p-4 rounded-sm border border-[#877bf1] bg-[#877bf1]/14"
                >
                  <Stack size={22} color="#fff" className="shrink-0" />
                  <span className="font-semibold text-[15px] text-white">
                    Platform Core
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#a9a0f5]">
                    multi-tenant · api-first
                  </span>
                </div>

                {/* Infrastructure */}
                <div 
                  className="flex items-center gap-3.5 p-3.5 rounded-sm border border-[#877bf1]/25"
                >
                  <HardDrives size={20} className="shrink-0 text-[#A9A0F5]" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-[#e7e8f4]">
                    Infrastructure
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#5c5f85]">
                    cloud · containers
                  </span>
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
              Launching software is only the beginning. The real challenge is building products that keep evolving as customer expectations, business models, and operational complexity grow.
            </p>
            
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              Whether you are building a SaaS platform, modernizing an application, launching a customer portal, or creating an internal platform, we engineer for long-term success — not short-term completion.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductPlatformWhatWeDo;
