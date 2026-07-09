import React from "react";
import { motion as Motion } from "framer-motion";
import CommerceHero from "../components/CommerceOperationsSystems/CommerceHero";
import CommercePositioning from "../components/CommerceOperationsSystems/CommercePositioning";
import CommerceCTA from "../components/CommerceOperationsSystems/CommerceCTA";
import CommerceProblems from "../components/CommerceOperationsSystems/CommerceProblems";
import CommerceVideoAnimation from "../components/CommerceOperationsSystems/CommerceVideoAnimation";
import CommerceSystem from "../components/CommerceOperationsSystems/CommerceSystem";
import CommerceCapabilities from "../components/CommerceOperationsSystems/CommerceCapabilities";
import CommerceDifferentiation from "../components/CommerceOperationsSystems/CommerceDifferentiation";
import CommerceIntegrations from "../components/CommerceOperationsSystems/CommerceIntegrations";
import CommerceClarity from "../components/CommerceOperationsSystems/CommerceClarity";
import CommerceApproach from "../components/CommerceOperationsSystems/CommerceApproach";
import CommerceProcess from "../components/CommerceOperationsSystems/CommerceProcess";
// import CommerceCaseStudy from "../components/CommerceOperationsSystems/CommerceCaseStudy";

const CommerceOperationsSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      {/* Solutions Page Hero */}
      <CommerceHero />

      {/* Solutions Sections / Components will be loaded below */}
      <div id="solutions-content" className="w-full relative z-10">
        <CommerceProblems />
        <CommerceVideoAnimation />
        <CommerceSystem />
        <CommerceApproach />
        <CommerceClarity />
        <CommerceProcess />
        {/* <CommerceCaseStudy /> */}
        <CommerceCapabilities />
        <CommerceDifferentiation />
        <CommerceIntegrations />
        <CommercePositioning />
        <CommerceCTA />
      </div>
    </div>
  );
};

export default CommerceOperationsSystems;
