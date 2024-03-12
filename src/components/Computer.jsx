import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("models/computer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.pasokon}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.terrarium1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.terrarium1ame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.terrarium1ameoutline}
      />
    </group>
  );
}

useGLTF.preload("models/computer.glb");
