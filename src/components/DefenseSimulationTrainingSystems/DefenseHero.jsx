import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DefenseHero = () => {
  const navigate = useNavigate();
  const [readiness, setReadiness] = React.useState(0);

  React.useEffect(() => {
    const end = 87;
    const duration = 5500;
    let startTime = null;
    let raf;

    // easeOut cubic: starts fast, decelerates to a stop
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setReadiness(Math.round(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goConnect = () => {
    navigate("/connect", {
      state: {
        category: "Services/Solution",
        service: "Defense Simulation & Training Systems",
      },
    });
  };

  const handleScrollDown = () => {
    const target = document.getElementById("challenge");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1290;
      const targetY = isDesktop
        ? scrollTop + rect.top - 50
        : scrollTop + rect.top;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col min-[1290px]:flex-row items-center justify-center min-[1290px]:justify-start pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] font-sans overflow-hidden">
      {/* Background Atmosphere Elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(29, 31, 76, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(25, 26, 62, 0.45) 0%, transparent 45%)
          `,
        }}
      />

      {/* Decorative Subtle Glow Spot */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/5 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-30" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(-45deg, rgba(135,123,241,0.05) 0 1px, transparent 1px 26px)", 
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)", 
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)" 
        }} 
      />

      {/* Animation Style Overrides */}
      <style>{`
        @keyframes dstRadarSweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes dstRingPing { 0% { transform: scale(0.4); opacity: 0.9; } 100% { transform: scale(2.6); opacity: 0; } }
        @keyframes dstBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes dstTermIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes dstShimmer { from { transform: translateX(-100%); } to { transform: translateX(200%); } }
      `}</style>

      {/* Main Content Layout */}
      <div className="w-full flex flex-col min-[1290px]:flex-row items-center justify-between pl-[5%] md:pl-[7.5%] min-[1290px]:pl-[7.5%] pr-[5%] min-[1290px]:pr-[7.5%] py-12 min-[1290px]:py-12 z-20 relative bg-transparent gap-12 min-[1290px]:gap-16">
        {/* Left Column: Text & CTA */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center min-[1290px]:items-start text-center min-[1290px]:text-left gap-4 min-[1290px]:gap-6 w-full min-[1290px]:max-w-[540px] xl:max-w-[700px] min-[1290px]:flex-1"
        >
          <div className="flex flex-col items-center min-[1290px]:items-start gap-4 w-full">
            {/* Main Headline Stack */}
            <div className="flex flex-col items-center min-[1290px]:justify-start min-[1290px]:items-start w-full gap-1">
              <h1 className="max-w-full text-white text-[7.5vw] sm:text-4xl md:text-5xl min-[1290px]:text-[34px] xl:text-[44px] font-black font-sans leading-tight min-[1290px]:leading-[46px] xl:leading-[56px] tracking-[0.264px] text-center min-[1290px]:text-left">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Prepare personnel for critical operations —{" "}
                </span>
                before they happen
              </h1>
            </div>

            {/* Description Subtext */}
            <div className="flex flex-col gap-3 w-full text-center min-[1290px]:text-left items-center min-[1290px]:items-start">
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-70 text-[#FBFBFF] text-[3.8vw] sm:text-base xl:text-[16.5px] font-normal font-sans leading-relaxed min-[1290px]:leading-relaxed">
                In mission-critical environments, experience cannot always be gained in the real world.
              </p>
              
              <p className="max-w-full min-[1290px]:max-w-[480px] xl:max-w-[620px] opacity-50 text-[#FBFBFF] text-[3.5vw] sm:text-[14.5px] font-normal font-sans leading-relaxed">
                RevoSolve engineers immersive simulation environments — AR, VR, Mixed Reality, Digital Twins, AI, and operational scenarios — so defense organizations, public safety agencies, emergency services, and industrial operators can train, rehearse, and evaluate teams safely.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center min-[1290px]:justify-start items-center">
            <button
              onClick={goConnect}
              className="btn-premium-glow min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                Build Your Simulation Platform
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/hero_section/icon_2.svg"
                alt=""
              />
            </button>

            <button
              onClick={goConnect}
              className="min-w-[200px] max-w-full px-5 h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Talk to Simulation Experts
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/hero_section/icon_3.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Right Column: HUD Viewport */}
        <Motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full min-[1290px]:max-w-[480px] xl:max-w-[520px] flex-1 flex flex-col z-10"
        >
          <div className="border border-[rgba(135,123,241,0.45)] bg-[#0A0B28] shadow-[0_24px_60px_rgba(0,0,0,0.5)] relative overflow-hidden w-full max-w-[480px] mx-auto rounded-md">
            {/* Top Log Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(135,123,241,0.18)] text-[10.5px] uppercase font-mono tracking-wider">
              <span className="text-[#5C5F85]">sim · helicopter_emergency_02</span>
              <span className="text-[#A9A0F5]">● scenario live</span>
            </div>

            {/* Radar area */}
            <div className="relative p-6 flex flex-col items-center">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-[18px] h-[18px] border-t-1.5 border-l-1.5 border-[#877BF1]" />
              <div className="absolute top-3 right-3 w-[18px] h-[18px] border-t-1.5 border-r-1.5 border-[#877BF1]" />
              <div className="absolute bottom-3 left-3 w-[18px] h-[18px] border-b-1.5 border-l-1.5 border-[#877BF1]" />
              <div className="absolute bottom-3 right-3 w-[18px] h-[18px] border-b-1.5 border-r-1.5 border-[#877BF1]" />

              {/* Radar Circle */}
              <div className="relative w-[190px] h-[190px] rounded-full border border-[rgba(135,123,241,0.45)] bg-[radial-gradient(circle,rgba(135,123,241,0.08),transparent_70%)] my-2">
                <div className="absolute inset-[28px] rounded-full border border-[rgba(135,123,241,0.18)]" />
                <div className="absolute inset-[58px] rounded-full border border-[rgba(135,123,241,0.18)]" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(135,123,241,0.18)]" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(135,123,241,0.18)]" />
                
                {/* Radar sweep */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(135,123,241,0.4), transparent 70deg, transparent 360deg)",
                    animation: "dstRadarSweep 4s linear infinite",
                  }}
                />

                {/* Blip 1 */}
                <span className="absolute top-[34%] left-[62%] w-[7px] h-[7px] rounded-full bg-[#877BF1] shadow-[0_0_9px_#877BF1]" />
                <span
                  className="absolute top-[34%] left-[62%] w-[7px] h-[7px] rounded-full border border-[#877BF1]"
                  style={{ animation: "dstRingPing 2.2s ease-out infinite" }}
                />

                {/* Blip 2 */}
                <span className="absolute top-[64%] left-[30%] w-[7px] h-[7px] rounded-full bg-[#FCCA71] shadow-[0_0_9px_rgba(252,202,113,0.8)]" />
                <span
                  className="absolute top-[64%] left-[30%] w-[7px] h-[7px] rounded-full border border-[#FCCA71]"
                  style={{ animation: "dstRingPing 2.2s ease-out infinite 1.1s" }}
                />

                {/* Target center cross */}
                <span className="absolute top-1/2 left-1/2 w-[9px] h-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#877BF1]" />
              </div>

              {/* Readouts Grid */}
              <div className="w-full grid grid-cols-3 gap-2 mt-4 text-[10.5px] font-mono">
                <div className="border border-[rgba(135,123,241,0.25)] p-2.5 bg-[#0F1034]">
                  <div className="text-[8.5px] tracking-wider text-[#A9A0F5] uppercase mb-1">
                    trainees
                  </div>
                  <div className="text-[15px] text-[#FFFFFF] font-bold">
                    4 <span className="text-[10px] text-[#877BF1]">in-sim</span>
                  </div>
                </div>
                <div className="border border-[rgba(135,123,241,0.25)] p-2.5 bg-[#0F1034]">
                  <div className="text-[8.5px] tracking-wider text-[#A9A0F5] uppercase mb-1">
                    difficulty
                  </div>
                  <div className="text-[15px] text-[#FFFFFF] font-bold">
                    adaptive <span className="text-[10px] text-[#FCCA71] font-extrabold">▲ AI</span>
                  </div>
                </div>
                <div className="border border-[rgba(135,123,241,0.25)] p-2.5 bg-[#0F1034]">
                  <div className="text-[8.5px] tracking-wider text-[#A9A0F5] uppercase mb-1">
                    readiness
                  </div>
                  <div className="text-[15px] text-[#FCCA71] font-black">{readiness}%</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full mt-3 h-[5px] bg-[rgba(135,123,241,0.15)] relative overflow-hidden rounded-full">
                <Motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 5.5, ease: [0.25, 1, 0.4, 1], delay: 0.1 }}
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-[#877BF1] to-[#FCCA71]"
                  style={{
                    boxShadow: "0 0 10px rgba(252,202,113,0.5)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  style={{
                    width: "50%",
                    animation: "dstShimmer 2s infinite linear",
                  }}
                />
              </div>
            </div>

            {/* Console footer log */}
            <div className="flex justify-between flex-wrap gap-2 px-4 py-3 border-t border-[rgba(135,123,241,0.25)] font-mono text-[10px] text-[#CACBDB] uppercase bg-[#0A0B28]">
              <span style={{ animation: "dstTermIn .4s ease both .4s" }}>
                <span className="text-[#4ADE80] font-bold">✓</span> procedure step 6/9 — <span className="text-[#4ADE80] font-bold">compliant</span>
              </span>
              <span style={{ animation: "dstTermIn .4s ease both 1.1s" }}>
                <span className="text-[#FCCA71]">instructor:</span> inject_event(engine_failure)
                <span className="inline-block w-[7px] h-[12px] bg-[#FCCA71] align-middle ml-1.5 animate-[dstBlink_1.1s_steps(1)_infinite]" />
              </span>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Down Chevron Arrow Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/hero_section/arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-all cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>

      {/* Atmospheric Transition Gradient (The Bridge) at bottom */}
      <div className="absolute -bottom-16 left-0 right-0 w-full pointer-events-none z-30 transform-gpu translate-y-[60%]">
        <img
          src="/hero_section/gradient.png"
          className="w-full h-auto object-cover scale-[2.0] md:scale-110 opacity-100"
          alt=""
        />
      </div>
    </section>
  );
};

export default DefenseHero;
