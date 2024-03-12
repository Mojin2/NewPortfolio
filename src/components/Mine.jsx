import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import * as THREE from "three";

export function Mine(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/mine.glb");

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx");
  const { animations: fallingAnimation } = useFBX("animations/Falling.fbx");
  const { animations: nervousAnimation } = useFBX("animations/Nervous.fbx");
  const { animations: dancingAnimation } = useFBX("animations/Dancing.fbx");
  const { animations: sittingAnimation } = useFBX("animations/Sitting.fbx");
  const { animations: landingAnimation } = useFBX("animations/Landing.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";
  nervousAnimation[0].name = "Nervous";
  dancingAnimation[0].name = "Dancing";
  sittingAnimation[0].name = "Sitting";
  landingAnimation[0].name = "Landing";

  const { actions } = useAnimations(
    [
      typingAnimation[0],
      standingAnimation[0],
      fallingAnimation[0],
      nervousAnimation[0],
      dancingAnimation[0],
      sittingAnimation[0],
      landingAnimation[0],
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
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.058}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="SPS_0" />
            </group>
          </group>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Object_4"
            geometry={nodes.Object_4.geometry}
            material={materials["export.001"]}
            skeleton={nodes.Object_4.skeleton}
          />
          <skinnedMesh
            name="Object_5"
            geometry={nodes.Object_5.geometry}
            material={materials["export.001"]}
            skeleton={nodes.Object_5.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/mine.glb");
