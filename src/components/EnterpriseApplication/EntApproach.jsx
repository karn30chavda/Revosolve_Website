import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const approachSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand business goals and operational workflows.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Create scalable architecture and user experiences.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Develop applications using modern engineering practices.",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Launch securely with governance and monitoring.",
  },
  {
    num: "05",
    title: "Evolve",
    desc: "Continuously improve systems based on business needs.",
  },
];

const EntApproach = () => {
  const [activeStep, setActiveStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % approachSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="execution-approach" 
      className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col items-start justify-start font-sans">
            {/* Section Tag */}
            <div className="text-white text-[14px] md:text-[18px] font-normal uppercase tracking-[0.264px] opacity-30 mb-2">
              [how it works]
            </div>

            {/* Heading Block */}
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px]">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                Our Approach
              </span>
              <br />
              <span className="text-[#E7E6FC] font-light xl:font-thin">
                to Intelligent Systems
              </span>
            </h2>
          </div>
        </div>

        {/* Steps Layout - Horizontal on Desktop/Tablet */}
        <div className="relative w-full mt-8 hidden md:block">
          {/* Horizontal Connecting Line */}
          <div className="absolute left-[9%] right-[9%] top-[31px] h-px bg-white/10 z-0" />
          
          {/* Dynamic Active Step Progress Line */}
          <div 
            className="absolute left-[9%] top-[31px] h-[1.5px] bg-[#20CEFF] shadow-[0_0_8px_rgba(32,206,255,0.7)] transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (approachSteps.length - 1)) * 82}%` }}
          />

          <div className="flex justify-between items-start w-full relative z-10">
            {approachSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center w-[18%] select-none"
                >
                  {/* Step Bubble */}
                  <div 
                    style={isActive ? { 
                      backgroundImage: "linear-gradient(135deg, rgba(32, 206, 255, 1), rgba(10, 14, 143, 1))", 
                      borderColor: "rgba(32, 206, 255, 1)" 
                    } : { 
                      backgroundColor: "rgba(13, 16, 64, 1)" 
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-[18px] font-bold transition-all duration-300 z-10 border ${
                      isActive 
                        ? "text-white shadow-[0_0_18px_rgba(32,206,255,0.6)] scale-110" 
                        : "border-white/20 text-[#CACBDB]"
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h4 
                    className={`text-sm lg:text-base font-bold font-sans mt-6 transition-colors duration-300 ${
                      isActive ? "text-[#20CEFF]" : "text-[#E7E6FC]"
                    }`}
                  >
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[12px] lg:text-[13.5px] text-[#CACBDB] font-light font-sans opacity-60 mt-2 max-w-[160px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps Layout - Vertical Stack on Mobile */}
        <div className="relative w-full flex flex-col gap-10 pl-16 md:hidden text-left mt-4">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[34px] top-[34px] bottom-[34px] w-px bg-white/10 z-0" />

          {approachSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div 
                key={idx} 
                className="relative flex flex-col items-start pt-2.5 select-none"
              >
                {/* Step Bubble Absolute Left */}
                <div 
                  style={isActive ? { 
                    backgroundImage: "linear-gradient(135deg, rgba(32, 206, 255, 1), rgba(10, 14, 143, 1))", 
                    borderColor: "rgba(32, 206, 255, 1)" 
                  } : { 
                    backgroundColor: "rgba(13, 16, 64, 1)" 
                  }}
                  className={`absolute left-[-54px] top-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-10 border ${
                    isActive 
                      ? "text-white shadow-[0_0_12px_rgba(32,206,255,0.4)]" 
                      : "border-white/20 text-[#CACBDB]"
                  }`}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h4 
                  className={`text-base font-bold font-sans transition-colors duration-300 ${
                    isActive ? "text-[#20CEFF]" : "text-[#E7E6FC]"
                  }`}
                >
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-[13px] text-[#CACBDB] font-light font-sans opacity-70 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EntApproach;
