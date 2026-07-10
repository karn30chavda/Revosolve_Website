import React from "react";
import LegacyTransformationHero from "../components/LegacyTransformationSystems/LegacyTransformationHero";
import LegacyTransformationWhatWeDo from "../components/LegacyTransformationSystems/LegacyTransformationWhatWeDo";
import LegacyProblems from "../components/LegacyTransformationSystems/LegacyProblems";
import LegacyWhatWeEngineer from "../components/LegacyTransformationSystems/LegacyWhatWeEngineer";
import LegacyMethod from "../components/LegacyTransformationSystems/LegacyMethod";
import LegacyTechStack from "../components/LegacyTransformationSystems/LegacyTechStack";
import LegacyIndustries from "../components/LegacyTransformationSystems/LegacyIndustries";
import LegacyWhyRevoSolve from "../components/LegacyTransformationSystems/LegacyWhyRevoSolve";
import LegacyFAQ from "../components/LegacyTransformationSystems/LegacyFAQ";
import LegacyCTA from "../components/LegacyTransformationSystems/LegacyCTA";

const LegacyTransformationSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      <LegacyTransformationHero />
      <LegacyTransformationWhatWeDo />
      <LegacyProblems />
      <LegacyWhatWeEngineer />
      <LegacyMethod />
      <LegacyTechStack />
      <LegacyIndustries />
      <LegacyWhyRevoSolve />
      <LegacyFAQ />
      <LegacyCTA />
    </div>
  );
};

export default LegacyTransformationSystems;
