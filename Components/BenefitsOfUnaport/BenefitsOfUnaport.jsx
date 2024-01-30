import React from "react";
import Image from "next/image";
import sampleimg from "../../public/assets/sample.jpg";
import benificial from "../../public/assets/11.jpg";

const BenefitsOfUnaport = () => {
  return (
    <div className="md:w-full flex flex-col md:flex-row justify-evenly items-center ">
      <div className="rounded-2xl flex flex-col p-5 md:m-10 justify-around items-center bg-sky-100 mb-10 md:w-1/3 md:rounded-2xl ">
        <h2 className="p-3 md:p-4 w-11/12 font-semibold md:text-2xl bg-white rounded-xl ">
          What are the benefits of Unaport?
        </h2>
        <div className="mt-7">
          <div className="flex items-center justify-center p-2">
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full w-20 h-20"
              />
              <p className=" text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
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
                className="rounded-full w-20 h-20"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
                Data Security
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full w-20 h-20"
              />
              <p className=" text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
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
                className="rounded-full w-20 h-20"
              />
              <p className="text-indigo-900 font-semibold w-36 md:w-52 text-xs md:text-sm mt-2">
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
      <div className="relative md:mt-12 md:w-1/2 ">
  <div className="absolute z-10 w-3/4 md:w-3/5 md:p-4 p-5 font-semibold md:text-3xl border-indigo-900">
    Can Unaport adapt and scale as my business grows?
  </div>
  <div className="w-full md:w-11/12 relative overflow-hidden">
    <Image
      width={400}
      height={200}
      src={benificial}
      alt="sample"
      className="md:min-w-full h-80 md:rounded-t-2xl"
    />
    <div className="md:w-full bg-gradient-to-r from-indigo-900 to-indigo-950 border-indigo-900 md:rounded-b-2xl">
      <p className="font-light text-white text-sm md:text-lg p-3 md:mb-4 md:p-3">
      Unaport is engineered for seamless adaptability and scalability, effortlessly growing with your business&apos;s expansion.
      </p>
    
      <p className="font-light text-white  text-sm md:text-lg p-3 md:p-3 md:-mt-7 md:mb-12">
      With flexibility to accommodate increased data volume, additional users, and expanded functionalities, our platform ensures alignment with your evolving needs, providing a reliable and tailored solution as your business thrives.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default BenefitsOfUnaport;
