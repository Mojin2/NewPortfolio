import {
  Box,
  Environment,
  GradientTexture,
  Sphere,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MathUtils, MeshBasicMaterial } from "three";
import { gsap } from "gsap";

export const Background = (props) => {
  const { section } = props;
  const backGroundColor = `linear-gradient(#614385,#516395)`;

  const material = useRef();
  const color = useRef({ color: "#cac3b2" });
  const data = useScroll();

  const tl = useRef();
  // useEffect(() => {
  //   tl.current = gsap.timeline();
  //   tl.current.to(color.current, {
  //     color: "#cac3b2",
  //   });
  //   tl.current.to(color.current, {
  //     color: "#cac3b2",
  //   });
  //   tl.current.to(color.current, {
  //     color: "#cac3b2",
  //   });
  // }, []);
  // useFrame(() => {
  //   tl.current.progress(data.scroll.current);
  //   material.current.color = new THREE.Color(color.current.color);
  // });
  const { viewport } = useThree();
  // return (
  //   <group>
  //     <Sphere scale={[30, 30, 30]}>
  //       <meshBasicMaterial
  //         ref={material}
  //         side={THREE.BackSide}
  //         toneMapped={false}
  //       />
  //     </Sphere>
  //   </group>
  // );
  const segmentMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[viewport.width, viewport.height, 3]} />
        {/* <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={["blue", "green"]} />
        </meshBasicMaterial> */}
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
      <mesh position={[0, -viewport.height, 0]}>
        <boxGeometry args={[viewport.width, viewport.height, 3]} />
        <meshBasicMaterial color="black"></meshBasicMaterial>
      </mesh>
      <mesh position={[0, -viewport.height * 2, 0]}>
        <boxGeometry args={[viewport.width, viewport.height, 3]} />
        {/* <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={["yellow", "red"]} />
        </meshBasicMaterial>{" "} */}
        <meshBasicMaterial color="black"></meshBasicMaterial>
      </mesh>
      <mesh position={[0, -viewport.height * 3, 0]}>
        <boxGeometry args={[viewport.width, viewport.height, 3]} />
        {/* <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={["yellow", "red"]} />
        </meshBasicMaterial>{" "} */}
        <meshBasicMaterial color="black"></meshBasicMaterial>
      </mesh>
    </group>
  );
};
