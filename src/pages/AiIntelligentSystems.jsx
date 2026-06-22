import React from "react";
import AiHero from "../components/AiIntelligentSystems/AiHero";
import AiWhyRevoSolve from "../components/AiIntelligentSystems/AiWhyRevoSolve";
import AiWhatWeBuild from "../components/AiIntelligentSystems/AiWhatWeBuild";
import AiDifferentiators from "../components/AiIntelligentSystems/AiDifferentiators";
import AiTechStack from "../components/AiIntelligentSystems/AiTechStack";
import AiIndustries from "../components/AiIntelligentSystems/AiIndustries";
import AiCTA from "../components/AiIntelligentSystems/AiCTA";

const AiIntelligentSystems = () => {
  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <AiHero />
      <AiWhyRevoSolve />
      <AiWhatWeBuild />
      <AiDifferentiators />
      <AiTechStack />
      <AiIndustries />
      <AiCTA />
    </div>
  );
};

export default AiIntelligentSystems;
