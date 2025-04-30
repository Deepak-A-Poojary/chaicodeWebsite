import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useThemeColors } from "../hooks/useThemeColors";
import { useGSAP } from "@gsap/react";
import useThemeStore from "../store/themeStore";

gsap.registerPlugin(ScrollTrigger);

const CohortCard = ({
  keywordData,
  iframeUrl,
  courseName,
  courseDescription,
  courseStartDate,
  courseDuration,
  terminalCode,
  terminalCodeLang,
  discountedPrice,
  originalMRP,
  courseLink,
}) => {
  const cardRef = useRef(null);
  const themeColors = useThemeColors();
  const theme = useThemeStore((state) => state.theme);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Used to animate entry of cards
  useGSAP(() => {
    const el = cardRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scrub: 2,
            trigger: el,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const discontInPercentage = Math.round(
    ((originalMRP - discountedPrice) / originalMRP) * 100
  );

  //This function will return Live/Yet to start/ comming soon/ Live End based on courseStartDate and Duration
  function getCourseStatus(courseStartDate, courseDuration) {
    // Handle special strings
    if (courseStartDate === "Starts Constantly going") {
      return "Live";
    }
    if (courseStartDate === "Coming soon") {
      return "Coming soon";
    }

    // Parse start date
    const startDate = new Date(courseStartDate.replace("Starts ", ""));

    // Extract duration in months
    const durationMatch = courseDuration.match(/\d+(-\d+)?/);
    let durationMonths = 0;

    if (durationMatch) {
      const range = durationMatch[0].split("-");
      durationMonths = parseInt(range[range.length - 1]); // handle "1-2" or "2"
    }

    // Calculate end date
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + durationMonths);

    // 5. Get current time
    const now = new Date();

    // 6. Determine course status
    if (now < startDate) {
      return "Yet to Start";
    } else if (now >= startDate && now < endDate) {
      return "Live";
    } else {
      return "Live Ended";
    }
  }

  /// this will display the status of course in card (live/ Yet to start / Commning soon)
  const CourseStateDisplay = () => {
    const status = getCourseStatus(
      courseStartDate,
      courseDuration
    ).toLowerCase();

    if (status === "live") {
      return (
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2 scale-110 animate-pulse"></div>
          <span className="text-xs font-semibold text-red-500">LIVE</span>
        </div>
      );
    }

    if (status === "coming soon") {
      return (
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-1 animate-pulse ${
              theme === "light" ? "bg-purple-700" : "bg-purple-500"
            }`}
          ></div>
          <span
            className={`text-xs font-medium ${
              theme === "light" ? "text-purple-700" : "text-purple-500"
            }`}
          >
            Coming Soon
          </span>
        </div>
      );
    }

    if (status === "yet to start") {
      return (
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-1 animate-pulse ${
              theme === "light" ? "bg-green-700" : "bg-green-500"
            }`}
          ></div>
          <span
            className={`text-xs font-medium ${
              theme === "light" ? "text-green-700" : "text-green-500"
            }`}
          >
            Yet to
          </span>
        </div>
      );
    }

    if (status === "live ended") {
      return (
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-1 animate-pulse ${
              theme === "light" ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>
          <span
            className={`text-xs font-medium ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Live Ended
          </span>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={cardRef}
      style={{
        background: themeColors.cardBgColor,
        color: themeColors.text,
        borderColor: themeColors.borderColor,
      }}
      className="opacity-0 p-7 backdrop-blur-sm shadow-md rounded-xl overflow-hidden relative group flex flex-col md:h-[650px] md:min-w-[470px]"
    >
      {/* Video Section */}
      <div className="relative aspect-video mb-2 rounded-md bg-black/50 w-full overflow-hidden m-0">
        {!iframeLoaded && (
          <div className="absolute inset-0 bg-gray-500/50 animate-pulse z-10 " />
        )}
        <iframe
          className="w-full h-full z-20  bg-black/50"
          src={iframeUrl}
          onLoad={() => setIframeLoaded(true)}
          loading="lazy"
          title="Full Stack Data Science 1.0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>

        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {keywordData.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium whitespace-nowrap text-xs text-white bg-black/70 border-orange-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className=" flex-1 flex flex-col">
        <div>
          <p className="text-xl font-bold mb-2 line-clamp-1">{courseName}</p>
          <p
            className="text-sm mb-4 line-clamp-2 font-semibold"
            style={{ color: themeColors.secondryText }}
          >
            {courseDescription}
          </p>
        </div>

        <div
          className="relative grid grid-cols-2 gap-3 mb-4 text-xs"
          style={{ color: themeColors.secondryText }}
        >
          <div className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1 text-orange-400" />
            <span>{courseStartDate}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-3 w-3 mr-1 text-orange-400" />
            <span>{courseDuration}</span>
          </div>
        </div>

        {/* Terminal */}
        <div className="mb-4 flex-grow">
          <div className="flex items-center text-xs text-gray-400 mb-1">
            <TerminalIcon className="h-3 w-3 mr-1 text-orange-400" />
            <span>We ❤️ code</span>
          </div>
          <div className="bg-black rounded-md p-2 overflow-hidden relative h-[100px]">
            <pre className="text-xs font-mono text-gray-300 overflow-hidden">
              <code>{terminalCode}</code>
            </pre>
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute top-1 right-1 text-[10px] font-mono text-orange-500/70 px-1 bg-black/30 rounded">
              {terminalCodeLang}
            </div>
          </div>
        </div>

        <div className="mt-auto relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center">
                <span className="text-xl font-bold">{discountedPrice} INR</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {originalMRP} INR
                </span>
              </div>
              <div className="text-xs font-semibold text-orange-400">
                Save {discontInPercentage}%
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-4 z-20">
            <CourseStateDisplay />
          </div>
          <a href={courseLink}>
            <button className="inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 mb-2 h-auto rounded-lg">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Icons (unchanged)
const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);

const ClockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const TerminalIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

export default CohortCard;
