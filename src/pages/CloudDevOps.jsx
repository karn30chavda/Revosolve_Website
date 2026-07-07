import React from "react";
import CloudDevOpsHero from "../components/CloudDevOps/CloudDevOpsHero";
import CloudWhatWeDo from "../components/CloudDevOps/CloudWhatWeDo";
import CloudProblemsWeSolve from "../components/CloudDevOps/CloudProblemsWeSolve";
import CloudWhatWeBuild from "../components/CloudDevOps/CloudWhatWeBuild";
import CloudMethod from "../components/CloudDevOps/CloudMethod";
import CloudTechStack from "../components/CloudDevOps/CloudTechStack";
import CloudIndustries from "../components/CloudDevOps/CloudIndustries";
import CloudWhyRevoSolve from "../components/CloudDevOps/CloudWhyRevoSolve";
import CloudRelatedSolutions from "../components/CloudDevOps/CloudRelatedSolutions";
import CloudFAQ from "../components/CloudDevOps/CloudFAQ";
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
      <CloudMethod />
      <CloudTechStack />
      <CloudIndustries />
      <CloudWhyRevoSolve />
      <CloudRelatedSolutions />
      <CloudFAQ />
      <CloudCTA />
    </div>
  );
};

export default CloudDevOps;
