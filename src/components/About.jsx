import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MovingComponent } from "react-moving-text";

export const About = (props) => {
  const { setSection } = props;
  return (
    <div className="h-screen w-screen flex flex-col pl-16 items-start justify-start md:justify-center md:pl-32">
      <h1 className="text-[60px] md:text-[80px] font-extrabold text-slate-950 font-PixelThick flex flex-col mt-12 md:mt-0">
        <div>Hi, I'm</div>
        <div>JeenGyu.</div>
      </h1>
      <motion.p
        className="text-[30px] md:text-[40px] text-slate-950 mt-4 font-semibold font-PixelThick"
        // initial={{ opacity: 0, y: 25 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: { duration: 1, delay: 0.5 },
        // }}
      >
        <div>I Am Frontend Developer</div>
      </motion.p>
      <motion.button
        className="mt-4 text-2xl px-3 py-2 md:px-3 md:py-5 bg-[#7f1423] font-PixelThick flex justify-center items-center text-slate-50 shadow-md md:text-3xl rounded-md md:mt-10"
        onClick={() => setSection(3)}
        whileTap={{ scale: 0.85 }}
      >
        Play with Me?
      </motion.button>
    </div>
  );
};
