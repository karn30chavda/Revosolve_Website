import React from "react";
import GenAIHero from "../components/GenAIHero/GenAIHero";
import GenAIWhatWeDo from "../components/GenAIWhatWeDo/GenAIWhatWeDo";
import GenAIProblems from "../components/GenAIProblems/GenAIProblems";
import GenAISystems from "../components/GenAISystems/GenAISystems";
import GenAIMethod from "../components/GenAIMethod/GenAIMethod";
import GenAITech from "../components/GenAITech/GenAITech";
import GenAIIndustries from "../components/GenAIIndustries/GenAIIndustries";
import GenAIDifferentiation from "../components/GenAIDifferentiation/GenAIDifferentiation";
import GenAIFAQ from "../components/GenAIFAQ/GenAIFAQ";
import GenAICTA from "../components/GenAICTA/GenAICTA";

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
