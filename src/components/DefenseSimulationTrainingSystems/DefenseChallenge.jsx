import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Skull,
  CurrencyCircleDollar,
  TrafficCone,
  HourglassMedium,
} from "@phosphor-icons/react";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -6% 0px" },
  transition: {
    duration: 0.55,
    delay: (i % 4) * 0.08,
    ease: [0.2, 0.7, 0.2, 1],
  },
});

const constraints = [
  {
    icon: Skull,
    t: "Dangerous to Recreate",
    d: "Live rehearsal of high-consequence events puts personnel, equipment, and infrastructure at risk.",
  },
  {
    icon: CurrencyCircleDollar,
    t: "Expensive to Repeat",
    d: "Full-scale live exercises consume equipment, fuel, facilities, and staff time every single run.",
  },
  {
    icon: TrafficCone,
    t: "Operationally Disruptive",
    d: "Realistic drills interrupt ongoing operations and take critical assets out of service.",
  },
  {
    icon: HourglassMedium,
    t: "Rare in Occurrence",
    d: "The most critical scenarios happen so rarely that real experience may never accumulate.",
  },
];

const DefenseChallenge = () => {
  return (
    <section
      id="challenge"
      className="relative w-full pt-10 pb-16 md:pt-20 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col gap-12 md:gap-16">

        {/* TOP SECTION: 2-column text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT: Tag + Title + Para 1 */}
          <Motion.div {...reveal(0)} className="flex flex-col gap-6">

            {/* Section Tag */}
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
              [the operational challenge]
            </span>

            {/* Title */}
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                Real-world experience cannot always be created safely
              </span>
            </h2>

            {/* Body Para 1 */}
            <Motion.p
              {...reveal(1)}
              className="text-[#CACBDB] text-[15px] md:text-[16px] leading-relaxed mt-4"
            >
              Personnel are still expected to respond immediately when those
              situations occur — and traditional classroom training cannot prepare
              teams for dynamic, real-world environments.
            </Motion.p>
          </Motion.div>

          {/* RIGHT: Description aligned to title + Closing statement */}
          <Motion.div {...reveal(1)} className="flex flex-col gap-8 lg:pt-[56px]">

            {/* Description text */}
            <p className="text-[#CACBDB] text-[15px] md:text-[16px] leading-relaxed">
              Military organizations, emergency responders, public safety agencies,
              utilities, aviation teams, and industrial operators are expected to
              perform flawlessly under pressure. Yet many critical scenarios are:
            </p>

            {/* Closing statement */}
            <Motion.p
              {...reveal(2)}
              className="text-[16px] md:text-[19px] xl:text-[22px] font-semibold leading-snug text-white"
            >
              Organizations don't simply need digital learning. They need realistic
              operational experiences that build confidence, decision-making, and{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                muscle memory before teams enter the field.
              </span>
            </Motion.p>
          </Motion.div>
        </div>

        {/* BOTTOM SECTION: 4-card full-width row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {constraints.map((c, i) => (
            <Motion.div
              key={c.t}
              {...reveal(i)}
              className="border border-[rgba(252,202,113,0.25)] bg-[#0A0B28] p-5 flex flex-col gap-3 hover:border-[rgba(252,202,113,0.5)] hover:bg-[#0f1034] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <c.icon size={22} color="#FCCA71" />
                <span className="font-mono text-[9px] tracking-widest text-[#FCCA71] border border-[rgba(252,202,113,0.35)] px-2 py-0.5 bg-[rgba(252,202,113,0.06)] uppercase">
                  CONSTRAINT
                </span>
              </div>
              <h3 className="text-[15px] font-semibold leading-snug text-[#FBFBFF]">
                {c.t}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#8F92B8] m-0">
                {c.d}
              </p>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DefenseChallenge;
