import React from "react";

const Openings = () => {
  const jobs = [
    {
      title: "AI Solution Consultant",
      department: "Data & AI Consulting",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
    {
      title: "Data Scientist",
      department: "Analytics & AI",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
    {
      title: "Development Engineer",
      department: "Engineering",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
    {
      title: "Python Developer",
      department: "Engineering",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
    {
      title: "Senior Solution Architect",
      department: "Data & AI Consulting",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
    {
      title: "AI Solution Consultant",
      department: "Data & AI Consulting",
      tags: ["Full Time", "On-site", "2+ Years"],
    },
  ];

  return (
    <section id="openings-section" className="relative w-full bg-[#01031c] pt-12 pb-8 scroll-mt-24">
      {/* Light Blue/Indigo Glow behind heading content (top right) */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      {/* Decorative Glow Spots */}
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
          [OPENINGS ]
        </div>

        {/* Heading Block */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-20 mt-1 pb-1">
          <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-[0.264px] font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              Explore exciting career opportunities
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-[#CACBDB] font-light">
              At RevoSolve
            </span>
          </h2>

          <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-[365px] text-left opacity-75 lg:mb-1 mt-4 lg:mt-0">
            Whether you're a developer, cloud engineer, AI specialist, designer, or DevOps expert – if you love building scalable systems, we want to hear from you.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="w-full px-5 py-6 bg-[#1d1e32] rounded-[10px] border-2 border-indigo-500/30 hover:border-indigo-500 hover:bg-[#23243d] transition-all duration-300 flex flex-col justify-between items-start gap-5 group"
            >
              <div className="w-full flex flex-col justify-start items-start gap-3">
                {/* Tags */}
                <div className="w-full flex flex-wrap justify-start items-center gap-2">
                  {job.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-0.5 bg-[#C1C3ED] text-[#131313]/80 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Job Title & Department */}
                <div className="w-full flex flex-col justify-start items-start">
                  <h4 className="text-white text-lg md:text-xl font-semibold font-sans leading-7">
                    {job.title}
                  </h4>
                  <p className="text-[#00a3ff] text-sm md:text-base font-medium font-sans leading-6">
                    {job.department}
                  </p>
                </div>
              </div>

              {/* Apply Button */}
              <button className="h-10 px-4 rounded-lg border border-[#877BF1]/40 backdrop-blur-[2px] flex items-center justify-center gap-2 text-white font-sans text-xs md:text-sm font-medium hover:bg-[#877BF1]/10 active:scale-95 transition-all duration-300 cursor-pointer self-start">
                <span>Apply</span>
                <img
                  src="/hero_section/icon_3.svg"
                  alt="Arrow"
                  className="w-[16px] h-[8px] group-hover:translate-x-1 transition-transform shrink-0"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openings;
