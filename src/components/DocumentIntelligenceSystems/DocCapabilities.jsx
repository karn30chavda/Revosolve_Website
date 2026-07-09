import React from "react";
import { motion as Motion } from "framer-motion";

const capabilitiesData = [
  {
    title: "OCR & intelligent extraction",
    icon: "/DocumentIntelligenceSystems/capability_icon_1.svg",
  },
  {
    title: "Data validation systems",
    icon: "/DocumentIntelligenceSystems/capability_icon_2.svg",
  },
  {
    title: "KYC/KYB processing",
    icon: "/DocumentIntelligenceSystems/capability_icon_3.svg",
  },
  {
    title: "Workflow automation",
    icon: "/DocumentIntelligenceSystems/capability_icon_4.svg",
  },
  {
    title: "API & backend integrations",
    icon: "/DocumentIntelligenceSystems/capability_icon_5.svg",
  },
];

const DocCapabilities = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-10 lg:pt-16 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between  pb-8 gap-6">
          {/* Left Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            {/* Section Tag */}
            <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [capabilities]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-[28px] md:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Unlocking the Power of OCR
                </span>
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
                Transforming Text Recognition
              </h3>
            </div>
          </div>

          {/* Right Block */}
          <div className="w-full lg:w-[420px] shrink-0 opacity-60 text-[#FBFBFF] font-sans text-[14px] md:text-[15px] font-normal leading-relaxed text-left lg:mb-1">
            We build custom document intelligence systems that integrate OCR and deep learning models directly into your workflows, converting static documents into structured, actionable business data.
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 w-full">
          {capabilitiesData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(135, 123, 241, 0.12)",
                borderColor: "rgba(135, 123, 241, 0.7)",
              }}
              className="flex flex-col justify-between items-start p-5 lg:p-6 h-[136px] w-full bg-[#0F1034]/40 rounded-[8px] border border-[#5b62bf]/30 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Glow Highlight Effect */}
              <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="w-6 h-6 flex items-center justify-center shrink-0 relative z-10">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title Container */}
              <div className="w-full relative z-10 mt-auto">
                <div className="text-[#E7E6FC] text-[15px] md:text-[16px] font-semibold font-sans leading-[20px] text-left group-hover:text-white transition-colors duration-300">
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

export default DocCapabilities;
