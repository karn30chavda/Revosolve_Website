import React from "react";
import { motion as Motion } from "framer-motion";

const problemsList = [
  {
    title: "Slow Software Delivery",
    desc: "Manual deployment processes and fragmented workflows slow down releases and reduce agility.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Infrastructure Complexity",
    desc: "Managing multiple environments, services, and platforms increases operational overhead and risk.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "Limited Scalability",
    desc: "Legacy infrastructure often struggles to support growing workloads and business demands.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance Challenges",
    desc: "Organizations need secure, compliant infrastructure without sacrificing speed and flexibility.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Lack of Operational Visibility",
    desc: "Limited monitoring and observability make it difficult to identify performance issues and operational risks.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Cloud Cost Optimization",
    desc: "Cloud environments can become expensive when resources are not properly managed and optimized.",
    icon: (
      <svg className="w-8 h-8 text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.546 1.243 3.5 1.185 4.88-.117 1.38-1.302 1.38-3.417 0-4.719L12 12a1.5 1.5 0 0 1 0-3.375m3.75-2.25h-.008v.008H15.75V6.75ZM6 11.25h.008v.008H6v-.008Zm0 2.25h.008v.008H6V13.5Zm12-2.25h.008v.008H18v-.008Zm0 2.25h.008v.008H18V13.5Z" />
      </svg>
    ),
  },
];

const CloudProblemsWeSolve = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: "url(/home_section_6/bg_pattern.svg)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
                Overcoming Cloud
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                & Delivery Bottlenecks
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Building and operating modern digital infrastructure is increasingly complex. As organizations scale, infrastructure, deployment processes, security requirements, and operational workloads become harder to manage. Many teams struggle with slow release cycles, inconsistent environments, rising cloud costs, and limited visibility across their technology landscape.
              <br />RevoSolve helps organizations modernize cloud operations, automate delivery pipelines, improve reliability, and build scalable infrastructure that supports long-term growth.
            </p>
          </div>
        </div>

        {/* Problems Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {problemsList.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.015
              }}
              style={{ 
                backgroundColor: "rgba(2, 3, 25, 1)",
                borderColor: "rgba(95, 95, 255, 1)"
              }}
              className="flex flex-col justify-between items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top part: Icon */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-300 mb-4">
                {item.icon}
              </div>

              {/* Bottom part: Text stack */}
              <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                <h4 className="text-white text-[18px] font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#CACBDB] text-[13.5px] font-normal leading-relaxed opacity-60 group-hover:opacity-85 transition-opacity duration-300">
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

export default CloudProblemsWeSolve;
