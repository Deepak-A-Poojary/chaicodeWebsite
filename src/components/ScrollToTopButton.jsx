import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return () => {};
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group cursor-pointer fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#FE9332] text-white shadow-lg hover:bg-[#f47a0d] transition-all duration-300 md:bottom-8 md:right-8 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
