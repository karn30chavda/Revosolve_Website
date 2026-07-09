import React from "react";
import DefenseHero from "../components/DefenseSimulationTrainingSystems/DefenseHero";
import DefenseChallenge from "../components/DefenseSimulationTrainingSystems/DefenseChallenge";
import DefenseSystem from "../components/DefenseSimulationTrainingSystems/DefenseSystem";
import DefenseCapabilities from "../components/DefenseSimulationTrainingSystems/DefenseCapabilities";
import DefenseFlow from "../components/DefenseSimulationTrainingSystems/DefenseFlow";
import DefenseOutcomes from "../components/DefenseSimulationTrainingSystems/DefenseOutcomes";
import DefenseIndustries from "../components/DefenseSimulationTrainingSystems/DefenseIndustries";
import DefenseIntegrations from "../components/DefenseSimulationTrainingSystems/DefenseIntegrations";
import DefenseWhy from "../components/DefenseSimulationTrainingSystems/DefenseWhy";
import DefenseFAQ from "../components/DefenseSimulationTrainingSystems/DefenseFAQ";
import DefenseCTA from "../components/DefenseSimulationTrainingSystems/DefenseCTA";

const DefenseSimulationTrainingSystems = () => {
  return (
    <main className="w-full min-h-screen bg-[#01031c] text-white">
      <DefenseHero />
      <DefenseChallenge />
      <DefenseSystem />
      <DefenseCapabilities />
      <DefenseFlow />
      <DefenseOutcomes />
      <DefenseIndustries />
      <DefenseIntegrations />
      <DefenseWhy />
      <DefenseFAQ />
      <DefenseCTA />
    </main>
  );
};

export default DefenseSimulationTrainingSystems;
