import React from "react";
import EntHero from "../components/EnterpriseApplicationSystems/EntHero";
import EntWhatWeDo from "../components/EnterpriseApplicationSystems/EntWhatWeDo";
import EntWhatWeBuild from "../components/EnterpriseApplicationSystems/EntWhatWeBuild";
import EntProblemsWeSolve from "../components/EnterpriseApplicationSystems/EntProblemsWeSolve";
import EntApproach from "../components/EnterpriseApplicationSystems/EntApproach";
import EntIndustries from "../components/EnterpriseApplicationSystems/EntIndustries";
import EntTechStack from "../components/EnterpriseApplicationSystems/EntTechStack";
import EntCTA from "../components/EnterpriseApplicationSystems/EntCTA";

const EnterpriseApplicationSystems = () => {
  const scrollToWhatWeDo = () => {
    document
      .getElementById("ent-what-we-do")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <EntHero scrollToWhatWeDo={scrollToWhatWeDo} />
      <EntWhatWeDo />
      <EntProblemsWeSolve />
      <EntWhatWeBuild />
      <EntApproach />
      <EntTechStack />
      <EntIndustries />
      <EntCTA />
    </div>
  );
};

export default EnterpriseApplicationSystems;
