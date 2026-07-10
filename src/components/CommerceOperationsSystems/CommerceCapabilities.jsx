import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Receipt,
  ArrowsLeftRight,
  Truck,
  CloudArrowUp,
  ShoppingBag,
  Storefront,
  Database,
  ChatText
} from "@phosphor-icons/react";

const capabilitiesData = [
  {
    title: "Order Management System",
    icon: Receipt,
  },
  {
    title: "Multi-channel inventory synchronization",
    icon: ArrowsLeftRight,
  },
  {
    title: "Fulfillment and logistics management",
    icon: Truck,
  },
  {
    title: "Amazon FBA integration",
    icon: CloudArrowUp,
  },
  {
    title: "Shopify / WooCommerce integrations",
    icon: ShoppingBag,
  },
  {
    title: "Marketplace integrations",
    icon: Storefront,
  },
  {
    title: "Logistics & Backend integrations",
    icon: Database,
  },
  {
    title: "Customer communication",
    icon: ChatText,
  },
];

const CommerceCapabilities = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between pb-8">
          {/* Left Block */}
          <div className="flex flex-col items-start justify-start">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30 font-sans">
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
          {capabilitiesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(38, 40, 66, 1)",
                  borderColor: "rgba(99, 102, 241, 0.7)",
                }}
                style={{
                  backgroundColor: "rgba(29, 30, 50, 1)",
                  borderColor: "rgba(99, 102, 241, 0.3)",
                }}
                className="flex flex-col justify-start items-start p-8 h-[176px] w-full rounded-[8px] border-t-2 border-t-[#FCCA71]/80 border-x border-b cursor-pointer transition-all duration-300 relative group"
              >
                {/* Glow Highlight Effect */}
                <div className="absolute inset-0 bg-radial from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px]" />

                {/* Icon Container */}
                <div className="w-8 h-8 flex items-center justify-start text-[#FCCA71] mb-6 shrink-0 relative z-10">
                  <Icon size={26} className="text-[#FCCA71]" weight="light" />
                </div>

                {/* Title Container */}
                <div className="flex-1 flex flex-col justify-start items-start w-full relative z-10">
                  <div className="text-[#E7E6FC] text-[18px] font-semibold font-sans leading-[24px] text-left group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommerceCapabilities;
