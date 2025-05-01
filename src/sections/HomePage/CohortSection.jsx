import React from "react";
import {
  ExploreTextButton,
  CohortCard,
  AnimatedAuroraText,
  Divider,
} from "../../components/CompIndex";
import { COHORT_COURSES_DATA } from "../../constants/cohortsData";

function CohortSection() {
  return (
    <div className="flex flex-col items-center">
      <div id="cohorts">
        <AnimatedAuroraText className="text-5xl" text={"Cohorts"} />
      </div>
      <p className="text-[1rem] ">Live training classes</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-dvw p-5 md:p-10 gap-6">
        {COHORT_COURSES_DATA.map((card, index) => (
          <CohortCard key={index} {...card} />
        ))}
      </div>
      <ExploreTextButton
        label="visit to view all courses"
        className="md:px-20 md:py-6 mt-6 md:mt-0 flex-row-reverse "
        to={"https://courses.chaicode.com/learn/view-all?show=batch&type=17"}
        text={"View All Cohorts"}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current z-10"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        }
      />
      <Divider className="mt-10" />
    </div>
  );
}

export default CohortSection;
