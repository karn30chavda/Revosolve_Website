import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Database,
  Warehouse,
  FlowArrow,
  ChartPieSlice,
  Waves,
  Lightning,
  Scales,
  Cards,
  Sparkle,
} from "@phosphor-icons/react";

const buildItems = [
  {
    title: "Enterprise Data Platforms",
    desc: "Centralized architectures that integrate information from multiple systems into a single source of truth.",
    icon: Database,
  },
  {
    title: "Data Warehousing",
    desc: "Modern data warehouses optimized for analytics, reporting, and business intelligence.",
    icon: Warehouse,
  },
  {
    title: "ETL & ELT Pipelines",
    desc: "Automated pipelines that extract, transform, validate, and load information from enterprise and external sources.",
    icon: FlowArrow,
  },
  {
    title: "Business Intelligence Platforms",
    desc: "Interactive dashboards and reporting with real-time visibility into performance and operational KPIs.",
    icon: ChartPieSlice,
  },
  {
    title: "Data Lake & Lakehouse",
    desc: "Scalable storage for structured, semi-structured, and unstructured enterprise data.",
    icon: Waves,
  },
  {
    title: "Real-Time Data Processing",
    desc: "Streaming architectures for live operational monitoring, event processing, and near real-time analytics.",
    icon: Lightning,
  },
  {
    title: "Data Governance & Quality",
    desc: "Governance frameworks, quality controls, metadata management, lineage tracking, and access policies.",
    icon: Scales,
  },
  {
    title: "Master Data Management",
    desc: "Consistent, trusted master records across customers, products, vendors, and enterprise entities.",
    icon: Cards,
  },
  {
    title: "AI-Ready Data Foundations",
    desc: "Data ecosystems prepared for machine learning, Generative AI, predictive analytics, and intelligent automation.",
    icon: Sparkle,
  },
];

const DataWhatWeEngineer = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [what we engineer]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="font-black inline-block bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Data platforms
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  built for operational intelligence
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1 text-left">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70">
            Modern enterprises need scalable data ecosystems that connect operational systems, automate data movement, and provide trusted insights.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {buildItems.map((item, idx) => {
            const Icon = item.icon;
            return (
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
                style={{ 
                  backgroundColor: "rgba(29, 30, 50, 1)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border-t-2 border-t-[#FCCA71]/80 border-x border-b cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

                {/* Bottom Pattern (Right bottom corner) */}
                {idx === 0 ? (
                  <img 
                    src="/DataEngineeringAnalytics/differentiation_pattern.svg" 
                    alt="" 
                    className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                  />
                ) : (
                  <img 
                    src="/DataEngineeringAnalytics/differentiation_pattern.svg" 
                    alt="" 
                    className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 lg:hidden scale-x-[-1]" 
                  />
                )}

                {/* Icon Container */}
                <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                  <Icon size={26} className="text-[#FCCA71]" weight="light" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataWhatWeEngineer;
