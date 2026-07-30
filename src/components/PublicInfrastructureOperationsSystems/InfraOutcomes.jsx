import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Eye,
  RocketLaunch,
  ShieldCheck,
  UsersThree,
  Receipt,
  Wallet,
  FileText,
  Gauge,
} from "@phosphor-icons/react";

const outcomeCards = [
  {
    icon: Eye,
    t: "Complete Project Visibility",
    d: "Monitor every tender, project, site, asset, and financial transaction through one unified platform.",
  },
  {
    icon: RocketLaunch,
    t: "Faster Tender-to-Execution",
    d: "Automatically initiate project structures and workflows immediately after award.",
  },
  {
    icon: ShieldCheck,
    t: "Better Project Governance",
    d: "Standardize approvals, documentation, inspections, and reporting across every project.",
  },
  {
    icon: UsersThree,
    t: "Improved Resource Utilization",
    d: "Optimize workforce, equipment, procurement, and assets across concurrent projects.",
  },
  {
    icon: Receipt,
    t: "Faster Milestone Billing",
    d: "Automatically connect verified milestones with invoicing and financial workflows.",
  },
  {
    icon: Wallet,
    t: "Better Cash Flow Visibility",
    d: "Track billing, collections, retention money, and profitability in real time.",
  },
  {
    icon: FileText,
    t: "Stronger Compliance",
    d: "Maintain audit trails, approval histories, and regulatory reporting centrally.",
  },
  {
    icon: Gauge,
    t: "Executive Decision Intelligence",
    d: "Leadership gains a real-time view across tenders, projects, finance, and portfolio performance.",
  },
];

const InfraOutcomes = () => {
  return (
    <section
      id="outcomes"
      className="relative w-full py-12 md:py-16 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-xl mb-10 md:mb-12"
      >
        <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
          [outcomes]
        </span>
        <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
            What changes
          </span>{" "}
          <span className="text-[#CACBDB] font-light">
            once operations connect
          </span>
        </h2>
      </Motion.div>

      {/* Outcome Cards 4-Column Grid */}
      <div className="max-w-310 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {outcomeCards.map((o, i) => {
          const Icon = o.icon;
          return (
            <Motion.div
              key={o.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-[#0F1034]/40 border border-[#877BF1]/22 rounded-lg cursor-pointer transition-all duration-300 group hover:border-[#877BF1]/60 hover:bg-[#877BF1]/10 flex flex-col items-start"
            >
              <div className="text-[#FCCA71] mb-3 shrink-0">
                <Icon
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="font-semibold text-[15px] text-[#E7E6FC] mb-2 leading-snug group-hover:text-white transition-colors duration-300 m-0">
                {o.t}
              </h3>

              <p className="text-[13px] leading-relaxed text-[#CACBDB] m-0">
                {o.d}
              </p>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default InfraOutcomes;
