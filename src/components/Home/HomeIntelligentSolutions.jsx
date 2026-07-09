import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion as Motion, useAnimation, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    id: 0,
    category: "Document Intelligence Systems",
    title: "Digitizing Physical Document Workflows for Government Operations",
    description:
      "Transform offline document processing into structured, automated workflows enabling faster data extraction, validation, and decision-making across departments",
    image: "/Home/solutions_ocr.jpeg",
  },
  {
    id: 1,
    category: "Customer Interaction Systems for Institutions",
    title:
      "Automating Customer Interaction for Financial & Service Institutions",
    description:
      "Build intelligent interaction systems that handle customer queries, support workflows, and service requests across voice, chat, and AI-driven interfaces.",
    image: "/Home/solutions_os.jpg",
  },
  {
    id: 2,
    category: "Commerce Operations Systems",
    title: "Unifying Commerce Operations Across Channels",
    description:
      "Centralize order management, inventory, fulfillment, and communication into a single operational system across ecommerce platforms and marketplaces.",
    image: "/Home/solutions_surveillance.jpg",
  },
  {
    id: 3,
    category: "Simulation & Digital Twin Systems",
    title:
      "Simulating Real-World Systems with Digital Twin & Immersive Technologies",
    description:
      "Create virtual environments for monitoring, training, and operational simulation enabling better planning and decision-making across complex systems.",
    image: "/Home/solutions_os.jpg",
  },
  {
    id: 4,
    category: "AI Surveillance Systems",
    title:
      "Intelligent Surveillance & Monitoring for Public and Enterprise Environments",
    description:
      "Deploy AI-powered systems for real-time monitoring, anomaly detection, and situational awareness across infrastructure and operational environments.",
    image: "/Home/solutions_surveillance.jpg",
  },
  {
    id: 5,
    category: "Public Infrastructure Operations Systems",
    title: "Managing Infrastructure Projects from Tender to Execution",
    description:
      "A unified system to manage tenders, execution, workforce, assets, and financials across infrastructure and government projects.",
    image: "/Home/solutions_os.jpg",
  },
  {
    id: 6,
    category: "Defense & Public Training Systems",
    title:
      "Immersive Training & Simulation for Defense and Public Sector Operations",
    description:
      "Enable realistic, scenario-based training environments that prepare personnel for critical operations, emergency situations, and complex system handling improving readiness, response, and decision-making without real-world risk.",
    image: "/Home/solutions_ocr.jpeg",
  },
];

