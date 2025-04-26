import React from "react";
import { BenefitCard, AnimatedAuroraText } from "../../components/CompIndex";

function CohortBenefits() {
  const benfitData = [
    {
      title: "Taught by Professionals",
      description:
        "Our cohorts are being taught by top industry experts and educators",
      codeSnippet: "class Teacher extends Professional { /* ... */ }",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544531585-9847b68c8c86%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
    },
    {
      title: "Bounties",
      description:
        "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      codeSnippet: "const reward = solveChallenge(difficulty)",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1526304640581-d334cdbbf45e%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
    },
    {
      title: "Coding hostels",
      description:
        "There is nothing like late night discussion with fellow learners and solving bugs",
      codeSnippet: "while(night) { solveProblems(together) }",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1504384308090-c894fdcc538d%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
    },
    {
      title: "Peer Code Reviews",
      description:
        "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
      codeSnippet: "// TODO: Refactor this for better performance",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
    },
    {
      title: "Leet Lab",
      description:
        "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      codeSnippet: "function optimizeSolution(algorithm) { /* ... */ }",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1555949963-ff9fe0c870eb%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
    },
    {
      title: "Revision classes",
      description:
        "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      codeSnippet: "for(let i = 0; i < concepts.length; i++) { revise() }",
      imageUrl:
        "https://www.chaicode.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1515378791036-0648a3ef77b2%3Fw%3D500%26h%3D500%26fit%3Dcrop&w=640&q=75",
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
