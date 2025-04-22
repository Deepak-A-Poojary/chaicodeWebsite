import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function TopicsOnCloud(
  { topics = [1, 2, 3, 4, 5], direction = "left" },
  animationSpeed = 30
) {
  const containerRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
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
    <div className="text-center flex flex-col items-center gap-10 font-semibold">
      <div
        className="w-full overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef}
          className="flex gap-10 w-max logo-carousel group "
        >
          {[...topics, ...topics].map((logo, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden relative cursor-pointer border-2 h-10 w-40 border-amber-200 transition-all duration-300 group-hover:blur-[3px] hover:border-amber-600 hover:!blur-none hover:scale-102"
            >
              <div className="w-full h-full flex items-center justify-center text-xl font-bold">
                Logo {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicsOnCloud;
