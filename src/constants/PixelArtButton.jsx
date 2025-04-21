import React, { useRef } from "react";
import gsap from "gsap";
import { useThemeColors } from "../hooks/useThemeColors";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import useStore from "../store/themeStore";

function PixelArtButton({ text = "text", svg, className, to }) {
  const buttonRef = useRef(null);
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);

  const borderColor = theme === "dark" ? "#f59e0b" : "#a855f7";

  useGSAP(() => {
    const button = buttonRef.current;

    const glowStart =
      theme === "dark" ? "rgba(251, 146, 60, 0.3)" : "rgba(168, 85, 247, 0.3)";
    const glowEnd =
      theme === "dark" ? "rgba(251, 146, 60, 0.1)" : "rgba(168, 85, 247, 0.1)";

    const handleMouseEnter = () => {
      gsap.to(button, {
        borderColor: borderColor,
        boxShadow: `0 0 20px 10px ${glowStart}`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        borderColor: borderColor,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: 0.95,
        boxShadow: `0 0 10px 5px ${glowEnd}`,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: `0 0 20px 10px ${glowStart}`,
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
  }, [theme]);

  return (
    <div className="flex justify-center hover:scale-102 transition-transform duration-500">
      <Link
        to={to}
        ref={buttonRef}
        style={{
          background: themeColors.buttonBg,
          color: themeColors.text,
          borderColor: borderColor,
        }}
        className={`relative cursor-pointer p-3 font-semibold rounded-lg border group ${className}`}
      >
        <span className="flex items-center space-x-2">
          {svg}
          <span>{text}</span>
        </span>
        <span
          className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: borderColor }}
        ></span>
      </Link>
    </div>
  );
}

export default PixelArtButton;
