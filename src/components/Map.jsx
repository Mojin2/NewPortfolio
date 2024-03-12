import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Map(props) {
  const { nodes, materials } = useGLTF("models/map.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.033}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.summer02palette}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.summer02initialShadingGroup}
          scale={0.658}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/map.glb");
