import { motion } from "framer-motion";
import { ProjectsSlider } from "./ProjectsSlider";
import "../styles/slick-theme.css";
import "../styles/slick.css";
import { useState } from "react";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { About } from "./About";

export const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className=" h-screen w-screen p-32  flex flex-col items-start justify-center  -z-50"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{
      //   opacity: 1,
      //   y: 0,
      //   transition: { duration: 1, delay: 0.6 },
      // }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { section, setSection } = props;
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection section={section} setSection={setSection} />
        <SkillsSection section={section} />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};

const AboutSection = (props) => {
  const { section, setSection } = props;
  return (
    <About setSection={setSection} />
    // <Section>

    //   {/* <motion.button
    //     className={`bg-[#3b5998] text-white py-4 px-8 rounded-lg font-bold text-xl mt-10 hover:bg-white hover:text-[#3b6998] transition-colors duration-100`}
    //     initial={{ opacity: 0, y: 25 }}
    //     whileInView={{
    //       opacity: 1,
    //       y: 0,
    //       transition: { duration: 1, delay: 1.2 },
    //     }}
    //     onClick={() => setSection(3)}
    //   >
    //     Contact Me
    //   </motion.button> */}
    // </Section>
  );
};

export const skills = [
  { title: "JavaScript", level: 85 },
  { title: "HTML + CSS", level: 90 },
  { title: "ReactJS", level: 70 },
  { title: "R3F", level: 20 },
  { title: "TypeScript", level: 30 },
];
const SkillsSection = (props) => {
  const { section } = props;
  const [age, setAge] = useState(29);

  return (
    // <Section>
    //   <motion.div
    //     whileInView={"visible"}
    //     initial={{ opacity: 0 }}
    //     variants={{
    //       visible: {
    //         opacity: 1,
    //         transition: { duration: 1, delay: 1 },
    //       },
    //     }}
    //     className="flex flex-row bg-transparent w-full h-full border-slate-400 border-2"
    //   >
    //     {/* Left */}
    //     <div className="w-1/3 h-full bg-transparent border-2 border-slate-400 border-r-4"></div>
    //     {/* Right */}
    //     <div className="w-2/3 m-2 flex flex-row p-2 border-2 border-blue-500">
    //       {/* Right-Left */}
    //       <div className="w-1/2 h-full ">
    //         {/* Info */}
    //         <div className="h-1/5 border-b-2 border-blue-500 border-w mx-2 flex flex-row ">
    //           <div className="flex flex-col w-full items-center justify-center gap-2">
    //             <div className="flex flex-row w-full">
    //               <div className="relative w-10 h-10 mt-1 bg-slate-600 flex items-center justify-center font-extrabold text-2xl text-white rounded-md">
    //                 <div
    //                   className="h-full bg-blue-700 rounded-md flex justify-center items-center absolute left-0 z-1"
    //                   style={{ width: `${age}%` }}
    //                 />
    //                 <div className="z-0">{age}</div>
    //               </div>
    //               <div className="flex flex-col w-full">
    //                 <div className="flex items-end justify-end">Name</div>
    //                 <div className="relative ml-1 h-5 bg-slate-600 flex items-center justify-center text-white font-bold">
    //                   <div className="absolute left-0  h-5 bg-green-500 w-2/3 z-1" />
    //                   <div className="z-0">187/365</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="border-2 border-black w-full items-center justify-center flex rounded-sm">
    //               14508XP till next level
    //             </div>
    //           </div>
    //           <div className="m-3 border-2 border-black w-2/5 flex justify-center items-center flex-col rounded-sm">
    //             <div className="w-10 h-10 bg-black" />
    //             Developer
    //           </div>
    //         </div>
    //         {/* 특성 */}
    //         <div className="h-2/5 border-b-2 border-blue-500 border-w mx-2 bg-blue-100 "></div>
    //         {/* stat */}
    //         <div className="h-2/5 mx-2 flex items-center justify-center">
    //           <motion.div whileInView={"visible"} className="w-[320px] ">
    //             <div className="w-[320px] ">
    //               {skills.map((skill, index) => (
    //                 <div className="w-80 flex flex-row mb-1" key={index}>
    //                   <motion.h3 className="text-xl font-bold w-56">
    //                     {skill.title}
    //                   </motion.h3>
    //                   <div
    //                     className="h-2.5 w-full bg-slate-400 rounded-full mt-2"
    //                     initial={{ opacity: 0 }}
    //                     variants={{
    //                       visible: {
    //                         opacity: 1,
    //                         transition: { duration: 1, delay: 1 + index * 0.2 },
    //                       },
    //                     }}
    //                   >
    //                     <motion.div
    //                       className="h-full bg-green-500 rounded-full"
    //                       style={{ width: `${skill.level}%` }}
    //                       initial={{ scaleX: 0, originX: 0 }}
    //                       variants={{
    //                         visible: {
    //                           scaleX: 1,
    //                           transition: {
    //                             duration: 1,
    //                             delay: 1 + index * 0.2,
    //                           },
    //                         },
    //                       }}
    //                     />
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </motion.div>
    //         </div>
    //       </div>
    //       {/* Right-Right */}
    //       <div className="w-1/2 h-full border-blue-500 border-2 rounded-md bg-blue-100"></div>
    //     </div>
    //     {/* tmp */}
    //     {/* Info */}
    //     {/* <motion.div className="">
    //       <h2 className="text-3xl font-bold bg-white italic text-slate-950 w-[85px] px-4 py-2">
    //         Info.
    //       </h2>
    //       <div className="flex flex-row gap-12  font-bold  w-[390px]  text-slate-100 px-4 py-3 ">
    //         <div>
    //           <p>Name:</p>
    //           <p className="text-2xl">JeenGyu</p>
    //         </div>
    //         <div>
    //           <p>Age:</p>
    //           <p className="text-2xl">1996.03</p>
    //         </div>
    //         <div>
    //           <p>From:</p>
    //           <p className="text-2xl">Korea</p>
    //         </div>
    //       </div>
    //     </motion.div> */}
    //     {/* Skills */}
    // {/* <motion.div whileInView={"visible"} className="w-[450px] py-8 ">
    //   <h2 className="text-3xl font-bold bg-white italic text-slate-950 w-[110px] px-4 py-2 ">
    //     Skills.
    //   </h2>
    //   <div className="w-[420px] text-slate-100 px-4 py-4">
    //     {skills.map((skill, index) => (
    //       <div className="w-96 flex flex-row mb-1" key={index}>
    //         <motion.h3 className="text-xl font-bold w-56">
    //           {skill.title}
    //         </motion.h3>
    //         <div
    //           className="h-2.5 w-full bg-slate-200 rounded-full mt-2"
    //           initial={{ opacity: 0 }}
    //           variants={{
    //             visible: {
    //               opacity: 1,
    //               transition: { duration: 1, delay: 1 + index * 0.2 },
    //             },
    //           }}
    //         >
    //           <motion.div
    //             className="h-full bg-red-500 rounded-full"
    //             style={{ width: `${skill.level}%` }}
    //             initial={{ scaleX: 0, originX: 0 }}
    //             variants={{
    //               visible: {
    //                 scaleX: 1,
    //                 transition: { duration: 1, delay: 1 + index * 0.2 },
    //               },
    //             }}
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </motion.div> */}
    //     {/* About */}
    //     {/* <motion.div className="flex flex-col text-slate-100 font-bold  w-[450px] py-8">
    //       <div className="bg-white italic text-slate-950 text-3xl  w-[120px] px-4 py-2 ">
    //         About.
    //       </div>
    //       <div className="flex gap-2 flex-col w-[420px] px-4 py-4">
    //         <div>
    //           At the age of 15, David first came in touch with UX Design and app
    //           development.
    //         </div>
    //         <div>
    //           During his 4years of military service, programming has always been
    //           a passion of his.
    //         </div>
    //       </div>
    //     </motion.div> */}
    //   </motion.div>
    // </Section>
    <Skills section={section} />
  );
};

