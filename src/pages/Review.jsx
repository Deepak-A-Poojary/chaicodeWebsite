import React from "react";
import useStore from "../store/themeStore";
import TweetCard from "../components/TweetCard";

// Only ids are enoguh to render the tweets
const TWEET_IDS = [
  "1906393735203836076",
  "1907045909394788416",
  "1910405500635664554",
  "1910400980593574204",
  "1910371930860929195",
  "1910275278686822749",
  "1910136352450166834",
  "1906390359841640771",
  "1905574126112153860",
  "1910028187192435136",
  "1910028067134636214",
  "1909991433211203701",
];

function Review() {
  const theme = useStore((state) => state.theme);

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
        {TWEET_IDS.map((tweet, index) => (
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
