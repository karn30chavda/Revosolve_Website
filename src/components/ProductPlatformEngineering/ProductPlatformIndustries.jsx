import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Bank,
  CurrencyCircleDollar,
  ShoppingCart,
  Factory,
  Heartbeat,
  Cloud,
} from "@phosphor-icons/react";

const industriesData = [
  {
    title: "Government & Public Sector",
    desc: "Citizen platforms, digital services, and secure operational systems for public institutions.",
    icon: <Bank size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Banking & Financial Services",
    desc: "Secure, compliant platforms for onboarding, servicing, and financial operations.",
    icon: <CurrencyCircleDollar size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Retail & Commerce",
    desc: "Commerce platforms, order orchestration, and unified customer experiences.",
    icon: <ShoppingCart size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Manufacturing",
    desc: "Operational platforms for production, procurement, quality, and asset management.",
    icon: <Factory size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Healthcare",
    desc: "Secure, workflow-driven platforms for care operations and compliance.",
    icon: <Heartbeat size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise SaaS",
    desc: "Multi-tenant SaaS products engineered for scale, reliability, and continuous delivery.",
    icon: <Cloud size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const ProductPlatformIndustries = () => {
  return (
    <section 
      style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
      className="relative w-full py-16 lg:py-24 overflow-hidden z-20 font-sans scroll-mt-20"
    >
      {/* Decorative Glows */}
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-4">
          <div className="flex flex-col items-start min-w-fit">
            <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [industries we serve]
            </div>

            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="block font-black">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                  Platforms engineered
                </span>{" "}
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  across
                </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                complex industries
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-1">
            <p className="text-[#8F92B8] text-sm md:text-base font-normal leading-relaxed text-left opacity-90">
              Every industry operates differently — we engineer platforms around real operational workflows, not generic templates.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industriesData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(95, 95, 255, 1)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
              className="flex flex-row justify-start items-start p-6 min-h-[160px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden gap-5"
            >
              {/* Radial Glow on Hover */}
              <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start shrink-0 relative z-10">
                {item.icon}
              </div>

              {/* Text Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-2 relative z-10 text-left">
                <h4 className="text-[#E7E6FC] text-base md:text-[18px] font-semibold font-sans leading-snug group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#AAA9BE] text-[13px] md:text-[14px] font-normal font-sans leading-relaxed opacity-80 group-hover:text-[#CACBDB] transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPlatformIndustries;
