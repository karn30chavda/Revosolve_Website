import React from "react";
import { motion as Motion } from "framer-motion";

const CommerceApproach = () => {
  return (
    <section className="relative w-full bg-[#01031c] py-16 lg:py-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start  pb-6">
          {/* Section Tag */}
          <div className="text-white text-xs uppercase tracking-wider opacity-30 mb-2">
            [approach]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] font-sans">
              ERPNext-An operating system
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal font-sans mt-1">
              for your <span className="text-[#FFAA00] font-normal">Quick Commerce</span> business
            </h3>
          </div>
        </div>

        {/* Diagram Container */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex items-center justify-center relative z-10"
        >
          <img 
            src="/Solution_page/solution_approach.webp" 
            alt="ERPNext Operating System for Quick Commerce Business Diagram" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.target.src = "/Solution_page/solution_positining_image.webp";
            }}
          />
        </Motion.div>

      </div>
    </section>
  );
};

export default CommerceApproach;
