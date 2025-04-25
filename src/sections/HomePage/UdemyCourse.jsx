import React, { useState } from "react";
import AnimatedAuroraText from "../../constants/AnimatedAuroraText";
import UdemyCards from "../../constants/UdemyCards";

function UdemyCourse() {
  const courseData = [
    {
      title: "Complete web development course",
      description:
        "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/JavaScript-logo.png",
      iFrameUrl: "//www.youtube.com/embed/KZ31wDjYleI",
      rating: 4.7,
      originalMRP: 599,
      discountedPrice: 399,
    },
    {
      title: "ex 1 - Mastering React & Redux",
      description:
        "Dive deep into React and Redux with practical examples, hooks, and scalable architecture.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      iFrameUrl: "//www.youtube.com/embed/9boMnm5X9ak",
      rating: 4.8,
      originalMRP: 699,
      discountedPrice: 449,
    },
    {
      title: "ex 2 - Ultimate Python Bootcamp",
      description:
        "A complete Python course from basics to advanced topics like OOP, web scraping, and automation.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      iFrameUrl: "//www.youtube.com/embed/_uQrJ0TkZlc",
      rating: 4.6,
      originalMRP: 799,
      discountedPrice: 499,
    },
    {
      title: "ex 3 - Full Stack with MERN",
      description:
        "Learn to build full stack apps using MongoDB, Express, React, and Node.js from scratch.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      iFrameUrl: "//www.youtube.com/embed/4Z07mxWzgd8",
      rating: 4.5,
      originalMRP: 899,
      discountedPrice: 599,
    },
    {
      title: "ex 4 - Tailwind & UI Mastery",
      description:
        "Master modern UI/UX design with Tailwind CSS and responsive design patterns.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      iFrameUrl: "//www.youtube.com/embed/dFgzHOX84xQ",
      rating: 4.9,
      originalMRP: 499,
      discountedPrice: 299,
    },
  ];

  return (
    <div className=" flex flex-col items-center overflow-hidden" id="udemy">
      <AnimatedAuroraText
        text="Our Courses on Udemy"
        className={'text-2xl md:text-5xl font-["DynaPuff"] p-4'}
      />
      <UdemyCards courseData={courseData} />
    </div>
  );
}

export default UdemyCourse;
