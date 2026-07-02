import React from "react";
import { motion as Motion } from "framer-motion";

const buildItems = [
  {
    title: "Cloud Architecture & Engineering",
    desc: "Design secure, scalable, and resilient cloud environments aligned with business and operational requirements.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 018.716 2.253M12 3a9.004 9.004 0 00-8.716 2.253" />
      </svg>
    ),
  },
  {
    title: "Cloud Migration & Modernization",
    desc: "Move applications, workloads, and infrastructure to modern cloud platforms with minimal disruption.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
  },
  {
    title: "DevOps Transformation",
    desc: "Establish automation-driven delivery practices that improve collaboration, consistency, and deployment speed.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Automate infrastructure provisioning and management using repeatable, version-controlled frameworks.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Kubernetes & Container Platforms",
    desc: "Build modern containerized environments that improve scalability, portability, and operational efficiency.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-10.5v10.5" />
      </svg>
    ),
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automate software delivery workflows to reduce release cycles and improve deployment reliability.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125H5.625a1.125 1.125 0 01-1.125-1.125v-3.75c0-.621.504-1.125 1.125-1.125z" />
      </svg>
    ),
  },
  {
    title: "Monitoring & Observability",
    desc: "Implement real-time visibility into applications, infrastructure, and operational performance.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Disaster Recovery & Business Continuity",
    desc: "Design resilient systems that minimize downtime and support uninterrupted operations.",
    icon: (
      <svg className="w-full h-full object-contain text-[#877BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const CloudWhatWeBuild = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            {/* Section Tag */}
            <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
              [what]
            </div>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-left">
                What We Build
              </h2>
              <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1 text-left">
                Where Innovation takes Shape
              </h3>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Modern cloud infrastructure requires more than hosting applications. Organizations need scalable platforms, automated delivery pipelines, resilient architectures, and operational visibility that support continuous innovation.
              <br />
              RevoSolve designs and implements cloud-native platforms that improve reliability, accelerate delivery, and provide the foundation for enterprise-scale digital operations.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid - Symmetrical 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
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
                <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Description */}
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[20px] text-left max-w-full">
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

export default CloudWhatWeBuild;
