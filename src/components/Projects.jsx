// import { Image, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { animate, useMotionValue } from "framer-motion";
// import { motion } from "framer-motion-3d";
// import { useAtom, atom } from "jotai";
// import { useEffect, useRef } from "react";

// export const projects = [
//   {
//     title: "title1",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc1",
//     description: "explain1",
//   },
//   {
//     title: "title2",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc2",
//     description: "explain2",
//   },
//   {
//     title: "title3",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc3",
//     description: "explain3",
//   },
//   {
//     title: "title4",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc4",
//     description: "explain4",
//   },
//   {
//     title: "title5",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc5",
//     description: "explain5",
//   },
//   {
//     title: "title6",
//     url: "projects/yellow.jpeg",
//     image: "imgsrc6",
//     description: "explain6",
//   },
// ];

// export const Projects = (props) => {
//   const { viewport } = useThree();
//   const [currentProject] = useAtom(currentProjectAtom);

//   return (
//     <group position-y={-viewport.height * 2}>
//       {projects.map((project, index) => (
//         <motion.group
//           key={"project_" + index}
//           position={[index * 2.5, 0, -3]}
//           animate={{
//             x: 0 + (index - currentProject) * 2.5,
//             y: currentProject === index ? 0 : -0.1,
//             z: currentProject === index ? -2 : -3,
//           }}
//         >
//           <Project project={project} highlighted={index === currentProject} />
//         </motion.group>
//       ))}
//     </group>
//   );
// };

// export const currentProjectAtom = atom(0);
// export const Project = (props) => {
//   const { project, highlighted } = props;
//   const background = useRef();
//   const bgOpacity = useMotionValue(0.4);
//   useEffect(() => {
//     animate(bgOpacity, highlighted ? 1 : 0.4);
//   }, [highlighted]);
//   useFrame(() => {
//     background.current.material.opacity = bgOpacity.get();
//   });
//   return (
//     <group {...props}>
//       <mesh
//         position-z={-0.001}
//         onClick={() => window.open(project.url, "_blank")}
//         ref={background}
//       >
//         <planeGeometry args={[3, 6]} />
//         <meshBasicMaterial color="black" transparent opacity={0.4} />
//       </mesh>
//       <Image
//         scale={[2, 1.2, 1]}
//         url={project.url}
//         toneMapped={false}
//         position-y={0.3}
//       />
//       <Text
//         maxWidth={2}
//         anchorX={"left"}
//         anchorY={"top"}
//         fontSize={0.2}
//         position={[-1, -0.3, 0]}
//       >
//         {project.title.toUpperCase()}
//       </Text>
//     </group>
//   );
// };
