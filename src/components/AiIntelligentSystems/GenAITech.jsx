import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  Brain,
  Cpu,
  Robot,
  Wind,
  Link,
  BookOpen,
  Users,
  Gear,
  Tree,
  Graph,
  CirclesThreePlus,
  MagnifyingGlass,
  TerminalWindow,
  Lightning,
  Flask,
  Cube,
  Database,
  Leaf,
  StackSimple,
  CloudArrowUp,
  Cloud,
  Globe,
  ShieldCheck,
  FlowArrow,
  Eye,
  ChatText,
  Shield,
} from "@phosphor-icons/react";

const techCats = [
  {
    cat: "Foundation Models",
    items: [
      { name: "OpenAI GPT", icon: Sparkle },
      { name: "Anthropic Claude", icon: Brain },
      { name: "Google Gemini", icon: Cpu },
      { name: "Meta Llama", icon: Robot },
      { name: "Mistral", icon: Wind },
    ],
  },
  {
    cat: "AI Frameworks",
    items: [
      { name: "LangChain", icon: Link },
      { name: "LlamaIndex", icon: BookOpen },
      { name: "CrewAI", icon: Users },
      { name: "AutoGen", icon: Gear },
    ],
  },
  {
    cat: "Vector Databases",
    items: [
      { name: "Pinecone", icon: Tree },
      { name: "Weaviate", icon: Graph },
      { name: "ChromaDB", icon: CirclesThreePlus },
      { name: "FAISS", icon: MagnifyingGlass },
    ],
  },
  {
    cat: "Backend Technologies",
    items: [
      { name: "Python", icon: TerminalWindow },
      { name: "FastAPI", icon: Lightning },
      { name: "Flask", icon: Flask },
      { name: "Node.js", icon: Cube },
    ],
  },
  {
    cat: "Databases",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Leaf },
      { name: "Redis", icon: StackSimple },
      { name: "Elasticsearch", icon: MagnifyingGlass },
    ],
  },
  {
    cat: "Cloud Platforms",
    items: [
      { name: "Microsoft Azure", icon: CloudArrowUp },
      { name: "AWS", icon: Cloud },
      { name: "Google Cloud", icon: Globe },
    ],
  },
  {
    cat: "Monitoring & Governance",
    items: [
      { name: "LangSmith", icon: ShieldCheck },
      { name: "MLflow", icon: FlowArrow },
      { name: "OpenTelemetry", icon: Eye },
      { name: "Prompt Evaluation", icon: ChatText },
      { name: "AI Guardrails", icon: Shield },
    ],
  },
];

const TechCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(39, 41, 69, 1)",
        borderColor: "rgba(95, 95, 255, 1)"
      }}
      style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
      className="flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all duration-300 min-h-[68px] md:min-h-[78px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-18px)] max-w-[170px] xl:max-w-none p-2 gap-1.5"
    >
      {Icon && (
        <Icon size={22} className="text-[#FCCA71] shrink-0" weight="bold" />
      )}
      <span className="text-[#E7E6FC] text-center text-[11px] md:text-xs font-bold select-none leading-tight line-clamp-2">
        {item.name}
      </span>
    </Motion.div>
  );
};

const GenAITech = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden z-20 font-sans">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-center justify-center gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full text-center pb-4">
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [technology stack]
          </span>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-center font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              Enterprise-Grade
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              AI Infrastructure
            </span>
          </h2>
        </div>

        {/* Tabs Control Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full pb-6">
          {techCats.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#FCCA71] border-[#FCCA71] text-[#01031c] shadow-lg shadow-[#FCCA71]/25 font-bold"
                    : "bg-white/5 border-white/10 text-[#AAA9BE] hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.cat}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Panel */}
        <div className="w-full relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full relative z-10"
            >
              {techCats[activeTab].items.map((item, idx) => (
                <TechCard key={idx} item={item} />
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default GenAITech;
