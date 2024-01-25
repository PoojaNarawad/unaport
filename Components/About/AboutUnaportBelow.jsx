import React from "react";
import Image from "next/image";
import carousel1 from "../../public/assets/carousel1.jpg";

const AboutUnaportBelow = () => {
  return (
    <div className="flex items-center justify-around font-sans p-10 md:p-10 m-0 md:m-5">
      <div className="relative">
        <Image
          width={500}
          height={0}
          src={carousel1}
          alt="sample"
          className="w-full h-96 rounded-2xl "
        />
        <h1 className="text-sm absolute top-0 p-4 bg-white m-2 w-1/2 rounded-2xl">How reliable in Unaport? What is your uptime?</h1>
        <p className="-m-10 w-2/3">
          Reliability is at the core of the Unaport platform. With a 99.99%
          uptime commitment, our services are consistently accessible. disaster
          recovery plan ensure data
        </p>
      </div>
      <div>
        <h1>Is my data safe with Unaport?</h1>
        <p>
          Absolutely, your data&apos;s safety is our top priority at Unaport. We
          implement robust security measures, including real-time data backup
          and a disaster recovery plan, ensuring the security and retrievability
          of your information. It&apos;s important to note that Unaport understands
          the unique requirements of each Financial Information User (FIU), and
          as such, databases and services are distinct for each FIU.
        </p>
      </div>
    </div>
  );
};

export default AboutUnaportBelow;
