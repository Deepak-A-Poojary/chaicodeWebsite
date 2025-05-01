import React, { useEffect, useRef, useState } from "react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { Link } from "react-router-dom";
import { TopicsOnCloud } from "../../components/CompIndex";
import {
  TOPICS_FIRST_ROW,
  TOPICS_SECOND_ROW,
  TOPICS_THIRD_ROW,
  ENGLISH_CHANNEL_STATS,
  HINDI_CHANNEL_STATS,
} from "../../constants/index.js";

function YoutubeSection() {
  const themeColors = useThemeColors();

  const TopicSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(containerRef.current);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);

    return <div ref={containerRef}>{isVisible && children}</div>;
  };

  return (
    <div className="flex flex-col items-center font-['Outfit'] lg:p-10 p-2">
      <h2
        className="text-3xl lg:text-4xl font-bold font-['Outfit'] text-center"
        style={{
          color: themeColors.ytTextColor,
        }}
      >
        Subscribe Now and Turn Your Screen Time into Skill Time.
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-[35%_65%] p-2 md:p-5 lg:p-10 gap-10 items-center place-content-stretch">
        {/* Histesh sir Profile pic  */}
        <div className="relative w-full flex justify-center">
          <div
            className="w-[50%] lg:w-full object-center object-cover object aspect-square lg:-translate-x-4 border-2 rounded-full shadow-xl overflow-hidden"
            style={{
              borderColor: themeColors.cardBorderColor,
              background: themeColors.ytCardBg,
            }}
          >
            <img
              className="translate-x-2 lg:translate-x-4"
              src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/hc-laptop.png"
              alt="youtube thumbnail"
            />
          </div>
        </div>
        {/* Channles section */}
        <div className="flex flex-col gap-5">
          {/* Hindi channel card - Chai aur code */}
          <div
            id="channelTwo"
            className={`rounded-xl p-4 sm:p-8 shadow-md flex flex-col m-2 gap-4 `}
            style={{
              outlineColor: themeColors.ytLinkHoverColor,
              background: themeColors.ytCardBg,
              color: themeColors.ytTextColor,
            }}
          >
            <div className="flex justify-between items-center">
              <h1
                className={`text-2xl lg:text-6xl font-extrabold tracking-tight`}
              >
                Chai aur Code
              </h1>
              <div
                id="channelOneProfile"
                className="rounded-full overflow-hidden"
              >
                <img
                  className="h-16 lg:h-24 aspect-square"
                  src="https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
            </div>
            <p className={`text-lg font-medium opacity-70`}>@chaiaurcode</p>

            <div className="flex flex-col sm:flex-row gap-2 relative sm:gap-6 items-center text-center ">
              <p className={`text-lg font-semibold self-start md:self-center`}>
                <span className={`text-amber-500`}>
                  📈 {HINDI_CHANNEL_STATS.subscribers}K
                </span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  subscribers
                </span>
              </p>
              <p className={`text-lg font-semibold self-start md:self-center`}>
                <span className={`text-amber-500`}>
                  🎥 {HINDI_CHANNEL_STATS.videos}
                </span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  videos
                </span>
              </p>

              {/* have use complete profile url, because sometimes redirect is not happing to exact profile in mobile */}
              <Link
                aria-label="visit Chai aur Code youtube page"
                className="self-start inline-flex w-fit cursor-pointer items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-2 px-8 h-auto rounded-lg duration-300 transition-colors"
                to={"https://youtube.com/@chaiaurcode?si=W88GcJ7VZ_6rMubd"}
              >
                Visit
              </Link>
            </div>

            <p className="font-mono text-sm lg:text-base leading-relaxed opacity-70 z-1">
              A channel dedicated to chai and coding in{" "}
              <span
                className={`text-amber-500 font-bold text-xl font-['Pacifico']`}
              >
                हिन्दी
              </span>
              . A lot happens over chai and I'm a big-time chai lover. Let's sip
              tea and write some code and some chit-chat.
            </p>
          </div>
          {/* English channel card - Hitesh Choudhary */}
          <div
            id="channelTwo"
            className={`rounded-xl p-4 sm:p-8 shadow-md flex flex-col m-2 gap-4`}
            style={{
              outlineColor: themeColors.ytLinkHoverColor,
              background: themeColors.ytCardBg,
              color: themeColors.ytTextColor,
            }}
          >
            <div className="flex justify-between items-center">
              <h1
                className={`text-2xl lg:text-6xl font-extrabold tracking-tight`}
              >
                Hitesh Choudhary
              </h1>
              <div id="channelOneProfile" className="overflow-hidden">
                <img
                  className="h-16 lg:h-24 aspect-square rounded-full"
                  src="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s160-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
            </div>
            <p className={`text-lg font-medium opacity-70`}>@HiteshCodeLab</p>

            <div className="flex flex-col sm:flex-row gap-2 relative sm:gap-6 items-center text-center ">
              <p className={`text-lg font-semibold self-start md:self-center`}>
                <span className={`text-amber-500`}>
                  📈 {ENGLISH_CHANNEL_STATS.subscribers}K
                </span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  subscribers
                </span>
              </p>
              <p className={`text-lg font-semibold self-start md:self-center`}>
                <span className={`text-amber-500`}>
                  🎥{ENGLISH_CHANNEL_STATS.videos}K
                </span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  videos
                </span>
              </p>
              {/* have use complete profile url, because sometimes redirect is not happing to exact profile in mobile */}
              <Link
                aria-label="visit Hitesh Choudhary youtube page"
                className="self-start inline-flex w-fit cursor-pointer items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-2 px-8 h-auto rounded-lg duration-300 transition-colors"
                to={"https://youtube.com/@hiteshcodelab?si=WWlF8VkVpxxThsw_"}
              >
                Visit
              </Link>
            </div>

            <p
              className={`font-mono text-sm lg:text-base leading-relaxed opacity-70`}
            >
              <span
                className={`text-amber-500 font-bold text-xl font-['DynaPuff']`}
              >
                English
              </span>{" "}
              tech videos exploring programming (JS, Python, PHP & more), the
              latest trends, frameworks, and exciting open-source projects!
              Subscribe to stay updated on tech.
            </p>
          </div>
        </div>
      </div>
      <TopicSection>
        <div className="overflow-hidden w-dvw flex flex-col gap-5 md:gap-10">
          <TopicsOnCloud direction="left" topics={TOPICS_FIRST_ROW} />
          <TopicsOnCloud direction="right" topics={TOPICS_SECOND_ROW} />
          <TopicsOnCloud direction="left" topics={TOPICS_THIRD_ROW} />
        </div>
      </TopicSection>
    </div>
  );
}

export default YoutubeSection;
