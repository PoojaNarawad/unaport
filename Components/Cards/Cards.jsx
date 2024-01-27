"use client";

import Image from "next/image";
import React, { useEffect } from "react";


const Cards = () => {
  const imageData = [
    {
      src: "/assets/sample.jpg",
      alt: "Image 1",
      text: "Comprehensive Financial Data",
    },
    {
      src: "/assets/sample.jpg",
      alt: "Image 2",
      textintelligent: "Intelligent Analytics",
      text1:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
    },
    {
      src: "/assets/sample.jpg",
      alt: "Image 3",
      text: "Seamless Integration",
    },
    {
      src: "/assets/sample.jpg",
      alt: "Image 4",
      text: "Security You Can Trust",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const textContainer = document.querySelector(".tagline");
      if (textContainer) {
        textContainer.style.transform = `translateX(-50%) translateX(${-scrollPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-4 m-4">
      <div className="relative">
        <div className="inset-0 flex items-center justify-center">
          <div
            className="tagline text-center md:text-left relative"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="text-4xl md:text-6xl font-serif">
              Empowering Your Finances with
              <span className="text-blue-600">Supercharged Tools</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly pt-5 space-y-4 md:space-y-0">
        {imageData.map(({ src, alt, text, textintelligent }, index) => (
          <div
            key={index}
            className={`w-full md:w-72 mt-3 md:mt-2 p-2 md:p-2 `}
          >
            <div className="flex flex-col items-center">                  
                    <div className="">
                      <Image
                        width={400}
                        height={200}
                        src={src}
                        alt={alt}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
              {/* <p className=" -mt-16 bg-white p-3 rounded-2xl text-center text-sm">{text}</p> */}
              {text && (
                <p className=" -mt-16 bg-white opacity-15 md:opacity-100 transition-transform transform hover:scale-105 p-3 rounded-2xl text-center text-sm">
                  {text}
                </p>
              )}
              {textintelligent && (
                <p className=" -mt-16 bg-blue-600 opacity-15 md:opacity-100 transition-transform transform hover:scale-105 p-3 rounded-2xl text-center text-sm">
                  {textintelligent}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;


{/*
import { Icon } from "@iconify/react";
import plusIcon from "@iconify/icons-ic/round-plus";
<div className="absolute mt-5/6 p-0 md:p-4 transition-transform duration-500 transform -translate-y-full md:hover:translate-x-4 ">
                  <div className=" bg-opacity-20 backdrop-blur-20 bg-gray-100 rounded-2xl p-5 flex flex-col gap-5">
                    <h3 className="text-xl font-semibold text-white mb-0">
                      Intelligent Analytics
                      <span className="">
                        <Icon icon={plusIcon} className="text-2xl" />
                      </span>
                    </h3>
                    <p className="opacity-1 text-white w-5/6 transition-opacity duration-500">
                      Make informed decisions with our intelligent analytics
                      tools. Our platform uses advanced algorithms to analyze
                      financial data, providing you with actionable insights
                      that drive success in an ever-changing market.
                    </p>
                  </div>
                </div> */}