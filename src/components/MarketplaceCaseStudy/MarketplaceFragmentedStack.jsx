import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ShoppingBag,
  Table,
  Files,
  ChatCircle,
  Plugs,
  Ticket,
  CurrencyCircleDollar,
  ChartBar,
  Storefront,
  Hourglass,
} from "@phosphor-icons/react";

const stats = [
  { value: "08", caption: "disconnected tools" },
  { value: "28", caption: "manual hand-off paths" },
  { value: "00", caption: "shared system of record" },
];

const tools = [
  { label: "Shopify", Icon: ShoppingBag },
  { label: "Excel ops", Icon: Table },
  { label: "Vendor sheets", Icon: Files },
  { label: "Cheerio", Icon: ChatCircle },
  { label: "Pabbly", Icon: Plugs },
  { label: "Manual vouchers", Icon: Ticket },
  { label: "Manual payouts", Icon: CurrencyCircleDollar },
  { label: "Excel reports", Icon: ChartBar },
];

const strain = [
  { label: "Orders", Icon: ShoppingBag, queue: "+12%", hot: false },
  { label: "Vendors", Icon: Storefront, queue: "+28%", hot: false },
  { label: "Customer messages", Icon: ChatCircle, queue: "+46%", hot: false },
  { label: "Payout calculations", Icon: CurrencyCircleDollar, queue: "+61%", hot: true },
  { label: "Reporting effort", Icon: ChartBar, queue: "+84%", hot: true },
  { label: "Operational lead time", Icon: Hourglass, queue: "3.4×", hot: true },
];

const SHEET_COLS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const ERRORS = ["#REF!", "#N/A", "#VALUE!", "#DIV/0!"];

/** Ring-laid tool nodes + every n² hand-off link between them. */
const nodes = tools.map((t, i) => {
  const a = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
  return { ...t, x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
});

const links = [];
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const a = nodes[i];
    const b = nodes[j];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    links.push({
      left: `${(a.x + dx / 2 - len / 2).toFixed(2)}%`,
      top: `${(a.y + dy / 2).toFixed(2)}%`,
      width: `${len.toFixed(2)}%`,
      angle: ((Math.atan2(dy, dx) * 180) / Math.PI).toFixed(2),
      dur: `${(2.4 + ((i * 7 + j * 13) % 17) * 0.25).toFixed(2)}s`,
      delay: `${(((i * 5 + j * 11) % 23) * 0.18).toFixed(2)}s`,
      background:
        (i + j) % 3 === 0
          ? "linear-gradient(90deg, rgba(252,202,113,0.5), rgba(135,123,241,0.5))"
          : (i + j) % 3 === 1
            ? "linear-gradient(90deg, rgba(135,123,241,0.5), rgba(72,76,255,0.5))"
            : "linear-gradient(90deg, rgba(72,76,255,0.5), rgba(252,202,113,0.5))",
    });
  }
}

