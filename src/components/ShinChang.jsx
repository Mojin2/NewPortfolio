import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import * as THREE from "three";

export function Shinchang(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/shinchang.glb");

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx");
  const { animations: fallingAnimation } = useFBX("animations/Falling.fbx");
  const { animations: nervousAnimation } = useFBX("animations/Nervous.fbx");
  const { animations: dancingAnimation } = useFBX("animations/Dancing.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";
  nervousAnimation[0].name = "Nervous";
  dancingAnimation[0].name = "Dancing";

  const { actions } = useAnimations(
    [
      typingAnimation[0],
      standingAnimation[0],
      fallingAnimation[0],
      nervousAnimation[0],
      dancingAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={89.362}
        >
          <group
            name="Shinchan_Modelsfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode1">
              <group name="Cube_005" rotation={[-Math.PI / 2, 0, 0]} />
            </group>
          </group>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Cube_005_Material_0"
            geometry={nodes.Cube_005_Material_0.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube_005_Material_0.skeleton}
          />
          <skinnedMesh
            name="Cube_005_Material_001_0"
            geometry={nodes.Cube_005_Material_001_0.geometry}
            material={materials.Material_001}
            skeleton={nodes.Cube_005_Material_001_0.skeleton}
          />
          <skinnedMesh
            name="Cube_005_Material_002_0"
            geometry={nodes.Cube_005_Material_002_0.geometry}
            material={materials.Material_002}
            skeleton={nodes.Cube_005_Material_002_0.skeleton}
          />
          <skinnedMesh
            name="Cube_005_Material_003_0"
            geometry={nodes.Cube_005_Material_003_0.geometry}
            material={materials.Material_003}
            skeleton={nodes.Cube_005_Material_003_0.skeleton}
          />
          <skinnedMesh
            name="Cube_005_Material_004_0"
            geometry={nodes.Cube_005_Material_004_0.geometry}
            material={materials.Material_004}
            skeleton={nodes.Cube_005_Material_004_0.skeleton}
          />
          <skinnedMesh
            name="Cube_005_UV1_003_0"
            geometry={nodes.Cube_005_UV1_003_0.geometry}
            material={materials.UV1_003}
            skeleton={nodes.Cube_005_UV1_003_0.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/shinchang.glb");
