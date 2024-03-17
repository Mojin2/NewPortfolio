import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export const ProjectsSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col bg-transparent">
      <div>
        <div className="w-screen flex flex-col ml-20 mb-10 text-white font-extrabold text-5xl md:text-6xl">
          <p className="font-PixelThick">Some things</p>
          <p className="font-PixelThick">I've worked on.</p>
        </div>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(${20.1 * (2 - currentIndex)}%)` }}
      >
        {projects.map((project, index) => (
          // Project Details
          <div
            key={index}
            className={`bg-[url('ui/board.png')] bg-cover relative px-4 py-5  w-[350px] h-[500px] flex justify-center items-center text-slate-900 text-4xl transition-all duration-150  rounded-lg shadow-lg ${
              index === currentIndex ? "" : "opacity-65 scale-90"
            }`}
          >
            <div className="flex flex-col w-full h-full">
              <div className=" w-full h-[240px] flex items-center justify-center p-2">
                <div className="bg-black w-full h-full rounded-lg border-[3px] border-[#8f7157]" />
              </div>
              <div className=" w-full h-[150px] px-2">
                <div className="text-4xl font-PixelThick text-[#8f7157] text-shadow-brown">
                  {project.title}
                </div>
                <div className="flex gap-x-[6px] mt-1">
                  {project.languages.map((lang, index) => {
                    if (lang === "JavaScript") {
                      return (
                        <div
                          className="bg-yellow-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    } else if (lang === "React") {
                      return (
                        <div
                          className="bg-green-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="border-2 border-slate-300 text-slate-300 rounded-full px-2 text-xs font-PixelCute"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="mt-2 text-2xl font-PixelCute text-[#9d8469] text-shadow-brown">
                  {project.description}
                </div>
              </div>
              <div className="w-full h-[65px] flex flex-row gap-3 p-2">
                <div className="bg-[url('/brownbutton.png')] bg-cover bg-no-repeat h-full w-[250px] rounded-lg font-PixelThick text-xl flex items-center justify-center text-[#36242b]">
                  git
                </div>
                <div className="bg-[url('/brownbutton.png')] bg-cover bg-no-repeat h-full w-[250px] rounded-lg font-PixelThick text-xl flex items-center justify-center text-[#36242b]">
                  Live View
                </div>
              </div>
              {/* <div className="mb-28">
                <div className="w-80 h-64 bg-black rounded-lg mb-2" />
                <div className="flex items-start flex-col mx-2">
                  <p className="font-bold text-3xl mb-2">{project.title}</p>
                  <div className="flex flex-row gap-3 text-xs mb-3">
                    {project.languages.map((language, index) => (
                      <div
                        className="border rounded-xl px-2 border-slate-600"
                        key={index}
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                  <p className="text-xl">{project.description}</p>
                </div>
              </div>
              <div className="flex w-[91%] flex-row gap-2 bottom-3 absolute">
                <div className="bg-slate-400 w-1/5 flex items-center justify-center rounded-lg text-slate-50 text-lg py-2 font-bold">
                  <FaGithub className="text-2xl" />
                </div>
                <div className="bg-orange-300 w-4/5 flex items-center justify-center rounded-lg text-slate-50 text-lg py-2 font-bold">
                  Live View
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {/* Button Setting */}
      <div className="items-center h-16 w-full flex justify-center space-x-6 mt-6">
        <button
          onClick={prevItem}
          disabled={currentIndex === 0 ? true : false}
          className={`${
            currentIndex === 0
              ? "bg-slate-400"
              : "bg-[#8f7157] hover:bg-[#a88f73]"
          } rounded-full w-[54px] h-[54px] flex items-center justify-center`}
        >
          <FiArrowLeft className="text-4xl text-slate-50" />
        </button>
        <button
          onClick={nextItem}
          disabled={currentIndex === projects.length - 1 ? true : false}
          className={`${
            currentIndex === projects.length - 1
              ? "bg-slate-400"
              : "bg-[#8f7157] hover:bg-[#a88f73]"
          } rounded-full w-[54px] h-[54px] flex items-center justify-center`}
        >
          <FiArrowRight className="text-4xl text-slate-50" />
        </button>
      </div>
    </div>
  );
};
