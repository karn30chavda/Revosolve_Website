import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Cpu,
  Package,
  Code,
  MagicWand,
  FlowArrow,
  UsersThree,
  Kanban,
  Truck,
  Wrench,
  Calculator,
  ChartBar,
  PlugsConnected,
} from "@phosphor-icons/react";

const buildItems = [
  {
    title: "Enterprise Operating Systems",
    desc: "Integrated platforms connecting finance, procurement, HR, CRM, inventory, projects, assets, and reporting.",
    icon: <Cpu size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "ERPNext Implementations",
    desc: "End-to-end implementation, configuration, customization, integration, and optimization of ERPNext.",
    icon: <Package size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Frappe Framework Development",
    desc: "Custom enterprise applications built on Frappe for organization-specific operational requirements.",
    icon: <Code size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Low-Code Business Applications",
    desc: "Rapidly digitize approvals, inspections, compliance, operations, and internal processes.",
    icon: <MagicWand size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Workflow Automation Platforms",
    desc: "Configurable approvals, notifications, SLAs, escalations, and business rules for complex workflows.",
    icon: <FlowArrow size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "HRMS & Workforce Management",
    desc: "Employee lifecycle, attendance, payroll integration, leave, onboarding, and field workforce tracking.",
    icon: <UsersThree size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Project & Portfolio Management",
    desc: "Planning, milestones, budgets, procurement, billing, profitability, and execution in one platform.",
    icon: <Kanban size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Procurement & Supply Chain",
    desc: "Automated procurement workflows, vendor management, approvals, inventory planning, and visibility.",
    icon: <Truck size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Asset Management",
    desc: "Track assets, maintenance schedules, utilization, depreciation, and lifecycle performance.",
    icon: <Wrench size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Finance & Accounting",
    desc: "Integrated accounting, budgeting, cost centers, GST compliance, reporting, and audit readiness.",
    icon: <Calculator size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Business Intelligence & Reporting",
    desc: "Executive dashboards, operational KPIs, project analytics, and organization-wide reporting.",
    icon: <ChartBar size={26} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Enterprise Integrations",
    desc: "Banking systems, GST portal, payment gateways, biometrics, CRM, eCommerce, logistics, and APIs.",
    icon: <PlugsConnected size={26} className="text-[#877BF1]" weight="light" />,
  },
];

const ERPWhatWeBuild = () => {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit text-left">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [what we engineer]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="font-black block">
                  <span className="text-[#877BF1]">Enterprise platforms </span>
                  <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">built around</span>
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  your operations
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Instead of forcing your teams to adapt to software, we engineer platforms that support how your organization actually works.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid - Symmetrical 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {buildItems.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(99, 102, 241, 0.7)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Pattern (Right bottom corner) */}
              {idx === 0 ? (
                <img 
                  src="/OpenSourceERPSystems/build_bg_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                />
              ) : (
                <img 
                  src="/OpenSourceERPSystems/build_bg_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 lg:hidden scale-x-[-1]" 
                />
              )}

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                {item.icon}
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                {/* Title */}
                <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Description */}
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[20px] text-left max-w-full">
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

export default ERPWhatWeBuild;
