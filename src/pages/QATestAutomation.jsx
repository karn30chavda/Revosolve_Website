import React from "react";
import QATestAutomationHero from "../components/QATestAutomation/QATestAutomationHero";
import QAWhatWeDo from "../components/QATestAutomation/QAWhatWeDo";
import QAProblemsWeSolve from "../components/QATestAutomation/QAProblemsWeSolve";
import QAWhatWeBuild from "../components/QATestAutomation/QAWhatWeBuild";
import QAMethod from "../components/QATestAutomation/QAMethod";
import QATechStack from "../components/QATestAutomation/QATechStack";
import QAIndustries from "../components/QATestAutomation/QAIndustries";
import QAWhyRevoSolve from "../components/QATestAutomation/QAWhyRevoSolve";
import QAFAQ from "../components/QATestAutomation/QAFAQ";
import QACTA from "../components/QATestAutomation/QACTA";

const QATestAutomation = () => {
  const scrollToWhatWeDo = () => {
    document
      .getElementById("qa-what-we-do")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <QATestAutomationHero scrollToNextSection={scrollToWhatWeDo} />
      <QAWhatWeDo />
      <QAProblemsWeSolve />
      <QAWhatWeBuild />
      <QAMethod />
      <QATechStack />
      <QAIndustries />
      <QAWhyRevoSolve />
      <QAFAQ />
      <QACTA />
    </div>
  );
};

export default QATestAutomation;
