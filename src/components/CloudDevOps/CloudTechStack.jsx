import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const techCats = [
  {
    cat: "Cloud Platforms",
    items: [
      {
        name: "Azure",
        logoSrc: "/CloudDevOps/tech_azure.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "AWS",
        logoSrc: "/CloudDevOps/tech_aws.svg",
        lighten: true,
        zoom: true,
      },
      {
        name: "GCP",
        logoSrc: "/CloudDevOps/tech_gcp.svg",
        lighten: true,
      },
    ],
  },
  {
    cat: "Containers & Orchestration",
    items: [
      {
        name: "Docker",
        logoSrc: "/CloudDevOps/tech_docker.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "Kubernetes",
        logoSrc: "/CloudDevOps/tech_kubernetes.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "OpenShift",
        logoSrc: "/CloudDevOps/tech_openshift.svg",
        lighten: true,
        zoomLarge: true,
      },
    ],
  },
  {
    cat: "Infrastructure as Code",
    items: [
      {
        name: "Terraform",
        logoSrc: "/CloudDevOps/tech_terraform.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "Ansible",
        logoSrc: "/CloudDevOps/tech_ansible.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "ARM Templates",
        logoSrc: "/CloudDevOps/tech_arm_templates.svg",
        lighten: true,
      },
      {
        name: "CloudFormation",
        logoSrc: "/CloudDevOps/tech_cloudformation.svg",
        lighten: true,
      },
    ],
  },
  {
    cat: "DevOps",
    items: [
      {
        name: "Azure DevOps",
        logoSrc: "/CloudDevOps/tech_azure_devops.svg",
        lighten: true,
      },
      {
        name: "GitHub Actions",
        logoSrc: "/CloudDevOps/tech_github.svg",
        lighten: true,
        zoom: true,
      },
      {
        name: "Jenkins",
        logoSrc: "/CloudDevOps/tech_jenkins.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "GitLab CI/CD",
        logoSrc: "/CloudDevOps/tech_gitlab.svg",
        lighten: true,
        zoom: true,
      },
    ],
  },
  {
    cat: "Monitoring",
    items: [
      {
        name: "Prometheus",
        logoSrc: "/CloudDevOps/tech_prometheus.svg",
        zoomLarge: true,
      },
      {
        name: "Grafana",
        logoSrc: "/CloudDevOps/tech_grafana.svg",
        lighten: true,
        zoomLarge: true,
      },
      {
        name: "ELK Stack",
        logoSrc: "/CloudDevOps/tech_elk_stack.svg",
        lighten: true,
      },
      {
        name: "Datadog",
        logoSrc: "/CloudDevOps/tech_datadog.svg",
        lighten: true,
      },
    ],
  },
  {
    cat: "Security",
    items: [
      {
        name: "Microsoft Defender",
        logoSrc: "/CloudDevOps/tech_microsoft_defender.svg",
        lighten: true,
      },
      {
        name: "Azure Security Center",
        logoSrc: "/CloudDevOps/tech_azure_security_center.svg",
        lighten: true,
      },
      {
        name: "AWS Security Hub",
        logoSrc: "/CloudDevOps/tech_aws_security_hub.svg",
        lighten: true,
      },
      {
        name: "HashiCorp Vault",
        logoSrc: "/CloudDevOps/tech_hashicorp_vault.svg",
        lighten: true,
        zoomLarge: true,
      },
    ],
  },
];

const TechCard = ({ item }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const isGitHubActions = item.name === "GitHub Actions";

  // Reset fail state when switching tabs/item changes
  React.useEffect(() => {
    setImgFailed(false);
  }, [item.logoSrc]);

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
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
      {!imgFailed ? (
        <img 
          src={item.logoSrc} 
          alt={item.name} 
          onError={() => setImgFailed(true)}
          style={{ 
            transform: item.shrink ? "scale(0.7)" : (item.zoomLarge ? "scale(1.55)" : (item.zoom ? "scale(1.2)" : "none")),
            filter: item.lighten ? "invert(1) hue-rotate(180deg)" : "none"
          }}
          className={`w-auto h-7 sm:h-8 md:h-9 object-contain transition-transform duration-300 ${
            isGitHubActions ? "shrink-0" : "mx-auto"
          }`} 
        />
      ) : (
        <span className="text-[#E7E6FC] text-center text-xs md:text-sm font-semibold select-none px-1 leading-tight line-clamp-2">
          {item.name}
        </span>
      )}

      {isGitHubActions && !imgFailed && (
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
};

const CloudTechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20 font-sans">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-center justify-center gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full text-center pb-4">
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [technology stack]
          </span>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-center font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              The Toolchain Behind
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Reliable Operations
            </span>
          </h2>
        </div>

        {/* Tabs Control Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full pb-6">
          {techCats.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#FCCA71] border-[#FCCA71] text-[#01031c] shadow-lg shadow-[#FCCA71]/25 font-bold"
                    : "bg-white/5 border-white/10 text-[#AAA9BE] hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.cat}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Panel */}
        <div className="w-full relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full relative z-10"
            >
              {techCats[activeTab].items.map((item, idx) => (
                <TechCard key={idx} item={item} />
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CloudTechStack;
