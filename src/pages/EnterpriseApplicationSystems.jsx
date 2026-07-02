import React from "react";
import EntHero from "../components/EnterpriseApplication/EntHero";
import EntWhatWeDo from "../components/EnterpriseApplication/EntWhatWeDo";
import EntWhatWeBuild from "../components/EnterpriseApplication/EntWhatWeBuild";
import EntProblemsWeSolve from "../components/EnterpriseApplication/EntProblemsWeSolve";
import EntApproach from "../components/EnterpriseApplication/EntApproach";
import EntIndustries from "../components/EnterpriseApplication/EntIndustries";
import EntTechStack from "../components/EnterpriseApplication/EntTechStack";
import EntCTA from "../components/EnterpriseApplication/EntCTA";

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
