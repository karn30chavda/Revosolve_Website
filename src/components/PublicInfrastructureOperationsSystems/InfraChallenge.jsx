import React from "react";
import { motion as Motion } from "framer-motion";
import { Table, HourglassMedium, CurrencyCircleDollar, ChartBar } from "@phosphor-icons/react";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -60px 0px" },
  transition: { duration: 0.6, delay: (i % 6) * 0.06 },
});

const constraintCards = [
  {
    icon: Table,
    t: "Fragmented Tracking",
    d: "Tenders in Excel, updates in WhatsApp, attendance elsewhere — no single view of any project.",
  },
  {
    icon: HourglassMedium,
    t: "Delayed Mobilization",
    d: "Winning a tender doesn't automatically start execution — manual setup costs weeks.",
  },
  {
    icon: CurrencyCircleDollar,
    t: "Disconnected Billing",
    d: "Milestones are verified on-site but invoices are raised separately, days later.",
  },
  {
    icon: ChartBar,
    t: "No Portfolio Visibility",
    d: "Leadership waits for monthly reports instead of seeing live project health.",
  },
];

const InfraChallenge = () => (
  <section id="challenge" className="w-full relative py-12 md:py-16 px-[5%] lg:px-[7.5%] font-sans">
    {/* Top Grid: Title Left, Both Description Paragraphs Right */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start mb-12 md:mb-14">
      {/* Left Column: Eyebrow Tag & Partial Gradient Title */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        <span className="text-white/30 text-xs font-semibold uppercase tracking-[3px] block">
          [the operational challenge]
        </span>
        <h2 className="text-[22px] sm:text-[28px] md:text-[34px] leading-snug font-bold m-0">
          <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
            Infrastructure projects don't become complex overnight.
          </span>{" "}
          <span className="text-[#CACBDB] font-light">
            Operations do.
          </span>
        </h2>
      </div>

      {/* Right Column: Both Description Paragraphs */}
      <div className="lg:col-span-6 flex flex-col gap-4 pt-0 lg:pt-8 text-[#CACBDB] text-[15.5px] leading-relaxed">
        <p>
          Every organization starts with one project, one team, one client, one site. As projects grow, every department starts working differently — updates through WhatsApp, tender tracking in Excel, attendance managed elsewhere, assets tracked manually, finance reconciling separately.
        </p>

        <p>
          The organization isn't struggling because of engineering. It's struggling because operations are disconnected — and it doesn't need another tracker, it needs one operational system.
        </p>
      </div>
    </div>

    {/* Bottom: 4 Constraint Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {constraintCards.map((c, i) => (
        <Motion.div
          key={c.t}
          {...reveal(i)}
          className="p-5 bg-[rgba(10,11,40,0.4)] border border-[rgba(135,123,241,0.22)] rounded-lg"
        >
          <c.icon size={22} className="text-[#FCCA71] block mb-3.5" />
          <h3 className="text-[15px] font-semibold text-[#E7E6FC] mb-2 font-sans">
            {c.t}
          </h3>
          <p className="text-[13px] leading-relaxed text-[#8F92B8] font-sans">
            {c.d}
          </p>
        </Motion.div>
      ))}
    </div>
  </section>
);

export default InfraChallenge;
