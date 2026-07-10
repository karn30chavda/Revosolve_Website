import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const steps = [
  {
    coverage: 0,
    rows: [
      { name: "auth.login_flow", state: "running", badge: "RUNNING" },
      { name: "payments.checkout", state: "pending", badge: "PENDING" },
      { name: "api.contract_suite", state: "pending", badge: "PENDING" },
      { name: "perf.load_1500vu", state: "pending", badge: "PENDING" },
      { name: "e2e.claims_journey", state: "pending", badge: "PENDING" },
    ]
  },
  {
    coverage: 22,
    rows: [
      { name: "auth.login_flow", state: "pass", badge: "PASS" },
      { name: "payments.checkout", state: "running", badge: "RUNNING" },
      { name: "api.contract_suite", state: "pending", badge: "PENDING" },
      { name: "perf.load_1500vu", state: "pending", badge: "PENDING" },
      { name: "e2e.claims_journey", state: "pending", badge: "PENDING" },
    ]
  },
  {
    coverage: 48,
    rows: [
      { name: "auth.login_flow", state: "pass", badge: "PASS" },
      { name: "payments.checkout", state: "pass", badge: "PASS" },
      { name: "api.contract_suite", state: "running", badge: "RUNNING" },
      { name: "perf.load_1500vu", state: "pending", badge: "PENDING" },
      { name: "e2e.claims_journey", state: "pending", badge: "PENDING" },
    ]
  },
  {
    coverage: 72,
    rows: [
      { name: "auth.login_flow", state: "pass", badge: "PASS" },
      { name: "payments.checkout", state: "pass", badge: "PASS" },
      { name: "api.contract_suite", state: "pass", badge: "PASS" },
      { name: "perf.load_1500vu", state: "running", badge: "RUNNING" },
      { name: "e2e.claims_journey", state: "pending", badge: "PENDING" },
    ]
  },
  {
    coverage: 85,
    rows: [
      { name: "auth.login_flow", state: "pass", badge: "PASS" },
      { name: "payments.checkout", state: "pass", badge: "PASS" },
      { name: "api.contract_suite", state: "pass", badge: "PASS" },
      { name: "perf.load_1500vu", state: "retry", badge: "RETRY" },
      { name: "e2e.claims_journey", state: "running", badge: "RUNNING" },
    ]
  },
  {
    coverage: 94,
    rows: [
      { name: "auth.login_flow", state: "pass", badge: "PASS" },
      { name: "payments.checkout", state: "pass", badge: "PASS" },
      { name: "api.contract_suite", state: "pass", badge: "PASS" },
      { name: "perf.load_1500vu", state: "retry", badge: "RETRY" },
      { name: "e2e.claims_journey", state: "pass", badge: "PASS" },
    ]
  }
];

const TestRow = ({ state, name, badge }) => {
  let icon = null;
  let colorClass = "text-[#CACBDB]/45";
  let badgeColorClass = "text-white/60";
  let badgeBorderClass = "border border-white/10";
  let badgeBgClass = "bg-transparent";
  let isPulse = false;

  if (state === "running") {
    icon = <span className="inline-block w-2.5 h-2.5 border-2 border-[#FCCA71] border-t-transparent rounded-full animate-spin shrink-0" />;
    colorClass = "text-white font-semibold";
    badgeColorClass = "text-[#FCCA71]";
    badgeBorderClass = "border border-[#FCCA71]";
    isPulse = true;
  } else if (state === "pass") {
    icon = <span className="text-[#A9A0F5] shrink-0 font-bold font-mono">✓</span>;
    colorClass = "text-white";
    badgeColorClass = "text-[#A9A0F5]";
    badgeBorderClass = "border border-[#A9A0F5]/55";
  } else if (state === "retry") {
    icon = <span className="text-[#FCCA71] shrink-0 font-bold font-mono">▲</span>;
    colorClass = "text-[#FCCA71]";
    badgeColorClass = "text-[#FCCA71]";
    badgeBgClass = "bg-[#FCCA71]/12";
    badgeBorderClass = "border border-[#FCCA71]/70";
  } else {
    icon = <span className="text-white/20 shrink-0 font-bold font-mono">○</span>;
  }

  return (
    <div className={`flex items-center gap-2.5 transition-all duration-300 py-1 ${colorClass}`}>
      {icon}
      <span className="truncate">{name}</span>
      <span 
        className={`ml-auto text-[10px] tracking-wider rounded-full px-2.5 py-0.5 ${badgeColorClass} ${badgeBorderClass} ${badgeBgClass} ${isPulse ? "animate-pulse-slow" : ""}`}
      >
        {badge}
      </span>
    </div>
  );
};

const QATestAutomationHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();
  const goConnect = () => navigate("/connect", { state: { category: "Services/Solution", service: "Quality Engineering & Test Automation" } });

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const isLast = currentStep === steps.length - 1;
    const intervalTime = isLast ? 4500 : 1800;
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, intervalTime);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const activeData = steps[currentStep];

  const handleScrollDown = () => {
    if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      const target = document.getElementById("qa-what-we-do");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex items-center justify-center pt-24 pb-16 z-10 bg-[#01031c] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes qetFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes qetPulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
        @keyframes qetDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
        @keyframes qetTermIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
        @keyframes qetSpin { to { transform: rotate(360deg); } }
        @keyframes qetGatePulse { 0%,100% { box-shadow: 0 0 0 0 rgba(135,123,241,0.4); } 50% { box-shadow: 0 0 14px 2px rgba(135,123,241,0.5); } }
        .animate-pulse-slow {
          animation: qetPulse 1.4s ease-in-out infinite;
        }
      `}} />

      {/* Blueprint grid overlay */}
      <div
        style={{
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
        }}
        className="absolute inset-0 pointer-events-none z-0 opacity-35 bg-[linear-gradient(rgba(135,123,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(135,123,241,0.05)_1px,transparent_1px)] bg-size-[46px_46px]"
      />

      {/* Atmospheric Glow */}
      <div
        className="absolute top-[-60px] right-[8%] w-[420px] h-[420px] filter blur-[20px] pointer-events-none bg-[radial-gradient(circle,rgba(135,123,241,0.18),transparent_68%)]"
        style={{
          animation: "qetDrift 18s ease-in-out infinite",
        }}
      />

      {/* Main Content Layout */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16 z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex flex-col items-center lg:items-start w-full"
          >
            
            <h1 className="text-white text-[20px] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[48px] font-black font-sans leading-tight tracking-tight pb-1 mb-6 text-center lg:text-left">
              Engineering reliability into{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">every digital system</span>
            </h1>

            <p className="text-[#CACBDB] max-w-[660px] mb-5 text-base sm:text-lg xl:text-[18.5px] leading-relaxed">
              Quality should not be the final phase of software delivery — it should be engineered into every stage of the product lifecycle.
            </p>
            <p className="text-[#8F92B8] max-w-[640px] mb-9 text-[15.5px] leading-relaxed">
              Intelligent test automation, performance validation, continuous testing, and quality governance — so your systems stay reliable, secure, and scalable as they evolve.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full mb-10">
              <button
                onClick={goConnect}
                className="btn-premium-glow w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
              >
                <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                  Modernize Your Quality Engineering
                </span>
                <img
                  className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                  src="/CloudDevOps/hero_btn_icon_1.svg"
                  alt=""
                />
              </button>

              <button
                onClick={goConnect}
                className="w-[250px] sm:w-[270px] px-4 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
              >
                <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                  Talk to a QA &amp; Automation Expert
                </span>
                <img
                  className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                  src="/CloudDevOps/hero_btn_icon_2.svg"
                  alt=""
                />
              </button>
            </div>
          </Motion.div>
        </div>

        {/* Right Column: test run board */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <Motion.div 
            initial={{ opacity: 0, y: 26 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-[85vw] sm:w-full sm:max-w-[480px] lg:max-w-[540px] rounded-md border border-[#877BF1]/25 bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#877BF1]/18">
              <span className="font-mono text-[11px] tracking-wider text-[#CACBDB] uppercase">regression_suite · run #482</span>
              <span className="font-mono text-[10px] tracking-wider text-[#FCCA71] uppercase animate-pulse">● executing</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 items-center">
              <div className="font-mono text-[12px] leading-[2.3] text-[#CACBDB]">
                {activeData.rows.map((row) => (
                  <TestRow key={row.name} state={row.state} name={row.name} badge={row.badge} />
                ))}
              </div>
              
              {/* coverage ring */}
              <div className="flex justify-center">
                <div 
                  style={{
                    background: `conic-gradient(#FCCA71 0 ${activeData.coverage}%, rgba(135,123,241,0.18) ${activeData.coverage}% 100%)`
                  }}
                  className="w-26 h-26 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(252,202,113,0.1)]"
                >
                  <div className="w-[78px] h-[78px] rounded-full bg-[#0A0B28] flex flex-col items-center justify-center">
                    <span className="text-[#FCCA71] font-bold text-2xl leading-none transition-all duration-300 drop-shadow-[0_0_8px_rgba(252,202,113,0.35)]">{activeData.coverage}%</span>
                    <span className="font-mono text-[8.5px] tracking-wider text-[#CACBDB] uppercase mt-1">coverage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-5 py-3 border-t border-[#877BF1]/18 font-mono text-[9.5px] tracking-wider text-[#CACBDB] uppercase">
              <span>1,248 tests</span><span className="text-white font-bold">99.2% pass rate</span><span>4m 12s</span>
            </div>
          </Motion.div>
        </div>

      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/CloudDevOps/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/CloudDevOps/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default QATestAutomationHero;
