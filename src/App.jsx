import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import ProblemsWeSolve from "./components/ProblemsWeSolve/ProblemsWeSolve";
import IntelligentSolutions from "./components/IntelligentSolutions/IntelligentSolutions";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import WhyUs from "./components/WhyUs/WhyUs";
import CallToAction from "./components/CallToAction/CallToAction";


function App() {
  return (
    <div className="bg-bg-primary min-h-screen overflow-x-hidden flex flex-col w-full relative">
      <Navbar />
      <div className="relative z-0">
        <Hero />
      </div>

      <div className="relative z-30">
        {/* Unified Atmospheric Layer - Zigzag Glows without Seams */}
        <div className="relative w-full overflow-hidden bg-bg-primary">
          
          {/* Ambient Glows Layer - Rhythmic zigzag across sections */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 15% 10%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 85% 45%, rgba(25, 26, 62, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 15% 85%, rgba(25, 26, 62, 0.9) 0%, transparent 45%)
              `
            }}
          />

          {/* Shared Background Patterns - Repeating or offset for texture */}
          <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden pointer-events-none opacity-30">
            {/* Pattern 1 - Top Leftish */}
            <div className="absolute top-0 left-[15%] -translate-x-1/2 w-[2351px] h-[869px]">
                <img src="/home_section_3/bg_pattern.png" alt="" className="w-full h-full object-contain" />
            </div>
             {/* Pattern 2 - Middle Rightish */}
             <div className="absolute top-[35%] left-[85%] -translate-x-1/2 w-[2351px] h-[869px]">
            </div>
             {/* Pattern 3 - Bottom Leftish */}
             <div className="absolute top-[70%] left-[15%] -translate-x-1/2 w-[2351px] h-[869px]">
            </div>
          </div>

          <div className="relative z-10">
            <Marquee />
            <ProblemsWeSolve />
            <IntelligentSolutions />
            <CaseStudies />
            <WhyUs />
            <CallToAction />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
