import React from "react";

const CaseStudies = () => {
  return (
    <section className="bg-transparent py-[46px] px-20 flex flex-col gap-16 items-center justify-start relative w-full">
      {/* Header section */}
      <div className="flex flex-col gap-3 items-start justify-end w-full max-w-[1280px] relative">
        <div
          className="text-white text-left font-sans text-lg leading-[57px] font-normal relative uppercase tracking-[0.26px]"
          style={{ opacity: 0.3 }}
        >
          <span>[ Case study ]</span>
        </div>

        <div className="flex flex-row gap-[33px] items-end justify-start self-stretch relative">
          <div className="flex flex-col">
            <h2
              className="text-left font-black text-[38px] leading-tight"
              style={{
                background: "linear-gradient(89.75deg, #877BF1 0%, #FCCA71 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real results, real impact
            </h2>
            <div className="text-[#cacbdb] text-left font-sans text-[38px] font-normal lowercase">
              see how we solve problems
            </div>
          </div>

          <div className="pb-4 flex flex-row gap-2.5 items-center justify-center relative translate-y-[5px]">
            <div
              className="text-[#fbfbff] text-left font-sans text-sm font-normal w-[309px] opacity-50"
            >
              Discover how we’ve helped clients turn challenges into measurable success
            </div>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-row gap-[22px] items-start justify-start w-full max-w-[1280px] relative">
        {/* Card 1 */}
        <div
          className="rounded-lg border-2 border-transparent p-[25px] flex flex-col gap-4 items-start justify-start flex-1 h-[441px] relative overflow-hidden"
          style={{
            background: "linear-gradient(186.16deg, #CACBEB 0%, #9CA0F5 100%)",
          }}
        >
          {/* Background pattern */}
          <img
            src="/home_section_5/right_top_pattern.svg"
            alt=""
            className="absolute top-0 right-0 pointer-events-none select-none"
          />

          <div className="pt-4 pl-4 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
            <div className="pb-4 flex flex-col gap-7 items-start justify-start w-[418px] relative">
              {/* Domain filter */}
              <div
                className="rounded-[58px] border-2 border-[rgba(91,98,191,0.37)] py-[3px] px-4 flex flex-row gap-2.5 items-center justify-center relative backdrop-blur-[2px]"
              >
                <div
                  className="text-[#020319] text-center font-sans text-base leading-6 font-normal tracking-[-0.31px] opacity-60"
                >
                  Domain: Banking
                </div>
              </div>

              {/* Title and Goal */}
              <div className="flex flex-col gap-2 items-start justify-start self-stretch relative">
                <h3 className="text-[#050737] text-left font-bold text-[28px] leading-tight self-stretch">
                  UP Fraud Business Rule Engine Development
                </h3>
                <p
                  className="text-[#050737] text-left font-sans text-base leading-[22.75px] font-normal self-stretch tracking-[-0.15px]"
                >
                  Goal: Create a UPI fraud rule engine to detect and prevent fraudulent transactions in
                </p>
              </div>

              {/* Tech Stack */}
              <div className="rounded-lg flex flex-row gap-[15px] items-center justify-start relative">
                {[
                  "/home_section_5/fast_api_icon.svg",
                  "/home_section_5/azure_icon.svg",
                  "/home_section_5/sql_.svg",
                  "/home_section_5/react_icon.svg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="bg-white/50 rounded-lg p-2.5 flex items-center justify-center w-auto h-auto min-w-[60px]"
                  >
                    <img
                      className={`h-[45px] object-contain ${index === 2 ? 'mix-blend-multiply' : ''}`}
                      src={src}
                      alt="tech logo"
                    />
                  </div>
                ))}
              </div>

              {/* Explore Link */}
              <div className="flex flex-row gap-[7px] items-center justify-start relative cursor-pointer group">
                <span className="text-[#050737] text-left font-sans text-lg font-normal">
                  Explore
                </span>
                <img
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  src="/home_section_5/explore_arrow.svg"
                  alt="explore"
                />
              </div>
            </div>

            {/* Mockup image */}
            <div className="absolute right-0 bottom-0 w-[420px] h-[240px] overflow-hidden rounded-tl-lg shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/home_section_5/right_photo.svg"
                alt="case study preview"
              />
              <div className="absolute inset-0 bg-[#1D1F4C]/50 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <button
        className="rounded-lg border-2 border-[rgba(91,98,191,0.37)] py-2.5 px-[35px] flex flex-row gap-[22px] items-center justify-center h-14 relative backdrop-blur-[2px] cursor-pointer hover:bg-white/5 transition-colors"
      >
        <span className="text-white text-center font-medium text-base leading-6 tracking-[-0.31px]">
          Explore all case studies
        </span>
        <img
          className="w-3.5 h-auto transition-transform group-hover:translate-y-[-2px]"
          src="/home_section_5/Explore_case_study_arrow.svg"
          alt="arrow"
        />
      </button>
    </section>
  );
};

export default CaseStudies;
