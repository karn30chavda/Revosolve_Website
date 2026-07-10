import React from "react";
import { motion as Motion } from "framer-motion";
import { Path, Ruler, Equals } from "@phosphor-icons/react";

const systemTrio = [
  {
    icon: Path,
    t: "Every conversation becomes traceable",
    d: "From first contact to final resolution — nothing gets lost between systems.",
  },
  {
    icon: Ruler,
    t: "Every workflow becomes measurable",
    d: "SLAs, handling times, and resolution rates tracked as operational metrics.",
  },
  {
    icon: Equals,
    t: "Every customer gets a consistent experience",
    d: "Regardless of the communication channel they choose.",
  },
];

const CustomerInteractionSystem = () => {
  return (
    <section
      id="solutions-system"
      className="relative w-full pt-10 pb-20 md:pt-16 md:pb-32 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start">
        {/* Heading Block */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-start w-full"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [the revoSolve system]
          </span>

          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              One platform
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              for every customer conversation.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
            <p className="text-[#CACBDB] text-base md:text-[17px] font-normal leading-relaxed">
              Customer Interaction Systems bring together communication channels, AI capabilities, workflow automation, and enterprise systems into one intelligent operational platform.
            </p>
            <p className="text-[#8F92B8] text-sm md:text-[15px] font-normal leading-relaxed">
              Instead of deploying separate solutions for IVR, WhatsApp, chatbots, voice bots, CRM integrations, and customer workflows — organizations manage every interaction through a single operational ecosystem.
            </p>
          </div>
        </Motion.div>

        {/* Trio Cards: Rendered below the heading block in a row */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
        >
          {systemTrio.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
                className="group relative border border-[#877BF1]/18 bg-linear-to-b from-[#0F1034] to-[#0A0B28] p-6 flex flex-col items-start hover:border-[#877BF1]/40 transition-all duration-300 rounded-[12px] h-full"
              >
                {/* Decorative border glow */}
                <div className="absolute inset-0 bg-[#877BF1]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] pointer-events-none" />

                <div className="text-[#FCCA71] mb-4 shrink-0">
                  <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-[15px] sm:text-base text-white mb-2 group-hover:text-[#FCCA71] transition-colors duration-300">
                    {s.t}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#CACBDB]">
                    {s.d}
                  </p>
                </div>
              </div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
};

export default CustomerInteractionSystem;
