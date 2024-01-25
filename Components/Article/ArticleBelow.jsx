import React from "react";
import Image from "next/image";
import carousel1 from "../../public/assets/carousel1.jpg";

const ArticleBelow = () => {
  return (
    <div className="flex items-center">
      <div className="relative left-60 ">
        <h1 className="text-4xl md:text-5xl w-96">
          Simplify Consent Management
        </h1>
        <p className="p-2 md:p-3 w-2/6">
          all your consent-related transactions in one user-friendly platform,
          making it easy to track and manage permissions seamlessly
        </p>
        <button className=" border m-1 ml-40 border-blue-900  text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="indigo"
            className="h-6 w-6 "
          >
            <path
              stroke-linecap="round"
              stroke-width="2"
              stroke-linejoin="round"
              d="M17 8l4 4-4 4M3 12h18"
            ></path>
          </svg>
        </button>
      </div>
      <div className=" ">
        <Image
          width={500}
          height={0}
          src={carousel1}
          alt="sample"
          className="w-full h-96 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ArticleBelow;