const HomeIntelligentSolutions = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const isPaused = useRef(false);
  const mobileTabsRef = useRef(null);
  const sectionRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(448);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        // Updated wider mobile width: 320px card + 16px gap
        setItemWidth(320 + 16);
      } else {
        setItemWidth(424 + 24);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const TOTAL_WIDTH = itemWidth * solutions.length;
  const marqueeSolutions = [...solutions, ...solutions, ...solutions];
  const DURATION = 35;

  const startInfinityLoop = useCallback(() => {
    isPaused.current = false;
    controls.stop();

    const run = () => {
      const currentX = x.get();
      let normalizedX = currentX % TOTAL_WIDTH;
      if (normalizedX > 0) normalizedX -= TOTAL_WIDTH;

      x.set(normalizedX);
      controls.set({ x: normalizedX });

      const remainingRange = Math.abs(-TOTAL_WIDTH - normalizedX);
      const duration = (remainingRange / TOTAL_WIDTH) * DURATION;

      controls.start({
        x: -TOTAL_WIDTH,
        transition: {
          duration,
          ease: "linear",
          onComplete: () => {
            if (!isPaused.current) {
              x.set(0);
              controls.set({ x: 0 });
              run();
            }
          },
        },
      });
    };

    run();
  }, [controls, x, TOTAL_WIDTH, DURATION]);

  useEffect(() => {
    startInfinityLoop();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPaused.current) {
          startInfinityLoop();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      controls.stop();
      observer.disconnect();
    };
  }, [itemWidth, startInfinityLoop, controls]);

  const selectCategory = (index) => {
    isPaused.current = true;
    setActiveIndex(index);
    const targetX = -(index * itemWidth);

    // Desktop: Sync Marquee
    controls.stop();
    controls
      .start({
        x: targetX,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 25,
          mass: 0.8,
          restDelta: 0.1,
        },
      })
      .then(() => {
        isPaused.current = false;
        startInfinityLoop();
      });
  };

  useEffect(() => {
    if (mobileTabsRef.current?.children[activeIndex]) {
      const tab = mobileTabsRef.current.children[activeIndex];
      const container = mobileTabsRef.current;
      const targetScroll =
        tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;

      if (Math.abs(container.scrollLeft - targetScroll) > 15) {
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-transparent overflow-hidden pb-12 transform-gpu antialiased md:-mt-[calc(100vh-700px)] lg:-mt-[calc(100vh-720px)]"
    >
      <div className="w-[85%] md:w-[85%] mx-auto">
        <div className="text-white/30 text-[10px] md:text-xs font-medium uppercase tracking-[3px] mb-6 font-sans">
          [Solutions]
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-10 relative">
          <div className="relative group">
            <h2 className="text-[28px] md:text-[40px] leading-tight font-black relative font-sans">
              <span className="w-fit block">
                <span className="bg-linear-to-r from-[#877BF1] to-[#FCCA71] bg-clip-text text-transparent">
                  Intelligent solutions
                </span>
                <span className="text-[#CACBDB] font-thin ml-2">for</span>
              </span>
              <span className="text-[#CACBDB] block font-thin mt-[-4px]">
                real business challenges
              </span>
            </h2>
          </div>
          <div className="md:max-w-[320px] flex items-center md:pb-1">
            <p className="text-[#FBFBFF] opacity-50 text-[14px] font-sans font-normal leading-relaxed">
              Our software powers real-time, AI-driven decisions in critical
              government and commercial enterprises.
            </p>
          </div>

          <div className="hidden md:flex gap-3 ml-auto items-center">
            <button
              onClick={() =>
                selectCategory(
                  (activeIndex - 1 + solutions.length) % solutions.length,
                )
              }
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img
                src="/Home/solutions_left_arrow.svg"
                alt="Prev"
                className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
            <button
              onClick={() =>
                selectCategory((activeIndex + 1) % solutions.length)
              }
              className="p-1 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <img
                src="/Home/solutions_right_arrow.svg"
                alt="Next"
                className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Tabs (Navigation trigger) */}
        <div
          ref={mobileTabsRef}
          className="md:hidden flex overflow-x-auto scrollbar-hide gap-8 pb-4 mb-4 border-b border-white/5 relative items-center"
        >
          {solutions.map((item, idx) => (
            <button
              key={`tab-nav-mobile-${idx}`}
              onClick={() => selectCategory(idx)}
              className={`text-[15px] whitespace-nowrap transition-all duration-500 relative py-2 ${
                activeIndex === idx
                  ? "text-white font-bold"
                  : "text-white/30 font-medium hover:text-white/60"
              }`}
            >
              <span
                className={`pb-1 transition-all ${activeIndex === idx ? "border-b-2 border-white/60" : ""}`}
              >
                {item.category}
              </span>
            </button>
          ))}
        </div>

        {/* Unified Responsive Container: Sidebar (Desktop) + Marquee (Global) */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-16 items-start relative min-h-[440px]">
          {/* Desktop Sidebar (Optional Navigation trigger) */}
          <div className="hidden md:flex w-[280px] flex-col gap-0.5 shrink-0 pt-16 sticky top-24 self-start z-20 mr-12">
            {solutions.map((item, idx) => (
              <button
                key={`sidebar-tab-${idx}`}
                onClick={() => selectCategory(idx)}
                className={`flex items-center gap-4 py-3 px-2 text-left transition-all duration-300 rounded-lg group cursor-pointer ${
                  activeIndex === idx
                    ? "text-white opacity-100"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`text-[16px] font-normal tracking-[-0.3px] font-sans whitespace-nowrap leading-none transition-all ${
                      activeIndex === idx
                        ? "underline underline-offset-8 decoration-white/40"
                        : "group-hover:underline group-hover:underline-offset-8 group-hover:decoration-white/20"
                    }`}
                  >
                    {item.category}
                  </span>
                  {activeIndex === idx && (
                    <Motion.span
                      layoutId="sidebar-dash"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 0.6, width: 14 }}
                      className="h-[1.5px] bg-white"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Infinite Marquee (Always Moving) */}
          <div className="flex-1 min-w-0 w-full relative">
            <div
              className="relative w-full h-[520px] md:h-[540px] overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseEnter={() => {
                isPaused.current = true;
                controls.stop();
              }}
              onMouseLeave={() => {
                isPaused.current = false;
                startInfinityLoop();
              }}
              onTouchStart={() => {
                isPaused.current = true;
                controls.stop();
              }}
              onTouchEnd={() => {
                isPaused.current = false;
                startInfinityLoop();
              }}
            >
              <Motion.div
                drag="x"
                dragConstraints={{ left: -TOTAL_WIDTH * 2, right: 0 }}
                dragElastic={0.15}
                dragMomentum={true}
                onDragStart={() => {
                  isPaused.current = true;
                  controls.stop();
                }}
                onDragEnd={(e, info) => {
                  const currentX = x.get();
                  const velocity = info.velocity.x;
                  const projectedX = currentX + velocity * 0.1;
                  const nearestCardX =
                    Math.round(projectedX / itemWidth) * itemWidth;

                  controls
                    .start({
                      x: nearestCardX,
                      transition: {
                        type: "spring",
                        stiffness: 60,
                        damping: 25,
                        mass: 0.8,
                      },
                    })
                    .then(() => {
                      x.set(nearestCardX);
                      if (
                        nearestCardX >= 0 ||
                        nearestCardX <= -TOTAL_WIDTH * 2
                      ) {
                        const resetX = nearestCardX % TOTAL_WIDTH;
                        x.set(resetX);
                        controls.set({ x: resetX });
                      }
                      isPaused.current = false;
                      startInfinityLoop();
                    });
                }}
                animate={controls}
                onUpdate={(latest) => {
                  const val = parseFloat(latest.x);
                  x.set(val);
                  const normX = Math.abs(val % TOTAL_WIDTH);
                  const idx =
                    Math.floor((normX + itemWidth / 2) / itemWidth) %
                    solutions.length;
                  if (idx !== activeIndex) {
                    setActiveIndex(idx);
                  }
                }}
                style={{ x, translateZ: 0, willChange: "transform" }}
                className="flex gap-4 md:gap-6 w-fit h-full items-center"
              >
                {marqueeSolutions.map((card, idx) => (
                  <div
                    key={`marquee-card-${idx}`}
                    className="w-[320px] md:w-[424px] h-[400px] md:h-[470px] shrink-0"
                  >
                    <div
                      onClick={() => {
                        if (card.category === "Commerce Operations Systems") {
                          navigate("/solutions/commerce-operations-systems");
                        } else if (card.category === "Document Intelligence Systems") {
                          navigate("/solutions/document-intelligence-systems");
                        } else if (card.category === "Customer Interaction Systems for Institutions") {
                          navigate("/solutions/customer-interaction-systems");
                        } else if (card.category === "Defense & Public Training Systems") {
                          navigate("/solutions/defense-simulation-training-systems");
                        } else if (card.category === "AI Surveillance Systems") {
                          navigate("/services/ai-intelligent-systems");
                        } else {
                          navigate("/coming-soon");
                        }
                      }}
                      className="w-full h-full rounded-xl overflow-hidden relative flex flex-col p-6 md:p-[22px] pb-6 shadow-2xl bg-white transition-all duration-700 ease-out group hover:-translate-y-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 0%, #D8D9F2 35%, #A6A9F7 100%)",
                      }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-bl from-[#9CA0F5] to-[#CACBEB]" />
                      <div className="relative w-full h-[140px] md:h-[200px] mb-4 rounded-lg bg-[#1d1f4c]/10 overflow-hidden shrink-0 z-10 border border-black/5">
                        <img
                          src={card.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 z-10 flex flex-col">
                        <h3 className="text-[#050737] font-bold text-[18px] md:text-[20px] leading-tight font-sans mb-3 transition-colors relative z-20">
                          <span className="bg-bottom-left bg-no-repeat bg-linear-to-r from-[#050737] to-[#050737] bg-size-[0%_2px] group-hover:bg-size-[100%_2px] transition-[background-size] duration-500 ease-out pb-1">
                            {card.title}
                          </span>
                        </h3>
                        <p className="text-[#050737]/70 text-[13px] md:text-[15px] leading-relaxed font-sans line-clamp-3">
                          {card.description}
                        </p>
                        <div
                          className="mt-auto pt-6 flex items-center gap-1.5 group/link w-fit"
                        >
                          <span
                            className="text-[14px] md:text-[16px] text-[#050737] font-medium relative"
                          >
                            Explore
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#050737] group-hover/link:w-full transition-all duration-300" />
                          </span>
                          <img
                            src="/Home/solutions_explore_arrow.svg"
                            alt=""
                            className="w-4 h-4 md:w-4.5 md:h-4.5 transition-transform duration-300 group-hover/link:translate-x-1.5"
                          />
                        </div>
                      </div>
                      <img
                        src="/Home/solutions_card_pattern.svg"
                        alt=""
                        className="absolute bottom-0 right-0 opacity-40 z-0 group-hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`,
        }}
      />
    </section>
  );
};

export default HomeIntelligentSolutions;
