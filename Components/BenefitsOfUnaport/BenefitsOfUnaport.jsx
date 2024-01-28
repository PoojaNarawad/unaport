import React from "react";
import Image from "next/image";
import sampleimg from "../../public/assets/sample.jpg";
import benificial from "../../public/assets/benificial.jpg";

const BenefitsOfUnaport = () => {
  return (
    <div className="md:w-full flex flex-col md:flex-row justify-evenly items-center ">
      <div className="rounded-2xl flex flex-col p-10 md:m-10 justify-around items-center bg-sky-100 mb-10 md:w-1/3 md:rounded-2xl ">
        <h2 className="p-3 md:p-4 w-11/12 font-semibold bg-white rounded-xl ">
          What are the benefits of Unaport?
        </h2>
        <div className="mt-4">
          <div className="flex items-center justify-center p-2">
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full w-20 h-20"
              />
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs mt-2">
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
              <p className="text-indigo-900 font-semibold md: w-36 text-xs mt-2">
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
              <p className="text-indigo-900 font-semibold md: w-36 text-xs mt-2">
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
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs mt-2">
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
              <p className="text-indigo-900 font-semibold md: w-36 text-xs mt-2">
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
              <p className="text-indigo-900 font-semibold md: w-36 text-xs mt-2">
                Real-Time Insights
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="relative md:mt-12 md:w-1/2 ">
  <div className="absolute z-10 bg-white p-2 rounded-br-2xl font-semibold md:text-xl w-56 md:w-64 border-b-2 border-indigo-900">
    Can Unaport adapt and scale as my business grows?
  </div>
  <div className="w-full md:w-2/3 relative overflow-hidden">
    <Image
      width={400}
      height={200}
      src={benificial}
      alt="sample"
      className="md:min-w-full h-72 md:rounded-t-2xl"
    />
    <div className="absolute left-0 right-0 h-12 after:content-[''] after:block after:absolute after:inset-0 after:bg-gradient-to-t from-transparent via-gray-800 to-black"></div>
    <div className="md:w-full bg-gradient-to-r from-indigo-900 to-indigo-950 border-t-2 border-indigo-900 md:rounded-b-2xl">
      <p className=" mt-5 md:mt-4 font-light text-white text-sm p-3 md:p-5">
        Absolutely, your data&apos;s safety is our top priority at Unaport. We
        implement robust security measures, including real-time data backup and
        a disaster recovery plan, ensuring the security and retrievability of
        your information. It&apos;s important to note that Unaport understands
        the unique requirements of each Financial Information User (FIU), and as
        such, databases and services are distinct for each FIU.
      </p>
      <p className="font-light text-white text-sm p-3 md:p-5 md:-mt-6 md:mb-12">
        This individualized approach enhances data privacy and security, giving
        you the confidence that your information is handled with the utmost care
        and confidentiality.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default BenefitsOfUnaport;
