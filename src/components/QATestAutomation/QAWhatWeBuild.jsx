import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Robot, CheckSquare, PlugsConnected, Gauge, ShieldCheck, DeviceMobile, Browsers, ArrowsClockwise, Scales
} from "@phosphor-icons/react";

const engineer = [
  { icon: Robot, t: "Test Automation Frameworks", d: "Reusable automation frameworks that accelerate regression testing and improve quality across enterprise applications." },
  { icon: CheckSquare, t: "Functional Testing", d: "Validate business workflows, user journeys, and application functionality end to end." },
  { icon: PlugsConnected, t: "API Testing", d: "Verify enterprise integrations, microservices, third-party APIs, and backend communication layers." },
  { icon: Gauge, t: "Performance Engineering", d: "Evaluate application performance, scalability, and resilience under real-world workloads." },
  { icon: ShieldCheck, t: "Security Testing", d: "Assess security posture, identify vulnerabilities, and validate enterprise security controls." },
  { icon: DeviceMobile, t: "Mobile Application Testing", d: "Consistent functionality, usability, and performance across Android and iOS environments." },
  { icon: Browsers, t: "Cross-Browser & Cross-Platform", d: "Validate behavior across browsers, operating systems, and devices for a consistent experience." },
  { icon: ArrowsClockwise, t: "Continuous Testing", d: "Integrate automated testing into CI/CD pipelines for faster, more reliable releases." },
  { icon: Scales, t: "Quality Governance", d: "Enterprise testing standards, metrics, reporting, traceability, and continuous improvement." },
];

const QAWhatWeBuild = () => {
  return (
    <section id="qa-what-we-build" className="relative w-full pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12 pb-6">
          <div className="flex flex-col items-start min-w-fit">
            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [what we engineer]
            </span>

            {/* Heading Block */}
            <div className="flex flex-col items-start justify-start font-sans">
              <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-tight text-left">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
                  Quality frameworks built
                </span>
                <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                  for enterprise software delivery
                </span>
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl lg:pb-1 text-left">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70">
              Quality engineering is not simply about finding bugs — it is about building confidence into every software release.
            </p>
          </div>
        </div>

        {/* Build Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {engineer.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.015 }}
                className={`flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border border-[#877BF1]/30 hover:border-[#877BF1]/60 bg-[#1d1e32] hover:bg-[#262842] cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                  idx === 8 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

                {/* Bottom Pattern (Right bottom corner) */}
                {idx === 0 ? (
                  <img 
                    src="/QATestAutomation/build_bg_pattern.svg" 
                    alt="" 
                    className="absolute bottom-0 right-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0 scale-x-[-1]" 
                  />
                ) : (
                  <img 
                    src="/QATestAutomation/build_bg_pattern.svg" 
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
                  {/* Title */}
                  <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                    {item.t}
                  </h4>
                  {/* Description */}
                  <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[20px] text-left max-w-full">
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

export default QAWhatWeBuild;
