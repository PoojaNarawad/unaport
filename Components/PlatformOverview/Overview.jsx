import React from "react";

const Overview = () => {
  return (
    <div>
      <h2 className="bg-white p-20 rounded-br-2xl md:ml-10 absolute text-3xl font-bold text-blue-600">
        Platform Overview
      </h2>
      <div className=" md: flex justify-around items-center rounded-2xl m-14 p-2  bg-slate-300">
      <div className=" mt-28">
      <div className=" md: flex">
        <h2 className=" text-indigo-900 font-bold text-3xl p-2">
          Consent Management
        </h2>
        <button className=" border m-1 border-blue-900  text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="indigo"
            className="h-6 w-6"
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
        <hr className=" border-t m-1 border-indigo-900" />
        <p className=" md: w-80 font-sans text-sm">
          Unaport is a cutting-edge SAAS-based financial information app,
          revolutionizing the way businesses manage their financial data.
        </p>
      </div>
      <div className="rounded-2xl w-1/2 h-96 md: m-2 p-4 bg-white"></div>
      </div>
    </div>
  );
};

export default Overview;
