import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedAuroraText = ({ text, className }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const tween = gsap.to(textRef.current, {
      backgroundPosition: "200% 50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);
  return (
    <h1
      ref={textRef}
      className={`text-gradient leading-[1.5] text-3xl font-bold text-center ${className}`}
    >
      {text}
    </h1>
  );
};

export default AnimatedAuroraText;
