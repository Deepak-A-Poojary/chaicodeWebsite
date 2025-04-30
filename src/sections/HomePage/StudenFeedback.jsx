import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  AnimatedAuroraText,
  Divider,
  FeedbackCard,
} from "../../components/CompIndex";
import { STUDENT_FEEDBACK } from "../../constants/studentData";

gsap.registerPlugin(ScrollTrigger);

const StudentFeedback = () => {
  useGSAP(() => {
    gsap.from(".feedbackCard", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".feedbackCard",
        start: "top 95%",
        end: "top 60%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <AnimatedAuroraText
        text="Our Student Feedback"
        className='text-2xl md:text-5xl font-["Pacifico"]'
      />
      <p className="text-xl p-3 text-center">
        Experience the power of learning – join our courses and elevate your
        skills today.
      </p>
      <div className="flex gap-6 px-10 w-full flex-wrap justify-center">
        {STUDENT_FEEDBACK.map((item, index) => (
          <div key={index} className="feedbackCard">
            <FeedbackCard
              name={item.name}
              avatar={item.avatar}
              rating={item.rating}
              feedback={item.feedback}
            />
          </div>
        ))}
      </div>
      <Divider className="mt-5" />
    </div>
  );
};

export default StudentFeedback;
