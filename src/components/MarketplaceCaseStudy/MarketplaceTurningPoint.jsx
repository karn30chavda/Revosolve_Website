import React from "react";
import { motion as Motion } from "framer-motion";

const stats = [
  { value: "3.4×", caption: "operational lead time" },
  { value: "8", caption: "systems to reconcile" },
  { value: "0", caption: "single source of truth" },
];

/* ---- Curve geometry (SVG user units: 820 × 420) ---- */
const X0 = 60;
const X1 = 790;
const BASE = 318;
const N = 60;
const T_BREAK = 0.34;

const growthY = (t) => BASE - 268 * Math.pow(t, 2.15);
const capacityY = (t) => BASE - 46 * (1 - Math.exp(-3.4 * t));

const toPath = (fn) => {
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    pts.push(`${(X0 + (X1 - X0) * t).toFixed(1)},${fn(t).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
};

const gapArea = (() => {
  const fwd = [];
  const back = [];
  for (let i = 0; i <= N; i++) {
    const t = T_BREAK + ((1 - T_BREAK) * i) / N;
    const x = (X0 + (X1 - X0) * t).toFixed(1);
    fwd.push(`${x},${growthY(t).toFixed(1)}`);
    back.unshift(`${x},${capacityY(t).toFixed(1)}`);
  }
  return `M${fwd.join(" L")} L${back.join(" L")} Z`;
})();

const GROWTH_D = toPath(growthY);
const CAPACITY_D = toPath(capacityY);
const BREAK_X = Math.round(X0 + (X1 - X0) * T_BREAK);
const BREAK_Y = Math.round(growthY(T_BREAK));

const sparks = Array.from({ length: 7 }, (_, k) => {
  const t = T_BREAK + 0.09 + k * 0.086;
  return {
    cx: Math.round(X0 + (X1 - X0) * t),
    cy: Math.round((growthY(t) + capacityY(t)) / 2 + ((k % 3) - 1) * 16),
    dur: `${(2.8 + (k % 4) * 0.6).toFixed(1)}s`,
    delay: `${(k * 0.38).toFixed(2)}s`,
  };
});

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceTurningPoint = () => (
  <section className="relative w-full overflow-hidden bg-[#01031c] pt-6 pb-16 lg:pt-8 lg:pb-24 font-sans touch-pan-y" style={{ touchAction: "pan-y" }}>
    <style>{`
      @keyframes mkTrace {
        0% { stroke-dashoffset: 1000; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes mkRipple {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(3.5); opacity: 0; }
      }
      @keyframes mkRise {
        0% { transform: translateY(0); opacity: 0.8; }
        100% { transform: translateY(-16px); opacity: 0; }
      }
      @keyframes mkDotBlink {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
    `}</style>

    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="mb-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
        [the turning point]
      </div>

      <Motion.h2
        {...reveal}
        className="mb-6 sm:mb-8 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-[-0.03em]"
      >
        <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
          Growth was outrunning
        </span>
        <br />
        <span className="font-light text-white/90">
          the systems built to support it
        </span>
      </Motion.h2>      <div className="grid items-stretch gap-8 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Diverging curves */}
        <div
          className="relative rounded-xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full"
          style={{
            background:
              "linear-gradient(170deg, rgba(251,251,255,0.04), rgba(1,3,28,0.35))",
          }}
        >
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#AAA9BE]">
                growth vs. capacity
              </span>
              <span className="flex items-center gap-4 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE]">
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-0.5 w-3.5"
                    style={{ background: "linear-gradient(90deg,#484cff,#FCCA71)" }}
                  />
                  demand
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-0.5 w-3.5"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, rgba(251,251,255,0.6) 0 4px, transparent 4px 7px)",
                    }}
                  />
                  capacity
                </span>
              </span>
            </div>

            <div className="relative w-full max-w-xl mx-auto">
              <svg
                viewBox="0 0 820 420"
                className="block h-auto w-full overflow-visible pb-3 max-h-67.5"
              >
                <defs>
                  <linearGradient id="mkGrowth" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#484cff" />
                    <stop offset="60%" stopColor="#877BF1" />
                    <stop offset="100%" stopColor="#FCCA71" />
                  </linearGradient>
                  <pattern
                    id="mkGapHatch"
                    width="9"
                    height="9"
                    patternTransform="rotate(35)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="9"
                      stroke="rgba(135,123,241,0.42)"
                      strokeWidth="1.4"
                    />
                  </pattern>
                </defs>

                <g stroke="rgba(251,251,255,0.06)" strokeWidth="1.6">
                  {[60, 140, 220, 300].map((y) => (
                    <line key={y} x1="60" y1={y} x2="790" y2={y} />
                  ))}
                </g>
                <line
                  x1="60"
                  y1="350"
                  x2="790"
                  y2="350"
                  stroke="rgba(251,251,255,0.14)"
                  strokeWidth="1"
                />

                <path d={gapArea} fill="url(#mkGapHatch)" opacity="0.55" />
                <path d={gapArea} fill="rgba(135,123,241,0.05)" />

                <path
                  d={CAPACITY_D}
                  fill="none"
                  stroke="rgba(251,251,255,0.45)"
                  strokeWidth="2"
                  strokeDasharray="7 6"
                />
                <path
                  d={GROWTH_D}
                  fill="none"
                  stroke="url(#mkGrowth)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  style={{ animation: "mkTrace 5.5s cubic-bezier(0.4,0,0.2,1) infinite" }}
                />

                <line
                  x1={BREAK_X}
                  y1="96"
                  x2={BREAK_X}
                  y2={BREAK_Y}
                  stroke="rgba(135,123,241,0.55)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
                <circle cx={BREAK_X} cy={BREAK_Y} r="6" fill="#01031c" stroke="#877BF1" strokeWidth="2" />
                <circle
                  cx={BREAK_X}
                  cy={BREAK_Y}
                  r="6"
                  fill="none"
                  stroke="#877BF1"
                  strokeWidth="1.5"
                  style={{
                    transformOrigin: `${BREAK_X}px ${BREAK_Y}px`,
                    animation: "mkRipple 2.6s ease-out infinite",
                  }}
                />

                {sparks.map((s, i) => (
                  <circle
                    key={i}
                    cx={s.cx}
                    cy={s.cy}
                    r="2.4"
                    fill="#877BF1"
                    style={{
                      animation: `mkRise ${s.dur} ease-out infinite`,
                      animationDelay: s.delay,
                    }}
                  />
                ))}
              </svg>

              {/* Labels in HTML so they hold real px size at any scale */}
              <div className="absolute right-[3.7%] top-[6%] whitespace-nowrap text-[7.5px] font-semibold uppercase tracking-[0.16em] text-[#FCCA71]">
                business growth
              </div>
              <div className="absolute right-[3.7%] top-[63%] whitespace-nowrap text-[7.5px] font-semibold uppercase tracking-[0.16em] text-white/50">
                system capacity
              </div>
              <div className="absolute left-[74.6%] top-[42%] -translate-x-1/2 whitespace-nowrap text-center">
                <div className="text-[7.5px] font-semibold uppercase tracking-[0.16em] text-[#877BF1]">
                  the widening gap
                </div>
                <div className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  absorbed by people
                </div>
              </div>
              <div className="absolute left-[39.5%] top-[14%] flex items-center gap-1 whitespace-nowrap text-[7.5px] font-semibold uppercase tracking-[0.14em] text-[#877BF1]">
                <span
                  className="h-1 w-1 rounded-full bg-[#877BF1]"
                  style={{
                    boxShadow: "0 0 6px #877BF1",
                    animation: "mkDotBlink 1.6s ease-in-out infinite",
                  }}
                />
                operations break here
              </div>
              <div className="absolute bottom-0 left-[7.3%] right-[3.7%] flex justify-between text-[7px] font-semibold uppercase tracking-[0.14em] text-white/35">
                <span>early days</span>
                <span>scale-up</span>
                <span>today</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-6 sm:gap-10 border-t border-white/10 pt-4">
            {stats.map((s) => (
              <div key={s.caption}>
                <div className="text-2xl sm:text-3xl font-black leading-none tracking-tight text-[#FCCA71]">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE]">
                  {s.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The real constraint */}
        <Motion.div
          {...reveal}
          className="group relative flex flex-col justify-between rounded-xl border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-md transition-all duration-300 hover:border-[#FCCA71]/40 h-full overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, rgba(251,251,255,0.06), rgba(1,3,28,0.4))",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(252,202,113,0.14), transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <div className="relative mb-5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#AAA9BE]">
              the real constraint
            </div>
            <p className="relative text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold leading-snug tracking-tight">
              <span className="text-white">
                The challenge wasn&apos;t Shopify. The challenge was{" "}
              </span>
              <span className="font-serif italic font-normal bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent pr-1">
                operating the business behind
              </span>
              <span className="text-white"> Shopify.</span>
            </p>
          </div>
          <div
            className="relative z-10 mt-8 h-0.5 w-24"
            style={{ background: "linear-gradient(90deg,#877BF1,#FCCA71)" }}
          />
        </Motion.div>
      </div>
    </div>
  </section>
);

export default MarketplaceTurningPoint;
