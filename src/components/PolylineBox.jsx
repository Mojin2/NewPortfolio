import React from "react";
import { motion } from "framer-motion";
import { skills } from "./Interface";

export const PolylineBox = () => {
  const fillColor = `white`;
  const strokeColor = "white";
  const backGroundColor = `white`;

  return (
    <svg
      id="skills-svg"
      viewBox="-2 -2 506 815"
      className="w-full scale-150 pl-16 mt-[-100px]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid"
    >
      <g id="about-svg-header" style={{ opacity: 1, fill: fillColor }}>
        {/* Header Content Background */}
        <polyline
          points="0,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170,0 170,0 83"
          style={{ opacity: 1, fill: fillColor }}
          stroke={strokeColor}
          strokeWidth={5}
        />
        <foreignObject x="20" y="100" width="440" height="60">
          <p className="text-slate-50 flex font-bold">
            <div className="flex flex-row gap-24">
              <div>
                <p className="text-xl">Name:</p>
                <p className="text-2xl">JeenGyu</p>
              </div>
              <div className="pt-0.5">
                <p className="text-md">Age:</p>
                <p className="text-lg">1996.03</p>
              </div>
              <div className="pt-0.5">
                <p className="text-md">From:</p>
                <p className="text-lg">Korea</p>
              </div>
            </div>
          </p>
        </foreignObject>
      </g>

      {/* Skills */}
      <g transform="translate(0 188)" style={{ opacity: 1 }}>
        {/* Background */}
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290 400,290 410,280 490,280 500,270 500,55 490,45 310,45 300,35"
          style={{ opacity: 1, fill: fillColor }}
          stroke={strokeColor}
          strokeWidth={5}
        />
        {/* Lines */}
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290"
          style={{
            strokeDasharray: 796.882,
            strokeDashoffset: "0px",
            fill: fillColor,
          }}
          stroke={strokeColor}
          strokeWidth={5}
        />
        <polyline
          points="250,35 300,35 310,45 490,45 500,55 500,270 490,280 410,280 400,290 250,290"
          style={{
            strokeDasharray: 731.569,
            strokeDashoffset: "0px",
            fill: fillColor,
          }}
          stroke={strokeColor}
          strokeWidth={5}
        />

        {/* Header Mask */}
        <mask id="skills-header-mask">
          <polyline
            fill={strokeColor}
            points="0,37 0,10 10,0 190,0 200,10 200,37"
          />
          <rect fill={strokeColor} x="0" y="210" width="500" height="6" />
        </mask>

        {/* Header Box */}
        <rect
          id="skills-header-rect"
          x="0"
          y="0"
          height="47"
          width="500"
          fill="transparent"
          style={{ width: 220 }}
        />

        {/* Header Text */}
        {/* <text x="71" y="25" className="" fontSize="18" fontWeight="bold">
          SKILLS
        </text> */}
        <foreignObject x="-2.5" y="-4.3" width="210" height="42">
          <p className="text-slate-50 w-full font-bold text-2xl h-full flex items-center justify-center border-top-right">
            SKILLS
          </p>
        </foreignObject>
        <foreignObject x="0" y="55" width="500" height="190">
          {/* Skills Content */}
          <div className="bg-transparent w-full h-full flex justify-center items-center">
            <motion.div whileInView={"visible"} className="w-[450px] ">
              <div className="w-[420px] text-slate-100 px-4 py-4">
                {skills.map((skill, index) => (
                  <div className="w-96 flex flex-row mb-1" key={index}>
                    <motion.h3 className="text-xl font-bold w-64">
                      {skill.title}
                    </motion.h3>
                    <motion.div className="h-3 w-full bg-slate-200 rounded-full mt-2">
                      <motion.div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ scaleX: 0, originX: 0 }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: { duration: 1, delay: 1 + index * 0.2 },
                          },
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </foreignObject>
      </g>

      {/* About */}
      <g
        transform="translate(0 459)"
        id="about-svg-about"
        style={{ opacity: 1 }}
      >
        {/* Background */}
        <polyline
          id="about-about-background"
          className="about-box-background"
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335 490,335 500,325 500,55 490,45 410,45 400,35"
          style={{ opacity: 1, fill: fillColor }}
          stroke={strokeColor}
          strokeWidth={5}
        />

        {/* Lines */}
        <polyline
          className="about-box-line"
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335"
          style={{
            strokeDasharray: 846.569,
            strokeDashoffset: "0px",
            fill: fillColor,
          }}
          stroke={strokeColor}
          strokeWidth={5}
        />
        <polyline
          className="about-box-line"
          points="250,35 400,35 410,45 490,45 500,55 500,325 490,335 250,335"
          style={{
            strokeDasharray: 782.426,
            strokeDashoffset: "0px",
            fill: fillColor,
          }}
          stroke={strokeColor}
          strokeWidth={5}
        />

        {/* Header Mask */}
        <mask id="about-header-mask">
          <polyline
            fill={strokeColor}
            points="0,37 0,10 10,0 190,0 200,10 200,37"
          />
          <rect fill={strokeColor} x="0" y="210" width="500" height="6" />
        </mask>

        {/* Header Box */}
        <rect
          id="about-header-rect"
          x="0"
          y="0"
          height="47"
          width="500"
          fill="transparent"
          style={{ width: 500 }}
        />

        {/* Header Text */}
        <foreignObject x="-2.5" y="-4.3" width="210" height="42">
          <p className="text-slate-50 w-full font-bold text-2xl bg-green-700 h-full flex items-center justify-center border-top-right">
            ABOUT
          </p>
        </foreignObject>
        <foreignObject x="10" y="80" width="480" height="1100">
          <div className="flex text-slate-50 flex-col gap-4 font-bold text-lg">
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="w-8 h-5 bg-black" />
              <div>
                At the age of 15, David first came in touch with UX Design and
                app development.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="w-8 h-5 bg-black" />
              <div>
                At the age of 15, David first came in touch with UX Design and
                app development.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="w-8 h-5 bg-black" />
              <div>
                At the age of 15, David first came in touch with UX Design and
                app development.
              </div>
            </div>
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
