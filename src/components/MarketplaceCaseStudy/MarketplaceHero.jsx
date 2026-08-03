import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Gift,
  Storefront,
  Cube,
  ArrowsLeftRight,
  ShoppingBag,
  Ticket,
  CurrencyCircleDollar,
  WhatsappLogo,
  ArrowsClockwise,
  Gauge,
} from "@phosphor-icons/react";

const meta = [
  { value: "Experiences & Gifting Marketplace", Icon: Gift },
  { value: "Marketplace / D2C Commerce", Icon: Storefront },
  { value: "ERPNext + Shopify", Icon: Cube },
  { value: "Manual → Intelligent Operations", Icon: ArrowsLeftRight },
];

const fragmented = [
  { label: "Excel", left: "4%", top: "16%", rotate: -5 },
  { label: "Vendor sheets", left: "3%", top: "31%", rotate: 4 },
  { label: "Cheerio", left: "7%", top: "46%", rotate: -3 },
  { label: "Pabbly", left: "4%", top: "60%", rotate: 5 },
  { label: "Manual payout", left: "3%", top: "75%", rotate: -4 },
];

const payloads = [
  { top: "22%", dur: "5.2s", delay: "0s", Icon: ShoppingBag },
  { top: "38%", dur: "4.4s", delay: "1.3s", Icon: Ticket },
  { top: "62%", dur: "5.8s", delay: "2.6s", Icon: CurrencyCircleDollar },
  { top: "78%", dur: "4.8s", delay: "3.8s", Icon: WhatsappLogo },
];

const unified = [
  { label: "Orders synced", Icon: ArrowsClockwise },
  { label: "Vouchers issued", Icon: Ticket },
  { label: "Payouts settled", Icon: CurrencyCircleDollar },
  { label: "Dashboards live", Icon: Gauge },
];

