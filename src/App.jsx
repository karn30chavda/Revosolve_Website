import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CommerceOperationsSystems from "./pages/CommerceOperationsSystems";
import DocumentIntelligenceSystems from "./pages/DocumentIntelligenceSystems";
import CustomerInteractionSystems from "./pages/CustomerInteractionSystems";
import Connect from "./pages/Connect";
import Careers from "./pages/Careers";
import ComingSoon from "./pages/ComingSoon";
import OpenSourceERPSystems from "./pages/OpenSourceERPSystems";
import CloudDevOps from "./pages/CloudDevOps";
import AiIntelligentSystems from "./pages/AiIntelligentSystems";
import GoogleAnalytics from "./components/GoogleAnalytics";
import DataEngineeringAnalytics from "./pages/DataEngineeringAnalytics";
import DefenseSimulationTrainingSystems from "./pages/DefenseSimulationTrainingSystems";
import AiSurveillanceSystems from "./pages/AiSurveillanceSystems";
import SimulationDigitalTwinSystems from "./pages/SimulationDigitalTwinSystems";
import Testing from "./pages/Testing";

function App() {
  return (
    <div className="bg-bg-primary min-h-screen flex flex-col w-full relative">
      {/* Dynamic Analytics Tracking */}
      <GoogleAnalytics />

      {/* Scroll Reset & Back to Top Component */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/solutions/commerce-operations-systems"
            element={<CommerceOperationsSystems />}
          />
          <Route
            path="/solutions/document-intelligence-systems"
            element={<DocumentIntelligenceSystems />}
          />
          <Route
            path="/solutions/customer-interaction-systems"
            element={<CustomerInteractionSystems />}
          />
          <Route
            path="/solutions/defense-simulation-training-systems"
            element={<DefenseSimulationTrainingSystems />}
          />
          <Route
            path="/solutions/ai-surveillance-systems"
            element={<AiSurveillanceSystems />}
          />
          <Route
            path="/solutions/simulation-digital-twin-systems"
            element={<SimulationDigitalTwinSystems />}
          />
          <Route
            path="/services/open-source-erp-systems"
            element={<OpenSourceERPSystems />}
          />
          <Route path="/services/cloud-and-devops" element={<CloudDevOps />} />
          <Route
            path="/services/ai-intelligent-systems"
            element={<AiIntelligentSystems />}
          />
          <Route
            path="/services/data-engineering-analytics"
            element={<DataEngineeringAnalytics />}
          />
          <Route path="/testing" element={<Testing />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/careers" element={<Careers />} />
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
