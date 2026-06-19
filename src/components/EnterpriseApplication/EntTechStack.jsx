import React from "react";
import { motion as Motion } from "framer-motion";

const techItems = [
  {
    name: ".NET",
    logoSrc: "/EnterpriceApplication_System/Microsoft_.NET_logo.svg",
    lighten: true,
  },
  {
    name: "Java",
    logoSrc: "/EnterpriceApplication_System/java.svg",
    zoom: true,
    lighten: true,
  },
  {
    name: "Python",
    logoSrc: "/EnterpriceApplication_System/python.svg",
    zoom: true,
    lighten: true,
  },
  {
    name: "Node.js",
    logoSrc: "/EnterpriceApplication_System/nodejs.svg",
    zoom: true,
    lighten: true,
  },
  {
    name: "React",
    logoSrc: "/EnterpriceApplication_System/reactjs.svg",
    zoom: true,
  },
  {
    name: "Next.js",
    logoSrc: "/EnterpriceApplication_System/nextjs.svg",
    zoom: true,
    lighten: true,
  },
  {
    name: "Angular",
    logoSrc: "/EnterpriceApplication_System/angular.svg",
    zoom: true,
  },
  {
    name: "PostgreSQL",
    logoSrc: "/EnterpriceApplication_System/postgresql.svg",
    lighten: true,
  },
  {
    name: "MySQL",
    logoSrc: "/EnterpriceApplication_System/mysql.svg",
  },
  {
    name: "FastAPI",
    logoSrc: "/EnterpriceApplication_System/fastapi.svg",
    shrink: true,
  },
  {
    name: "REST APIs",
    logoSrc: "/EnterpriceApplication_System/rest-api-icon.svg",
    lighten: true,
  },
  {
    name: "Microservices",
    logoSrc: "/EnterpriceApplication_System/microservices.png",
    lighten: true,
  },
];

const EntTechStack = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-4 pb-12 md:pt-8 md:pb-16 overflow-hidden z-20">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-center justify-start font-sans">
        
        {/* Centered Header Content */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          {/* Section Tag */}
          <div className="text-white text-[14px] md:text-[18px] font-normal uppercase tracking-[0.264px] opacity-30 mb-3">
            [tools]
          </div>

          {/* Heading Block */}
          <h2 className="text-2xl md:text-4xl xl:text-[40px] font-black leading-tight tracking-[0.264px]">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                The Intelligent Stack
            </span>
          </h2>
          <h3 className="text-[#CACBDB] text-lg md:text-xl xl:text-[22px] font-light mt-3 opacity-70 max-w-2xl leading-normal">
            The Infrastructure Behind Intelligent Performance
          </h3>
        </div>

        {/* Grid of Tech Cards (sitting directly on the section background) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 w-full relative z-10">
          {techItems.map((item, idx) => {
            const isMicroservices = item.name === "Microservices";
            return (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(39, 41, 69, 1)",
                  borderColor: "rgba(95, 95, 255, 1)"
                }}
                style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
                className={`flex items-center justify-center rounded-xl border-2 cursor-pointer transition-all duration-300 min-h-[64px] md:min-h-[76px] ${
                  isMicroservices 
                    ? "flex-row gap-2 sm:gap-2.5 p-2 sm:p-3" 
                    : "flex-col p-2.5 sm:p-3"
                }`}
              >
                <img 
                  src={item.logoSrc} 
                  alt={item.name} 
                  style={{ 
                    transform: item.shrink ? "scale(0.65)" : (item.zoom ? "scale(1.35)" : "none"),
                    filter: item.lighten ? "invert(1) brightness(1.5)" : "none"
                  }}
                  className={`w-auto h-7 sm:h-8 md:h-9 object-contain transition-transform duration-300 ${
                    isMicroservices ? "shrink-0" : "mx-auto"
                  }`} 
                />

                {/* Microservices Text Label */}
                {isMicroservices && (
                  <span className="text-[#E7E6FC] text-[11px] sm:text-xs md:text-sm font-semibold leading-none select-none whitespace-nowrap">
                    Microservices
                  </span>
                )}
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EntTechStack;
