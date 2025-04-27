import React from "react";
import Hero from "./HomePage/Hero";
import TweetLove from "./HomePage/TweetLove";
import CohortSection from "./HomePage/CohortSection";
import StudentProof from "./HomePage/StudentProof";
import StudenFeedback from "./HomePage/StudenFeedback";
import UdemyCourse from "./HomePage/UdemyCourse";
import CohortBenefits from "./HomePage/CohortBenefits";
import AlumniNetworkCard from "./HomePage/AlumniNetwork";
import WhyChaiCode from "./HomePage/WhyChaiCode";
import YoutubeSection from "./HomePage/YoutubeSection";

// Made each part separate so we can easily change position or re-order them
const sections = [
  Hero,
  TweetLove,
  CohortSection,
  CohortBenefits,
  StudentProof,
  UdemyCourse,
  AlumniNetworkCard,
  WhyChaiCode,
  YoutubeSection,
  StudenFeedback,
];

function HomeLayout() {
  return (
    <>
      {sections.map((Section, idx) => (
        <Section key={idx} />
      ))}
    </>
  );
}

export default HomeLayout;
