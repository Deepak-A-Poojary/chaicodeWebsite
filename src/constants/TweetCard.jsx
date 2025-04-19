import { useThemeColors } from "../hooks/useThemeColors";
import { Tweet } from "react-tweet";
import useStore from "../store/themeStore";

export default function TweetCard({tId}) {
  const themeColors = useThemeColors();
  const theme = useStore(state => state.theme)
  return (
    <div
      className="relative p-[2px] rounded-xl overflow-hidden h-fit"
    >
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
        className={`relative z-10 cursor-pointer rounded-xl tweetCard ${theme}`}
        style={{
          background: themeColors.cardBgColor,
          "--tweet-bg-color":theme.cardBgColor,
        }}
      >
        <Tweet
          id={tId}
          style={{
            "--tweet-container-margin": "0rem !important",
          }}
        />
      </div>
    </div>
  );
}
