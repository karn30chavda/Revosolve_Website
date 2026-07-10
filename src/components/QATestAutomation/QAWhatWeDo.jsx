import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  CheckSquare, PlugsConnected, MonitorPlay, RocketLaunch, GitCommit, Gauge, ShieldCheck, Scales
} from "@phosphor-icons/react";

const GateNode = ({ icon, label, isActive, isCompleted }) => {
  const Icon = icon;
  const activeOrDone = isActive || isCompleted;
  return (
    <div className="text-center flex-1">
      <div 
        className={`w-13 h-13 mx-auto mb-2.5 rounded-full flex items-center justify-center transition-all duration-300 ${
          activeOrDone 
            ? "border-[1.5px] border-[#FCCA71] text-[#FCCA71] bg-[#FCCA71]/16 shadow-[0_0_12px_rgba(252,202,113,0.25)]" 
            : "border border-[#FCCA71]/45 text-[#FCCA71]/35 bg-[#FCCA71]/6"
        } ${isActive ? "animate-gate-pulse" : ""}`}
      >
        <Icon size={activeOrDone ? 26 : 22} className="transition-all duration-300" />
      </div>
      <div 
        className={`font-mono text-[9.5px] tracking-wider uppercase select-none transition-all duration-300 ${
          activeOrDone ? "text-white font-bold" : "text-[#CACBDB]/40 font-normal"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

const GateFlow = ({ isActive, isCompleted }) => (
  <div 
    className={`relative flex-0.55 h-px border-t transition-all duration-300 ${
      (isActive || isCompleted) ? "border-[#FCCA71]/45" : "border-[#FCCA71]/15"
    }`}
  >
    {isActive && (
      <span 
        className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71] animate-flow-dot"
      />
    )}
  </div>
);

const QAWhatWeDo = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 9);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="qa-what-we-do" className="relative w-full py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20 z-20">
      <style>{`
        @keyframes qetGatePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(252, 202, 113, 0.3); }
          50% { box-shadow: 0 0 14px 2px rgba(252, 202, 113, 0.5); }
        }
        @keyframes qetFlowX {
          0% { left: 0%; opacity: 0.1; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 100%; opacity: 0.1; }
        }
        .animate-gate-pulse {
          animation: qetGatePulse 2.8s ease-in-out infinite;
        }
        .animate-flow-dot {
          animation: qetFlowX 1.2s linear infinite;
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
            <span className="font-black text-[#877BF1]">Engineering quality </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">across the entire </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              software lifecycle
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          
          {/* Left Column: quality gates graphic */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] rounded-[22px] border border-white/10 bg-linear-to-br from-[#12143e]/70 to-[#0a0b28]/70 p-5 sm:p-6 xl:p-8 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Subtle top glare */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#FCCA71]/30 to-transparent pointer-events-none" />

            <div className="font-mono text-[10.5px] tracking-[0.14rem] text-white font-bold uppercase mb-[30px] flex justify-between select-none">
              <span>quality_gates</span>
              <span className="text-[#FCCA71] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse" />
                <span>enforcing</span>
              </span>
            </div>
            
            <div className="flex items-center justify-between gap-0.5 my-auto py-2">
              <GateNode icon={GitCommit} label="Commit" isActive={activeStep === 0} isCompleted={activeStep > 0} />
              <GateFlow isActive={activeStep === 1} isCompleted={activeStep > 1} />
              <GateNode icon={CheckSquare} label="Unit" isActive={activeStep === 2} isCompleted={activeStep > 2} />
              <GateFlow isActive={activeStep === 3} isCompleted={activeStep > 3} />
              <GateNode icon={PlugsConnected} label="API" isActive={activeStep === 4} isCompleted={activeStep > 4} />
              <GateFlow isActive={activeStep === 5} isCompleted={activeStep > 5} />
              <GateNode icon={MonitorPlay} label="E2E" isActive={activeStep === 6} isCompleted={activeStep > 6} />
              <GateFlow isActive={activeStep === 7} isCompleted={activeStep > 7} />
              <GateNode icon={RocketLaunch} label="Release" isActive={activeStep === 8} isCompleted={activeStep > 8} />
            </div>

            <div className="flex justify-between mt-5 pt-3.5 border-t border-[#FCCA71]/18 w-full flex-wrap gap-y-2 font-mono">
              <span className="text-[10px] tracking-wider uppercase text-white font-bold flex items-center gap-1.5">
                <Gauge size={15} className="text-[#FCCA71]" />
                <span>Performance</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-white font-bold flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#FCCA71]" />
                <span>Security</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-white font-bold flex items-center gap-1.5">
                <Scales size={15} className="text-[#FCCA71]" />
                <span>Governance</span>
              </span>
            </div>
          </Motion.div>

          {/* Right Column: Copy */}
          <Motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center items-start text-left gap-6 relative z-10"
          >
            <p className="text-white text-base md:text-lg xl:text-[20px] font-medium leading-relaxed font-sans">
              Maintaining software quality requires far more than manual testing. Organizations need intelligent quality engineering that integrates testing into development, automates validation, and improves release confidence.
            </p>
            
            <p className="text-[#CACBDB] text-sm md:text-base leading-relaxed font-sans">
              We combine automation, performance engineering, security validation, API testing, and continuous quality practices to support modern software delivery.
            </p>
          </Motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default QAWhatWeDo;
