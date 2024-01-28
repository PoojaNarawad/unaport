import React from "react";
import Image from "next/image";
import carousel1 from "../../public/assets/carousel1.jpg";

const AboutUnaport = () => {
  return (
    <div className="mt-20 m-2 md:m-10 rounded-2xl flex items-center bg-sky-100 flex-col md:flex md:flex-row">
      <div className="font-sans md:w-1/2">
        <div>
          <p className="md:-mt-52 md:p-7 p-2 md:text-4xl text-blue-600 bg-white w-40 md:w-2/4 text-center rounded-br-2xl text-2xl font-bold">
            What is Unaport?
          </p>
          <p className="pl-10 p-3">
            Unaport is a cutting-edge SAAS-based financial information app,
            revolutionizing the way businesses manage their financial data. With
            a user-friendly interface, it empowers users to seamlessly organize,
            analyze, and optimize their financial information.
          </p>
          <p className="pl-10 p-3">
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
          src={carousel1}
          alt="sample"
          className="mt-4 md:rounded-tr-2xl md:rounded-br-2xl md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default AboutUnaport;
