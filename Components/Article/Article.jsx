"use client";

import React, { useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Article = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start px-4 mt-16">
        <div className=" text-xl bg-sky-50 md:p-5 mt-4 rounded-2xl">
          <div className="text-section">
            <div className="p-2 rounded-2xl">
              <div className="w-full md:w-3/6 px-2">
                <p className="text-3xl md:text-5xl font-bold">
                  <span>Empower your applications within </span>
                  <span className="text-blue-600">                
                    individuals&apos; financial
                  </span>
                  <span> experiences.</span>
                </p>
              </div>
              <p className="m-3 font-sans text-sm md:text-lg md:w-2/5 ">
                Facilitate Efficient Financial Management Anywhere, Anytime -
                Effectively oversee financial data, track transactions, and
                ensure security and transparency in data sharing with Unaport.
              </p>
              <p className="m-3 font-sans text-sm md:text-lg md:w-2/5">
                We believe in empowering individuals with control over their
                financial information, ensuring safety at every stage.
              </p>
              <button className="relative left-1/3 md:ml-24 border m-1 border-blue-900 p-2 rounded-full">
                <EastOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="cards-section"></div>
        </div>
      </div>
    </>
  );
};

export default Article;