/** Spreadsheet cells: values degrade into errors as load rises left→right, top→bottom. */
const sheetCells = [];
for (let r = 0; r < 8; r++) {
  sheetCells.push({ head: true, text: String(r + 1) });
  for (let c = 0; c < 12; c++) {
    const load = (c / 11) * 0.6 + (r / 7) * 0.4;
    const broken =
      ((r * 5 + c * 3) % 7 === 0 && load > 0.42) || (load > 0.86 && (r + c) % 2 === 0);
    if (broken) {
      sheetCells.push({
        broken: true,
        text: ERRORS[(r + c) % ERRORS.length],
        dur: `${(1.6 + ((r + c) % 5) * 0.35).toFixed(2)}s`,
        delay: `${(((r * 3 + c) % 9) * 0.28).toFixed(2)}s`,
      });
    } else {
      const v = 120 + ((r * 37 + c * 91) % 880);
      sheetCells.push({
        text: c % 4 === 0 ? String(v) : (v / 10).toFixed(1),
        dim: load <= 0.62,
      });
    }
  }
}

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceFragmentedStack = () => {
  const [meshVibrating, setMeshVibrating] = useState(false);
  const [sheetVibrating, setSheetVibrating] = useState(false);

  const triggerMeshVibrate = () => {
    setMeshVibrating(true);
    setTimeout(() => setMeshVibrating(false), 500);
  };

  const triggerSheetVibrate = () => {
    setSheetVibrating(true);
    setTimeout(() => setSheetVibrating(false), 500);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#01031c] py-16 lg:py-24 font-sans">
      <style>{`
        @keyframes mkFlicker {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.45; filter: drop-shadow(0 0 3px rgba(135,123,241,0.4)); }
        }
        @keyframes mkShake {
          0%, 100% { transform: translateY(0); }
          48% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          52% { transform: translateY(2px); }
          54% { transform: translateY(0); }
        }
        @keyframes mkVibrate {
          0%, 88%, 100% { transform: translateX(0); }
          90% { transform: translateX(-1px); }
          92% { transform: translateX(1px); }
          94% { transform: translateX(-0.5px); }
          96% { transform: translateX(0.5px); }
          98% { transform: translateX(0); }
        }
        @keyframes mkClickVibrate {
          0% { transform: scale(0.99) translateX(0); }
          20% { transform: scale(0.99) translateX(-1.5px); }
          40% { transform: scale(0.99) translateX(1.5px); }
          60% { transform: scale(0.99) translateX(-1px); }
          80% { transform: scale(0.99) translateX(1px); }
          100% { transform: scale(1) translateX(0); }
        }
      @keyframes mkDraw {
        0% { stroke-dashoffset: 100; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -100; }
      }
      @keyframes mkScan {
        0% { left: -12%; }
        100% { left: 112%; }
      }
      @keyframes mkCellBlink {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      @keyframes mkNodeGlow {
        0% {
          border-color: rgba(252, 202, 113, 0.95);
          box-shadow: 0 0 24px rgba(252, 202, 113, 0.6);
          color: #FCCA71;
        }
        12.5% {
          border-color: rgba(252, 202, 113, 0.7);
          box-shadow: 0 0 16px rgba(252, 202, 113, 0.4);
          color: rgba(252, 202, 113, 0.85);
        }
        25% {
          border-color: rgba(252, 202, 113, 0.45);
          box-shadow: 0 0 10px rgba(252, 202, 113, 0.25);
          color: rgba(252, 202, 113, 0.65);
        }
        37.5% {
          border-color: rgba(251, 251, 255, 0.25);
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
          color: #AAA9BE;
        }
        100% {
          border-color: rgba(251, 251, 255, 0.18);
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
          color: #AAA9BE;
        }
      }
    `}</style>

    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="mb-16 grid items-center gap-10 lg:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-3 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
            [before revosolve]
          </div>

          <Motion.h2
            {...reveal}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-[-0.03em]"
          >
            <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Eight tools,
            </span>
            <br />
            <span className="font-light text-white/90">
              no system of record
            </span>
          </Motion.h2>

          <Motion.p
            {...reveal}
            className="mt-4 mb-8 max-w-xl text-sm md:text-base leading-relaxed text-[#AAA9BE]"
          >
            Every function ran on its own island — and a person had to carry the data
            between them.
          </Motion.p>

          <Motion.div {...reveal} className="flex flex-wrap items-start gap-8 sm:gap-10 xl:gap-12 mt-8">
            {stats.map((s) => (
              <div key={s.caption} className="flex flex-col items-start">
                <div className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-[#FCCA71] leading-none font-sans">
                  {s.value}
                </div>
                <div className="mt-3 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#AAA9BE]">
                  {s.caption}
                </div>
              </div>
            ))}
          </Motion.div>
        </div>

        {/* n² integration mesh */}
        <Motion.div
          {...reveal}
          onClick={triggerMeshVibrate}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative mx-auto aspect-square w-full max-w-130 select-none touch-pan-y cursor-pointer"
          style={{
            animation: meshVibrating
              ? "mkClickVibrate 0.5s ease-in-out"
              : "mkVibrate 5s ease-in-out infinite",
            touchAction: "pan-y",
          }}
        >
          {/* Faint Background Dot Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(251,251,255,0.05) 1px, transparent 1px), linear-gradient(rgba(251,251,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(251,251,255,0.02) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse at 50% 50%, #000 65%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 65%, transparent 95%)",
            }}
          />

          {links.map((l, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                left: l.left,
                top: l.top,
                width: l.width,
                transform: `rotate(${l.angle}deg)`,
                transformOrigin: "50% 50%",
                background: l.background,
                opacity: 0.12,
                animation: `mkFlicker ${l.dur} ease-in-out infinite both`,
                animationDelay: l.delay,
              }}
            />
          ))}

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none z-0">
            <div className="font-serif italic text-6xl sm:text-7xl text-white/20 font-extralight tracking-tight leading-none">
              n<sup className="text-4xl sm:text-5xl not-italic font-sans text-white/20">2</sup>
            </div>
            <div className="mt-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              manual hand-offs
            </div>
          </div>

          {nodes.map((node) => (
            <div
              key={node.label}
              className="absolute flex w-26 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              style={{ left: `${node.x.toFixed(2)}%`, top: `${node.y.toFixed(2)}%` }}
            >
              <div className="flex h-9.5 w-9.5 items-center justify-center rounded-full bg-[#01031c]/90 border border-white/20 shadow-md">
                <node.Icon size={18} weight="light" className="text-[#FCCA71]" />
              </div>
              <span className="text-center text-[9px] sm:text-[9.5px] font-semibold uppercase leading-tight tracking-[0.14em] text-[#AAA9BE]">
                {node.label}
              </span>
            </div>
          ))}
        </Motion.div>
      </div>

      {/* Strain: the sheet of record, fracturing */}
      <Motion.div {...reveal} className="mt-16 lg:mt-24">
        <div className="mb-8 sm:mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
            <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              What started breaking
            </span>
            <br />
            <span className="font-light text-white/90">
              as the business grew
            </span>
          </h3>
          <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#AAA9BE]">
            the sheet of record, under load
          </span>
        </div>

        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Failure ledger */}
          <div className="flex flex-col">
            {strain.map((item, i) => (
              <div
                key={item.label}
                className="grid grid-cols-[28px_20px_minmax(0,1fr)_auto] items-center gap-3.5 border-t border-white/10 py-3.5 sm:py-3.5"
              >
                <span
                  className={`text-base font-thin ${item.hot ? "text-[#FCCA71]" : "text-[#AAA9BE]"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <item.Icon
                  size={15}
                  weight="light"
                  className={item.hot ? "text-[#FCCA71]" : "text-[#AAA9BE]"}
                />
                <span className="text-sm font-medium leading-snug tracking-tight text-[#FBFBFF]">
                  {item.label}
                </span>
                <span
                  className={`text-xs font-medium tracking-[0.08em] ${
                    item.hot ? "text-[#FCCA71]" : "text-[#AAA9BE]"
                  }`}
                >
                  {item.queue}
                </span>
              </div>
            ))}
            <div className="mt-5 flex items-center gap-2.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#877BF1]"
                style={{
                  boxShadow: "0 0 8px #877BF1",
                  animation: "mkDotBlink 1.8s ease-in-out infinite",
                }}
              />
              every increase landed on a person
            </div>
          </div>

          {/* The spreadsheet, cracking with periodic vibration */}
          <Motion.div
            onClick={triggerSheetVibrate}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="relative aspect-[1.45] min-h-80 sm:min-h-90 w-full max-w-full lg:max-w-2xl mx-auto overflow-hidden rounded-lg border border-white/15 bg-[#01031c]/95 select-none touch-pan-y cursor-pointer"
            style={{
              animation: sheetVibrating
                ? "mkClickVibrate 0.5s ease-in-out"
                : "mkVibrate 5s ease-in-out infinite",
              touchAction: "pan-y",
            }}
          >
            {/* Column heads */}
            <div className="grid h-7 sm:h-8 grid-cols-[30px_repeat(12,1fr)] border-b border-white/12 bg-white/5">
              <span />
              {SHEET_COLS.map((c) => (
                <span
                  key={c}
                  className="flex items-center justify-center border-l border-white/6 text-[8.5px] sm:text-[9.5px] font-medium tracking-widest text-white/40"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Cells */}
            <div
              className="grid grid-cols-[30px_repeat(12,1fr)] auto-rows-fr"
              style={{ height: "calc(100% - 60px)" }}
            >
              {sheetCells.map((cell, i) => (
                <span
                  key={i}
                  className="flex items-center overflow-hidden border-l border-b border-white/4.5 px-1"
                  style={{
                    justifyContent: cell.head
                      ? "center"
                      : cell.broken
                        ? "flex-start"
                        : "flex-end",
                    background: cell.head
                      ? "rgba(251,251,255,0.04)"
                      : cell.broken
                        ? "rgba(135,123,241,0.12)"
                        : "transparent",
                  }}
                >
                  <span
                    className="whitespace-nowrap text-[8.5px] sm:text-[9.5px] font-medium"
                    style={{
                      color: cell.head
                        ? "rgba(251,251,255,0.35)"
                        : cell.broken
                          ? "#877BF1"
                          : cell.dim
                            ? "rgba(251,251,255,0.24)"
                            : "rgba(251,251,255,0.4)",
                      animation: cell.broken
                        ? `mkCellBlink ${cell.dur} ease-in-out infinite`
                        : "none",
                      animationDelay: cell.delay,
                    }}
                  >
                    {cell.text}
                  </span>
                </span>
              ))}
            </div>

            {/* Fractures */}
            <svg
              viewBox="0 0 100 70"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="mkCrack" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#484cff" />
                  <stop offset="55%" stopColor="#877BF1" />
                  <stop offset="100%" stopColor="#FCCA71" />
                </linearGradient>
              </defs>
              {[
                { d: "M8 6 L22 19 L18 30 L33 41 L29 52 L44 63", w: 0.2, o: 0.55, delay: "0s" },
                { d: "M96 10 L82 21 L88 32 L71 40 L76 54 L60 66", w: 0.17, o: 0.5, delay: "2.4s" },
                { d: "M44 63 L58 50 L74 46 L90 38", w: 0.15, o: 0.45, delay: "4.6s" },
                { d: "M2 44 L18 39 L30 26 L48 22 L64 12", w: 0.13, o: 0.4, delay: "6.4s" },
              ].map((p, i) => (
                <path
                  key={i}
                  d={p.d}
                  pathLength="100"
                  fill="none"
                  stroke="url(#mkCrack)"
                  strokeWidth={p.w}
                  strokeOpacity={p.o}
                  strokeDasharray="100"
                  style={{
                    strokeDashoffset: 100,
                    animation: "mkDraw 9s ease-in-out infinite",
                    animationDelay: p.delay,
                  }}
                />
              ))}
            </svg>

            {/* Audit scan */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 w-[16%]"
              style={{
                left: "-12%",
                background:
                  "linear-gradient(90deg, transparent, rgba(252,202,113,0.10), transparent)",
                animation: "mkScan 6s linear infinite",
              }}
            />

            {/* Status bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 border-t border-white/10 bg-[#01031c]/95 py-1.75 px-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#AAA9BE]">
              <span>operations_master.xlsx</span>
              <span className="flex items-center gap-2 text-[#877BF1]">
                <span
                  className="h-1.25 w-1.25 rounded-full bg-[#877BF1]"
                  style={{
                    boxShadow: "0 0 8px #877BF1",
                    animation: "mkDotBlink 1.2s ease-in-out infinite",
                  }}
                />
                18 broken references
              </span>
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </div>
  </section>
  );
};

export default MarketplaceFragmentedStack;
