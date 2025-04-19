import React, { useRef } from "react";
import gsap from "gsap";
import { useThemeColors } from "../hooks/useThemeColors";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

function PixelArtButton({ text = "text", svg, className, to }) {
  const buttonRef = useRef(null);
  const themeColors = useThemeColors();

  useGSAP(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        borderColor: "#22d3ee", // cyan-400
        boxShadow: "0 0 20px 10px rgba(14,165,233,0.6)", // sky-500 glow
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        borderColor: "#0ea5e9", // sky-500
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: 0.95,
        boxShadow: "0 0 10px 5px rgba(14,165,233,0.4)",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 0 20px 10px rgba(14,165,233,0.6)",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <Link
        to={to}
        ref={buttonRef}
        style={{
          background: themeColors.buttonBg,
          color: themeColors.text,
        }}
        className={`relative cursor-pointer p-3 font-semibold rounded-lg border border-sky-500 group ${className}`}
      >
        <span className="flex items-center space-x-2">
          {svg}
          <span>{text}</span>
        </span>
        <span className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-sky-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Link>
    </div>
  );
}

export default PixelArtButton;
