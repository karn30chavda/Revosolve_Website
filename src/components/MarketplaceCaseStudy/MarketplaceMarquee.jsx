import React from "react";

const ROW_A = [
  "Order management",
  "Vendor operations",
  "Voucher automation",
  "Settlements",
  "Live analytics",
];

const ROW_B = ["ERPNext", "Shopify", "Frappe", "Gupshup", "Frappe Cloud"];

const MarketplaceMarquee = () => (
  <div className="relative w-full overflow-hidden bg-[#01031c] py-6 lg:py-10 font-sans select-none">
    <style>{`
      @keyframes mkMarquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes mkMarqueeRev {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>

    {/* Row 1: Medium Sans - Moves Left */}
    <div
      className="mb-4 flex w-max"
      style={{ animation: "mkMarquee 34s linear infinite" }}
    >
      {[...ROW_A, ...ROW_A, ...ROW_A, ...ROW_A].map((w, i) => (
        <span
          key={i}
          className="flex items-center gap-8 whitespace-nowrap pr-8 text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white/60"
        >
          <span>{w}</span>
          <span className="text-[0.45em] text-[#FCCA71]">✦</span>
        </span>
      ))}
    </div>

    {/* Row 2: Elegant Serif Italic - Moves Right */}
    <div
      className="flex w-max"
      style={{ animation: "mkMarqueeRev 40s linear infinite" }}
    >
      {[...ROW_B, ...ROW_B, ...ROW_B, ...ROW_B].map((w, i) => (
        <span
          key={i}
          className="flex items-center gap-8 whitespace-nowrap pr-8 text-2xl sm:text-3xl lg:text-5xl font-serif italic text-white/45"
        >
          <span>{w}</span>
          <span className="text-[0.45em] text-[#877BF1]">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarketplaceMarquee;
