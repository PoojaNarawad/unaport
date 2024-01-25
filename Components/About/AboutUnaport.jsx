import React from "react";
import Image from "next/image";
import carousel1 from "../../public/assets/carousel1.jpg";


const AboutUnaport = () => {
  return (
    <div className=" m-2 md:m-10 rounded-2xl flex items-center bg-sky-100">
      <div className="font-sans">
        <h1 className="p-3 -mt-10 text-3xl md:text-4xl text-blue-600 bg-white w-1/2 text-center rounded-br-2xl">What is Unaport?</h1>
        <p className="w-1/2 pl-10 p-3">
          Unaport is a cutting-edge SAAS-based financial information app,
          revolutionizing the way businesses manage their financial data. With a
          user-friendly interface, it empowers users to seamlessly organize,
          analyze, and optimize their financial information.
        </p>
        <p className="w-1/2 pl-10 p-3">
          Unaport provides real-time insights, secure Multi-Account Aggregator
          connectivity, and comprehensive tools for consent management.
          Prioritizing user control, security, and transparency, Unaport is
          designed to simplify complex financial processes, making it the go-to
          solution for businesses seeking efficiency and reliability in their
          financial data management
        </p>
      </div>
      <div className="">
        <Image
          width={500}
          height={0}
          src={carousel1}
          alt="sample"
          className="w-full h-96 rounded-2xl "
        />
      </div>
    </div>
  );
};

export default AboutUnaport;
