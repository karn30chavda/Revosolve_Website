import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileCode,
  Cube,
  Gear,
  Atom,
  Globe,
  CloudArrowUp,
  Cloud,
  CirclesThreePlus,
  Database,
  Stack,
  TerminalWindow,
  Infinity as InfinityIcon,
  GithubLogo,
  BracketsCurly,
  ShareNetwork,
  Key,
  Fingerprint,
  Leaf,
  HardDrives,
  HardDrive,
} from "@phosphor-icons/react";

const techCats = [
  {
    cat: "Application Frameworks",
    purpose: "Build secure, scalable enterprise applications capable of handling mission-critical modernization workloads.",
    items: [
      { name: ".NET", icon: Code },
      { name: "Java", icon: FileCode },
      { name: "Python", icon: FileCode },
      { name: "Node.js", icon: Cube },
      { name: "Spring Boot", icon: Gear },
    ],
  },
  {
    cat: "Frontend",
    purpose: "Create modern, intuitive interfaces that improve user adoption and operational productivity.",
    items: [
      { name: "React", icon: Atom },
      { name: "Angular", icon: Atom },
      { name: "Vue.js", icon: Atom },
      { name: "Next.js", icon: Globe },
    ],
  },
  {
    cat: "Cloud Platforms",
    purpose: "Migrate and deploy modernized applications on scalable, resilient cloud-native infrastructure.",
    items: [
      { name: "Microsoft Azure", icon: CloudArrowUp },
      { name: "AWS", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
    ],
  },
  {
    cat: "Containers & Orchestration",
    purpose: "Package and orchestrate modernized workloads for consistent, scalable deployments.",
    items: [
      { name: "Docker", icon: Cube },
      { name: "Kubernetes", icon: CirclesThreePlus },
      { name: "OpenShift", icon: CirclesThreePlus },
    ],
  },
  {
    cat: "Databases",
    purpose: "Modernize legacy databases to improve performance, availability, scalability, and data governance.",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "SQL Server", icon: HardDrives },
      { name: "Oracle", icon: HardDrive },
      { name: "MariaDB", icon: Database },
      { name: "MongoDB", icon: Leaf },
    ],
  },
  {
    cat: "Infrastructure Automation",
    purpose: "Automate deployment pipelines, infrastructure provisioning, and operational consistency.",
    items: [
      { name: "Terraform", icon: Stack },
      { name: "Ansible", icon: TerminalWindow },
      { name: "Azure DevOps", icon: InfinityIcon },
      { name: "GitHub Actions", icon: GithubLogo },
      { name: "Jenkins", icon: Gear },
    ],
  },
  {
    cat: "APIs & Integration",
    purpose: "Expose legacy functionality through secure APIs to support modern integrations and digital ecosystems.",
    items: [
      { name: "REST APIs", icon: BracketsCurly },
      { name: "GraphQL", icon: ShareNetwork },
      { name: "OAuth", icon: Key },
      { name: "OpenID Connect", icon: Fingerprint },
    ],
  },
];

const TechCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(39, 41, 69, 1)",
        borderColor: "rgba(95, 95, 255, 1)",
      }}
      style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
      className="flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all duration-300 min-h-[68px] md:min-h-[78px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-18px)] max-w-[170px] xl:max-w-none p-2 gap-1.5"
    >
      {Icon && (
        <Icon size={22} className="text-[#FCCA71] shrink-0" weight="bold" />
      )}
      <span className="text-[#E7E6FC] text-center text-[11px] md:text-xs font-bold select-none leading-tight line-clamp-2">
        {item.name}
      </span>
    </Motion.div>
  );
};

const LegacyTechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20 font-sans">
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-center justify-center gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full text-center pb-4">
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [technology stack]
          </span>
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-center font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              Modern technologies.
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Enterprise-grade modernization.
            </span>
          </h2>
        </div>

        {/* Tabs */}
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

        {/* Tab Content */}
        <div className="w-full relative min-h-fit">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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

export default LegacyTechStack;
