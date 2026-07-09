import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Monitor,
  ClockCountdown,
  EyeClosed,
  MapPin,
  Rewind,
  SquaresFour,
  Scales
} from "@phosphor-icons/react";

const problemsList = [
  {
    title: "Continuous Manual Monitoring",
    desc: "Security teams cannot effectively monitor hundreds of live camera feeds simultaneously.",
    icon: <Monitor size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Delayed Incident Response",
    desc: "Critical events are often identified after operational damage has already occurred.",
    icon: <ClockCountdown size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Limited Operational Visibility",
    desc: "Organizations lack centralized intelligence across distributed locations and facilities.",
    icon: <MapPin size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Reactive Operations",
    desc: "Most surveillance systems record evidence rather than preventing operational issues.",
    icon: <Rewind size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Multiple Disconnected Systems",
    desc: "Video management, access control, alarms, and operational workflows often exist in separate systems.",
    icon: <SquaresFour size={28} className="text-[#877BF1]" weight="light" />,
  },
  {
    title: "Compliance & Audit Challenges",
    desc: "Organizations require automated event logging, audit trails, and incident reporting.",
    icon: <Scales size={28} className="text-[#877BF1]" weight="light" />,
  }
];

const SurveillanceProblems = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-20">
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 font-sans">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
              [Problems We Solve]
            </span>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
              <span className="font-black block">
                <span className="text-[#877BF1]">Monitoring </span>
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">is no longer the challenge.</span>
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
                Acting on what you see is
              </span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-[#CACBDB] text-sm font-normal leading-relaxed opacity-70 text-left">
              Organizations invest heavily in surveillance infrastructure, yet most video remains unmonitored, underutilized, or reviewed only after incidents occur.
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

export default SurveillanceProblems;
