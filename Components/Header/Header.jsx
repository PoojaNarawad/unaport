"use client";
import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

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
      <div className="md:flex md:justify-between md:mx-12 md:items-center">
        <Image
          src={logo}
          width={0}
          height={0}
          className="w-48 md:w-72 pr-4 md:pr-10 relative right-5 md:right-0 md:top-3"
          alt="Logo"
        />
        <div
          className={`flex-col md:flex md:flex-row text-center items-center md:space-x-52 mt-6 ${
            isHeaderOpen ? "flex" : "hidden"
          }`}
        >
         <Link href={"/"}><p className="pt-4 md:pt-0 md:ml-4 md:mr-4">UNAPORT</p></Link>
         <Link href={"/contact"}><p className="pt-4 md:pt-0 md:ml-4 md:mr-4">CONTACT</p></Link>
         <Link href={"/FAQ"}><p className="pt-4 md:pt-0 md:ml-4 md:mr-4">FAQS</p></Link>
         <Link href={"/login"}>
         <div className="mt-4 md:mt-0 md:mr-6">
            <button className="py-2 px-4 text-blue-600 border-2 border-blue-600 rounded-full ">
              LOGIN
            </button>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
