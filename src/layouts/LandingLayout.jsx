// layouts/LandingLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useThemeColors } from "../hooks/useThemeColors";

const LandingLayout = ({ children }) => {
  const themeColors = useThemeColors();

  return (
    <div
      className="min-h-screen w-dvw flex flex-col transition-colors duration-500"
      style={{
        background: themeColors.background,
        color: themeColors.text,
      }}
    >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
