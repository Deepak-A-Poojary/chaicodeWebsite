import React, { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function ExploreTextButton({
  text = "Explore live cohorts",
  svg,
  className,
  to,
}) {
  const overlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      scale: 4,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative text-white  py-3 px-6 text-center rounded-lg flex items-center gap-5 text-lg font-semibold shadow-md overflow-hidden cursor-pointer bg-[#B24B4A] hover:scale-[1.02] transition-transform duration-300 ${className}`}
    >
      {svg}

      {/* Blurred Radial Overlay */}
      <div
        ref={overlayRef}
        className="absolute top-1/2 left-1/2 w-40 h-40 z-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #AB9029 0%, #B24B4A 100%)",
          transform: "translate(-50%, -50%) scale(0)",
          filter: "blur(20px)",
          opacity: 0,
        }}
      ></div>
      <p className="z-10 whitespace-nowrap text-white">{text}</p>
    </Link>
  );
}

export default ExploreTextButton;
