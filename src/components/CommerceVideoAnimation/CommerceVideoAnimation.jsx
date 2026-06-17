import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";

// Configuration for each card index
const CARD_DETAILS = [
  { id: 0, color: "#877BF1" },
  { id: 1, color: "#10b981" },
  { id: 2, color: "#ec4899" },
  { id: 3, color: "#f59e0b" },
  { id: 4, color: "#14b8a6" },
  { id: 5, color: "#6366f1" },
  { id: 6, color: "#FCCA71" },
];

// Central collapse/alignment points
const COLLAPSE_X = 552;
const COLLAPSE_Y = 106;

// Coordinates for each card across the 10 frames
const CARD_STATES = {
  1: [
    // Symmetrical Fan Out initial (Centered + Symmetrical Rotations + Lighter Opacity)
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -45, opacity: 0.05, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -30, opacity: 0.1, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -15, opacity: 0.3, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 15, opacity: 0.4, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 30, opacity: 0.6, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 45, opacity: 0.8, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 1.0, scale: 1 },
  ],
  2: [
    // Tight stack at center (Only top card visible)
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 1.0, scale: 1 },
  ],
  3: [
    // Scattered (no lines yet)
    { left: 12, top: 314, rotate: 0, opacity: 0.2, scale: 1 },
    { left: 1063, top: 42, rotate: 0, opacity: 0.1, scale: 1 },
    { left: 343, top: -124, rotate: 0, opacity: 0.3, scale: 1 },
    { left: 933, top: 301, rotate: 0, opacity: 0.4, scale: 1 },
    { left: 845, top: -54, rotate: 0, opacity: 0.6, scale: 1 },
    { left: 274, top: 314, rotate: 0, opacity: 0.8, scale: 1 },
    { left: 110, top: -14, rotate: 0, opacity: 0.4, scale: 1 },
  ],
  4: [
    // Scattered + Connector lines + Giant Ring appears
    { left: 12, top: 314, rotate: 0, opacity: 0.2, scale: 1 },
    { left: 1063, top: 42, rotate: 0, opacity: 0.1, scale: 1 },
    { left: 343, top: -124, rotate: 0, opacity: 0.3, scale: 1 },
    { left: 933, top: 301, rotate: 0, opacity: 0.4, scale: 1 },
    { left: 845, top: -54, rotate: 0, opacity: 0.6, scale: 1 },
    { left: 274, top: 314, rotate: 0, opacity: 0.8, scale: 1 },
    { left: 110, top: -14, rotate: 0, opacity: 0.4, scale: 1 },
  ],
  5: [
    // Ring shrinks
    { left: 12, top: 314, rotate: 0, opacity: 0.2, scale: 1 },
    { left: 1063, top: 42, rotate: 0, opacity: 0.1, scale: 1 },
    { left: 343, top: -124, rotate: 0, opacity: 0.3, scale: 1 },
    { left: 933, top: 301, rotate: 0, opacity: 0.4, scale: 1 },
    { left: 845, top: -54, rotate: 0, opacity: 0.6, scale: 1 },
    { left: 274, top: 314, rotate: 0, opacity: 0.8, scale: 1 },
    { left: 110, top: -14, rotate: 0, opacity: 0.4, scale: 1 },
  ],
  6: [
    // Ring re-expands
    { left: 12, top: 314, rotate: 0, opacity: 0.2, scale: 1 },
    { left: 1063, top: 42, rotate: 0, opacity: 0.1, scale: 1 },
    { left: 343, top: -124, rotate: 0, opacity: 0.3, scale: 1 },
    { left: 933, top: 301, rotate: 0, opacity: 0.4, scale: 1 },
    { left: 845, top: -54, rotate: 0, opacity: 0.6, scale: 1 },
    { left: 274, top: 314, rotate: 0, opacity: 0.8, scale: 1 },
    { left: 110, top: -14, rotate: 0, opacity: 0.4, scale: 1 },
  ],
  7: [
    // Fly to center — 70% of the way from scatter to badge center
    { left: 390, top: 168, rotate: 0, opacity: 0.4, scale: 0.6 },
    { left: 705, top: 87, rotate: 0, opacity: 0.3, scale: 0.6 },
    { left: 489, top: 37, rotate: 0, opacity: 0.4, scale: 0.6 },
    { left: 666, top: 165, rotate: 0, opacity: 0.3, scale: 0.6 },
    { left: 640, top: 58, rotate: 0, opacity: 0.4, scale: 0.6 },
    { left: 469, top: 168, rotate: 0, opacity: 0.4, scale: 0.6 },
    { left: 419, top: 70, rotate: 0, opacity: 0.3, scale: 0.6 },
  ],
  8: [
    // All converged at badge center — hidden behind white circle
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
  ],
  9: [
    // Invisible / Collapsed — centered at badge center
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 0, scale: 0 },
  ],
  10: [
    // Symmetrical Fan Out final (Centered + Symmetrical Rotations + Lighter Opacity)
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -45, opacity: 0.05, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -30, opacity: 0.1, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: -15, opacity: 0.3, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 15, opacity: 0.4, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 30, opacity: 0.6, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 45, opacity: 0.8, scale: 1 },
    { left: COLLAPSE_X, top: COLLAPSE_Y, rotate: 0, opacity: 1.0, scale: 1 },
  ],
};

