import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Scan,
  Crosshair,
  UserFocus,
  Polygon,
  HardHat,
  UsersFour,
  Car,
  Fire,
  Footprints,
  BellRinging,
  ClipboardText,
  ChartBar
} from "@phosphor-icons/react";

const buildItems = [
  {
    title: "Intelligent Video Analytics",
    desc: "Analyze live video streams using advanced Computer Vision models.",
    icon: Scan,
  },
  {
    title: "Object Detection & Tracking",
    desc: "Identify and continuously track people, vehicles, equipment, and objects across feeds.",
    icon: Crosshair,
  },
  {
    title: "Facial Recognition",
    desc: "Secure identity verification, access monitoring, and watchlist-based alerts with privacy controls.",
    icon: UserFocus,
  },
  {
    title: "Perimeter & Intrusion Detection",
    desc: "Monitor facility boundaries, detect unauthorized entry into restricted zones, and generate alerts.",
    icon: Polygon,
  },
  {
    title: "PPE Compliance Monitoring",
    desc: "Detect whether personnel are wearing required helmets, safety jackets, gloves, and protective gear.",
    icon: HardHat,
  },
  {
    title: "Crowd Analytics",
    desc: "Monitor crowd density, occupancy thresholds, movement patterns, and abnormal gathering behavior.",
    icon: UsersFour,
  },
  {
    title: "Vehicle Intelligence",
    desc: "Identify vehicle entry, exit, movement, parking violations, and license plate information.",
    icon: Car,
  },
  {
    title: "Fire & Smoke Detection",
    desc: "Identify early visual indicators of smoke and fire to accelerate incident response.",
    icon: Fire,
  },
  {
    title: "Behavioral Analytics",
    desc: "Detect loitering, abandoned objects, unusual movement, or prolonged inactivity.",
    icon: Footprints,
  },
  {
    title: "Intelligent Alerts",
    desc: "Configurable real-time alerts through dashboards, email, SMS, WhatsApp, or enterprise systems.",
    icon: BellRinging,
  },
  {
    title: "Incident Management",
    desc: "Automatically create incidents, assign teams, capture evidence, and maintain audit history.",
    icon: ClipboardText,
  },
  {
    title: "Executive Dashboard",
    desc: "Active alerts, camera health, incident trends, KPIs, response times, and historical intelligence.",
    icon: ChartBar,
  },
];

const SurveillanceDelivers = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit text-left">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [What RevoVision Delivers]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="font-black block">
                  <span className="text-[#877BF1]">A Unified Platform </span>
                  <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">for Intelligent</span>
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  monitoring and operations
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1 text-left">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70">
              Detection capabilities that turn passive camera feeds into structured, actionable operational events.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid - Symmetrical Layout */}
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
                    src="/AiSurveillanceSystems/build_bg_pattern.svg" 
                    alt="" 
                    className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                  />
                ) : (
                  <img 
                    src="/AiSurveillanceSystems/build_bg_pattern.svg" 
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

export default SurveillanceDelivers;
