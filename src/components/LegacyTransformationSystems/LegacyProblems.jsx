import React from "react";
import { motion as Motion } from "framer-motion";
import {
  HourglassMedium,
  CurrencyCircleDollar,
  ArrowsOut,
  ShieldWarning,
  Plugs,
  CloudSlash,
} from "@phosphor-icons/react";

const problemsList = [
  {
    title: "Aging Enterprise Applications",
    desc: "Applications built years ago become increasingly difficult to maintain, upgrade, and integrate.",
    icon: <HourglassMedium size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 3,
  },
  {
    title: "High Maintenance Costs",
    desc: "Legacy infrastructure consumes valuable engineering resources while providing limited business value.",
    icon: <CurrencyCircleDollar size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 3,
  },
  {
    title: "Limited Scalability",
    desc: "Older architectures struggle to support increasing users, transactions, and digital services.",
    icon: <ArrowsOut size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 2,
  },
  {
    title: "Security & Compliance Risks",
    desc: "Unsupported technologies expose organizations to operational, regulatory, and cybersecurity risks.",
    icon: <ShieldWarning size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 3,
  },
  {
    title: "Complex System Integrations",
    desc: "Legacy platforms often lack modern APIs and interoperability capabilities.",
    icon: <Plugs size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 2,
  },
  {
    title: "Cloud Adoption Challenges",
    desc: "Organizations struggle to migrate legacy workloads while maintaining operational continuity.",
    icon: <CloudSlash size={28} className="text-[#FCCA71]" weight="light" />,
    lvl: 2,
  },
];

const DebtBars = ({ lvl }) => (
  <div className="flex flex-col items-end gap-1">
    <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#FCCA71]/60">
      Debt Level
    </span>
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((b) => (
        <span
          key={b}
          style={{
            display: "inline-block",
            width: 14,
            height: 5,
            borderRadius: 2,
            background: b <= lvl ? "#FCCA71" : "rgba(135,123,241,0.25)",
            transition: "background 0.3s",
          }}
        />
      ))}
    </div>
  </div>
);

const LegacyProblems = () => {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [problems we solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black text-[#877BF1]">Legacy technology </span>
              <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">shouldn't become </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block sm:inline">
                a business constraint
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Technology that once supported growth can eventually become one of its biggest limitations. We remove operational, technical, and security barriers created by aging systems.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {problemsList.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.015 }}
              style={{
                backgroundColor: "rgba(2, 3, 25, 1)",
                borderColor: "rgba(95, 95, 255, 1)",
              }}
              className="flex flex-col justify-between items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none z-0" />

              {/* Top: Icon + Debt Level */}
              <div className="flex items-center justify-between w-full relative z-10 mb-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 p-2 rounded-lg bg-[#FCCA71]/10 border border-[#FCCA71]/20 group-hover:bg-[#FCCA71]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <DebtBars lvl={item.lvl} />
              </div>

              {/* Bottom: Text */}
              <div className="flex flex-col gap-3 relative z-10 w-full text-left mt-auto">
                <h4 className="text-white text-[18px] font-bold leading-tight">{item.title}</h4>
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

export default LegacyProblems;