const CommerceVideoAnimation = () => {
  const [activeFrame, setActiveFrame] = useState(1);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isInView, setIsInView] = useState(false);

  // Viewport observer to trigger animation start
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setActiveFrame(1); // Safely reset inside event handler
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the card container is visible
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-play loop sequence for all 10 frames - starts when isInView is true
  useEffect(() => {
    if (!isInView) return;

    const sequence = [
      { frame: 1, duration: 2000 }, // Fanned Out initial (settles and stays)
      { frame: 2, duration: 1400 }, // Stacked
      { frame: 3, duration: 1600 }, // Scattered (no lines)
      { frame: 4, duration: 1600 }, // Connector lines appear
      { frame: 5, duration: 1400 }, // Giant ring shrinks
      { frame: 6, duration: 1400 }, // Giant ring re-expands
      { frame: 7, duration: 1200 }, // Fly to center starts
      { frame: 8, duration: 1200 }, // Converging small cards
      { frame: 9, duration: 1200 }, // Invisible
      { frame: 10, duration: 2200 }, // Fan Out final
    ];

    let currentIndex = sequence.findIndex((s) => s.frame === activeFrame);
    if (currentIndex === -1) currentIndex = 0;

    const nextFrameTimeout = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % sequence.length;
      setActiveFrame(sequence[nextIndex].frame);
    }, sequence[currentIndex].duration);

    return () => clearTimeout(nextFrameTimeout);
  }, [activeFrame, isInView]);

  // Responsive scale handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth =
          containerRef.current.parentElement.getBoundingClientRect().width;
        setScale(parentWidth / 1280);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center white circle configuration
  const getCenterCircleConfig = (frame) => {
    switch (frame) {
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        return { scale: 1, opacity: 1 };
      default:
        return { scale: 0, opacity: 0 };
    }
  };

  // Clean bus routing - no overlaps, no corner exits, merges at x=433 (left) and x=781 (right)
  const getOrthogonalPath = (cardIndex, left, top) => {
    const targetY = 229;
    switch (cardIndex) {
      // ── LEFT BUS (x=433) ──────────────────────────────────────────
      case 0:
        return `M ${left + 87.5} ${top} V 276 H 400 V ${targetY} H 577`;
      case 5:
        return `M ${left + 175} ${top + 123.5} H ${left + 240} V ${targetY} H 577`;
      case 6:
        return `M ${left + 175} ${top + 190} H 400 V ${targetY} H 577`;
      case 2:
        return `M ${left + 175} ${top + 200} H ${left + 210} V ${targetY} H 577`;
      // ── RIGHT BUS (x=781) ─────────────────────────────────────────
      case 1:
        return `M ${left} ${top + 187} H 781 V ${targetY} H 703`;
      case 4:
        return `M ${left} ${top + 123.5} H 730 V ${targetY} H 703`;
      case 3:
        return `M ${left} ${top + 90} H 781 V ${targetY} H 703`;
      default:
        return `M 640 229`;
    }
  };

  const centerCircle = getCenterCircleConfig(activeFrame);
  const lineOpacity = activeFrame >= 4 && activeFrame <= 7 ? 0.35 : 0;

  return (
    <div
      className="relative z-10 w-[85%] mx-auto my-8 lg:my-8 overflow-hidden pointer-events-none"
      style={{ height: 483 * scale }}
    >
      {/* Centered Scaled Canvas */}
      <div
        ref={containerRef}
        className="absolute top-0 left-1/2 overflow-hidden rounded-2xl bg-[#0F1034] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
        style={{
          width: 1280,
          height: 483,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* Background Wing 1 (Left Wing) */}
        <Motion.div
          className="absolute pointer-events-none"
          style={{
            left: "-126px",
            top: "-100px",
            width: "700px",
            height: "450px",
          }}
          animate={{
            opacity:
              activeFrame === 1 || activeFrame === 2 || activeFrame >= 8
                ? 0.8
                : 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <img
            src="/commerce_video/left_decoration.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </Motion.div>

        {/* Background Wing 2 (Right Wing) */}
        <Motion.div
          className="absolute pointer-events-none"
          style={{
            left: "640px",
            top: "0px",
            width: "750px",
            height: "500px",
          }}
          animate={{
            opacity:
              activeFrame === 1 || activeFrame === 2 || activeFrame >= 8
                ? 0.8
                : 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <img
            src="/commerce_video/right_decoration.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </Motion.div>

        {/* Connector SVG lines with animated yellow glow pulse */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <filter
              id="gold-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {CARD_DETAILS.map((card) => {
            const cardState = CARD_STATES[activeFrame][card.id];
            const pathD = getOrthogonalPath(
              card.id,
              cardState.left,
              cardState.top,
            );
            return (
              <g key={card.id}>
                {/* Dashed purple base line */}
                <Motion.path
                  d={pathD}
                  stroke="#6262CD"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ opacity: lineOpacity }}
                  transition={{ duration: 0.3 }}
                />
                {/* Glowing gold flowing pulse */}
                <Motion.path
                  d={pathD}
                  stroke="#FFD700"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeDasharray="150 2000"
                  filter="url(#gold-glow)"
                  fill="none"
                  animate={{
                    opacity: lineOpacity,
                    strokeDashoffset: [0, -2150],
                  }}
                  transition={{
                    strokeDashoffset: {
                      repeat: Infinity,
                      duration: 3.0,
                      ease: "linear",
                    },
                    opacity: { duration: 0.3 },
                  }}
                />
              </g>
            );
          })}

          {/* Left arrowhead pointing right into the badge */}
          <Motion.path
            d="M 571 224.5 L 577 229 L 571 233.5"
            stroke="#6262CD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ opacity: lineOpacity }}
            transition={{ duration: 0.3 }}
          />
          {/* Right arrowhead pointing left into the badge */}
          <Motion.path
            d="M 709 224.5 L 703 229 L 709 233.5"
            stroke="#6262CD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ opacity: lineOpacity }}
            transition={{ duration: 0.3 }}
          />
        </svg>

        {/* Central White E-Badge */}
        <Motion.div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            width: 125.88,
            height: 125.88,
            left: 577,
            top: 166,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 999,
          }}
          animate={{
            scale: centerCircle.scale,
            opacity: centerCircle.opacity,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 14,
          }}
        >
          <img
            src="/commerce_video/ERPNext.png"
            alt="ERPNext"
            className="w-[72%] h-[72%] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </Motion.div>

        {/* Interactive motion.div Document Cards */}
        {CARD_DETAILS.map((card) => {
          const pivotOrigin = "center center";

          const cardState = CARD_STATES[activeFrame][card.id];

          return (
            <Motion.div
              key={card.id}
              className="absolute left-0 top-0 w-[175px] h-[247px] rounded-lg border flex flex-col justify-between shadow-2xl cursor-pointer overflow-hidden bg-[#0A0B24]"
              style={{
                borderColor: `${card.color}30`,
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 12px ${card.color}20`,
                transformOrigin: pivotOrigin,
                originX: 0.5,
                originY: 0.5,
                zIndex: 20 + card.id,
                pointerEvents:
                  activeFrame === 8 ||
                  activeFrame === 9 ||
                  cardState.opacity < 0.1
                    ? "none"
                    : "auto",
              }}
              animate={{
                x: cardState.left,
                y: cardState.top,
                rotate: cardState.rotate,
                opacity: cardState.opacity,
                scale: cardState.scale ?? 1,
              }}
              transition={{
                x: { type: "spring", stiffness: 65, damping: 18, mass: 1.0 },
                y: { type: "spring", stiffness: 65, damping: 18, mass: 1.0 },
                rotate: { type: "spring", stiffness: 65, damping: 18, mass: 1.0 },
                scale: { type: "tween", ease: "easeOut", duration: 0.5 },
                opacity: { type: "tween", ease: "easeOut", duration: 0.4 },
              }}
            >
              {/* Document Image */}
              <img
                src={
                  activeFrame === 1 || activeFrame === 2 || activeFrame === 10
                    ? "/commerce_video/doc7.png"
                    : `/commerce_video/doc${card.id + 1}.png`
                }
                alt={`Doc ${card.id + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Glow indicator at the bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5 opacity-80"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                }}
              />
            </Motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CommerceVideoAnimation;
