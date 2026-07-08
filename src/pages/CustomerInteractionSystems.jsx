import React from "react";
import CustomerInteractionHero from "../components/CustomerInteractionHero/CustomerInteractionHero";
import CustomerInteractionChallenge from "../components/CustomerInteractionChallenge/CustomerInteractionChallenge";
import CustomerInteractionSystem from "../components/CustomerInteractionSystem/CustomerInteractionSystem";
import CustomerInteractionCapabilities from "../components/CustomerInteractionCapabilities/CustomerInteractionCapabilities";
import CustomerInteractionApproach from "../components/CustomerInteractionApproach/CustomerInteractionApproach";
import CustomerInteractionOutcomes from "../components/CustomerInteractionOutcomes/CustomerInteractionOutcomes";
import CustomerInteractionIndustries from "../components/CustomerInteractionIndustries/CustomerInteractionIndustries";
import CustomerInteractionIntegrations from "../components/CustomerInteractionIntegrations/CustomerInteractionIntegrations";
import CustomerInteractionWhy from "../components/CustomerInteractionWhy/CustomerInteractionWhy";
import CustomerInteractionFAQ from "../components/CustomerInteractionFAQ/CustomerInteractionFAQ";

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
    </main>
  );
};

export default CustomerInteractionSystems;
