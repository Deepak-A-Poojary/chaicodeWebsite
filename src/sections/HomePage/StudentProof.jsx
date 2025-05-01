import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useThemeColors } from "../../hooks/useThemeColors";
import { STUDENT_PROOF } from "../../constants/studentData";

function StudentProof() {
  const containerRef = useRef(null);
  const tweenRef = useRef(null);
  const themeColors = useThemeColors();
  const sectionRef = useRef(null);
  const direction = "left";
  const animationSpeed = 60;

  useEffect(() => {
    const container = containerRef.current;
    let fromXPercent;
    let toXPercent;

    if (direction?.toLowerCase() === "left") {
      fromXPercent = -50;
      toXPercent = 0;
    } else if (direction?.toLowerCase() === "right") {
      fromXPercent = 0;
      toXPercent = -50;
    } else {
      fromXPercent = -50;
      toXPercent = 0;
    }

    gsap.set(container, { xPercent: fromXPercent });

    tweenRef.current = gsap.to(container, {
      xPercent: toXPercent,
      duration: animationSpeed,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [direction]);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div
      ref={sectionRef}
      className="text-center flex flex-col items-center gap-10 font-semibold mt-5"
    >
      <p className="text-md md:text-xl px-5 md:max-w-[60%] p-5">
        Our students are not only working at top tech companies, but are also
        becoming founders of funded startups and creators of innovative products
      </p>
      <div
        className="w-full overflow-hidden py-6 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef}
          className="flex gap-10 w-max px-4 logo-carousel group"
        >
          {[...STUDENT_PROOF, ...STUDENT_PROOF].map((student, index) => (
            <Link
              aria-label={`visit to view ${student.name} page`}
              key={index}
              to={student.URL}
              style={{
                background: themeColors.topicsCardBg,
              }}
              className="rounded-xl overflow-hidden relative cursor-pointer border-2 border-transparent transition-transform duration-300 group-hover:blur-[3px] hover:border-amber-600 hover:!blur-none hover:scale-102"
            >
              <div className="flex items-center justify-center h-20 text-lg shadow">
                <img
                  src={student.logo}
                  alt=""
                  className="w-60 object-contain object-center"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentProof;
