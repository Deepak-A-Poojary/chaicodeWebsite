import { useThemeColors } from "../hooks/useThemeColors";
import { Tweet } from "react-tweet";
import useStore from "../store/themeStore";

export default function TweetCard({ tId }) {
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);
  return (
    <div className="relative p-[2px] rounded-xl overflow-hidden h-fit">
      {/* Mask to only show border */}
      <div
        className="absolute inset-0 rounded-xl z-[1]"
        style={{
          background: themeColors.cardBgColor,
          margin: "2px",
          maskImage: "radial-gradient(#000 0 0)",
          WebkitMaskImage: "radial-gradient(#000 0 0)",
        }}
      />

      {/* Inner card content */}
      <div
        className={`relative z-10 cursor-pointer rounded-xl shadow-[0px_0px_100px_20px_rgba(0,0,0,0.1)] tweetCard ${theme}`}
        style={{
          background: themeColors.TweetCardBgColor,
          "--tweet-bg-color": theme.cardBgColor,
        }}
      >
        <Tweet
          id={tId}
          style={{
            "--tweet-bg-color-hover": "rgb(0, 0, 0)",
            "--tweet-container-margin": "0rem !important",
          }}
        />
      </div>
    </div>
  );
}
