import React from "react";
import DocHero from "../components/DocumentIntelligenceSystems/DocHero";
import DocChallenge from "../components/DocumentIntelligenceSystems/DocChallenge";
import DocApproach from "../components/DocumentIntelligenceSystems/DocApproach";
import DocCapabilities from "../components/DocumentIntelligenceSystems/DocCapabilities";
import DocDifferentiation from "../components/DocumentIntelligenceSystems/DocDifferentiation";
import DocCTA from "../components/DocumentIntelligenceSystems/DocCTA";

const DocumentIntelligenceSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      <DocHero />
      <DocChallenge />
      <DocApproach />
      <DocCapabilities />
      <DocDifferentiation />
      <DocCTA />
    </div>
  );
};

export default DocumentIntelligenceSystems;