export const projects = [
  {
    title: "title1",
    url: "projects/yellow.jpeg",
    image: "imgsrc1",
    languages: ["JavaScript", "HTML", "CSS"],
    description: "explain1",
  },
  {
    title: "title2",
    url: "projects/yellow.jpeg",
    image: "imgsrc2",
    languages: ["JavaScript", "HTML", "CSS"],
    description: "explain2",
  },
  {
    title: "title3",
    url: "projects/yellow.jpeg",
    image: "imgsrc3",
    languages: ["JavaScript", "React", "HTML", "CSS"],
    description: "explain3",
  },
  {
    title: "title4",
    url: "projects/yellow.jpeg",
    image: "imgsrc4",
    languages: ["JavaScript", "HTML", "CSS"],
    description: "explain4",
  },
  {
    title: "title5",
    url: "projects/yellow.jpeg",
    image: "imgsrc5",
    languages: ["JavaScript", "HTML", "CSS"],
    description: "explain5",
  },
];
export const items = ["1", "2", "3", "4", "5"];
const ProjectsSection = () => {
  return <ProjectsSlider projects={projects} />;
};

const ContactSection = () => {
  return <Contact />;
};

// const ProjectsSection = () => {
//   // const [currentProject, setCurrnetProject] = useAtom(currentProjectAtom);
//   // const nextProject = () => {
//   //   setCurrnetProject((currentProject + 1) % projects.length);
//   // };
//   // const previousProject = () => {
//   //   setCurrnetProject((currentProject - 1 + projects.length) % projects.length);
//   // };
//   return (
//     <Section>
//       {/* <div className="flex w-full h-full gap-8 justify-center mt-32 pr-10">
//         <button
//           className="hover:text-indigo-600 transition-colors text-slate-100 h-12"
//           onClick={previousProject}
//         >
//           previous
//         </button>
//         <h2 className="text-5xl font-bold text-slate-100">Projects</h2>
//         <button
//           className="hover:text-indigo-600 transition-colors text-slate-100 h-12"
//           onClick={nextProject}
//         >
//           Next
//         </button>
//       </div> */}
//     </Section>
//   );
// };
