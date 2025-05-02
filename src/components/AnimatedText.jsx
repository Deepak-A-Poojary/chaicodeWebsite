import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useThemeStore from "../store/themeStore";

const AnimatedText = ({ text, className }) => {
  const headingRef = useRef(null);
  const theme = useThemeStore((state) => state.theme);

  useGSAP(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        ease: "power3.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      letters,
      {
        filter: "blur(15px)",
      },
      {
        filter: "blur(0px)",
        stagger: 0.07,
        ease: "power3.out",
        duration: 0.7,
      }
    );
  }, []);

  const renderAnimatedText = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="word inline-block mr-2 ">
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className={`letter font-['Outfit'] inline-block ${
              theme == "dark"
                ? "title-text-gradien-fordark "
                : "title-text-gradien-forlight"
            }`}
          >
            {letter}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div
      ref={headingRef}
      className={`flex flex-wrap justify-center text-4xl md:text-6xl font-bold leading-snug text-center ${className}`}
    >
      {renderAnimatedText(text)}
    </div>
  );
};

export default AnimatedText;
