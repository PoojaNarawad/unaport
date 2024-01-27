"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Cards = () => {
  const imageData = [
    {
      src: "/assets/card.jpg",
      alt: "Image 1",
      text: "Comprehensive Financial Data",
      description:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
    },
    {
      src: "/assets/card.jpg",
      alt: "Image 2",
      text: "Intelligent Analytics",
      description:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
    },
    {
      src: "/assets/card.jpg",
      alt: "Image 3",
      text: "Seamless Integration",
      description:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
    },
    {
      src: "/assets/card.jpg",
      alt: "Image 4",
      text: "Security You Can Trust",
      description:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
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
    <div className="p-4 m-4 bg-slate-100 rounded-2xl">
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
      <div className="py-20 flex flex-col md:flex-row items-center justify-evenly pt-5 space-y-16 md:space-y-12">
  {imageData.map(({ src, alt, text, description }, index) => (
    <div
      key={index}
      className="w-full h-96 md:w-96 mt-3 md:mt-2 p-4 md:p-4 relative overflow-hidden group"
    >
      <div className="relative">
        <Image
          width={600}
          height={400}
          src={src}
          alt={alt}
          className="rounded-xl w-full h-96"
        />

        <div className="opacity-100 absolute bottom-7 left-4 right-4 bg-opacity-20 bg-gray-300 backdrop-filter backdrop-blur-lg bg-blur shadow-none rounded-2xl p-5 flex flex-col items-start gap-4 md:transition-all  md:duration-300 md:transform translate-y-2/5 md:translate-y-3/4 group-hover:translate-y-0 group-hover:opacity-85">
          <div className="flex items-center justify-center space-x-8">
            <h1 className="md:w-48 text-white md:text-xl">{text}</h1>
            <span>
              <FaPlusCircle
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "1.5em",
                }}
              />
            </span>
          </div>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  ))}
</div> 
    </div>
  );
};

export default Cards;

