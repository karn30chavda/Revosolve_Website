import { solutionApproachSvg } from "./solution_approach_svg";
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
          <div className="w-full h-auto relative aspect-[1280/600]">
            {/* Background SVG */}
            <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: solutionApproachSvg }} />

            {/* Shopify (Circle 1 - Center 16.29%, 10.67%) */}
            <img
              src="/Solution_page/SHOPIFY.gif"
              alt="Shopify Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "16.29%",
                top: "10.67%",
                width: "9.80%",
                height: "6.50%"
              }}
            />

            {/* Amazon (Circle 2 - Center 9.80%, 27.25%) */}
            <img
              src="/Solution_page/amazon.gif"
              alt="Amazon Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "9.80%",
                top: "27.25%",
                width: "8.80%",
                height: "5.60%"
              }}
            />

            {/* EasyEcom (Circle 3 - Center 9.65%, 57.50%) */}
            <img
              src="/Solution_page/easyecom.gif"
              alt="EasyEcom Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "9.65%",
                top: "57.50%",
                width: "11.50%",
                height: "5.40%"
              }}
            />

            {/* Zepto (Circle 4 - Center 10.31%, 88.08%) */}
            <img
              src="/Solution_page/zepto.gif"
              alt="Zepto Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "10.31%",
                top: "88.08%",
                width: "10.80%",
                height: "6.30%"
              }}
            />

            {/* Gupshup (Circle 5 - Center 78.09%, 10.83%) */}
            <img
              src="/Solution_page/ghupshup.gif"
              alt="Gupshup Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "78.09%",
                top: "10.83%",
                width: "10.20%",
                height: "5.50%"
              }}
            />

            {/* eShipz (Circle 6 - Center 65.98%, 89.25%) */}
            <img
              src="/Solution_page/eshipz.gif"
              alt="eShipz Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "65.98%",
                top: "89.25%",
                width: "9.20%",
                height: "6.70%"
              }}
            />

            {/* UPS (Circle 7 - Center 83.59%, 89.00%) */}
            <img
              src="/Solution_page/ups.gif"
              alt="UPS Logo Animation"
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{
                left: "83.59%",
                top: "89.00%",
                width: "12.34%",
                height: "8.33%"
              }}
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default CommerceApproach;
