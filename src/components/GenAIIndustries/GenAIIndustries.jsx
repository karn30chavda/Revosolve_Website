import React from "react";
import { motion as Motion } from "framer-motion";

const industriesData = [
  {
    title: "Government & Public Sector",
    desc: "Citizen services, document processing, workflow automation, digital governance, and AI-assisted decision support.",
  },
  {
    title: "Banking & Financial Institutions",
    desc: "AI-powered support, KYC/KYB automation, fraud detection support, document processing, and compliance workflows.",
  },
  {
    title: "Insurance",
    desc: "Claims processing, customer service automation, document intelligence, underwriting assistance, and policy management.",
  },
  {
    title: "Healthcare",
    desc: "Clinical documentation, healthcare operations, knowledge management, patient communication, and workflow automation.",
  },
  {
    title: "Retail, D2C & Commerce",
    desc: "Customer support automation, product discovery, inventory assistance, sales intelligence, and commerce operations.",
  },
  {
    title: "Enterprise Organizations",
    desc: "Knowledge management, employee assistants, workflow automation, and AI-powered operational intelligence.",
  },
];

const GenAIIndustries = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden">
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-12">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-2">
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [industries]
          </div>

          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#CACBDB] font-light xl:font-thin">Where</span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                Enterprise AI
              </span>
              <span className="text-[#CACBDB] font-light xl:font-thin">Delivers</span>
            </h2>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industriesData.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.015,
                backgroundColor: "rgba(167, 139, 250, 0.12)",
                borderColor: "rgba(99, 102, 241, 0.7)",
              }}
              className="flex flex-col justify-start items-start p-8 min-h-[190px] w-full bg-violet-400/10 rounded-[8px] border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] pointer-events-none" />

              <div className="flex-1 flex flex-col justify-start items-start w-full gap-3 relative z-10">
                <h4 className="text-[#E7E6FC] text-[20px] font-semibold font-sans leading-[28px] text-left group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#AAA9BE] text-[14px] font-normal font-sans leading-[22px] text-left">
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

export default GenAIIndustries;
