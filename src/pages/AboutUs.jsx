import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import ADifferentBelief from "../components/AboutUs/ADifferentBelief";
import OurReasonToExist from "../components/AboutUs/OurReasonToExist";
import AboutTransformation from "../components/AboutUs/AboutTransformation";
import OurPhilosophy from "../components/AboutUs/OurPhilosophy";
import WhatWeEngineer from "../components/AboutUs/WhatWeEngineer";
import IndustriesMarquee from "../components/AboutUs/IndustriesMarquee";
import HowWeThinkAboutTransformation from "../components/AboutUs/HowWeThinkAboutTransformation";
import OutcomesOfConnectedOperations from "../components/AboutUs/OutcomesOfConnectedOperations";
import EngineeringPrinciples from "../components/AboutUs/EngineeringPrinciples";
import WhyOrganizationsChooseUs from "../components/AboutUs/WhyOrganizationsChooseUs";
import OurVision from "../components/AboutUs/OurVision";
import OurPromise from "../components/AboutUs/OurPromise";
import CompanySnapshot from "../components/AboutUs/CompanySnapshot";
import AboutCTA from "../components/AboutUs/FinalBrandStatement";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#01031c]">
      <AboutHero />
      <OurReasonToExist />
      <AboutTransformation />
      <ADifferentBelief />
      <OurPhilosophy />
      <WhatWeEngineer />
      <IndustriesMarquee />
      <HowWeThinkAboutTransformation />
      <OutcomesOfConnectedOperations />
      <EngineeringPrinciples />
      <WhyOrganizationsChooseUs />
      <OurVision />
      <OurPromise />
      <CompanySnapshot />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;
