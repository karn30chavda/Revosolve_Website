import React from "react";
import { motion as Motion } from "framer-motion";

const capabilitiesData = [
  {
    title: "Order Management System",
    icon: "/Solution_page/capability_1_5.svg",
  },
  {
    title: "Multi-channel inventory synchronization",
    icon: "/Solution_page/capability_2_6.svg",
  },
  {
    title: "Fulfillment and logistics management",
    icon: "/Solution_page/capability_3_7.svg",
  },
  {
    title: "Amazon FBA integration",
    icon: "/Solution_page/capability_4_8.svg",
  },
  {
    title: "Shopify / WooCommerce integrations",
    icon: "/Solution_page/capability_1_5.svg",
  },
  {
    title: "Marketplace integrations",
    icon: "/Solution_page/capability_2_6.svg",
  },
  {
    title: "Logistics & Backend integrations",
    icon: "/Solution_page/capability_3_7.svg",
  },
  {
    title: "Customer communication",
    icon: "/Solution_page/capability_4_8.svg",
  },
];

const CommerceCapabilities = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between pb-8">
          {/* Left Block */}
          <div className="flex flex-col items-start justify-start">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [capabilities]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Core Capabilities
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  Operational
                </span>
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
                Friction
              </h3>
            </div>
          </div>

          {/* Right Block */}
          <div className="w-full lg:w-[360px] shrink-0 opacity-60 text-[#FBFBFF] font-sans text-[14px] font-normal leading-normal text-left lg:mb-2 lg:mr-24">
            This service is about embedding intelligence directly into your
            technology infrastructure so your systems don't just execute tasks,
            they continuously learn, optimize, and improve.
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {capabilitiesData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(167, 139, 250, 0.15)",
                borderColor: "rgba(99, 102, 241, 0.9)",
              }}
              className="flex flex-col justify-start items-start p-8 h-[176px] w-full bg-violet-400/10 rounded-[5px] border border-indigo-500/60 cursor-pointer transition-all duration-300 relative group"
            >
              {/* Glow Highlight Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px]" />

              {/* Icon Container */}
              <div className="w-7 h-6 flex items-center justify-center mb-8 shrink-0 relative z-10">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title Container */}
              <div className="flex-1 flex flex-col justify-start items-start w-full relative z-10">
                <div className="text-[#E7E6FC] text-[18px] font-semibold font-sans leading-[24px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommerceCapabilities;
