import React from "react";
import { motion as Motion } from "framer-motion";

// Group configurations
const modelItems = [
  { name: "OpenAI GPT", logoSrc: "/AI_Intelligence/openai.svg", lighten: true },
  { name: "Anthropic Claude", logoSrc: "/AI_Intelligence/Claude_AI_logo.svg", lighten: true },
  { name: "Google Gemini", logoSrc: "/AI_Intelligence/Google_Gemini_logo.svg", lighten: true },
  { name: "Meta Llama", logoSrc: "/AI_Intelligence/Meta_Platforms.svg", lighten: true },
  { name: "Mistral AI", logoSrc: "/AI_Intelligence/mistral-ai.svg", lighten: true }
];

const orchestrationItems = [
  { name: "LangChain", logoSrc: "/AI_Intelligence/LangChain_Logo.svg", lighten: true },
  { name: "LlamaIndex", logoSrc: "/AI_Intelligence/llamaindex.svg", lighten: true },
  { name: "CrewAI", logoSrc: "/AI_Intelligence/crewai.svg", lighten: true, zoomMax: true }, 
  { name: "AutoGen", logoSrc: "/AI_Intelligence/autogen.svg", lighten: true, zoomMax: true }
];

const retrievalItems = [
  { name: "Pinecone", logoSrc: "/AI_Intelligence/pinecone.svg", lighten: true },
  { name: "Weaviate", logoSrc: "/AI_Intelligence/weaviate.svg", lighten: true, zoomLarge: true },
  { name: "ChromaDB", logoSrc: "/AI_Intelligence/Chromadb.svg", isTextLayout: true },
  { name: "PostgreSQL (pgvector)", logoSrc: "/EnterpriceApplication_System/postgresql.svg", lighten: true, subtext: "pgvector" }
];

const techGroups = [
  {
    title: "", // No title for the first group
    items: modelItems
  },
  {
    title: "AI Orchestration & Frameworks",
    items: orchestrationItems
  },
  {
    title: "Vector Databases & Retrieval",
    items: retrievalItems
  }
];

const AiTechStack = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden z-20 font-sans">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-center justify-start">
        
        {/* Main Section Header */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="text-white text-[14px] md:text-[18px] font-normal uppercase tracking-[0.264px] opacity-30 mb-3">
            [tech stack]
          </div>
          <h2 className="text-2xl md:text-4xl xl:text-[40px] font-black leading-tight tracking-[0.264px]">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              The AI Tech Stack
            </span>
          </h2>
          <h3 className="text-[#CACBDB] text-lg md:text-xl xl:text-[22px] font-light mt-3 opacity-70 max-w-2xl leading-normal">
            State-of-the-art models, orchestration frameworks, and retrieval systems we utilize
          </h3>
        </div>

        {/* Separated Tech Groups */}
        <div className="flex flex-col gap-10 md:gap-16 w-full relative z-10">
          {techGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col items-center w-full">
              
              {/* Group Title - Centered without side-borders or descriptions */}
              {group.title && (
                <div className="flex flex-col items-center justify-center w-full mb-6 text-center">
                  <h4 className="text-[#E7E6FC] text-[18px] md:text-[22px] font-bold tracking-wide">
                    {group.title}
                  </h4>
                </div>
              )}

              {/* Group Centered Flex Layout - matching grid-item sizes but centered */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full">
                {group.items.map((item, idx) => {
                  const isTextLayout = item.isTextLayout;
                  
                  return (
                    <Motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(39, 41, 69, 1)",
                        borderColor: "rgba(95, 95, 255, 1)"
                      }}
                      style={{ backgroundColor: "rgba(29, 30, 50, 1)", borderColor: "rgba(95, 95, 255, 0.4)" }}
                      className={`flex items-center justify-center rounded-xl border-2 cursor-pointer transition-all duration-300 min-h-[64px] md:min-h-[76px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-18px)] max-w-[190px] xl:max-w-none ${
                        isTextLayout 
                          ? "flex-row gap-2 sm:gap-2.5 p-2 sm:p-3" 
                          : item.zoomMax 
                            ? "flex-col p-1.5 sm:p-2"
                            : "flex-col p-2.5 sm:p-3"
                      }`}
                    >
                      {isTextLayout ? (
                        <div className="flex items-center justify-center gap-2">
                          {item.name === "ChromaDB" && (
                            <img 
                              src={item.logoSrc} 
                              alt={item.name} 
                              className="w-auto h-6.5 sm:h-7.5 md:h-8 object-contain transition-transform duration-300 shrink-0" 
                            />
                          )}
                          {item.name === "Semantic Kernel" && (
                            <svg className="w-6.5 h-6.5 text-[#C45BFF] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <circle cx="12" cy="12" r="9" />
                              <circle cx="12" cy="12" r="5" strokeDasharray="3 3" />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                          )}
                          {item.name === "FAISS" && (
                            <svg className="w-6.5 h-6.5 text-[#877BF1] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <rect x="3" y="3" width="7" height="7" rx="1" />
                              <rect x="14" y="3" width="7" height="7" rx="1" />
                              <rect x="3" y="14" width="7" height="7" rx="1" />
                              <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                          )}
                          <span className="text-[#E7E6FC] text-[11px] sm:text-xs md:text-sm font-semibold leading-none select-none whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-0.5 w-full h-full">
                          <img 
                            src={item.logoSrc} 
                            alt={item.name} 
                            style={{ 
                              transform: item.zoomMax ? "scale(1.45)" : (item.zoomLarge ? "scale(1.5)" : (item.shrink ? "scale(0.55)" : "scale(0.75)")),
                              filter: item.lighten ? "invert(1) hue-rotate(180deg)" : "none"
                            }}
                            className={`w-full object-contain transition-transform duration-300 mx-auto ${
                              item.zoomMax 
                                ? "h-12 sm:h-14 md:h-16" 
                                : "h-7 sm:h-8 md:h-9"
                            }`} 
                          />
                          {item.subtext && (
                            <span className="text-[#E7E6FC] text-[10px] sm:text-xs font-semibold opacity-60 select-none leading-none pb-0.5">
                              {item.subtext}
                            </span>
                          )}
                        </div>
                      )}
                    </Motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiTechStack;
