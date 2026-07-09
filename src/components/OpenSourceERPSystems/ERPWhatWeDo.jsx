import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  Calculator, UsersThree, Truck, Kanban, Package, ChartBar, Check, HourglassMedium, Flag,
} from "@phosphor-icons/react";

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const SEG_MS = 2200;  // ms per segment
const RESET_MS = 700; // brief pause after Issued before restarting
// Phases: 0 = seg0 flowing, 1 = seg1 flowing (DeptHead lit), 2 = seg2 flowing (Finance lit), 3 = Issued lit (no dot)
const PHASE_DURATIONS = [SEG_MS, SEG_MS, SEG_MS, RESET_MS];

const ERPWhatWeDo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setPhase(p => (p + 1) % 4), PHASE_DURATIONS[phase]);
    return () => clearTimeout(id);
  }, [phase]);

  // activeSeg: which line has the dot (-1 = none during reset)
  const activeSeg = phase < 3 ? phase : -1;
  // activeStage = phase directly: 0=Draft, 1=DeptHead, 2=Finance, 3=Issued
  const activeStage = phase;

  // stage idx === activeStage: currently active (gold)
  // stage idx < activeStage: passed (done, purple)
  // stage idx > activeStage: not yet reached (idle)
  const getStatus = (idx) => {
    if (idx === activeStage) return "active";
    if (idx < activeStage) return "done";
    return "idle";
  };

  const stageStyle = (status) => {
    if (status === "done") return { border: "1px solid #877BF1", background: "rgba(135,123,241,0.15)" };
    if (status === "active") return { border: "1px solid #FCCA71", background: "rgba(252,202,113,0.12)", boxShadow: "0 0 10px 2px rgba(252,202,113,0.25)" };
    return { border: "1px solid rgba(135,123,241,0.22)", background: "transparent" };
  };

  const labelColor = (status) => {
    if (status === "active") return "#FCCA71";
    if (status === "done") return "#A9A0F5";
    return "#5C5F85";
  };

  const stages = [
    { label: "Draft",     doneIcon: <Check size={13} color="#A9A0F5" />,           activeIcon: <Check size={13} color="#FCCA71" />,           idleIcon: <Check size={13} color="#5C5F85" /> },
    { label: "Dept Head", doneIcon: <Check size={13} color="#A9A0F5" />,           activeIcon: <Check size={13} color="#FCCA71" />,           idleIcon: <Check size={13} color="#5C5F85" /> },
    { label: "Finance",   doneIcon: <HourglassMedium size={13} color="#A9A0F5" />, activeIcon: <HourglassMedium size={13} color="#FCCA71" />, idleIcon: <HourglassMedium size={13} color="#5C5F85" /> },
    { label: "Issued",    doneIcon: <Flag size={13} color="#A9A0F5" />,            activeIcon: <Flag size={13} color="#FCCA71" />,            idleIcon: <Flag size={13} color="#5C5F85" /> },
  ];

  const getIcon = (stage, status) => {
    if (status === "active") return stage.activeIcon;
    if (status === "done") return stage.doneIcon;
    return stage.idleIcon;
  };

  return (
    <section
      id="ent-what-we-do"
      className="relative w-full bg-[#01031c] py-12 lg:py-16 overflow-hidden font-sans scroll-mt-20"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes entTermIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes entDotFlow {
          0%   { left: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}} />

      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen"
        style={{ backgroundImage: "url(/OpenSourceERPSystems/card_bg_pattern.svg)", backgroundSize: "180px", backgroundRepeat: "repeat" }}
      />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full"
        >
          <span className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] mb-4 select-none">[what we do]</span>
          <h2 className="text-3xl sm:text-[38px] xl:text-[44px] leading-tight tracking-[-0.02em] font-sans max-w-4xl text-left">
            <span className="font-black text-[#877BF1]">Operational platforms </span>
            <span className="font-black bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">that become </span>
            <span className="font-thin text-[#E7E6FC] opacity-90 block sm:inline">the digital backbone of your organization</span>
          </h2>
        </Motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 relative">

          {/* Left: ERP Console */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] relative z-10 flex"
          >
            <div
              className="border rounded-[22px] w-full relative overflow-hidden flex flex-col justify-between"
              style={{ backgroundColor: "rgba(10,11,40,0.9)", borderColor: "rgba(135,123,241,0.25)", boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#877BF1]/30 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(135,123,241,0.18)]" style={{ fontFamily: MONO }}>
                <span className="text-[10.5px] tracking-[0.12em] text-[#5C5F85] uppercase">workspace / approvals</span>
                <span className="text-[10px] tracking-widest text-[#A9A0F5] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]" />live
                </span>
              </div>

              {/* Body */}
              <div className="grid" style={{ gridTemplateColumns: "auto minmax(0,1fr)", minHeight: 220 }}>

                {/* Sidebar — bright muted, Truck gold */}
                <div className="border-r border-[rgba(135,123,241,0.18)] px-3 py-4 flex flex-col gap-3.5">
                  <Calculator size={17} color="#8F92B8" />
                  <UsersThree size={17} color="#8F92B8" />
                  <Truck size={17} color="#FCCA71" />
                  <Kanban size={17} color="#8F92B8" />
                  <Package size={17} color="#8F92B8" />
                  <ChartBar size={17} color="#8F92B8" />
                </div>

                {/* Main */}
                <div className="p-4">
                  {/* PO Title */}
                  <div className="font-semibold text-[14px] mb-4 text-white" style={{ animation: "entTermIn .5s ease both .2s" }}>
                    Purchase Order PO-2214{" "}
                    <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.08em", color: "#FCCA71", border: "1px solid rgba(252,202,113,0.35)", padding: "2px 7px", marginLeft: 8, textTransform: "uppercase" }}>
                      Pending approval
                    </span>
                  </div>

                  {/* Workflow trace */}
                  <div className="flex items-center mb-4" style={{ animation: "entTermIn .5s ease both .6s" }}>
                    {stages.map((stage, idx) => {
                      const status = getStatus(idx);
                      return (
                        <React.Fragment key={stage.label}>
                          <div className="flex flex-col items-center gap-1.5 shrink-0">
                            <span className="w-6 h-6 flex items-center justify-center transition-all duration-500" style={stageStyle(status)}>
                              {getIcon(stage, status)}
                            </span>
                            <span style={{ fontFamily: MONO, fontSize: 7.5, letterSpacing: "0.06em", textTransform: "uppercase", color: labelColor(status), transition: "color 0.5s", whiteSpace: "nowrap" }}>
                              {stage.label}
                            </span>
                          </div>
                          {idx < stages.length - 1 && (
                            <div className="relative flex-1 h-px bg-[rgba(135,123,241,0.2)] mx-1.5 mb-5">
                              {activeSeg === idx && (
                                <span
                                  key={phase}
                                  className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71]"
                                  style={{ animation: `entDotFlow ${SEG_MS}ms linear` }}
                                />
                              )}
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2" style={{ animation: "entTermIn .5s ease both 1s" }}>
                    {[["₹14.2L", "PO value"], ["3/4", "Quotes in"], ["SLA 2d", "Escalation"]].map(([v, l]) => (
                      <div key={l} className="border border-[rgba(135,123,241,0.18)] p-2.5">
                        <div className="font-bold text-[16px] text-white">{v}</div>
                        <div style={{ fontFamily: MONO, fontSize: 8, letterSpacing: "0.08em", color: "#5C5F85", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between px-4 py-2.5 border-t border-[rgba(135,123,241,0.18)] flex-wrap gap-y-1">
                <span style={{ fontFamily: MONO }} className="text-[10px] tracking-wider uppercase text-[#CACBDB]/90">ERPNext · Frappe Framework</span>
                <span style={{ fontFamily: MONO }} className="text-[10px] tracking-wider uppercase text-[#A9A0F5]">1 platform · 0 silos</span>
              </div>
            </div>
          </Motion.div>

          {/* Right: Text */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="w-full lg:w-[48%] flex flex-col justify-center items-start text-left gap-6 relative z-10"
          >
            <p className="text-white text-base md:text-lg xl:text-[20px] font-medium leading-relaxed font-sans">
              Enterprise software should function as a connected operational ecosystem — every department, workflow, and stakeholder working from a single source of truth.
            </p>
            <p className="text-[#E7E6FC]/90 text-sm md:text-base leading-relaxed font-sans">
              Unlike traditional ERP implementations that focus on software deployment, we engineer operational systems aligned with your real-world processes — including custom platform engineering, workflow automation, integration, and low-code development.
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default ERPWhatWeDo;
