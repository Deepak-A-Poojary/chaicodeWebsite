import React, { useRef } from "react";
import { gsap } from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";

const MorphIcon = () => {
  const iconARef = useRef(null);
  const iconBRef = useRef(null);
  const themeColors = useThemeColors()
  const iconStyle = {
    color: themeColors.secondryText
  }


  const handleMouseEnter = () => {
    gsap.to(iconARef.current, {
      opacity: 0,
      ease: "power2.out",
      duration: 0.5,
    });
    gsap.to(iconBRef.current, {
      opacity: 1,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconARef.current, { opacity: 1, duration: 0.5 });
    gsap.to(iconBRef.current, { opacity: 0, duration: 0.5 });
  };

  return (
    <div
      className="h-[24px] relative cursor-pointer flex items-center"
      style={{
        gap: "0.25rem",
        color: "#ffffff",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Closed Book Icon */}
      <svg
        ref={iconARef}
        className="absolute left-0"
        width="20"
        height="19"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 1 }}
      >
        <path
          d="M9.25 6.75H15.75"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15.75H19.75V21.25H8C6.48 21.25 5.25 20.02 5.25 18.5C5.25 16.98 6.48 15.75 8 15.75Z"
          stroke={iconStyle.color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 18.5V5.75C5.25 4.09315 6.59315 2.75 8.25 2.75H18.75C19.3023 2.75 19.75 3.19772 19.75 3.75V16"
          stroke={iconStyle.color}
          strokeWidth="1"
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Open Book Icon */}
      <svg
        width="20"
        height="19"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={iconBRef}
        className="absolute left-0"
        style={{ opacity: 0 }}
      >
        <path
          d="M11.2475 19V2.53274M1 17.4165V19L2.96171 18.2169C4.31521 17.6766 5.74831 17.4672 7.17306 17.6018C8.5978 17.7363 9.98415 18.2118 11.247 18.9992L11.2482 19L11.2899 18.974"
          stroke={iconStyle.color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.247 18.9992L11.2482 19L11.2899 18.974C12.541 18.1938 13.9136 17.7196 15.3247 17.58C16.7359 17.4404 18.1565 17.6383 19.5009 18.1617L21.4773 18.9311V2.46392L19.5 1.69416C18.1556 1.17081 16.7351 0.972982 15.324 1.1126C13.9129 1.25222 12.5405 1.72639 11.2894 2.50654L11.2474 2.53279"
          stroke={iconStyle.color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2299 18.9992L11.2287 19L11.188 18.974C8.71485 17.3964 5.77471 17.0256 3.03453 18.0031L1.01498 18.7139L1.0146 2.24914L3.03496 1.5381C5.80264 0.561938 8.71543 0.93095 11.1885 2.50653L11.2294 2.53279"
          stroke={iconStyle.color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-semibold ml-6" style={{ color: themeColors.text }}>Udemy</p>
    </div>
  );
};

export default MorphIcon;
