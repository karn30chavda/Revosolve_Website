import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  Broadcast,
  NotePencil,
  RocketLaunch,
  CalendarCheck,
  DeviceMobile,
  UsersThree,
  ShoppingCart,
  Wrench,
  Bank,
  Receipt,
  ChartPieSlice,
  Gauge,
  FileText,
  HardHat,
} from "@phosphor-icons/react";

const capData = [
  { icon: Broadcast, t: "Tender Intelligence", d: "One pipeline across Tender247, GeM, CPPP & state portals." },
  { icon: NotePencil, t: "Bid Preparation", d: "BOQs, costing, approvals & submission checklists." },
  { icon: RocketLaunch, t: "Project Mobilization", d: "Award auto-creates budget, team & execution plan." },
  { icon: CalendarCheck, t: "Planning & Execution", d: "Schedules, milestones, risks & daily site progress." },
  { icon: DeviceMobile, t: "Mobile Field Ops", d: "Progress, photos & attendance submitted from site." },
  { icon: UsersThree, t: "Workforce Management", d: "Employees, labour, consultants & subcontractors." },
  { icon: ShoppingCart, t: "Procurement & Inventory", d: "Requests, quotations, POs & site transfers." },
  { icon: Wrench, t: "Asset Lifecycle", d: "Maintenance, utilization & depreciation tracking." },
  { icon: Bank, t: "Financial Operations", d: "GST, TDS & running account bills — India-ready." },
  { icon: Receipt, t: "Milestone Billing", d: "Verified milestones auto-trigger invoicing." },
  { icon: ChartPieSlice, t: "Project Profitability", d: "Real-time margins by client, project & site." },
  { icon: Gauge, t: "Executive Command Center", d: "One live dashboard for the entire portfolio." },
];

const workflowNodes = [
  { icon: FileText, label: "Tender" },
  { icon: RocketLaunch, label: "Mobilization" },
  { icon: HardHat, label: "Execution" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Receipt, label: "Billing" },
  { icon: Gauge, label: "Reports" },
];

