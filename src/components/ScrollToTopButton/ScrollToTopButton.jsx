import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center text-[#877BF1] hover:text-[#FCCA71] transition-all duration-300 group cursor-pointer filter drop-shadow-[0_2px_8px_rgba(135,123,241,0.4)]"
          aria-label="Back to Top"
        >
          {/* Minimalist Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>

          {/* Hanging Vertical Stem Line */}
          <div className="w-[1.5px] h-6 bg-[#877BF1]/80 mt-1.5 transition-all duration-300 group-hover:h-8 group-hover:bg-[#FCCA71] group-hover:shadow-[0_0_8px_#FCCA71]" />
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
