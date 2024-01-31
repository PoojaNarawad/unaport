"use client"

import React, {useState} from "react";
import Image from "next/image";
import styles from '../../app/globals.css';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import screenshot1 from "../../public/assets/screenshot1.jpg";

const Overview = () => {

  const [isSecondContent, setIsSecondContent] = useState(false);

  const handleArrowClick = () => {
    setIsSecondContent((prev) => !prev);
  };

  return (
    <div className="relative bg-slate-300 md:-mt-3 rounded-2xl md:m-4">
      <h2 className="md:pl-48 md:p-4 md:pt-40 z-10 absolute text-xl md:text-3xl font-bold text-blue-600 bg-white">
        Platform Overview
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2 rounded-2xl ">
          <div className="flex relative md:top-60 md:ml-40 ">
            <h2 className="text-indigo-900 font-bold text-xl md:text-3xl p-2">
              {isSecondContent ? 'Data Management' : 'Consent Management'}
            </h2>
            <button
      className={`border m-1 border-blue-900 text-blue-900 rounded-full p-2 transition-transform transform ${
        isSecondContent ? ' translate-x-1/2' : 'translate-x-0'
      }`}
      onClick={handleArrowClick}
    >
      <EastOutlinedIcon />
    </button>
          </div>
          <div className="w-3/4 relative md:top-60 font-sans md:ml-40 p-3 text-lg">
            <hr className="border-t m-1 border-indigo-900" />
            {isSecondContent
              ? 'Unaports advanced Data Management feature ensures efficient organization, analysis, and optimization of your financial data.'
              : 'Empower user control and compliance with Unaports advanced Consent Management feature in the application revolutionizing the way businesses manage their financial data.'}
          </div>
        </div>
        <div className="w-1/2 m-4 md:m-2 p-6 md:p-10">
          <Image
            width={500}
            height={500}
            src={isSecondContent ? '/screenshot2.jpg' : '/screenshot1.jpg'}
            alt={isSecondContent ? 'screenshot2' : 'screenshot1'}
            className="md:w-full md:h-96 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
