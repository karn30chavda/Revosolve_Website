import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CareerHero from "../components/CareerHero/CareerHero";
import WhyJoin from "../components/WhyJoin/WhyJoin";
import SupportingYou from "../components/SupportingYou/SupportingYou";
// import Openings from "../components/Openings/Openings";
import CareerCTA from "../components/CareerCTA/CareerCTA";

const Careers = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on mount
    window.scrollTo(0, 0);
  }, [location.key]);

  const scrollToOpenings = () => {
    document
      .getElementById("why-join-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start relative overflow-hidden font-sans"
      style={{
        background: "#01031c",
      }}
    >
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFAA00]/5 opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Careers Hero Section */}
      <CareerHero scrollToOpenings={scrollToOpenings} />
      <WhyJoin />
      <SupportingYou />
      {/* <Openings /> */}
      <CareerCTA />

    </div>
  );
};

export default Careers;
