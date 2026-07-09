import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Phone,
  EnvelopeSimple,
  AddressBook,
  Table,
  UsersThree,
  Stamp,
  Buildings,
  ChatCircleText,
  Warning,
} from "@phosphor-icons/react";

const expectations = [
  "Customers expect immediate responses",
  "Citizens expect digital government services",
  "Bank customers expect secure onboarding",
  "Policyholders expect faster claims support",
  "Employees expect instant internal assistance",
];

const handoffs = [
  [Phone, "Phone"],
  [EnvelopeSimple, "Email"],
  [AddressBook, "CRM"],
  [Table, "Excel"],
  [UsersThree, "Ops Team"],
  [Stamp, "Approval"],
  [Buildings, "ERP"],
  [ChatCircleText, "Reply"],
];

const CustomerInteractionChallenge = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const renderBox = (index) => {
    const handoff = handoffs[index];
    if (!handoff) return null;
    const [IconComponent, t] = handoff;
    const isActive = activeIndex === index;
    return (
      <div
        className={`w-[110px] sm:w-[130px] h-[38px] shrink-0 flex items-center justify-center gap-1.5 sm:gap-2 border rounded-[8px] text-[9.5px] sm:text-[10px] uppercase tracking-[0.08em] transition-all duration-500 font-mono relative z-20 ${
          isActive
            ? "border-[#FCCA71] bg-[#1a1b42] text-white shadow-[0_0_15px_rgba(252,202,113,0.35)] scale-105"
            : "border-[#877BF1]/20 bg-[#0e0f35] text-white/55"
        }`}
      >
        <IconComponent
          size={14}
          className={`transition-colors duration-500 ${
            isActive ? "text-[#FCCA71]" : "text-[#877BF1]/70"
          }`}
        />
        <span>{t}</span>
      </div>
    );
  };

  return (
    <section
      id="solutions-content"
      className="relative w-full pt-10 pb-10 md:pt-20 md:pb-16 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Embedded CSS for custom keyframe animations */}
      <style>{`
        @keyframes cisFlowX { 0% { left: 0%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes cisFlowXReverse { 0% { right: 0%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { right: 100%; opacity: 0; } }
        @keyframes cisFlowY { 0% { top: 0%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes cisPulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Column: Eyebrow, Heading, Bullet List, Bottom Callout */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          
          {/* Eyebrow tag in matching hero style */}
          <div>
            {/* Desktop Original Pill */}
            <div className="hidden min-[1290px]:block opacity-30 justify-start mb-4">
              <span className="text-white text-lg font-normal font-sans tracking-tight">
                [
              </span>
              <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">
                the operational challenge
              </span>
              <span className="text-white text-lg font-normal font-sans tracking-tight">
                ]
              </span>
            </div>

            {/* Mobile Styled Glassmorphic Solutions Badge */}
            <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-4 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
              <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
                the operational challenge
              </span>
            </div>
            
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
                Every organization wants better customer experience.
              </span>{" "}
              <span className="text-[#CACBDB] font-light">
                Most have fragmented customer operations.
              </span>
            </h2>
          </div>

          {/* Monospace Bullet List */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4 font-mono text-[13px] sm:text-[14px] tracking-wide text-[#CACBDB]"
          >
            {expectations.map((x) => (
              <span key={x} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] mt-[7px] sm:mt-[8px] shrink-0" />
                <span>{x}</span>
              </span>
            ))}
          </Motion.div>

          {/* Bottom Callout Text */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="w-full mt-2"
          >
            <p className="font-semibold text-[19px] md:text-[24px] leading-snug text-white">
              Organizations don't need another chatbot. They need an operational
              system that connects every customer interaction{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                to the business process behind it.
              </span>
            </p>
          </Motion.div>
        </div>

        {/* Right Column: Top Description, Trace Card Box */}
        <div className="lg:col-span-5 flex flex-col gap-5 w-full lg:pt-[44px]">
          <p className="text-[#CACBDB] text-base md:text-[17px] font-normal leading-relaxed">
            Behind the scenes, customer communication often depends on
            disconnected systems, manual processes, multiple vendors, and
            fragmented data.
          </p>

          {/* Handoff Trace Chain Box */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border border-[#877BF1]/25 bg-[#0A0B28] rounded-[16px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] w-full max-w-[420px] mx-auto lg:mx-0"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#877BF1]/18 font-mono text-[11px] tracking-[0.12em] text-[#5C5F85] uppercase">
              <Warning size={15} className="text-[#FCCA71]" />
              one_customer_inquiry.trace — 8 handoffs
            </div>

            {/* Trace Nodes Snake Flow */}
            <div className="flex flex-col gap-5 px-6 py-5 relative">
              {/* Row 1: Left to Right */}
              <div className="flex items-center justify-between relative z-10">
                {renderBox(0)} {/* Phone */}
                <div className="flex-1 h-px bg-[#877BF1]/25 mx-2 relative">
                  {activeIndex === 0 && (
                    <span className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowX 1.8s linear infinite" }} />
                  )}
                </div>
                {renderBox(1)} {/* Email */}

                {/* Vertical connector down to Row 2 (Right side) */}
                <div className="absolute right-[55px] sm:right-[65px] top-full h-5 w-px bg-[#877BF1]/25 pointer-events-none">
                  {activeIndex === 1 && (
                    <span className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowY 1.8s linear infinite" }} />
                  )}
                </div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="flex items-center justify-between relative z-10">
                {renderBox(3)} {/* Excel */}
                <div className="flex-1 h-px bg-[#877BF1]/25 mx-2 relative">
                  {activeIndex === 2 && (
                    <span className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowXReverse 1.8s linear infinite" }} />
                  )}
                </div>
                {renderBox(2)} {/* CRM */}

                {/* Vertical connector down to Row 3 (Left side) */}
                <div className="absolute left-[55px] sm:left-[65px] top-full h-5 w-px bg-[#877BF1]/25 pointer-events-none">
                  {activeIndex === 3 && (
                    <span className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowY 1.8s linear infinite" }} />
                  )}
                </div>
              </div>

              {/* Row 3: Left to Right */}
              <div className="flex items-center justify-between relative z-10">
                {renderBox(4)} {/* Ops Team */}
                <div className="flex-1 h-px bg-[#877BF1]/25 mx-2 relative">
                  {activeIndex === 4 && (
                    <span className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowX 1.8s linear infinite" }} />
                  )}
                </div>
                {renderBox(5)} {/* Approval */}

                {/* Vertical connector down to Row 4 (Right side) */}
                <div className="absolute right-[55px] sm:right-[65px] top-full h-5 w-px bg-[#877BF1]/25 pointer-events-none">
                  {activeIndex === 5 && (
                    <span className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowY 1.8s linear infinite" }} />
                  )}
                </div>
              </div>

              {/* Row 4: Right to Left */}
              <div className="flex items-center justify-between relative z-10">
                {renderBox(7)} {/* Reply */}
                <div className="flex-1 h-px bg-[#877BF1]/25 mx-2 relative">
                  {activeIndex === 6 && (
                    <span className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_rgba(252,202,113,0.8)]" style={{ animation: "cisFlowXReverse 1.8s linear infinite" }} />
                  )}
                </div>
                {renderBox(6)} {/* ERP */}
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col gap-2 px-5 py-4 border-t border-[#877BF1]/18 font-mono text-[10px] tracking-widest uppercase">
              <span className="text-[#FCCA71]">
                ▲ every handoff adds delay, cost &amp; customer frustration
              </span>
              <span className="text-[#A9A0F5]">
                resolution: one connected interaction system ↓
              </span>
            </div>
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default CustomerInteractionChallenge;
