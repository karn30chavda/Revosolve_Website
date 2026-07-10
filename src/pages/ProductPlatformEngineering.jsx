import React from "react";
import ProductPlatformEngineeringHero from "../components/ProductPlatformEngineering/ProductPlatformEngineeringHero";
import ProductPlatformWhatWeDo from "../components/ProductPlatformEngineering/ProductPlatformWhatWeDo";
import ProductPlatformProblems from "../components/ProductPlatformEngineering/ProductPlatformProblems";
import ProductPlatformWhatWeEngineer from "../components/ProductPlatformEngineering/ProductPlatformWhatWeEngineer";
import ProductPlatformMethod from "../components/ProductPlatformEngineering/ProductPlatformMethod";
import ProductPlatformTechStack from "../components/ProductPlatformEngineering/ProductPlatformTechStack";
import ProductPlatformIndustries from "../components/ProductPlatformEngineering/ProductPlatformIndustries";
import ProductPlatformWhyRevoSolve from "../components/ProductPlatformEngineering/ProductPlatformWhyRevoSolve";
import ProductPlatformComparison from "../components/ProductPlatformEngineering/ProductPlatformComparison";
import ProductPlatformFAQ from "../components/ProductPlatformEngineering/ProductPlatformFAQ";
import ProductPlatformCTA from "../components/ProductPlatformEngineering/ProductPlatformCTA";

const ProductPlatformEngineering = () => {
  const scrollToWhatWeDo = () => {
    const target = document.getElementById("do");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 30
        : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#01031c] relative overflow-x-hidden">
      <ProductPlatformEngineeringHero scrollToNextSection={scrollToWhatWeDo} />
      <ProductPlatformWhatWeDo />
      <ProductPlatformProblems />
      <ProductPlatformWhatWeEngineer />
      <ProductPlatformMethod />
      <ProductPlatformTechStack />
      <ProductPlatformIndustries />
      <ProductPlatformWhyRevoSolve />
      <ProductPlatformComparison />
      <ProductPlatformFAQ />
      <ProductPlatformCTA />
    </div>
  );
};

export default ProductPlatformEngineering;
