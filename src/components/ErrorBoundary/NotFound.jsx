import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";
import useResponsive from "../../hooks/useResponsive";
import AnimatedAuroraText from "../../constants/AnimatedAuroraText";
import PixelArtButton from "../../constants/PixelArtButton";
import { useLocation } from "react-router-dom";
import useStore from "../../store/themeStore";

const NotFound = () => {
  const [displayText, setDisplayText] = useState("");
  const cursorRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container to append glitch text inside
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);
  const { isMobile } = useResponsive();
  const location = useLocation();
  const missingPath = location?.pathname ?? "/unknown";

  const cleanedPath =
    `/${missingPath?.replace(/^\/+|\/+$/g, "")}` || "unknown-path";

  const errorLines = [
    `> error 404: page '${cleanedPath}' not found`,
    "> suggestion: try navigating to home",
  ];
  console.log("Current path:", location.pathname);
  const randomTexts = [
    "const renderTweets = () => {};",
    "function loadUserData() {}",
    "let data = fetchData();",
    "if (error) console.log('Error');",
    "const animatePage = () => {}",
    "let response = await fetch('/api');",
    "const parseJSON = (str) => JSON.parse(str);",
    "document.getElementById('root');",
    "const addEventListeners = () => {}",
    "let inputData = validateInput();",
  ];

  const generateRandomPosition = () => {
    const container = containerRef.current;
    const width = container?.offsetWidth || window.innerWidth;
    const height = container?.offsetHeight || window.innerHeight;
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y };
  };

  useEffect(() => {
    let commandTimeout;
    let errorTimeout;

    let currentText = "";

    const typeCommand = (text, callback) => {
      let index = 0;
      commandTimeout = setInterval(() => {
        if (index < text.length) {
          currentText += text[index];
          setDisplayText(currentText);
          index++;
        } else {
          clearInterval(commandTimeout);
          if (callback) callback();
        }
      }, 100);
    };

    const showErrors = () => {
      let line = 0;

      const typeNextLine = () => {
        if (line < errorLines.length) {
          typeCommand(`\n${errorLines[line]}`, () => {
            line++;
            typeNextLine();
          });
        }
      };

      typeNextLine();
    };

    typeCommand(`> npm search missing-page "${cleanedPath}"`, showErrors);

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    const createGlitchText = () => {
      if (!containerRef.current) return;

      const selectedTexts = [...randomTexts]
        .sort(() => 0.5 - Math.random()) // shuffle
        .slice(0, 5); // take only 5

      selectedTexts.forEach((text) => {
        const { x, y } = generateRandomPosition();
        const glitchText = document.createElement("div");
        glitchText.classList.add("glitch-text");
        glitchText.innerText = text;
        glitchText.style.position = "absolute";
        glitchText.style.left = `${x}px`;
        glitchText.style.top = `${y}px`;
        glitchText.style.color = theme == " light" ? "#723f00" : "#FF8C00";
        glitchText.style.opacity =
          theme === "light" ? 1 : 0.2 + Math.random() * 0.3;
        glitchText.style.fontFamily = "'Courier New', monospace";
        glitchText.style.fontSize = isMobile ? "12px" : "18px";
        glitchText.style.pointerEvents = "none";
        glitchText.style.zIndex = "1";

        containerRef.current.appendChild(glitchText);

        gsap.to(glitchText, {
          x: `+=${Math.random() * 100 - 50}`,
          y: `+=${Math.random() * 100 - 50}`,
          opacity: 0.5,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      });
    };

    createGlitchText();

    return () => {
      const glitchTexts =
        containerRef.current?.querySelectorAll(".glitch-text") || [];
      glitchTexts.forEach((el) => el.remove());
      clearInterval(commandTimeout);
      clearInterval(errorTimeout);
    };
  }, [themeColors.secondary]);

  return (
    <div
      ref={containerRef}
      className="top-0 min-h-[100vh] w-full flex flex-col items-center gap-10 justify-center py-4 overflow-hidden p-10"
    >
      {/* 404 Header */}
      <div className="text-center text-5xl font-semibold z-10">
        <AnimatedAuroraText text="404" className={"text-9xl"} />
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg shadow-2xl text-white font-mono border border-zinc-700 overflow-hidden z-10">
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] h-8 flex items-center px-3 space-x-2">
          <span className="h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-sm font-semibold md:text-lg leading-relaxed">
          <pre className="whitespace-pre-wrap">
            {displayText}
            <span
              ref={cursorRef}
              className="inline-block w-2 h-5 bg-white ml-1"
            ></span>
          </pre>
        </div>
      </div>

      {/* Home Link */}
      <div className="text-center z-10">
        <PixelArtButton text="Return to home" className="text-xl p-3" to={"/"} />
      </div>
    </div>
  );
};

export default NotFound;
