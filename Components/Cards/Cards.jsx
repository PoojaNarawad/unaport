"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';

const Cards = () => {
  const imageData = [
    {
      src: "/assets/4.jpg",
      alt: "Image 1",
      text: "Comprehensive Financial Data",
      description:
        "Access a wealth of financial information at your fingertips. From real-time market data to historical trends, our SAAS application provides a comprehensive suite of financial information to empower your decision-making.",
    },
    {
      src: "/assets/5.jpg",
      alt: "Image 2",
      text: "Intelligent Analytics",
      description:
        "Make informed decisions with our intelligent analytics tools. Our platform uses advanced algorithms to analyze financial data, providing you with actionable insights that drive success in an ever-changing market.",
    },
    {
      src: "/assets/3.jpg",
      alt: "Image 3",
      text: "Seamless Integration",
      description:"Integrate our SAAS applicationseamlessly into your existing workflows. Whether you're a financial professional, investor, or business owner, our solution adapts to your needs, making financial data integration smooth and hassle-free.",
    },
    {
      src: "/assets/2.jpg",
      alt: "Image 4",
      text: "Security You Can Trust",
      description:"Your financial data is precious, and we treat it as such. Our state-of-the-art security measures ensure that your information is protected at every step, giving you the peace of mind you deserve.",
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
            style={{ left: "70%", transform: "translateX(-50%)" }}
          >
            <div className="text-4xl md:text-6xl font-serif">
              Enhance Your Data Insights with 
              <span className="text-blue-600"> Powerful Tools</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 flex flex-col md:flex-row items-center justify-evenly pt-5 space-y-16 md:space-y-12">
        {imageData.map(({ src, alt, text, description }, index) => (
          <div
            key={index}
            className="w-full h-96 md:w-96 mt-3 md:mt-16 p-4 md:p-4 relative overflow-hidden group"
          >
            <div className="relative">
              <Image
                width={600}
                height={400}
                src={src}
                alt={alt}
                className="rounded-xl w-full h-96"
              />

              <div className="opacity-100 absolute bottom-11 left-4 right-4 bg-opacity-20 bg-slate-500 backdrop-filter backdrop-blur-lg bg-blur shadow-none rounded-2xl p-5 md:p-1 flex flex-col items-start gap-4 md:transition-all  md:duration-300 md:transform translate-y-2/5 md:translate-y-3/4 group-hover:translate-y-0 group-hover:opacity-95">
                <div className="flex items-center justify-center space-x-8">
                  <h1 className="md:w-48 text-white text-sm md:text-md">{text}</h1>
                  <span>
                    <CallReceivedOutlinedIcon
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontSize: "1.5em",
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "30px", 
                        height: "30px",
                        padding:"4px",                      
                      }}
                    />
                  </span>
                </div>
                <p className="text-white text-sm md:text-md">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
