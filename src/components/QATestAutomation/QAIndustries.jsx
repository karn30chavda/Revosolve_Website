import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Bank, CurrencyCircleDollar, ShoppingCart, Factory, Heartbeat, Briefcase
} from "@phosphor-icons/react";

const industries = [
  { icon: Bank, t: "Government & Public Sector", d: "QA for citizen service platforms, digital governance applications, workflow systems, and mission-critical public infrastructure." },
  { icon: CurrencyCircleDollar, t: "Banking & Financial Services", d: "Testing business-critical financial applications, onboarding platforms, payment systems, and compliance systems." },
  { icon: ShoppingCart, t: "Retail, D2C & Commerce", d: "Testing commerce platforms, marketplace integrations, order management, payment gateways, and customer-facing apps." },
  { icon: Factory, t: "Manufacturing", d: "Quality engineering for production systems, ERP platforms, asset management, and operational software." },
  { icon: Heartbeat, t: "Healthcare & Insurance", d: "Validation of healthcare and patient management systems, claims platforms, underwriting portals, and regulatory compliance workflows." },
  { icon: Briefcase, t: "Enterprise Organizations", d: "QA for enterprise applications, cloud-native platforms, AI systems, ERP implementations, and transformation initiatives." },
];

const QAIndustries = () => {
  return (
    <section id="qa-industries" className="relative w-full bg-[#1d1e32] py-16 lg:py-24 overflow-hidden font-sans border-t border-[#877BF1]/10 z-20">
      {/* Background Glows */}
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          {/* Eyebrow */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [industries we serve]
          </span>
          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="font-black block">
              <span className="text-[#877BF1]">Release confidence </span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent inline-block">across regulated,</span>
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              complex sectors
            </span>
          </h2>
        </div>

        {/* Industries Grid - Balanced 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Motion.div 
                key={ind.t}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ 
                  scale: 1.015
                }}
                className="flex flex-row justify-start items-start p-6 min-h-[160px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden gap-5 bg-[#1d1e32] border-[#5f5fff]/40 hover:bg-[#262842] hover:border-[#5f5fff]"
              >
                {/* Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

                {/* Icon Container */}
                <div className="w-8 h-8 flex items-center justify-start shrink-0 relative z-10">
                  <Icon size={26} className="text-[#FCCA71]" weight="light" />
                </div>
                
                {/* Text Block */}
                <div className="flex-1 flex flex-col justify-start items-start w-full gap-2 relative z-10">
                  <h4 className="text-[#E7E6FC] text-base md:text-[18px] font-semibold font-sans leading-snug group-hover:text-white transition-colors duration-300">
                    {ind.t}
                  </h4>
                  <p className="text-[#AAA9BE] text-[13px] md:text-[14px] font-normal font-sans leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.d}
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

export default QAIndustries;
