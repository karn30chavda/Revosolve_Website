import React from "react";

const WhyUs = () => {
  return (
    <section className="bg-transparent py-20 px-4 md:px-20 flex flex-col items-center justify-start relative w-full overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col gap-16 items-start justify-start relative">
        {/* Header section */}
        <div className="flex flex-col gap-3 items-start justify-end self-stretch shrink-0 relative">
          <div
            className="text-white text-left font-sans text-[1.125rem] font-normal relative uppercase"
            style={{ 
              opacity: 0.3,
              lineHeight: "3.5625rem",
              letterSpacing: "0.264px"
            }}
          >
            <span>[ WHY US ]</span>
          </div>

          <div className="flex items-center gap-4 relative">
            <h2 className="text-[#CACBDB] text-left font-sans text-[2.375rem] font-thin leading-normal uppercase">
              What Sets Us
            </h2>
            <div
              className="text-left font-sans text-[2.375rem] font-bold"
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

        {/* Content Box */}
        <div className="flex flex-col md:flex-row items-center justify-start self-stretch h-auto md:h-75.25 pl-5.5 gap-15.5 rounded-lg border-[0.1875rem] border-[#191B57] relative overflow-hidden bg-bg-primary/50 backdrop-blur-sm">
          {/* Left Side: List */}
          <div
            className="text-[#C4C5EC] text-left font-sans text-[1.25rem] font-normal relative w-full md:w-139.5 py-8 z-10"
            style={{ 
                lineHeight: "2.6875rem",
                letterSpacing: "-0.272px" 
            }}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Domain-driven technology solutions</li>
              <li>Experience working with government initiatives</li>
              <li>Enterprise-grade platforms</li>
              <li>AI-powered automation systems</li>
              <li>Scalable and secure architecture</li>
            </ul>
          </div>

          {/* Right Side: Quote and Pattern Wrapper */}
          <div className="rounded-tr-lg rounded-br-lg self-stretch shrink-0 w-full md:w-159.5 relative overflow-hidden flex-1 flex items-center justify-start">
            
            {/* 1. Base Gradient Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(224.72deg, rgba(15, 16, 52, 1) 0%, rgba(44, 47, 154, 1) 100%)",
              }}
            />

            {/* 2. Decorative Background Pattern */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10 opacity-[0.3]">
              <div
                className="w-157.5 h-75 max-w-none shrink-0 pointer-events-none select-none"
                style={{
                  background: "linear-gradient(to right, #050737 0%, #FFF 100%)",
                  WebkitMaskImage: "url(/home_section_6/bg_pattern.svg)",
                  maskImage: "url(/home_section_6/bg_pattern.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </div>

            {/* 3. Text content */}
            <div className="h-full w-full pr-10 pl-17.5 flex items-center justify-start relative z-20">
              <div
                className="text-[#C4C5EC] text-left font-sans text-[1.125rem] font-normal relative w-full md:max-w-108.25"
                style={{ 
                    lineHeight: "1.5rem",
                    letterSpacing: "-0.272px" 
                }}
              >
                "Their AI surveillance system has significantly improved our security operations. The real-time alerting is incredibly accurate and reliable."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
