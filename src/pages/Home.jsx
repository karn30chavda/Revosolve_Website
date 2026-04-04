import React from "react";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import ProblemsWeSolve from "../components/ProblemsWeSolve/ProblemsWeSolve";
import IntelligentSolutions from "../components/IntelligentSolutions/IntelligentSolutions";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import WhyUs from "../components/WhyUs/WhyUs";
import CallToAction from "../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <>
      <div className="relative z-0">
        <Hero />
      </div>

      <div className="relative z-30">
        {/* Unified Atmospheric Layer - Zigzag Glows without Seams */}
        <div className="relative w-full overflow-hidden bg-bg-primary">
          
          {/* Ambient Glows Layer - Rhythmic zigzag across sections */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 15% 10%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 85% 45%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 15% 85%, rgba(25, 26, 62, 0.9) 0%, transparent 45%)
              `
            }}
          />

          {/* Shared Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-[15%] -translate-x-1/2 w-[2351px] h-[869px]">
                <img src="/home_section_3/bg_pattern.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="relative z-10">
            <Marquee />
            <ProblemsWeSolve />
            <IntelligentSolutions />
            <CaseStudies />
            <WhyUs />
            <CallToAction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
