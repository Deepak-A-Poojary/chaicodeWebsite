import React from "react";
import { BenefitCard, AnimatedAuroraText } from "../../components/CompIndex";
import { COHORT_BENEFITS } from "../../constants/cohortsData";

function CohortBenefits() {
  return (
    <div className="flex flex-col items-center mt-5">
      <AnimatedAuroraText
        text="Key Benefits of Cohorts"
        className={'text-4xl md:text-5xl font-["Outfit"]'}
      />
      <p className="text-xl p-5 text-center font-semibold font-['outfit']">
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </p>
      <div className="flex gap-10 p-6 flex-wrap justify-center">
        {COHORT_BENEFITS.map((item, index) => (
          <BenefitCard
            key={index}
            title={item.title}
            description={item.description}
            codeSnippet={item.codeSnippet}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CohortBenefits;
