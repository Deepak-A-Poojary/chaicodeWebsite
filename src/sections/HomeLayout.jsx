import React, { lazy, Suspense } from "react";
import Hero from "./HomePage/Hero"; // Load this eagerly – it's critical

// Lazy load each section
const TweetLove = lazy(() => import("./HomePage/TweetLove"));
const CohortSection = lazy(() => import("./HomePage/CohortSection"));
const StudentProof = lazy(() => import("./HomePage/StudentProof"));
const StudenFeedback = lazy(() => import("./HomePage/StudenFeedback"));
const UdemyCourse = lazy(() => import("./HomePage/UdemyCourse"));
const CohortBenefits = lazy(() => import("./HomePage/CohortBenefits"));
const AlumniNetworkCard = lazy(() => import("./HomePage/AlumniNetwork"));
const WhyChaiCode = lazy(() => import("./HomePage/WhyChaiCode"));
const YoutubeSection = lazy(() => import("./HomePage/YoutubeSection"));

// Use the array as before
const sections = [
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
    <div>
      <Hero />
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        {sections.map((Section, idx) => (
          <Section key={idx} />
        ))}
      </Suspense>
    </div>
  );
}

export default HomeLayout;
