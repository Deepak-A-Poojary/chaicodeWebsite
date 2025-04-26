// App.jsx
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HomeLayout from "./sections/HomeLayout";
import Review from "./pages/Review";
import LandingLayout from "./layouts/LandingLayout";
import NotFound from "./components/ErrorBoundary/NotFound";
import RefundPolicy from "./pages/RefundPolicy";
import PricingPolicy from "./pages/PricingPolicy";
import TermsAndConditons from "./pages/TermsAndConditons";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <ErrorBoundary>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/Reviews" element={<Review />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/pricing-policy" element={<PricingPolicy />} />
          <Route path="/terms-of-services" element={<TermsAndConditons />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </LandingLayout>
    </ErrorBoundary>
  );
}

export default App;
