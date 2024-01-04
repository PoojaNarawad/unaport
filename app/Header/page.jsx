import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div
      className=" w-full left-0 top-0 right-16
     font-extrabold text-indigo-900 text-medium "
    >
      <div className=" pt-11  pb-0 flex justify-around items-center">
       <Image src={logo} width={400} height={400} alt="Picture of the logo" />
        <p>UNAPORT</p>
        <p>CONTACT</p>
        <p>FAQS</p>
        <button className=" border-2 border-blue-600 p-2 pl-9 pr-9 text-blue-600 rounded-full">LOGIN</button>
      </div>
    </div>
  );
};

export default Header;
