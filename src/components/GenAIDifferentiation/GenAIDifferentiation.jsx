import React from "react";
import { motion as Motion } from "framer-motion";

const differentiationData = [
  {
    title: "Operational-First AI",
    desc: "We design AI around business workflows rather than forcing organizations to adapt to technology.",
    pattern: "/Solution_page/DIFFERENTIATION_1._patternsvg.svg",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Enterprise-Ready Architecture",
    desc: "Secure, scalable, governed, and production-ready AI systems engineered for long-term adoption.",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Human-Centered Intelligence",
    desc: "AI should enhance human decision-making — not replace it. People stay in control of critical decisions.",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Domain-Aware Engineering",
    desc: "Deep understanding of government, BFSI, infrastructure, and enterprise workflows shapes every AI system we build.",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Responsible & Governed AI",
    desc: "Guardrails, evaluation, and monitoring built in — AI systems that behave predictably in production.",
    colSpan: "lg:col-span-1",
  },
];

const GenAIDifferentiation = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-6">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [differentiation]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-[#CACBDB] font-light xl:font-thin">Why</span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
                RevoSolve
              </span>
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              Where Intelligence Takes Shape
            </h3>
          </div>
        </div>

        {/* Differentiation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {differentiationData.map((item, idx) => (
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
              className={`flex flex-col justify-start items-start p-8 min-h-[240px] w-full bg-violet-400/10 rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden ${item.colSpan}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none" />

              {/* Bottom Left Pattern (first card only) */}
              {item.pattern && (
                <img
                  src={item.pattern}
                  alt=""
                  className="absolute bottom-0 left-0 w-[215px] h-[71px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0"
                />
              )}

              {/* Number */}
              <div className="mb-6 shrink-0 relative z-10">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent text-[15px] font-black font-sans tracking-widest">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text Content Block */}
              <div className="flex-1 flex flex-col justify-start items-start w-full gap-4 relative z-10">
                <h4 className="text-[#E7E6FC] text-[24px] font-semibold font-sans leading-[32px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
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

export default GenAIDifferentiation;
