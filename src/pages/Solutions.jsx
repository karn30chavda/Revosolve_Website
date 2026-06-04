import React from "react";
import { motion as Motion } from "framer-motion";
import SolutionHero from "../components/SolutionHero/SolutionHero";
import CommerceProblems from "../components/CommerceProblems/CommerceProblems";
import CommerceSystem from "../components/CommerceSystem/CommerceSystem";

const Solutions = () => {
  return (
    <div className="w-full bg-[#01031c]">
      {/* Solutions Page Hero */}
      <SolutionHero />

      {/* Solutions Sections / Components will be loaded below */}
      <div id="solutions-content" className="w-full relative z-10 pt-10">
        <CommerceProblems />
        <CommerceSystem />
      </div>
    </div>
  );
};

export default Solutions;
