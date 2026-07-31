import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "How can a growing D2C or consumer brand scale operations without adding more manual work?",
    a: "As D2C, FMCG, and CPG businesses grow, operational complexity often increases faster than revenue. Orders, inventory, warehouse operations, vendor coordination, customer communication, finance, and reporting become difficult to manage using spreadsheets and disconnected applications. A unified enterprise operating system centralises these business functions, automates repetitive workflows, and enables organisations to scale efficiently without proportionally increasing operational overhead.",
  },
  {
    q: "Can an enterprise operating system work alongside Shopify, marketplaces, and other commerce platforms?",
    a: "Yes. Modern enterprise operating systems are designed to integrate with existing commerce platforms rather than replace them. Whether your business sells through Shopify, Amazon, Walmart Marketplace, TikTok Shop, eBay, Etsy, or regional marketplaces, operational data can be consolidated into a single platform to manage inventory, fulfilment, finance, customer operations, procurement, and reporting from one place.",
  },
  {
    q: "How do omnichannel brands manage inventory, orders, and warehouses from a single platform?",
    a: "A central operating platform provides a unified view of inventory across multiple warehouses, fulfilment centres, retail locations, and sales channels. Instead of managing inventory separately for each platform, businesses can automate stock allocation, replenishment, warehouse transfers, purchase planning, and order fulfilment while maintaining real-time visibility across the entire supply chain.",
  },
  {
    q: "Can an enterprise operating system support international commerce and multi-country operations?",
    a: "Yes. Global businesses require support for multiple companies, currencies, tax structures, warehouses, and regional business processes. An enterprise operating system can centralise operations while accommodating country-specific accounting, taxation, compliance requirements, procurement, inventory management, and financial reporting, enabling organisations to expand into new markets without fragmenting their operations.",
  },
  {
    q: "How can businesses automate vendor operations, fulfilment, and financial settlements?",
    a: "Vendor operations can be streamlined through configurable workflows that automate vendor onboarding, order allocation, fulfilment tracking, service confirmations, commission calculations, settlement approvals, payment processing, and performance reporting. This reduces manual coordination, improves financial accuracy, and creates greater transparency across the vendor ecosystem.",
  },
  {
    q: "Is an enterprise operating system suitable for D2C, FMCG, CPG, wholesale, B2B, and marketplace business models?",
    a: "Yes. Organisations frequently operate multiple business models simultaneously, including direct-to-consumer commerce, wholesale distribution, retail, corporate sales, marketplaces, subscriptions, and international operations. A modern enterprise operating system connects these business functions into a single operational platform, allowing organisations to manage customers, inventory, finance, procurement, warehousing, and analytics without maintaining separate systems for each channel.",
  },
  {
    q: "Why do growing brands replace disconnected SaaS applications with an enterprise operating system?",
    a: "As businesses expand, teams often adopt specialised tools for commerce, inventory, finance, customer communication, procurement, reporting, and workflow management. While each application solves an individual problem, the overall technology landscape becomes increasingly fragmented. An enterprise operating system serves as the operational backbone, connecting business processes, data, approvals, and analytics into a single source of truth while reducing integration complexity, duplicate data, and operational inefficiencies.",
  },
  {
    q: "Why does RevoSolve build enterprise operating systems on ERPNext and the Frappe Framework?",
    a: "RevoSolve leverages ERPNext and the Frappe Framework as a flexible, open-source foundation for engineering industry-specific enterprise operating systems. Rather than deploying a standard ERP, we design operational platforms tailored to each organisation's business model, integrating commerce, finance, inventory, warehousing, procurement, customer engagement, workflows, analytics, and automation into a unified ecosystem. This approach provides organisations with full ownership of their platform, freedom from vendor lock-in, and the flexibility to evolve as business requirements change.",
  },
];

const MarketplaceFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="relative w-full bg-[#01031c] pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden z-20">
      <div className="relative z-30 w-[85%] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start">
          {/* Eyebrow */}
          <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-4">
            [faq]
          </div>

          {/* Heading Block */}
          <h2 className="text-[28px] md:text-[38px] xl:text-[42px] leading-tight tracking-tight text-left font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black block">
              Marketplace Operations
            </span>
            <span className="text-[#CACBDB] font-light xl:font-thin block mt-1">
              Answered
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {faqData.map((item, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div key={idx} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center gap-5 py-6 text-left cursor-pointer bg-transparent border-none group focus:outline-none"
                >
                  <span className="text-white/25 text-xs md:text-sm font-medium font-sans tracking-widest shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-base md:text-lg font-semibold font-sans leading-snug transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#CACBDB] group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-[18px] font-light transition-all duration-300 ${
                      isOpen
                        ? "border-[#FCCA71] text-[#FCCA71] rotate-45"
                        : "border-[#877BF1]/60 text-[#877BF1]"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#CACBDB] text-[14px] lg:text-[15px] font-normal leading-relaxed pb-7 pl-9 lg:pl-10 max-w-5xl pr-6 opacity-80">
                        {item.a}
                      </p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceFAQ;
