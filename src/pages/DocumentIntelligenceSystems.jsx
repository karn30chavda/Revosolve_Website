import React from "react";
import DocHero from "../components/DocHero/DocHero";
import DocChallenge from "../components/DocChallenge/DocChallenge";
import DocApproach from "../components/DocApproach/DocApproach";
import DocCapabilities from "../components/DocCapabilities/DocCapabilities";

const DocumentIntelligenceSystems = () => {
  return (
    <div className="w-full bg-[#01031c]">
      <DocHero />
      <DocChallenge />
      <DocApproach />
      <DocCapabilities />
    </div>
  );
};

export default DocumentIntelligenceSystems;
