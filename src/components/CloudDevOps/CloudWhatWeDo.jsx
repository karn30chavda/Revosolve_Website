import React from "react";
import { motion as Motion } from "framer-motion";

const CloudWhatWeDo = () => {
  return (
    <section id="cloud-what-we-do" className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-24 md:scroll-mt-28">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full md:w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
          className="w-full flex flex-col lg:flex-row justify-between items-stretch overflow-hidden relative rounded-xl"
        >
          {/* Left Column: Heading and Tag */}
          <div className="w-full lg:w-[45%] px-6 pt-8 pb-4 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center items-start text-left relative z-10">
            <span className="text-white/30 text-[10px] sm:text-xs uppercase tracking-[3px] mb-5 font-sans select-none font-semibold">
              [WHAT]
            </span>
            <h3 className="text-3xl md:text-[38px] xl:text-[44px] font-black leading-tight tracking-[0.264px] mb-2 font-sans">
              <span className="text-[#877BF1]">The </span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">Future</span>
            </h3>
            <h4 className="text-2xl md:text-3xl xl:text-[36px] font-thin text-[#E7E6FC] font-sans opacity-70">
              Digital Foundations
            </h4>
          </div>

          {/* Right Column: Paragraph Description Blocks */}
          <div className="w-full lg:w-[55%] px-6 pb-8 pt-4 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center items-start gap-4 md:gap-6 lg:gap-8 text-left relative z-10">
            {/* Top paragraph: Bold white */}
            <p className="text-white text-sm md:text-lg xl:text-[20px] font-medium leading-relaxed font-sans">
              We help organizations modernize infrastructure, automate deployments, improve operational resilience, and accelerate software delivery through cloud engineering and DevOps practices.
            </p>

          </div>

          {/* Subtle Background pattern overlay on the right column */}
          <div 
            className="absolute right-0 bottom-0 top-0 w-full lg:w-[55%] pointer-events-none z-0 opacity-[0.04] mix-blend-screen"
            style={{
              backgroundImage: "url(/home_section_6/bg_pattern.svg)",
              backgroundSize: "180px",
              backgroundRepeat: "repeat",
            }}
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default CloudWhatWeDo;
