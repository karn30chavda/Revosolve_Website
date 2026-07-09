import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Bank,
  CurrencyCircleDollar,
  Umbrella,
  Heartbeat,
  Factory,
  Briefcase,
} from "@phosphor-icons/react";

const industriesData = [
  {
    icon: Bank,
    t: "Government",
    tags: [
      "Citizen applications",
      "Land records",
      "Tapaal",
      "Approvals",
      "Public administration",
      "Licensing",
    ],
  },
  {
    icon: CurrencyCircleDollar,
    t: "Banking & Financial Services",
    tags: [
      "KYC",
      "KYB",
      "Loan processing",
      "Account opening",
      "Compliance",
      "Onboarding",
    ],
  },
  {
    icon: Umbrella,
    t: "Insurance",
    tags: ["Claims", "Policy documents", "Customer onboarding", "Compliance"],
  },
  {
    icon: Heartbeat,
    t: "Healthcare",
    tags: [
      "Medical records",
      "Patient registration",
      "Insurance processing",
      "Clinical documentation",
    ],
  },
  {
    icon: Factory,
    t: "Manufacturing",
    tags: [
      "Invoices",
      "Purchase orders",
      "Vendor onboarding",
      "Quality documentation",
    ],
  },
  {
    icon: Briefcase,
    t: "Enterprise",
    tags: [
      "HR",
      "Finance",
      "Legal",
      "Procurement",
      "Compliance",
      "Shared services",
    ],
  },
];

const DocIndustries = () => {
  return (
    <section
      id="industries"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-start w-full">

        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full mb-12"
        >
          {/* Desktop Tag */}
          <div className="hidden min-[1290px]:block opacity-30 justify-start mb-4">
            <span className="text-white text-lg font-normal font-sans tracking-tight">[</span>
            <span className="text-white text-lg font-normal font-sans uppercase tracking-tight">industries</span>
            <span className="text-white text-lg font-normal font-sans tracking-tight">]</span>
          </div>

          {/* Mobile Badge */}
          <div className="flex min-[1290px]:hidden items-center justify-center whitespace-nowrap rounded-full bg-white/5 h-8 px-4 gap-2 backdrop-blur-md border border-white/10 mb-4 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#877BF1] animate-pulse" />
            <span className="text-[#fbfbff] text-[12px] font-semibold tracking-widest uppercase opacity-90">
              industries
            </span>
          </div>

          {/* Title + Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-12">
            <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left max-w-xl">
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                Industries We Serve
              </span>{" "}
              <span className="text-[#CACBDB] font-light">
                Every sector, every document type.
              </span>
            </h2>

            <div className="max-w-xl lg:pb-1 shrink-0 lg:w-[45%]">
              <p className="text-[#CACBDB] text-[13.5px] md:text-[14px] font-normal leading-relaxed opacity-70 text-left">
                RevoDox is deployed across government agencies, financial institutions, healthcare providers, manufacturers, and enterprises — handling every document type with precision.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industriesData.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Motion.div
                key={ind.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(135, 123, 241, 0.12)",
                  borderColor: "rgba(135, 123, 241, 0.7)",
                }}
                className="flex flex-col justify-start items-start p-6 w-full h-full bg-[#0F1034]/40 rounded-[8px] border border-[#877BF1]/22 cursor-pointer transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute inset-0 bg-radial from-[#877BF1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col h-full justify-between">
                  {/* Icon & Title */}
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="text-[#FCCA71] shrink-0">
                        <Icon
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-[17px] text-[#E7E6FC] group-hover:text-white transition-colors duration-300 leading-snug">
                        {ind.t}
                      </h3>
                    </div>

                    {/* Tag List */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {ind.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono tracking-wider text-[#CACBDB] border border-[#877BF1]/20 bg-[#877BF1]/4 px-3 py-1.5 rounded-[4px] group-hover:border-[#FCCA71]/40 group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DocIndustries;
