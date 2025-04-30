import Coding_hostels from "../assets/CodingBenifits/photo-1504384308090-c894fdcc538d.webp";
import Revision_classes from "../assets/CodingBenifits/photo-1515378791036-0648a3ef77b2.webp";
import Peer_Code_Reviews from "../assets/CodingBenifits/photo-1522071820081-009f0129c71c.webp";
import Bounties from "../assets/CodingBenifits/photo-1526304640581-d334cdbbf45e.webp";
import Taught_by_Professionals from "../assets/CodingBenifits/photo-1544531585-9847b68c8c86.webp";
import Leet_Lab from "../assets/CodingBenifits/photo-1555949963-ff9fe0c870eb.webp";

// 📚 Cohort Courses
export const COHORT_COURSES_DATA = [
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

// ✅ Key Benefits
export const COHORT_BENEFITS = [
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
