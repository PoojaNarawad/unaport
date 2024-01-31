"use client";

import React, { useState,useEffect } from "react";
import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import screenshot1 from "../../public/assets/screenshot1.jpg";
import screenshot2 from "../../public/assets/screenshot2.jpg";

const Overview = () => {

  const [isSecondContent, setIsSecondContent] = useState(false);
  const [slid, setSlid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

   
    const ChangeContent = () => {
      setSlid(!slid);
      setIsSecondContent((prev) => !prev);
    }

  useEffect(() => {
    if (process.browser) {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);
 ;

  return (
    <div className="relative bg-slate-300 md:-mt-3 rounded-2xl md:m-14 m-5">
      <div className="md:pl-96 md:p-4 p-4 md:pt-40 z-10 absolute text-xl md:text-3xl font-bold text-blue-600 bg-white">
        Platform Overview
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col md:w-1/2 rounded-2xl ">
          <div className="flex relative md:top-60 mt-16 md:mt-5 md:ml-40">
            <h2 className="text-indigo-900 font-bold text-xl md:text-3xl p-2">
              {isSecondContent ? 'Data Management' : 'Consent Management'}
            </h2>
            <button
          onClick={ChangeContent}
          className={` md:-mt-0  md:m-4 p-2 border border-blue-900 text-blue-900 rounded-full ${
            slid ? (isMobile ? "slid-arrow-animation" : "slidArrow") : ""
          }`}
        >
          {isMobile ? <ArrowDownwardOutlinedIcon /> : <EastOutlinedIcon />}
        </button>
          </div>
          <div className="w-full md:w-4/5 relative md:top-60 font-sans md:ml-40 -mt-2 md:-mt-5 p-3 text-lg">
            <hr className="border-t m-2 border-indigo-900" />
            {isSecondContent
              ? 'Unaports advanced Data Management feature ensures efficient organization, analysis, and optimization of your financial data.'
              : 'Empower user control and compliance with Unaports advanced Consent Management feature in the application revolutionizing the way businesses manage their financial data.'}
          </div>
        </div>
        <div className="w-auto md:w-1/2 md:m-2 p-2 md:p-10">
          <Image
            width={500}
            height={500}
            src={isSecondContent ? screenshot2 : screenshot1}
            alt={isSecondContent ? 'screenshot2' : 'screenshot1'}
            className="md:w-full md:h-96 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
