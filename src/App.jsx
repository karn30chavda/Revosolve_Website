import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="bg-bg-primary min-h-screen flex flex-col w-full relative">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Fallback route - optional */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
