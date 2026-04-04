import React from "react";
import { Link } from "react-router-dom";

const footerData = {
  services: [
    "Application Development",
    "Cloud & DevOps",
    "AI Solutions",
    "Technology Consulting",
    "UX & UI Solutions",
    "QA and Continuous Testing",
    "No Code Low Code",
  ],
  solutions: ["KYC Verification", "Document OCR", "Smart Surveillance"],
  products: ["RevoDox", "AI Surveillance"],
  company: ["About", "Careers", "Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 flex flex-col gap-12 items-center justify-center relative w-full overflow-hidden self-stretch"
      style={{
        background: "linear-gradient(0.99deg, rgba(29, 31, 76, 1) 0%, rgba(5, 7, 55, 1) 100%)",
        fontFamily: "'Blauer Nue'"
      }}
    >
      {/* 1. MAIN CONTENT AREA - NO VERTICAL DIVIDERS */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[80%] relative z-20">
        
        {/* Brand Information - Open layout */}
        <div className="flex flex-col gap-6 items-start justify-start w-full md:w-[20rem] relative">
          <div className="flex items-center relative h-12">
            <img
              src="/navbar/Revosolve_logo.svg"
              alt="RevoSolve"
              className="h-9 md:h-12 object-contain"
            />
          </div>
          <div className="self-stretch relative z-10">
            <p
              className="text-[#99A1AF] text-left font-normal text-[1rem] leading-[1.42188rem] w-64.5 max-w-full"
              style={{ letterSpacing: "-0.00938rem", opacity: 0.6 }}
            >
              Revolutionary solutions, ethically engineered for the future of
              digital transformation.
            </p>
          </div>
        </div>

        {/* Navigation Mapping */}
        <div className="flex-2 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 w-full md:pl-20">
            
            {/* Services Column */}
            <div className="flex flex-col gap-6 items-start md:items-end relative">
                <span
                    className="text-white text-left md:text-right font-thin text-[1.125rem] leading-7"
                    style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
                >
                    Services
                </span>
                <div className="flex flex-col gap-3 items-start md:items-end justify-start self-stretch relative">
                    {footerData.services.map((item, idx) => (
                    <Link
                        key={idx}
                        to="/coming-soon"
                        className="text-white text-left md:text-right font-normal text-[0.875rem] leading-5 hover:text-lavender transition-all"
                        style={{ letterSpacing: "-0.00938rem" }}
                    >
                        {item}
                    </Link>
                    ))}
                </div>
            </div>

            {/* Solutions & Products Column */}
            <div className="flex flex-col gap-10 items-start md:items-end">
                <div className="flex flex-col gap-6 items-start md:items-end w-full">
                    <span
                        className="text-white text-left md:text-right font-thin text-[1.125rem] leading-7"
                        style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
                    >
                        Solutions
                    </span>
                    <div className="flex flex-col gap-3 items-start md:items-end w-full">
                    {footerData.solutions.map((item, idx) => (
                        <Link
                            key={idx}
                            to="/coming-soon"
                            className="text-white text-left md:text-right font-normal text-[0.875rem] leading-5 hover:text-lavender transition-all"
                            style={{ letterSpacing: "-0.00938rem" }}
                        >
                            {item}
                        </Link>
                    ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-start md:items-end w-full">
                    <span
                        className="text-white text-left md:text-right font-thin text-[1.125rem] leading-7"
                        style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
                    >
                        Products
                    </span>
                    <div className="flex flex-col gap-3 items-start md:items-end w-full">
                    {footerData.products.map((item, idx) => (
                        <Link
                            key={idx}
                            to="/coming-soon"
                            className="text-white text-left md:text-right font-normal text-[0.875rem] leading-5 hover:text-lavender transition-all"
                            style={{ letterSpacing: "-0.00938rem" }}
                        >
                            {item}
                        </Link>
                    ))}
                    </div>
                </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6 items-start md:items-end relative">
                <span
                    className="text-white text-left md:text-right font-thin text-[1.125rem] leading-7"
                    style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
                >
                    Company
                </span>
                <div className="flex flex-col gap-3 items-start md:items-end justify-start self-stretch relative">
                    {footerData.company.map((item, idx) => {
                      // Special case for Contact page which exists
                      const to = item === "Contact" ? "/connect" : "/coming-soon";
                      return (
                        <Link
                            key={idx}
                            to={to}
                            className="text-white text-left md:text-right font-normal text-[0.875rem] leading-5 hover:text-lavender transition-all"
                            style={{ letterSpacing: "-0.00938rem" }}
                        >
                            {item}
                        </Link>
                      );
                    })}
                </div>
            </div>
        </div>
      </div>

      {/* 2. SHARED HORIZONTAL LINE WITH CORNER PATTERN OVERLAY */}
      <div className="w-full max-w-[80%] relative">
        <div className="h-[2px] w-full bg-white opacity-10" />
        
        {/* Pattern sitting directly on the far-left of this line */}
        <img 
            src="/footer/left_pattern.svg" 
            alt="" 
            className="absolute bottom-0 left-[-4px] md:-left-6 w-44 md:w-60 h-auto opacity-30 pointer-events-none z-10"
        />
      </div>

      {/* 3. COPYRIGHT BAR BOTTOM */}
      <div className="flex flex-row items-center justify-between w-full max-w-[80%] relative z-30">
        <div
          className="text-[#99A1AF] text-left font-normal text-[0.875rem] leading-5 relative"
          style={{ letterSpacing: "-0.00938rem" }}
        >
          © 2026 Revosolve Pvt Ltd. All rights reserved.
        </div>
        <div
          className="text-[#99A1AF] text-left font-normal text-[0.875rem] leading-5 relative"
          style={{ letterSpacing: "-0.00938rem", opacity: 0.5 }}
        >
          sales@revosolve.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
