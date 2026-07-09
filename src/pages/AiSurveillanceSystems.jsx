import React from "react";
import SurveillanceHero from "../components/AiSurveillanceSystems/SurveillanceHero";
import SurveillanceWhatIs from "../components/AiSurveillanceSystems/SurveillanceWhatIs";
import SurveillanceProblems from "../components/AiSurveillanceSystems/SurveillanceProblems";
import SurveillanceDelivers from "../components/AiSurveillanceSystems/SurveillanceDelivers";
import SurveillanceModules from "../components/AiSurveillanceSystems/SurveillanceModules";
import SurveillanceMethod from "../components/AiSurveillanceSystems/SurveillanceMethod";
import SurveillanceTechStack from "../components/AiSurveillanceSystems/SurveillanceTechStack";
import SurveillanceIndustries from "../components/AiSurveillanceSystems/SurveillanceIndustries";
import SurveillanceWhy from "../components/AiSurveillanceSystems/SurveillanceWhy";
import SurveillanceUseCases from "../components/AiSurveillanceSystems/SurveillanceUseCases";
import SurveillanceFAQ from "../components/AiSurveillanceSystems/SurveillanceFAQ";
import SurveillanceCTA from "../components/AiSurveillanceSystems/SurveillanceCTA";

const AiSurveillanceSystems = () => {
  return (
    <div className="bg-[#01031c] text-white min-h-screen">
      <SurveillanceHero />
      <div id="surveillance-content" className="relative z-20">
        <SurveillanceWhatIs />
        <SurveillanceProblems />
        <SurveillanceDelivers />
        <SurveillanceModules />
        <SurveillanceMethod />
        <SurveillanceTechStack />
        <SurveillanceIndustries />
        <SurveillanceWhy />
        <SurveillanceUseCases />
        <SurveillanceFAQ />
        <SurveillanceCTA />
      </div>
    </div>
  );
};

export default AiSurveillanceSystems;
