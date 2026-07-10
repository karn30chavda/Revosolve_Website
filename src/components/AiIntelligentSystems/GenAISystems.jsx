import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Robot,
  Chats,
  Waveform,
  FileText,
  Brain,
  FlowArrow,
  Compass,
  Code,
  Plugs,
} from "@phosphor-icons/react";

const systemsData = [
  {
    num: "01",
    title: "Enterprise AI Agents",
    desc: "Autonomous and assisted AI agents designed to perform tasks, automate workflows, and support business operations.",
    icon: Robot,
  },
  {
    num: "02",
    title: "Conversational AI Platforms",
    desc: "Intelligent chatbots and virtual assistants improving customer engagement, employee support, and service delivery.",
    icon: Chats,
  },
  {
    num: "03",
    title: "Voice AI Systems",
    desc: "Voice interaction platforms powered by ASR, TTS, Natural Language Understanding, and LLMs.",
    icon: Waveform,
  },
  {
    num: "04",
    title: "Document Intelligence Systems",
    desc: "AI-powered processing that extracts, classifies, validates, and routes information from any document.",
    icon: FileText,
  },
  {
    num: "05",
    title: "Enterprise Knowledge Systems",
    desc: "AI assistants that retrieve, summarize, and reason over enterprise knowledge using RAG.",
    icon: Brain,
  },
  {
    num: "06",
    title: "AI Workflow Automation",
    desc: "Embed intelligence into operational workflows to automate repetitive tasks, approvals, and processes.",
    icon: FlowArrow,
  },
  {
    num: "07",
    title: "AI Decision Support Systems",
    desc: "Contextual recommendations and actionable insights for business and operational decision-making.",
    icon: Compass,
  },
  {
    num: "08",
    title: "Custom LLM Applications",
    desc: "Domain-specific AI applications tailored to industry workflows, business rules, and organizational knowledge.",
    icon: Code,
  },
  {
    num: "09",
    title: "AI Integration Services",
    desc: "Integrate AI with ERP, CRM, HRMS, banking platforms, government systems, and enterprise applications.",
    icon: Plugs,
  },
];

const GenAISystems = () => {
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
              [what we engineer]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="font-black block">
                  <span className="text-[#877BF1]">AI systems </span>
                  <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">designed around</span>
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  operational workflows
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1 text-left">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70">
              AI should become part of the operational backbone of an organization – not remain an isolated application.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {systemsData.map((item, idx) => {
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

                {/* Corner Pattern overlay */}
                {idx === 0 ? (
                  <img 
                    src="/AiIntelligentSystems/build_bg_pattern.svg" 
                    alt="" 
                    className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                  />
                ) : (
                  <img 
                    src="/AiIntelligentSystems/build_bg_pattern.svg" 
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
                  <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h4>
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

export default GenAISystems;
