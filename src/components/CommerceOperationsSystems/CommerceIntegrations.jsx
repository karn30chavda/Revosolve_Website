import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const tabsData = [
  {
    id: "marketplace",
    label: "Marketplace Integration",
    icon: "/CommerceOperationsSystems/int_tab_marketplace.svg",
  },
  {
    id: "erp",
    label: "ERP/POS/Accounting",
    icon: "/CommerceOperationsSystems/int_tab_erp.svg",
  },
  {
    id: "shipping",
    label: "Shipping Integration",
    icon: "/CommerceOperationsSystems/int_tab_shipping.svg",
  },
];

const integrationsByTab = {
  marketplace: {
    left: [
      { src: "/CommerceOperationsSystems/int_shopify.svg", name: "Shopify", short: "SF" },
      { src: "/CommerceOperationsSystems/int_amazon.svg", name: "Amazon", short: "AMZ" },
      { src: "/CommerceOperationsSystems/int_flipkart.svg", name: "Flipkart", short: "FK" },
    ],
    right: [
      { src: "/CommerceOperationsSystems/int_woocommerce.svg", name: "WooCommerce", short: "WC" },
      { src: "/CommerceOperationsSystems/int_meesho.svg", name: "Meesho", short: "MS" },
      { src: "/CommerceOperationsSystems/int_myntra.svg", name: "Myntra", short: "MY" },
    ],
  },
  erp: {
    left: [
      { src: "/CommerceOperationsSystems/int_urban.webp", name: "Urban Piper", short: "UP" },
      { src: "/CommerceOperationsSystems/int_sap.webp", name: "SAP ERP", short: "SAP" },
    ],
    right: [
      { src: "/CommerceOperationsSystems/int_tally_prime.jpg", name: "Tally Prime", short: "TLY", isLarge: true },
      { src: "/CommerceOperationsSystems/int_tally.webp", name: "Tally ERP", short: "TLY" },
    ],
  },
  shipping: {
    left: [
      { src: "/CommerceOperationsSystems/int_shiprocket.webp", name: "Shiprocket", short: "SR" },
      { src: "/CommerceOperationsSystems/int_fedex.svg", name: "FedEx", short: "FD" },
      { src: "/CommerceOperationsSystems/int_ups.webp", name: "UPS", short: "UPS" },
    ],
    right: [
      { src: "/CommerceOperationsSystems/int_delhivery.svg", name: "Delhivery", short: "DLV" },
      { src: "/CommerceOperationsSystems/int_ekart.svg", name: "Ekart", short: "EKT" },
      { src: "/CommerceOperationsSystems/int_eshipz.png", name: "Eshipz", short: "ESZ" },
    ],
  },
};

const IntegrationIconCard = ({ item }) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Reset fail state when item source changes (on tab switch)
  React.useEffect(() => {
    setImgFailed(false);
  }, [item.src]);

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center relative transition-all duration-300 hover:scale-110 shadow-lg overflow-hidden group">
      {!imgFailed ? (
        <img
          src={item.src}
          alt={item.name}
          onError={() => setImgFailed(true)}
          className={
            item.isLarge
              ? "w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] object-contain"
              : item.name.toLowerCase() === "flipkart"
              ? "w-6 h-6 sm:w-8 sm:h-8 object-contain"
              : "w-10 h-10 sm:w-12 sm:h-12 object-contain"
          }
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-tr from-[#161858] to-[#4446D8] text-white font-bold text-xs sm:text-xs select-none p-1 text-center leading-tight">
          {item.short}
        </div>
      )}
    </div>
  );
};

const CommerceIntegrations = () => {
  const [activeTab, setActiveTab] = useState("marketplace");

  const currentLeftIcons = integrationsByTab[activeTab]?.left || [];
  const currentRightIcons = integrationsByTab[activeTab]?.right || [];

  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden font-sans">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
                    isActive ? "bg-white/13" : "bg-white/5"
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
                <span className={`text-[15px] font-medium leading-[22px] font-sans text-left select-none transition-colors duration-300 ${
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
              className="w-full min-h-[256px] z-10 py-12 rounded-[20px] relative overflow-hidden flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(225deg, #0F1034 24.88%, #161858 187.87%)",
              }}
            >
              {/* Background Blue Glow from design */}
              <div className="w-[685px] h-60 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20 bg-blue-700 rounded-full blur-[87px] pointer-events-none" />

              {/* Desktop View (Single centered row of 7 items with equal spacing) */}
              <div className="hidden lg:flex flex-row items-center justify-between px-16 xl:px-24 w-full relative z-10">
                {currentLeftIcons[0] && <IntegrationIconCard item={currentLeftIcons[0]} />}
                {currentLeftIcons[1] && <IntegrationIconCard item={currentLeftIcons[1]} />}
                {currentLeftIcons[2] && <IntegrationIconCard item={currentLeftIcons[2]} />}

                {/* Center ERP Circle */}
                <div className="relative flex items-center justify-center shrink-0">
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 ring-2 ring-[#877BF1]/30 shadow-[0_0_20px_rgba(135,123,241,0.2)] ${
                      activeTab === "erp" ? "scale-105" : "hover:scale-105"
                    }`}
                  >
                    <img
                      src="/CommerceOperationsSystems/int_erp_center.svg"
                      alt="ERPNext Center Logo"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                </div>

                {currentRightIcons[0] && <IntegrationIconCard item={currentRightIcons[0]} />}
                {currentRightIcons[1] && <IntegrationIconCard item={currentRightIcons[1]} />}
                {currentRightIcons[2] && <IntegrationIconCard item={currentRightIcons[2]} />}
              </div>

              {/* Mobile / Tablet View */}
              <div className="flex lg:hidden flex-col items-center justify-center gap-y-6 px-6 sm:px-12 w-full relative z-10">
                {/* Left Row */}
                <div className="flex flex-row justify-evenly items-center w-full">
                  {currentLeftIcons.map((item, idx) => (
                    <IntegrationIconCard key={idx} item={item} />
                  ))}
                </div>

                {/* Center ERP Circle */}
                <div className="relative flex items-center justify-center shrink-0">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 ring-2 ring-[#877BF1]/30 shadow-[0_0_20px_rgba(135,123,241,0.2)]">
                    <img
                      src="/CommerceOperationsSystems/int_erp_center.svg"
                      alt="ERPNext Center Logo"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                </div>

                {/* Right Row */}
                <div className="flex flex-row justify-evenly items-center w-full">
                  {currentRightIcons.map((item, idx) => (
                    <IntegrationIconCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CommerceIntegrations;
