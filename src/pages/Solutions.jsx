import React from "react";
import { motion as Motion } from "framer-motion";
import SolutionHero from "../components/SolutionHero/SolutionHero";

const Solutions = () => {
  return (
    <div className="w-full bg-[#01031c]">
      {/* Solutions Page Hero */}
      <SolutionHero />

      {/* Solutions Sections / Components will be loaded below */}
      <div id="solutions-content" className="w-full relative z-10 py-20">
        {/* We will build different types of components for individual solutions here */}
      </div>
    </div>
  );
};

export default Solutions;
