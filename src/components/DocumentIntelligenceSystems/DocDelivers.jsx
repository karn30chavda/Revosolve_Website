import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Scan,
  Tag,
  Sliders,
  FlowArrow,
  Path,
  UserCheck,
  MagnifyingGlass,
  ChartBar,
  PlugsConnected,
} from "@phosphor-icons/react";

const deliversList = [
  {
    title: "Intelligent OCR & Extraction",
    desc: "Extract printed and handwritten text and capture structured data using context-aware AI rather than templates.",
    icon: <Scan size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Document Classification",
    desc: "Automatically identify document types — invoices, contracts, identity documents, government forms, applications, certificates, purchase orders.",
    icon: <Tag size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Business Rule Engine",
    desc: "Validate extracted information using configurable business rules before moving to the next workflow stage.",
    icon: <Sliders size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Workflow Automation",
    desc: "Automatically assign documents to departments, reviewers, approvers, or external systems based on predefined workflows.",
    icon: <FlowArrow size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Journey Builder",
    desc: "Design complete document journeys without coding — receive, OCR, classify, validate, review, approve, integrate, archive.",
    icon: <Path size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Human-in-the-Loop Review",
    desc: "Allow users to verify uncertain AI predictions before final processing.",
    icon: <UserCheck size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise Search",
    desc: "Locate documents instantly using metadata, extracted content, business attributes, or full-text search.",
    icon: <MagnifyingGlass size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Analytics Dashboard",
    desc: "Track processing volumes, processing time, SLA compliance, exception rates, approval bottlenecks, productivity, and KPIs.",
    icon: <ChartBar size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise Integrations",
    desc: "Connect with ERP, CRM, core banking, HRMS, DMS, government portals, email, WhatsApp, and APIs.",
    icon: <PlugsConnected size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const DocDelivers = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [What RevoDox Delivers]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="font-black inline-block bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  One platform.
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  Every document workflow.
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              From intelligent capture to enterprise integration — the full document lifecycle, automated.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {deliversList.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: "rgba(38, 40, 66, 1)",
                borderColor: "rgba(135, 123, 241, 0.7)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-[#877BF1]/30 hover:border-[#877BF1]/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Pattern (Right bottom corner) */}
              {idx === 0 ? (
                <img 
                  src="/DocumentIntelligenceSystems/differentiation_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                />
              ) : (
                <img 
                  src="/DocumentIntelligenceSystems/differentiation_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 lg:hidden scale-x-[-1]" 
                />
              )}

              {/* Top Row: Icon only */}
              <div className="w-full flex items-center justify-start mb-6 relative z-10">
                <div className="w-8 h-8 flex items-center justify-start shrink-0">
                  {item.icon}
                </div>
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

export default DocDelivers;
