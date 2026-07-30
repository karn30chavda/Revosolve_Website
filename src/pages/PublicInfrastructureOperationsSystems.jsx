import React from "react";
import InfraHero from "../components/PublicInfrastructureOperationsSystems/InfraHero";
import InfraChallenge from "../components/PublicInfrastructureOperationsSystems/InfraChallenge";
import InfraSystem from "../components/PublicInfrastructureOperationsSystems/InfraSystem";
import InfraCapabilities from "../components/PublicInfrastructureOperationsSystems/InfraCapabilities";
import InfraFlow from "../components/PublicInfrastructureOperationsSystems/InfraFlow";
import InfraStages from "../components/PublicInfrastructureOperationsSystems/InfraStages";
import InfraOutcomes from "../components/PublicInfrastructureOperationsSystems/InfraOutcomes";
import InfraIntegrations from "../components/PublicInfrastructureOperationsSystems/InfraIntegrations";
import InfraIndustries from "../components/PublicInfrastructureOperationsSystems/InfraIndustries";
import InfraWhy from "../components/PublicInfrastructureOperationsSystems/InfraWhy";
import InfraFAQ from "../components/PublicInfrastructureOperationsSystems/InfraFAQ";
import InfraCTA from "../components/PublicInfrastructureOperationsSystems/InfraCTA";

const PublicInfrastructureOperationsSystems = () => {
  return (
    <main className="w-full min-h-screen bg-[#01031c] text-white relative overflow-x-hidden">
      <InfraHero />
      <div id="solutions-content" className="w-full relative z-10">
        <InfraChallenge />
        <InfraSystem />
        <InfraCapabilities />
        <InfraFlow />
        <InfraStages />
        <InfraOutcomes />
        <InfraIntegrations />
        <InfraIndustries />
        <InfraWhy />
        <InfraFAQ />
        <InfraCTA />
      </div>
    </main>
  );
};

export default PublicInfrastructureOperationsSystems;
