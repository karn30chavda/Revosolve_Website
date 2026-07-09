import React from "react";
import GenAIHero from "../components/AiIntelligentSystems/GenAIHero";
import GenAIWhatWeDo from "../components/AiIntelligentSystems/GenAIWhatWeDo";
import GenAIProblems from "../components/AiIntelligentSystems/GenAIProblems";
import GenAISystems from "../components/AiIntelligentSystems/GenAISystems";
import GenAIMethod from "../components/AiIntelligentSystems/GenAIMethod";
import GenAITech from "../components/AiIntelligentSystems/GenAITech";
import GenAIIndustries from "../components/AiIntelligentSystems/GenAIIndustries";
import GenAIDifferentiation from "../components/AiIntelligentSystems/GenAIDifferentiation";
import GenAIFAQ from "../components/AiIntelligentSystems/GenAIFAQ";
import GenAICTA from "../components/AiIntelligentSystems/GenAICTA";

const AiIntelligentSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      {/* Services Page Hero */}
      <GenAIHero />

      {/* Page Sections */}
      <div id="genai-content" className="w-full relative z-10">
        <GenAIWhatWeDo />
        <GenAIProblems />
        <GenAISystems />
        <GenAIMethod />
        <GenAITech />
        <GenAIIndustries />
        <GenAIDifferentiation />
        <GenAIFAQ />
        <GenAICTA />
      </div>
    </div>
  );
};

export default AiIntelligentSystems;
