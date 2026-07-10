import React from "react";
import { motion as Motion } from "framer-motion";
import { 
  Cloud, 
  Buildings, 
  DoorOpen, 
  Handshake, 
  SquaresFour, 
  PlugsConnected, 
  Stack, 
  Recycle,
  FlowArrow,
  UsersThree,
  ShieldCheck
} from "@phosphor-icons/react";

const FlowDot = ({ w = 26, delay = 0 }) => (
  <div style={{ width: w }} className="relative h-px bg-[#877bf1]/25 shrink-0">
    <span 
      style={{ 
        animationDelay: `${delay}s` 
      }} 
      className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-[ppeFlowX_2s_linear_infinite]"
    />
  </div>
);

const engineerRest = [
  { icon: DoorOpen, t: "Customer Portals", d: "Digital experiences that improve engagement, self-service, and customer interactions." },
  { icon: Handshake, t: "Partner & Vendor Platforms", d: "Connect suppliers, distributors, vendors, and ecosystem partners through secure workflows." },
  { icon: SquaresFour, t: "Internal Operational Platforms", d: "Custom systems for project management, finance, procurement, HR, compliance, and operations." },
  { icon: PlugsConnected, t: "API Platforms", d: "Scalable integration layers enabling secure communication between systems and third-party apps." },
  { icon: Stack, t: "Multi-Tenant Architecture", d: "Architecture designed for SaaS businesses serving multiple customers from a unified platform." },
  { icon: Recycle, t: "Platform Modernization", d: "Re-engineer legacy products using modern cloud-native architectures without disrupting continuity." },
];

const ProductPlatformWhatWeEngineer = () => {
  return (
    <section id="engineer" className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden z-20 scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ppeFlowX {
          0% { left: -12%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 112%; opacity: 0; }
        }
      `}} />

      {/* Decorative Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-6 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-2">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [what we engineer]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">Platforms designed </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                  for growth
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm md:text-base font-normal leading-relaxed opacity-70 text-left">
              We engineer technology platforms that become the operational backbone of modern organizations.
            </p>
          </div>
        </div>

        {/* Feature Row - Two Big Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          {/* SaaS Platforms Card */}
          <Motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.012,
              backgroundColor: "rgba(38, 40, 66, 1)",
              borderColor: "rgba(135, 123, 241, 0.7)"
            }}
            className="flex justify-start items-start p-8 min-h-[180px] w-full bg-[#1d1e32] border border-[#877bf1]/45 rounded-[12px] cursor-pointer transition-all duration-300 relative group overflow-hidden gap-4.5"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] pointer-events-none z-0" />

            {/* Pattern */}
            <img 
              src="/ProductPlatformEngineering/build_bg_pattern.svg" 
              alt="" 
              className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
            />

            {/* Left side: Icon */}
            <div className="shrink-0 text-[#FCCA71] relative z-10">
              <Cloud size={28} />
            </div>

            {/* Right side content */}
            <div className="flex flex-col text-left relative z-10 flex-1 h-full justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-white text-[22px] font-bold font-sans">SaaS Platforms</h3>
                  <span className="flex items-center gap-1 font-mono text-[10px] tracking-widest text-[#FCCA71] uppercase">
                    ● flagship
                  </span>
                </div>
                <p className="text-[#CACBDB] text-[15px] leading-relaxed max-w-md">
                  Cloud-native, multi-tenant platforms designed for scalability, security, and continuous delivery.
                </p>
              </div>

              {/* Visual bottom interactive element */}
              <div className="flex items-center gap-2.5 flex-wrap w-full mt-auto pt-2">
                <div 
                  className="p-2 px-3 rounded-xs border border-[#FCCA71]/40 bg-transparent font-mono text-[10px] tracking-wider uppercase text-white"
                >
                  Core
                </div>
                <FlowDot w={20} />
                {["Tenant A", "Tenant B", "Tenant C"].map((t) => (
                  <div 
                    key={t} 
                    className="p-2 px-3 rounded-xs bg-[#0F1034]/30 border border-[#877bf1]/25 font-mono text-[10px] tracking-wider uppercase text-[#E7E8F4]"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Enterprise Platforms Card */}
          <Motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              scale: 1.012,
              backgroundColor: "rgba(38, 40, 66, 1)",
              borderColor: "rgba(135, 123, 241, 0.7)"
            }}
            className="flex justify-start items-start p-8 min-h-[180px] w-full bg-[#1d1e32] border border-[#877bf1]/25 rounded-[12px] cursor-pointer transition-all duration-300 relative group overflow-hidden gap-4.5"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] pointer-events-none z-0" />

            {/* Pattern */}
            <img 
              src="/ProductPlatformEngineering/build_bg_pattern.svg" 
              alt="" 
              className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
            />

            {/* Left side: Icon */}
            <div className="shrink-0 text-[#FCCA71] relative z-10">
              <Buildings size={28} />
            </div>

            {/* Right side content */}
            <div className="flex flex-col text-left relative z-10 flex-1 h-full justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[22px] font-bold font-sans">Enterprise Platforms</h3>
                <p className="text-[#CACBDB] text-[15px] leading-relaxed max-w-md">
                  Business-critical systems supporting internal operations, collaboration, and workflow automation.
                </p>
              </div>

              {/* Visual bottom interactive element */}
              <div 
                className="flex gap-4.5 flex-wrap w-full mt-auto pt-2 font-mono text-[10px] tracking-wider uppercase text-[#5C5F85]"
              >
                <span className="flex items-center gap-1.5 text-[#CACBDB]">
                  <FlowArrow size={16} color="#FCCA71" />
                  Workflows
                </span>
                <span className="flex items-center gap-1.5 text-[#CACBDB]">
                  <UsersThree size={16} color="#FCCA71" />
                  Collaboration
                </span>
                <span className="flex items-center gap-1.5 text-[#CACBDB]">
                  <ShieldCheck size={16} color="#FCCA71" />
                  Governance
                </span>
              </div>
            </div>
          </Motion.div>

        </div>

        {/* Bottom Grid: 6 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {engineerRest.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(135, 123, 241, 0.7)"
              }}
              className="flex justify-start items-start p-6 w-full bg-[#1d1e32] border border-[#877bf1]/25 rounded-[12px] cursor-pointer transition-all duration-300 relative group overflow-hidden gap-4.5"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="shrink-0 text-[#FCCA71] relative z-10">
                <item.icon size={28} />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-2 text-left relative z-10 flex-1">
                <h4 className="text-white text-[16.5px] font-semibold font-sans leading-snug">
                  {item.t}
                </h4>
                <p className="text-[#8F92B8] text-[13.5px] font-sans font-normal leading-relaxed group-hover:text-[#CACBDB] transition-colors duration-300">
                  {item.d}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPlatformWhatWeEngineer;
