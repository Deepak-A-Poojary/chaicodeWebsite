import React, { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useThemeColors } from "../hooks/useThemeColors";

const BenefitCard = React.memo(
  ({
    title = "Taught by Professionals",
    description = "Our cohorts are being taught by top industry experts and educators",
    codeSnippet = "class Teacher extends Professional { /* ... */ }",
    imageUrl = "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=500&h=500&fit=crop",
  }) => {
    const cardRef = useRef(null);
    const gradientRef = useRef(null);
    const gradientSize = 400;
    const themeColors = useThemeColors();
    const timeoutId = useRef(null);

    const debouncedHandleMouseMove = useCallback((e) => {
      const card = cardRef.current;
      const gradient = gradientRef.current;
      if (!card || !gradient) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(gradient, {
        x: x - gradientSize / 4,
        y: y - gradientSize / 2,
        ease: "power3.out",
        duration: 0.9,
        delay: 0.1,
      });
    }, []);

    const handleMouseMove = (e) => {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        debouncedHandleMouseMove(e);
      }, 0);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId.current);
      gsap.to(gradientRef.current, {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ background: themeColors.BenifitCardBgColor }}
        className="select-none rounded-xl max-w-sm w-full shadow-lg p-6 space-y-4   relative overflow-hidden group"
      >
        {/* GSAP mouse-follow gradient */}
        <div
          ref={gradientRef}
          className=" absolute group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full opacity-10 blur-[100px] top-0 left-0 "
          style={{
            width: gradientSize,
            height: gradientSize,
            background: themeColors.cursorCardBg,
            transform: "translate(0px, 0px)",
            willChange: "transform",
          }}
        ></div>

        {/* Header */}
        <div className="grid grid-cols-[25%_75%] items-start gap-3 mb-4 z-10">
          <div className="rounded-lg overflow-hidden w-full h-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="object-cover rounded-lg w-20 h-full"
            />
          </div>
          <div className="mr-2">
            <p className="text-[1.1em]   md:text-lg font-bold mb-2 text-orange-400">
              {title}
            </p>
            <p className="text-sm leading-relaxed font-['outfit']">
              {description}
            </p>
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-4 pt-4 border-t w-fit border-gray-800 z-10">
          <div
            className="rounded-md p-3 font-mono text-sm text-orange-400 overflow-x-auto"
            style={{
              background: themeColors.terminalBg,
            }}
          >
            {codeSnippet}
          </div>
        </div>
      </div>
    );
  }
);

export default BenefitCard;
