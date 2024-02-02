import React from "react";
import Image from "next/image";
import sampleimg from "../../public/assets/sample.jpg";
import benificial from "../../public/assets/11.jpg";

const BenefitsOfUnaport = () => {
  return (
    <div className=" md:m-10 m-5 md:-mt-10 flex flex-col md:flex-row justify-evenly items-center ">
      <div className=" md:w-1/2 flex flex-col p-0 md:p-10 md:m-5 m-5 justify-around items-center bg-sky-100 md:rounded-2xl rounded-2xl">
        <div className="p-2 m-4 md:p-4 md:w-11/12 font-semibold text-xl md:text-3xl bg-white rounded-xl">
          What are the benefits of Unaport?
        </div>
        <div>
          <div className="flex items-center justify-center p-2">
            <span className="flex flex-col items-center text-center">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20 mr-0 md:mr-28"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2 md:mr-28 mr-0">
                Multi-Account Aggregator Connectivity
              </p>
            </span>
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
                Consent Management
              </p>
            </span>
          </div>
          <div className="flex m-2 p-2">
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20 mr-0 md:mr-28"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2 mr-0 md:mr-28">
                Data Security
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
                Seamless Operations
              </p>
            </span>
          </div>
          <div className="flex flex-wrap m-2 p-2">
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20 mr-0 md:mr-28"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2 mr-0 md:mr-28">
                User-Friendly Interface
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full w-20 h-20"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
                Real-Time Insights
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="relative md:mt-8 md:w-1/2">
        <div className="absolute z-10 w-3/4 md:w-2/3 md:p-5 p-5 font-semibold text-sm md:text-3xl border-indigo-900">
          Can Unaport adapt and scale as my business grows?
        </div>
        <div className=" md:mr-3 mt-4 md:mt-0 relative overflow-hidden">
          <Image
            width={400}
            height={200}
            src={benificial}
            alt="sample"
            className="md:w-full md:h-96"
          />
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 border-indigo-900 md:rounded-b-2xl">
            <p className="font-light text-white text-sm md:text-lg p-3 md:mb-3 md:p-5">
              Unaport is engineered for seamless adaptability and scalability,
              effortlessly growing with your business&apos;s expansion.
            </p>

            <p className="font-light text-white  text-sm md:text-lg p-3 md:p-7 md:-mt-12 md:mb-12">
              With flexibility to accommodate increased data volume, additional
              users, and expanded functionalities, our platform ensures
              alignment with your evolving needs, providing a reliable and
              tailored solution as your business thrives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfUnaport;
