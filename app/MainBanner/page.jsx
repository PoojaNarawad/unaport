import React from "react";

const Banner = () => {
  return (
    <div className=" m-16">
     <div  className="text-6xl font-serif">
     <p className="mb-2">Simplify Your</p>
      <p className="mb-2 text-blue-700"> Financial Information </p>
      <p className="mb-2">Management</p>
     </div>
     <div className=" w-96 mt-10 text-xl text-gray-500">
     <p>
        Empowering businesses of every scale,
         Unaport is Your trusted partner for 
         streamlined financial data management.
      </p>
      <p className="mt-8 mb-4">
        Enhance Connectivity, Optimize Insights,
         and fuel Your growth with confidence.
      </p>
     </div>
      <button className=" border-2 border-blue-600 p-2 pl-9 pr-9 text-blue-700 rounded-full">
        Sign In
      </button>
    </div>
  );
};

export default Banner;
