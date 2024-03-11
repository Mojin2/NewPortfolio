import { Leva, useControls } from "leva";
import { Avatar } from "./Avatar";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Office } from "./Office";
import {
  Circle,
  Environment,
  Html,
  OrbitControls,
  Sky,
  Sphere,
  useScroll,
} from "@react-three/drei";
import { Boy } from "./Boy";
import { Room } from "./Room";
import { Space } from "./Space";
import * as THREE from "three";
import { Background } from "./Background";
import { Lab } from "./Lab";
import { BubbleAnimation } from "./BubbleAnimation";
import { Rock } from "./Rock";
import { Board } from "./Board";
import { Shinchang } from "./ShinChang";

export const Experience = (props) => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing", "Nervous", "Dancing"],
    },
  });
  const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const data = useScroll();
  const { menuOpened } = props;
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? 0 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 0 : 0, { ...framerMotionConfig });
    // cameraPositionX.set(section === 0 ? 0 : 1.5);
    // cameraLookAtX.set(section === 0 ? 0 : 1.5);
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }
    if (curSection !== section) {
      setSection(curSection);
    }
    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);
    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
    // console.log([euler.x, euler.y, euler.z]);
  });
  return (
    <>
      <Background section={section} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 10, 10]} />
      {/* character */}

      {/* <motion.group
        rotation={[0, -0.7853981633974485, 0]}
        position={[2.0106066017177984, 0.64125, 3.1249553582816474]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.75,
            scaleY: 0.75,
            scaleZ: 0.75,
            x: 2.0106066017177984,
            y: 0.64125,
            z: 4.1249553582816474,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: -Math.PI / 2 + 1,
          },
          1: {
            scaleX: 0.65,
            scaleY: 0.65,
            scaleZ: 0.65,
            y: -viewport.height + 0.9,
            x: -1.85,
            z: 5.5,
            rotateX: Math.PI / 40,
            rotateY: -Math.PI / 2 - 1.1,
            rotateZ: Math.PI / 20,
          },
          2: {
            y: -viewport.height * 2 + 0.1,
            x: -3,
            z: 0,
            rotateX: 0,
            rotateY: -Math.PI / 4 - 1,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.5,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI,
            rotateZ: 0,
            scaleX: 0.8,
            scaleY: 0.8,
            scaleZ: 0.8,
          },
        }}
      >
        <ambientLight intensity={0.7} />
        <Shinchang animation={characterAnimation} />
      </motion.group> */}
      <motion.group
        rotation={[0, 0, 0]}
        position={[2.0106066017177984, 0.64125, 3.1249553582816474]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.75,
            scaleY: 0.75,
            scaleZ: 0.75,
            x: 2.0106066017177984,
            y: 0.64125,
            z: 4.1249553582816474,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI,
          },
          1: {
            scaleX: 0.65,
            scaleY: 0.65,
            scaleZ: 0.65,
            y: -viewport.height + 0.9,
            x: -1.85,
            z: 5.5,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI,
          },
          2: {
            y: -viewport.height * 2 + 0.1,
            x: -3,
            z: 0,
            rotateX: 0,
            rotateY: -Math.PI / 4 - 1,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 2,
            x: 0.5,
            z: 8.5,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI,
            scaleX: 0.8,
            scaleY: 0.8,
            scaleZ: 0.8,
          },
        }}
      >
        <Shinchang animation={characterAnimation} />
      </motion.group>
      {/* <motion.group
        position={[0, -viewport.height, 2]}
        scale={5}
        rotation-y={-Math.PI + 1.6}
        rotation-x={Math.PI}
        rotation-z={Math.PI}
      >
        <Board />
      </motion.group> */}
      {/* Room */}
      {/* <motion.group
        animate={{ y: section === 0 ? 0 : -1 }}
        position={[2, -1.5, 5]}
        rotation-y={-(Math.PI / 2) * 0.5}
        scale={0.75}
      >
        <Space />
      </motion.group> */}
      {/* Lab */}
      {/* <motion.group
        position={[-1.75, -viewport.height + 0.8, 5.5]}
        rotation-y={-Math.PI}
        rotation-z={Math.PI / 30}
        scale={0.25}
      >
        <Rock />
      </motion.group> */}
      {/* <gridHelper args={[10, 10]} />
      <axesHelper args={[8]} /> */}
    </>
  );
};
