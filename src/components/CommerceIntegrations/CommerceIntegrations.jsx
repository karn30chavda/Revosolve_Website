import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const tabsData = [
  {
    id: "marketplace",
    label: "Marketplace Integration",
    icon: "/Solution_page/marketplace.svg",
  },
  {
    id: "erp",
    label: "ERP Integration",
    icon: "/Solution_page/erp_integration.svg",
  },
  {
    id: "accounting",
    label: "Accounting Integration",
    icon: "/Solution_page/accounting.svg",
  },
  {
    id: "shipping",
    label: "Shipping Integration",
    icon: "/Solution_page/shipping.svg",
  },
];

const CommerceIntegrations = () => {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <section className="relative w-full bg-[#01031c] pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden font-sans">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-6">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [integrations]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-[#CACBDB] font-light xl:font-thin">Find More</span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                Customized Integrations
              </span>
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              with Revosolve
            </h3>
          </div>
        </div>

        {/* Tabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {tabsData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-row items-center gap-4 p-4 rounded-[8px] border cursor-pointer transition-all duration-300 w-full ${
                  isActive
                    ? "bg-[#5F5FFF] border-[#5F5FFF] text-[#FAFAFA] shadow-lg shadow-indigo-900/20"
                    : "bg-transparent border-white/10 text-[#FAFAFA]/70 hover:border-white/20 hover:bg-white/3"
                }`}
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isActive ? "bg-white/[0.13]" : "bg-white/5"
                  }`}
                >
                  <img
                    src={tab.icon}
                    alt=""
                    className={`w-5 h-5 object-contain transition-all duration-300 ${
                      isActive ? "brightness-200" : "opacity-80"
                    }`}
                  />
                </div>
                {/* Label */}
                <span className={`text-[18px] font-medium leading-[26px] font-sans text-left select-none transition-colors duration-300 ${
                  isActive ? "text-[#FAFAFA]" : "text-[#AAA9BE]"
                }`}>
                  {tab.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Integration Display Panel */}
        <div className="w-full mt-4 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center justify-center z-10"
            >
              <img
                src="/Solution_page/solution_integration.webp"
                alt="Integrations Diagram"
                className="w-full h-auto object-contain pointer-events-none select-none"
              />
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CommerceIntegrations;
