// "use client"

// import React, { useState } from "react";
// import '../../app/globals.css';
// import Image from "next/image";
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// // import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import picture7 from "../../public/assets/7.jpg";
// import picture8 from "../../public/assets/1.jpg";

// const ArticleBelow = () => {

//   const [rotateClass, setRotateClass] = useState('');
//   const [contentIndex, setContentIndex] = useState(0);

//   const rotateContent = () => {
//     setRotateClass('rotate-animation');
//     setTimeout(() => {
//       setRotateClass('');
//       setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
//     }, 1000); 
//   };

//   const contents = [
//     {
//       title: 'Simplify Consent Management',
//       text:
//         'All your consent-related transactions in one user-friendly platform, making it easy to track and manage permissions seamlessly',
//       imageSrc: picture7,
//     },
//     {
//       title: 'Maintain accurate financial data connections ',
//       text: 'real-time tracking for dependable Multi-Account Aggregator connectivity, providing a convenient overview of diverse financial information.',
//       imageSrc: picture8,
//     },
//   ];


//   return (
//     <div className={`mt-10 md:m-4 flex flex-col md:flex-row items-center relative ${rotateClass}`}>
//       <div className="flex flex-col items-center md:w-1/2">
//         <button
//           onClick={rotateContent}
//           className="md:ml-96 mr-20 md:m-3 md:p-3 p-2 border border-blue-900 text-blue-900 rounded-full rotate-icon"
//         >
//           <ArrowDownwardOutlinedIcon />
//         </button>
//         <h1 className="w-4/5 md:w-auto text-4xl md:text-7xl md:ml-20 mt-4 md:mt-0">
//           {contents[contentIndex].title}
//         </h1>
//         <p className="p-1 text-md md:text-2xl font-normal md:p-2 w-3/4 md:w-auto mr-5 md:ml-20">
//           {contents[contentIndex].text}
//         </p>
//       </div>
//       <div className="w-full p-2 md:w-1/2 md:h-96 mt-4 md:mt-0">
//         <Image
//           width={400}
//           height={400}
//           src={contents[contentIndex].imageSrc}
//           alt={`picture${contentIndex + 7}`} // Adjust alt text accordingly
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default ArticleBelow;
