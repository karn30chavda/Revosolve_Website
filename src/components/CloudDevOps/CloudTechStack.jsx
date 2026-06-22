import React from "react";
import { motion as Motion } from "framer-motion";

const techItems = [
  {
    name: "AWS",
    logoSrc: "/EnterpriceApplication_System/Amazon_Web_Services_Logo.svg",
    lighten: true,
    zoom: true,
  },
  {
    name: "Azure",
    logoSrc: "/EnterpriceApplication_System/microsoft_azure.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "GCP",
    logoSrc: "/EnterpriceApplication_System/Google_Cloud_logo.svg",
    lighten: true,
  },
  {
    name: "Kubernetes",
    logoSrc: "/EnterpriceApplication_System/kubernetes.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "Docker",
    logoSrc: "/EnterpriceApplication_System/docker.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "Terraform",
    logoSrc: "/EnterpriceApplication_System/terraform.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "Ansible",
    logoSrc: "/EnterpriceApplication_System/ansible.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "Jenkins",
    logoSrc: "/EnterpriceApplication_System/jenkins.svg",
    lighten: true,
    zoomLarge: true,
  },
  {
    name: "GitHub Actions",
    logoSrc: "/EnterpriceApplication_System/GitHub.svg",
    lighten: true,
    zoom: true,
  },
  {
    name: "Prometheus",
    logoSrc: "/EnterpriceApplication_System/prometheus.svg",
    zoomLarge: true,
  },
  {
    name: "Grafana",
    logoSrc: "/EnterpriceApplication_System/grafana.svg",
    lighten: true,
    zoomLarge: true,
  },
];

const CloudTechStack = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-4 pb-12 md:pt-8 md:pb-16 overflow-hidden z-20 font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-center justify-start">
        
        {/* Centered Header Content */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          {/* Section Tag */}
          <div className="text-white text-[14px] md:text-[18px] font-normal uppercase tracking-[0.264px] opacity-30 mb-3">
            [tools]
          </div>

          {/* Heading Block */}
          <h2 className="text-2xl md:text-4xl xl:text-[40px] font-black leading-tight tracking-[0.264px]">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              The Cloud & DevOps Stack
            </span>
          </h2>
          <h3 className="text-[#CACBDB] text-lg md:text-xl xl:text-[22px] font-light mt-3 opacity-70 max-w-2xl leading-normal">
            Modern technologies powering automated, secure, and resilient platforms
          </h3>
        </div>

        {/* Centered Flex Layout of Tech Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full relative z-10">
          {techItems.map((item, idx) => {
            const isGitHubActions = item.name === "GitHub Actions";
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
                className={`flex items-center justify-center rounded-xl border-2 cursor-pointer transition-all duration-300 min-h-[64px] md:min-h-[76px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-18px)] max-w-[190px] xl:max-w-none ${
                  isGitHubActions 
                    ? "flex-row gap-4 sm:gap-5 p-3 sm:p-4" 
                    : "flex-col p-2.5 sm:p-3"
                }`}
              >
                <img 
                  src={item.logoSrc} 
                  alt={item.name} 
                  style={{ 
                    transform: item.shrink ? "scale(0.7)" : (item.zoomLarge ? "scale(1.55)" : (item.zoom ? "scale(1.2)" : "none")),
                    filter: item.lighten ? "invert(1) hue-rotate(180deg)" : "none"
                  }}
                  className={`w-auto h-7 sm:h-8 md:h-9 object-contain transition-transform duration-300 ${
                    isGitHubActions ? "shrink-0" : "mx-auto"
                  }`} 
                />

                {isGitHubActions && (
                  <div className="flex flex-col items-start justify-center gap-0.5 leading-tight">
                    <span className="text-[#E7E6FC] text-[10px] sm:text-[11px] md:text-xs font-semibold select-none whitespace-nowrap">
                      GitHub
                    </span>
                    <span className="text-[#E7E6FC] text-[10px] sm:text-[11px] md:text-xs font-semibold select-none whitespace-nowrap">
                      Actions
                    </span>
                  </div>
                )}
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CloudTechStack;
