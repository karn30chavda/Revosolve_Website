import React from "react";
import { motion as Motion } from "framer-motion";
import SolutionHero from "../components/SolutionHero/SolutionHero";
import CommercePositioning from "../components/CommercePositioning/CommercePositioning";
import CommerceCTA from "../components/CommerceCTA/CommerceCTA";
import CommerceProblems from "../components/CommerceProblems/CommerceProblems";
import CommerceSystem from "../components/CommerceSystem/CommerceSystem";
import CommerceCapabilities from "../components/CommerceCapabilities/CommerceCapabilities";
import CommerceDifferentiation from "../components/CommerceDifferentiation/CommerceDifferentiation";
import CommerceIntegrations from "../components/CommerceIntegrations/CommerceIntegrations";
import CommerceClarity from "../components/CommerceClarity/CommerceClarity";
import CommerceApproach from "../components/CommerceApproach/CommerceApproach";
import CommerceProcess from "../components/CommerceProcess/CommerceProcess";
import CommerceCaseStudy from "../components/CommerceCaseStudy/CommerceCaseStudy";

const Solutions = () => {
  return (
    <div className="w-full bg-[#01031c]">
      {/* Solutions Page Hero */}
      <SolutionHero />

      {/* Solutions Sections / Components will be loaded below */}
      <div id="solutions-content" className="w-full relative z-10">
        <CommerceProblems />
        <CommerceSystem />
        <CommerceApproach />
        <CommerceClarity />
        <CommerceProcess />
        <CommerceCaseStudy />
        <CommerceCapabilities />
        <CommerceDifferentiation />
        <CommerceIntegrations />
        <CommercePositioning />
        <CommerceCTA />
      </div>
    </div>
  );
};

export default Solutions;
