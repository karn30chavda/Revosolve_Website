import React from "react";
import DocHero from "../components/DocHero/DocHero";
import DocChallenge from "../components/DocChallenge/DocChallenge";
import DocApproach from "../components/DocApproach/DocApproach";
import DocCapabilities from "../components/DocCapabilities/DocCapabilities";
import DocDifferentiation from "../components/DocDifferentiation/DocDifferentiation";
import DocCTA from "../components/DocCTA/DocCTA";

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
