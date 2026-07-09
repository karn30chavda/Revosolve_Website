import React from "react";

const CommerceCaseStudy = () => {
  return (
    <section className="bg-transparent py-8 lg:py-10 flex flex-col gap-8 md:gap-10 items-center justify-start relative w-full overflow-hidden transform-gpu antialiased font-sans">
      
      {/* Header Section */}
      <div className="w-[85%] mx-auto flex flex-col gap-4 items-start justify-end relative">
        {/* Section Tag */}
        <div className="text-white text-[18px] font-normal uppercase tracking-[0.264px] leading-[57px] opacity-30">
          [case study]
        </div>

        {/* Heading Block */}
        <div className="w-full flex flex-col items-start justify-start gap-2">
          {/* Line 1: Gradient Title */}
          <h2 className="bg-linear-to-r from-[#877BF1] to-[#d7a54e] bg-clip-text text-transparent text-2xl md:text-3xl xl:text-[36px] font-black leading-tight tracking-[0.264px] font-sans">
            Built for Growing Commerce Businesses
          </h2>
          
          {/* Line 2: Sub-header and Description side-by-side */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[33px] items-start md:items-end justify-start self-stretch relative">
            <div className="text-[#CACBDB] text-left font-thin text-[28px] md:text-[2.375rem] tracking-tight leading-tight">
              See How We Solve Problems
            </div>
            
            <div className="md:pb-1 flex flex-row gap-2.5 items-center justify-start relative shrink-0">
              <div className="text-[#FBFBFF]/50 text-left text-[14px] md:text-[0.875rem] font-normal max-w-[300px] md:w-[320px] leading-normal">
                Discover how we’ve helped clients turn challenges into measurable success
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section - Desktop View */}
      <div className="hidden md:flex w-[85%] mx-auto px-4 flex-row items-start justify-start relative">
        <div className="rounded-lg border-2 border-transparent p-[24px] flex flex-col gap-4 items-start justify-start flex-1 min-h-[400px] relative overflow-hidden bg-[linear-gradient(186deg,#CACBEB_4.87%,#9CA0F5_166.88%)]">
          
          {/* Top-Right Background Pattern */}
          <img
            src="/CommerceOperationsSystems/case_study_pattern.svg"
            alt=""
            loading="lazy"
            className="absolute top-0 right-0 pointer-events-none select-none"
          />

          <div className="pt-2 pl-2 flex flex-col gap-4 items-start justify-start self-stretch flex-1 relative">
            
            {/* Domain Pill */}
            <div className="rounded-[58px] border-2 border-[rgba(91,98,191,0.37)] py-[3px] px-4 flex flex-row gap-2.5 items-center justify-center relative backdrop-blur-[2px]">
              <div className="text-[#020319]/60 text-center text-sm font-normal tracking-tight">
                Domain: Commerce
              </div>
            </div>

            {/* Content Text Block */}
            <div className="mt-[50px] pb-4 flex flex-col gap-5 items-start justify-start max-w-[50%] relative">
              <h3 className="text-[#050737] text-left font-bold text-[28px] leading-tight self-stretch">
                D2C & Consumer Brands
              </h3>
              
              <div className="text-[#050737]/80 text-left text-sm leading-[22px] font-normal flex flex-col gap-3">
                <p>
                  Optical Character Recognition (OCR) is a groundbreaking technology that converts different types of documents, such as scanned paper documents, PDFs, or images captured by a digital camera, into editable and searchable data.
                </p>
                <p>
                  By utilizing sophisticated algorithms, OCR can recognize and extract text from images, making it easier to digitize and manage information efficiently. This technology is widely used in various industries, from automating data entry to enhancing accessibility for visually impaired users.
                </p>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 w-[330px] h-[190px] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/CommerceOperationsSystems/case_study_img.webp"
                alt="D2C Case Study Preview"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Card Section - Mobile View */}
      <div className="md:hidden w-[90%] mx-auto">
        <div className="rounded-lg p-5 flex flex-col gap-6 items-start justify-start relative shadow-xl overflow-hidden w-full bg-[linear-gradient(186deg,#CACBEB_4.87%,#9CA0F5_166.88%)]">
          
          <img
            src="/CommerceOperationsSystems/case_study_img.webp"
            className="rounded-lg self-stretch h-[160px] object-cover relative border border-black/5"
            alt=""
            loading="lazy"
          />

          <div className="flex flex-col gap-5 items-start justify-start self-stretch relative">
            <div className="rounded-[58px] border-2 border-[rgba(91,98,191,0.37)] py-[3px] px-4 flex flex-row items-center justify-center relative backdrop-blur-[2px]">
              <div className="text-[#020319]/60 text-center font-normal text-[14px] leading-relaxed tracking-tight">
                Domain: Commerce
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start justify-start self-stretch relative mt-6">
              <div className="text-[#050737] text-left font-bold text-[22px] relative self-stretch leading-tight">
                D2C & Consumer Brands
              </div>
              <div className="text-[#050737]/80 text-left text-sm font-normal relative self-stretch leading-relaxed flex flex-col gap-2">
                <p>
                  Optical Character Recognition (OCR) is a groundbreaking technology that converts different types of documents, such as scanned paper documents, PDFs, or images captured by a digital camera, into editable and searchable data.
                </p>
                <p>
                  By utilizing sophisticated algorithms, OCR can recognize and extract text from images, making it easier to digitize and manage information efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CommerceCaseStudy;
