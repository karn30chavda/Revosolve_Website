import React from 'react';

// ============================================
// Card Data - High Fidelity Selection
// ============================================
const cardData = [
  {
    title: "Government & Public Sector",
    description: "Digital governance platforms, citizen service automation, and workflow systems for public operations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FCCB71" strokeWidth="1.8">
        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M12 3L2 10h20L12 3z" />
      </svg>
    ),
    video: "/home_section_3/government.mp4",
    reverse: false,
  },
  {
    title: "Banking & Financial Institutions",
    description: "Technology systems for customer interaction, identity verification, and financial operations enabling automated onboarding.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FCCB71" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 15h0M2 9.5h20" />
      </svg>
    ),
    video: "/home_section_3/accounts.mp4",
    reverse: true,
  },
  {
    title: "Enterprise Organizations",
    description: "AI-driven workflow automation, decision intelligence, and operational systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FCCB71" strokeWidth="1.8">
        <path d="M3 21h18M3 7v14M19 7v14M9 7v14M15 7v14M3 3h18l-1 4H4L3 3z" />
      </svg>
    ),
    video: "/home_section_3/enterprice.mp4",
    reverse: false,
  }
];

const ProblemsWeSolve = () => {
  return (
    <section className="relative w-full bg-transparent mt-14 pt-14 pb-48 overflow-visible">
      
      <div className="relative z-30 w-[80%] mx-auto">
        
        {/* Header Section - Pixel Perfect Image Match */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 w-full gap-8">
          <div className="flex flex-col items-start min-w-fit">
            <span className="text-white/30 uppercase mb-4 block font-sans text-sm tracking-widest">[Problems We Solve]</span>
            <h2 className="prose-none">
              <span className="bg-linear-to-r from-[#897BF1] to-[#FCCB71] bg-clip-text text-transparent text-[clamp(2.5rem,5vw,3rem)] font-black block leading-none mb-2">Solving Complex</span>
              <span className="text-[#CACBDB] text-[clamp(2.5rem,5vw,3rem)] font-thin block leading-none">Institutional Challenges</span>
            </h2>
          </div>
          <div className="flex-1 pb-2">
            <p className="text-[#FBFBFF]/60 max-w-[360px] font-sans text-[14px] leading-relaxed text-left ml-0 md:ml-10">
              Modern institutions require reliable technology systems to manage large-scale operations, 
              compliance, and decision-making.
            </p>
          </div>
        </div>

        {/* The Frame: Enhanced Height (480px) masked container, 90% width context */}
        <div className="relative w-full h-[410px] rounded-lg border border-white/5 shadow-2xl overflow-hidden bg-[#0a0a1a]">
          
          {/* Scrollable Internal Content */}
          <div className="w-full h-full overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide">
            
            {cardData.map((card, idx) => (
              <div key={idx} className="w-full h-[410px] shrink-0 snap-start">
                <div className={`flex w-full h-full ${card.reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Text Side - High-Fidelity Design Sync (460px Width, Top-Aligned) */}
                  <div 
                    style={{ background: 'linear-gradient(147deg, #222468 14.75%, #191A3E 90.8%)' }}
                    className="w-[460px] flex flex-col justify-start items-start px-14 pt-[50px] pb-12 z-20 shrink-0 border-r border-white/5 font-['Blauer_Nue',sans-serif]"
                  >
                    <div className="w-[60px] h-[60px] flex items-center justify-center mb-10 scale-125 origin-left">
                      {card.icon}
                    </div>
                    <h3 
                      style={{ color: 'rgba(245, 245, 255, 0.80)' }}
                      className="self-stretch text-[28px] font-black mb-8 leading-tight tracking-tight"
                    >
                      {card.title}
                    </h3>
                    <p 
                      style={{ color: '#FBFBFF', opacity: 0.5 }}
                      className="text-[18px] font-normal leading-relaxed"
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Video Side - Flexible, No Filters (Original) */}
                  <div className="flex-1 relative overflow-hidden h-full bg-black">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default ProblemsWeSolve;
