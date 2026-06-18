import React from "react";

const SupportingYou = () => {
  const problemCards = [
    {
      title: "Professional Development",
      description:
        "Grow your expertise with continuous learning, upskilling programs, and mentorship.",
      icon: "/careers/career_problem_1.svg",
    },
    {
      title: "Work-Life Harmony",
      description:
        "Flexible schedules and supportive policies to help you balance work and life with ease.",
      icon: "/careers/career_problem_2.svg",
    },
    {
      title: "Financial Wellness",
      description:
        "Smart compensation, financial planning support, and long-term stability.",
      icon: "/careers/career_problem_3.svg",
    },
    {
      title: "Soft Skills Training",
      description:
        "Sharpen communication, leadership, and collaboration skills to thrive in any role.",
      icon: "/careers/career_problem_4.svg",
    },
    {
      title: "Health & Wellness",
      description:
        "Access to physical and mental wellness resources that keep you feeling your best.",
      icon: "/careers/career_problem_5.svg",
    },
    {
      title: "Fun & Engagement",
      description:
        "From team outings to cultural events—we make work enjoyable, every step of the way.",
      icon: "/careers/career_problem_6.svg",
    },
  ];

  return (
    <section className="relative w-full bg-[#01031c] pt-8 pb-16 lg:pt-12 lg:pb-16 overflow-hidden">
      {/* Decorative Glow Spots */}
      <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-[#877BF1]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#FCCA71]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-[85%] mx-auto flex flex-col items-start justify-start">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
          [PROBLEMS WE SOLVE]
        </div>

        {/* Heading Block */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-20 mt-1 pb-1">
          <h2 className="text-2xl md:text-3xl xl:text-[36px] leading-tight tracking-[0.264px] font-sans">
            <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent font-black">
              Supporting You,
            </span>{" "}
            <span className="text-[#CACBDB] font-light">
              In and Out of the
              <br className="hidden md:block" /> Office
            </span>
          </h2>

          <p className="text-[#CACBDB] text-xs xl:text-sm font-normal font-sans leading-relaxed max-w-full lg:max-w-[400px] text-left opacity-75 lg:mb-1 mt-4 lg:mt-0">
          We believe great work starts with a great work environment. That’s why we offer more than just competitive salaries—think flexible schedules, learning support, wellness initiatives, team outings, and more.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {problemCards.map((card, idx) => (
            <div
              key={idx}
              className="w-full p-7 bg-[#0d1040] rounded-2xl border border-indigo-900/40 hover:border-indigo-500/50 hover:bg-[#121659] transition-all duration-300 flex flex-col justify-start items-start gap-5 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex justify-center items-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <h4 className="text-white text-base font-bold font-sans leading-6">
                  {card.title}
                </h4>
                <p className="text-slate-400 text-sm font-normal font-sans leading-6">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingYou;
