// App.jsx
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import HomeLayout from "./sections/HomeLayout";
import Review from "./pages/Review";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <ErrorBoundary>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/Reviews" element={<Review />} />
        </Routes>
      </LandingLayout>
    </ErrorBoundary>
  );
}

export default App;
