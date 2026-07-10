import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import {
  User,
  ArrowsInCardinal,
  Robot,
  Fingerprint,
  TreeStructure,
  FlowArrow,
  PlugsConnected,
  UsersThree,
  CheckCircle,
  BellRinging,
  ChartLineUp,
} from "@phosphor-icons/react";

const flowStages = [
  {
    n: "01",
    icon: User,
    title: "Customer",
    desc: "A request arrives — any audience, any time.",
  },
  {
    n: "02",
    icon: ArrowsInCardinal,
    title: "Channel",
    desc: "Voice, chat, WhatsApp, or email — captured identically.",
  },
  {
    n: "03",
    icon: Robot,
    title: "AI Agent",
    desc: "Understands intent, answers instantly, or routes intelligently.",
  },
  {
    n: "04",
    icon: Fingerprint,
    title: "Identity Verification",
    desc: "OTP, KYC, document or facial verification — security first.",
  },
  {
    n: "05",
    icon: TreeStructure,
    title: "Business Rules",
    desc: "Eligibility, routing, and escalation logic applied automatically.",
  },
  {
    n: "06",
    icon: FlowArrow,
    title: "Workflow Automation",
    desc: "The right internal process triggers without manual handoffs.",
  },
  {
    n: "07",
    icon: PlugsConnected,
    title: "ERP / CRM",
    desc: "Business systems update automatically — no re-keying.",
  },
  {
    n: "08",
    icon: UsersThree,
    title: "Operations Team",
    desc: "Humans handle only what genuinely needs human judgment.",
  },
  {
    n: "09",
    icon: CheckCircle,
    title: "Resolution",
    desc: "The request is closed — traceably, measurably.",
  },
  {
    n: "10",
    icon: BellRinging,
    title: "Customer Notification",
    desc: "The customer is informed proactively, on their channel.",
  },
  {
    n: "11",
    icon: ChartLineUp,
    title: "Analytics Dashboard",
    desc: "Every interaction feeds operational intelligence.",
  },
];

const CustomerInteractionApproach = () => {
  const [activeStep, setActiveStep] = useState(0);
  const autoPlayRef = useRef(null);
  const STEP_DURATION = 3500; // ms

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowStages.length);
    }, STEP_DURATION);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <section
      id="flow"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start w-full">
        
        {/* Section Header - Title on Left, Description on Right */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full mb-10"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [system flow]
          </span>

          {/* Left/Right Flex Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left max-w-xl">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                From Customer Request
              </span>{" "}
              <span className="text-[#CACBDB] font-light">
                to Operational Resolution
              </span>
            </h2>

            <div className="max-w-xl lg:pb-1 shrink-0 lg:w-[45%]">
              <p className="text-[#CACBDB] text-[13.5px] md:text-[14px] font-normal leading-relaxed opacity-70 text-left">
                Watch a single request travel through the system — verified, routed, automated, resolved, and measured. No manual handoffs. No lost context.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Steps Grid - Small, Compact Cards in 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {flowStages.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isLast = idx === flowStages.length - 1;

            return (
              <div
                key={step.n}
                className={`flex items-center gap-4 p-4 rounded-[6px] border transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? "border-[#877BF1] bg-[#121344] shadow-[0_0_12px_rgba(135,123,241,0.12)]"
                    : "border-[#877BF1]/18 bg-[#0F1034]/40"
                } ${isLast ? "md:col-span-2 md:max-w-[70%] md:mx-auto md:w-full" : ""}`}
              >
                {/* Accent Highlight Left Edge */}
                <div className={`absolute top-0 left-0 bottom-0 w-[3px] transition-all duration-300 ${
                  isActive ? "bg-[#FCCA71]" : "bg-transparent"
                }`} />

                {/* Circular Rotational Flow Point Indicator */}
                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90 z-0" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10.5"
                      className="fill-none stroke-[#877BF1]/20"
                      strokeWidth="1.5"
                    />
                    {isActive && (
                      <Motion.circle
                        cx="12"
                        cy="12"
                        r="10.5"
                        className="fill-none stroke-[#FCCA71]"
                        strokeWidth="2"
                        strokeDasharray="65.97"
                        initial={{ strokeDashoffset: 65.97 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                      />
                    )}
                  </svg>
                  
                  {/* Central Icon */}
                  <div className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-[#FCCA71]" : "text-[#877BF1]/60"
                  }`}>
                    <Icon
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? "scale-110" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Text details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3
                      className={`font-semibold text-[14.5px] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#E7E6FC]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {isActive && (
                      <span className="text-[8.5px] font-mono font-bold tracking-widest text-[#01031c] bg-[#FCCA71] px-1.5 py-0.5 rounded-[1.5px] uppercase">
                        active
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-[#CACBDB] mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step index */}
                <span
                  className={`text-[11px] font-mono tracking-widest shrink-0 ml-3 transition-colors duration-300 ${
                    isActive ? "text-[#FCCA71]/80" : "text-[#5C5F85]"
                  }`}
                >
                  {step.n}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CustomerInteractionApproach;
