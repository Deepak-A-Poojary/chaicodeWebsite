import React, { useRef, useEffect } from "react";
import AnimatedAuroraText from "../../constants/AnimatedAuroraText";
import FeedbackCard from "../../constants/FeedbackCard";
import Divider from "../../constants/Divider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StudentFeedback = () => {
  const cardsRef = useRef([]);

  const feedbackData = [
    {
      name: "Aarav Sharma",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      feedback:
        "This course exceeded my expectations! The content was well-structured and easy to follow.",
    },
    {
      name: "Ishita Verma",
      avatar: "https://i.pravatar.cc/150?img=47",
      rating: 4,
      feedback:
        "Really enjoyed the hands-on projects. Helped me apply what I learned right away!",
    },
    {
      name: "Rohan Mehta",
      avatar: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      feedback:
        "Brilliant teaching style and the concepts were explained with great clarity. Highly recommended!",
    },
    {
      name: "Simran Kapoor",
      avatar: "https://i.pravatar.cc/150?img=25",
      rating: 4,
      feedback:
        "I loved the interactive approach. The instructor made learning fun and effective.",
    },
    {
      name: "Devansh Patel",
      avatar: "https://i.pravatar.cc/150?img=38",
      rating: 5,
      feedback:
        "Well-paced course with a lot of practical tips. It definitely helped boost my skills.",
    },
    {
      name: "Priya Nair",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      feedback:
        "The best part was the real-world examples. It made complex topics easier to grasp.",
    },
  ];

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
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
      <div className="flex gap-6 p-3 flex-wrap justify-center">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="feedbackCard"
          >
            <FeedbackCard
              name={item.name}
              avatar={item.avatar}
              rating={item.rating}
              feedback={item.feedback}
            />
          </div>
        ))}
      </div>
      <Divider className="my-5" />
    </div>
  );
};

export default StudentFeedback;
