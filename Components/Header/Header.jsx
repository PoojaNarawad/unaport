"use client";
import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const toggleHeader = () => {
    setHeaderOpen(!isHeaderOpen);
  };

  return (
    <div className="w-full p-8 md:p-4 mx-1 -mt-2 md:mt-0 font-extrabold text-indigo-900 text-medium ">
      <button
        className="mt-3 md:hidden relative float-right focus:outline-none"
        onClick={toggleHeader}
        aria-label="Toggle Menu"
      >
        <div
          className={`w-6 h-1 bg-indigo-900 mb-1 transition-transform ${
            isHeaderOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-indigo-900 mb-1 transition-opacity ${
            isHeaderOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-indigo-900 mb-1 transition-transform ${
            isHeaderOpen ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div className="md:flex md:justify-between md:items-center md:mx-6 ">
        <Image
          src={logo}
          width={0}
          height={0}
          className="w-48 md:w-60 pr-4 md:pr-8 relative right-5 md:right-0 md:top-3"
          alt="Logo"
        />
        <div
          className={`flex-col md:flex md:flex-row md:space-x-56 text-center items-center mt-6 ${
            isHeaderOpen ? "flex" : "hidden"
          }`}
        >
          <p className="pt-4 md:pt-0 md:ml-4 md:mr-4">UNAPORT</p>
          <p className="pt-4 md:pt-0 md:ml-4 md:mr-4">CONTACT</p>
          <p className="pt-4 md:pt-0 md:ml-4 md:mr-4">FAQS</p>
          <div className="mt-4 md:mt-0 md:ml-4">
            <button className="py-2 px-4 text-blue-600 border-2 border-blue-600 rounded-full ">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
