import React from "react";
import SimulationDigitalTwinHero from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinHero";
import SimulationDigitalTwinChallenge from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinChallenge";
import SimulationDigitalTwinSystem from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinSystem";
import SimulationDigitalTwinCapabilities from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinCapabilities";
import SimulationDigitalTwinHowItWorks from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinHowItWorks";
import SimulationDigitalTwinOutcomes from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinOutcomes";
import SimulationDigitalTwinIndustries from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinIndustries";
import SimulationDigitalTwinTechStack from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinTechStack";
import SimulationDigitalTwinIntegrations from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinIntegrations";
import SimulationDigitalTwinWhyRevoSolve from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinWhyRevoSolve";
import SimulationDigitalTwinFAQ from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinFAQ";
import SimulationDigitalTwinCTA from "../components/SimulationDigitalTwinSystems/SimulationDigitalTwinCTA";

const SimulationDigitalTwinSystems = () => {
  return (
    <div className="bg-[#01031c] text-white min-h-screen">
      <SimulationDigitalTwinHero />
      <div id="simulation-content" className="relative z-20">
        <SimulationDigitalTwinChallenge />
        <SimulationDigitalTwinSystem />
        <SimulationDigitalTwinCapabilities />
        <SimulationDigitalTwinHowItWorks />
        <SimulationDigitalTwinOutcomes />
        <SimulationDigitalTwinIndustries />
        <SimulationDigitalTwinTechStack />
        <SimulationDigitalTwinIntegrations />
        <SimulationDigitalTwinWhyRevoSolve />
        <SimulationDigitalTwinFAQ />
        <SimulationDigitalTwinCTA />
      </div>
    </div>
  );
};

export default SimulationDigitalTwinSystems;



