import { Leva, useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Circle, Environment, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { Background } from "./Background";
import { Mine } from "./Mine";
import { Totoro } from "./Totoro";

export const Experience = (props) => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: [
        "Typing",
        "Falling",
        "Standing",
        "Nervous",
        "Dancing",
        "Sitting",
        "Landing",
      ],
    },
  });

  const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Standing");
  const data = useScroll();
  const { menuOpened } = props;
  const { viewport } = useThree();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const totoroScaleRatio = Math.max(0.7, Math.min(0.9 * responsiveRatio, 0.9));

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

    // const position = new THREE.Vector3();
    // console.log([position.x, position.y, position.z]);
    if (section === 0) {
      characterContainerGroup.current.getWorldPosition(
        characterGroup.current.position
      );
    }
    // const quaternion = new THREE.Quaternion();
    // characterContainerGroup.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
    // console.log([euler.x, euler.y, euler.z]);
  });

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        section === 0 ? "Sitting" : section === 3 ? "Dancing" : "Standing"
      );
    }, 600);
  }, [section]);
  const characterContainerGroup = useRef();
  const characterGroup = useRef();
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }
    if (curSection !== section) {
      setSection(curSection);
    }
  });
  return (
    <>
      <Background section={section} />
      <directionalLight intensity={1} position={[0, 0, 0]} />
      <Environment preset="sunset" />
      {/* character */}
      <motion.group
        ref={characterGroup}
        scale={[totoroScaleRatio, totoroScaleRatio, totoroScaleRatio]}
        rotation={[0, 0, 0]}
        // position={[2.0106066017177984, 0.64125, 3.1249553582816474]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: totoroScaleRatio * 0.3,
            scaleY: totoroScaleRatio * 0.3,
            scaleZ: totoroScaleRatio * 0.3,
            x: 1.5706066017177984,
            y: 0.5,
            z: 4.1249553582816474,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI,
          },
          1: {
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
            y: -viewport.height + 0.5,
            x: isMobile ? 0 : -1.05,
            z: 5.5,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI + 0.3,
          },
          2: {
            y: -viewport.height * 2 + 0.1,
            x: -3,
            z: 0,
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            rotateX: 0,
            rotateY: -Math.PI / 4 - 1,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: isMobile ? 0.12 : 0.8,
            z: 7,
            rotateX: Math.PI / 2,
            rotateY: Math.PI,
            rotateZ: Math.PI,
            scaleX: totoroScaleRatio * 0.5,
            scaleY: totoroScaleRatio * 0.5,
            scaleZ: totoroScaleRatio * 0.5,
          },
        }}
      >
        <Mine animation={characterAnimation} />
      </motion.group>
      {/* Room */}
      <motion.group
        animate={{ y: isMobile ? -viewport.height / 6 + 0.2 : 0 }}
        position={[
          isMobile ? -0.15 : 0.8 * totoroScaleRatio,
          isMobile ? -viewport.height / 6 : 3,
          4,
        ]}
        scale={totoroScaleRatio * 0.5}
      >
        <Totoro />
        <group
          ref={characterContainerGroup}
          name="CharacterSpot"
          position={[1.3, 1, 1]}
        ></group>
      </motion.group>
    </>
  );
};
