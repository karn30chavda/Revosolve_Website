import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  Broadcast,
  Buildings,
  CurrencyCircleDollar,
  Fingerprint,
  ChatsCircle,
  BracketsCurly,
  Hexagon,
} from "@phosphor-icons/react";

const integData = [
  {
    label: "Tender Platforms",
    icon: Broadcast,
    items: ["Tender247", "Tender Tiger", "CPPP", "GeM"],
    purpose:
      "Automatically discover opportunities and centralize bid tracking from one platform.",
  },
  {
    label: "Enterprise Applications",
    icon: Buildings,
    items: ["ERPNext", "SAP", "Oracle", "Dynamics", "Zoho"],
    purpose:
      "Synchronize procurement, finance, and HR data with existing enterprise applications.",
  },
  {
    label: "Finance & Compliance",
    icon: CurrencyCircleDollar,
    items: ["GST Portal", "Tally", "Busy", "Zoho Books", "E-Invoicing"],
    purpose:
      "Support financial governance while reducing duplicate data entry.",
  },
  {
    label: "Workforce & Attendance",
    icon: Fingerprint,
    items: ["ESSL Biometric", "RFID", "GPS Attendance", "HRMS"],
    purpose:
      "Maintain a single workforce record across HQ, sites, and field operations.",
  },
  {
    label: "Communication",
    icon: ChatsCircle,
    items: ["WhatsApp Business API", "Teams", "Slack", "SMS Gateways"],
    purpose:
      "Deliver real-time updates, approvals, and alerts to stakeholders.",
  },
  {
    label: "Open API Architecture",
    icon: BracketsCurly,
    items: ["Custom Systems", "Legacy Databases", "IoT Devices"],
    purpose:
      "API-first architecture integrates with proprietary and legacy systems without disruption.",
  },
];

const convergenceDetail = {
  label: "All Systems Synchronized",
  isImage: true,
  imageSrc: "/PublicInfrastructureOperationsSystems/Revosolve.webp",
  items: ["Tenders", "ERP / SAP", "GST & Tally", "Biometrics", "WhatsApp", "Open APIs"],
  purpose:
    "Every enterprise system, field device, and financial platform operates in 100% live synchronization with RevoSolve Core.",
};

