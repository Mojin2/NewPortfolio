import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import { BsInstagram, BsGithub, BsGit, BsFacebook } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);
  const [text, setText] = useState("copy");
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className={`${
        open ? "bg-transparent delay-500" : "bg-black"
      } relative text-slate-50 h-screen w-screen px-28 flex flex-col transition-all duration-500`}
    >
      {/* First */}
      <div
        className={`${
          open ? "opacity-0" : "opacity-100 delay-500"
        } w-full h-full flex items-center justify-center flex-col transition-all duration-500`}
      >
        <div className="font-PixelThick text-slate-50 text-6xl">
          Let's work together
        </div>
        <motion.button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHov(true)}
          onMouseOut={() => setHov(false)}
          whileTap={{ scale: 0.85 }}
          className="hover:bg-red-800 font-PixelThick text-slate-50 text-3xl border-2 border-slate-50 rounded-2xl px-3 mt-5 cursor-pointer z-10"
        >
          Say hello
        </motion.button>
        <div
          className={`${
            hov ? "md:-bottom-[115px]" : "md:-bottom-[300px]"
          } transition-all duration-300 ease-in-out -bottom-[190px] absolute ml-32 bg-[url('/public/images/finger.png')] bg-contain w-[500px] h-[500px] z-1`}
        ></div>
      </div>
      {/* Second */}
      <div
        className={`${
          open ? "opacity-100 delay-500" : "opacity-0"
        } w-full h-full absolute top-0 left-0 transition-all duration-500`}
      >
        <div className="w-full md:w-1/2 h-full flex md:justify-center md:mt-0 items-center mt-16 flex-col z-10">
          <div className="font-PixelThick text-slate-50 text-6xl">
            <div>Let's work</div>
            <div>together</div>
            <div className="mt-1">
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
            <motion.button
              onClick={() => setOpen(false)}
              whileTap={{ scale: 0.85 }}
              className="hover:bg-red-800  font-PixelThick text-slate-50 text-3xl border-2 border-slate-50 rounded-2xl px-3 mt-5 cursor-pointer z-10 w-[110px]"
            >
              Return
            </motion.button>
            <div className="flex gap-5 mt-3">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() =>
                  window.open("https://www.instagram.com/wlsrbbb/", "_blank")
                }
                className="hover:opacity-85 bg-[#dd2a7b] p-3 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <BsInstagram className="text-4xl" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() =>
                  window.open("https://github.com/Mojin2", "_blank")
                }
                className="hover:opacity-85 bg-[#333] p-3 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <FiGithub className="text-5xl mt-1" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100004008876656",
                    "_blank"
                  )
                }
                className="hover:opacity-85 bg-[#3b5998] p-3 w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <FaFacebookF className="text-3xl mt-1" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className={`${isMobile ? "hidden" : ""} w-1/2 h-full`}></div>
      </div>
      <Tooltip id="tooltip" place="right" className="-ml-16 font-PixelThick" />
    </div>
  );
};
