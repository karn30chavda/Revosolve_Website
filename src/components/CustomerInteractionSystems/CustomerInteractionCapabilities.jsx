import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Waveform,
  Robot,
  ArrowsInCardinal,
  Fingerprint,
  FlowArrow,
  TreeStructure,
  Kanban,
  BookOpenText,
  ChartLineUp,
} from "@phosphor-icons/react";

const capabilitiesData = [
  {
    n: "02",
    icon: Waveform,
    t: "AI Voice Agents",
    d: "Natural voice conversations powered by ASR, NLU, Large Language Models, and Text-to-Speech.",
  },
  {
    n: "03",
    icon: Robot,
    t: "Conversational AI",
    d: "Intelligent virtual assistants across websites, mobile applications, WhatsApp, and messaging platforms.",
  },
  {
    n: "04",
    icon: ArrowsInCardinal,
    t: "Omnichannel Communication",
    d: "Consistent customer interactions across voice, email, WhatsApp, web chat, SMS, and mobile apps.",
  },
  {
    n: "05",
    icon: Fingerprint,
    t: "Customer Identity Verification",
    d: "Secure verification through OTP, document validation, facial verification, KYC, KYB, and enterprise authentication.",
  },
  {
    n: "06",
    icon: FlowArrow,
    t: "Workflow Automation",
    d: "Automatically trigger internal business workflows based on customer requests.",
  },
  {
    n: "07",
    icon: TreeStructure,
    t: "Business Rules Engine",
    d: "Define routing logic, eligibility, service rules, escalations, and decisions without changing code.",
  },
  {
    n: "08",
    icon: Kanban,
    t: "Case Management",
    d: "Track every interaction from initiation to resolution through a centralized operational dashboard.",
  },
  {
    n: "09",
    icon: BookOpenText,
    t: "Knowledge Intelligence",
    d: "AI-powered knowledge retrieval giving agents and customers accurate responses from enterprise documentation.",
  },
  {
    n: "10",
    icon: ChartLineUp,
    t: "Analytics & Operational Intelligence",
    d: "Call volumes, CSAT, handling time, agent productivity, resolution rates, channel performance, and KPIs.",
  },
];

const CustomerInteractionCapabilities = () => {
  return (
    <section
      id="capabilities"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#FCCA71]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-start w-full mb-12"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [capabilities]
          </span>

          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              System Capabilities
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              Built around customer operations.
            </span>
          </h2>
        </Motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {capabilitiesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(135, 123, 241, 0.12)",
                  borderColor: "rgba(135, 123, 241, 0.7)",
                }}
                className="flex flex-col justify-start items-start p-6 w-full h-full bg-[#0F1034]/40 rounded-[8px] border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full">
                  {/* Top Row: Icon */}
                  <div className="text-[#FCCA71] mb-5 shrink-0">
                    <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold text-[16px] sm:text-[17px] text-[#E7E6FC] mb-2 group-hover:text-white transition-colors duration-300">
                    {item.t}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#CACBDB]">
                    {item.d}
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

export default CustomerInteractionCapabilities;