const InfraIntegrations = () => {
  const [isInView, setIsInView] = useState(false);
  const [targetStep, setTargetStep] = useState(-1);
  const [displayStep, setDisplayStep] = useState(-1);

  // Auto-advance target step forward when section is in viewport
  useEffect(() => {
    if (!isInView || targetStep === -1) return;

    // Snappy 1.8s reset for Convergence (step 6), 3.8s for line drawing steps 0..5
    const intervalTime = targetStep === 6 ? 1800 : 3800;

    const timer = setTimeout(() => {
      setTargetStep((prev) => {
        const next = (prev + 1) % 7;
        if (next === 0) {
          setDisplayStep(-1); // Reset displayStep so Node 0 line drawing fires cleanly!
        }
        return next;
      });
    }, intervalTime);

    return () => clearTimeout(timer);
  }, [isInView, targetStep]);

  // Update displayStep (active node highlight & detail card) after golden line arrives
  useEffect(() => {
    if (!isInView || targetStep === -1) return;

    // Instant 100ms delay for step 6 (All Active Core Convergence), 2200ms for line drawing nodes 0..5
    const delay = targetStep === 6 ? 100 : 2200;

    const timer = setTimeout(() => {
      setDisplayStep(targetStep);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, targetStep]);

  const isAllActive = displayStep === 6;
  const activeDetail =
    displayStep === -1
      ? integData[0]
      : isAllActive
      ? convergenceDetail
      : integData[displayStep];
  const ActiveIcon = activeDetail.icon;

  return (
    <Motion.section
      id="integrations"
      onViewportEnter={() => {
        if (!isInView) {
          setIsInView(true);
          setTargetStep(0);
          setDisplayStep(-1);
        }
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-full py-12 md:py-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      <style>{`
        @keyframes pioLineGrow {
          from { stroke-dashoffset: 38; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-310 mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="max-w-xl">
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [enterprise integrations]
          </span>
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              Connect your existing ecosystem
            </span>{" "}
            <span className="text-[#CACBDB] font-light">— not replace it</span>
          </h2>
        </div>
        <p className="text-[#CACBDB]/70 text-sm md:text-[14.5px] leading-relaxed max-w-md m-0">
          Seamlessly integrate with standard infrastructure, financial, and operational software.
        </p>
      </div>

      {/* Main Container: 2-Column Grid */}
      <div className="max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* LEFT COLUMN: Orbit Diagram */}
        <div className="lg:col-span-6 relative w-full max-w-120 mx-auto aspect-square">
          {/* Main SVG Layer for Orbit Ring, Spoke Lines, and Tip Dot (z-10 - Behind Central Core z-20) */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
            {/* Dashed Orbit Ring */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="rgba(135,123,241,0.2)"
              strokeWidth="0.5"
              strokeDasharray="1.5 2.5"
            />

            {/* Connecting Spoke Lines */}
            {integData.map((t, i) => {
              const angle = ((-90 + i * 60) * Math.PI) / 180;
              const x = 50 + 38 * Math.cos(angle);
              const y = 50 + 38 * Math.sin(angle);
              const isPastLine = displayStep !== -1 && (isAllActive || i <= displayStep);
              const isGrowingLine = !isAllActive && targetStep === i && displayStep !== targetStep;

              return (
                <g key={t.label}>
                  {/* Base Spoke Line */}
                  <line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke={
                      isPastLine
                        ? "rgba(252,202,113,0.85)"
                        : "rgba(135,123,241,0.2)"
                    }
                    strokeWidth={isPastLine ? "0.45" : "0.2"}
                  />

                  {/* Slowly Growing Golden Line from Center (50,50) to Target Node (x,y) */}
                  {isGrowingLine && (
                    <line
                      key={`line-${targetStep}`}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="rgba(252,202,113,0.95)"
                      strokeWidth="0.45"
                      strokeDasharray="38"
                      strokeDashoffset="38"
                      style={{ animation: "pioLineGrow 3.0s ease-out forwards" }}
                    />
                  )}
                </g>
              );
            })}

            {/* Traveling Golden Arrowhead Gliding Outward Along Extending Spoke Line */}
            {!isAllActive && targetStep >= 0 && targetStep < 6 && displayStep !== targetStep && (
              <Motion.g
                key={`arrow-group-${targetStep}`}
                initial={{ x: 50, y: 50 }}
                animate={{
                  x: 50 + 38 * Math.cos(((-90 + targetStep * 60) * Math.PI) / 180),
                  y: 50 + 38 * Math.sin(((-90 + targetStep * 60) * Math.PI) / 180),
                }}
                transition={{ duration: 3.0, ease: "easeOut" }}
              >
                {/* Micro Golden Arrowhead Oriented Along Spoke Angle */}
                <g transform={`rotate(${-90 + targetStep * 60 + 90})`}>
                  {/* Subtle Outer Glow Arrowhead */}
                  <path
                    d="M 0 -1.4 L 1.0 0.9 L 0 0.3 L -1.0 0.9 Z"
                    fill="#FCCA71"
                    opacity={0.4}
                    transform="scale(1.1)"
                  />
                  {/* Small Solid Golden Arrowhead */}
                  <path
                    d="M 0 -1.4 L 1.0 0.9 L 0 0.3 L -1.0 0.9 Z"
                    fill="#FCCA71"
                    style={{ filter: "drop-shadow(0 0 3px #FCCA71)" }}
                  />
                </g>
              </Motion.g>
            )}
          </svg>

          {/* Central REVOSOLVE CORE Node (z-20 - Covers Center (50,50) So Line & Dot Emerge Together) */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square rounded-full flex flex-col items-center justify-center transition-all duration-700 z-20 cursor-pointer ${
              isAllActive
                ? "bg-linear-to-br from-[#FCCA71] to-[#877BF1] text-black shadow-[0_0_45px_rgba(252,202,113,0.9)] border-2 border-white"
                : "bg-linear-to-br from-[#5e9dff] to-[#1a2a6c] text-white shadow-[0_0_35px_rgba(94,157,255,0.45)] border border-[#877BF1]/30"
            }`}
            onClick={() => {
              setTargetStep(6);
              setDisplayStep(6);
            }}
          >
            <img
              src="/PublicInfrastructureOperationsSystems/Revosolve.webp"
              alt="RevoSolve Core"
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 object-contain mb-0.5"
            />
            <span
              className={`font-mono text-[8px] font-bold tracking-wider text-center leading-tight mt-0.5 ${
                isAllActive ? "text-black" : "text-white"
              }`}
            >
              REVOSOLVE
              <br />
              CORE
            </span>
          </div>

          {/* 6 Clockwise Orbit Nodes (z-30) */}
          {integData.map((t, i) => {
            const angle = ((-90 + i * 60) * Math.PI) / 180;
            const x = 50 + 38 * Math.cos(angle);
            const y = 50 + 38 * Math.sin(angle);
            const isNodeActive = displayStep !== -1 && (isAllActive || i <= displayStep);
            const isCurrent = !isAllActive && i === displayStep;
            const Icon = t.icon;
            const isTopNode = i === 0;

            return (
              <React.Fragment key={t.label}>
                {/* Orbit Circle Button - EXACT GEOMETRIC CENTER AT x%, y% */}
                <button
                  onClick={() => {
                    setTargetStep(i);
                    setDisplayStep(i);
                  }}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 z-30 ${
                    isCurrent
                      ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_24px_rgba(252,202,113,0.6)]"
                      : isNodeActive
                      ? "border border-[#FCCA71]/80 bg-[#12143E] shadow-[0_0_15px_rgba(252,202,113,0.3)]"
                      : "border border-[#877BF1]/30 bg-[#0B0C26]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-colors duration-500 ${
                      isNodeActive ? "text-[#FCCA71]" : "text-[#877BF1]/40"
                    }`}
                  />
                </button>

                {/* Independent Overhead / Underneath Label */}
                <span
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: isTopNode
                      ? "translate(-50%, calc(-100% - 34px))"
                      : "translate(-50%, 34px)",
                  }}
                  className={`absolute font-mono text-[9px] sm:text-[9.5px] text-center w-24 leading-tight transition-colors duration-500 z-30 pointer-events-none ${
                    isCurrent
                      ? "text-[#FCCA71] font-bold"
                      : isNodeActive
                      ? "text-white font-medium"
                      : "text-[#5C5F85]"
                  }`}
                >
                  {t.label}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Integration Details Card */}
        <Motion.div
          key={displayStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-6 border border-[#877BF1]/25 bg-linear-to-br from-[#12143E]/70 to-[#0A0B28]/70 rounded-xl p-6 sm:p-8 min-h-65 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-3 mb-5">
            {activeDetail.isImage ? (
              <img
                src={activeDetail.imageSrc}
                alt=""
                className="w-6 h-6 object-contain"
              />
            ) : (
              <ActiveIcon size={24} className="text-[#FCCA71]" />
            )}
            <h3 className="text-lg sm:text-xl font-bold text-white m-0">
              {activeDetail.label}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {activeDetail.items.map((it) => (
              <span
                key={it}
                className="font-mono text-xs text-[#CACBDB] border border-[#877BF1]/25 bg-[#877BF1]/10 px-3 py-1.5 rounded-md"
              >
                {it}
              </span>
            ))}
          </div>

          <div className="border-t border-[#877BF1]/20 pt-5">
            <div className="font-mono text-[10.5px] tracking-widest uppercase text-[#877BF1] font-semibold mb-2">
              Purpose
            </div>
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#CACBDB] m-0">
              {activeDetail.purpose}
            </p>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default InfraIntegrations;
