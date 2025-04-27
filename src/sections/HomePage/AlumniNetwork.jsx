import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { useThemeColors } from "../../hooks/useThemeColors";
import useStore from "../../store/themeStore";

const allTopics = [
  "Jobs",
  "Events",
  "Discussion",
  "Spotlight",
  "Connect",
  "Showcase",
];

const planetAngles = {
  Jobs: 0,
  Events: Math.PI / 3,
  Discussion: (2 * Math.PI) / 3,
  Spotlight: Math.PI,
  Connect: (4 * Math.PI) / 3,
  Showcase: (5 * Math.PI) / 3,
};

const topicAssignments = {
  Jobs: 1,
  Connect: 1,
  Discussion: 1,
  Events: 2,
  Showcase: 1,
  Spotlight: 2,
};

const AlumniNetwork = () => {
  const containerRef = useRef(null);
  const topicRefs = useRef([]);
  const speedFactor = 0.2;
  const { isMobile, isTablet, isSmall } = useResponsive();
  const sunRadius = isMobile ? 30 : 50;
  const orbitRadii = [50, 120, 190];
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);

  //this width and height is used to size solor system container
  const width = isMobile ? 350 : isTablet ? 500 : 800;
  const height = 400;

  // This is used to animate the solar system
  useEffect(() => {
    const centerX = width / 2;
    const centerY = height / 2;

    const animate = () => {
      const time = Date.now() * 0.001 * speedFactor;

      allTopics.forEach((topic, index) => {
        const el = topicRefs.current[index];
        if (!el) return;

        const orbitIndex = topicAssignments[topic];
        const radius = orbitRadii[orbitIndex];
        const baseAngle = planetAngles[topic] || 0;
        const orbitalSpeed = 0.1 + orbitIndex * 0.05;
        const finalAngle = baseAngle + time * orbitalSpeed;

        const x = centerX + radius * Math.cos(finalAngle) - el.offsetWidth / 2;
        const y = centerY + radius * Math.sin(finalAngle) - el.offsetHeight / 2;

        gsap.set(el, { x, y, opacity: 1 });
      });
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
    };
  }, [width, height, speedFactor, topicAssignments, orbitRadii, planetAngles]);

  return (
    <div
      className="mt-10 grid grid-cols-1 p-5 md:grid-cols-2 w-full h-full bg-black overflow-hidden"
      style={{ background: themeColors.AlumniBgColor }}
    >
      {/* Solor System theme */}
      <div
        className="relative solarSystemContainer"
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={containerRef}
      >
        {/* Orbital Paths with SVG */}
        <svg
          width={width}
          height={height}
          className="absolute left-0 top-0 opacity-20 z-0"
          style={{}}
        >
          {orbitRadii.map((radius, index) => {
            const dashLength = 10;
            const gapLength = 10;

            return (
              <circle
                key={`orbit-${index}`}
                cx={width / 2}
                cy={height / 2}
                r={radius}
                fill="none"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth={1}
                strokeDasharray={`${dashLength} ${gapLength}`}
              />
            );
          })}
        </svg>

        {/* Sun (Alumni text) */}
        <div
          className="absolute flex justify-center items-center text-black font-bold text-sm z-10 "
          style={{
            width: `${sunRadius * 2}px`,
            height: `${sunRadius * 2}px`,
            left: `${width / 2 - sunRadius}px`,
            top: `${height / 2 - sunRadius}px`,
            borderRadius: "9999px",
            backgroundColor: "radial-gradient(circle, '#facc15', 'black')",
          }}
        >
          <span className="absolute inset-0 rounded-full bg-yellow-500 animate-glow"></span>
          <span className="relative z-10">Alumni</span>
        </div>

        {/* Planets as Topics */}
        <div className="relative h-full w-full">
          {allTopics.map((topic, index) => (
            <div
              key={index}
              ref={(el) => (topicRefs.current[index] = el)}
              className="absolute rounded-full text-black text-xs font-medium flex justify-center items-center opacity-0 z-20 h-fit aspect-square transition-colors duration-500"
              style={{
                padding: "0.5rem 0.75rem",
                background: themeColors.alumniPlanentBg,
                color: theme === "light" ? "white" : "black",
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Column for Alumni Text */}
      <div className="flex flex-col justify-center items-center text-center p-6 z-20 text-white">
        <h2
          className="text-3xl font-bold  mb-4"
          style={{ color: theme === "dark" ? "#67e8f9" : "#033e45" }}
        >
          Welcome to the Alumni Galaxy
        </h2>
        <p
          style={{ color: theme === "dark" ? "#f6feff" : "#5d7072" }}
          className=" text-sm leading-relaxed mb-6"
        >
          A connected universe for all alumni and students. Explore
          collaborative opportunities, showcase projects, participate in events,
          and access curated job listings. Your journey through this network can
          be as expansive as the stars.
        </p>

        <div className="flex space-x-4">
          <Link
            to={"http://alumni.chaicode.com/"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetwork;
