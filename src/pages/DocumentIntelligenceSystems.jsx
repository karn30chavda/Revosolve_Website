import React from "react";
import DocHero from "../components/DocumentIntelligenceSystems/DocHero";
import DocWhatWeDo from "../components/DocumentIntelligenceSystems/DocWhatWeDo";
import DocProblems from "../components/DocumentIntelligenceSystems/DocProblems";
import DocDelivers from "../components/DocumentIntelligenceSystems/DocDelivers";
import DocModules from "../components/DocumentIntelligenceSystems/DocModules";
import DocMethod from "../components/DocumentIntelligenceSystems/DocMethod";
import DocTechStack from "../components/DocumentIntelligenceSystems/DocTechStack";
import DocIndustries from "../components/DocumentIntelligenceSystems/DocIndustries";
import DocWhy from "../components/DocumentIntelligenceSystems/DocWhy";
import DocUseCases from "../components/DocumentIntelligenceSystems/DocUseCases";
import DocFAQ from "../components/DocumentIntelligenceSystems/DocFAQ";
import DocCTA from "../components/DocumentIntelligenceSystems/DocCTA";

const DocumentIntelligenceSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      <DocHero />
      <DocWhatWeDo />
      <DocProblems />
      <DocDelivers />
      <DocModules />
      <DocMethod />
      <DocTechStack />
      <DocIndustries />
      <DocWhy />
      <DocUseCases />
      <DocFAQ />
      <DocCTA />
    </div>
  );
};

export default DocumentIntelligenceSystems;
