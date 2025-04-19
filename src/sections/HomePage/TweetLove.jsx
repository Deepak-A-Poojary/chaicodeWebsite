import { useThemeColors } from "../../hooks/useThemeColors";
import AnimatedAuroraText from "../../constants/AnimatedAuroraText";
import TweetCard from "../../constants/TweetCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsive from "../../hooks/useResponsive";
import PixelArtButton from "../../constants/PixelArtButton";
import Divider from "../../constants/Divider";

gsap.registerPlugin(ScrollTrigger);

const TweetLove = () => {
  const themeColors = useThemeColors();
  const { isMobile, isDesktop, isTablet } = useResponsive();

  //All random tweets ids
  const returnThreeTweetIds = () => {
    const tweetIds = [
      "1906393735203836076",
      "1906390359841640771",
      "1905574126112153860",
      "1907045909394788416",
    ];

    // Shuffle and pick 3
    const getRandomIds = (arr, count) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    return getRandomIds(tweetIds, 3);
  };

  useGSAP(() => {
    const cardAnimation = gsap.context(() => {
      if (isMobile) {
        gsap.from(".tweetCardOne", {
          translateX: -445,
          duration: 1,
          delay: 0.5,
          opacity: 1,
          rotate: 10,
          scrollTrigger: {
            trigger: ".tweetCardOne",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
        gsap.from(".tweetCardTwo", {
          translateX: -445,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          rotate: 10,
          scrollTrigger: {
            trigger: ".tweetCardTwo",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
        gsap.from(".tweetCardThree", {
          translateX: -445,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          rotate: 10,
          scrollTrigger: {
            trigger: ".tweetCardThree",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
      }

      if (isTablet) {
        gsap.from(".tweetCardOne", {
          translateX: -445,
          duration: 1,
          delay: 0.5,
          opacity: 1,
          rotate: 10,
          scrollTrigger: {
            trigger: ".tweetCardOne",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
        gsap.from(".tweetCardTwo", {
          translateX: 445,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          rotate: -10,
          scrollTrigger: {
            trigger: ".tweetCardTwo",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
        gsap.from(".tweetCardThree", {
          translateY: 445,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".tweetCardThree",
            scroller: "body",
            scrub: 2,
            start: "top 90%",
            end: "top 40%",
          },
        });
      }

      if (isDesktop) {
        gsap.from(".tweetCardOne", {
          translateX: 445,
          duration: 1,
          delay: 0.5,
          opacity: 1,
          rotate: -10,
          scrollTrigger: {
            trigger: ".tweetCards",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 40%",
          },
        });
        gsap.from(".tweetCardThree", {
          translateX: -445,
          duration: 1,
          delay: 0.5,
          opacity: 1,
          rotate: 10,
          scrollTrigger: {
            trigger: ".tweetCards",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 40%",
          },
        });
      }
    });

    return () => cardAnimation.revert(); // ✅ Proper cleanup for all tweens and ScrollTriggers
  }, []);

  const randomTweetIds = returnThreeTweetIds();

  return (
    <div
      className="text-center pt-10 overflow-hidden"
      style={{ background: themeColors.secondryBg }}
    >
      <Divider className="mt-5" />
      <p className="pt-5">Love that we get from our community</p>
      <AnimatedAuroraText
        text={"Tweet Love"}
        className="md:h-16 mt-5 md:text-5xl"
      />
      <div
        id="tweetContainer"
        className="min-h-screen flex md:flex-row flex-wrap flex-col items-center justify-center p-4 gap-10"
      >
        <div className="tweetCards tweetCardOne">
          <TweetCard tId={randomTweetIds[0]} />
        </div>
        <div className="tweetCards tweetCardTwo">
          <TweetCard tId={randomTweetIds[1]} />
        </div>
        <div className="tweetCards tweetCardThree">
          <TweetCard tId={randomTweetIds[2]} />
        </div>
      </div>
      <PixelArtButton
        to={"https://courses.chaicode.com/learn/view-all?show=batch&type=17"}
        text={"Join Cohorts Live Classes"}
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
