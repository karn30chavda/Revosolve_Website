import React from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Table,
  UsersThree,
  Calculator,
  Plugs,
  Package,
  TrendUp,
} from "@phosphor-icons/react";

const checks = [
  { text: "Uses Shopify or another commerce platform", Icon: ShoppingBag },
  { text: "Tracks operations in Excel", Icon: Table },
  { text: "Manages vendors manually", Icon: UsersThree },
  { text: "Calculates settlements manually", Icon: Calculator },
  { text: "Uses multiple disconnected SaaS tools", Icon: Plugs },
  { text: "Lacks visibility into order fulfilment", Icon: Package },
  { text: "Is scaling faster than its operational processes", Icon: TrendUp },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
};

const MarketplaceCTA = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/connect");

  return (
    <section
      id="fit"
      className="relative z-20 w-full overflow-hidden bg-[#01031c] pt-2 pb-12 lg:pb-16 font-sans"
    >
      <div className="relative z-30 w-[88%] max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <div className="mb-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] text-white/30">
            [could this be your business]
          </div>

          <Motion.h2
            {...reveal}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-[-0.03em] max-w-2xl"
          >
            <span className="font-extrabold bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Is your business facing the,
            </span>{" "}
            <br />
            <span className="font-light text-white/90">
              same operational challenges?
            </span>
          </Motion.h2>

          <Motion.p
            {...reveal}
            className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[#AAA9BE]"
          >
            This solution is particularly relevant if your organisation:
          </Motion.p>
        </div>

        {/* Relevance Checklist with Borders between every item on mobile */}
        <div className="flex flex-col border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((item) => {
              const ItemIcon = item.Icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3.5 px-2 py-3.5 border-b border-white/10 sm:border-b-0"
                >
                  <ItemIcon size={18} weight="light" className="shrink-0 text-[#FCCA71]" />
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-[#FBFBFF]">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View — Site Standard Gradient CTA Panel */}
        <Motion.div
          {...reveal}
          className="hidden md:flex w-full rounded-lg py-10 px-8 flex-col gap-6 items-center justify-end relative overflow-hidden drop-shadow-2xl"
          style={{
            background: "linear-gradient(290deg, #20CEFF -65.3%, #070784 64.5%), #151618",
          }}
        >
          {/* Background Pattern */}
          <img
            className="absolute pointer-events-none select-none opacity-[0.9] object-contain overflow-visible mix-blend-screen"
            style={{
              width: "40.29156rem",
              height: "19.6875rem",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src="/MarketplaceCaseStudy/cta_bg_pattern.svg"
            alt=""
            loading="lazy"
            decoding="async"
          />

          {/* Content Group */}
          <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative z-10 text-center max-w-4xl">
            <h2 className="text-white text-center font-sans text-[2.25rem] md:text-[2.5rem] font-black relative leading-tight tracking-[0.0165rem]">
              Ready to run your operations on{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black inline-block">
                one System?
              </span>
            </h2>

            <p className="text-[#CACBEB] text-center font-sans text-[1.15rem] leading-relaxed font-normal relative mt-2 max-w-3xl tracking-[-0.017rem]">
              If that sounds familiar, you&apos;re facing the same operational challenges this
              marketplace faced before modernising its operating model.
            </p>
          </div>

          {/* Button Actions */}
          <div className="flex flex-wrap gap-4 items-center justify-center z-10 relative mt-4">
            <button
              onClick={() => handleNavigate("Talk to a Solutions Architect")}
              className="btn-premium-glow rounded-sm py-4 px-8 flex flex-row gap-2.5 items-center justify-start shrink-0 relative group transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span className="text-[#070784] text-center font-sans text-[1rem] leading-6 font-semibold relative tracking-[-0.0195rem]">
                Talk to a Solutions Architect
              </span>
              <img
                src="/MarketplaceCaseStudy/cta_conversation_arrow.svg"
                className="shrink-0 w-5 h-5 relative overflow-visible group-hover:translate-x-1 transition-transform duration-300"
                alt=""
              />
            </button>

            <button
              onClick={() => handleNavigate("Book a Discovery Workshop")}
              className="border border-white/20 hover:border-white/40 text-white font-semibold rounded-sm py-4 px-8 flex flex-row gap-3 items-center justify-center transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
            >
              <span className="font-sans text-[1rem] leading-6 tracking-tight">
                Book a Discovery Workshop
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                src="/MarketplaceCaseStudy/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>

        {/* Mobile View — Site Standard Gradient CTA Panel */}
        <Motion.div
          {...reveal}
          className="md:hidden w-full rounded-lg py-10 px-6 flex flex-col gap-6 items-center justify-end relative overflow-hidden shadow-2xl"
          style={{
            background:
              "linear-gradient(-70.26deg, rgba(32, 206, 255, 1) 0%, rgba(7, 7, 132, 1) 100%), linear-gradient(to left, #151618, #151618)",
          }}
        >
          <img
            className="shrink-0 w-[230%] h-78.75 object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none opacity-90 mix-blend-screen"
            src="/MarketplaceCaseStudy/cta_bg_pattern.svg"
            alt=""
            loading="lazy"
            decoding="async"
          />

          <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative z-10 text-center pt-4">
            <h2 className="text-[#ffffff] text-center font-sans text-[26px] font-bold relative self-stretch leading-tight tracking-[0.26px]">
              Ready to run your operations on{" "}
              <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-bold inline-block">
                one unified control plane?
              </span>
            </h2>
            <p className="text-[#cacbeb] text-center font-sans text-[14px] font-normal relative self-stretch opacity-90 leading-relaxed tracking-[-0.27px]">
              If that sounds familiar, you&apos;re facing the same operational challenges this
              marketplace faced before modernising its operating model.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full z-10 relative">
            <button
              onClick={() => handleNavigate("Talk to a Solutions Architect")}
              className="btn-premium-glow rounded py-4 px-6 flex flex-row gap-2.5 items-center justify-center w-full transition-all duration-300 cursor-pointer active:scale-95 group"
            >
              <span className="text-[#070784] text-center font-sans text-base leading-6 font-semibold relative tracking-[-0.31px]">
                Talk to a Solutions Architect
              </span>
              <img
                className="shrink-0 w-5 h-5 relative overflow-visible transition-transform group-hover:translate-x-1"
                src="/MarketplaceCaseStudy/cta_conversation_arrow.svg"
                alt="arrow"
              />
            </button>

            <button
              onClick={() => handleNavigate("Book a Discovery Workshop")}
              className="border border-white/20 text-white font-semibold rounded py-4 px-6 flex flex-row gap-3 items-center justify-center w-full transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xs active:scale-95 group"
            >
              <span className="font-sans text-base leading-6">
                Book a Discovery Workshop
              </span>
              <img
                className="shrink-0 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                src="/MarketplaceCaseStudy/hero_btn_icon_2.svg"
                alt=""
              />
            </button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default MarketplaceCTA;
