import React from "react";
import { motion as Motion } from "framer-motion";

export const OurReasonToExist = () => {
  const missionDirectives = [
    "Engineer better operations.",
    "Enable better decisions.",
    "Deliver better outcomes.",
  ];

  return (
    <section id="our-reason-to-exist" className="relative w-full pt-20 pb-10 min-[1290px]:pt-28 min-[1290px]:pb-16 font-sans">

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 min-[1290px]:grid-cols-12 gap-10 min-[1290px]:gap-16 items-start">
          
          {/* Left Column: Heading & First 2 Paragraphs */}
          <div className="min-[1290px]:col-span-7 flex flex-col gap-6">
            <div>
              <div className="text-white text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.264px] leading-relaxed opacity-30 mb-2">
                [our reason to exist]
              </div>
            <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans font-black">
              <span className="text-[#877BF1]">We exist to </span>
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">solve that</span>
            </h2>
            </div>

            <div className="flex flex-col gap-5 text-white/70 text-sm sm:text-base font-normal leading-relaxed mt-2">
              <p>
                As organizations grow, their technology landscape becomes increasingly fragmented. Departments adopt different applications. Data becomes siloed. Decisions rely on spreadsheets, emails, disconnected workflows, and delayed reporting. Teams spend more time coordinating work than delivering outcomes.
              </p>
              <p>
                At RevoSolve, we engineer Operational Systems that connect people, processes, data, and technology into a single, intelligent operating environment. Our work goes beyond software development—we design the digital foundations that enable organizations to operate with greater visibility, governance, automation, and control.
              </p>
            </div>
          </div>

          {/* Right Column: // OUR MISSION & Big Directive List */}
          <div className="min-[1290px]:col-span-5 flex flex-col justify-start min-[1290px]:pt-26 min-[1290px]:pl-6">
            <span className="text-white/80 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold block mb-6">
              // OUR MISSION
            </span>

            <div className="flex flex-col gap-4">
              {missionDirectives.map((directive, idx) => (
                <Motion.div
                  key={directive}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-xl sm:text-2xl min-[1290px]:text-3xl font-bold text-white leading-snug tracking-tight hover:text-[#FCCA71] transition-colors"
                >
                  {directive}
                </Motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Full-Width Bottom Paragraph */}
        <div className="mt-4 min-[1290px]:mt-5 text-white/70 text-sm sm:text-base font-normal leading-relaxed">
          <p>
            From government agencies delivering public infrastructure to manufacturers modernizing production, commerce businesses scaling across channels, and enterprises accelerating AI adoption—we help transform complex operations into connected, measurable, and intelligent systems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurReasonToExist;
