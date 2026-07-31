import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ShoppingBag,
  ArrowsClockwise,
  Ticket,
  WhatsappLogo,
  EnvelopeSimple,
  Storefront,
  SealCheck,
  ShieldCheck,
  CurrencyCircleDollar,
  Gauge,
} from "@phosphor-icons/react";

/** Three actor lanes; nodes are placed by (column, lane). */
const LANES = [
  { label: "Customer", color: "#877BF1", top: 110, dur: "6.5s", delay: "0s" },
  { label: "System", color: "#FCCA71", top: 240, dur: "5.2s", delay: "1.4s" },
  { label: "Vendor", color: "#484cff", top: 370, dur: "7.4s", delay: "2.8s" },
];

const NODES = [
  { col: 1, lane: 1, label: "Order placed on Shopify", Icon: ShoppingBag },
  { col: 2, lane: 2, label: "Order synced to ERPNext", Icon: ArrowsClockwise },
  { col: 3, lane: 2, label: "Voucher generated", Icon: Ticket },
  { col: 3, lane: 1, label: "Buyer notified — WhatsApp + email", Icon: WhatsappLogo },
  { col: 3, lane: 3, label: "Vendor notified", Icon: EnvelopeSimple },
  { col: 4, lane: 3, label: "Vendor fulfils the order", Icon: Storefront },
  { col: 5, lane: 1, label: "Customer redeems voucher", Icon: SealCheck },
  { col: 5, lane: 2, label: "Redemption validated", Icon: ShieldCheck },
  { col: 6, lane: 3, label: "Payout calculated", Icon: CurrencyCircleDollar },
  { col: 6, lane: 2, label: "Dashboard updated live", Icon: Gauge },
];

const colX = (col) => 126 + (col - 0.5) * 159;

