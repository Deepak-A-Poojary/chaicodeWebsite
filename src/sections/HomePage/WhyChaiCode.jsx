import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import useStore from "../../store/themeStore";
import profile from "../../assets/profile.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChaiCode = () => {
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);
  const headingRef = useRef(null);

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
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: letters,
          scroller: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
        },
      }
    );
  }, []);

  const benefitsColumnOneData = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.",
    },
    {
      title: "You finish it",
      description:
        "Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.",
    },
    {
      title: "Industry Guests",
      description:
        "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.",
    },
  ];

  const benefitsColumnThreeData = [
    {
      title: "Code and Chill",
      description:
        "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.",
    },
    {
      title: "Improve Communication",
      description:
        "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.",
    },
    {
      title: "Bounties",
      description:
        "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It’s our way of keeping the motivation high and the learning fun.",
    },
  ];

  

  const letters = (headingText) => {
    return headingText.split("");
  };
  return (
    <div className="flex flex-col items-center mt-10 p-5 px-5 xl:px-25">
      <h1
        ref={headingRef}
        className="flex flex-wrap justify-center text-3xl md:text-5xl mb-2 md:mb-5 font-bold leading-snug text-center"
      >
        {letters("But Why ChaiCode ?").map((letter, index) => (
          <span key={index} className="letter inline-block leading-8">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 items-center mt-5">
        <div
          id="columnOne"
          className="order-2 md:order-1 w-full flex flex-col gap-6"
        >
          {benefitsColumnOneData.map((benefit, index) => (
            <div
              key={index}
              className="rounded-md p-2 shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
              style={{ background: themeColors.BenifitCardBgColor }}
            >
              <h1
                className="text-2xl font-semibold p-2"
                style={{ color: theme === "dark" ? "#67e8f9" : "#033e45" }}
              >
                {benefit.title}
              </h1>
              <p
                style={{ color: theme === "dark" ? "#f6feff" : "#5d7072" }}
                className=" text-sm leading-relaxed p-2"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div
          id="columnTwo"
          className="order-1 md:order-2 border-2 p-5 rounded-lg "
          style={{ borderColor: themeColors.borderColor }}
        >
          <div>
            <img className="rounded" src={profile} alt="" />
          </div>
          <h1
            className="text-2xl font-semibold p-2"
            style={{ color: theme == "dark" ? "#67e8f9" : "#033e45" }}
          >
            Hitesh Choudhary
          </h1>
          <p
            style={{ color: theme == "dark" ? "#f6feff" : "#5d7072" }}
            className=" text-sm leading-relaxed mb-6 p-2"
          >
            retired from corporate and full time YouTuber, x founder of LCO
            (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k & 470k),
            stepped into 43 countries.
          </p>
          <h1
            className="text-2xl font-semibold p-2"
            style={{ color: theme == "dark" ? "#67e8f9" : "#033e45" }}
          >
            Approach
          </h1>
          <p
            style={{ color: theme == "dark" ? "#f6feff" : "#5d7072" }}
            className=" text-sm leading-relaxed mb-6 p-2"
          >
            Project based courses with peer learning and bouties with many
            activities
          </p>
        </div>
        <div
          id="columnThree"
          className="order-3 md:order-3 w-full flex flex-col gap-6"
        >
          {benefitsColumnThreeData.map((benefit, index) => (
            <div
              key={index}
              className="rounded-md p-2 shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
              style={{ background: themeColors.BenifitCardBgColor }}
            >
              <h1
                className="text-2xl font-semibold p-2"
                style={{ color: theme === "dark" ? "#67e8f9" : "#033e45" }}
              >
                {benefit.title}
              </h1>
              <p
                style={{ color: theme === "dark" ? "#f6feff" : "#5d7072" }}
                className=" text-sm leading-relaxed p-2"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChaiCode;
