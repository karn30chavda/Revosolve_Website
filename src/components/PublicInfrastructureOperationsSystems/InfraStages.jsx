import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { User, UsersThree, Buildings } from "@phosphor-icons/react";

const orgData = [
  {
    label: "Survey & Engineering Consultants",
    icon: User,
    size: 56,
    iconSize: 22,
    delivers:
      "Centralized surveys, field teams, deliverables and reporting from one system.",
  },
  {
    label: "Growing EPC & Infrastructure Cos.",
    icon: UsersThree,
    size: 70,
    iconSize: 28,
    delivers:
      "One connected system for execution, procurement, finance and reporting.",
  },
  {
    label: "Large Infrastructure Enterprises",
    icon: Buildings,
    size: 84,
    iconSize: 34,
    delivers:
      "Enterprise-scale portfolio governance, portfolio intelligence and reporting.",
  },
];

const nodePositions = [
  { left: "13%", top: "87.5%" },
  { left: "50%", top: "54.16%" },
  { left: "87%", top: "20.83%" },
];

const InfraStages = () => {
  const [targetStage, setTargetStage] = useState(0);
  const [displayStage, setDisplayStage] = useState(0);
  const displayStageRef = useRef(displayStage);

  useEffect(() => {
    displayStageRef.current = displayStage;
  }, [displayStage]);

  const pathRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 130, y: 525 });

  // Auto-advance target stage forward every 3.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setTargetStage((prev) => (prev + 1) % orgData.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Smoothly animate particle along curve, activating node EXACTLY upon visual arrival
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLen = path.getTotalLength();

    if (targetStage === 0) {
      // Reset position to Node 0 start
      const point = path.getPointAtLength(0);
      setDotPos({ x: point.x, y: point.y });
      setDisplayStage(0);
      return;
    }

    let animId;
    const startTime = performance.now();
    const duration = 1200; // 1.2s travel time along curve

    const startPct = (targetStage - 1) / (orgData.length - 1);
    const endPct = targetStage / (orgData.length - 1);

    const animateDot = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Trigger node activation at 75% trajectory so 500ms glow transition peaks right at center contact
      if (progress >= 0.75 && displayStageRef.current !== targetStage) {
        setDisplayStage(targetStage);
      }

      // Smooth easeInOutCubic
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPct = startPct + (endPct - startPct) * ease;
      const point = path.getPointAtLength(currentPct * totalLen);
      setDotPos({ x: point.x, y: point.y });

      if (progress < 1) {
        animId = requestAnimationFrame(animateDot);
      }
    };

    animId = requestAnimationFrame(animateDot);
    return () => cancelAnimationFrame(animId);
  }, [targetStage]);

  const active = orgData[displayStage];

  return (
    <section
      id="stages"
      className="relative w-full py-10 md:py-14 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-310 mx-auto relative z-10 flex flex-col items-start">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-8 md:mb-10"
        >
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-3 block text-left">
            [built for every stage]
          </span>
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              Infrastructure organizations evolve.
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              Your system should evolve with them.
            </span>
          </h2>
        </Motion.div>

        {/* Stage Curve Diagram Container */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 my-10 md:my-14">
          {/* Connecting S-Curve SVG */}
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none"
          >
            {/* Background Dashed Path */}
            <path
              ref={pathRef}
              d="M 130 525 Q 380 525 500 325 Q 620 125 870 125"
              fill="none"
              stroke="rgba(135,123,241,0.3)"
              strokeWidth="6"
              strokeDasharray="14 18"
            />

            {/* Synchronized Traveling Golden Particle */}
            <circle
              cx={dotPos.x}
              cy={dotPos.y}
              r="14"
              fill="#FCCA71"
              style={{
                filter:
                  "drop-shadow(0 0 16px #FCCA71) drop-shadow(0 0 30px rgba(252,202,113,0.8))",
              }}
            />
          </svg>

          {/* Interactive Stage Circles with Overhead Labels */}
          {orgData.map((o, i) => {
            const isActive = i === displayStage;
            const pos = nodePositions[i];
            const Icon = o.icon;

            return (
              <React.Fragment key={o.label}>
                {/* Overhead Stage Label - EXACT HEIGHT OFFSET ABOVE CIRCLE TOP */}
                <span
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: `translate(-50%, calc(-100% - ${
                      o.size / 2 + 14
                    }px))`,
                  }}
                  className={`absolute font-mono text-[11px] sm:text-[12px] text-center w-36 sm:w-44 leading-tight transition-colors duration-500 z-20 ${
                    isActive ? "text-[#FCCA71] font-bold" : "text-[#5C5F85]"
                  }`}
                >
                  {o.label}
                </span>

                {/* Stage Circle Button - EXACT GEOMETRIC CENTER AT pos.left, pos.top */}
                <button
                  onClick={() => {
                    setTargetStage(i);
                    setDisplayStage(i);
                  }}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: "translate(-50%, -50%)",
                    width: o.size,
                    height: o.size,
                  }}
                  className={`absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 z-10 ${
                    isActive
                      ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_30px_rgba(252,202,113,0.6)] scale-110"
                      : "border border-[#877BF1]/30 bg-[#0F1034]"
                  }`}
                >
                  <Icon
                    size={o.iconSize}
                    className={`transition-colors duration-500 ${
                      isActive ? "text-[#FCCA71]" : "text-[#877BF1]/50"
                    }`}
                  />
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Dynamic Deliverables Card */}
        <Motion.div
          key={displayStage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-3xl mx-auto border border-[#877BF1]/25 bg-linear-to-br from-[#12143E]/70 to-[#0A0B28]/70 rounded-xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#FCCA71] font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FCCA71] animate-pulse" />
            {active.label}
          </div>
          <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#CACBDB] m-0">
            {active.delivers}
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default InfraStages;
