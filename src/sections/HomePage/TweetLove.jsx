import { useThemeColors } from "../../hooks/useThemeColors";
import AnimatedAuroraText from "../../constants/AnimatedAuroraText";
import TweetCard from "../../constants/TweetCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsive from "../../hooks/useResponsive";
import PixelArtButton from "../../constants/PixelArtButton";
import Divider from "../../constants/Divider";
import { useEffect, useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

// Only ids are enoguh to render the tweets 
const TWEET_IDS = [
  "1906393735203836076",
  "1906390359841640771",
  "1905574126112153860",
  "1907045909394788416",
];

// Helper: Get random tweet IDs
const getRandomTweetIds = (count = 3) => {
  return [...TWEET_IDS].sort(() => 0.5 - Math.random()).slice(0, count);
};

// Helper: Animate with ScrollTrigger
const animateTweetCard = (selector, options) => {
  gsap.from(selector, {
    ...options,
    scrollTrigger: {
      trigger: selector,
      scroller: "body",
      start: "top 90%",
      end: "top 40%",
      scrub: 2,
      ...options.scrollTrigger,
    },
  });
};

const TweetLove = () => {
  const themeColors = useThemeColors();
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const randomTweetIds = useMemo(() => getRandomTweetIds(isTablet?2:3), []);

  useEffect(() => {
    if (isMobile) {
      animateTweetCard(".tweetCardOne", {
        translateX: -445,
        duration: 1,
        delay: 0.5,
        rotate: 10,
        opacity: 1,
      });
      animateTweetCard(".tweetCardTwo", {
        translateX: -445,
        duration: 0.5,
        delay: 0.5,
        rotate: 10,
        opacity: 1,
        scrollTrigger: { scrub: 2 },
      });
      animateTweetCard(".tweetCardThree", {
        translateX: -445,
        duration: 0.5,
        delay: 0.5,
        rotate: 10,
        opacity: 1,
        scrollTrigger: { scrub: 2 },
      });
    }

    if (isTablet) {
      animateTweetCard(".tweetCardOne", {
        translateX: -445,
        duration: 1,
        opacity: 1,
        ease: "power3.out",
      });

      animateTweetCard(".tweetCardTwo", {
        translateX: 445,
        duration: 1,
        opacity: 1,
        ease: "power3.out",
      });
    }

    if (isDesktop) {
      animateTweetCard(".tweetCardOne", {
        translateX: 445,
        duration: 1,
        delay: 0.5,
        rotate: -10,
        opacity: 1,
        scrollTrigger: {
          trigger: ".tweetCards",
          start: "top 80%",
        },
      });

      animateTweetCard(".tweetCardThree", {
        translateX: -445,
        duration: 1,
        delay: 0.5,
        rotate: 10,
        opacity: 1,
        scrollTrigger: {
          trigger: ".tweetCards",
          start: "top 80%",
        },
      });
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div
      className="text-center pt-10 overflow-hidden"
      style={{ background: themeColors.secondryBg }}
    >
      <Divider className="mt-5" />
      <p className="pt-5">Love that we get from our community</p>
      <AnimatedAuroraText
        text="Tweet Love"
        className="md:h-16 mt-5 md:text-5xl"
      />

      <div
        id="tweetContainer"
        className="min-h-screen flex md:flex-row flex-wrap flex-col items-center justify-center p-4 gap-10"
      >
        {randomTweetIds.map((id, idx) => (
          <div
            key={id}
            className={`tweetCards tweetCard${["One", "Two", "Three"][idx]}`}
          >
            <TweetCard tId={id} />
          </div>
        ))}
      </div>

      <PixelArtButton
        to="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
        text="Join Cohorts Live Classes"
        className="text-md mt-5 md:mt-0 md:text-xl p-5"
        svg={
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
            className="lucide lucide-external-link ml-2 h-4 w-4"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
        }
      />
      <Divider className="my-15" />
    </div>
  );
};

export default TweetLove;
