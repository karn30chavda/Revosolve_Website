import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CommerceOperationsSystems from "./pages/CommerceOperationsSystems";
import DocumentIntelligenceSystems from "./pages/DocumentIntelligenceSystems";
import Connect from "./pages/Connect";
import Careers from "./pages/Careers";
import ComingSoon from "./pages/ComingSoon";
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  return (
    <div className="bg-bg-primary min-h-screen flex flex-col w-full relative">
      {/* Dynamic Analytics Tracking */}
      <GoogleAnalytics />

      {/* Scroll Reset Component */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/commerce-operations-systems" element={<CommerceOperationsSystems />} />
          <Route path="/solutions/document-intelligence-systems" element={<DocumentIntelligenceSystems />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Fallback route - optional */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Back to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
