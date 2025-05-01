import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ExploreTextButton,
  AnimatedAuroraText,
  AnimatedText,
  PixelArtButton,
} from "../../components/CompIndex";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cursorRef = useRef();
  const themeColors = useThemeColors();
  const heroRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  //Below is used to animate cursor animation
  useGSAP(() => {
    const heroEl = heroRef.current;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        const offset = 50; // Half of 500px
        gsap.to(cursorRef.current, {
          x: e.clientX - offset - 200,
          y: e.clientY - offset - 270,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    if (heroEl) {
      heroEl.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener("mousemove", moveCursor);
      }
    };
  }, []);

  // Below code used to animate main text
  useGSAP(() => {
    const fromTween = gsap.from(".heroTextRef", {
      y: 5,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: {
        from: "start",
        amount: 0.5,
      },
    });
    const toTween = gsap.to(".heroTextRef", {
      y: 5,
      duration: 0.5,
      delay: 1,
      stagger: {
        from: "start",
        amount: 0.5,
      },
    });
    return () => {
      fromTween.kill();
      toTween.kill();
    };
  }, []);

  // Below animation is used to animate "latestVideo"
  useGSAP(() => {
    const videoTween = gsap.to("#latestVideo", {
      y: 20,
      duration: 0.5,
      delay: 0.5,
      opacity: 1,
      scale: 1.1,
      scrollTrigger: {
        trigger: "#latestVideo",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 40%",
      },
    });
    return () => {
      videoTween.kill();
    };
  }, []);

  //Extra tags data
  const buttonData = [
    {
      text: "Peer learning",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users h-5 w-5 "
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      text: "Code reviews",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-git-pull-request h-5 w-5"
        >
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" x2="6" y1="9" y2="21"></line>
        </svg>
      ),
    },
    {
      text: "Virtual hostel",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-video h-5 w-5"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
          <rect x="2" y="6" width="14" height="12" rx="2"></rect>
        </svg>
      ),
    },
    {
      text: "Doubt sessions",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-square h-5 w-5"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      text: "Bounties",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sparkles h-5 w-5"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="pb-15 md:pb-20 relative"
      id="heroSection"
      ref={heroRef}
      style={{
        background: themeColors.background,
        color: themeColors.text,
      }}
    >
      {/* This is a background cursor animation div */}
      <div className="absolute  w-[100vw] h-2/1 overflow-hidden">
        <div
          className="sticky pointer-events-none w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] top-0 left-0"
          style={{
            background: themeColors.cursorBg,
            transform: "translateX(50px) translateY(-50px)",
            willChange: "transform",
          }}
          ref={cursorRef}
        ></div>
      </div>
      {/* Hero text contents */}
      <div className="z-1 flex flex-col p-2 items-center gap-10">
        <div
          className="heroTextRef text-[12px] mt-10 md:text-[14px] font-semibold flex gap-1 border-2 p-2 px-5 rounded-md"
          style={{
            borderColor: themeColors.borderColor,
          }}
        >
          Trusted by 1.5 M Code Learners
          <svg
            className="w-4 md:w-5 h-4 md:h-5 text-orange-500 animate-pulse place-self-center"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </div>
        <div className="place-items-center text-4xl md:text-6xl font-semibold w-60 md:w-full">
          <AnimatedText text={"Consistency and Community"} className={""} />
        </div>
        <div className="heroTextRef text-2xl text-center font-semibold">
          <AnimatedAuroraText
            text={"An unmatched Learning Experience for coding courses."}
            className="md:h-16 text-lg lg:text-2xl"
          />
        </div>
        <p
          className="heroTextRef text-sm text-center md:max-w-[60vw] font-semibold"
          style={{ color: themeColors.secondryText }}
        >
          Content is everywhere, but we provide a learning experience that is
          unmatched - bounties, peer learning, code reviews, virtual hostel,
          alumni network, doubt sessions, and group projects.
        </p>
      </div>
      {/* extra tags */}
      <div className="flex justify-center mt-10 md:mt-15 gap-4 flex-wrap p-1">
        {buttonData.map((button, index) => (
          <PixelArtButton
            key={index}
            text={button.text}
            svg={button.svg}
            className={"text-[10px] md:p-3 p-2 md:text-sm"}
          />
        ))}
      </div>
      {/* Live cohort button */}
      <div className="flex justify-center mt-10 md:*:mt-5 gap-4">
        <ExploreTextButton
          label="visit to view all course sections"
          to={"https://courses.chaicode.com/learn/view-all?show=batch&type=17"}
          svg={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="stroke-current z-10"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          }
        />
      </div>
      {/* Latest video section */}
      <div className="flex justify-center z-1 mt-10 md:mt-15 ">
        <div
          className="self-center relative justify-center w-fit"
          id="latestVideo"
        >
          {!iframeLoaded && (
            <div className="absolute inset-0 bg-gray-500/50 animate-pulse z-20 rounded-2xl" />
          )}
          <iframe
            width=""
            onLoad={() => setIframeLoaded(true)}
            loading="lazy"
            className="flex relative justify-center rounded md:rounded-xl w-[80dvw] md:w-[764px] aspect-video"
            src="https://www.youtube-nocookie.com/embed/VNb_LawBBWU?si=_N7VN-ZwBQ6CIMRP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
