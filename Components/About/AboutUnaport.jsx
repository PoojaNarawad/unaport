import React from "react";
import Image from "next/image";
import picture8 from "../../public/assets/8.jpg";

const AboutUnaport = () => {
  return (
    <div className="mt-20 m-2 md:m-10 rounded-2xl flex items-center bg-sky-100 flex-col md:flex md:flex-row">
      <div className="font-sans md:w-1/2">
        <div>
          <p className="w-64 md:w-11/12 md:p-7 md:-mt-14 p-3 text-center font-bold text-2xl md:text-5xl text-blue-600 bg-white rounded-br-2xl">
            What is Unaport?
          </p>
          <p className=" md:w-11/12 text-lg md:text-xl m-4 font-normal p-2 md:pl-10 md:p-3">
            Unaport is a cutting-edge SAAS-based financial information app,
            revolutionizing the way businesses manage their financial data. With
            a user-friendly interface, it empowers users to seamlessly organize,
            analyze, and optimize their financial information.
          </p>
          <p className="md:w-11/12 m-4 text-lg md:text-xl font-normal p-2 md:pb-4 md:-mt-4 md:pl-10">
            Unaport provides real-time insights, secure Multi-Account Aggregator
            connectivity, and comprehensive tools for consent management.
            Prioritizing user control, security, and transparency, Unaport is
            designed to simplify complex financial processes, making it the
            go-to solution for businesses seeking efficiency and reliability in
            their financial data management
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          width={500}
          height={0}
          src={picture8}
          alt="picture8"
          className="mt-4 md:rounded-tr-2xl md:rounded-br-2xl md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default AboutUnaport;
