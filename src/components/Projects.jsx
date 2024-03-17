// import { useEffect, useState } from "react";
// import { FaComputer } from "react-icons/fa6";
// import { animate, motion, useMotionValue, useTransform } from "framer-motion";
// import {
//   MdOutlineKeyboardArrowUp,
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardDoubleArrowUp,
//   MdOutlineKeyboardDoubleArrowDown,
// } from "react-icons/md";
// import RaderChart from "./RaderChart";

// export const skillss = [
//   { title: "JavaScript", level: 85 },
//   { title: "HTML + CSS", level: 90 },
//   { title: "ReactJS", level: 70 },
//   { title: "R3F", level: 20 },
//   { title: "TypeScript", level: 30 },
// ];

// export const details = [
//   {
//     story:
//       "At the age of 15, David first came in touch with UX Design and app development.",
//   },
//   {
//     story:
//       "At the age of 15, David first came in touch with UX Design and app development.",
//   },
//   {
//     story:
//       "At the age of 15, David first came in touch with UX Design and app development.",
//   },
//   {
//     story:
//       "At the age of 15, David first came in touch with UX Design and app development.",
//   },
// ];
// export const mainstats = [
//   {
//     stat: 28,
//     max: 101,
//     src: "/heart.png",
//     color: "red",
//   },
//   {
//     stat: 28,
//     max: 101,
//     src: "/mp.png",
//     color: "blue",
//   },
//   {
//     stat: 28,
//     max: 101,
//     src: "/mp.png",
//     color: "yellow",
//   },
// ];

// export const Skills = (props) => {
//   const [age, setAge] = useState(29);
//   const { section } = props;

//   const count = useMotionValue(0);
//   const roundone = useTransform(count, (latest) => Math.round(latest));

//   useEffect(() => {
//     const controls = animate(count, 100, { duration: 1 });

//     return controls.stop;
//   }, []);
//   return (
//     <div className="w-screen h-screen grid grid-cols-1 gap-1  xl:grid-cols-3">
//       {/* Avatar */}
//       <div className="col-span-1"></div>
//       {/* Infomation */}
//       <motion.div
//         className="bg-[url('/paper.png')] bg-no-repeat bg-contain col-span-1 xl:my-28 w-[400px] sm:w-[500px] h-[600px] sm:h-[600px] xl:w-full mx-auto"
//         style={{
//           backgroundSize: "100% 100%",
//         }}
//         initial={{ opacity: 0, x: 25 }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//           transition: { duration: 1, delay: 1 },
//         }}
//       >
//         <fieldset className="block border-[4px] border-[#222029] mx-9 my-12 h-[500px]">
//           <legend className="-mt-[22px] mx-auto w-[170px] text-center font-extrabold text-4xl font-Pixel text-[#222029]">
//             PROFILE
//           </legend>
//           {/* MainInfo */}
//           <div className="grid grid-rows-9 px-3">
//             <div className="row-span-1 font-Silkscreen font-semibold text-center change flex justify-center items-center">
//               Fronted Developer
//             </div>
//             <div className="row-span-2 flex">
//               <motion.div
//                 whileInView={"visible"}
//                 className="flex flex-col h-full justify-center gap-y-1 w-full"
//               >
//                 {mainstats.map((mainstat, index) => (
//                   <div className="flex flex-row items-center">
//                     <div className="px-3">
//                       <img className="w-[15px]" src={mainstat.src} />
//                     </div>
//                     <div className="flex flex-row items-center w-full">
//                       <div className="h-[15px] w-full bg-slate-100 my-1 rounded-sm shadow-2xl">
//                         <motion.div
//                           className="w-1/5 h-[15px] bg-red-600 rounded-sm shadow-2xl"
//                           initial={{ scaleX: 0, originX: 0 }}
//                           variants={{
//                             visible: {
//                               scaleX: 1,
//                               transition: { duration: 1, delay: 1 },
//                             },
//                           }}
//                         />
//                       </div>
//                       <motion.div className="font-Silkscreen text-xs pl-2">
//                         28/101
//                       </motion.div>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//             {/* Stats */}
//             <motion.div className="row-span-3">
//               <div className="flex w-full h-full">
//                 <motion.div
//                   className={`h-full w-full items-center justify-center flex`}
//                 >
//                   <RaderChart />
//                 </motion.div>
//               </div>
//             </motion.div>
//             {/* Skills */}
//             <div className="row-span-3">
//               <motion.div whileInView={"visible"} className="">
//                 <div className="flex items-center flex-col gap-y-2 py-2">
//                   {skillss.map((skill, index) => (
//                     <div
//                       className="w-full flex flex-row items-center px-5"
//                       key={index}
//                     >
//                       <motion.h3 className="w-48 font-Silkscreen text-sm font-md">
//                         {skill.title}
//                       </motion.h3>
//                       <div className="h-3.5 w-full bg-slate-100 rounded-sm shadow-2xl ">
//                         <motion.div
//                           className="h-full bg-emerald-600 rounded-sm shadow-2xl"
//                           style={{ width: `${skill.level}%` }}
//                           initial={{ scaleX: 0, originX: 0 }}
//                           variants={{
//                             visible: {
//                               scaleX: 1,
//                               transition: {
//                                 duration: 1,
//                                 delay: 1 + index * 0.2,
//                               },
//                             },
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </fieldset>
//       </motion.div>
//       {/* Details */}
//       <motion.div
//         className="bg-[url('/paper.png')] bg-no-repeat bg-contain col-span-1 xl:my-28 w-[400px] sm:w-[500px] h-[600px] sm:h-[600px] xl:w-full mx-auto"
//         style={{
//           backgroundSize: "100% 100%",
//         }}
//         initial={{ opacity: 0, x: 25 }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//           transition: { duration: 1, delay: 1.2 },
//         }}
//       >
//         <fieldset className="block border-[4px] border-[#222029] mx-9 my-12 h-[500px]">
//           <legend className="-mt-[22px] mx-auto w-[170px] text-center font-extrabold text-4xl font-Pixel text-[#222029]">
//             DETAILS
//           </legend>
//           <div className="grid grid-rows-4 my-4 gap-y-2">
//             {details.map((detail, index) => (
//               <div
//                 className="flex flex-row gap-5 px-7 items-center"
//                 key={index}
//               >
//                 <FaComputer size={90} />
//                 <div className="row-span-1 font-Pixel text-[#222029]">
//                   {detail.story}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </fieldset>
//       </motion.div>
//     </div>
//   );
// };

