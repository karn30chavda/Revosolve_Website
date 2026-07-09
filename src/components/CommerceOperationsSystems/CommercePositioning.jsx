import React from "react";

const positioningList = [
  "One-time implementation",
  "Long-term operational control",
  "Reduced tool dependency",
];

const CommercePositioning = () => {
  return (
    <section className="relative w-full bg-[#01031c] pt-2 pb-8 lg:pt-4 lg:pb-12 overflow-hidden font-sans">
      {/* Decorative Blur Background Spot */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#877BF1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FCCA71]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-30 w-[85%] mx-auto flex flex-col gap-10 md:gap-12 items-start justify-start">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start justify-start pb-6">
          {/* Section Tag */}
          <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
            [what]
          </div>

          {/* Heading Block */}
          <div className="flex flex-col items-start justify-start font-sans">
            <h2 className="text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
              Beyond SaaS. Built as Your System.
            </h2>
            <h3 className="text-[#CACBDB] text-xl md:text-2xl xl:text-[30px] font-light xl:font-thin leading-normal mt-1">
              Positioning Shift
            </h3>
          </div>
        </div>

        {/* Content Box - Desktop View */}
        <div className="hidden md:flex flex-row items-stretch justify-start self-stretch min-h-80 rounded-lg border-[0.1875rem] border-[#191B57] relative overflow-hidden bg-[#01031c]/50 backdrop-blur-sm w-full">
          {/* Left Side: Points List */}
          <div className="text-[#C4C5EC] text-left text-[1.25rem] font-normal relative w-[45%] p-16 lg:p-20 z-10 leading-10 tracking-[-0.272px] flex items-center">
            <ul className="list-disc pl-5 space-y-4">
              {positioningList.map((item, idx) => (
                <li key={idx} className="pl-2 relative select-none">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Description paragraph & pattern */}
          <div className="self-stretch shrink-0 w-[55%] relative overflow-hidden flex items-center justify-start">
            {/* Dark indigo gradient background */}
            <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(224.72deg, rgba(15, 16, 52, 1) 0%, rgba(44, 47, 154, 1) 100%)" }} />
            
            {/* Pattern Mask Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10 opacity-[0.45]">
              <div
                className="w-full h-full shrink-0 pointer-events-none select-none"
                style={{
                  background: "linear-gradient(to right, #050737 0%, #FFF 100%)",
                  WebkitMaskImage: "url(/home_section_6/bg_pattern.svg)",
                  maskImage: "url(/home_section_6/bg_pattern.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              />
            </div>

            {/* Paragraph Text content */}
            <div className="h-full w-full py-12 px-16 lg:px-20 flex items-center justify-start relative z-20">
              <div className="text-[#C4C5EC] text-left text-[1.125rem] font-normal relative w-full leading-relaxed tracking-[-0.272px] max-w-[500px]">
                Most commerce businesses rely on multiple SaaS tools stitched together. RevoSolve replaces this fragmented stack with a single, purpose-built system aligned with how your business operates.
              </div>
            </div>
          </div>
        </div>

        {/* Content Box - Mobile View */}
        <div className="md:hidden flex flex-col gap-0 items-start justify-start self-stretch relative w-full border-[3px] border-[#191b57] rounded-lg overflow-hidden">
          {/* Top Block: Points List */}
          <div className="p-8 flex flex-col items-start justify-center self-stretch min-h-[200px] relative bg-[#01031c]/60 backdrop-blur-sm border-b border-[#191b57]">
            <ul className="text-[#c4c5ec] text-left text-[15px] leading-relaxed font-normal list-disc pl-5 space-y-3 tracking-tight">
              {positioningList.map((item, idx) => (
                <li key={idx} className="pl-1 drop-shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Block: Paragraph Description */}
          <div 
            className="p-8 flex flex-row items-center justify-center self-stretch min-h-[220px] relative overflow-hidden"
            style={{ background: "linear-gradient(224.72deg, rgba(15, 16, 52, 1) 0%, rgba(44, 47, 154, 1) 100%)" }}
          >
            {/* Background Pattern for Mobile */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url(/home_section_6/bg_pattern.svg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mixBlendMode: "overlay"
                }}
              />
            </div>
            
            <div className="text-[#c4c5ec] text-left text-[15px] leading-relaxed font-normal relative flex-1 tracking-tight z-10 opacity-90">
              Most commerce businesses rely on multiple SaaS tools stitched together. RevoSolve replaces this fragmented stack with a single, purpose-built system aligned with how your business operates.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommercePositioning;
