import React from "react";

const Cards = () => {
  return (
    <div className="p-4 m-4">
      <div className="text-center md:text-left">
        <div className="text-4xl md:text-6xl font-serif">
          Empowering Your Finances with{" "}
          <span className="text-blue-600">Supercharged Tools</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly pt-5 space-y-4 md:space-y-0">
        <div className="w-full md:w-72 ml-2 lg:mr-1 h-96 bg-gradient-to-r from-[#1a187a] to-[#100e61] rounded-xl">
          <div className="flex flex-col mt-52 p-10 mr-10">
            <button className="mb-2 text-left text-white border-2 border-gray-400 p-2 font-bold text-sm rounded-full ">
              SIGN IN
            </button>
            <button className="bg-white text-left p-2 font-bold text-sm  rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
        <div className="w-full md:w-72 ml-2 lg:mr-1 h-96 bg-gradient-to-r from-[#1a187a] to-[#100e61] rounded-xl mt-4 md:mt-0">
          <div className="flex flex-col mt-52 p-10 mr-10">
            <button className="mb-2 text-left text-white border-2 border-gray-400 p-2 font-bold text-sm  rounded-full">
              SIGN IN
            </button>
            <button className="bg-white text-left p-2 font-bold text-sm rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
        <div className="w-full md:w-72 ml-2 lg:mr-1 h-96 bg-gradient-to-r from-[#1a187a] to-[#100e61] rounded-xl mt-4 md:mt-0">
          <div className="flex flex-col mt-52 p-10 mr-10">
            <button className="mb-2 text-left text-white border-2 border-gray-400 p-2 font-bold text-sm rounded-full">
              SIGN IN
            </button>
            <button className="bg-white text-left p-2 font-bold text-sm rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto ml-2 lg:mr-1 h-96 bg-gradient-to-r from-[#1a187a] to-[#100e61] rounded-xl mt-4 md:mt-0">
          <div className="flex flex-col mt-52 p-10 mr-10">
            <button className="mb-2 text-left text-white border-2 border-gray-400 p-2 font-bold text-sm rounded-full">
              SIGN IN
            </button>
            <button className="bg-white text-left p-2 font-bold text-sm rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
