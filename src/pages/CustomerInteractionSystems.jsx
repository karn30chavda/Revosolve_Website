import React from "react";
import CustomerInteractionHero from "../components/CustomerInteractionSystems/CustomerInteractionHero";
import CustomerInteractionChallenge from "../components/CustomerInteractionSystems/CustomerInteractionChallenge";
import CustomerInteractionSystem from "../components/CustomerInteractionSystems/CustomerInteractionSystem";
import CustomerInteractionCapabilities from "../components/CustomerInteractionSystems/CustomerInteractionCapabilities";
import CustomerInteractionApproach from "../components/CustomerInteractionSystems/CustomerInteractionApproach";
import CustomerInteractionOutcomes from "../components/CustomerInteractionSystems/CustomerInteractionOutcomes";
import CustomerInteractionIndustries from "../components/CustomerInteractionSystems/CustomerInteractionIndustries";
import CustomerInteractionIntegrations from "../components/CustomerInteractionSystems/CustomerInteractionIntegrations";
import CustomerInteractionWhy from "../components/CustomerInteractionSystems/CustomerInteractionWhy";
import CustomerInteractionFAQ from "../components/CustomerInteractionSystems/CustomerInteractionFAQ";
import CustomerInteractionCTA from "../components/CustomerInteractionSystems/CustomerInteractionCTA";

const CustomerInteractionSystems = () => {
  return (
    <main
      className="font-sans"
      style={{
        background: "#01031c",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <CustomerInteractionHero />
      <CustomerInteractionChallenge />
      <CustomerInteractionSystem />
      <CustomerInteractionCapabilities />
      <CustomerInteractionApproach />
      <CustomerInteractionOutcomes />
      <CustomerInteractionIndustries />
      <CustomerInteractionIntegrations />
      <CustomerInteractionWhy />
      <CustomerInteractionFAQ />
      <CustomerInteractionCTA />
    </main>
  );
};

export default CustomerInteractionSystems;
