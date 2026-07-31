import React from "react";
import MarketplaceHero from "../components/MarketplaceCaseStudy/MarketplaceHero";
import MarketplaceFragmentedStack from "../components/MarketplaceCaseStudy/MarketplaceFragmentedStack";
import MarketplaceTurningPoint from "../components/MarketplaceCaseStudy/MarketplaceTurningPoint";
import MarketplaceMethod from "../components/MarketplaceCaseStudy/MarketplaceMethod";
import MarketplaceJourney from "../components/MarketplaceCaseStudy/MarketplaceJourney";
import MarketplaceBeforeAfter from "../components/MarketplaceCaseStudy/MarketplaceBeforeAfter";
import MarketplaceMarquee from "../components/MarketplaceCaseStudy/MarketplaceMarquee";
import MarketplaceImpact from "../components/MarketplaceCaseStudy/MarketplaceImpact";
import MarketplaceTechStack from "../components/MarketplaceCaseStudy/MarketplaceTechStack";
import MarketplaceFAQ from "../components/MarketplaceCaseStudy/MarketplaceFAQ";
import MarketplaceCTA from "../components/MarketplaceCaseStudy/MarketplaceCTA";

const MarketplaceCaseStudy = () => {
  return (
    <main className="w-full min-h-screen bg-[#01031c] text-white relative overflow-x-clip">
      <MarketplaceHero />

      <div id="solutions-content" className="relative w-full z-10">
        {/* Ambient dual-tone light behind the scrolling content */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-clip">
          <div className="absolute left-[-14%] top-[6%] h-[60vw] w-[60vw] rounded-full bg-accent/10 blur-[140px]" />
          <div className="absolute bottom-[12%] right-[-16%] h-[62vw] w-[62vw] rounded-full bg-[#FCCA71]/[0.07] blur-[140px]" />
        </div>

        <div className="relative z-10">
          <MarketplaceFragmentedStack />
          <MarketplaceTurningPoint />
          <MarketplaceMethod />
          <MarketplaceJourney />
          <MarketplaceBeforeAfter />
          <MarketplaceMarquee />
          <MarketplaceImpact />
          <MarketplaceTechStack />
          <MarketplaceFAQ />
          <MarketplaceCTA />
        </div>
      </div>
    </main>
  );
};

export default MarketplaceCaseStudy;
