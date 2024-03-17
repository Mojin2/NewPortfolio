import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { MdInfo } from "react-icons/md";
import RaderChart from "./RaderChart";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  FcCommandLine,
  FcInfo,
  FcReading,
  FcVoicePresentation,
  FcBullish,
} from "react-icons/fc";

export const skillss = [
  { title: "JavaScript", level: 85 },
  { title: "HTML + CSS", level: 90 },
  { title: "ReactJS", level: 70 },
  { title: "R3F", level: 20 },
  { title: "TypeScript", level: 30 },
];

export const details = [
  {
    story:
      "In 2020, I experienced UX design and web development for the first time.",
    number: 1,
  },
  {
    story:
      "In 2021~22, I started web development in earnest through coding club activities.",
    number: 2,
  },
  {
    story:
      "After graduating, I developed my skills by carrying out side projects using React starting in 2023.",
    number: 3,
  },
  {
    story:
      "In 2024, I am interested in and learning the latest technologies such as r3f.",
    number: 4,
  },
];
export const mainstats = [
  {
    stat: 28,
    max: 101,
    src: "/public/images/heart.png",
    color: "red",
  },
  {
    stat: 28,
    max: 101,
    src: "/public/images/mp.png",
    color: "blue",
  },
];

export const Skills = (props) => {
  const [age, setAge] = useState(29);
  const { section } = props;
  const [page, setPage] = useState(true);
  const count = useMotionValue(0);
  const roundone = useTransform(count, (latest) => Math.round(latest));
  const isMobile = window.innerWidth < 768;
  const todayTime = new Date();
  const targetdatTime = new Date("2024-12-31");
  const diff = targetdatTime - todayTime;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const exp = 365 - diffDay + 1;

  useEffect(() => {
    const controls = animate(count, 100, { duration: 1 });

    return controls.stop;
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center px-24 gap-x-2">
      {/* Avatar */}
      <div className="w-[400px] h-[600px] flex"></div>
      {/* Infomation */}
      <motion.div
        className="relative bg-[url('/public/images/paper.png')]  bg-no-repeat bg-contain w-[400px] h-[600px] min-w-[400px]"
        style={{
          backgroundSize: "100% 100%",
        }}
        initial={{ opacity: 0, x: 25 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: isMobile ? 2 : 1 },
        }}
      >
        <div className="absolute -top-1 letf-0 flex gap-x-1">
          <div
            className={`${
              page
                ? "opacity-100 bg-[url('/public/images/redlabel.png')]"
                : "opacity-65 bg-[url('/public/images/blacklabel.png')]"
            } cursor-pointer font-PixelThick bg-contain bg-no-repeat w-[110px] h-[35px] flex items-center justify-center text-slate-50`}
            onClick={() => setPage(true)}
          >
            PROFILE
          </div>
          <div
            className={`${
              page
                ? "opacity-65 bg-[url('/public/images/blacklabel.png')]"
                : "opacity-100 bg-[url('/public/images/redlabel.png')]"
            } cursor-pointer font-PixelThick bg-contain bg-no-repeat w-[110px] h-[35px] flex items-center justify-center text-slate-50`}
            onClick={() => setPage(false)}
          >
            DETAILS
          </div>
        </div>
        {page ? (
          <fieldset className="block border-[4px] border-[#222029] mx-9 my-12 h-[500px]">
            <legend className="-mt-[22px] mx-auto w-[170px] text-center font-extrabold text-4xl font-Pixel text-[#222029]">
              PROFILE
            </legend>
            {/* MainInfo */}
            <div className="grid grid-rows-9 px-3">
              <div className="row-span-1 font-Silkscreen font-semibold text-center change flex justify-center items-center">
                Fronted Developer
              </div>
              <div className="row-span-2 gap-x-3 flex">
                <motion.div
                  whileInView={"visible"}
                  className="flex flex-col h-full justify-center gap-y-1 w-full"
                >
                  <div className="flex flex-row items-center">
                    <div className="px-3">
                      <div className="w-[15px] h-[15px] bg-contain bg-no-repeat bg-[url('/public/images/heart.png')]" />
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <div className="h-[15px] w-full bg-slate-100 my-1 rounded-sm shadow-2xl">
                        <motion.div
                          className="h-[15px] bg-red-600 rounded-sm shadow-2xl"
                          style={{ width: `${(age / 100) * 100}%` }}
                          initial={{ scaleX: 0, originX: 0 }}
                          variants={{
                            visible: {
                              scaleX: 1,
                              transition: { duration: 1, delay: 2.5 },
                            },
                          }}
                        />
                      </div>
                      <motion.div className="font-PixelThick text-md pl-2">
                        {`${age}/100`}
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="px-3">
                      <div className="w-[15px] h-[15px] bg-contain bg-no-repeat bg-[url('/public/images/mp.png')]" />
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <div className="h-[15px] w-full bg-slate-100 my-1 rounded-sm shadow-2xl">
                        <motion.div
                          className="h-[15px] bg-blue-600 rounded-sm shadow-2xl"
                          initial={{ scaleX: 0, originX: 0 }}
                          style={{ width: `${(exp / 365) * 100}%` }}
                          variants={{
                            visible: {
                              scaleX: 1,
                              transition: { duration: 1, delay: 2.5 },
                            },
                          }}
                        />
                      </div>
                      <motion.div className="font-PixelThick text-md pl-2">
                        {`${exp}/365`}
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="px-3">
                      <div className="w-[15px] font-PixelThick">EXP</div>
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <div className="h-[15px] w-full bg-slate-100 my-1 rounded-sm shadow-2xl">
                        <motion.div
                          className="h-[15px] bg-yellow-400 rounded-sm shadow-2xl"
                          style={{ width: `79%` }}
                          initial={{ scaleX: 0, originX: 0 }}
                          variants={{
                            visible: {
                              scaleX: 1,
                              transition: { duration: 1, delay: 2.5 },
                            },
                          }}
                        />
                      </div>
                      <motion.div className="font-PixelThick text-md pl-2">
                        {`79/100`}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <div className="flex items-center justify-center">
                  <MdInfo
                    className="text-xl"
                    aria-describedby={id}
                    onClick={handleClick}
                  />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  >
                    <Typography className="p-2">
                      <div className="font-PixelThick">HP : Age</div>
                      <div className="font-PixelThick">
                        MP : Dating Until Next Age
                      </div>
                      <div className="font-PixelThick">
                        EXP : Coding Proficiency
                      </div>
                    </Typography>
                  </Popover>
                </div>
              </div>
              {/* Stats */}
              <motion.div className="row-span-3">
                <div className="flex w-full h-full">
                  <motion.div
                    className={`h-full w-full items-center justify-center flex`}
                  >
                    <RaderChart />
                  </motion.div>
                </div>
              </motion.div>
              {/* Skills */}
              <div className="row-span-3">
                <motion.div whileInView={"visible"} className="">
                  <div className="flex items-center flex-col">
                    {skillss.map((skill, index) => (
                      <div
                        className="w-full flex flex-row items-center px-5"
                        key={index}
                      >
                        <motion.h3 className="w-48 font-PixelThick text-lg">
                          {skill.title}
                        </motion.h3>
                        <div className="h-3.5 w-full bg-slate-100 rounded-sm shadow-2xl ">
                          <motion.div
                            className="h-full bg-emerald-600 rounded-sm shadow-2xl"
                            style={{ width: `${skill.level}%` }}
                            initial={{ scaleX: 0, originX: 0 }}
                            variants={{
                              visible: {
                                scaleX: 1,
                                transition: {
                                  duration: 1,
                                  delay: 2.5 + index * 0.2,
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </fieldset>
        ) : (
          <fieldset className="block border-[4px] border-[#222029] mx-9 my-12 h-[500px]">
            <legend className="-mt-[22px] mx-auto w-[170px] text-center font-extrabold text-4xl font-Pixel text-[#222029]">
              DETAILS
            </legend>
            <div className="grid grid-rows-4 my-4">
              {details.map((detail, index) => (
                <div
                  className="flex flex-row gap-x-3 px-3 items-center"
                  key={index}
                >
                  {detail.number === 1 ? (
                    <FcCommandLine size={90} />
                  ) : detail.number === 2 ? (
                    <FcVoicePresentation size={90} />
                  ) : detail.number === 3 ? (
                    <FcReading size={90} />
                  ) : (
                    <FcBullish size={90} />
                  )}
                  <div className="row-span-1 font-PixelThick text-[17px] text-[#222029]">
                    {detail.story}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        )}
      </motion.div>
    </div>
  );
};

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
