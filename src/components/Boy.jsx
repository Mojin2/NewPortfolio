/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Boy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/boy.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[1.033, -0.271, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3.278}
        >
          <group
            name="d0ef1eca675f49b482f6b01848728148fbx"
            rotation={[Math.PI, 0, 0]}
          >
            <group name="RootNode1">
              <group
                name="Female_Armature"
                position={[0.343, 0.044, 0]}
                rotation={[0, 0, -0.581]}
              />
              <group
                name="Male_Armature"
                position={[-0.328, 0.094, 0]}
                rotation={[0, 0, 0.416]}
              />
            </group>
          </group>
        </group>
        <group
          name="Object_71"
          position={[-0.042, 0.038, 0]}
          rotation={[0, 0, 0.416]}
          scale={3.278}
        />
        <group
          name="Object_73"
          position={[-0.042, 0.038, 0]}
          rotation={[0, 0, 0.416]}
          scale={3.278}
        />
        <group
          name="Object_75"
          position={[-0.042, 0.038, 0]}
          rotation={[0, 0, 0.416]}
          scale={3.278}
        />
        <group
          name="Object_77"
          position={[-0.042, 0.038, 0]}
          rotation={[0, 0, 0.416]}
          scale={3.278}
        />
        <group
          name="Object_79"
          position={[-0.042, 0.038, 0]}
          rotation={[0, 0, 0.416]}
          scale={3.278}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Object_74"
            geometry={nodes.Object_74.geometry}
            material={materials.Male}
            skeleton={nodes.Object_74.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/boy.glb");