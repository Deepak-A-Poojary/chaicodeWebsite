import { useThemeColors } from "../hooks/useThemeColors";
import { Tweet } from "react-tweet";
import useThemeStore from "../store/themeStore";

export default function TweetCard({ tweetId }) {
  const themeColors = useThemeColors();
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className="relative p-[2px] rounded-xl overflow-hidden w-full h-full"
      style={{
        background: themeColors.TweetCardBgColor,
        "--tweet-bg-color": theme.cardBgColor,
      }}
    >
      <div
        className={`relative z-10 flex justify-center items-center cursor-pointer rounded-xl shadow-[0px_0px_100px_20px_rgba(0,0,0,0.1)] tweetCard ${theme}`}
      >
        <Tweet
          id={tweetId}
          style={{
            "--tweet-bg-color-hover": "rgb(0, 0, 0)",
            "--tweet-container-margin": "0rem !important",
          }}
        />
      </div>
    </div>
  );
}
