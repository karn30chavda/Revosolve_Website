import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Path as Network,
  Stack as Layers,
  GitBranch,
  ArrowUpRight,
  CircleNotch as CircleDot,
} from "@phosphor-icons/react";

const MiniFlow = ({ color = "#877BF1" }) => (
  <svg
    viewBox="0 0 260 60"
    className="w-full h-12 my-2"
    data-testid="mini-flow"
  >
    <defs>
      <linearGradient id={`miniGrad-${color.replace("#", "")}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={color} stopOpacity="0.9" />
        <stop offset="100%" stopColor={color} stopOpacity="0.2" />
      </linearGradient>
    </defs>
    {[30, 130, 230].map((cx) => (
      <g key={cx}>
        <circle
          cx={cx}
          cy="30"
          r="10"
          fill="none"
          stroke={color}
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <circle cx={cx} cy="30" r="3" fill={color} opacity="0.9" />
      </g>
    ))}
    <line
      x1="40"
      y1="30"
      x2="120"
      y2="30"
      stroke={`url(#miniGrad-${color.replace("#", "")})`}
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <line
      x1="140"
      y1="30"
      x2="220"
      y2="30"
      stroke={`url(#miniGrad-${color.replace("#", "")})`}
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <Motion.circle
      r="3"
      fill={color}
      animate={{ cx: [30, 130, 230, 30] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      cy="30"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

const CAPABILITIES = [
  {
    group: "Operational Systems",
    icon: Network,
    accent: "#877BF1",
    num: "01 / 03",
    items: [
      { name: "Commerce Operations Systems", link: "/solutions/commerce-operations-systems" },
      { name: "Document Intelligence Systems", link: "/solutions/document-intelligence-systems" },
      { name: "Customer Interaction Systems", link: "/solutions/customer-interaction-systems" },
      { name: "Defense Simulation & Training", link: "/solutions/defense-simulation-training-systems" },
      { name: "AI Surveillance Systems", link: "/solutions/ai-surveillance-systems" },
      { name: "Simulation & Digital Twin", link: "/solutions/simulation-digital-twin-systems" },
      { name: "Public Infrastructure Operations", link: "/solutions/public-infrastructure-operations-systems" },
    ],
  },
  {
    group: "Enterprise Technology",
    icon: Layers,
    accent: "#FCCA71",
    num: "02 / 03",
    items: [
      { name: "Enterprise Application Systems", link: "/services/enterprise-application-systems" },
      { name: "Product & Platform Engineering", link: "/services/product-and-platform-engineering" },
      { name: "AI & Intelligent Systems", link: "/services/ai-intelligent-systems" },
      { name: "Data Engineering & Analytics", link: "/services/data-engineering-analytics" },
      { name: "QA & Test Automation", link: "/services/qa-and-test-automation" },
      { name: "Cloud & DevOps Systems", link: "/services/cloud-and-devops" },
    ],
  },
  {
    group: "Modernization & Platforms",
    icon: GitBranch,
    accent: "#877BF1",
    num: "03 / 03",
    items: [
      { name: "Legacy Transformation Systems", link: "/services/legacy-transformation-systems" },
      { name: "Open Source ERP Systems (Frappe/ERPNext)", link: "/services/open-source-erp-systems" },
      { name: "Enterprise Systems Integration", link: "/services/enterprise-application-systems" },
      { name: "Cloud Infrastructure Modernization", link: "/services/cloud-and-devops" },
      { name: "Custom Operational Workflows", link: "/services/open-source-erp-systems"  },
      { name: "Scalable SaaS Architecture", link: "/services/product-and-platform-engineering" },
    ],
  },
];

export const WhatWeEngineer = () => {
  return (
    <section className="relative w-full pt-8 pb-16 min-[1290px]:pt-16 min-[1290px]:pb-20 font-sans overflow-hidden">
      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        
        {/* Header Grid: Tag, Title & Right Description */}
        <div className="flex flex-col min-[1290px]:flex-row justify-between items-start min-[1290px]:items-end gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30">
              [what we engineer]
            </div>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">The digital </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">backbone</span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                of modern organizations
              </span>
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base font-normal leading-relaxed max-w-md">
            Every solution is engineered to improve operational performance, governance, and end-to-end execution—not simply automate individual isolated tasks.
          </p>
        </div>

        {/* 3 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Motion.div
                key={cap.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-[rgba(135,123,241,0.25)] bg-[#07092b]/60 backdrop-blur-xl flex flex-col justify-between hover:border-[#FCCA71]/50 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl border border-[rgba(252,202,113,0.3)] bg-[#FCCA71]/10 flex items-center justify-center group-hover:border-[#FCCA71] transition-colors">
                      <Icon size={22} className="text-[#FCCA71]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-white/40 uppercase tracking-widest">
                      {cap.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FCCA71] transition-colors">
                    {cap.group}
                  </h3>

                  {/* Flow Animation */}
                  <MiniFlow color={cap.accent} />

                  {/* Items list with router links */}
                  <ul className="space-y-3 mt-6">
                    {cap.items.map((it) => (
                      <li key={it.name}>
                        <Link
                          to={it.link}
                          className="text-white/70 hover:text-white text-sm font-medium flex items-center justify-between group/link transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <CircleDot
                              size={12}
                              className="text-[#FCCA71] shrink-0"
                            />
                            <span className="truncate">{it.name}</span>
                          </div>
                          <ArrowUpRight
                            size={14}
                            className="text-white/40 group-hover/link:text-[#FCCA71] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0 ml-2"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeEngineer;
