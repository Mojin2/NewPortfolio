import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import { BsInstagram, BsGithub, BsGit, BsFacebook } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);
  const [text, setText] = useState("copy");
  return (
    <div
      className={`${
        open ? "bg-transparent delay-500" : "bg-black"
      } relative text-slate-50 h-screen w-screen p-32  flex flex-col items-center justify-center transition-all duration-500`}
    >
      {/* First */}
      <div
        className={`${
          open ? "opacity-0" : "opacity-100 delay-500"
        } flex items-center justify-center flex-col transition-all duration-500`}
      >
        <div className="font-PixelThick text-slate-50 text-6xl">
          Let's work together
        </div>
        <div
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHov(true)}
          onMouseOut={() => setHov(false)}
          className="font-PixelThick text-slate-50 text-3xl border-2 border-slate-50 rounded-2xl px-3 mt-5 cursor-pointer z-10"
        >
          Say hello
        </div>
        <div
          className={`${
            hov ? "md:-bottom-[115px]" : "md:-bottom-[300px]"
          } transition-all duration-300 ease-in-out -bottom-[140px] absolute ml-32 bg-[url('ui/finger.png')] bg-contain w-[500px] h-[500px] z-1`}
        ></div>
      </div>
      {/* Second */}
      <div
        className={`${
          open ? "opacity-100 delay-500" : "opacity-0"
        } w-full h-full absolute flex justify-center items-center flex-row transition-all duration-500`}
      >
        <div className="w-1/2 h-full flex items-center justify-center flex-col z-10">
          <div className="font-PixelThick text-slate-50 text-6xl">
            <div>Let's work</div>
            <div>together</div>
            <div className="mt-10">
              <p className="text-2xl">Contact</p>
              <CopyToClipboard
                text="aiduriaaa@gmail.com"
                className="text-xl font-PixelCute underline cursor-pointer"
                onCopy={() => setText("copied!")}
              >
                <div data-tooltip-id="tooltip" data-tooltip-content={text}>
                  aiduriaaa@gmail.com
                </div>
              </CopyToClipboard>
            </div>
            <div
              onClick={() => setOpen(false)}
              className=" font-PixelThick text-slate-50 text-3xl border-2 border-slate-50 rounded-2xl px-3 mt-5 cursor-pointer z-10 w-[110px]"
            >
              Return
            </div>
            <div className="flex gap-5 mt-5">
              <div className="bg-[#dd2a7b] p-3 rounded-full flex items-center justify-center">
                <BsInstagram className="text-5xl" />
              </div>
              <div className="bg-[#333] p-3 rounded-full flex items-center justify-center">
                <FiGithub className="text-5xl mt-1" />
              </div>
              <div className="bg-[#3b5998] p-3 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-5xl mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
      <Tooltip id="tooltip" place="right" className="-ml-16 font-PixelThick" />
    </div>
  );
};
