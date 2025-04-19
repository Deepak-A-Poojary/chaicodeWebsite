// App.jsx
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HomeLayout from "./sections/HomeLayout";
import Review from "./pages/Review";
import LandingLayout from "./layouts/LandingLayout";
import NotFound from "./components/ErrorBoundary/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/Reviews" element={<Review />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LandingLayout>
    </ErrorBoundary>
  );
}

export default App;
