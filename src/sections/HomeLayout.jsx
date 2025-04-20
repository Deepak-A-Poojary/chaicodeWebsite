import React from "react";
import Hero from "./HomePage/Hero";
import TweetLove from "./HomePage/TweetLove";
import CohortSection from "./HomePage/CohortSection";
import StudentProof from "./HomePage/StudentProof";
import StudenFeedback from "./HomePage/StudenFeedback";
import UdemyCourse from "./HomePage/UdemyCourse";
import CohortBenefits from "./HomePage/CohortBenefits";

const sections = [
  Hero,
  TweetLove,
  StudentProof,
  CohortSection,
  CohortBenefits,
  StudenFeedback,
  UdemyCourse,
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
