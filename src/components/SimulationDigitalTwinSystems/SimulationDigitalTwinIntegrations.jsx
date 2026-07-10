import React from "react";
import { motion as Motion } from "framer-motion";
import {
  MapTrifold,
  MapPin,
  NavigationArrow,
  Cube,
  Broadcast,
  Gauge,
  Buildings,
  Wrench,
  AirplaneTilt,
  Eye,
  VideoCamera,
  Files,
  CloudSun,
  TrafficSignal,
  Bank,
  BracketsCurly,
} from "@phosphor-icons/react";

const integrationsData = [
  [MapTrifold, "ArcGIS"],
  [MapPin, "QGIS"],
  [NavigationArrow, "Google Maps"],
  [Cube, "BIM / Autodesk / Revit"],
  [Broadcast, "IoT Platforms"],
  [Gauge, "SCADA"],
  [Buildings, "ERP Systems"],
  [Wrench, "Asset Management"],
  [AirplaneTilt, "Drone Platforms"],
  [Eye, "Computer Vision"],
  [VideoCamera, "RevoVision™"],
  [Files, "RevoDox™"],
  [CloudSun, "Weather APIs"],
  [TrafficSignal, "Traffic APIs"],
  [Bank, "Government Data Sources"],
  [BracketsCurly, "REST APIs"],
];

const SimulationDigitalTwinIntegrations = () => {
  return (
    <section
      id="integrations"
      className="relative w-full pt-2 pb-20 md:pt-4 md:pb-20 px-[5%] lg:px-[7.5%] overflow-hidden z-20 text-[#FBFBFF] font-sans"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[55%] h-[55%] bg-[#877BF1]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col items-center w-full">
        
        {/* Section Header - Centered Layout */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full mb-12 max-w-3xl flex flex-col items-center justify-center text-center mx-auto"
        >
          {/* Section Tag */}
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-center">
            [enterprise integrations]
          </span>

          <h2 className="text-[28px] md:text-[36px] xl:text-[40px] leading-tight font-bold tracking-tight text-center font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block">
              Built on the systems
            </span>{" "}
            <span className="text-[#CACBDB] font-light block mt-1">
              you already run
            </span>
          </h2>
        </Motion.div>

        {/* Dynamic Center-Aligned Flex-Wrap Grid (Tech Stack Style with Horizontal Cards) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full relative z-10">
          {integrationsData.map(([itemIcon, title], idx) => {
            const Icon = itemIcon;
            return (
              <Motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(39, 41, 69, 1)",
                  borderColor: "rgba(135, 123, 241, 1)",
                }}
                style={{
                  backgroundColor: "rgba(29, 30, 50, 1)",
                  borderColor: "rgba(135, 123, 241, 0.4)",
                }}
                className="flex flex-row items-center justify-center gap-3 rounded-xl border-2 cursor-pointer transition-all duration-300 min-h-[58px] md:min-h-[64px] w-[calc(50%-8px)] sm:w-[calc(33.33%-14px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] xl:w-[calc(16.66%-18px)] max-w-[190px] p-2.5 sm:p-3 relative group overflow-hidden"
              >
                {/* Icon */}
                <div className="text-[#FCCA71] shrink-0 relative z-10">
                  <Icon
                    size={20}
                    className="group-hover:scale-115 transition-transform duration-300"
                  />
                </div>

                {/* Text Title (Positioned on the Right of Icon) */}
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-[#CACBDB] group-hover:text-white transition-colors duration-300 uppercase leading-snug select-none relative z-10 text-center">
                  {title}
                </span>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SimulationDigitalTwinIntegrations;
