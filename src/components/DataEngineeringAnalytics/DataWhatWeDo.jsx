import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FlowArrow,
  Database,
  Scales,
  GitFork,
  CheckSquare,
  ChartBar,
  Sparkle,
  Gauge,
} from "@phosphor-icons/react";

const Eyebrow = ({ children }) => (
  <span className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4 block select-none">
    [{children}]
  </span>
);

const SrcChip = ({ children, icon: Icon, iconColor, animClass }) => (
  <span
    className={`inline-flex items-center gap-[7px] font-mono border border-[#877BF1]/25 py-[6px] px-[12px] text-[10px] uppercase tracking-[0.08em] transition-all duration-300 bg-[#0f1034] text-[#E7E8F4] rounded-sm hover:border-[#877BF1] hover:bg-[#877BF1]/5 cursor-pointer ${animClass || ""}`}
  >
    {Icon && <Icon size={13} className={iconColor || "text-[#A9A0F5]"} />}
    {children}
  </span>
);

const DataWhatWeDo = () => {
  return (
    <section
      id="do"
      className="relative z-10 w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20"
    >
      <style>{`
        @keyframes deiFlow1 {
          0% { left: -12%; opacity: 0; }
          3.33% { opacity: 1; }
          23.33% { opacity: 1; }
          26.67% { left: 112%; opacity: 0; }
          100% { left: 112%; opacity: 0; }
        }
        @keyframes deiFlow2 {
          0%, 26.67% { left: -12%; opacity: 0; }
          30% { opacity: 1; }
          50% { opacity: 1; }
          53.33% { left: 112%; opacity: 0; }
          100% { left: 112%; opacity: 0; }
        }
        @keyframes deiFlow3 {
          0%, 53.33% { left: -12%; opacity: 0; }
          56.67% { opacity: 1; }
          76.67% { opacity: 1; }
          80% { left: 112%; opacity: 0; }
          100% { left: 112%; opacity: 0; }
        }
        @keyframes deiPulseSource {
          0%, 5% {
            border-color: #FCCA71;
            box-shadow: 0 0 12px rgba(252, 202, 113, 0.3);
            color: #FCCA71;
            background-color: rgba(252, 202, 113, 0.08);
          }
          6%, 100% {
            border-color: rgba(135, 123, 241, 0.25);
            box-shadow: none;
            color: #E7E8F4;
            background-color: #0f1034;
          }
        }
        @keyframes deiPulsePipeline {
          0%, 25.67%, 32.67%, 100% {
            border-color: rgba(135, 123, 241, 0.45);
            background-color: rgba(135, 123, 241, 0.06);
            color: #A9A0F5;
            box-shadow: none;
          }
          26.67%, 31.67% {
            border-color: #FCCA71;
            background-color: #FCCA71;
            color: #01031c;
            box-shadow: 0 0 16px rgba(252, 202, 113, 0.45);
          }
        }
        @keyframes deiPulseWarehouse {
          0%, 52.33%, 59.33%, 100% {
            border-color: rgba(135, 123, 241, 0.45);
            background-color: rgba(135, 123, 241, 0.06);
            color: #A9A0F5;
            box-shadow: none;
          }
          53.33%, 58.33% {
            border-color: #FCCA71;
            background-color: #FCCA71;
            color: #01031c;
            box-shadow: 0 0 20px rgba(252, 202, 113, 0.5);
          }
        }
        @keyframes deiPulseIntel {
          0%, 79%, 86%, 100% {
            border-color: rgba(135, 123, 241, 0.25);
            box-shadow: none;
            color: #E7E8F4;
            background-color: #0f1034;
          }
          80%, 85% {
            border-color: #FCCA71;
            box-shadow: 0 0 12px rgba(252, 202, 113, 0.3);
            color: #FCCA71;
            background-color: rgba(252, 202, 113, 0.08);
          }
        }
        .dei-source-pulse {
          animation: deiPulseSource 6s infinite;
        }
        .dei-source-pulse svg {
          color: inherit !important;
        }
        .dei-pipeline-pulse {
          border: 1px solid rgba(135, 123, 241, 0.45);
          background-color: rgba(135, 123, 241, 0.06);
          color: #A9A0F5;
          animation: deiPulsePipeline 6s infinite;
        }
        .dei-warehouse-pulse {
          border: 2px solid rgba(135, 123, 241, 0.45);
          background-color: rgba(135, 123, 241, 0.06);
          color: #A9A0F5;
          animation: deiPulseWarehouse 6s infinite;
        }
        .dei-intel-pulse {
          animation: deiPulseIntel 6s infinite;
        }
        .dei-intel-pulse svg {
          color: inherit !important;
        }
      `}</style>

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Header Block at the top left */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full"
        >
          <span className="text-white/30 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-4 select-none">
            [what we do]
          </span>

          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">Engineering </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Data Foundations{" "}
            </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">
              that drive better decisions
            </span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">
          {/* Left Column: Data Ecosystem Flow Graphic */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div
              style={{
                backgroundColor: "rgba(13, 15, 48, 0.75)",
                borderColor: "rgba(135, 123, 241, 0.2)",
                boxShadow:
                  "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(135, 123, 241, 0.05)",
              }}
              className="border rounded-[22px] p-5 sm:p-6 xl:p-8 w-full relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />

              <div className="flex justify-between items-center mb-6 font-mono text-[10.5px] tracking-wider text-[#5C5F85] uppercase">
                <span>data_ecosystem.flow</span>
                <span className="text-[#A9A0F5]">● unified</span>
              </div>

              <div className="flex items-center justify-between gap-1 sm:gap-2 my-auto py-2">
                {/* Sources */}
                <div className="text-center flex-1">
                  <div className="flex flex-col gap-1.5 items-center">
                    <SrcChip animClass="dei-source-pulse">ERP</SrcChip>
                    <SrcChip animClass="dei-source-pulse">CRM</SrcChip>
                    <SrcChip animClass="dei-source-pulse">IoT</SrcChip>
                  </div>
                  <div className="font-mono text-[9.5px] tracking-wider text-[#A9A0F5] uppercase mt-2.5">
                    Sources
                  </div>
                </div>

                {/* Link 1 */}
                <div className="relative flex-0.5 h-px bg-[rgba(252,202,113,0.25)] w-full min-w-[20px]">
                  <span
                    className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71,0_0_14px_#FCCA71]"
                    style={{ animation: "deiFlow1 6s linear infinite" }}
                  />
                </div>

                {/* Pipelines */}
                <div className="text-center flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center rounded-sm dei-pipeline-pulse">
                    <FlowArrow size={24} />
                  </div>
                  <div className="font-mono text-[9.5px] tracking-wider text-[#A9A0F5] uppercase mt-2.5">
                    Pipelines
                  </div>
                </div>

                {/* Link 2 */}
                <div className="relative flex-0.5 h-px bg-[rgba(252,202,113,0.25)] w-full min-w-[20px]">
                  <span
                    className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71,0_0_14px_#FCCA71]"
                    style={{ animation: "deiFlow2 6s linear infinite" }}
                  />
                </div>

                {/* Warehouse */}
                <div className="text-center flex-1">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-sm dei-warehouse-pulse">
                    <Database size={28} />
                  </div>
                  <div className="font-mono text-[9.5px] tracking-wider text-[#A9A0F5] uppercase mt-2.5">
                    Warehouse
                  </div>
                </div>

                {/* Link 3 */}
                <div className="relative flex-0.5 h-px bg-[rgba(252,202,113,0.25)] w-full min-w-[20px]">
                  <span
                    className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71,0_0_14px_#FCCA71]"
                    style={{ animation: "deiFlow3 6s linear infinite" }}
                  />
                </div>

                {/* Intelligence */}
                <div className="text-center flex-1">
                  <div className="flex flex-col gap-1.5 items-center">
                    <SrcChip icon={ChartBar} animClass="dei-intel-pulse">
                      BI
                    </SrcChip>
                    <SrcChip
                      icon={Sparkle}
                      iconColor="text-[#FCCA71]"
                      animClass="dei-intel-pulse"
                    >
                      AI
                    </SrcChip>
                    <SrcChip icon={Gauge} animClass="dei-intel-pulse">
                      Ops
                    </SrcChip>
                  </div>
                  <div className="font-mono text-[9.5px] tracking-wider text-[#A9A0F5] uppercase mt-2.5">
                    Intel
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8 pt-5 border-t border-[rgba(135,123,241,0.18)] font-mono text-[10px] text-[#8F92B8] uppercase">
                <span className="flex items-center gap-1.5">
                  <Scales size={14} className="text-[#A9A0F5]" />
                  Governance
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork size={14} className="text-[#A9A0F5]" />
                  Lineage
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckSquare size={14} className="text-[#A9A0F5]" />
                  Quality
                </span>
              </div>
            </div>
          </Motion.div>

          {/* Right Column: Paragraph Description Blocks */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center items-start text-left gap-6 relative z-10"
          >
            <p className="text-white text-base md:text-lg xl:text-[20px] font-medium leading-relaxed font-sans">
              Organizations generate data across every business function — yet
              much of it remains fragmented, inconsistent, and underutilized.
            </p>

            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              Rather than building isolated dashboards, we create scalable data
              ecosystems that consolidate, govern, and transform enterprise data
              into a trusted foundation for reporting, analytics, AI, and
              operational intelligence.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataWhatWeDo;
