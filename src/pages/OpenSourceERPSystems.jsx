import React from "react";
import ERPHero from "../components/OpenSourceERPSystems/ERPHero";
import ERPWhatWeDo from "../components/OpenSourceERPSystems/ERPWhatWeDo";
import ERPWhatWeBuild from "../components/OpenSourceERPSystems/ERPWhatWeBuild";
import ERPProblemsWeSolve from "../components/OpenSourceERPSystems/ERPProblemsWeSolve";
import ERPApproach from "../components/OpenSourceERPSystems/ERPApproach";
import ERPIndustries from "../components/OpenSourceERPSystems/ERPIndustries";
import ERPTechStack from "../components/OpenSourceERPSystems/ERPTechStack";
import ERPWhyRevoSolve from "../components/OpenSourceERPSystems/ERPWhyRevoSolve";
import ERPFAQ from "../components/OpenSourceERPSystems/ERPFAQ";
import ERPCTA from "../components/OpenSourceERPSystems/ERPCTA";

const OpenSourceERPSystems = () => {
  const scrollToWhatWeDo = () => {
    document
      .getElementById("ent-what-we-do")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <ERPHero scrollToWhatWeDo={scrollToWhatWeDo} />
      <ERPWhatWeDo />
      <ERPProblemsWeSolve />
      <ERPWhatWeBuild />
      <ERPApproach />
      <ERPTechStack />
      <ERPIndustries />
      <ERPWhyRevoSolve />
      <ERPFAQ />
      <ERPCTA />
    </div>
  );
};

export default OpenSourceERPSystems;
