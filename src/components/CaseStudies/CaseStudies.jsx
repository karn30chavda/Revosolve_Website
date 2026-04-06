import React from "react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseData = {
    domain: "Banking",
    title: "UPI Fraud Business Rule Engine Development",
    goal: "Goal: Create a UPI fraud rule engine to detect and prevent fraudulent transactions in",
    techLogos: [
      "/home_section_5/fast_api_icon.svg",
      "/home_section_5/azure_icon.svg",
      "/home_section_5/sql_.svg",
      "/home_section_5/react_icon.svg",
    ],
    previewImage: "/home_section_5/right_photo.svg"
  };

  return (
    <section className="bg-transparent py-2 md:py-16 flex flex-col gap-10 md:gap-16 items-center justify-start relative w-full overflow-hidden transform-gpu">
      {/* Header section */}
      <div className="w-[90%] md:w-[80%] mx-auto px-4 flex flex-col gap-3 items-start justify-end relative">
        <div
          className="text-white text-left font-sans text-xs md:text-lg leading-normal md:leading-[57px] font-normal relative uppercase tracking-[0.26px]"
          style={{ opacity: 0.3 }}
        >
          <span>[ Case study ]</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[33px] items-start md:items-end justify-start self-stretch relative">
          <div className="flex flex-col">
            <h2
              className="text-left font-black text-3xl md:text-5xl leading-tight font-sans"
              style={{
                background: "linear-gradient(89.75deg, #877BF1 0%, #FCCA71 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real results, real impact
            </h2>
            <div className="text-[#cacbdb] text-left font-sans text-2xl md:text-5xl font-thin lowercase tracking-tight opacity-80">
              see how we solve problems
            </div>
          </div>

          <div className="md:pb-4 flex flex-row gap-2.5 items-center justify-start relative">
            <div className="text-[#fbfbff] text-left font-sans text-xs md:text-sm font-normal max-w-[300px] md:w-[309px] opacity-40">
              Discover how we’ve helped clients turn challenges into measurable success
            </div>
          </div>
        </div>
      </div>

      {/* Cards section - Desktop View */}
      <div className="hidden md:flex w-[80%] mx-auto px-4 flex-row gap-[22px] items-start justify-start relative">
        <div
          className="rounded-lg border-2 border-transparent p-[25px] flex flex-col gap-4 items-start justify-start flex-1 h-[441px] relative overflow-hidden"
          style={{ background: "linear-gradient(186.16deg, #CACBEB 0%, #9CA0F5 100%)" }}
        >
          <img
            src="/home_section_5/right_top_pattern.svg"
            alt=""
            loading="lazy"
            className="absolute top-0 right-0 pointer-events-none select-none"
          />

          <div className="pt-4 pl-4 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
            <div className="pb-4 flex flex-col gap-7 items-start justify-start w-[418px] relative">
              <div className="rounded-[58px] border-2 border-[rgba(91,98,191,0.37)] py-[3px] px-4 flex flex-row gap-2.5 items-center justify-center relative backdrop-blur-[2px]">
                <div className="text-[#020319] text-center font-sans text-base leading-6 font-normal tracking-[-0.31px] opacity-60">
                  Domain: {caseData.domain}
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start justify-start self-stretch relative">
                <h3 className="text-[#050737] text-left font-bold text-[28px] leading-tight self-stretch">
                  {caseData.title}
                </h3>
                <p className="text-[#050737] text-left font-sans text-base leading-[22.75px] font-normal self-stretch tracking-[-0.15px]">
                  {caseData.goal}
                </p>
              </div>

              <div className="rounded-lg flex flex-row gap-[15px] items-center justify-start relative">
                {caseData.techLogos.map((src, index) => (
                  <div key={index} className="bg-white/50 rounded-lg p-2.5 flex items-center justify-center w-auto h-auto min-w-[60px]">
                    <img className={`h-[45px] object-contain ${index === 2 ? 'mix-blend-multiply' : ''}`} src={src} alt="tech logo" loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-[7px] items-center justify-start relative cursor-pointer group" onClick={() => navigate("/coming-soon")}>
                <button className="text-[#050737] text-left font-sans text-lg font-normal cursor-pointer">Explore</button>
                <img className="w-5 h-5 transition-transform group-hover:translate-x-1" src="/home_section_4/explore_arrow.svg" alt="explore" loading="lazy" />
              </div>
            </div>

            <div className="absolute right-0 bottom-0 w-[420px] h-[240px] overflow-hidden rounded-tl-lg shadow-2xl">
              <img className="w-full h-full object-cover" src={caseData.previewImage} alt="case study preview" loading="lazy" />
              <div className="absolute inset-0 bg-[#1D1F4C]/50 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards section - Mobile View */}
      <div className="md:hidden w-[90%] mx-auto">
        <div 
          className="rounded-[10px] p-4 flex flex-col gap-[22px] items-start justify-start relative shadow-xl overflow-hidden w-full"
          style={{ background: "linear-gradient(186.41deg, rgba(202, 203, 235, 1) 4.87%, rgba(156, 160, 245, 1) 166.879%)" }}
        >
          <img
            src="/home_section_5/right_img_mobile.svg"
            className="rounded-lg self-stretch h-[185px] object-cover relative border border-black/5"
            alt=""
            loading="lazy"
          />
          
          <div className="flex flex-col gap-6 items-start justify-start self-stretch relative">
            <div className="rounded-[58px] border-2 border-[rgba(91,98,191,0.37)] py-[3px] px-4 flex flex-row items-center justify-center relative backdrop-blur-[2px]">
              <div className="text-[#020319] text-center font-normal text-[14px] leading-relaxed tracking-tight opacity-60">
                Domain: {caseData.domain}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-start self-stretch relative">
              <div className="text-[#050737] text-left font-bold text-[20px] relative self-stretch leading-tight">
                {caseData.title}
              </div>
              <div className="text-[#050737] text-left text-[14px] font-normal relative self-stretch tracking-tight opacity-65 leading-[1.3]">
                {caseData.goal}
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center justify-start flex-wrap content-center self-stretch shrink-0 relative">
              {caseData.techLogos.map((src, idx) => (
                <div key={`tech-mobile-${idx}`} className="bg-white/50 rounded-lg p-2.5 flex items-center justify-center shrink-0">
                  <img src={src} className={`h-[32px] w-auto object-contain ${idx === 2 ? 'mix-blend-multiply' : ''}`} alt="" loading="lazy" />
                </div>
              ))}
            </div>

            <div 
              onClick={() => navigate("/coming-soon")}
              className="flex flex-row gap-[7px] items-center justify-start shrink-0 relative cursor-pointer active:scale-95 transition-transform"
            >
              <div className="text-[#050737] text-left text-lg font-normal relative">Explore</div>
              <img className="shrink-0 w-5 h-5 relative object-contain" src="/home_section_4/explore_arrow.svg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={() => navigate("/coming-soon")}
          className="group rounded-lg border-2 border-[rgba(91,98,191,0.37)] py-2.5 px-[25px] md:px-[35px] flex flex-row gap-4 md:gap-[22px] items-center justify-center h-12 md:h-14 relative backdrop-blur-[2px] cursor-pointer hover:bg-white/5 transition-all active:scale-95"
        >
          <span className="text-white text-center font-medium text-sm md:text-base leading-6 tracking-[-0.31px]">
            Explore all case studies
          </span>
          <img
            className="w-3 md:w-3.5 h-auto transition-transform group-hover:translate-x-1"
            src="/home_section_5/Explore_case_study_arrow.svg"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
