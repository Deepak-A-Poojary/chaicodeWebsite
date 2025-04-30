import { useEffect, useMemo } from "react";
import { useThemeColors } from "../../hooks/useThemeColors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TweetCard,
  AnimatedAuroraText,
  Divider,
  PixelArtButton,
} from "../../components/CompIndex";
import { TWEET_IDS_FOR_TWEETLOVE } from "../../constants/contentData";

gsap.registerPlugin(ScrollTrigger);

// Only ids are enoguh to render the tweets

const animateTweetCard = (selector, options) => {
  gsap.from(selector, {
    ...options,
    scrollTrigger: {
      trigger: selector,
      scroller: "body",
      scrub: 2,
      ...options.scrollTrigger,
    },
  });
};

const TweetLove = () => {
  const themeColors = useThemeColors();

  const randomTweetIds = useMemo(() => {
    return [...TWEET_IDS_FOR_TWEETLOVE]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, []);

  useEffect(() => {
    animateTweetCard(".tweetCards", {
      translateY: 100,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".tweetCards",
        start: "top 90%",
        end: "top 70%",
      },
    });
  }, []);

  return (
    <div
      className="text-center overflow-hidden"
      style={{ background: themeColors.secondryBg }}
    >
      <Divider className="" />
      <p className="pt-5 text-sm md:text-base ">
        Love that we get from our community
      </p>
      <AnimatedAuroraText
        text="Tweet Love"
        className="md:h-16 mt-0 text-4xl md:text-5xl "
      />

      <div
        id="tweetContainer"
        className=" h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 gap-5 lg:gap-10 justify-items-center"
      >
        {randomTweetIds.map((id) => (
          <div key={id} className={`tweetCards`}>
            <TweetCard tweetId={id} />
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
      <Divider className="mt-10" />
    </div>
  );
};

export default TweetLove;
