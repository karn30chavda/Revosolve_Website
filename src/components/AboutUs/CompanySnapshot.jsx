import React from "react";

export const CompanySnapshot = () => {
  return (
    <section
      className="relative w-full py-16 md:py-24 font-sans bg-[#01031c] overflow-hidden"
      data-testid="section-snapshot"
    >
      <div className="w-[85%] max-w-7xl mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Header Block */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
            [company snapshot]
          </div>

          <h2 className="text-[28px] md:text-[38px] xl:text-[44px] leading-tight tracking-tight text-left font-sans">
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              A technology consulting and{" "}
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin">
              engineering company.
            </span>
          </h2>
        </div>

        {/* Narrative Copy: 2 Column Grid Below Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#CACBDB] text-base md:text-lg font-light leading-relaxed pt-2">
          <p>
            RevoSolve specializes in Operational Systems Engineering, Enterprise Software Development, Artificial Intelligence, Business Process Automation, ERPNext & Frappe Solutions, Cloud & DevOps, Data Engineering, and Digital Transformation.
          </p>
          <p>
            We partner with governments, enterprises, and high-growth businesses to engineer intelligent operational systems that improve efficiency, visibility, governance, and long-term performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanySnapshot;
