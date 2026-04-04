import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import ProblemsWeSolve from "./components/ProblemsWeSolve/ProblemsWeSolve";
import IntelligentSolutions from "./components/IntelligentSolutions/IntelligentSolutions";
import CaseStudies from "./components/CaseStudies/CaseStudies";



function App() {
  return (
    <div className="bg-bg-primary min-h-screen overflow-x-hidden flex flex-col w-full relative">
      <Navbar />
      <div className="relative z-0">
        <Hero />
      </div>
      <div className="relative z-30">
        {/* Unified Background Pattern Layer for Marquee & ProblemsWeSolve */}
        <div className="relative w-full overflow-hidden">
          {/* Linear Gradient Layer - Light (Left) to Dark (Right) */}
          <div 
            style={{ background: 'linear-gradient(to right, #191A3E 0%, #050510 60%)' }}
            className="absolute inset-0 z-0 opacity-80 pointer-events-none"
          />

          {/* Shared Background Pattern - Shifted Right */}
          <div 
            
            className="absolute top-0 left-[65%] -translate-x-1/2 w-[2351px] h-[869px] z-1 pointer-events-none overflow-hidden"
          >
            <img
              src="/home_section_3/bg_pattern.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10">
            <Marquee />
            <ProblemsWeSolve />
            <IntelligentSolutions />
            <CaseStudies />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
