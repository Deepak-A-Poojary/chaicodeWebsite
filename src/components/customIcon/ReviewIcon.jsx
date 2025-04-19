import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";

function ReviewIcon({style, iconStyles}) {
  const starRef = useRef(null);
  const containerRef = useRef(null);
  const themeColors = useThemeColors()
  const iconStyle = iconStyles
  

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(starRef.current, {
      x: -1,
      rotate: 145,
      duration: 0.3,
      ease: "power2.out",
    });

    const container = containerRef.current;
    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        color: "#ffffff",
        cursor: "pointer",
      }}
    >
      <svg
        ref={starRef}
        width="18"
        height="17"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3128 1.63864C10.6337 0.794606 11.8441 0.794607 12.165 1.63865L14.2351 7.3726C14.3799 7.75336 14.7489 8.00562 15.1612 8.00562H20.2479C21.1872 8.00562 21.5975 9.17592 20.859 9.74832L17.2389 13.0056C16.9056 13.2639 16.7762 13.7031 16.9173 14.0974L18.2389 19.7007C18.5607 20.5999 17.518 21.3735 16.7314 20.8192L11.8138 17.7002C11.4699 17.4579 11.0079 17.4579 10.664 17.7002L5.74649 20.8192C4.95982 21.3735 3.91719 20.5999 4.23894 19.7007L5.56055 14.0974C5.70164 13.7031 5.57228 13.2639 5.23894 13.0056L1.61888 9.74832C0.880299 9.17592 1.29066 8.00562 2.22994 8.00562H7.31661C7.7289 8.00562 8.09793 7.75336 8.2427 7.3726L10.3128 1.63864Z"
          stroke={iconStyle.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-semibold" style={style}>Reviews</p>
    </div>
  );
}

export default ReviewIcon;
