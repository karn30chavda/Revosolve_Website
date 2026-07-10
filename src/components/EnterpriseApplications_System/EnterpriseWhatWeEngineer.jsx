import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Buildings,
  ArrowsClockwise,
  DoorOpen,
  FlowArrow,
  PlugsConnected,
  Cube,
  Recycle,
  DeviceMobile,
} from "@phosphor-icons/react";

const buildItems = [
  {
    title: "Enterprise Business Applications",
    desc: "Scalable applications that support core business operations, internal workflows, and enterprise-wide collaboration.",
    icon: <Buildings size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Business Process Automation",
    desc: "Applications that automate repetitive processes, improve operational consistency, and reduce manual effort across departments.",
    icon: (
      <ArrowsClockwise size={26} className="text-[#FCCA71]" weight="light" />
    ),
  },
  {
    title: "Customer & Partner Portals",
    desc: "Secure web portals that improve collaboration with customers, partners, vendors, and external stakeholders.",
    icon: <DoorOpen size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Workflow & Approval Systems",
    desc: "Digitize approvals, document routing, task management, and operational governance through configurable workflow engines.",
    icon: <FlowArrow size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "API & System Integration",
    desc: "Integrate ERP, CRM, HRMS, finance, and third-party systems into a unified operational ecosystem.",
    icon: (
      <PlugsConnected size={26} className="text-[#FCCA71]" weight="light" />
    ),
  },
  {
    title: "Product Engineering",
    desc: "Design, build, and evolve scalable digital products from concept through deployment and long-term growth.",
    icon: <Cube size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Legacy Modernization",
    desc: "Transform aging enterprise applications into modern, cloud-ready systems without disrupting operations.",
    icon: <Recycle size={26} className="text-[#FCCA71]" weight="light" />,
  },
  {
    title: "Enterprise Mobility",
    desc: "Mobile applications that extend enterprise workflows to field teams, operational staff, and remote workforces.",
    icon: <DeviceMobile size={26} className="text-[#FCCA71]" weight="light" />,
  },
];

const EnterpriseWhatWeEngineer = () => {
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
                <span className="font-black block">
                  <span className="text-[#877BF1]">Applications designed </span>
                  <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                    around
                  </span>
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  business operations
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Instead of generic software, we engineer applications that reflect
              how your organization operates, collaborates, and makes decisions.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
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
                borderColor: "rgba(135, 123, 241, 0.7)"
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className={`flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-[#877BF1]/30 hover:border-[#877BF1]/60 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                idx >= 6 ? "lg:col-span-6" : "lg:col-span-4"
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Pattern (Right bottom corner) */}
              {idx === 0 ? (
                <img 
                  src="/EnterpriceApplication_System/build_bg_pattern.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                />
              ) : (
                <img 
                  src="/EnterpriceApplication_System/build_bg_pattern.svg" 
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

export default EnterpriseWhatWeEngineer;
