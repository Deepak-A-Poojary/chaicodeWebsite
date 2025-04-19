import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function StudentProof() {
  const containerRef = useRef(null);
  const tweenRef = useRef(null);

  //Below code is used to animate the logo's
  useGSAP(() => {
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
  }, []);

  //Below handlers is used to hover effect
  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div className="text-center flex flex-col items-center gap-10 font-semibold p-5">
      <p className="text-md md:text-xl px-5 md:max-w-[60%] ">
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
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="logo-card rounded-xl overflow-hidden relative cursor-pointer border-2 h-40 aspect-square border-amber-200 transition-all duration-300 group-hover:blur-[3px] hover:border-amber-600 hover:!blur-none hover:scale-102"
            >
              <div className="w-full h-full flex items-center justify-center text-xl font-bold">
                Logo {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Divider /> */}
    </div>
  );
}

export default StudentProof;
