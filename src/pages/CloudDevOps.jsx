import React from "react";
import CloudDevOpsHero from "../components/CloudDevOps/CloudDevOpsHero";
import CloudWhatWeDo from "../components/CloudDevOps/CloudWhatWeDo";
import CloudProblemsWeSolve from "../components/CloudDevOps/CloudProblemsWeSolve";
import CloudWhatWeBuild from "../components/CloudDevOps/CloudWhatWeBuild";
import CloudTechStack from "../components/CloudDevOps/CloudTechStack";
import CloudIndustries from "../components/CloudDevOps/CloudIndustries";
import CloudCTA from "../components/CloudDevOps/CloudCTA";

const CloudDevOps = () => {
  const scrollToWhatWeDo = () => {
    document
      .getElementById("cloud-what-we-do")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <CloudDevOpsHero scrollToNextSection={scrollToWhatWeDo} />
      <CloudWhatWeDo />
      <CloudProblemsWeSolve />
      <CloudWhatWeBuild />
      <CloudTechStack />
      <CloudIndustries />
      <CloudCTA />
    </div>
  );
};

export default CloudDevOps;
