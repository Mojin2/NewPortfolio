import { motion } from "framer-motion-3d";
export const About = (props) => {
  const { setSection } = props;
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-center p-32">
      <h1 className="text-6xl font-extrabold leading-snug text-slate-100 font-PixelThick">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic text-slate-950">Jeengyu.</span>
      </h1>
      <motion.p
        className="text-2xl text-slate-100 mt-4 font-semibold font-PixelThick"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1 },
        }}
      >
        I'm frontend developer
        <br />
        with creative ideas.
      </motion.p>
      <motion.div
        className="grid grid-cols-2 text-slate-50 font-PixelThick text-4xl gap-x-6 gap-y-3 mt-20"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        <div onClick={() => setSection(0)} className="cursor-pointer">
          Home
        </div>
        <div onClick={() => setSection(1)} className="cursor-pointer">
          About
        </div>
        <div onClick={() => setSection(2)} className="cursor-pointer">
          Project
        </div>
        <div onClick={() => setSection(3)} className="cursor-pointer">
          Contact
        </div>
      </motion.div>
    </div>
  );
};
