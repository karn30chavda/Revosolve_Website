import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  FileText,
  SquaresFour,
  UsersThree,
  ShoppingCart,
  Receipt,
  CurrencyCircleDollar,
  ChartPieSlice,
  Gauge,
  ArrowRight,
} from "@phosphor-icons/react";

const flowNodesChain = [
  { icon: FileText, label: "Tender Won" },
  { icon: SquaresFour, label: "Project Created" },
  { icon: UsersThree, label: "Teams Allocated" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Receipt, label: "Billing" },
  { icon: CurrencyCircleDollar, label: "Finance Updated" },
  { icon: ChartPieSlice, label: "Profitability" },
  { icon: Gauge, label: "Dashboards Live" },
];

const InfraFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowNodesChain.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative py-12 md:py-16 px-[5%] lg:px-[7.5%] font-sans text-[#FBFBFF]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 max-w-310 mx-auto">
        <div className="max-w-xl">
          <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block text-left">
            [system flow]
          </span>
          <h2 className="text-[24px] md:text-[32px] xl:text-[36px] leading-tight font-bold tracking-tight text-left m-0">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold block sm:inline">
              From tender opportunity
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              to executive command
            </span>
          </h2>
        </div>
        <p className="text-[#CACBDB]/70 text-sm md:text-[14.5px] leading-relaxed max-w-md m-0">
          Watch a single event ripple through the entire operating system, live.
        </p>
      </div>

      {/* Main Flow Container */}
      <div className="max-w-310 mx-auto border border-[#877BF1]/22 bg-linear-to-br from-[#12143E]/60 to-[#0A0B28]/60 rounded-xl p-5 sm:p-6 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        {/* DESKTOP VIEW: Horizontal Pipeline Track (UNTOUCHED) */}
        <div className="hidden md:block overflow-x-auto pt-6 pb-6">
          <div className="relative min-w-190 px-8">
            {/* Center Line */}
            <div className="absolute top-4.25 left-19 right-19 h-0.5 bg-[#877BF1]/25 pointer-events-none z-0">
              {/* Active Progress Line */}
              <div
                className="h-full bg-linear-to-r from-[#877BF1] to-[#FCCA71] transition-all duration-700 ease-in-out"
                style={{
                  width: `${(activeStep / (flowNodesChain.length - 1)) * 100}%`,
                }}
              />

              {/* Traveling Single Glowing Golden Dot */}
              <span
                className="absolute -top-[3.5px] w-2.5 h-2.5 rounded-full bg-[#FCCA71] shadow-[0_0_12px_#FCCA71,0_0_20px_#FCCA71] transition-all duration-700 ease-in-out z-10"
                style={{
                  left: `calc(${
                    (activeStep / (flowNodesChain.length - 1)) * 100
                  }% - 5px)`,
                }}
              />
            </div>

            {/* Flow Nodes */}
            <div className="flex justify-between items-start relative z-10">
              {flowNodesChain.map((n, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;
                const Icon = n.icon;

                return (
                  <div
                    key={n.label}
                    className="flex flex-col items-center gap-2.5 w-22 shrink-0 cursor-pointer"
                    onClick={() => setActiveStep(i)}
                  >
                    <div
                      className={`w-8.5 h-8.5 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_15px_rgba(252,202,113,0.4)]"
                          : "border border-[#877BF1]/30 bg-[#0F1034]"
                      } ${
                        isCurrent
                          ? "scale-125 shadow-[0_0_22px_rgba(252,202,113,0.7)]"
                          : ""
                      }`}
                    >
                      <Icon
                        size={15}
                        className={`transition-colors duration-500 ${
                          isActive ? "text-[#FCCA71]" : "text-white/40"
                        }`}
                      />
                    </div>

                    <span
                      className={`font-mono text-[10.5px] text-center leading-tight transition-colors duration-500 ${
                        isActive
                          ? "text-[#FCCA71] font-bold"
                          : "text-[#5C5F85]"
                      }`}
                    >
                      {n.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Vertical Step Timeline (ZERO Horizontal Scrollbar) */}
        <div className="block md:hidden pt-2 pb-4">
          <div className="relative pl-8 pr-2 flex flex-col gap-3.5">
            {/* Vertical Connecting Track Line */}
            <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-[#877BF1]/25 pointer-events-none z-0">
              {/* Active Golden Vertical Line */}
              <div
                className="w-full bg-linear-to-b from-[#877BF1] to-[#FCCA71] transition-all duration-700 ease-in-out"
                style={{
                  height: `${(activeStep / (flowNodesChain.length - 1)) * 100}%`,
                }}
              />

              {/* Traveling Golden Dot */}
              <span
                className="absolute -left-[3.5px] w-2.5 h-2.5 rounded-full bg-[#FCCA71] shadow-[0_0_12px_#FCCA71,0_0_20px_#FCCA71] transition-all duration-700 ease-in-out z-10"
                style={{
                  top: `calc(${
                    (activeStep / (flowNodesChain.length - 1)) * 100
                  }% - 5px)`,
                }}
              />
            </div>

            {/* Vertical Flow Nodes */}
            {flowNodesChain.map((n, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              const Icon = n.icon;

              return (
                <div
                  key={n.label}
                  onClick={() => setActiveStep(i)}
                  className="flex items-center gap-3.5 py-1 cursor-pointer relative z-10"
                >
                  {/* Circle Icon Node */}
                  <div
                    className={`w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isActive
                        ? "border-2 border-[#FCCA71] bg-[#1a1b42] shadow-[0_0_15px_rgba(252,202,113,0.4)]"
                        : "border border-[#877BF1]/30 bg-[#0F1034]"
                    } ${
                      isCurrent
                        ? "scale-115 shadow-[0_0_20px_rgba(252,202,113,0.7)]"
                        : ""
                    }`}
                  >
                    <Icon
                      size={15}
                      className={`transition-colors duration-500 ${
                        isActive ? "text-[#FCCA71]" : "text-white/40"
                      }`}
                    />
                  </div>

                  {/* Node Label */}
                  <div className="flex flex-col">
                    <span
                      className={`font-mono text-xs transition-colors duration-500 ${
                        isActive
                          ? "text-[#FCCA71] font-bold"
                          : "text-[#CACBDB]/60"
                      }`}
                    >
                      {n.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Step Trigger Banner */}
        <div className="text-center pt-4 md:pt-6 border-t border-[#877BF1]/15 md:border-t-0">
          <div className="font-mono text-[11px] sm:text-xs text-[#877BF1] tracking-widest uppercase mb-2 md:mb-3">
            step {activeStep + 1} of {flowNodesChain.length}
          </div>
          <div className="text-[18px] sm:text-[26px] md:text-[30px] font-bold flex items-center justify-center gap-2 sm:gap-3.5 flex-wrap min-h-11">
            {activeStep === 0 ? (
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                {flowNodesChain[0].label}
              </span>
            ) : (
              <>
                <span className="text-[#8F92B8]">
                  {flowNodesChain[activeStep - 1].label}
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#FCCA71] shrink-0 sm:hidden"
                />
                <ArrowRight
                  size={24}
                  className="text-[#FCCA71] shrink-0 hidden sm:block"
                />
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold">
                  {flowNodesChain[activeStep].label}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfraFlow;
