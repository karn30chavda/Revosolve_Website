import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Browsers, ClipboardText, EyeSlash, CurrencyCircleDollar, LockSimple, Copy,
} from "@phosphor-icons/react";

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

const problems = [
  { n: "01", Icon: Browsers,             t: "Multiple Business Applications",  d: "Different departments rely on disconnected software that does not communicate effectively." },
  { n: "02", Icon: ClipboardText,        t: "Manual Processes & Workflow Gaps",  d: "Approvals, procurement, HR, and operations still rely on emails and spreadsheets — with no automation across teams." },
  { n: "03", Icon: EyeSlash,             t: "Limited Operational Visibility",   d: "Leadership lacks real-time insight into organizational performance due to fragmented reporting." },
  { n: "04", Icon: CurrencyCircleDollar, t: "High Software Licensing Costs",    d: "Organizations pay for multiple SaaS applications with overlapping functionality." },
  { n: "05", Icon: LockSimple,           t: "Difficult Customization",          d: "Many commercial ERP platforms limit flexibility, making it hard to adapt software to unique processes." },
  { n: "06", Icon: Copy,                 t: "Poor Data Consistency",            d: "Business data exists in multiple locations, reducing trust in reporting and decision-making." },
];

const EntProblemsWeSolve = () => {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: "url(/EnterpriseApplicationSystems/card_bg_pattern.svg)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">Most organizations </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">operate across</span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                too many disconnected systems
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Separate applications for finance, HR, procurement, inventory, projects, CRM, and reporting create duplicated information, manual work, and poor operational visibility.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {problems.map((p, i) => (
            <Motion.div
              key={p.n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.015 }}
              style={{
                backgroundColor: "rgba(2, 3, 25, 1)",
                borderColor: "rgba(95, 95, 255, 1)",
              }}
              className="flex flex-col justify-between items-start p-8 min-h-[200px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top: Icon */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-300 mb-4">
                <p.Icon size={22} className="text-[#877BF1]" />
              </div>

              {/* Bottom: Text */}
              <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                <h4 className="text-white text-[18px] font-bold leading-tight">{p.t}</h4>
                <p className="text-[#CACBDB] text-[13.5px] font-normal leading-relaxed opacity-60 group-hover:opacity-85 transition-opacity duration-300">{p.d}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntProblemsWeSolve;
