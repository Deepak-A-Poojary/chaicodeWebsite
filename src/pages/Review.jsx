import React, { useEffect } from "react";
import useThemeStore from "../store/themeStore";
import TweetCard from "../components/TweetCard";
import { TWEET_IDS_FOR_REVIEWS } from "../constants/index";

function Review() {
  const theme = useThemeStore((state) => state.theme);

  // Below ensure to page starts from top whenerever its visited
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [location.pathname]);

  return (
    <div className="min-h-dvh md:p-10  text-center font-['outfit'] relative">
      <h1
        className={`text-5xl mt-10 md:mt-0 md:text-7xl p-2 font-bold ${
          theme == "dark" ? "text-gradient-fordark" : "text-gradient-light"
        }`}
      >
        Student Reviews
      </h1>
      <p className="m-5 text-lg px-0 xl:px-80 justify-between ">
        Don't just take our word for it. See what our students have to say about
        their learning journey.
      </p>
      <div className=" h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 gap-10 justify-items-center">
        {TWEET_IDS_FOR_REVIEWS.map((tweet, index) => (
          <div
            key={index}
            className={`tweetCards flex justify-center w-full items-center`}
          >
            <TweetCard tweetId={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
