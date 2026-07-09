import React from "react";
import { motion as Motion } from "framer-motion";
import {
  VideoCamera, Brain, BellRinging, FlowArrow, Lightning, PlugsConnected, Scales
} from "@phosphor-icons/react";

const PipeNode = ({ icon, label, hot }) => {
  const IconComponent = icon;
  return (
    <div className="text-center flex-1">
      <div className={`w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] mx-auto mb-2.5 border flex items-center justify-center rounded-sm transition-all duration-300 relative overflow-hidden ${hot ? "border-[#877BF1] bg-[#877BF1]/12 text-[#A9A0F5]" : "border-[#877BF1]/25 text-[#CACBDB] bg-transparent"}`}>
        {hot && (
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: "conic-gradient(from 0deg, transparent 0 84%, rgba(135,123,241,0.4) 92%, transparent 100%)",
              animation: "rvRadar 3s linear infinite"
            }}
          />
        )}
        <IconComponent size={hot ? 26 : 22} className="relative z-10 text-white" />
      </div>
      <div className={`font-mono text-[9px] sm:text-[10px] tracking-wider uppercase ${hot ? "text-[#A9A0F5] font-bold" : "text-[#8F92B8]"}`}>
        {label}
      </div>
    </div>
  );
};

const PipeFlow = ({ delay = 0 }) => (
  <div className="relative flex-1 h-[1.5px] bg-[#877BF1]/25">
    <span 
      className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#877BF1] shadow-[0_0_8px_#877BF1]" 
      style={{ 
        animation: "rvFlowX 2.4s linear infinite", 
        animationDelay: `${delay}s` 
      }} 
    />
  </div>
);

const SurveillanceWhatIs = () => {
  return (
    <section id="surveillance-what-is" className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rvFlowX {
          0% { left: -10%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 108%; opacity: 0; }
        }
        @keyframes rvRadar {
          to { transform: rotate(360deg); }
        }
      `}} />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header Block */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full"
        >
          <span className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-4 select-none">
            [What Is RevoVision]
          </span>
          
          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">More than </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">video analytics </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              — a real-time operational intelligence platform
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: Vision Pipeline Animation Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex animate-none"
          >
            <div 
              style={{ 
                backgroundColor: "rgba(13, 15, 48, 0.75)",
                borderColor: "rgba(135, 123, 241, 0.2)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(135, 123, 241, 0.05)"
              }}
              className="border rounded-[22px] p-5 sm:p-6 xl:p-8 w-full relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />
              
              {/* Card Header info */}
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[#E7E6FC]/70 uppercase mb-6 flex justify-between items-center w-full">
                <span>vision_pipeline.map</span>
                <span className="flex items-center gap-1.5 text-[#39ff14] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]" />
                  interpreting
                </span>
              </div>

              {/* Pipeline Nodes & Flows */}
              <div className="flex items-center justify-between gap-1 w-full my-auto py-6">
                <PipeNode icon={VideoCamera} label="Cameras" />
                <PipeFlow />
                <PipeNode icon={Brain} label="Vision AI" hot />
                <PipeFlow delay={0.6} />
                <PipeNode icon={BellRinging} label="Events" />
                <PipeFlow delay={1.2} />
                <PipeNode icon={FlowArrow} label="Workflows" />
              </div>

              {/* Bottom Badges */}
              <div className="flex justify-between mt-6 pt-4 border-t border-[rgba(135,123,241,0.18)] w-full flex-wrap gap-y-3">
                <span className="font-mono text-[10.5px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-2">
                  <Lightning size={15} className="text-[#877BF1]" />
                  <span>Real-Time</span>
                </span>
                <span className="font-mono text-[10.5px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-2">
                  <PlugsConnected size={15} className="text-[#877BF1]" />
                  <span>Enterprise Integrated</span>
                </span>
                <span className="font-mono text-[10.5px] tracking-wider uppercase text-[#CACBDB]/90 flex items-center gap-2">
                  <Scales size={15} className="text-[#877BF1]" />
                  <span>Audit-Ready</span>
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
            <p className="text-white text-base md:text-lg xl:text-[20px] font-semibold leading-relaxed font-sans">
              Traditional surveillance systems record events. RevoVision understands them.
            </p>
            
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans opacity-85">
              The platform continuously analyzes live video streams, identifies operational anomalies, detects predefined events, generates intelligent alerts, and integrates with enterprise workflows — allowing organizations to respond faster, improve safety, and optimize operations. Rather than replacing existing CCTV infrastructure, RevoVision enhances it.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default SurveillanceWhatIs;
