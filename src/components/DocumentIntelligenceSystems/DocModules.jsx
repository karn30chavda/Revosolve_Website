import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Scan,
  Brain,
  FlowArrow,
  Sliders,
  Path,
  PlugsConnected,
  ChartLineUp,
} from "@phosphor-icons/react";

const modulesList = [
  {
    title: "OCR Engine",
    desc: "High-accuracy multilingual OCR for structured and semi-structured documents.",
    icon: Scan,
  },
  {
    title: "AI Understanding Engine",
    desc: "Context-aware extraction powered by Large Language Models and Machine Learning.",
    icon: Brain,
  },
  {
    title: "Workflow Engine",
    desc: "Configurable approval workflows without custom development.",
    icon: FlowArrow,
  },
  {
    title: "Business Rules Engine",
    desc: "Automate validations, calculations, compliance checks, and routing logic.",
    icon: Sliders,
  },
  {
    title: "Journey Builder",
    desc: "Visual no-code workflow designer.",
    icon: Path,
  },
  {
    title: "Integration Hub",
    desc: "REST APIs, Webhooks, and enterprise connectors.",
    icon: PlugsConnected,
  },
  {
    title: "Analytics & Monitoring",
    desc: "Operational dashboards and business insights.",
    icon: ChartLineUp,
  },
];

const ModuleCard = ({ item, idx }) => (
  <Motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (idx % 4) * 0.05 }}
    whileHover={{
      scale: 1.015,
      backgroundColor: "rgba(167, 139, 250, 0.12)",
      borderColor: "rgba(99, 102, 241, 0.7)",
    }}
    style={{ backgroundColor: "rgba(29, 30, 50, 0.25)", borderColor: "rgba(135, 123, 241, 0.3)" }}
    className="flex flex-col justify-start items-start p-8 min-h-[200px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
  >
    {/* Card Glow Effect */}
    <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none" />

    {/* Icon */}
    <div className="mb-5 shrink-0 relative z-10 text-[#FCCA71] group-hover:text-white transition-colors duration-300">
      {item.icon && <item.icon size={28} weight="light" />}
    </div>

    {/* Text Content Block */}
    <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
      <h4 className="text-[#E7E6FC] text-lg font-semibold font-sans leading-snug text-left group-hover:text-white transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-[#AAA9BE] text-sm font-normal font-sans leading-relaxed text-left opacity-80">
        {item.desc}
      </p>
    </div>
  </Motion.div>
);

const DocModules = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-4">
          {/* Eyebrow */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [Revodox Platform Modules]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans flex flex-wrap items-baseline gap-x-3">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
              Seven engines,
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin inline-block">
              one document ecosystem
            </span>
          </h2>
        </div>

        {/* Grid rows wrapper — tighter gap between rows */}
        <div className="flex flex-col gap-6 w-full">
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {modulesList.slice(0, 4).map((item, idx) => (
              <ModuleCard key={idx} item={item} idx={idx} />
            ))}
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {modulesList.slice(4).map((item, idx) => (
              <ModuleCard key={idx + 4} item={item} idx={idx + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocModules;
