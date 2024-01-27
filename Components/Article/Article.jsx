"use client";

import React, { useEffect } from "react";

const Article = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start px-4 mt-16">
      
        <div className=" text-xl bg-sky-50 md:p-5 mt-4 rounded-2xl">
          <div className="text-section">
            <div className="p-2 rounded-2xl">
            <h1 className="text-3xl md:text-5xl w-full md:w-1/3 font-bold px-2">
          Empower your applications within
        </h1>
        <p className="text-blue-600 font-bold text-3xl px-2 md:w-80">
          individuals&apos; financial experiences.
        </p>
              <p className="m-2 ">
                Facilitate Efficient Financial Management Anywhere, Anytime -
                Effectively oversee financial data, track transactions, and
                ensure security and transparency in data sharing with Unaport.
              </p>
              <p className="m-2 ">
                We believe in empowering individuals with control over their
                financial information, ensuring safety at every stage.
              </p>
            </div>
          </div>
          <div className="cards-section"></div>
        </div>
      </div>
    </>
  );
};

export default Article;
