import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const VISION_WORDS = [
  "Operational Systems",
  "Digital Foundations",
  "Intelligent Workflows",
  "Enterprise Operating",
  "AI-Native Governance",
];

const VISION_LINES = [
  "A future where organizations no longer struggle with fragmented technology.",
  "Where governments deliver better public services through intelligent infrastructure.",
  "Where AI enhances human decision-making — not replaces it.",
  "Where software becomes an invisible enabler of operational excellence.",
];

const RotatingAnchor = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI((prev) => (prev + 1) % VISION_WORDS.length);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-flex items-baseline justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <Motion.span
          key={i}
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-black font-sans bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent whitespace-nowrap px-1"
        >
          {VISION_WORDS[i]}
        </Motion.span>
      </AnimatePresence>
    </span>
  );
};

const Typewriter = ({ lines, className = "" }) => {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const line = lines[lineIdx];
    const done = charIdx === line.length;
    const empty = charIdx === 0;

    if (!deleting && done) {
      const timer = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(timer);
    }

    if (deleting && empty) {
      const timer = setTimeout(() => {
        setDeleting(false);
        setLineIdx((prev) => (prev + 1) % lines.length);
      }, 0);
      return () => clearTimeout(timer);
    }

    const speed = deleting ? 18 : 34;
    const timer = setTimeout(() => {
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, lines]);

  return (
    <p className={className}>
      {lines[lineIdx].slice(0, charIdx)}
      <span className="inline-block w-0.5 h-[1em] align-text-bottom ml-1 bg-[#FCCA71] animate-pulse" />
    </p>
  );
};

export const OurVision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-20 sm:py-28 md:py-36 font-sans bg-[#01031c]"
      data-testid="section-vision"
    >
      {/* Dynamic Animated Background Orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <Motion.div
          style={{ scale, opacity }}
          className="w-70 h-70 sm:w-125 sm:h-125 md:w-187.5 md:h-187.5 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(135,123,241,0.25) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(252,202,113,0.20) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(226,142,255,0.20) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Concentric Expanding Target Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[0, 1, 2].map((i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full border border-[rgba(252,202,113,0.2)] pointer-events-none will-change-transform"
            style={{ width: 320, height: 320 }}
            animate={{ 
              scale: [1, 2.4], 
              opacity: [0.5, 0, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
              times: [0, 0.95, 1],
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Section Tag */}
        <div className="text-white text-[14px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
          [our vision]
        </div>

        {/* Dynamic Changing Title */}
        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight tracking-tight text-center font-sans max-w-4xl w-full">
          <div className="font-black text-white">To become the world&apos;s</div>
          <div className="my-1 md:my-2 flex items-baseline justify-center flex-wrap gap-x-2 gap-y-1">
            <span className="text-[#CACBDB] font-light xl:font-thin">trusted</span>
            <RotatingAnchor />
          </div>
          <div className="font-black text-white">engineering company.</div>
        </h2>

        {/* Signal From The Future Typewriter Text - Center aligned on mobile */}
        <div className="mt-4 sm:mt-6 max-w-xl w-full text-center sm:text-left flex flex-col items-center sm:items-start">
          <div className="text-xs font-mono tracking-widest text-[#FCCA71] uppercase font-semibold mb-2">
            // SIGNAL FROM THE FUTURE
          </div>
          <Typewriter
            lines={VISION_LINES}
            className="text-[#CACBDB] text-sm sm:text-base md:text-lg font-light leading-relaxed min-h-[3.2em] w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default OurVision;