import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useThemeColors } from "../../hooks/useThemeColors";

const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function StudentProof() {
  const containerRef = useRef(null);
  const tweenRef = useRef(null);
  const themeColors = useThemeColors();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Ref for the section to observe

  // Intersection Observer to control visibility and start animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(sectionRef.current); // Observe only once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      tweenRef.current?.kill(); // Kill animation on unmount
    };
  }, []);

  // GSAP animation, now dependent on isVisible
  useEffect(() => {
    if (isVisible) {
      const container = containerRef.current;

      gsap.set(container, { xPercent: -50 });

      tweenRef.current = gsap.to(container, {
        xPercent: 0,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      return () => {
        tweenRef.current?.kill();
      };
    }
  }, [isVisible]); // Re-run effect when isVisible changes

  // Hover effect handlers
  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div
      ref={sectionRef} // Attach ref to the main section
      className="text-center flex flex-col items-center gap-10 font-semibold mt-5 p-5"
    >
      <p className="text-md md:text-xl px-5 md:max-w-[60%] ">
        Our students are not only working at top tech companies, but are also
        becoming founders of funded startups and creators of innovative products
      </p>
      {isVisible && (
        <div
          className="w-full overflow-hidden py-6 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={containerRef}
            className="flex gap-10 w-max px-4 logo-carousel group"
          >
            {[...logos, ...logos].map((logo, index) => (
              <Link
                key={index}
                style={{
                  background: themeColors.topicsCardBg,
                }}
                className="rounded-xl min-w-40 min-h-40 overflow-hidden relative cursor-pointer border-2 h-10 p-6 border-transparent transition-transform duration-300 group-hover:blur-[3px] hover:border-amber-600 hover:!blur-none hover:scale-102"
              >
                <div className="w-full h-full flex items-center justify-center text-lg shadow">
                  Logo card {logo}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentProof;
