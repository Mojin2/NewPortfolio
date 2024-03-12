import { motion } from "framer-motion-3d";
import { TypeAnimation } from "react-type-animation";

export const About = (props) => {
  const { setSection } = props;
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-center p-32">
      <h1 className="text-[80px] font-extrabold leading-snug text-slate-100 font-PixelThick text-shadow-md">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic text-slate-950">Jeengyu.</span>
      </h1>
      <motion.p
        className="text-[40px] text-slate-100 mt-4 font-semibold font-PixelThick text-shadow-md"
        // initial={{ opacity: 0, y: 25 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: { duration: 1, delay: 0.5 },
        // }}
      >
        <TypeAnimation
          sequence={[1000, "I'm frontend developer"]}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            2000,
            "with Creative ideas",
            1000,
            "with Passionate attitude",
            1000,
            "with Cooperation with Team",
          ]}
        />
      </motion.p>
      <motion.div
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
      </motion.div>
    </div>
  );
};