/** Vertical hand-off connectors where one column spans multiple lanes. */
const HOPS = (() => {
  const byCol = {};
  NODES.forEach((n) => {
    byCol[n.col] = byCol[n.col] || [];
    byCol[n.col].push(n.lane);
  });
  return Object.keys(byCol)
    .map((c) => {
      const lanes = byCol[c];
      const lo = Math.min(...lanes);
      const hi = Math.max(...lanes);
      if (lo === hi) return null;
      return {
        left: colX(Number(c)),
        top: LANES[lo - 1].top,
        height: LANES[hi - 1].top - LANES[lo - 1].top,
      };
    })
    .filter(Boolean);
})();

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceJourney = () => (
  <section
    id="journey"
    className="relative w-full overflow-hidden bg-[#01031c] pt-6 pb-4 lg:pt-8 lg:pb-6 font-sans"
  >
    <style>{`
      .scrollbar-none::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .scrollbar-none {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
      @keyframes mkFlowDot {
        0% { left: 0%; opacity: 0; }
        5% { opacity: 1; }
        95% { opacity: 1; }
        100% { left: 100%; opacity: 0; }
      }
      @keyframes mkVerticalFlow {
        0% { top: 0%; opacity: 0; }
        5% { opacity: 1; }
        95% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      @keyframes mkDotBlink {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
    `}</style>

    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="mb-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
            [the operating journey]
          </div>
          <Motion.h2
            {...reveal}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-[-0.03em] max-w-xl"
          >
            <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              One order, step by step,
            </span>
            <br />
            <span className="font-light text-white/90">
              fully automated
            </span>
          </Motion.h2>
        </div>

        <Motion.p
          {...reveal}
          className="max-w-md text-sm md:text-base leading-relaxed text-[#AAA9BE] md:pb-1"
        >
          Every hand-off below runs without a human touching a spreadsheet.
        </Motion.p>
      </div>

      {/* Full Journey Animation Container Card */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-white/10 p-4 md:p-6 lg:p-8 backdrop-blur-md shadow-2xl pointer-events-none lg:pointer-events-auto"
        style={{
          touchAction: "pan-y",
          background:
            "linear-gradient(160deg, rgba(135, 123, 241, 0.04) 0%, rgba(7, 7, 132, 0.12) 60%, rgba(1, 3, 28, 0.85) 100%)",
        }}
      >
        {/* Mobile View: Vertical Connected Flow Timeline (Zero Horizontal Scroll) */}
        <div className="flex lg:hidden flex-col gap-6 w-full pt-4 relative pl-7 sm:pl-8">
          {/* Vertical Glowing Flow Line (Spine) */}
          <div
            className="absolute left-2.75 sm:left-3.5 top-6 bottom-6 w-0.5 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #877BF1 0%, #FCCA71 50%, #484cff 100%)",
            }}
          />

          {/* Glowing Traveling Dot down the line */}
          <div className="absolute left-2 sm:left-2.5 top-6 bottom-6 w-2 overflow-hidden pointer-events-none z-10">
            <span
              className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#FCCA71]"
              style={{
                boxShadow: "0 0 10px #FCCA71",
                animation: "mkVerticalFlow 8s linear infinite",
              }}
            />
          </div>

          {[1, 2, 3, 4, 5, 6].map((stageNum) => {
            const stageNodes = NODES.filter((n) => n.col === stageNum);
            return (
              <div key={stageNum} className="relative flex flex-col gap-3">
                {/* Stage Node Marker Anchored to Vertical Line */}
                <div
                  className="absolute -left-6.75 sm:-left-7.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#FCCA71] bg-[#01031c] z-20"
                  style={{ boxShadow: "0 0 10px rgba(252,202,113,0.6)" }}
                />

                {/* Stage Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCCA71] font-mono">
                    Stage {String(stageNum).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-white/40">
                    {stageNodes.length} {stageNodes.length === 1 ? "step" : "parallel steps"}
                  </span>
                </div>

                {/* Stage Action Cards Stack */}
                <div className="flex flex-col gap-2.5">
                  {stageNodes.map((node) => {
                    const laneInfo = LANES[node.lane - 1];
                    const NodeIcon = node.Icon;
                    return (
                      <div
                        key={node.label}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#01031c]/90 p-3.5 backdrop-blur-md shadow-lg"
                        style={{
                          borderColor:
                            node.lane === 2
                              ? "rgba(252,202,113,0.35)"
                              : "rgba(251,251,255,0.14)",
                        }}
                      >
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15"
                          style={{ background: `${laneInfo.color}15` }}
                        >
                          <NodeIcon size={18} weight="light" style={{ color: laneInfo.color }} />
                        </div>
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#FBFBFF] leading-snug">
                            {node.label}
                          </span>
                          <span
                            className="text-[9px] font-semibold uppercase tracking-wider w-fit px-2 py-0.5 rounded-full border border-white/10"
                            style={{ color: laneInfo.color, background: `${laneInfo.color}12` }}
                          >
                            {laneInfo.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Multi-lane Journey Matrix Track */}
        <div className="hidden lg:block overflow-x-auto pb-3 scrollbar-none pt-4">
          <div className="relative h-105 min-w-270">
            {/* Stage heads */}
            {[1, 2, 3, 4, 5, 6].map((c) => (
              <div
                key={c}
                className="absolute top-0 -translate-x-1/2 whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.18em] text-white/35"
                style={{ left: `${colX(c)}px` }}
              >
                stage {String(c).padStart(2, "0")}
              </div>
            ))}

            {/* Lanes */}
            {LANES.map((ln) => (
              <React.Fragment key={ln.label}>
                <div
                  className="absolute left-0 w-29.5 -translate-y-1/2"
                  style={{ top: `${ln.top}px` }}
                >
                  <div
                    className="text-[9.5px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: ln.color }}
                  >
                    {ln.label}
                  </div>
                  <div
                    className="mt-1.5 h-px w-7"
                    style={{ background: ln.color }}
                  />
                </div>

                {/* Lane line + flowing dots */}
                <div
                  className="absolute left-31.5 right-0 h-4 -translate-y-1/2 overflow-hidden pointer-events-none"
                  style={{ top: `${ln.top}px` }}
                >
                  <div
                    className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                    style={{
                      background: `repeating-linear-gradient(90deg, ${ln.color}50 0 5px, transparent 5px 11px)`,
                    }}
                  />
                  {[0, 6].map((delay, idx) => (
                    <span
                      key={idx}
                      className="absolute top-1/2 -translate-y-1/2 h-1.25 w-1.25 -translate-x-1/2 rounded-full"
                      style={{
                        background: ln.color,
                        boxShadow: `0 0 8px ${ln.color}`,
                        animation: "mkFlowDot 12s linear infinite",
                        animationDelay: `${delay + parseFloat(ln.delay)}s`,
                      }}
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}

            {/* Lane hand-offs */}
            {HOPS.map((h, i) => (
              <div
                key={i}
                className="absolute w-px"
                style={{
                  left: `${h.left}px`,
                  top: `${h.top}px`,
                  height: `${h.height}px`,
                  background:
                    "repeating-linear-gradient(180deg, rgba(135,123,241,0.5) 0 4px, transparent 4px 9px)",
                }}
              />
            ))}

            {/* Nodes */}
            {NODES.map((node, i) => {
              const ln = LANES[node.lane - 1];
              return (
                <div
                  key={node.label}
                  className="absolute w-38 rounded-lg border bg-[#01031c]/90 px-3.5 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FCCA71]/40"
                  style={{
                    left: `${colX(node.col)}px`,
                    top: `${ln.top}px`,
                    marginLeft: -76,
                    marginTop: -33,
                    borderColor:
                      node.lane === 2 ? "rgba(252,202,113,0.35)" : "rgba(251,251,255,0.14)",
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <node.Icon size={17} weight="light" style={{ color: ln.color }} />
                    <span className="text-[9px] font-mono font-medium tracking-wider text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="text-xs font-semibold leading-snug tracking-tight text-[#FBFBFF]">
                    {node.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE]">
          <span className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#FCCA71]"
              style={{
                boxShadow: "0 0 8px #FCCA71",
                animation: "mkDotBlink 2s ease-in-out infinite",
              }}
            />
            automated hand-off
          </span>
          <span>manual steps: 00</span>
          <span>spreadsheets touched: 00</span>
        </div>
      </div>
    </div>
  </section>
);

export default MarketplaceJourney;
