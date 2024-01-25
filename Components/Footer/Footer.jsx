import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { Inter } from 'next/font/google';

const Footer = () => {
  return (
    <div className="m-10 p-10 font-sans block md:flex md:items-center justify-around rounded-2xl bg-sky-100">
    <div className="md:p-5">
      <Image
        src={logo}
        className="w-44 md:mb-0"
        alt="Picture of the logo"
      />
      <p className="pt-4 md:w-80">
        401, Shri Vidhya Vihar,Happy Homes Society, Nehru Road, Vileparle
        (East), Mumbai-400057
      </p>
    </div>
    <div className="mt-4 md:mt-0">
      <p className="pr-4 md:pr-20 mt-20 ">Privacy Policy</p>
    </div>
    <div className="mt-4 md:mt-0">
      <div>
        <p>Email For Sales</p>
        <p>sales@unaport.com</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="md:mt-11">Grievance Policy</p>
      </div>
    </div>
    <div className="mt-4 md:mt-0">
      <div>
        <p>Phone No.</p>
        <p>+0919867902913</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="md:mt-11">Terms & Conditions</p>
      </div>
    </div>
    <div className="mt-4 md:mt-0">
      <div>
        <p>Email For Support</p>
        <p>support@unaport.com</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="md:mt-11">Pricing Policy</p>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
