import React from "react";
import DataHero from "../components/DataEngineeringAnalytics/DataHero";
import DataWhatWeDo from "../components/DataEngineeringAnalytics/DataWhatWeDo";
import DataWhatWeEngineer from "../components/DataEngineeringAnalytics/DataWhatWeEngineer";
import DataProblemsWeSolve from "../components/DataEngineeringAnalytics/DataProblemsWeSolve";
import DataMethod from "../components/DataEngineeringAnalytics/DataMethod";
import DataTechStack from "../components/DataEngineeringAnalytics/DataTechStack";
import DataIndustries from "../components/DataEngineeringAnalytics/DataIndustries";
import DataWhyRevoSolve from "../components/DataEngineeringAnalytics/DataWhyRevoSolve";
import DataFAQ from "../components/DataEngineeringAnalytics/DataFAQ";

const DataEngineeringAnalytics = () => {
  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <DataHero />
      <DataWhatWeDo />
      <DataProblemsWeSolve />
      <DataWhatWeEngineer />
      <DataMethod />
      <DataTechStack />
      <DataIndustries />
      <DataWhyRevoSolve />
      <DataFAQ />
    </div>
  );
};

export default DataEngineeringAnalytics;
