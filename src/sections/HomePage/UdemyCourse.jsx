import React from "react";
import { UdemyCards, AnimatedAuroraText } from "../../components/CompIndex";
import { UDEMY_COURSES } from "../../constants/platformData";

function UdemyCourse() {
  return (
    <div className=" flex flex-col items-center overflow-hidden" id="udemy">
      <AnimatedAuroraText
        text="Our Courses on Udemy"
        className={'text-2xl md:text-5xl font-["DynaPuff"] p-4'}
      />
      <UdemyCards courseData={UDEMY_COURSES} />
    </div>
  );
}

export default UdemyCourse;
