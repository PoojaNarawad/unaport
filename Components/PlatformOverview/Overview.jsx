import React from "react";
import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import screenshot1 from "../../public/assets/screenshot1.jpg";

const Overview = () => {
  return (
    <div className="mt-4">
      <h2 className="bg-white p-5 md:p-20 rounded-br-2xl md:ml-10 absolute text-xl md:text-3xl font-bold text-blue-600">
        Platform Overview
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center rounded-2xl md:m-14 md:p-2  bg-slate-300">
        <div className=" mt-28">
          <div className=" md: flex">
            <h2 className=" text-indigo-900 font-bold text-xl md:text-3xl p-2">
              Consent Management
            </h2>
            <button className=" border m-1 border-blue-900 text-blue-900 rounded-full p-2">
              <EastOutlinedIcon />
            </button>
          </div>
          <hr className=" border-t m-1 border-indigo-900" />
          <p className=" w-80 font-sans  p-3 text-lg">
            Empower user control and compliance with Unaport&apos;s advanced
            Consent Management feature in the application revolutionizing the
            way businesses manage their financial data.
          </p>
        </div>
        <div className="rounded-2xl w-1/2 h-96 m-4 md:m-2 p-6 md:p-4 bg-white">
          <Image
            width={0}
            height={0}
            src={screenshot1}
            alt="screenshot1"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
