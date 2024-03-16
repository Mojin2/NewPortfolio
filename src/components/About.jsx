import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MovingComponent } from "react-moving-text";

export const About = (props) => {
  const { setSection } = props;
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-start md:justify-center md:pl-32">
      <h1 className="text-[80px] font-extrabold text-slate-950 font-PixelThick flex flex-col">
        <div>Hi, I'm</div>
        <div>JeenGyu.</div>
      </h1>
      <motion.p
        className="text-[40px] text-slate-950 mt-4 font-semibold font-PixelThick"
        // initial={{ opacity: 0, y: 25 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: { duration: 1, delay: 0.5 },
        // }}
      >
        <div>I Am Frontend Developer</div>
      </motion.p>
      {/* <motion.div
        className="grid grid-cols-2 text-slate-50 font-PixelThick text-4xl gap-x-6 gap-y-3 mt-8 pt-5"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1 },
        }}
      >
        <div
          onClick={() => setSection(0)}
          className="text-3xl bg-[url('brownbutton.png')] bg-cover bg-no-repeat hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center items-center shadow-2xl rounded-md px-6 text-shadow-lg py-2"
        >
          Home
        </div>
        <div
          onClick={() => setSection(1)}
          className="text-3xl bg-[url('brownbutton.png')] bg-cover bg-no-repeat hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center items-center shadow-2xl rounded-md px-6 text-shadow-lg py-2"
        >
          About
        </div>
        <div
          onClick={() => setSection(2)}
          className="text-3xl bg-[url('brownbutton.png')] bg-cover bg-no-repeat hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center items-center shadow-2xl rounded-md px-6 text-shadow-lg py-2"
        >
          Project
        </div>
        <div
          onClick={() => setSection(3)}
          className="text-3xl bg-[url('brownbutton.png')] bg-cover bg-no-repeat hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center items-center shadow-2xl rounded-md px-6 text-shadow-lg py-2"
        >
          Contact
        </div>
      </motion.div> */}
      <motion.button
        className="px-3 py-5 bg-[#7f1423] font-PixelThick flex justify-center items-center text-slate-50 shadow-md text-3xl rounded-md mt-10"
        onClick={() => setSection(3)}
        whileTap={{ scale: 0.85 }}
      >
        Play with Me?
      </motion.button>
    </div>
  );
};
