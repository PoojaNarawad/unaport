import React from "react";
import Image from "next/image";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import picture7 from "../../public/assets/7.jpg";

const ArticleBelow = () => {
  return (
    <div className="mt-10 md:m-4 flex flex-col md:flex-row items-center relative ">
      <div className="flex flex-col items-center md:w-1/2">
        <button className="md:ml-96 mr-20 md:m-3 md:p-3 p-2 border border-blue-900 text-blue-900 rounded-full">
          <EastOutlinedIcon />
        </button>
        <h1 className="w-4/5 md:w-auto text-4xl md:text-7xl md:ml-20 mt-4 md:mt-0">
          Simplify Consent Management
        </h1>
        <p className="p-1 text-md md:text-2xl font-normal md:p-2 w-3/4 md:w-auto mr-5 md:ml-20">
          All your consent-related transactions in one user-friendly platform,
          making it easy to track and manage permissions seamlessly
        </p>
      </div>
      <div className="w-full p-2 md:w-1/2 md:h-96  mt-4 md:mt-0">
        <Image
          width={400}
          height={400}
          src={picture7}
          alt="picture7"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ArticleBelow;
