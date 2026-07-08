import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Strategy,
  Robot,
  ShieldCheck,
  Stack,
  Infinity as InfinityIcon,
  Gauge,
} from "@phosphor-icons/react";

const whyData = [
  {
    title: "Infrastructure Designed Around Business Operations",
    desc: "We engineer cloud platforms that support how organizations actually operate — not generic infrastructure deployments.",
    icon: Strategy,
  },
  {
    title: "Automation-First Engineering",
    desc: "Infrastructure automation reduces operational overhead while improving consistency and deployment reliability.",
    icon: Robot,
  },
  {
    title: "Security Embedded by Design",
    desc: "Security is integrated throughout architecture, engineering, and operations rather than added later.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise-Ready Architecture",
    desc: "Every cloud platform is designed for scalability, governance, resilience, and long-term operational success.",
    icon: Stack,
  },
  {
    title: "Long-Term Infrastructure Partnership",
    desc: "We continue optimizing infrastructure long after deployment to support changing business needs.",
    icon: InfinityIcon,
  },
  {
    title: "Cost & Performance Optimization",
    desc: "Continuous right-sizing, monitoring, and FinOps practices keep cloud spend efficient without sacrificing performance.",
    icon: Gauge,
  },
];

const CloudWhyRevoSolve = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-4">
          {/* Eyebrow */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [Why RevoSolve]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="text-[#CACBDB] font-light xl:font-thin inline-block mr-3">
              Why
            </span>
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              RevoSolve
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Reliable foundations for digital growth.
            </span>
          </h2>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {whyData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.015,
                backgroundColor: "rgba(167, 139, 250, 0.12)",
                borderColor: "rgba(99, 102, 241, 0.7)",
              }}
              style={{ backgroundColor: "rgba(29, 30, 50, 0.25)", borderColor: "rgba(135, 123, 241, 0.3)" }}
              className="flex flex-col justify-start items-start p-8 min-h-[220px] w-full rounded-[8px] border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none" />

              {/* Icon */}
              <div className="mb-6 shrink-0 relative z-10 text-[#FCCA71] group-hover:text-white transition-colors duration-300">
                {item.icon && (
                  <item.icon
                    size={28}
                    weight="light"
                  />
                )}
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
                <h4 className="text-[#E7E6FC] text-lg font-semibold font-sans leading-snug text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#AAA9BE] text-sm font-normal font-sans leading-relaxed text-left opacity-80">
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

export default CloudWhyRevoSolve;
