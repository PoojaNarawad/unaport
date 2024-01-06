import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div
      className=" w-full 
     font-extrabold text-indigo-900 text-medium"
    >
      <div className=" p-4 md:p-11 flex flex-col justify-around md:flex-row items-center">
       <Image  src={logo} className=" w-full md:w-80 pr-8 mb-4 md:mb-0"  alt="Picture of the logo" />
        <p className="mb-2 md:mb-0 md:mr-4 pt-6">UNAPORT</p>
        <p className="mb-2 md:mb-0 md:mr-4 pt-6">CONTACT</p>
        <p className="mb-2 md:mb-0 pr-4  pt-6">FAQS</p>
       <p className=" border-2 border-blue-600 p-2 pl-9 pr-9 text-blue-600 rounded-full">
       <button>LOGIN</button>
       </p>
      </div>
    </div>
  );
};

export default Header;
