"use client";

import React, { useState, useEffect } from "react";
import "../../app/globals.css";
import Image from "next/image";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import picture7 from "../../public/assets/7.jpg";
import picture8 from "../../public/assets/9.jpg";

const ArticleBelow = () => {
  const [slid, setSlid] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const ChangeContent = () => {
    setSlid(!slid);
    setContentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  useEffect(() => {
    if (process.browser) {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const contents = [
    {
      title: "Simplify Consent Management",
      text: "All your consent-related transactions in one user-friendly platform, making it easy to track and manage permissions seamlessly",
      imageSrc: picture7,
    },
    {
      title: "Maintain accurate financial links.",
      text: "real-time tracking for dependable Multi-Account Aggregator connectivity, providing a convenient overview of diverse financial information.",
      imageSrc: picture8,
    },
  ];

  return (
    <div
      className={`mt-10 m-4 md:m-14 flex flex-col md:flex-row items-center relative`}
    >
      <div className="flex flex-col items-center md:-mt-16 md:w-1/2">
        <button
          onClick={ChangeContent}
          className={` md:-mb-5 md:m-10 p-2 border border-blue-900 text-blue-900 rounded-full ${
            slid ? (isMobile ? "slid-arrow-animation" : "slidArrow") : ""
          }`}
        >
          {isMobile ? <ArrowDownwardOutlinedIcon /> : <EastOutlinedIcon />}
        </button>
        <h1 className="w-auto md:w-4/5 md:m-10 m-4 md:-ml-5 text-4xl md:text-7xl">
          {contents[contentIndex].title}
        </h1>
        <p className=" w-auto md:w-4/5 md:-mt-4 md:-ml-14 m-4 p-1 text-md md:text-2xl font-normal">
          {contents[contentIndex].text}
        </p>
      </div>
      <div className="w-full p-2 mt-4 md:-mt-4">
        <Image
          width={400}
          height={400}
          src={contents[contentIndex].imageSrc}
          alt={`picture${contentIndex + 7}`}
          className=" md:w-full object-fit md:ml-5 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ArticleBelow;
