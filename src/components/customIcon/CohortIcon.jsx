import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";

const CohortIcon = () => {
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const containerRef = useRef(null);
  const themeColors = useThemeColors()
  const iconStyle = {
    color: themeColors.secondryText
  }


  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(leftRef.current, {
      x: -1,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        rightRef.current,
        {
          x:1,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        centerRef.current,
        {
          scaleY: 1.6,
          rotate: 180,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      );

    const container = containerRef.current;
    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.1rem",
        cursor: "pointer",
      }}
    >
      <span
        ref={leftRef}
        style={{ display: "inline-block", color:iconStyle.color }}
      >
        &lt;
      </span>
      <span
        ref={centerRef}
        className="text-[0.6em] font-semibold "
        style={{ display: "inline-block", color:iconStyle.color }}
      >
        /
      </span>
      <span
        ref={rightRef}
        style={{ display: "inline-block", color:iconStyle.color }}
      >
        &gt;
      </span>
      <p className="font-semibold ml-1"style={{color:themeColors.text}}>Cohorts</p>
    </div>
  );
};

export default CohortIcon;
