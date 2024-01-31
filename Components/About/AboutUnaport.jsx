import React from "react";
import Image from "next/image";
import picture8 from "../../public/assets/8.jpg";

const AboutUnaport = () => {
  return (
    <div className="mt-20 md:mt-0 m-5 md:m-10 rounded-2xl flex items-center bg-sky-50 flex-col md:flex md:flex-row">
      <div className="font-sans md:w-1/2">
        <div>
          <p className="w-64 md:w-11/12 md:p-14 md:-mt-10 p-3 font-bold text-2xl md:text-5xl text-blue-600 bg-white rounded-br-2xl">
            What is Unaport?
          </p>
          <p className=" md:w-11/12 text-lg md:text-2xl m-4 font-medium p-2 md:pl-10 md:p-3">
          Unaport revolutionizes financial data management with its cutting-edge SAAS application. 
          </p>
          <p className=" md:w-11/12 text-lg md:text-2xl m-4 font-medium p-2 md:pl-10 md:p-3">
          Offering a user-friendly interface, real-time insights, and secure Multi-Account Aggregator connectivity, it empowers businesses to efficiently organize, analyze, and optimize financial information.  
          </p>
          <p className="md:w-11/12 text-lg md:text-2xl m-4 font-medium p-2 md:pb-4 md:-mt-4 md:pl-10">
          With a focus on user control, security, and transparency, Unaport simplifies complex financial processes.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          width={500}
          height={0}
          src={picture8}
          alt="picture8"
          className=" md:rounded-tr-2xl md:rounded-br-2xl md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default AboutUnaport;
