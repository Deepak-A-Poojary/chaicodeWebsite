import React from "react";
import { BenefitCard, AnimatedAuroraText } from "../../components/CompIndex";
import Coding_hostels from "../../assets/CodingBenifits/photo-1504384308090-c894fdcc538d.webp";
import Revision_classes from "../../assets/CodingBenifits/photo-1515378791036-0648a3ef77b2.webp";
import Peer_Code_Reviews from "../../assets/CodingBenifits/photo-1522071820081-009f0129c71c.webp";
import Bounties from "../../assets/CodingBenifits/photo-1526304640581-d334cdbbf45e.webp";
import Taught_by_Professionals from "../../assets/CodingBenifits/photo-1544531585-9847b68c8c86.webp";
import Leet_Lab from "../../assets/CodingBenifits/photo-1555949963-ff9fe0c870eb.webp";

function CohortBenefits() {
  const benfitData = [
    {
      title: "Taught by Professionals",
      description:
        "Our cohorts are being taught by top industry experts and educators",
      codeSnippet: "class Teacher extends Professional { /* ... */ }",
      imageUrl: Taught_by_Professionals,
    },
    {
      title: "Bounties",
      description:
        "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      codeSnippet: "const reward = solveChallenge(difficulty)",
      imageUrl: Bounties,
    },
    {
      title: "Coding hostels",
      description:
        "There is nothing like late night discussion with fellow learners and solving bugs",
      codeSnippet: "while(night) { solveProblems(together) }",
      imageUrl: Coding_hostels,
    },
    {
      title: "Peer Code Reviews",
      description:
        "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
      codeSnippet: "// TODO: Refactor this for better performance",
      imageUrl: Peer_Code_Reviews,
    },
    {
      title: "Leet Lab",
      description:
        "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      codeSnippet: "function optimizeSolution(algorithm) { /* ... */ }",
      imageUrl: Leet_Lab,
    },
    {
      title: "Revision classes",
      description:
        "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      codeSnippet: "for(let i = 0; i < concepts.length; i++) { revise() }",
      imageUrl: Revision_classes,
    },
  ];

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
        {benfitData.map((item, index) => (
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
