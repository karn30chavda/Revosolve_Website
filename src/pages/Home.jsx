import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomeMarquee from "../components/Home/HomeMarquee";
import HomeProblemsWeSolve from "../components/Home/HomeProblemsWeSolve";
import HomeIntelligentSolutions from "../components/Home/HomeIntelligentSolutions";
import HomeCaseStudies from "../components/Home/HomeCaseStudies";
import HomeWhyUs from "../components/Home/HomeWhyUs";
import HomeCallToAction from "../components/Home/HomeCallToAction";

const Home = () => {
  return (
    <>
      <div className="relative z-0">
        <HomeHero />
      </div>

      <div className="relative z-30">
        {/* Unified Atmospheric Layer - Zigzag Glows without Seams */}
        <div className="relative w-full bg-bg-primary">
          {/* Ambient Glows Layer - Rhythmic zigzag across sections */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 15% 10%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 85% 45%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 15% 85%, rgba(25, 26, 62, 0.9) 0%, transparent 45%)
              `,
            }}
          />

          {/* Shared Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-0 left-0 w-full h-[869px]">
              <img
                src="/Home/problems_bg_pattern.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative z-10">
            <HomeMarquee />
            <HomeProblemsWeSolve />
            <HomeIntelligentSolutions />
            <HomeCaseStudies />
            <HomeWhyUs />
            <HomeCallToAction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
