import React from "react";

const WhyUs = () => {
  const whyUsList = [
    "Domain-driven technology solutions",
    "Experience working with government initiatives",
    "Enterprise-grade platforms",
    "AI-powered automation systems",
    "Scalable and secure architecture",
  ];

  const testimonial = "Their AI surveillance system has significantly improved our security operations. The real-time alerting is incredibly accurate and reliable.";

  return (
    <section className="bg-transparent py-10 md:py-10 flex flex-col items-center justify-start relative w-full overflow-hidden transform-gpu antialiased font-sans">
      <div className="w-[85%] md:w-[85%] mx-auto flex flex-col gap-10 md:gap-16 items-start justify-start relative">
        {/* Header section */}
        <div className="flex flex-col items-start justify-end self-stretch shrink-0 relative">
          <div
            className="text-white text-left text-[10px] md:text-[1.125rem] font-normal relative uppercase opacity-30 tracking-[0.264px] mb-2 md:mb-0"
          >
            <span>[ WHY US ]</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4 relative">
            <h2 className="text-[#CACBDB] text-left font-thin text-[28px] md:text-[2.375rem] leading-tight uppercase">
              What Sets Us
            </h2>
            <div
              className="text-left font-bold text-[28px] md:text-[2.375rem] mt-[-4px] md:mt-0"
              style={{
                background: "linear-gradient(89.75deg, rgba(135, 123, 241, 1) 0%, rgba(252, 202, 113, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Apart
            </div>
          </div>
        </div>

        {/* Content Box - Desktop View */}
        <div className="hidden md:flex flex-row items-stretch justify-start self-stretch min-h-80 rounded-lg border-[0.1875rem] border-[#191B57] relative overflow-hidden bg-bg-primary/50 backdrop-blur-sm">
          {/* Left Side: List */}
          <div className="text-[#C4C5EC] text-left text-[1.25rem] font-normal relative w-[45%] p-20 z-10 leading-10.75 tracking-[-0.272px]">
            <ul className="list-disc pl-5 space-y-1">
              {whyUsList.map((item, i) => <li key={i} className="pl-1 relative">{item}</li>)}
            </ul>
          </div>

          {/* Right Side: Quote and Pattern Wrapper */}
          <div className="self-stretch shrink-0 w-[55%] relative overflow-hidden flex items-center justify-start">
            <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(224.72deg, rgba(15, 16, 52, 1) 0%, rgba(44, 47, 154, 1) 100%)" }} />
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

            <div className="h-full w-full py-12 px-20 flex items-center justify-start relative z-20">
              <div className="text-[#C4C5EC] text-left text-[1.125rem] font-normal relative w-full leading-6 tracking-[-0.272px]">
                "{testimonial}"
              </div>
            </div>
          </div>
        </div>

        {/* Content Box - Mobile View */}
        <div className="md:hidden flex flex-col gap-0 items-start justify-start self-stretch relative w-full mb-8">
          {/* Top Block: List */}
          <div className="rounded-t-lg border-[3px] border-[#191b57] p-8 flex flex-col items-start justify-center self-stretch h-[301px] relative bg-[#01031c]/40 backdrop-blur-sm">
            <ul className="text-[#c4c5ec] text-left text-[14px] leading-relaxed font-normal list-disc pl-5 space-y-3 tracking-tight">
              {whyUsList.map((item, i) => <li key={i} className="pl-1 drop-shadow-sm">{item}</li>)}
            </ul>
          </div>

          {/* Bottom Block: Testimonial */}
          <div 
            className="rounded-b-lg p-10 flex flex-row items-center justify-center self-stretch h-[301px] relative overflow-hidden"
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
            
            <div className="text-[#c4c5ec] text-center text-[14px] leading-relaxed font-normal relative flex-1 tracking-tight z-10 px-4 italic opacity-90">
               "{testimonial}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
