import React from "react";
import { motion as Motion } from "framer-motion";

const buildItems = [
  {
    title: "AI Agents",
    desc: "Task-oriented agents designed to automate business workflows and decision-making processes.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Enterprise Knowledge Assistants",
    desc: "AI-powered assistants trained on organizational knowledge and documents.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence Systems",
    desc: "AI systems that extract, classify, validate, and process information from structured and unstructured documents.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Voice AI Systems",
    desc: "Conversational systems powered by ASR, TTS, and LLM technologies.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Customer Support Automation",
    desc: "AI-driven systems for handling customer interactions across channels.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.53 16.33 3 14.28 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation Systems",
    desc: "AI integrated into operational processes to reduce manual effort and improve efficiency.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5l3 3 3-3" />
      </svg>
    ),
  },
];

const AiWhatWeBuild = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-6">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [capabilities]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              AI Systems We Build
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              Where intelligence meets automation
            </h3>
          </div>
        </div>

        {/* Build Capabilities Grid - Symmetrical 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {buildItems.map((item, idx) => (
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
              style={{ backgroundColor: "rgba(29, 30, 50, 1)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[210px] w-full rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Bottom Pattern (Right bottom corner) */}
              {idx === 0 ? (
                <img 
                  src="/Solution_page/DIFFERENTIATION_1._patternsvg.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                />
              ) : (
                <img 
                  src="/Solution_page/DIFFERENTIATION_1._patternsvg.svg" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 lg:hidden scale-x-[-1]" 
                />
              )}

              {/* Icon Container */}
              <div className="w-8 h-8 flex items-center justify-start mb-6 shrink-0 relative z-10">
                {item.icon}
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                {/* Title */}
                <h4 className="text-[#E7E6FC] text-[24px] font-semibold font-sans leading-[32px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Description */}
                <p className="text-[#AAA9BE] text-[16px] font-normal font-sans leading-[24px] text-left max-w-full lg:max-w-[520px]">
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

export default AiWhatWeBuild;
