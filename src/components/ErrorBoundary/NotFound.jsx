import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";
import useResponsive from "../../hooks/useResponsive";
import { useLocation } from "react-router-dom";
import useStore from "../../store/themeStore";
import { PixelArtButton, AnimatedAuroraText } from "../../components/CompIndex";

const NotFound = () => {
  const [displayText, setDisplayText] = useState("");
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);
  const { isMobile } = useResponsive();
  const location = useLocation();

  const randomTexts = [
    "const render404 = () => console.warn('Aliens took it 👽');",
    "function lostInSpace() { throw '404: User gone 🚀'; }",
    "let data = null; // 404 snack 🥪",
    "if (!pageFound) console.log('Not here 🔍');",
    "const animate404 = () => console.log('Lost dreams 💫');",
    "let res = await fetch('/missing'); // 🤷‍♂️",
    "parse404 = str => str.includes('404') ? 'Nice try 😎' : str;",
    "document.getElementById('404') || console.error('Poof 💨');",
    "add404Handlers = () => alert('Try yelling 📣');",
    "let cry = getCryingEmoji(); // 404 feels 😢",
    "try { page.load() } catch(e) { console.error('Page eloped ✈️'); }",
    "const lost = true; if (lost) console.log('404 found confusion 🤯');",
    "await rescue404(); // sending backup 🛟",
    "let signal = weak(); // Can't reach the page 📡",
    "404Handler.register('OopsFactory'); // Oops overload 😅",
    "if (404) console.warn('Oops... Wrong portal 🌀');",
    "const map = new TreasureMap(); map.find('404'); // X not found 🗺️",
    "System.out.println('404: Human error 👤');",
    "upload('new_page') || console.error('Still 404 🚫');",
    "throw new Error('Lost in 404 wilderness 🌲');",
    "console.info('Page packed its bags 🎒');",
    "statusCheck().then(res => res || 'Lost signal 🔦');",
    "class Lost404 extends Error {}; // professional missing 😎",
  ];

  const missingPath = location?.pathname ?? "/unknown";
  const cleanedPath =
    `/${missingPath?.replace(/^\/+|\/+$/g, "")}` || "unknown-path";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const errorLines = [
    `> error 404: page '${cleanedPath}' not found`,
    "> suggestion: try navigating to home",
  ];
  useEffect(() => {
    let commandTimeout;
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

    return () => {
      clearInterval(commandTimeout);
    };
  }, [themeColors.secondary]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = {
      light: "#723f00",
      dark: "#FF8C00",
    };

    // Generate floating text objects
    const texts = [...randomTexts]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
      .map(() => ({
        text: randomTexts[Math.floor(Math.random() * randomTexts.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: 0.2 + Math.random() * 0.5,
        fontSize: isMobile ? 8 + Math.random() * 8 : 10 + Math.random() * 10,
        color: theme === "light" ? colors.light : colors.dark,
      }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      texts.forEach((t) => {
        ctx.globalAlpha = t.opacity;
        ctx.fillStyle = t.color;
        ctx.font = `${t.fontSize}px 'Courier New', monospace`;
        ctx.fillText(t.text, t.x, t.y);

        t.x += t.dx;
        t.y += t.dy;

        // Bounce off edges
        if (t.x < 0 || t.x > canvas.width) t.dx *= -1;
        if (t.y < 0 || t.y > canvas.height) t.dy *= -1;
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme, isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative top-0 min-h-[100vh] w-dvw flex flex-col items-center gap-10 justify-center py-4 overflow-hidden p-10"
    >
      {/* Canvas for Glitch Texts */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* 404 Header */}
      <div className="text-center text-5xl font-semibold z-10">
        <AnimatedAuroraText text="404" className={"text-9xl"} />
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-xl bg-[#1e1e1e] rounded-lg shadow-2xl text-white font-mono border border-zinc-700 overflow-hidden z-10">
        <div className="bg-[#2d2d2d] h-8 flex items-center px-3 space-x-2">
          <span className="h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
        </div>
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

      {/* Home Button */}
      <div className="text-center z-10">
        <PixelArtButton
          text="Return to home"
          className="text-xl p-3"
          to={"/"}
        />
      </div>
    </div>
  );
};

export default NotFound;
