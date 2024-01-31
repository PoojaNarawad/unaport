import React from "react";
import Image from "next/image";
import picture9 from "../../public/assets/9.jpg";
import picture10 from "../../public/assets/10.jpg";

const AboutUnaportBelow = () => {
  return (
    <div className="md:m-10 m-5 flex flex-col md:flex-row items-center justify-around font-sans">
      <div className="relative md:m-2 md:w-1/2">
        <Image
          width={500}
          height={0}
          src={picture9}
          alt="picture9"
          className="w-full h-1/2 rounded-2xl "
        />
        <h1 className="w-52 md:w-80 text-xs md:text-2xl font-bold absolute top-0 p-2 md:p-4 md:m-5 bg-white m-4 rounded-2xl">
          How reliable in Unaport? What is your uptime?
        </h1>
        <p className="w-5/6 md:w-4/5 -mt-44 md:-mt-0 md:left-24 left-7 text-sm md:text-lg font-medium absolute top-72 md:p-4 p-1 bg-white m-1 rounded-2xl">
        Unaport ensures reliability with 99.99% uptime, real-time data backup, and 24/7 support for seamless financial data management.
        </p>
      </div>

      <div className="bg-blue-50 p-2 md:m-2 mt-7 md:mt-0 rounded-xl md:w-1/2  ">
        <div className="flex items-center justify-center ">
          <div className="w-full md:p-7 p-4 md:-mt-8 rounded-2xl">
          <Image
          width={500}
          height={0}
          src={picture10}
          alt="sample"
          className="md:w-full md:h-32 md:-ml-6 rounded-2xl"
        />
            <h1 className="-mt-16 md:-mt-28 md:w-1/3 w-1/2 p-1 md:ml-4 ml-3 text-sm md:text-2xl font-bold text-white">
              Is my data safe with Unaport?
            </h1>
          </div>
        </div>
        <p className="p-4 md:p-6 md:mt-5 text-lg md:text-2xl font-medium">
        At Unaport, your data&apos;s safety is paramount, with robust security measures, real-time backup, and a personalized approach for each Financial Information User (FIU).
        </p>
        <p className="p-4 md:p-6 md:-mt-4 -mt-4 text-lg md:text-2xl font-medium">
        Our individualized services enhance data privacy and security, ensuring your information is handled with utmost care and confidentiality. 
        </p>
      </div>
    </div>
  );
};

export default AboutUnaportBelow;