// {/* <div className="row-span-2 w-full h-full pt-10 flex items-center justify-center">
// <div className="w-[90%]">
//   <div className="grid grid-cols-3">
//     <div className="col-span-2 flex items-center justify-center">
//       <div className="grid grid-rows-2 gap-1">
//         <div className="flex gap-1">
//           {/* Level Icon */}
//           <div className="relative w-12 h-12 bg-black flex justify-center items-center rounded-xl">
//             <div
//               className="h-full absolute left-0 bg-[#3b82f6] z-1 rounded-l-xl"
//               style={{ width: `${age * 2}%` }}
//             ></div>
//             <div className="text-white font-extrabold text-lg z-0">
//               {age}
//             </div>
//           </div>
//           {/* Level status bar */}
//           <div className="w-[150px]">
//             <div className="flex items-end justify-end font-Kanit text-[#e5c869] text-shadow-brown font-extrabold text-xl">
//               JeenGyu
//             </div>
//             <div className="relative w-[150px] bg-slate-600 h-[22px] z-1 flex items-center justify-center rounded-sm">
//               <div className="absolute left-0 bg-[#3c7b25] w-[70px] h-full z-1 rounded-l-sm"></div>
//               <div className="text-white font-extrabold text-lg z-0">
//                 187/365
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Next Level */}
//         <div className="flex items-center justify-center">
//           <div className="bg-[#693f27] border-2 border-[#3d2414] rounded-sm px-5 font-Kanit font-bold text-[#e5c869] text-shadow-brown">
//             1450 XP till next level
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Major */}
//     <div className="w-full h-full flex items-end justify-center">
//       <div className="bg-[#693f27] border-2 border-[#3d2414] h-24 w-32 flex items-center justify-center flex-col rounded-3xl m-3">
//         <FaComputer
//           className="font-Kanit font-bold text-[#e5c869] text-shadow-brown"
//           size={48}
//         />
//         <div className="font-Kanit font-bold text-[#e5c869] text-shadow-brown">
//           Developer
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}
