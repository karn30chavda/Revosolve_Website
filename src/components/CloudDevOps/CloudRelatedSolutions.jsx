import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

const relatedSolutions = [
  { name: "Commerce Operations Systems", path: "/solutions/commerce-operations-systems" },
  { name: "Document Intelligence Systems", path: "/solutions/document-intelligence-systems" },
  { name: "Open Source & ERP Systems", path: "/services/open-source-erp-systems" },
  { name: "AI Intelligent Systems", path: "/services/ai-intelligent-systems" },
];

const CloudRelatedSolutions = () => {
  return (
    <section className="relative w-full bg-[#01031c]/50 py-16 overflow-hidden z-20 border-t border-white/10">
      <div className="relative z-10 w-[85%] mx-auto flex flex-col gap-8 font-sans">
        
        {/* Label */}
        <div className="text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-[3px] mb-2 font-mono">
          // Related Solutions
        </div>

        {/* Solutions List */}
        <div className="flex flex-col w-full">
          {relatedSolutions.map((sol, idx) => (
            <Link
              key={idx}
              to={sol.path}
              className="flex justify-between items-center py-5 border-t border-white/10 group transition-all duration-300 hover:pl-2"
            >
              <span className="text-[#CACBDB] text-base md:text-[17px] font-medium group-hover:text-white transition-colors duration-300">
                {sol.name}
              </span>
              
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#877BF1] group-hover:bg-[#877BF1]/10 text-white/50 group-hover:text-[#877BF1] transition-all duration-300">
                <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </Link>
          ))}
          {/* Bottom border to close the list */}
          <div className="border-t border-white/10 w-full" />
        </div>

      </div>
    </section>
  );
};

export default CloudRelatedSolutions;
