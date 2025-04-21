import React, { useEffect, useState } from "react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { Link } from "react-router-dom";

function YoutubeSection() {
  const themeColors = useThemeColors();

  return (
    <div className="flex flex-col items-center font-['Outfit'] p-5 lg:p-10">
      <h2
        className="text-3xl lg:text-4xl font-bold font-['Outfit'] text-center"
        style={{
          color: themeColors.ytTextColor,
        }}
      >
        Subscribe Now and Turn Your Screen Time into Skill Time.
      </h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-[35%_65%] p-5 lg:p-10 gap-10 items-center place-content-stretch">
        {/* Histesh sir Profile pic  */}
        <div
          className="relative w-full aspect-square translate-x-0 lg:-translate-x-4 border-2 rounded-full shadow-2xl overflow-hidden"
          style={{
            borderColor: themeColors.cardBorderColor,
            background: themeColors.ytCardBg,
          }}
        >
          <img
            className="translate-x-4"
            src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/hc-laptop.png"
            alt="youtube thumbnail"
          />
        </div>
        {/* Channles  */}
        <div className="flex flex-col gap-5">
          <Link
            to={"https://youtube.com/@chaiaurcode"}
            id="channelTwo"
            className={`rounded-xl p-6 sm:p-8 shadow-md flex flex-col m-2 gap-4 hover:outline-2 hover:-translate-y-1 transition-transform duration-200`}
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

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-center">
              <p className={`text-lg font-semibold self-start`}>
                <span className={`text-amber-500`}>📈 600K</span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  subscribers
                </span>
              </p>
              <p className={`text-lg font-semibold self-start`}>
                <span className={`text-amber-500`}>🎥 545</span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  videos
                </span>
              </p>
            </div>

            <p
              className={`font-mono text-sm lg:text-base leading-relaxed opacity-70`}
            >
              A channel dedicated to chai and coding in HINDI. A lot happens
              over chai and I’m a big-time chai lover. Let’s sip tea and write
              some code and some chit-chat.
            </p>
          </Link>
          <Link
            to={"https://www.youtube.com/@Hiteshcodelab"}
            id="channelTwo"
            className={`rounded-xl p-6 sm:p-8 shadow-md flex flex-col m-2 gap-4 hover:outline-2 hover:-translate-y-1 transition-transform duration-200`}
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
              <div
                id="channelOneProfile"
                className="rounded-full overflow-hidden"
              >
                <img
                  className="h-16 lg:h-24 aspect-square"
                  src="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s160-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
            </div>
            <p className={`text-lg font-medium opacity-70`}>@HiteshCodeLab</p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-center">
              <p className={`text-lg font-semibold self-start`}>
                <span className={`text-amber-500`}>📈 987K</span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  subscribers
                </span>
              </p>
              <p className={`text-lg font-semibold self-start`}>
                <span className={`text-amber-500`}>🎥 1.6K</span>
                <span className={`ml-1 text-sm font-normal opacity-60`}>
                  videos
                </span>
              </p>
            </div>

            <p
              className={`font-mono text-sm lg:text-base leading-relaxed opacity-70`}
            >
              English tech videos exploring programming (JS, Python, PHP &
              more), the latest trends, frameworks, and exciting open-source
              projects! Subscribe to stay updated on tech.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSection;
