import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CareerHero from "../components/Careers/CareerHero";
import CareerWhyJoin from "../components/Careers/CareerWhyJoin";
import CareerSupportingYou from "../components/Careers/CareerSupportingYou";
// import CareerOpenings from "../components/Careers/CareerOpenings";
import CareerCTA from "../components/Careers/CareerCTA";

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
      <CareerWhyJoin />
      <CareerSupportingYou />
      {/* <CareerOpenings /> */}
      <CareerCTA />

    </div>
  );
};

export default Careers;
