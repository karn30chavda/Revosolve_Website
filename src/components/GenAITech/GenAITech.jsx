import React from "react";
import { motion as Motion } from "framer-motion";

const techCategories = [
  {
    category: "Foundation Models",
    items: ["OpenAI GPT", "Anthropic Claude", "Google Gemini", "Meta Llama", "Mistral"],
  },
  {
    category: "AI Frameworks",
    items: ["LangChain", "LlamaIndex", "CrewAI", "Semantic Kernel"],
  },
  {
    category: "Vector Databases",
    items: ["Pinecone", "Weaviate", "ChromaDB", "FAISS"],
  },
  {
    category: "Backend Technologies",
    items: ["Python", "FastAPI", "Flask", "Node.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Cloud Platforms",
    items: ["Microsoft Azure", "AWS", "Google Cloud"],
  },
  {
    category: "AI Monitoring & Governance",
    items: ["LangSmith", "MLflow", "OpenTelemetry", "Prompt Evaluation", "AI Guardrails"],
  },
];

const GenAITech = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-10">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-2">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [technology stack]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Enterprise-Grade
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin">
                AI Infrastructure
              </span>
            </h2>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="w-full flex flex-col gap-5">
          {techCategories.map((cat, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="w-full flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 border-b border-white/5 pb-5"
            >
              {/* Category Label */}
              <div className="w-full lg:w-[280px] shrink-0 text-[#E7E6FC] text-[16px] font-semibold font-sans">
                {cat.category}
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-violet-400/10 border border-indigo-500/40 px-4 py-1.5 text-[#CACBDB] text-[13px] font-normal font-sans hover:border-indigo-500/90 hover:bg-violet-400/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenAITech;
