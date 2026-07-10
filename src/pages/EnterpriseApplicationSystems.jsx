import React from "react";
import EnterpriseApplicationsHero from "../components/EnterpriseApplications_System/EnterpriseApplicationsHero";
import EnterpriseWhatWeDo from "../components/EnterpriseApplications_System/EnterpriseWhatWeDo";
import EnterpriseProblems from "../components/EnterpriseApplications_System/EnterpriseProblems";
import EnterpriseWhatWeEngineer from "../components/EnterpriseApplications_System/EnterpriseWhatWeEngineer";
import EnterpriseMethod from "../components/EnterpriseApplications_System/EnterpriseMethod";
import EnterpriseTechStack from "../components/EnterpriseApplications_System/EnterpriseTechStack";
import EnterpriseIndustries from "../components/EnterpriseApplications_System/EnterpriseIndustries";
import EnterpriseWhyRevoSolve from "../components/EnterpriseApplications_System/EnterpriseWhyRevoSolve";
import EnterpriseComparison from "../components/EnterpriseApplications_System/EnterpriseComparison";
import EnterpriseFAQ from "../components/EnterpriseApplications_System/EnterpriseFAQ";
import EnterpriseCTA from "../components/EnterpriseApplications_System/EnterpriseCTA";

const EnterpriseApplicationSystems = () => {
  const scrollToNextSection = () => {
    const target = document.getElementById("enterprise-what-we-do");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Offset to clear the sticky navbar
      const targetY = scrollTop + rect.top - 60;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#01031c] relative min-h-screen">
      <EnterpriseApplicationsHero scrollToNextSection={scrollToNextSection} />
      <EnterpriseWhatWeDo />
      <EnterpriseProblems />
      <EnterpriseWhatWeEngineer />
      <EnterpriseMethod />
      <EnterpriseTechStack />
      <EnterpriseIndustries />
      <EnterpriseWhyRevoSolve />
      <EnterpriseComparison />
      <EnterpriseFAQ />
      <EnterpriseCTA />
    </div>
  );
};

export default EnterpriseApplicationSystems;
