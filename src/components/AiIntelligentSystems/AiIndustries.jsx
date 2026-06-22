import React from "react";
import { motion as Motion } from "framer-motion";

const industryData = [
  {
    title: "Government",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 12c-2.7 0-5.8 1.28-6 2v1h12v-1c-.2-.72-3.3-2-6-2z" />
      </svg>
    ),
  },
  {
    title: "Banking & Financial Services",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v2h20V7L12 2zM4 10v9h3v-9H4zm5 0v9h3v-9H9zm5 0v9h3v-9h-3zm5 0v9h3v-9h-3zM2 20v2h20v-2H2z" />
      </svg>
    ),
  },
  {
    title: "Retail & Commerce",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M0 20V7.975L7 5V7L12 5V8H20V20H0ZM2 18H18V10H10V7.95L5 9.95V8L2 9.325V18ZM9 16H11V12H9V16ZM5 16H7V12H5V16ZM13 16H15V12H13V16ZM20 8H15L16 0H19L20 8ZM2 18H5H10H18H2Z" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 16 20" fill="currentColor">
        <path d="M6.5 13.5H9.5V11H12V8H9.5V5.5H6.5V8H4V11H6.5V13.5ZM8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9Z" />
      </svg>
    ),
  },
  {
    title: "Enterprise SaaS",
    icon: (
      <svg className="w-6 h-6 text-[#FCCA71]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
];

const AiIndustries = () => {
  return (
    <section 
      style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
      className="relative w-full pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden z-20 font-sans"
    >
      {/* Background Glows */}
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-4">
          {/* Section Tag */}
          <div className="text-white text-[14px] md:text-[18px] font-normal uppercase tracking-[0.264px] opacity-30 mb-2">
            [industries]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent inline-block">
              The Global Industry
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1 opacity-70">
              Intelligence for mission-critical sectors.
            </h3>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {industryData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(95, 95, 255, 1)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 1)" }}
              className="flex flex-row lg:flex-col justify-start lg:justify-between items-center lg:items-start p-6 min-h-[70px] lg:min-h-[140px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden gap-4 lg:gap-0"
            >
              {/* Radial Glow on Hover */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start shrink-0 relative z-10">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-[#E7E6FC] text-sm md:text-base font-semibold font-sans leading-snug text-left group-hover:text-white transition-colors duration-300 relative z-10 mt-0 lg:mt-4">
                {item.title}
              </h4>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiIndustries;
