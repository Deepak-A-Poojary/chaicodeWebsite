import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useResponsive from "../hooks/useResponsive"; // Importing your custom hook
import { useGSAP } from "@gsap/react";

const AnimatedText = ({ text, className }) => {
  const containerRef = useRef(null);
  const { isMobile } = useResponsive();

  useGSAP(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        ease: "power3.out",
        duration: 0.6,
        delay: 1,
      }
    );
  }, [text]);

  const words = text.split(" ");

  return (
    <div className={`flex justify-center items-center h-full ${className}`}>
      <h1
        ref={containerRef}
        className={`flex flex-wrap justify-center ${
          isMobile ? "flex-col text-center" : "flex-row text-left "
        } font-bold leading-snug`}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className={` ${isMobile ? "flex justify-center" : "mr-4"}`}
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="letter inline-block leading-8">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
