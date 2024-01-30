"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../public/assets/1.jpg";
import carousel2 from "../../public/assets/9.jpg";

const imageSources = [carousel1, carousel2];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSources.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-6 md:p-10 flex flex-col md:flex-row justify-around">
      <div className="w-full md:w-3/4 md:mt-4 md flex flex-col justify-around">
        <div className=" text-4xl md:text-5xl lg:text-4xl xl:text-6xl">
          <h2 className="mb-2 md:mb-3 font-bold ">Simplify Your</h2>
          <h2 className="mb-2 md:mb-3 text-blue-600 font-bold">
            Financial Information
          </h2>
          <h2 className="font-bold">Management</h2>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/auto font-semibold  mt-4 md:mt-6  text-md lg:text-xl md:text-2xl text-gray-500">
          <p>
            Empowering businesses of every scale, Unaport is Your trusted
            partner for streamlined financial data management.
          </p>
          <p className="mt-4 md:mt-4 mb-4">
            Enhance Connectivity, Optimize Insights, and fuel Your growth with
            confidence.
          </p>
        </div>
        <button className="text-md md:text-xl font-semibold w-40 border-2 border-blue-600 p-2 pl-6 pr-6 md:mt-2 mb-8 md:mb-2 text-blue-700 rounded-full">
          SIGN IN
        </button>
      </div>
      <div className="w-full md:mt-10 md:w-11/12 relative">
        <Image
          src={imageSources[currentImageIndex]}
          alt={`Carousel${currentImageIndex + 1}`}
          className="w-full transition-opacity op100 ease-in-out rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
