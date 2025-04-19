import { useRef } from "react";
import gsap from "gsap";

const ButtonText = ({ className = "", text ="text" }) => {
  const lettersRef = useRef([]);  

  const handleHover = () => {
    gsap.fromTo(
      lettersRef.current,
      { y: 5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`px-4 flex font-semibold rounded-md wrap-normal py-2 cursor-pointer justify-center duration-250 bg-amber-700 transition-all hover:bg-amber-800 text-white ${className}`}
    >
      {text.split("").map((char, i) => (
        <span key={i} ref={(el) => (lettersRef.current[i] = el)}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default ButtonText;
