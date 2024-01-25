"use client"
import React from "react";
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import carousel1 from "../../public/assets/carousel1.jpg";
import carousel2 from "../../public/assets/carousel2.png";

const Banner = () => {
  return (
    <div className="m-16 flex flex-col md:flex-row justify-around">
    <div className="w-full md:w-1/2 flex flex-col justify-around">
    <div className="bg-white rounded-br-2xl  text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      <h2 className="mb-2 md:mb-3">Simplify Your</h2>
      <h2 className="mb-2 md:mb-3 text-blue-600">Financial Information</h2>
      <h2>Management</h2>
    </div>
    <div className="w-full md:w-3/4 lg:w-2/3  mt-4 md:mt-10 text-base md:text-lg text-gray-500">
      <p>
      Empowering businesses of every scale,
         Unaport is Your trusted partner for 
         streamlined financial data management.
      </p>
      <p className="mt-4 md:mt-8 mb-4">
      Enhance Connectivity, Optimize Insights,
         and fuel Your growth with confidence.
      </p>
    </div>
    <button className=" w-40 border-2 border-blue-600 p-2 pl-9 pr-9 mt-8 md:mt-6 mb-8 md:mb-2 text-blue-700 rounded-full">
      SIGN IN
    </button>
  </div>
  <div className="w-full md:w-1/2 relative">
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      showThumbs={false}
    >
      <div className="w-full">
        <Image
          width={0}
          height={0}
          src={carousel1}
          alt="Carousel1"
          className="rounded-bl-3xl"
        />
      </div>
      <div className="w-full">
        <Image
          width={0}
          height={0}
          src={carousel2}
          alt="Carousel2"
          className="rounded-bl-2xl"
        />
      </div>
    </Carousel>
  </div>
  
</div> 
  );
};

export default Banner;