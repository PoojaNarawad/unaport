"use client"

import React, {useState} from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
const Header = () => {

  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const toggleHeader = () => {
    setHeaderOpen(!isHeaderOpen);
  };


  return (
    <div className=" w-full p-10 mt-2 md:p-5 font-extrabold text-indigo-900 text-medium">
        <button
          className="md:hidden relative float-right"
          onClick={toggleHeader}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-indigo-900 mb-1 transition-transform ${isHeaderOpen && 'rotate-45'}`} />
          <div className={`w-6 h-0.5 bg-indigo-900 mb-1 transition-opacity ${isHeaderOpen && 'opacity-0'}`} />
          <div className={`w-6 h-0.5 bg-indigo-900 mb-1 transition-transform ${isHeaderOpen && '-rotate-45'}`} />
        </button>
        <div className="">
        <Image src={logo} className="w-48 md:w-60 pr-8 md:mb-0" alt="Picture of the logo" />
        <div className={`flex-col md:flex md:flex-row items-center ml-32 -mt-16 justify-evenly  ${isHeaderOpen ? 'flex' : 'hidden'}`}>
          <p className="mb-2 md:mb-0 md:mr-4 pt-6">UNAPORT</p>
          <p className="mb-2 md:mb-0 md:mr-4 pt-6">CONTACT</p>
          <p className="mb-2 md:mb-0 pr-4 pt-6">FAQS</p>
          <p className="border-2 border-blue-600 text-blue-600  mt-7 p-2 pl-6 pr-6 text-center rounded-full">
          <button>LOGIN</button>
          </p>
        </div>
        </div>
      </div>
  );
};

export default Header;
