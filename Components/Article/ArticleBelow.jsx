import React from "react";
import Image from "next/image";
import carousel1 from "../../public/assets/carousel1.jpg";

const ArticleBelow = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center relative md:right-20">
  <div className="flex flex-col items-center md:w-1/2">
    <button className="border ml-36 md:ml-96 border-blue-900 text-white rounded-full p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="indigo"
        className="h-6 w-6 "
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M17 8l4 4-4 4M3 12h18"
        ></path>
      </svg>
    </button>
    <h1 className="text-4xl md:text-6xl w-3/4 md:w-3/5 text-left md:text-left mt-4 md:mt-0">
      Simplify Consent Management
    </h1>
    <p className="p-1 text-xl md:text-md md:p-2 w-3/4 md:w-1/2 md:mr-20 text-left">
      All your consent-related transactions in one user-friendly platform,
      making it easy to track and manage permissions seamlessly
    </p>
  </div>
  <div className="w-3/4 md:w-1/2 mt-4 md:mt-0">
    <Image
      width={400}
      height={400}  
      src={carousel1}
      alt="sample"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>

  );
};

export default ArticleBelow;
