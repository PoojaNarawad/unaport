import React from "react";

const Article = () => {
  return (
    <div className="bg-sky-100 p-20 md:p-20 m-10 md:m-20 rounded-2xl">
      <div className="text-section">
        <h1 className="text-4xl md:text-5xl w-full md:w-1/2 bg-white rounded-2xl p-1">
          Empower your applications within
          <p className="text-blue-600">
            individuals&apos; financial experiences.
          </p>
        </h1>
        <p className="m-2 md:m-2 w-1/2">
          Facilitate Efficient Financial Management Anywhere, Anytime -
          Effectively oversee financial data, track transactions, and ensure
          security and transparency in data sharing with Unaport.
        </p>
        <p className="m-2 md:m-2 w-1/2">
          We believe in empowering individuals with control over their financial
          information, ensuring safety at every stage.
        </p>
      </div>
      <div className="cards-section"></div>
    </div>
  );
};

export default Article;