const InfraCapabilities = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % workflowNodes.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="capabilities"
      className="relative w-full py-10 md:py-14 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#FCCA71]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-310 mx-auto relative z-10 flex flex-col items-start">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-start w-full mb-8 md:mb-10"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [capabilities]
          </span>

          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              Engineering every operational function
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              into one connected platform.
            </span>
          </h2>
        </Motion.div>

        {/* 4-Column Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 w-full mb-10">
          {capData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                whileHover={{
                  scale: 1.025,
                  backgroundColor: "rgba(135, 123, 241, 0.12)",
                  borderColor: "rgba(135, 123, 241, 0.7)",
                }}
                className="flex flex-col justify-start items-start p-5 w-full h-full bg-[#0F1034]/40 rounded-lg border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full">
                  {/* Top Row: Icon */}
                  <div className="text-[#FCCA71] mb-3 shrink-0">
                    <Icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold text-[14.5px] sm:text-[15px] text-[#E7E6FC] mb-2 leading-snug group-hover:text-white transition-colors duration-300">
                    {item.t}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[#CACBDB]">
                    {item.d}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </div>

        {/* Execution Pipeline Workflow Box */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full border border-[#877BF1]/22 bg-linear-to-br from-[#12143E]/60 to-[#0A0B28]/60 rounded-xl p-5 sm:p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="flex justify-between items-center font-mono text-[10.5px] tracking-widest uppercase text-[#5C5F85] mb-4 md:mb-6">
            <span>execution_pipeline.flow</span>
          </div>

          {/* DESKTOP VIEW: Horizontal Pipeline Flow (UNTOUCHED) */}
          <div className="hidden md:block overflow-x-auto pt-6 pb-4">
            <div className="flex items-center justify-between min-w-190 max-w-230 mx-auto relative px-8">
              {/* Center Continuous Connecting Line */}
              <div className="absolute top-7 left-15 right-15 h-0.5 bg-[#877BF1]/25 pointer-events-none z-0">
                {/* Active Progress Line */}
                <div
                  className="h-full bg-linear-to-r from-[#877BF1] to-[#FCCA71] transition-all duration-700 ease-in-out"
                  style={{
                    width: `${(activeStage / (workflowNodes.length - 1)) * 100}%`,
                  }}
                />

                {/* Traveling Single Glowing Golden Dot */}
                <span
                  className="absolute -top-[3.5px] w-2.5 h-2.5 rounded-full bg-[#FCCA71] shadow-[0_0_12px_#FCCA71,0_0_20px_#FCCA71] transition-all duration-700 ease-in-out z-10"
                  style={{
                    left: `calc(${
                      (activeStage / (workflowNodes.length - 1)) * 100
                    }% - 5px)`,
                  }}
                />
              </div>

              {/* Workflow Nodes */}
              {workflowNodes.map((wn, i) => {
                const isActive = i <= activeStage;
                const isCurrent = i === activeStage;
                const Icon = wn.icon;

                return (
                  <div
                    key={wn.label}
                    className="flex flex-col items-center gap-3 relative z-10 shrink-0 cursor-pointer"
                    onClick={() => setActiveStage(i)}
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isCurrent
                          ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_20px_rgba(252,202,113,0.5)] scale-110"
                          : isActive
                          ? "border border-[#877BF1] bg-[#12143E] text-white"
                          : "border border-[#877BF1]/30 bg-[#0F1034] text-white/40"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={`transition-colors duration-500 ${
                          isActive ? "text-[#FCCA71]" : "text-white/40"
                        }`}
                      />
                    </div>

                    <span
                      className={`font-mono text-[11px] text-center whitespace-nowrap transition-colors duration-500 ${
                        isCurrent
                          ? "text-[#FCCA71] font-bold"
                          : isActive
                          ? "text-white font-medium"
                          : "text-[#CACBDB]/60"
                      }`}
                    >
                      {wn.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW: Vertical Step Timeline (ZERO Horizontal Scrollbar) */}
          <div className="block md:hidden pt-2 pb-2">
            <div className="relative pl-8 pr-2 flex flex-col gap-3.5">
              {/* Vertical Connecting Track Line */}
              <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-[#877BF1]/25 pointer-events-none z-0">
                {/* Active Progress Line */}
                <div
                  className="w-full bg-linear-to-b from-[#877BF1] to-[#FCCA71] transition-all duration-700 ease-in-out"
                  style={{
                    height: `${(activeStage / (workflowNodes.length - 1)) * 100}%`,
                  }}
                />

                {/* Traveling Golden Dot */}
                <span
                  className="absolute -left-[3.5px] w-2.5 h-2.5 rounded-full bg-[#FCCA71] shadow-[0_0_12px_#FCCA71,0_0_20px_#FCCA71] transition-all duration-700 ease-in-out z-10"
                  style={{
                    top: `calc(${
                      (activeStage / (workflowNodes.length - 1)) * 100
                    }% - 5px)`,
                  }}
                />
              </div>

              {/* Workflow Nodes */}
              {workflowNodes.map((wn, i) => {
                const isActive = i <= activeStage;
                const isCurrent = i === activeStage;
                const Icon = wn.icon;

                return (
                  <div
                    key={wn.label}
                    onClick={() => setActiveStage(i)}
                    className="flex items-center gap-3.5 py-1 cursor-pointer relative z-10"
                  >
                    <div
                      className={`w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isCurrent
                          ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_18px_rgba(252,202,113,0.6)] scale-110"
                          : isActive
                          ? "border border-[#877BF1] bg-[#12143E] text-white"
                          : "border border-[#877BF1]/30 bg-[#0F1034] text-white/40"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={`transition-colors duration-500 ${
                          isActive ? "text-[#FCCA71]" : "text-white/40"
                        }`}
                      />
                    </div>

                    <span
                      className={`font-mono text-xs transition-colors duration-500 ${
                        isCurrent
                          ? "text-[#FCCA71] font-bold"
                          : isActive
                          ? "text-white font-medium"
                          : "text-[#CACBDB]/60"
                      }`}
                    >
                      {wn.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default InfraCapabilities;
