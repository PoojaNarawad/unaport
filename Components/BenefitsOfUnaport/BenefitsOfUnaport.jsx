import React from "react";
import Image from "next/image";
import sampleimg from "../../public/assets/sample.jpg";
import benificial from "../../public/assets/benificial.jpg";

const BenefitsOfUnaport = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center overflow-hidden">
      <div className="flex flex-col p-10 ml-20 justify-around items-center bg-sky-100 md:w-/3  md:rounded-2xl ">
        <h2 className=" md:p-4 w-full font-semibold bg-white m-5 rounded-2xl text-center">
          What are the benefits of Unaport?
        </h2>
        <div className="p">
          <div className="flex items-center justify-center p-2">
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full"
              />
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs">
                Multi-Account Aggregator Connectivity
              </p>
            </span>
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
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
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                Data Security
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full"
              />
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs">
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
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                User-Friendly Interface
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                Real-Time Insights
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 md:w-1/2">
        <div className="bg-white p-2 rounded-br-2xl absolute font-semibold text-xl w-96 md:w-80">
          Can Unaport adapt and scale as my business grows?
        </div>
        <div className="w-full md:w-2/3">
          <div className="rounded-2xl">
            <Image
              width={500}
              height={50}
              src={benificial}
              alt="sample"
              className="rounded-t-2xl w-full"
            />
            <p className="w-auto font-light  text-white text-sm p-5 bg-gradient-to-r from-indigo-900 to-indigo-950">
              Absolutely, your data&apos;s safety is our top priority at
              Unaport. We implement robust security measures, including
              real-time data backup and a disaster recovery plan, ensuring the
              security and retrievability of your information. It&apos;s
              important to note that Unaport understands the unique requirements
              of each Financial Information User (FIU), and as such, databases
              and services are distinct for each FIU.
            </p>
            <p className="w-auto font-light text-white text-sm p-5 rounded-b-2xl bg-gradient-to-r from-indigo-900 to-indigo-950">
              This individualized approach enhances data privacy and security,
              giving you the confidence that your information is handled with
              the utmost care and confidentiality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfUnaport;

{
  /* <div className="flex bg-red-500 justify-center items-center">
      <div className=" bg-sky-100 md: w-full rounded-2xl m-20 p-20">
      <h2 className=" md: p-4 w-full font-semibold bg-white m-4 rounded-2xl text-md">
          What are the benefits of Unaport?
        </h2>
        <div className="md: m-5 flex flex-col justify-center items-center">
          <div className="flex m-2 p-2">
            <span className="flex items-center text-center flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full"
              />
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs">
                Multi-Account Aggregator Connectivity
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                Consent Management
              </p>
            </span>
          </div>
          <div className="flex m-2 p-2">
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                Data Security
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className=" rounded-full"
              />
              <p className=" text-indigo-900 font-semibold md: w-36 text-xs">
                Seamless Operations
              </p>
            </span>
          </div>
          <div className="flex m-2 p-2">
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                User-Friendly Interface
              </p>
            </span>
            <span className="flex items-center text-center  flex-col">
              <Image
                width={50}
                height={50}
                src={sampleimg}
                alt="sample"
                className="rounded-full"
              />
              <p className="text-indigo-900 font-semibold md: w-36 text-xs">
                Real-Time Insights
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="m-10">
        <div className="bg-white p-2 rounded-br-2xl absolute font-semibold text-xl w-96">
          Can Unaport adapt and scale as my business grows?
        </div>
        <div className="w-1/2 bg-yellow-400">
          <div className="rounded-2xl">
            <Image
              width={500}
              height={50}
              src={benificial}
              alt="sample"
              className="rounded-t-2xl"
            />
            
            <p className="text-white  text-sm  p-5 rounded-b-2xl bg-indigo-800">
              Absolutely, your data&apos;s safety is our top priority at
              Unaport. We implement robust security measures, including
              real-time data backup and a disaster recovery plan, ensuring the
              security and retrievability of your information. It&apos;s
              important to note that Unaport understands the unique requirements
              of each Financial Information User (FIU), and as such, databases
              and services are distinct for each FIU. This individualized
              approach enhances data privacy and security, giving you the
              confidence that your information is handled with the utmost care
              and confidentiality
            </p>
          </div>
        </div>
      </div>
    </div> */
}
