import React from "react";
import Image from "next/image";
import picture9 from "../../public/assets/9.jpg";
import picture10 from "../../public/assets/10.jpg";

const AboutUnaportBelow = () => {
  return (
    <div className="flex flex-col items-center justify-around font-sans p-4 md:p-10 m-0 md:m-5 md:flex md:flex-row">
      <div className="relative md:w-2/5">
        <Image
          width={500}
          height={0}
          src={picture9}
          alt="picture9"
          className="w-full h-96 rounded-2xl "
        />
        <h1 className="w-52 md:w-64 text-sm md:text-lg absolute top-0 p-4 md:p-4 md:m-5 bg-white m-4 rounded-2xl">
          How reliable in Unaport? What is your uptime?
        </h1>
        <p className="w-72 md:w-4/5 md:left-16 left-3 text-sm md:text-lg absolute top-56 md:p-2 p-5 bg-white m-2 rounded-2xl">
        Unaport ensures reliability with 99.99% uptime, real-time data backup, and 24/7 support for seamless financial data management.

        </p>
      </div>

      <div className="bg-blue-50 p-2 mt-5 rounded-xl  md:w-1/2">
        <div className="flex items-center justify-center">
          <div className=" w-full md:p-3 p-4 rounded-2xl">
          <Image
          width={500}
          height={0}
          src={picture10}
          alt="sample"
          className="w-full md:h-28 h-24 rounded-2xl "
        />
            <h1 className="-mt-20 md:-mt-24 md:w-1/4 w-1/2 p-1 md:ml-6 ml-2 text-sm md:text-md md:text-lg font-bold text-white">
              Is my data safe with Unaport?
            </h1>
          </div>
        </div>
        <p className="p-8 md:mt-4 text-lg md:text-xl md:w-full font-normal">
        At Unaport, your data&apos;s safety is paramount, with robust security measures, real-time backup, and a personalized approach for each Financial Information User (FIU).
        </p>
        <p className="md:p-1 md:ml-8 text-lg md:text-xl md:w-full font-normal">
        Our individualized services enhance data privacy and security, ensuring your information is handled with utmost care and confidentiality. 
        </p>
      </div>
    </div>
  );
};

export default AboutUnaportBelow;
