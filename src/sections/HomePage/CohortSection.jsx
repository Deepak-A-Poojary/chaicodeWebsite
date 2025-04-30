import React from "react";
import {
  ExploreTextButton,
  CohortCard,
  AnimatedAuroraText,
  Divider,
} from "../../components/CompIndex";

function CohortSection() {
  
  const cohortCardsData = [
    {
      courseName: "DSA with C++ 1.0",
      courseDescription: "Master DSA with C++ through 200 curated problems",
      courseStartDate: "Starts May 03, 2025",
      courseDuration: "1-3 months",
      terminalCode: `
  #include <iostream>
  #include <vector>
  #include <algorithm>
  
  int main() {
    std::vector<int> nums = {4, 2, 5, 1};
    std::sort(nums.begin(), nums.end());
    for(int num : nums) std::cout << num << " ";
    return 0;
  }
      `,
      terminalCodeLang: "C++",
      keywordData: ["DSA", "C++", "LeetCode", "+1"],
      discountedPrice: "5999",
      originalMRP: "5999",
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/dz5C-r0Z9AA?si=Pvcuzh_aghi-F5CA",
      courseLink:
        "https://courses.chaicode.com/learn/batch/about?bundleId=230409",
    },
    {
      courseName: "Full Stack Data Science 1.0",
      courseDescription: "From Python basics to project deployment",
      courseStartDate: "Starts Apr 12, 2025",
      courseDuration: "6 months",
      terminalCode: `
  import pandas as pd
  import numpy as np
  from sklearn.model_selection import train_test_split
  
  df = pd.read_csv('data.csv')
      `,
      terminalCodeLang: "Python",
      keywordData: ["Python", "TensorFlow", "Pandas", "+1"],
      discountedPrice: "6999",
      originalMRP: "8999",
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/Kjd-SWpe1do?si=C7EcI04LrASSoWL5",
      courseLink:
        "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
    },
    {
      courseName: "GenAI with Python | Concept to deployment Projects 1.0",
      courseDescription: "Development side of AI application",
      courseStartDate: "Starts Apr 7, 2025",
      courseDuration: "1-2 months",
      terminalCode: `
  from transformers import AutoModelForCausalLM, AutoTokenizer
  
  tokenizer = AutoTokenizer.from_pretrained("gpt2")
  model = AutoModelForCausalLM.from_pretrained("gpt2")
  inputs = tokenizer("AI is transforming", return_tensors="pt")
      `,
      terminalCodeLang: "Python",
      keywordData: ["Python", "LLMs", "Transformers", "+1"],
      discountedPrice: 4999,
      originalMRP: 7999,
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/VNb_LawBBWU?si=y2C5L_ox2Ud4fcKy",
      courseLink: "https://hitesh.ai/genai-cohort",
    },
    {
      courseName: "DevOps for developers 1.0",
      courseDescription: "Perfect guide to get started with DevOps",
      courseStartDate: "Starts Apr 15, 2025",
      courseDuration: "1-2 months",
      terminalCode: `
  version: '3'
  services:
    web:
      image: nginx:alpine
      ports:
      `,
      terminalCodeLang: "yaml",
      keywordData: ["Docker", "Kubernetes", "CI/CD", "+1"],
      discountedPrice: 4999,
      originalMRP: 7999,
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/oBLpqSHc3lA?si=7feP-LCqdtyU_UrB",
      courseLink: "https://hitesh.ai/devops-cohort",
    },
    {
      courseName: "Web Dev Cohort 1.0",
      courseDescription: "Ultimate guide to build software on web",
      courseStartDate: "Starts Jan 11, 2025",
      courseDuration: "6 months",
      terminalCode: `
  import React, { useState, useEffect } from 'react';
  
  function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
      `,
      terminalCodeLang: "javascript",
      keywordData: ["JavaScript", "React", "Node.js", "+1"],
      discountedPrice: 6999,
      originalMRP: 8999,
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/yG8JMlldoCE?si=smBhLZEaYi1eMUe5",
      courseLink: "https://hitesh.ai/cohort",
    },
    {
      courseName: "Coding Hero 2025",
      courseDescription: "Our Community focused program for students",
      courseStartDate: "Starts Constantly going",
      courseDuration: "Always running",
      terminalCode: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Website</title>
      `,
      terminalCodeLang: "html",
      keywordData: ["HTML", "CSS", "JavaScript", "+1"],
      discountedPrice: 299,
      originalMRP: 599,
      iframeUrl:
        "https://www.youtube-nocookie.com/embed/Fw3FezexzV0?si=YBk5Zu-J-fhhqVAK",
      courseLink: "https://courses.chaicode.com/learn/batch/Coding-Hero-2025",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div id="cohorts">
        <AnimatedAuroraText className="text-5xl" text={"Cohorts"} />
      </div>
      <p className="text-[1rem] ">Live training classes</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-dvw p-5 md:p-10 gap-6">
        {cohortCardsData.map((card, index) => (
          <CohortCard key={index} {...card} />
        ))}
      </div>
      <ExploreTextButton
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
