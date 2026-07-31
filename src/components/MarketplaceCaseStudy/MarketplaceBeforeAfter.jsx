import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowsLeftRight,
  Table,
  Ticket,
  Files,
  CurrencyCircleDollar,
  Plugs,
  EyeSlash,
  ChartBar,
  ChatCircle,
  UsersThree,
} from "@phosphor-icons/react";

const rows = [
  { before: "Excel spreadsheets", after: "ERPNext central system", Icon: Table },
  { before: "Manual vouchers", after: "Automatic vouchers", Icon: Ticket },
  { before: "Vendor spreadsheets", after: "Vendor Portal", Icon: Files },
  { before: "Manual payout", after: "Automated settlement", Icon: CurrencyCircleDollar },
  { before: "Cheerio + Pabbly", after: "Native workflow", Icon: Plugs },
  { before: "No visibility", after: "Live dashboard", Icon: EyeSlash },
  { before: "Manual reports", after: "Real-time analytics", Icon: ChartBar },
  { before: "Manual communication", after: "Automated WhatsApp & email", Icon: ChatCircle },
  {
    before: "Operations grew with people",
    after: "Operations scaled with automation",
    Icon: UsersThree,
  },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceBeforeAfter = () => {
  const scrollTrackRef = useRef(null);
  const prevSplitRef = useRef(95);
  const moveTimeoutRef = useRef(null);
  const [split, setSplit] = useState(95);
  const [direction, setDirection] = useState("left");
  const [isMoving, setIsMoving] = useState(false);

  // Targets in-viewport progress to complete full slide while centered on screen
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start 75%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  // Maps scroll progress to complete 95% -> 5% slide while centered on screen
  const rawSplit = useTransform(smoothProgress, [0.15, 0.75], [95, 5]);

  useEffect(() => {
    return rawSplit.on("change", (latest) => {
      const diff = latest - prevSplitRef.current;
      if (Math.abs(diff) > 0.05) {
        setIsMoving(true);
        if (diff < 0) {
          setDirection("left"); // Slider moves LEFT -> blue dots trail RIGHT
        } else if (diff > 0) {
          setDirection("right"); // Slider moves RIGHT -> blue dots trail LEFT
        }
        prevSplitRef.current = latest;
        setSplit(Math.round(latest));

        if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
        moveTimeoutRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 350);
      }
    });
  }, [rawSplit]);

  const migrated = String(Math.round(((100 - split) / 100) * rows.length)).padStart(2, "0");

  return (
    /* Natural track height on mobile (h-auto py-16), sticky 240vh on desktop */
    <section
      id="before-after"
      ref={scrollTrackRef}
      className="relative w-full h-auto md:h-[240vh] bg-[#01031c] py-16 md:py-0 font-sans touch-pan-y"
    >
      <style>{`
        @keyframes mkBlueScatterRight {
          0% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.85; }
          100% { transform: translate(calc(-50% + var(--dist-x, 120px)), calc(-50% + var(--offset-y, 0px))) scale(0.1); opacity: 0; }
        }
        @keyframes mkBlueScatterLeft {
          0% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.85; }
          100% { transform: translate(calc(-50% - var(--dist-x, 120px)), calc(-50% + var(--offset-y, 0px))) scale(0.1); opacity: 0; }
        }
      `}</style>

      {/* Sticky on desktop, relative flow on mobile */}
      <div className="relative md:sticky top-0 left-0 w-full min-h-fit md:h-screen flex flex-col justify-center items-center overflow-hidden pt-0 sm:pt-2 lg:pt-4 touch-pan-y">
        <div className="relative z-10 w-[88%] max-w-7xl mx-auto flex flex-col justify-center">
          {/* Header */}
          <div className="mb-2 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
            [before vs after]
          </div>

          <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
            <div>
              <Motion.h2
                {...reveal}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-[-0.03em] max-w-3xl"
              >
                <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  What changed,
                </span>{" "}
                <span className="font-light text-white/90">
                  operation by operation
                </span>
              </Motion.h2>
            </div>

            <Motion.div
              {...reveal}
              className="flex items-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE] md:pb-1 shrink-0"
            >
              <ArrowsLeftRight size={15} weight="light" className="text-[#FCCA71]" />
              <span>{migrated} / {String(rows.length).padStart(2, "0")} migrated · scroll to reveal</span>
            </Motion.div>
          </div>

          {/* Comparison Card */}
          <div
            className="relative w-full select-none overflow-hidden rounded-xl border border-white/10 bg-[#01031c]/80 shadow-2xl pointer-events-none lg:pointer-events-auto"
            style={{ touchAction: "pan-y" }}
          >
            {/* AFTER Layer */}
            <div
              className="pt-7 pb-2"
              style={{
                background:
                  "linear-gradient(120deg, rgba(252,202,113,0.08), rgba(1,3,28,0.5) 45%)",
              }}
            >
              {rows.map((r, i) => (
                <div
                  key={r.after}
                  className="grid h-10 sm:h-11 grid-cols-[minmax(0,1fr)_20px_32px] sm:grid-cols-[minmax(0,1fr)_24px_40px] items-center gap-2 sm:gap-3 border-b border-[#FCCA71]/15 px-4 sm:px-8 text-right"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#FBFBFF] truncate">
                    {r.after}
                  </span>
                  <r.Icon size={16} weight="light" className="text-[#FCCA71] shrink-0 justify-self-center" />
                  <span className="text-[9.5px] font-mono font-medium text-[#FCCA71]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            {/* BEFORE Layer */}
            <div
              className="absolute inset-0 bg-[#01031c] pt-7 pb-2"
              style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
            >
              {rows.map((r, i) => (
                <div
                  key={r.before}
                  className="grid h-10 sm:h-11 grid-cols-[32px_20px_minmax(0,1fr)] sm:grid-cols-[40px_24px_minmax(0,1fr)] items-center gap-2 sm:gap-3 border-b border-white/10 px-4 sm:px-8"
                >
                  <span className="text-[9.5px] font-mono text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <r.Icon size={16} weight="light" className="text-[#877BF1]/60 shrink-0 justify-self-center" />
                  <span className="text-xs sm:text-sm font-medium tracking-tight text-[#AAA9BE] line-through decoration-[#877BF1]/50 truncate">
                    {r.before}
                  </span>
                </div>
              ))}
            </div>

            {/* Vertical Divider with Directional Light Micro-Dust Particles Trail */}
            <div
              className="absolute bottom-0 top-0 w-px pointer-events-none"
              style={{
                left: `${split}%`,
                background:
                  "linear-gradient(180deg, transparent, #877BF1 15%, #FCCA71 85%, transparent)",
                boxShadow: "0 0 18px rgba(135,123,241,0.7), 0 0 8px rgba(252,202,113,0.5)",
              }}
            >
              {/* Light Micro-Dust Particles - Smooth opacity fade without DOM unmounting */}
              <div
                className={`transition-opacity duration-300 ${
                  isMoving ? "opacity-100" : "opacity-0"
                }`}
              >
                {[
                  { top: "3%", dist: "120px", offY: "-18px", delay: "0.0s", size: "2px", color: "#a5b4fc" },
                  { top: "7%", dist: "180px", offY: "14px", delay: "0.25s", size: "1.5px", color: "#60a5fa" },
                  { top: "11%", dist: "65px", offY: "-10px", delay: "0.1s", size: "2.5px", color: "#818cf8" },
                  { top: "15%", dist: "210px", offY: "22px", delay: "0.4s", size: "2px", color: "#38bdf8" },
                  { top: "19%", dist: "95px", offY: "-16px", delay: "0.05s", size: "1.8px", color: "#a5b4fc" },
                  { top: "23%", dist: "160px", offY: "18px", delay: "0.3s", size: "2.2px", color: "#60a5fa" },
                  { top: "28%", dist: "80px", offY: "-24px", delay: "0.18s", size: "2px", color: "#818cf8" },
                  { top: "32%", dist: "230px", offY: "12px", delay: "0.45s", size: "1.5px", color: "#38bdf8" },
                  { top: "37%", dist: "140px", offY: "-14px", delay: "0.12s", size: "2.5px", color: "#a5b4fc" },
                  { top: "41%", dist: "190px", offY: "26px", delay: "0.35s", size: "1.8px", color: "#60a5fa" },
                  { top: "46%", dist: "75px", offY: "-20px", delay: "0.08s", size: "2px", color: "#818cf8" },
                  { top: "50%", dist: "240px", offY: "10px", delay: "0.5s", size: "1.5px", color: "#38bdf8" },
                  { top: "54%", dist: "110px", offY: "-12px", delay: "0.22s", size: "2.2px", color: "#a5b4fc" },
                  { top: "59%", dist: "175px", offY: "20px", delay: "0.42s", size: "1.8px", color: "#60a5fa" },
                  { top: "63%", dist: "90px", offY: "-22px", delay: "0.15s", size: "2.5px", color: "#818cf8" },
                  { top: "68%", dist: "220px", offY: "16px", delay: "0.48s", size: "1.5px", color: "#38bdf8" },
                  { top: "72%", dist: "130px", offY: "-15px", delay: "0.28s", size: "2px", color: "#a5b4fc" },
                  { top: "77%", dist: "195px", offY: "24px", delay: "0.38s", size: "1.8px", color: "#60a5fa" },
                  { top: "81%", dist: "85px", offY: "-18px", delay: "0.03s", size: "2.2px", color: "#818cf8" },
                  { top: "86%", dist: "250px", offY: "14px", delay: "0.52s", size: "1.5px", color: "#38bdf8" },
                  { top: "90%", dist: "105px", offY: "-25px", delay: "0.2s", size: "2.5px", color: "#a5b4fc" },
                  { top: "95%", dist: "165px", offY: "19px", delay: "0.46s", size: "1.8px", color: "#60a5fa" },
                ].map((p, idx) => (
                  <span
                    key={`blue-micro-dot-${idx}`}
                    className="absolute left-1/2 rounded-full pointer-events-none"
                    style={{
                      top: p.top,
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      boxShadow: `0 0 6px ${p.color}, 0 0 10px rgba(96,165,250,0.6)`,
                      "--dist-x": p.dist,
                      "--offset-y": p.offY,
                      animation: `${
                        direction === "left" ? "mkBlueScatterRight" : "mkBlueScatterLeft"
                      } 0.85s ease-out infinite`,
                      animationDelay: p.delay,
                    }}
                  />
                ))}
              </div>

              <span
                className="absolute left-1/2 top-1/2 flex h-8 w-8 sm:h-9 sm:w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#877BF1]/80 bg-[#01031c]/95 shadow-xl"
                style={{
                  boxShadow: "0 0 22px rgba(135,123,241,0.7), 0 0 10px rgba(252,202,113,0.5)",
                }}
              >
                <ArrowsLeftRight size={15} weight="light" className="text-[#877BF1] animate-pulse" />
              </span>
            </div>

            {/* Side Indicators */}
            <div className="pointer-events-none absolute left-4 sm:left-6 top-2 text-[9px] sm:text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/30">
              before
            </div>
            <div className="pointer-events-none absolute right-4 sm:right-6 top-2 text-[9px] sm:text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#FCCA71]">
              after
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceBeforeAfter;