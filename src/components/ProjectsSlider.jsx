import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export const projectss = [
  {
    title: "Covid Crawler",
    url: undefined,
    git: "https://github.com/Mojin2/Covid_Crawling",
    image: "/public/images/1.png",
    languages: ["Python", "JavaScript"],
    description:
      "Crawl the number of confirmed covid patients with python, provide a search function through the LED board using Raspberry Pi GPIO.",
  },
  {
    title: "CarbonMBTI",
    url: undefined,
    git: "https://github.com/TSJK-MBTI/CarbonMBTI",
    image: "/public/images/2.png",
    languages: ["JavaScript", "HTML", "CSS"],
    description:
      "Provides information on carbon emissions and improvement measures in the result window by using the mbit test format.",
  },
  {
    title: "Salgu Market",
    url: undefined,
    git: "https://github.com/SalguMarket/SalguMarket",
    image: "/public/images/4.png",
    languages: ["Spring", "JavaScript", "HTML", "CSS"],
    description:
      "Used food material and waste material trading market project created using the Spring framework.",
  },
  {
    title: "React Projects",
    url: undefined,
    git: "https://github.com/Mojin2/React_Project",
    image: undefined,
    languages: ["React", "TypeScript", "HTML", "CSS"],
    description: undefined,
  },
  {
    title: "Portfolio",
    url: "https://Mojin2.github.io/Portfolio",
    git: "https://github.com/Mojin2/Portfolio",
    image: "/public/images/8.png",
    languages: ["React", "R3F", "JavaScript", "HTML", "CSS"],
    description:
      "The old verstion used React, and the new version uses a 3D model through r3f in React and has been imporved to a responsive web. It's old version, and now you viewing is new version.",
  },
];
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
        {projectss.map((project, index) => (
          // Project Details
          <div
            key={index}
            className={`bg-[url('/public/images/board.png')] bg-cover relative px-4 py-5  w-[350px] h-[500px] flex justify-center items-center text-slate-900 text-4xl transition-all duration-150  rounded-lg shadow-lg ${
              index === currentIndex ? "" : "opacity-65 scale-90"
            }`}
          >
            <div className="flex flex-col w-full h-full">
              <div className=" w-full h-[240px] flex items-center justify-center p-2">
                {project.image === undefined ? (
                  <div className="text-slate-50 w-full h-full border-[3px] border-[#8f7157] rounded-lg bg-slate-900 flex items-center justify-center font-PixelThick">
                    React Projects
                  </div>
                ) : (
                  <img
                    src={project.image}
                    className="w-full h-full border-[3px] border-[#8f7157] rounded-lg"
                  />
                )}
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
                    } else if (lang === "Python") {
                      return (
                        <div
                          className="bg-red-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    } else if (lang === "TypeScript") {
                      return (
                        <div
                          className="bg-cyan-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    } else if (lang === "R3F") {
                      return (
                        <div
                          className="bg-indigo-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
                          key={index}
                        >
                          {lang}
                        </div>
                      );
                    } else if (lang === "Spring") {
                      return (
                        <div
                          className="bg-blue-600 text-slate-50 rounded-full px-2 text-xs font-PixelCute flex items-center justify-center"
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
                {project.description ? (
                  <div className="mt-2 text-sm font-PixelThick text-[#9d8469] text-shadow-brown">
                    {project.description}
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-1 mt-3 text-sm underline font-PixelThick text-[#9d8469] text-shadow-brown">
                    <div
                      onClick={() =>
                        window.open(
                          "https://mojin2.github.io/CoinTracker",
                          "_blank"
                        )
                      }
                      className="cursor-pointer"
                    >
                      CoinTracker (Click here to Live View)
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://mojin2.github.io/ToDolist",
                          "_blank"
                        )
                      }
                      className="cursor-pointer"
                    >
                      ToDolist (Click here to Live View)
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://mojin2.github.io/Movieflix",
                          "_blank"
                        )
                      }
                      className="cursor-pointer"
                    >
                      MovieFlix (Click here to Live View)
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full h-[65px] flex flex-row gap-3 p-2">
                <div
                  onClick={() => window.open(project.git, "_blank")}
                  className="cursor-pointer bg-[url('/public/images/brownbutton.png')] bg-cover bg-no-repeat h-full w-[250px] rounded-lg font-PixelThick text-xl flex items-center justify-center text-[#36242b]"
                >
                  git
                </div>
                <div
                  onClick={() => {
                    if (project.url === undefined) {
                      alert("Deployment halted.");
                    } else {
                      window.open(project.url, "_blank");
                    }
                  }}
                  className="cursor-pointer bg-[url('/public/images/brownbutton.png')] bg-cover bg-no-repeat h-full w-[250px] rounded-lg font-PixelThick text-xl flex items-center justify-center text-[#36242b]"
                >
                  Live View
                </div>
              </div>
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
              ? "bg-slate-600"
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
              ? "bg-slate-600"
              : "bg-[#8f7157] hover:bg-[#a88f73]"
          } rounded-full w-[54px] h-[54px] flex items-center justify-center`}
        >
          <FiArrowRight className="text-4xl text-slate-50" />
        </button>
      </div>
    </div>
  );
};
