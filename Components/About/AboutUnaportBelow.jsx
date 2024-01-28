import React from "react";
import Image from "next/image";
import carousel2 from "../../public/assets/carousel2.jpg";

const AboutUnaportBelow = () => {
  return (
    <div className="flex flex-col items-center justify-around font-sans p-4 md:p-10 m-0 md:m-5 md:flex md:flex-row">
      <div className="relative md:w-2/5">
        <Image
          width={500}
          height={0}
          src={carousel2}
          alt="sample"
          className="w-full h-96 rounded-2xl "
        />
        <h1 className="md:w-52 text-sm  md:text-md absolute top-0 p-4 bg-white m-2 w-36 rounded-2xl">
          How reliable in Unaport? What is your uptime?
        </h1>
        <p className=" md:w-3/4 left-16 text-sm md:text-md absolute top-56 p-4 bg-white m-2 rounded-2xl">
          Reliability is at the core of the Unaport platform. With a 99.99%
          uptime commitment, our services are consistently accessible. disaster
          recovery plan ensure data
        </p>
      </div>

      <div className="bg-blue-50 p-5 mt-5 rounded-xl  md:w-1/2">
        <div className="flex items-center justify-center">
          <div className="w-full md:p-6 p-4 bg-white rounded-2xl">
            <h1 className="md:w-44  ml-2 text-md md:text-lg font-bold text-black">
              Is my data safe with Unaport?
            </h1>
          </div>
        </div>
        <p className="p-4 md:w-3/4 font-sans">
          Absolutely, your data&apos;s safety is our top priority at Unaport. We
          implement robust security measures, including real-time data backup
          and a disaster recovery plan, ensuring the security and retrievability
          of your information. It&apos;s important to note that Unaport
          understands the unique requirements of each Financial Information User
          (FIU), and as such, databases and services are distinct for each FIU.
        </p>
      </div>
    </div>
  );
};

export default AboutUnaportBelow;
