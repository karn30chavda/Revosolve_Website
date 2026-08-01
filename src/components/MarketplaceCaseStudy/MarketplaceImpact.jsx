import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowsClockwise,
  ChatCircleText,
  Handshake,
  CreditCard,
  Gauge,
  ChartLineUp,
  MagnifyingGlass,
  Cloud,
} from "@phosphor-icons/react";

const outcomes = [
  { label: "Orders automatically synchronised from Shopify", Icon: ArrowsClockwise },
  { label: "Customer communication fully automated", Icon: ChatCircleText },
  { label: "Vendor fulfilment streamlined", Icon: Handshake },
  { label: "Automated payout calculations", Icon: CreditCard },
  { label: "Live operational dashboards", Icon: Gauge },
  { label: "Scalable operating model", Icon: ChartLineUp },
  { label: "Complete audit trail", Icon: MagnifyingGlass },
  { label: "Cloud-native deployment", Icon: Cloud },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceImpact = () => (
  <section className="relative w-full overflow-hidden bg-[#01031c] py-16 lg:py-24 font-sans touch-pan-y" style={{ touchAction: "pan-y" }}>
    <div className="relative z-10 w-[88%] max-w-7xl mx-auto">
      <div className="mb-2 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
        [operational impact]
      </div>

      <Motion.h2
        {...reveal}
        className="mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-[-0.03em] max-w-3xl"
      >
        <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
          Buisness Value 
        </span>{" "}
        <span className="font-light text-white/90">
          Delivered
        </span>
      </Motion.h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome, i) => {
          const CardIcon = outcome.Icon;
          return (
            <Motion.div
              key={outcome.label}
              {...reveal}
              transition={{
                duration: 0.76,
                ease: [0.22, 1, 0.36, 1],
                delay: Math.min(i * 0.07, 0.48),
              }}
              className="group relative overflow-hidden rounded-lg border border-white/10 px-6 pb-7 pt-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FCCA71]/40"
              style={{
                background:
                  "linear-gradient(160deg, rgba(251,251,255,0.055), rgba(1,3,28,0.35))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(252,202,113,0.10), transparent 58%)",
                }}
              />
              <div className="relative mb-6 flex items-center justify-between">
                <CardIcon size={26} weight="light" className="text-[#FCCA71]" />
              </div>
              <p className="relative text-base font-semibold leading-snug tracking-tight text-[#FBFBFF]">
                {outcome.label}
              </p>
            </Motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MarketplaceImpact;
