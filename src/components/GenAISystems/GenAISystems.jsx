import React from "react";
import { motion as Motion } from "framer-motion";

const systemsData = [
  {
    title: "Enterprise AI Agents",
    desc: "Autonomous and assisted AI agents designed to perform tasks, automate workflows, and support business operations.",
    icon: "/Solution_page/capability_1_5.svg",
  },
  {
    title: "Conversational AI Platforms",
    desc: "Intelligent chatbots and virtual assistants improving customer engagement, employee support, and service delivery.",
    icon: "/Solution_page/capability_2_6.svg",
  },
  {
    title: "Voice AI Systems",
    desc: "Voice interaction platforms powered by ASR, TTS, Natural Language Understanding, and LLMs.",
    icon: "/Solution_page/capability_3_7.svg",
  },
  {
    title: "Document Intelligence Systems",
    desc: "AI-powered processing that extracts, classifies, validates, and routes information from any document.",
    icon: "/Solution_page/capability_4_8.svg",
  },
  {
    title: "Enterprise Knowledge Systems",
    desc: "AI assistants that retrieve, summarize, and reason over enterprise knowledge using RAG.",
    icon: "/Solution_page/capability_1_5.svg",
  },
  {
    title: "AI Workflow Automation",
    desc: "Embed intelligence into operational workflows to automate repetitive tasks, approvals, and processes.",
    icon: "/Solution_page/capability_2_6.svg",
  },
  {
    title: "AI Decision Support Systems",
    desc: "Contextual recommendations and actionable insights for business and operational decision-making.",
    icon: "/Solution_page/capability_3_7.svg",
  },
  {
    title: "Custom LLM Applications",
    desc: "Domain-specific AI applications tailored to industry workflows, business rules, and organizational knowledge.",
    icon: "/Solution_page/capability_4_8.svg",
  },
  {
    title: "AI Integration Services",
    desc: "Integrate AI with ERP, CRM, HRMS, banking platforms, government systems, and enterprise applications.",
    icon: "/Solution_page/capability_1_5.svg",
  },
];

const GenAISystems = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      {/* Decorative Blur Background Spots */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between pb-4">
          {/* Left Block */}
          <div className="flex flex-col items-start justify-start">
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [what we engineer]
            </div>

            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  AI Systems
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin">
                  Built for
                </span>
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
                Production Environments
              </h3>
            </div>
          </div>

          {/* Right Block */}
          <div className="w-full lg:w-[360px] shrink-0 opacity-60 text-[#FBFBFF] font-sans text-[14px] font-normal leading-normal text-left lg:mb-2 lg:mr-24">
            Every system is engineered around your workflows, connected to your
            enterprise platforms, and governed for security, accuracy, and
            long-term operation.
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {systemsData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(167, 139, 250, 0.15)",
                borderColor: "rgba(99, 102, 241, 0.9)",
              }}
              className="flex flex-col justify-start items-start p-8 min-h-[200px] w-full bg-violet-400/10 rounded-[5px] border border-indigo-500/60 cursor-pointer transition-all duration-300 relative group"
            >
              {/* Glow Highlight Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px]" />

              {/* Icon + Number Row */}
              <div className="w-full flex items-center justify-between mb-6 shrink-0 relative z-10">
                <div className="w-7 h-6 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="text-white/25 text-[13px] font-medium font-sans tracking-widest">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
                <div className="text-[#E7E6FC] text-[18px] font-semibold font-sans leading-[24px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </div>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[22px] text-left">
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

export default GenAISystems;
