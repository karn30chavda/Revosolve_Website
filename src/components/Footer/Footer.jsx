import React from "react";
import { Link } from "react-router-dom";

const footerData = {
  services: [
    "Enterprise Application Systems",
    "Product & Platform Engineering",
    "Legacy Transformation Systems",
    "Open Source & ERP Systems",
    "QA and Test Automation",
    "AI & Intelligent Systems",
    "Cloud and Devops",
    "Data Engineering & Analytics",
  ],
  solutions: [
    "Document Intelligence Systems",
    "Customer Interaction Systems",
    "Commerce Operations Systems",
    "Simulation & Digital Twin Systems",
    "AI Surveillance Systems",
    "Public Infrastructure Operations",
    "Defense & Training Systems",
  ],
  products: ["RevoDox", "RevoVision"],
  company: ["About", "Careers", "Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer
      className="py-10 md:py-12 px-4 md:px-6 flex flex-col gap-10 md:gap-12 items-center justify-center relative w-full overflow-hidden self-stretch"
      style={{
        background:
          "linear-gradient(0.99deg, rgba(29, 31, 76, 1) 0%, rgba(5, 7, 55, 1) 100%)",
        fontFamily: "'Blauer Nue'",
      }}
    >
      {/* 1. MAIN CONTENT AREA - NO VERTICAL DIVIDERS */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-start justify-between w-[85%] md:w-[85%] relative z-20">
        {/* Brand Information - Open layout */}
        <div className="flex flex-col gap-6 items-start justify-start w-full md:w-[20rem] relative">
          <div className="flex items-center relative h-12">
            <img
              src="/navbar/Revosolve_logo.webp"
              alt="RevoSolve"
              className="h-9 md:h-12 object-contain"
            />
          </div>
          <div className="self-stretch relative z-10">
            <p
              className="text-[#99A1AF] text-left font-normal text-[14px] leading-relaxed w-64.5 max-w-full"
              style={{ letterSpacing: "-0.00938rem", opacity: 0.6 }}
            >
              Revolutionary solutions, ethically engineered for the future of
              digital transformation.
            </p>
          </div>
        </div>

        {/* Navigation Mapping */}
        <div className="flex-2 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-4 w-full md:pl-20">
          {/* Services Column */}
          <div className="flex flex-col gap-6 items-start md:items-end relative">
            <span
              className="text-white text-left md:text-right font-thin text-[14px] leading-7"
              style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
            >
              Services
            </span>
            <div className="flex flex-col gap-3 items-start md:items-end justify-start self-stretch relative">
              {footerData.services.map((item, idx) => (
                <Link
                  key={idx}
                  to={
                    item === "Open Source & ERP Systems"
                      ? "/services/open-source-erp-systems"
                      : item === "Enterprise Application Systems"
                        ? "/services/enterprise-application-systems"
                      : item === "Cloud and Devops"
                        ? "/services/cloud-and-devops"
                      : item === "AI & Intelligent Systems"
                        ? "/services/ai-intelligent-systems"
                        : item === "Data Engineering & Analytics"
                          ? "/services/data-engineering-analytics"
                          : "/coming-soon"
                  }
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
                className="text-white text-left md:text-right font-thin text-[14px] leading-7"
                style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
              >
                Solutions
              </span>
              <div className="flex flex-col gap-3 items-start md:items-end w-full">
                {footerData.solutions.map((item, idx) => (
                  <Link
                    key={idx}
                    to={
                      item === "Commerce Operations Systems"
                        ? "/solutions/commerce-operations-systems"
                        : item === "Document Intelligence Systems"
                          ? "/solutions/document-intelligence-systems"
                          : item === "Customer Interaction Systems"
                            ? "/solutions/customer-interaction-systems"
                            : item === "Defense & Training Systems"
                              ? "/solutions/defense-simulation-training-systems"
                            : item === "AI Surveillance Systems"
                              ? "/solutions/ai-surveillance-systems"
                              : item === "Simulation & Digital Twin Systems"
                                ? "/solutions/simulation-digital-twin-systems"
                                : "/coming-soon"
                    }
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
                className="text-white text-left md:text-right font-thin text-[14px] leading-7"
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
              className="text-white text-left md:text-right font-thin text-[14px] leading-7"
              style={{ letterSpacing: "-0.02744rem", opacity: 0.64 }}
            >
              Company
            </span>
            <div className="flex flex-col gap-3 items-start md:items-end justify-start self-stretch relative">
              {footerData.company.map((item, idx) => {
                // Special cases for existing pages
                const to =
                  item === "Contact"
                    ? "/connect"
                    : item === "Careers"
                      ? "/careers"
                      : "/coming-soon";
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
      <div className="w-full relative mt-2 md:mt-4">
        {/* Horizontal Line - Desktop Only */}
        <div className="hidden md:block h-[2px] w-full bg-white opacity-10" />

        {/* Box/Line Pattern - Desktop Only (Original view) */}
        <img
          src="/footer/left_pattern.svg"
          alt="Pattern overlay"
          className="hidden md:block absolute bottom-0 left-[-24px] w-60 h-auto opacity-90 pointer-events-none z-10"
        />
      </div>

      {/* Box/Line Pattern - Mobile Only (True bottom viewport) */}
      <img
        src="/footer/left_pattern.svg"
        alt="Pattern overlay"
        className="md:hidden absolute bottom-0 left-[-4px] w-96 h-auto opacity-90 pointer-events-none z-10"
      />

      {/* 3. COPYRIGHT BAR BOTTOM - Desktop */}
      <div className="hidden md:flex flex-row gap-0 items-end justify-between w-[80%] relative z-30 pb-0 pt-0 text-left">
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

      {/* 3. COPYRIGHT BAR BOTTOM - Mobile */}
      <div className="flex md:hidden flex-col gap-4 items-center justify-center w-[90%] relative z-30 pb-4 pt-4 text-center">
        <div
          className="text-[#99A1AF] font-normal text-[0.875rem] leading-5 relative"
          style={{ letterSpacing: "-0.00938rem" }}
        >
          © 2026 Revosolve Pvt Ltd. All rights reserved.
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <Link
            to="/coming-soon"
            className="text-[#99A1AF] font-normal text-[0.875rem] leading-5 hover:text-white transition-colors"
            style={{ letterSpacing: "-0.00938rem", opacity: 0.7 }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/coming-soon"
            className="text-[#99A1AF] font-normal text-[0.875rem] leading-5 hover:text-white transition-colors"
            style={{ letterSpacing: "-0.00938rem", opacity: 0.7 }}
          >
            Terms
          </Link>
          <Link
            to="/coming-soon"
            className="text-[#99A1AF] font-normal text-[0.875rem] leading-5 hover:text-white transition-colors"
            style={{ letterSpacing: "-0.00938rem", opacity: 0.7 }}
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
