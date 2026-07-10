import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  UsersThree,
  FlowArrow,
  SquaresFour,
  PlugsConnected,
} from "@phosphor-icons/react";

const PipeNode = (props) => {
  const Icon = props.icon;
  const { label, sub, active } = props;
  return (
    <div className="flex items-center gap-4 transition-all duration-300">
      <div
        className={`flex-none flex items-center justify-center rounded-sm w-11 h-11 transition-all duration-300 border ${
          active
            ? "border-[#FCCA71] bg-[#FCCA71]/15 text-[#FCCA71] shadow-[0_0_14px_rgba(252,202,113,0.25)]"
            : "border-[rgba(135,123,241,0.45)] bg-[rgba(135,123,241,0.06)] text-[#A9A0F5]"
        }`}
      >
        <Icon size={22} className="transition-transform duration-300" />
      </div>
      <div>
        <div
          className={`font-bold text-[15.5px] transition-colors duration-300 ${
            active ? "text-white" : "text-gray-100"
          }`}
        >
          {label}
        </div>
        <div
          className={`font-mono text-[10px] tracking-wider uppercase mt-0.5 transition-colors duration-300 ${
            active ? "text-[#FCCA71]" : "text-[#A5AABF]"
          }`}
        >
          {sub}
        </div>
      </div>
    </div>
  );
};

const PipeLink = ({ active }) => (
  <div
    className={`relative h-5 ml-[22px] my-0.5 border-l-[1.5px] border-dashed transition-colors duration-300 ${
      active ? "border-[#FCCA71]/40" : "border-[rgba(135,123,241,0.45)]"
    }`}
  >
    {active && (
      <span
        style={{ animation: "rseFlowY 1.8s linear infinite" }}
        className="absolute left-[-3.5px] w-1.5 h-1.5 rounded-full bg-[#FCCA71] shadow-[0_0_8px_#FCCA71]"
      />
    )}
  </div>
);

const EnterpriseApplicationsHero = ({ scrollToNextSection }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Single flowing dot cycle (loops through 4 states)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Enterprise Application Systems",
      },
    });
  };

  const handleScrollDown = () => {
    if (scrollToNextSection) {
      scrollToNextSection();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] overflow-hidden">
      <style>{`
        @keyframes rseFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes rseFlowY {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes rseDrift {
          0%, 100% { transform: translate(0,0); }
          33% { transform: translate(30px,-24px); }
          66% { transform: translate(-22px,18px); }
        }
      `}</style>

      {/* Blueprint grid overlay */}
      <div
        style={{
          maskImage:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)",
        }}
        className="absolute inset-0 pointer-events-none z-0 opacity-35 bg-[linear-gradient(rgba(135,123,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(135,123,241,0.05)_1px,transparent_1px)] bg-size-[46px_46px]"
      />

      {/* Atmospheric Glow */}
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(135,123,241,0.18), transparent 68%)",
          animation: "rseDrift 18s ease-in-out infinite",
        }}
        className="absolute top-[-60px] right-[8%] w-[420px] h-[420px] filter blur-[20px] pointer-events-none"
      />

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-start pl-[5%] md:pl-[7.5%] pr-[5%] min-[1290px]:pr-[44vw] py-6 min-[1290px]:py-12 z-20 relative bg-transparent gap-10 min-[1290px]:gap-0">
        
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-3 min-[1290px]:gap-4 w-full min-[1290px]:max-w-[680px] xl:max-w-[800px] min-[1290px]:flex-1 z-30 relative min-[1290px]:min-h-[380px] xl:min-h-[440px] justify-center">
          
          {/* Heading */}
          <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full">
            <Motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-full justify-start text-white text-[28px] sm:text-[38px] md:text-5xl min-[1290px]:text-[34px] xl:text-[48px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[58px] tracking-tight pb-1"
            >
              Building business-critical systems that power{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                enterprise operations
              </span>
            </Motion.h1>
          </div>

          {/* Description */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 max-w-full min-[1290px]:max-w-[620px] xl:max-w-[720px] text-[#F3F4F6] text-[13.5px] sm:text-[15.5px] xl:text-[17.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-normal mt-2 mb-3"
          >
            <p className="opacity-95">
              RevoSolve designs, engineers, modernizes, and integrates enterprise applications that connect people, processes, and data into scalable, secure, business-critical systems.
            </p>
            <p className="text-[#D1D5DB] opacity-90">
              Across government, financial institutions, and enterprise organizations — systems that align with real operational workflows, not just technical requirements.
            </p>
          </Motion.div>

          {/* CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 min-[1290px]:gap-6 items-center justify-center min-[1290px]:justify-start shrink-0 relative w-full mt-4 mb-4"
          >
            {/* Primary Button */}
            <button
              onClick={goConnect}
              className="btn-premium-glow min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Enterprise System
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/EnterpriceApplication_System/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={goConnect}
              className="min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to Our Engineering Team
              </span>
              <img
                className="shrink-0 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                src="/EnterpriceApplication_System/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </Motion.div>

        </div>

        {/* Right Column: vertical pipeline architecture */}
        <div className="flex flex-col justify-center items-center pointer-events-auto w-full mt-8 min-[1290px]:mt-0 min-[1290px]:w-[36vw] min-[1290px]:absolute min-[1290px]:right-[5%] min-[1290px]:top-1/2 min-[1290px]:-translate-y-1/2 z-20 mb-16 min-[1290px]:mb-0">
          <Motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="w-full max-w-[430px] relative rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.55)] border border-[rgba(135,123,241,0.25)] bg-linear-to-b from-[#12143e]/90 to-[#0a0b28]/90 p-5"
          >
            {/* Corner styling elements */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-[1.5px] border-l-[1.5px] border-[#877BF1]" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-[#877BF1]" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-[1.5px] border-l-[1.5px] border-[#877BF1]" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-[1.5px] border-r-[1.5px] border-[#877BF1]" />

            {/* Widget header */}
            <div className="uppercase mb-5 flex justify-between items-center font-mono text-[10.5px] tracking-wider text-[#BAC0E1]">
              <span>system_architecture.map</span>
              <span className="flex items-center gap-1.5 text-[#FCCA71] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA71] animate-pulse" />
                live
              </span>
            </div>

            {/* Pipeline nodes and links */}
            <PipeNode
              icon={UsersThree}
              label="Users & Teams"
              sub="Role-based access"
              active={activeStep === 0}
            />
            <PipeLink active={activeStep === 0} />
            
            <PipeNode
              icon={FlowArrow}
              label="Workflows"
              sub="Automation & approvals"
              active={activeStep === 1}
            />
            <PipeLink active={activeStep === 1} />
            
            <PipeNode
              icon={SquaresFour}
              label="Applications"
              sub="Core business logic"
              active={activeStep === 2}
            />
            <PipeLink active={activeStep === 2} />
            
            <PipeNode
              icon={PlugsConnected}
              label="Integrations"
              sub="ERP · CRM · APIs"
              active={activeStep === 3}
            />
          </Motion.div>
        </div>

      </div>

      {/* Scroll Arrow - Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/EnterpriceApplication_System/hero_scroll_arrow.svg"
          className="w-5.5 h-4.5 sm:w-6.5 sm:h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient */}
      <div className="absolute -bottom-2 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-1/2">
        <img
          src="/EnterpriceApplication_System/hero_bg_gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default EnterpriseApplicationsHero;
