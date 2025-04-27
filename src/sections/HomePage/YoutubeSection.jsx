import React, { useEffect, useRef, useState } from "react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { Link } from "react-router-dom";
import { TopicsOnCloud } from "../../components/CompIndex";

function YoutubeSection() {
  const themeColors = useThemeColors();

  const firstSectionData = [
    {
      name: "AI is 90% Marketing and 10 % reality",
      link: "https://youtu.be/KnIye1fJF80?si=uX6w0vCT05IWn13H",
    },
    {
      name: "Build a SAAS with AI",
      link: "https://youtu.be/1i8R-iJiEi8?si=io8MZs_8HJtgVFjz",
    },
    {
      name: "New Junior Developers Can’t Actually Code",
      link: "https://youtu.be/BQTaBibVbo4?si=0xuu1kVzvvHqxI3D",
    },
    {
      name: "What a great definition for AI model",
      link: "https://youtu.be/2Ye3cnOb2ug?si=y2v1YRuGrL9z96ZB",
    },
    {
      name: "Ultimate AI ML Roadmap for beginners",
      link: "https://youtu.be/6dqAwh2MCg0?si=kZoJeGEWCxSfUgPR",
    },
  ];

  const secondSectionData = [
    {
      name: "Chai aur numpy",
      link: "https://youtu.be/x7ULDYs4X84?si=U5_C4gWmBbI-OS60",
    },
    {
      name: "Chai aur Jupyter Notebook",
      link: "https://youtube.com/playlist?list=PLu71SKxNbfoAvRjhCwrRx39NssrrHt95G&si=56hzatwsC14kidWC",
    },
    {
      name: "Chai aur Django",
      link: "https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=J11IPMrBNxVStOSv",
    },
    {
      name: "Chai aur full stack NextJS",
      link: "https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq&si=Yn7YTCIE6YSAoNlQ",
    },
    {
      name: "Chai aur Python",
      link: "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=mLItmQiF-2Vmw6Be",
    },
  ];

  const thirdSectionData = [
    {
      name: "Complete Streamlit course for python developers",
      link: "https://youtu.be/yKTEC1Y5bEQ?si=xxDGYz3s8suIvrk8",
    },
    {
      name: "Don't create virtual environment in python in 2025",
      link: "https://youtu.be/8mk85fyzevc?si=TRzQSO-LJkixyhia",
    },
    {
      name: "FAST API crash course",
      link: "https://youtu.be/foGklduxhM0?si=XpwuLQbw87R63ZzZ",
    },
    {
      name: "What are MCP servers | Explained in Hindi",
      link: "https://youtu.be/dZyQNy3-HjU?si=aLaLFb5hsO7ws8U3",
    },
    {
      name: "Behind the scene of I build a SAAS with AI",
      link: "https://youtu.be/1i8R-iJiEi8?si=thrl9KPScKkWyTNk",
    },
  ];

  const TopicSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(containerRef.current); // Observe only once
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
          <Link
            // have use complete profile url, because sometimes redirect is not happing to exact profile in mobile
            to={"https://youtube.com/@chaiaurcode?si=W88GcJ7VZ_6rMubd"}
            id="channelTwo"
            className={`rounded-xl p-4 sm:p-8 shadow-md flex flex-col m-2 gap-4 hover:outline-2 hover:-translate-y-1 transition-transform duration-200`}
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
          </Link>
          {/* English channel card - Hitesh Choudhary */}
          <Link
            // have use complete profile url, because sometimes redirect is not happing to exact profile in mobile
            to={"https://youtube.com/@hiteshcodelab?si=WWlF8VkVpxxThsw_"}
            id="channelTwo"
            className={`rounded-xl p-4 sm:p-8 shadow-md flex flex-col m-2 gap-4 hover:outline-2 hover:-translate-y-1 transition-transform duration-200`}
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
              <span
                className={`text-amber-500 font-bold text-xl font-['DynaPuff']`}
              >
                English
              </span>{" "}
              tech videos exploring programming (JS, Python, PHP & more), the
              latest trends, frameworks, and exciting open-source projects!
              Subscribe to stay updated on tech.
            </p>
          </Link>
        </div>
      </div>
      <TopicSection>
        <div className="overflow-hidden w-dvw flex flex-col gap-5 md:gap-10">
          <TopicsOnCloud direction="left" topics={firstSectionData} />
          <TopicsOnCloud direction="right" topics={secondSectionData} />
          <TopicsOnCloud direction="left" topics={thirdSectionData} />
        </div>
      </TopicSection>
    </div>
  );
}

export default YoutubeSection;