const MarketplaceHero = () => {
  const navigate = useNavigate();

  const goConnect = () => navigate("/connect");

  const handleScrollDown = () => {
    const target = document.getElementById("solutions-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] min-[1290px]:h-screen flex flex-col items-center justify-center pt-24 min-[1290px]:pt-10 z-10 bg-[#01031c] font-sans overflow-hidden">
      <style>{`
        @keyframes mkFloatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes mkCarry {
          0% { left: 40%; opacity: 0; }
          15% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 88%; opacity: 0; }
        }
        @keyframes mkGateSweep {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: drop-shadow(0 0 10px #877BF1); }
        }
        @keyframes mkRippleInside {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes mkDotBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Main Content Layout Container */}
      <div className="relative z-10 w-[88%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
        {/* Left Column: Copy & Actions */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-140 xl:max-w-160 flex-1"
        >
          {/* Heading */}
          <h1 className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1 w-full">
            <span className="text-white text-[26px] sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[46px] font-black font-sans leading-tight lg:leading-[1.15] tracking-tight">
              Manual operations to an
            </span>
            <span className="text-[26px] sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[46px] font-black font-sans leading-tight lg:leading-[1.15] tracking-tight bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              operating system
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-[#CACBDB] opacity-80 text-sm sm:text-base xl:text-[18px] font-light font-sans leading-relaxed text-center lg:text-left max-w-135">
            An experiences &amp; gifting marketplace, re-engineered on ERPNext.
          </p>

          {/* CTA Buttons — Desktop View */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-3 min-[1290px]:gap-4 items-center justify-start shrink-0 relative w-full mt-6 mb-2">
            {/* Primary Button */}
            <button
              onClick={() => goConnect("See the operating journey")}
              className="btn-premium-glow w-fit px-6 sm:px-8 h-9 sm:h-10 min-[1290px]:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] min-[1290px]:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                See the operating journey
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/MarketplaceCaseStudy/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => goConnect("Could this be your business?")}
              className="w-fit px-6 sm:px-8 h-9 sm:h-10 min-[1290px]:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] min-[1290px]:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Could this be your business?
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/MarketplaceCaseStudy/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>

          {/* Meta Tags — Desktop View */}
          <div className="hidden lg:flex mt-8 pt-5 border-t border-white/10 w-full flex-wrap items-center justify-start gap-x-3.5 gap-y-2.5">
            {meta.map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-2 bg-white/4 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xs"
              >
                <item.Icon
                  size={14}
                  weight="light"
                  className="text-[#FCCA71] shrink-0"
                />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[#AAA9BE]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Right Column: Fragmented → Unified Architecture Diagram */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative h-90 sm:h-95 lg:h-100 w-full max-w-140 overflow-hidden rounded-2xl border border-white/12 backdrop-blur-lg shadow-2xl pointer-events-none lg:pointer-events-auto"
          style={{
            touchAction: "pan-y",
            background:
              "linear-gradient(145deg, rgba(72, 76, 255, 0.12), rgba(1, 3, 28, 0.75) 50%, rgba(252, 202, 113, 0.08))",
            boxShadow: "0 0 40px rgba(135, 123, 241, 0.12)",
          }}
        >
          {/* Section Headers */}
          <div className="absolute top-5 left-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 font-sans">
            fragmented
          </div>
          <div className="absolute top-5 right-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FCCA71] font-sans">
            unified
          </div>

          {/* Drifting tool chips (Left side) */}
          {fragmented.map((c, i) => (
            <div
              key={c.label}
              className="absolute whitespace-nowrap rounded-lg border border-white/15 bg-white/5 py-1.5 px-3 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-white/60 backdrop-blur-md shadow-md"
              style={{
                left: c.left,
                top: c.top,
                transform: `rotate(${c.rotate}deg)`,
                animation: `mkFloatY ${(5.4 + i * 0.7).toFixed(1)}s ease-in-out infinite`,
                animationDelay: `${(i * 0.45).toFixed(2)}s`,
              }}
            >
              {c.label}
            </div>
          ))}

          {/* Payload capsules crossing to the central vertical line */}
          {payloads.map((item, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                top: item.top,
                background:
                  "linear-gradient(90deg, transparent, rgba(251,251,255,0.08) 30%, transparent)",
              }}
            >
              <span
                className="absolute -top-3.5 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#FCCA71]/40 bg-[#01031c]/95 shadow-lg z-20"
                style={{
                  opacity: 0,
                  boxShadow: "0 0 16px rgba(252,202,113,0.3)",
                  animation: `mkCarry ${item.dur} linear infinite backwards`,
                  animationDelay: item.delay,
                }}
              >
                <item.Icon
                  size={14}
                  weight="light"
                  className="text-[#FCCA71]"
                />
              </span>
            </div>
          ))}

          {/* Central Gate Line */}
          <div
            className="absolute top-[12%] bottom-[12%] w-px -translate-x-1/2 pointer-events-none"
            style={{
              left: "40%",
              background:
                "linear-gradient(180deg, transparent, #877BF1, #FCCA71, transparent)",
              animation: "mkGateSweep 3.6s ease-in-out infinite",
            }}
          />

          {/* ERPNext Central Node with perfectly centered Pulse Rings */}
          <div
            className="absolute top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FCCA71]/50 z-20"
            style={{
              left: "40%",
              background:
                "radial-gradient(circle at 40% 30%, rgba(252,202,113,0.35), rgba(1,3,28,0.95) 75%)",
              boxShadow: "0 0 30px rgba(252,202,113,0.25)",
            }}
          >
            <Cube
              size={26}
              weight="light"
              className="text-[#FCCA71] relative z-20"
            />

            {/* Anchored Pulse Rings expanding from exact center */}
            {[
              { border: "rgba(252,202,113,0.6)", delay: "0s" },
              { border: "rgba(135,123,241,0.5)", delay: "1.5s" },
            ].map((r, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full pointer-events-none z-10"
                style={{
                  border: `1px solid ${r.border}`,
                  animation: "mkRippleInside 3s ease-out infinite",
                  animationDelay: r.delay,
                }}
              />
            ))}
          </div>

          {/* Unified Output Cards (Right side) */}
          <div className="absolute right-4 sm:right-6 top-1/2 flex w-[44%] max-w-52.5 -translate-y-1/2 flex-col gap-2.5 z-30">
            {unified.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-[#FCCA71]/30 bg-[#FCCA71]/10 py-2.5 px-3.5 backdrop-blur-md shadow-md"
                style={{
                  animation: `mkFloatY ${(6).toFixed(1)}s ease-in-out infinite`,
                }}
              >
                <item.Icon
                  size={16}
                  weight="light"
                  className="shrink-0 text-[#FCCA71]"
                />
                <span className="whitespace-nowrap text-[12px] sm:text-[13px] font-semibold tracking-tight text-[#FBFBFF]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Live Indicator */}
          <div className="absolute bottom-5 left-6 flex items-center gap-2.5 z-20">
            <span
              className="h-2 w-2 rounded-full bg-[#FCCA71]"
              style={{
                boxShadow: "0 0 10px #FCCA71",
                animation: "mkDotBlink 2s ease-in-out infinite",
              }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#AAA9BE] font-sans">
              one order · zero spreadsheets
            </span>
          </div>
        </Motion.div>

        {/* Mobile View Only: CTA Buttons & Meta Tags placed after animation */}
        <div className="flex lg:hidden flex-col items-center w-full gap-5 mt-2 z-20">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full">
            <button
              onClick={() => goConnect("See the operating journey")}
              className="btn-premium-glow w-65 sm:w-auto px-6 h-10 sm:h-11 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer border-none group transition-all duration-300 active:scale-95 text-[#070784]"
            >
              <span className="relative z-10 text-center text-[13px] sm:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap">
                See the operating journey
              </span>
              <img
                className="relative z-10 shrink-0 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                src="/MarketplaceCaseStudy/hero_btn_icon_1.svg"
                alt=""
              />
            </button>

            <button
              onClick={() => goConnect("Could this be your business?")}
              className="w-65 sm:w-auto px-6 h-10 sm:h-11 rounded-md border-2 border-white/20 flex items-center justify-center gap-3 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all active:scale-95 text-white bg-transparent group"
            >
              <span className="text-white text-center text-[13px] sm:text-[14px] font-semibold tracking-tight whitespace-nowrap">
                Could this be your business?
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform"
                src="/MarketplaceCaseStudy/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>

          {/* Meta Tags */}
          <div className="pt-4 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {meta.map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-2 bg-white/4 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xs"
              >
                <item.Icon
                  size={14}
                  weight="light"
                  className="text-[#FCCA71] shrink-0"
                />
                <span className="text-[10px] font-medium tracking-wide uppercase text-[#AAA9BE]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="hidden sm:flex absolute bottom-8 left-0 right-0 z-30 flex-col items-center justify-center">
        <img
          onClick={handleScrollDown}
          src="/MarketplaceCaseStudy/hero_arrow_icon.svg"
          className="w-6.5 h-5.5 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          alt="Scroll down"
        />
      </div>
    </section>
  );
};

export default MarketplaceHero;
