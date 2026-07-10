import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Timer, Bug, Crosshair, Gauge, Plugs, ShieldWarning
} from "@phosphor-icons/react";

const problems = [
  { icon: Timer, sev: "SEV-2", t: "Siloed & Inefficient Testing", d: "Inconsistent standards and manual testing bottleneck release cycles, reducing overall engineering velocity." },
  { icon: Bug, sev: "SEV-1", t: "High Production Defects", d: "Undetected issues impact business operations, customer experience, and organizational trust." },
  { icon: Crosshair, sev: "SEV-2", t: "Limited Test Coverage", d: "Critical business workflows remain insufficiently tested across applications, APIs, devices, and browsers." },
  { icon: Gauge, sev: "SEV-1", t: "Performance Bottlenecks", d: "Applications fail to perform consistently under real-world workloads and increasing user demand." },
  { icon: Plugs, sev: "SEV-2", t: "Integration Complexity", d: "APIs, cloud services, and third-party platforms require continuous validation." },
  { icon: ShieldWarning, sev: "SEV-1", t: "Security & Compliance Risks", d: "Applications require continuous validation to meet enterprise security and regulatory requirements." },
];

const QAProblemsWeSolve = () => {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
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
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">Modern software </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">demands </span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
               continuous quality
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1 text-left">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70">
              Shorter release cycles, interconnected systems, rising operational risk — without a structured quality strategy, defects reach production and business continuity is compromised.
            </p>
          </div>
        </div>

        {/* Problems Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ 
                  scale: 1.015
                }}
                className="flex flex-col justify-between items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden bg-[#020319] border-[#5f5fff]/20 hover:border-[#5f5fff]"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

                {/* Top part: Icon & Severity Code */}
                <div className="flex justify-between items-center w-full mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-[#FCCA71]/10 border border-[#FCCA71]/20 group-hover:bg-[#FCCA71]/20 transition-all duration-300">
                    <Icon size={28} className="text-[#FCCA71]" weight="light" />
                  </div>
                  <span className={`text-[10px] tracking-wider uppercase font-mono px-2.5 py-1 rounded border ${
                    item.sev === "SEV-1" 
                      ? "text-red-400 bg-red-950/40 border-red-500/30" 
                      : "text-[#FCCA71] bg-[#FCCA71]/10 border-[#FCCA71]/20"
                  }`}>
                    {item.sev}
                  </span>
                </div>

                {/* Bottom part: Text stack */}
                <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                  <h4 className="text-white text-[18px] font-bold leading-tight">
                    {item.t}
                  </h4>
                  <p className="text-[#CACBDB] text-[13.5px] font-normal leading-relaxed opacity-60 group-hover:opacity-85 transition-opacity duration-300">
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

export default QAProblemsWeSolve;
