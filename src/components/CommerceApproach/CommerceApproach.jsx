import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const CommerceApproach = () => {
  const words = ["Quick Commerce", "E-commerce", "D2C Brands", "CPG", "FMCG"];
  const [index, setIndex] = useState(0);

  // Safeguard against hot module replacement (HMR) state preservation issues
  const safeIndex = index >= words.length ? 0 : index;
  const currentWord = words[safeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative w-full bg-[#01031c] py-8 lg:py-10 lg:-mt-[calc(100vh-720px)]">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start  pb-6">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [approach]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] font-sans">
              ERPNext-An operating system
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal font-sans mt-1">
              for your{" "}
              <AnimatePresence mode="wait">
                <Motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="inline-block text-[#FFAA00] font-normal"
                >
                  {currentWord}
                </Motion.span>
              </AnimatePresence>{" "}
              Business
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
            src="/Solution_page/solution_approach.svg"
            alt="ERPNext Operating System for Quick Commerce Business Diagram"
            className="w-full h-auto object-contain"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default CommerceApproach;
