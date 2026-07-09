import React from "react";
import { motion as Motion } from "framer-motion";

const CommerceProcess = () => {
  return (
    <section className="relative w-full bg-[#01031c] py-8 lg:py-10 lg:-mt-[calc(100vh-720px)]">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-center justify-center pb-2">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [process]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="bg-linear-to-r from-[#877BF1] to-[#d7a54e] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] font-sans">
              How the System Works
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal font-sans mt-1">
              A unified process for commerce operations
            </h3>
          </div>
        </div>

        {/* Process Diagram Container */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex items-center justify-center relative z-10 mt-4"
        >
          <img 
            src="/CommerceOperationsSystems/process_diagram.svg" 
            alt="RevoSolve System Workflow Process Diagram" 
            className="w-full h-auto max-w-[1100px] object-contain"
            onError={(e) => {
              e.target.src = "/CommerceOperationsSystems/approach_diagram.svg";
            }}
          />
        </Motion.div>

      </div>
    </section>
  );
};

export default CommerceProcess;
